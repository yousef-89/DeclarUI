"""Batch evaluation for the thesis: one-shot generation vs. the refinement loop.

For every target screenshot the screen is generated once from scratch; each
condition then starts from that same generated code, so the conditions are
paired per screen:

  oneshot       iteration 0 only (generate, render, score; no refinement)
  loop          full closed loop with the SSIM guardrail and rollback
  loop-noguard  same loop without the guardrail (ablation); last pass is kept

One row per screen and condition is appended to output/evaluation/results.csv
together with the exact setup (model, git commit, prompt hash, thresholds), and
a manifest.json is written per batch. Per-iteration trajectories are recorded
in output/history.db and metrics_tracker.csv as usual, tagged with the
condition and batch id.

Examples:
  python evaluate_batch.py --apps Breadfast Spotify
  python evaluate_batch.py --apps Breadfast --conditions oneshot loop loop-noguard
  python evaluate_batch.py --resume 20261101-220000-gemini-3.8-flash
"""

import argparse
import csv
import hashlib
import json
import platform
import shutil
import statistics
import subprocess
import sys
import time
from datetime import datetime

import run_pipeline
from pipeline import run_store
from pipeline.visual_refine import MODEL, PROMPT_DIR
from run_pipeline import PROJECT_ROOT

CONDITIONS = {
    "oneshot": {"refine": False, "guardrail": True},
    "loop": {"refine": True, "guardrail": True},
    "loop-noguard": {"refine": True, "guardrail": False},
}
EVALUATION_DIR = PROJECT_ROOT / "output" / "evaluation"
RESULTS_PATH = EVALUATION_DIR / "results.csv"
EXCLUDED_APPS = {"user_uploads", "UploadedApp"}
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg"}
# Paths whose uncommitted changes would make a commit hash misleading.
CODE_PATHS = ["run_pipeline.py", "evaluate_batch.py", "pipeline", "renderer", "src/App.js", "public"]
RESULT_COLUMNS = [
    "Batch ID", "Timestamp", "App", "Screen", "Repeat", "Condition", "Model",
    "Commit", "Code Dirty", "Prompts Hash", "Max Iterations", "Guardrail",
    "SSIM Threshold", "Content SSIM Threshold", "Max SSIM Regression",
    "Status", "Best Iteration", "Iterations Run", "Rejected", "Render Failures",
    "Baseline SSIM", "SSIM", "Content SSIM", "CLIP",
    "API Calls", "Generation API Calls", "Seconds", "Run ID", "Error",
]


def parse_args():
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--apps", nargs="+", help="App folders in Dataset/targets (default: all).")
    parser.add_argument("--screens", nargs="+", help="Only these target file stems, e.g. IMG_9052.")
    parser.add_argument(
        "--conditions", nargs="+", choices=list(CONDITIONS), default=["oneshot", "loop"],
        help="Conditions to run per screen (default: oneshot loop).",
    )
    parser.add_argument("--max-iterations", type=int, default=3, help="Refinement passes for loop conditions.")
    parser.add_argument("--repeats", type=int, default=1, help="Independent generations per screen (default 1).")
    parser.add_argument("--model", default=MODEL, help=f"Gemini model (default from .env: {MODEL}).")
    parser.add_argument("--label", default="", help="Optional label added to the batch id.")
    parser.add_argument("--resume", metavar="BATCH_ID", help="Continue an interrupted batch with its settings.")
    arguments = parser.parse_args()
    if arguments.max_iterations < 1 or arguments.repeats < 1:
        parser.error("--max-iterations and --repeats must be at least 1.")
    return arguments


def git(*args):
    result = subprocess.run(["git", *args], cwd=PROJECT_ROOT, capture_output=True, text=True)
    return result.stdout.strip() if result.returncode == 0 else ""


def prompts_hash():
    digest = hashlib.sha256()
    for path in sorted(PROMPT_DIR.glob("*.txt")):
        digest.update(path.name.encode())
        digest.update(path.read_bytes())
    return digest.hexdigest()[:12]


def build_manifest(arguments, batch_id):
    return {
        "batch_id": batch_id,
        "started_at": datetime.now().isoformat(timespec="seconds"),
        "model": arguments.model,
        "apps": arguments.apps,
        "screens": arguments.screens,
        "conditions": arguments.conditions,
        "repeats": arguments.repeats,
        "max_iterations": arguments.max_iterations,
        "commit": git("rev-parse", "HEAD"),
        "branch": git("rev-parse", "--abbrev-ref", "HEAD"),
        "code_dirty": bool(git("status", "--porcelain", "--", *CODE_PATHS)),
        "prompts_hash": prompts_hash(),
        "parameters": {
            "ssim_threshold": run_pipeline.SSIM_THRESHOLD,
            "content_ssim_threshold": run_pipeline.CONTENT_SSIM_THRESHOLD,
            "max_ssim_regression": run_pipeline.MAX_SSIM_REGRESSION,
            "temperature": "model default for code generation, 0 for JSON (inventory)",
            "inventory_cache": "output/<app>/inventory/<model>/ (shared across batches)",
            "logical_canvas_width": 390,
        },
        "environment": {"python": platform.python_version(), "platform": platform.platform()},
    }


def target_screens(arguments):
    target_root = PROJECT_ROOT / "Dataset" / "targets"
    apps = arguments.apps or sorted(
        path.name for path in target_root.iterdir()
        if path.is_dir() and path.name not in EXCLUDED_APPS
    )
    screens = []
    for app in apps:
        app_dir = target_root / app
        if not app_dir.is_dir():
            raise FileNotFoundError(f"No targets for app {app} in {target_root}.")
        for path in sorted(app_dir.iterdir()):
            if path.suffix.lower() in IMAGE_EXTENSIONS and (
                not arguments.screens or path.stem in arguments.screens
            ):
                screens.append((app, path))
    return screens


def completed_keys(batch_id):
    if not RESULTS_PATH.exists():
        return set()
    with RESULTS_PATH.open(newline="", encoding="utf-8") as file:
        return {
            (row["App"], row["Screen"], row["Repeat"], row["Condition"])
            for row in csv.DictReader(file)
            if row["Batch ID"] == batch_id and row["Status"] == "completed"
        }


def append_result(row, batch_dir):
    for path in (RESULTS_PATH, batch_dir / "results.csv"):
        exists = path.exists()
        with path.open("a", newline="", encoding="utf-8") as file:
            writer = csv.DictWriter(file, RESULT_COLUMNS, restval="")
            if not exists:
                writer.writeheader()
            writer.writerow(row)


class SourceBackup:
    """Keep src/generated/<app> intact: batch runs write fresh code there."""

    def __init__(self, apps, backup_dir):
        self.backup_dir = backup_dir
        self.app_dirs = {app: PROJECT_ROOT / "src" / "generated" / app for app in apps}
        self.originals = {}
        for app, app_dir in self.app_dirs.items():
            app_dir.mkdir(parents=True, exist_ok=True)
            self.originals[app] = {path.name for path in app_dir.iterdir() if path.is_file()}
            if self.originals[app]:
                shutil.copytree(app_dir, backup_dir / app, dirs_exist_ok=True)

    def restore(self):
        for app, app_dir in self.app_dirs.items():
            for path in app_dir.iterdir():
                if path.is_file() and path.name not in self.originals[app]:
                    path.unlink()
            for name in self.originals[app]:
                shutil.copy2(self.backup_dir / app / name, app_dir / name)


def generated_source(app, target, repeat, model, batch_dir):
    """Generate the screen once per repeat; reuse the saved copy on resume."""
    component = run_pipeline.component_name_from_target(target)
    saved = batch_dir / "generated" / app / f"repeat-{repeat}" / f"{component}.js"
    source_path = PROJECT_ROOT / "src" / "generated" / app / f"{component}.js"
    if saved.exists():
        return component, source_path, saved.read_bytes(), 0
    calls = run_pipeline.GEMINI_CALLS["count"]
    print(f"\n[Batch] Generating {app}/{component} (repeat {repeat}) with {model}...")
    component, source_path = run_pipeline.create_component_from_target(app, target, model=model)
    saved.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_path, saved)
    return component, source_path, source_path.read_bytes(), run_pipeline.GEMINI_CALLS["count"] - calls


def run_condition(app, component, source_path, code, condition, manifest):
    settings = CONDITIONS[condition]
    source_path.write_bytes(code)
    calls, started = run_pipeline.GEMINI_CALLS["count"], time.monotonic()
    row = {"Status": "completed"}
    try:
        result, _ = run_pipeline.run_selected_refinement(
            app,
            component,
            max_iterations=manifest["max_iterations"] if settings["refine"] else 0,
            model=manifest["model"],
            guardrail=settings["guardrail"],
            condition=condition,
            batch_id=manifest["batch_id"],
        )
        run, iterations = run_store.get_run(result["run_id"])
        row.update({
            "Run ID": run["run_id"],
            "Best Iteration": run["best_iteration"],
            "Iterations Run": max(item["iteration"] for item in iterations),
            "Rejected": sum(item["status"] == "rejected" for item in iterations),
            "Render Failures": sum(item["status"] == "render_failed" for item in iterations),
            "Baseline SSIM": run["baseline_ssim"],
            "SSIM": run["final_ssim"],
            "Content SSIM": run["final_content_ssim"],
            "CLIP": run["final_clip"],
        })
    except Exception as error:
        if is_quota_error(error):
            raise
        row.update({"Status": "failed", "Error": str(error)[:500]})
        print(f"[Batch] {app}/{component} {condition} failed: {error}")
    row.update({
        "API Calls": run_pipeline.GEMINI_CALLS["count"] - calls,
        "Seconds": round(time.monotonic() - started, 1),
    })
    return row


def is_quota_error(error):
    return getattr(error, "code", None) == 429


def print_summary(batch_dir):
    path = batch_dir / "results.csv"
    if not path.exists():
        return
    with path.open(newline="", encoding="utf-8") as file:
        rows = [row for row in csv.DictReader(file) if row["Status"] == "completed"]
    by_condition = {}
    for row in rows:
        by_condition.setdefault(row["Condition"], {})[(row["App"], row["Screen"], row["Repeat"])] = row
    print("\n[Batch] Summary (completed screens)")
    for condition, items in by_condition.items():
        ssim = [float(row["SSIM"]) for row in items.values()]
        clip = [float(row["CLIP"]) for row in items.values()]
        calls = sum(int(row["API Calls"] or 0) for row in items.values())
        print(
            f"  {condition:<13} n={len(ssim):<3} mean SSIM {statistics.mean(ssim):.4f}"
            f"  mean CLIP {statistics.mean(clip):.4f}  API calls {calls}"
        )
    oneshot = by_condition.get("oneshot", {})
    for condition, items in by_condition.items():
        pairs = [(oneshot[key], row) for key, row in items.items() if condition != "oneshot" and key in oneshot]
        if not pairs:
            continue
        deltas = [float(row["SSIM"]) - float(base["SSIM"]) for base, row in pairs]
        wins = sum(delta > 0 for delta in deltas)
        print(
            f"  {condition} vs oneshot: mean dSSIM {statistics.mean(deltas):+.4f}, "
            f"improved {wins}/{len(deltas)} screens"
        )


def main():
    arguments = parse_args()
    if arguments.resume:
        batch_id = arguments.resume
        batch_dir = EVALUATION_DIR / batch_id
        manifest = json.loads((batch_dir / "manifest.json").read_text(encoding="utf-8"))
        for key in ("apps", "screens", "conditions", "repeats", "model"):
            setattr(arguments, key, manifest[key])
        arguments.max_iterations = manifest["max_iterations"]
        manifest.setdefault("resumed_at", []).append(datetime.now().isoformat(timespec="seconds"))
        manifest["resume_commit"] = git("rev-parse", "HEAD")
    else:
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        batch_id = "-".join(part for part in (stamp, arguments.model, arguments.label) if part)
        batch_dir = EVALUATION_DIR / batch_id
        batch_dir.mkdir(parents=True, exist_ok=True)
        manifest = build_manifest(arguments, batch_id)
    (batch_dir / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    if manifest["code_dirty"]:
        print("[Batch] Warning: uncommitted code changes; the commit hash does not fully describe this run.")

    screens = target_screens(arguments)
    done = completed_keys(batch_id)
    apps = sorted({app for app, _ in screens})
    backup = SourceBackup(apps, batch_dir / "original_sources")
    print(f"[Batch] {batch_id}: {len(screens)} screen(s) x {arguments.repeats} x {arguments.conditions}")
    try:
        with run_pipeline.ensure_dev_server():
            for app, target in screens:
                for repeat in range(1, arguments.repeats + 1):
                    keys = {c: (app, target.stem, str(repeat), c) for c in arguments.conditions}
                    if all(key in done for key in keys.values()):
                        continue
                    common = {
                        "Batch ID": batch_id, "App": app, "Screen": target.stem,
                        "Repeat": repeat, "Model": manifest["model"],
                        "Commit": manifest["commit"][:10], "Code Dirty": manifest["code_dirty"],
                        "Prompts Hash": manifest["prompts_hash"],
                        "SSIM Threshold": run_pipeline.SSIM_THRESHOLD,
                        "Content SSIM Threshold": run_pipeline.CONTENT_SSIM_THRESHOLD,
                        "Max SSIM Regression": run_pipeline.MAX_SSIM_REGRESSION,
                    }
                    try:
                        component, source_path, code, generation_calls = generated_source(
                            app, target, repeat, manifest["model"], batch_dir
                        )
                    except Exception as error:
                        if is_quota_error(error):
                            raise
                        print(f"[Batch] Generation failed for {app}/{target.stem}: {error}")
                        for condition in arguments.conditions:
                            append_result({**common, "Condition": condition, "Status": "generation_failed",
                                           "Timestamp": datetime.now().isoformat(timespec="seconds"),
                                           "Error": str(error)[:500]}, batch_dir)
                        continue
                    for condition in arguments.conditions:
                        if keys[condition] in done:
                            continue
                        refine = CONDITIONS[condition]["refine"]
                        print(f"[Batch] {app}/{component} repeat {repeat}: {condition}")
                        row = run_condition(app, component, source_path, code, condition, manifest)
                        append_result({
                            **common, **row, "Condition": condition,
                            "Timestamp": datetime.now().isoformat(timespec="seconds"),
                            "Max Iterations": arguments.max_iterations if refine else 0,
                            "Guardrail": CONDITIONS[condition]["guardrail"] if refine else "",
                            "Generation API Calls": generation_calls,
                        }, batch_dir)
    except Exception as error:
        if not is_quota_error(error):
            raise
        print(
            f"\n[Batch] Stopped: Gemini quota exhausted ({error}).\n"
            f"        Resume later with: python evaluate_batch.py --resume {batch_id}"
        )
    finally:
        backup.restore()
        (batch_dir / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print_summary(batch_dir)
    print(f"\n[Batch] Results: {batch_dir / 'results.csv'} (all batches: {RESULTS_PATH})")


if __name__ == "__main__":
    sys.exit(main())
