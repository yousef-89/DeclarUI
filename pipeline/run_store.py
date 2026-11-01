"""Persistent history of refinement runs (SQLite + one folder per run).

Every run gets a row in `runs` and one row per iteration in `iterations`, with
its metrics, status, model notes (diagnosis / plan / judge verdict), and paths
to the render, source snapshot, and prompt stored in output/<app>/runs/<run_id>/.
metrics_tracker.csv is still written for compatibility; the database is the
place to query, compare, and export results.
"""

import csv
import json
import sqlite3
from datetime import datetime
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DB_PATH = PROJECT_ROOT / "output" / "history.db"

SCHEMA = """
CREATE TABLE IF NOT EXISTS runs (
    run_id TEXT PRIMARY KEY,
    app TEXT NOT NULL,
    component TEXT NOT NULL,
    mode TEXT NOT NULL,
    model TEXT,
    judge_model TEXT,
    instruction TEXT,
    target_path TEXT,
    run_dir TEXT,
    started_at TEXT,
    finished_at TEXT,
    status TEXT,
    error TEXT,
    max_iterations INTEGER,
    best_iteration INTEGER,
    baseline_ssim REAL,
    baseline_content_ssim REAL,
    baseline_clip REAL,
    final_ssim REAL,
    final_content_ssim REAL,
    final_clip REAL,
    final_edit_compliance REAL,
    final_preservation REAL,
    condition TEXT,
    batch_id TEXT
);
CREATE TABLE IF NOT EXISTS iterations (
    run_id TEXT NOT NULL REFERENCES runs(run_id) ON DELETE CASCADE,
    iteration INTEGER NOT NULL,
    status TEXT,
    ssim REAL,
    content_ssim REAL,
    clip REAL,
    edit_compliance REAL,
    preservation REAL,
    render_path TEXT,
    source_path TEXT,
    prompt_path TEXT,
    notes TEXT,
    judge TEXT,
    error TEXT,
    created_at TEXT,
    PRIMARY KEY (run_id, iteration)
);
"""

# Columns added after the first release; connect() adds them to older databases.
ADDED_RUN_COLUMNS = {"condition": "TEXT", "batch_id": "TEXT"}

RUN_COLUMNS = [
    "run_id", "app", "component", "mode", "condition", "batch_id", "model",
    "instruction", "started_at",
    "finished_at", "status", "max_iterations", "best_iteration",
    "baseline_ssim", "baseline_content_ssim", "baseline_clip",
    "final_ssim", "final_content_ssim", "final_clip",
    "final_edit_compliance", "final_preservation", "error",
]


def now():
    return datetime.now().isoformat(timespec="seconds")


def connect(db_path=DB_PATH):
    db_path.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(db_path)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    existing = {row["name"] for row in connection.execute("PRAGMA table_info(runs)")}
    if existing:
        for column, column_type in ADDED_RUN_COLUMNS.items():
            if column not in existing:
                connection.execute(f"ALTER TABLE runs ADD COLUMN {column} {column_type}")
    connection.executescript(SCHEMA)
    return connection


class RunRecorder:
    """Records one refinement run while it executes."""

    def __init__(self, app, component, mode, model, target_path, max_iterations,
                 instruction="", judge_model=None, condition=None, batch_id=None,
                 db_path=DB_PATH):
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        self.run_id = f"{stamp}-{component}" + (f"-{condition}" if condition else "")
        self.app = app
        self.component = component
        self.mode = mode
        self.model = model
        self.condition = condition
        self.batch_id = batch_id
        self.run_dir = PROJECT_ROOT / "output" / app / "runs" / self.run_id
        self.db_path = db_path
        with connect(db_path) as connection:
            connection.execute(
                "INSERT INTO runs (run_id, app, component, mode, model, judge_model,"
                " instruction, target_path, run_dir, started_at, status, max_iterations,"
                " condition, batch_id)"
                " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'running', ?, ?, ?)",
                (self.run_id, app, component, mode, model, judge_model,
                 instruction or None, str(target_path), str(self.run_dir), now(),
                 max_iterations, condition, batch_id),
            )

    @property
    def output_name(self):
        """Run folder relative to output/<app>/, as the renderer expects."""
        return f"runs/{self.run_id}"

    def iteration_dir(self, iteration):
        return self.run_dir / f"iteration-{iteration}"

    def record_iteration(self, iteration, result, status, error=None, judge=None):
        directory = self.iteration_dir(iteration)
        notes = next(
            (
                (directory / name).read_text(encoding="utf-8")
                for name in ("diagnosis.txt", "plan.txt")
                if (directory / name).exists()
            ),
            None,
        )
        source = next(directory.glob("*.source.js"), None) if directory.exists() else None
        prompt = directory / "prompt.txt"
        result = result or {}
        with connect(self.db_path) as connection:
            connection.execute(
                "INSERT OR REPLACE INTO iterations VALUES"
                " (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (
                    self.run_id, iteration, status,
                    result.get("ssim"), result.get("content_ssim"),
                    result.get("clip_similarity"), result.get("edit_compliance"),
                    result.get("preservation"), result.get("render"),
                    str(source) if source else None,
                    str(prompt) if prompt.exists() else None,
                    notes, json.dumps(judge) if judge else None, error, now(),
                ),
            )

    def finish(self, baseline=None, best=None, best_iteration=None, status="completed", error=None):
        baseline = baseline or {}
        best = best or {}
        with connect(self.db_path) as connection:
            connection.execute(
                "UPDATE runs SET finished_at = ?, status = ?, error = ?,"
                " best_iteration = ?, baseline_ssim = ?, baseline_content_ssim = ?,"
                " baseline_clip = ?, final_ssim = ?, final_content_ssim = ?,"
                " final_clip = ?, final_edit_compliance = ?, final_preservation = ?"
                " WHERE run_id = ?",
                (
                    now(), status, error, best_iteration,
                    baseline.get("ssim"), baseline.get("content_ssim"),
                    baseline.get("clip_similarity"), best.get("ssim"),
                    best.get("content_ssim"), best.get("clip_similarity"),
                    best.get("edit_compliance"), best.get("preservation"),
                    self.run_id,
                ),
            )


def run_source(run):
    """Where a run came from: the dashboard, an evaluation batch, or the old CSV."""
    if run.get("batch_id"):
        return "evaluation"
    if str(run.get("run_id", "")).startswith("imported-") or run.get("status") == "imported":
        return "legacy"
    return "dashboard"


def mark_interrupted_runs(max_age_hours=2, db_path=DB_PATH):
    """Close runs left 'running' by a process that stopped (e.g. a closed app)."""
    cutoff = datetime.fromtimestamp(datetime.now().timestamp() - max_age_hours * 3600)
    with connect(db_path) as connection:
        connection.execute(
            "UPDATE runs SET status = 'interrupted', error = COALESCE(error,"
            " 'The run stopped before finishing (app closed or process killed).')"
            " WHERE status = 'running' AND started_at < ?",
            (cutoff.isoformat(timespec="seconds"),),
        )


def list_runs(db_path=DB_PATH):
    with connect(db_path) as connection:
        return [dict(row) for row in connection.execute(
            "SELECT * FROM runs ORDER BY started_at DESC"
        )]


def get_run(run_id, db_path=DB_PATH):
    with connect(db_path) as connection:
        run = connection.execute("SELECT * FROM runs WHERE run_id = ?", (run_id,)).fetchone()
        iterations = connection.execute(
            "SELECT * FROM iterations WHERE run_id = ? ORDER BY iteration", (run_id,)
        ).fetchall()
    return (dict(run) if run else None), [dict(row) for row in iterations]


def list_iterations(db_path=DB_PATH):
    with connect(db_path) as connection:
        return [dict(row) for row in connection.execute(
            "SELECT r.app, r.component, r.mode, r.model, i.* FROM iterations i"
            " JOIN runs r USING (run_id) ORDER BY i.run_id, i.iteration"
        )]


def delete_run(run_id, db_path=DB_PATH):
    with connect(db_path) as connection:
        connection.execute("DELETE FROM runs WHERE run_id = ?", (run_id,))


def import_tracker_csv(csv_path, model=None, db_path=DB_PATH):
    """Import metric rows from metrics_tracker.csv as metrics-only runs.

    Rows are grouped per app/component, starting a new run at iteration 0, so
    runs that were logged concurrently are still separated correctly.
    """
    csv_path = Path(csv_path)
    if not csv_path.exists():
        return 0
    with csv_path.open(newline="", encoding="utf-8") as file:
        rows = list(csv.DictReader(file))
    if not rows or "Iteration Number" not in rows[0]:
        return 0

    def number(value):
        try:
            return float(value)
        except (TypeError, ValueError):
            return None

    groups = []
    open_groups = {}
    for row in rows:
        key = (row["App"], row["Component"])
        if row["Iteration Number"] == "0" or key not in open_groups:
            open_groups[key] = []
            groups.append((key, open_groups[key]))
        open_groups[key].append(row)

    imported = 0
    with connect(db_path) as connection:
        for index, ((app, component), group) in enumerate(groups):
            run_id = f"imported-{csv_path.stem}-{index:04d}-{component}"
            if connection.execute("SELECT 1 FROM runs WHERE run_id = ?", (run_id,)).fetchone():
                continue
            mode = group[0].get("Mode") or "fidelity"
            metrics = [
                {
                    "iteration": int(row["Iteration Number"]),
                    "status": row.get("Status") or "",
                    "ssim": number(row.get("SSIM")),
                    "content_ssim": number(row.get("Content SSIM")),
                    "clip": number(row.get("CLIP")),
                    "edit_compliance": number(row.get("Edit Compliance")),
                    "preservation": number(row.get("Preservation")),
                }
                for row in group
            ]
            scored = [m for m in metrics if m["ssim"] is not None]
            baseline = scored[0] if scored else {}
            # The kept version is the last baseline/improved row, as logged.
            kept = [m for m in scored if m["status"] in {"baseline", "improved", "user_edit"}]
            best = (kept or scored or [{}])[-1]
            connection.execute(
                "INSERT INTO runs (run_id, app, component, mode, model, status, started_at,"
                " max_iterations, best_iteration, baseline_ssim, baseline_content_ssim,"
                " baseline_clip, final_ssim, final_content_ssim, final_clip)"
                " VALUES (?, ?, ?, ?, ?, 'imported', NULL, ?, ?, ?, ?, ?, ?, ?, ?)",
                (
                    run_id, app, component, mode, group[0].get("Model") or model,
                    len(metrics) - 1,
                    best.get("iteration"), baseline.get("ssim"),
                    baseline.get("content_ssim"), baseline.get("clip"),
                    best.get("ssim"), best.get("content_ssim"), best.get("clip"),
                ),
            )
            connection.executemany(
                "INSERT INTO iterations (run_id, iteration, status, ssim, content_ssim,"
                " clip, edit_compliance, preservation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    (run_id, m["iteration"], m["status"], m["ssim"], m["content_ssim"],
                     m["clip"], m["edit_compliance"], m["preservation"])
                    for m in metrics
                ],
            )
            imported += 1
    return imported
