"""Streamlit views for refinement runs: run detail, history, and overview."""

import hashlib
import json
import os
import shutil
import subprocess
from pathlib import Path
from urllib.parse import quote

import altair as alt
import pandas as pd
import streamlit as st

from pipeline import run_store

PROJECT_ROOT = Path(__file__).resolve().parent.parent
# Live previews render a stored version from here, so the preview always shows
# exactly the code of the run being viewed (src/generated/<app> may differ).
PREVIEW_APP = "_preview"

# Categorical slots 1-3 (validated for CVD separation in light and dark mode).
SERIES_COLORS = {
    "light": ["#2a78d6", "#eb6834", "#1baf7a"],
    "dark": ["#3987e5", "#d95926", "#199e70"],
}
STATUS_LABELS = {
    "baseline": "⚪ baseline",
    "improved": "🟢 improved",
    "accepted": "🔵 accepted",
    "user_edit": "🟢 user edit",
    "rejected": "🔴 rejected (rolled back)",
    "discarded": "🟡 discarded (no gain)",
    "no_change": "⚪ edits not applied",
    "render_failed": "🔴 render failed",
}
CONDITION_LABELS = {
    "oneshot": "One-shot (no refinement)",
    "loop": "Refinement loop",
    "loop-noguard": "Loop without guardrail",
}
SOURCES = {
    "Dashboard runs": "dashboard",
    "Evaluation batches": "evaluation",
    "Legacy imports": "legacy",
}


def preview_url(app_name, component, port=3000):
    return f"http://127.0.0.1:{port}/?app={quote(app_name)}&component={quote(component)}"


def theme_mode():
    theme = getattr(getattr(st, "context", None), "theme", None)
    return "dark" if getattr(theme, "type", None) == "dark" else "light"


def existing(path):
    return path and Path(path).exists()


def fmt(value, digits=4):
    return "–" if value is None or pd.isna(value) else f"{value:.{digits}f}"


def delta(final, baseline, digits=4):
    """Metric delta text, or None when unchanged (no misleading arrow)."""
    if final is None or baseline is None or abs(final - baseline) < 0.5 * 10 ** -digits:
        return None
    return f"{final - baseline:+.{digits}f}"


def read_text(path):
    return Path(path).read_text(encoding="utf-8") if existing(path) else None


def run_kind(run):
    """Human-readable description of what a run did."""
    if run.get("condition"):
        return CONDITION_LABELS.get(run["condition"], run["condition"])
    return "Apply a change" if run.get("mode") == "edit" else "Match the screenshot"


def show_image(path, caption, width=260):
    """Show a phone screenshot at a phone-like width so a page fits several."""
    if existing(path):
        st.image(str(path), caption=caption, width=width)
    else:
        st.caption(f"{caption}: no image stored for this run.")


def start_render_server():
    """Start the React render host in the background (it keeps running)."""
    npm = "npm.cmd" if os.name == "nt" else "npm"
    subprocess.Popen(
        [npm, "start"],
        cwd=PROJECT_ROOT,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        env={**os.environ, "BROWSER": "none"},
        creationflags=getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0),
    )


def preview_section(run, item, key):
    """Copy one stored version into the preview slot and link to it."""
    from run_pipeline import server_is_ready

    if not existing(item.get("source_path")):
        st.caption("No code is stored for this version, so it cannot be previewed.")
        return
    if not server_is_ready():
        st.warning("The render server (port 3000) is not running, so the live preview is unavailable.")
        if st.button("Start render server", key=f"{key}-start"):
            start_render_server()
            st.info("Starting... this takes about 20-40 seconds. Then open the preview again.")
        return
    if st.button("Prepare live preview", key=f"{key}-prepare",
                 help="Loads exactly this version's code into the render server."):
        target = PROJECT_ROOT / "src" / "generated" / PREVIEW_APP / f"{run['component']}.js"
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(item["source_path"], target)
        st.session_state[f"{key}-ready"] = item["source_path"]
    if st.session_state.get(f"{key}-ready") == item["source_path"]:
        st.link_button("Open live preview ↗", preview_url(PREVIEW_APP, run["component"]))
        st.caption("If the page shows a load error, wait a few seconds for the server to "
                   "compile and reload it.")


def trajectory_chart(iterations, mode):
    """Line chart of the metrics per iteration; rejected/discarded points are crosses."""
    series = (
        [("SSIM", "ssim"), ("Content SSIM", "content_ssim"), ("CLIP", "clip")]
        if mode == "fidelity"
        else [("Edit compliance", "edit_compliance"), ("Preservation", "preservation")]
    )
    rows = [
        {
            "Iteration": item["iteration"],
            "Metric": label,
            "Value": item[key],
            "Status": item["status"],
        }
        for item in iterations
        for label, key in series
        if item[key] is not None
    ]
    if len({row["Iteration"] for row in rows}) < 2:
        return None
    labels = [label for label, _ in series]
    colors = SERIES_COLORS[theme_mode()][: len(labels)]
    data = pd.DataFrame(rows)
    base = alt.Chart(data).encode(
        x=alt.X("Iteration:O", title="Iteration", axis=alt.Axis(labelAngle=0)),
        y=alt.Y("Value:Q", title=None, scale=alt.Scale(zero=False)),
        color=alt.Color(
            "Metric:N",
            scale=alt.Scale(domain=labels, range=colors),
            legend=alt.Legend(orient="top", title=None),
        ),
        tooltip=[
            "Iteration",
            "Metric",
            alt.Tooltip("Value:Q", format=".4f"),
            "Status",
        ],
    )
    lines = base.mark_line(strokeWidth=2)
    points = base.mark_point(size=80, filled=True, opacity=1).encode(
        shape=alt.Shape(
            "Status:N",
            scale=alt.Scale(
                domain=["baseline", "improved", "accepted", "user_edit",
                        "rejected", "discarded", "render_failed"],
                range=["circle", "circle", "circle", "circle", "cross", "cross", "cross"],
            ),
            legend=None,
        )
    )
    return (lines + points).properties(height=260)


def iteration_table(iterations, mode):
    if mode == "fidelity":
        columns = {"ssim": "SSIM", "content_ssim": "Content SSIM", "clip": "CLIP"}
    else:
        columns = {
            "edit_compliance": "Edit compliance",
            "preservation": "Preservation",
            "ssim": "SSIM vs target",
        }
    table = pd.DataFrame(
        [
            {
                "Iteration": item["iteration"],
                "Status": STATUS_LABELS.get(item["status"], item["status"]),
                **{label: item[key] for key, label in columns.items()},
            }
            for item in iterations
        ]
    )
    st.dataframe(
        table,
        hide_index=True,
        width="stretch",
        column_config={
            label: st.column_config.NumberColumn(format="%.4f") for label in columns.values()
        },
    )


def render_iteration(item, run, key_prefix):
    title = (
        f"Iteration {item['iteration']} · {STATUS_LABELS.get(item['status'], item['status'])}"
    )
    if run["mode"] == "fidelity" and item["ssim"] is not None:
        title += f" · SSIM {item['ssim']:.4f}"
    elif item["edit_compliance"] is not None:
        title += f" · compliance {item['edit_compliance']:.2f}"
    with st.expander(title):
        render_tab, notes_tab, prompt_tab, code_tab = st.tabs(
            ["Render", "Model notes", "Prompt", "Code"]
        )
        with render_tab:
            if item["error"]:
                st.error(item["error"])
            show_image(item["render_path"], f"Iteration {item['iteration']}")
        with notes_tab:
            if item["notes"]:
                st.markdown(item["notes"])
            if item["judge"]:
                judge = json.loads(item["judge"])
                st.markdown(f"**Judge:** {judge.get('evidence') or '–'}")
                for change in judge.get("unintended_changes") or []:
                    st.warning(f"Unintended change: {change}")
            if not item["notes"] and not item["judge"]:
                st.caption(
                    "Iteration 0 renders the starting code; it has no model notes."
                    if item["iteration"] == 0
                    else "No notes stored."
                )
        with prompt_tab:
            prompt = read_text(item["prompt_path"])
            if prompt:
                st.code(prompt, language="markdown", wrap_lines=True)
            else:
                st.caption("No prompt for this iteration.")
        with code_tab:
            code = read_text(item["source_path"])
            if code:
                st.code(code, language="jsx", line_numbers=True)
            else:
                st.caption("No source snapshot stored.")


def render_run(run_id, key_prefix="run"):
    """Full detail view of one run: scores, images, trajectory, iterations, code."""
    run, iterations = run_store.get_run(run_id)
    if run is None:
        st.warning("This run no longer exists.")
        return
    by_iteration = {item["iteration"]: item for item in iterations}
    baseline_item = by_iteration.get(0, {})
    best_item = by_iteration.get(run["best_iteration"], {})
    editing = run["mode"] == "edit"
    passes = len([item for item in iterations if item["iteration"] > 0])

    st.subheader(f"{run['component']} · {run['app']}")
    st.caption(
        " · ".join(
            part
            for part in [
                run_kind(run),
                f"batch {run['batch_id']}" if run.get("batch_id") else None,
                run["model"] or "model unknown",
                (run["started_at"] or "imported from metrics_tracker.csv").replace("T", " "),
                f"{passes} of {run['max_iterations']} refinement passes" if run["max_iterations"] else None,
                run["status"],
            ]
            if part
        )
    )
    if run.get("condition") == "oneshot":
        st.info("One-shot condition of an evaluation batch: the screen was generated and "
                "scored once, with no refinement passes. Compare it with the loop run of "
                "the same screen in the same batch.")
    if run_store.run_source(run) == "legacy":
        st.warning("Imported from the old metrics CSV. These scores were measured before the "
                   "render fixes and are kept for reference only.")
    if run["status"] in {"failed", "interrupted"}:
        st.error(f"Run {run['status']}: {run['error']}")
    if editing and run["instruction"]:
        st.info(f"**Requested change:** {run['instruction']}")

    columns = st.columns(4)
    if editing:
        columns[0].metric("Edit compliance", fmt(run["final_edit_compliance"], 2),
                          help="Judge rating of whether the requested change is applied (0-1).")
        columns[1].metric("Structural preservation", fmt(run["final_preservation"], 3),
                          help="Edge-SSIM vs the pre-edit render outside the edited region.")
        columns[2].metric("SSIM vs target", fmt(run["final_ssim"]),
                          delta(run["final_ssim"], run["baseline_ssim"]),
                          help="Reference only: an intended edit moves the screen away from the target.")
    else:
        columns[0].metric("SSIM", fmt(run["final_ssim"]),
                          delta(run["final_ssim"], run["baseline_ssim"]),
                          help="Structural similarity to the target (guardrail metric).")
        columns[1].metric("Content SSIM", fmt(run["final_content_ssim"]),
                          delta(run["final_content_ssim"], run["baseline_content_ssim"]),
                          help="SSIM over regions that contain UI elements only.")
        columns[2].metric("CLIP", fmt(run["final_clip"]),
                          delta(run["final_clip"], run["baseline_clip"]),
                          help="Perceptual / semantic similarity to the target.")
    kept = sum(item["status"] in {"improved", "accepted", "user_edit"} for item in iterations)
    columns[3].metric("Passes kept", f"{kept} / {passes}",
                      help="Refinement passes whose result was kept.")

    target_path = run["target_path"]
    if not existing(target_path):
        from run_pipeline import find_component_target

        try:
            target_path = find_component_target(run["app"], run["component"])
        except FileNotFoundError:
            target_path = None
    images_column, trend_column = st.columns([3, 2], gap="large")
    with images_column:
        image_columns = st.columns(3)
        with image_columns[0]:
            show_image(target_path, "Target screenshot", width="stretch")
        with image_columns[1]:
            show_image(baseline_item.get("render_path"), "Before (iteration 0)", width="stretch")
        with image_columns[2]:
            show_image(
                best_item.get("render_path"),
                f"Result (iteration {run['best_iteration']})",
                width="stretch",
            )
    with trend_column:
        chart = trajectory_chart(iterations, run["mode"])
        if chart is not None:
            st.altair_chart(chart, width="stretch")
        iteration_table(iterations, run["mode"])

    st.markdown("##### Iterations")
    for item in iterations:
        render_iteration(item, run, key_prefix)

    final_code = read_text(best_item.get("source_path"))
    if final_code:
        st.markdown(f"##### Final code (iteration {run['best_iteration']})")
        action_columns = st.columns([1, 3])
        with action_columns[0]:
            st.download_button(
                "Download .js",
                final_code,
                file_name=f"{run['component']}.js",
                mime="text/javascript",
                key=f"{key_prefix}-download-{run_id}",
            )
        with action_columns[1]:
            preview_section(run, best_item, key=f"{key_prefix}-preview-{run_id}")
        st.code(final_code, language="jsx", line_numbers=True)


def runs_frame(runs):
    frame = pd.DataFrame(runs)
    if frame.empty:
        return frame
    frame["delta_ssim"] = frame["final_ssim"] - frame["baseline_ssim"]
    frame["started"] = frame["started_at"].fillna("imported").str.replace("T", " ")
    frame["source"] = [run_store.run_source(run) for run in runs]
    frame["kind"] = [run_kind(run) for run in runs]
    return frame


NUMBER = {
    "baseline_ssim": st.column_config.NumberColumn("Before SSIM", format="%.4f"),
    "final_ssim": st.column_config.NumberColumn("Final SSIM", format="%.4f"),
    "delta_ssim": st.column_config.NumberColumn("Δ SSIM", format="%+.4f"),
    "final_clip": st.column_config.NumberColumn("Final CLIP", format="%.4f"),
    "final_edit_compliance": st.column_config.NumberColumn("Edit compliance", format="%.2f"),
}
LABELS = {
    "started": "Started", "app": "App", "component": "Screen", "kind": "What it did",
    "batch_id": "Batch", "model": "Model", "max_iterations": "Max passes",
    "best_iteration": "Kept iteration", "status": "Status",
}


def history_view():
    runs = run_store.list_runs()
    if not runs:
        st.info("No runs recorded yet. Runs appear here as soon as you refine a screen.")
        return

    frame = runs_frame(runs)
    choice = st.segmented_control(
        "Show", list(SOURCES), default="Dashboard runs", key="history-source"
    ) or "Dashboard runs"
    source = SOURCES[choice]
    frame = frame[frame["source"] == source]
    st.caption({
        "dashboard": "Screens you refined or edited from the Refine tab.",
        "evaluation": "Runs from evaluate_batch.py. Each screen has a one-shot run "
                      "(generation only, 0 passes) and a loop run (up to 3 passes) "
                      "that start from the same code.",
        "legacy": "Imported from the old metrics CSV, measured before the render fixes. "
                  "Kept for reference only.",
    }[source])
    if frame.empty:
        st.info("No runs of this kind yet.")
        return

    filters = st.columns([2, 2, 2])
    if source == "evaluation":
        batches = sorted(frame["batch_id"].unique(), reverse=True)
        batch = filters[0].selectbox("Batch", batches)
        frame = frame[frame["batch_id"] == batch]
        kinds = filters[1].multiselect("Condition", sorted(frame["kind"].unique()))
    else:
        apps = filters[0].multiselect("App", sorted(frame["app"].unique()))
        if apps:
            frame = frame[frame["app"].isin(apps)]
        kinds = filters[1].multiselect("Goal", sorted(frame["kind"].unique()))
    if kinds:
        frame = frame[frame["kind"].isin(kinds)]
    search = filters[2].text_input("Search screen", placeholder="e.g. IMG9052")
    if search:
        frame = frame[frame["component"].str.contains(search, case=False)]

    columns = (
        ["app", "component", "kind", "max_iterations", "best_iteration", "baseline_ssim",
         "final_ssim", "delta_ssim", "final_clip", "status"]
        if source == "evaluation"
        else ["started", "app", "component", "kind", "model", "max_iterations",
              "best_iteration", "baseline_ssim", "final_ssim", "delta_ssim",
              "final_edit_compliance", "status"]
    )
    frame = frame.sort_values(
        ["app", "component", "kind"] if source == "evaluation" else "started",
        ascending=source == "evaluation",
    )
    table = frame[columns].reset_index(drop=True)
    st.caption(f"{len(table)} run(s). Select a row to see its details.")
    # The selection is a row position, so the table key depends on the runs it
    # shows: after a delete or a filter change the old position would point to
    # another run (or past the end), so the selection is reset instead.
    shown = hashlib.sha1("|".join(frame["run_id"]).encode()).hexdigest()[:10]
    event = st.dataframe(
        table,
        hide_index=True,
        width="stretch",
        on_select="rerun",
        selection_mode="single-row",
        key=f"history-table-{source}-{shown}",
        column_config={**LABELS, **NUMBER},
    )
    rows = event.selection.rows if event else []
    if not rows or rows[0] >= len(frame):
        return
    run_id = frame.iloc[rows[0]]["run_id"]
    st.divider()
    render_run(run_id, key_prefix="history")
    with st.expander("Delete this run"):
        st.caption("Removes the run from the history database. Files in output/ are kept.")
        confirm = st.checkbox("I want to delete this run", key=f"confirm-{run_id}")
        if st.button("Delete run", disabled=not confirm, type="primary", key=f"delete-{run_id}"):
            run_store.delete_run(run_id)
            st.success("Run deleted.")
            st.rerun()


def batch_comparison(frame):
    """Per-screen final SSIM of each condition in one batch, paired with one-shot."""
    table = frame.pivot_table(
        index=["app", "component"], columns="condition", values="final_ssim", aggfunc="last"
    ).reset_index()
    order = ["app", "component", "oneshot"]
    for condition in ("loop", "loop-noguard"):
        if condition in table:
            order.append(condition)
            if "oneshot" in table:
                table[f"Δ {condition}"] = table[condition] - table["oneshot"]
                order.append(f"Δ {condition}")
    table = table[[column for column in order if column in table]]
    table.columns.name = None
    return table.rename(columns={"app": "App", "component": "Screen", "oneshot": "One-shot",
                                 "loop": "Loop", "loop-noguard": "Loop, no guardrail"})


def batch_summary(frame):
    rows = []
    for batch, part in frame.groupby("batch_id"):
        table = batch_comparison(part)
        row = {"Batch": batch, "Model": part["model"].iloc[0], "Screens": len(table)}
        for column in ("One-shot", "Loop", "Loop, no guardrail"):
            if column in table:
                row[f"Mean SSIM: {column}"] = table[column].mean()
        if "Δ loop" in table:
            row["Mean Δ (loop vs one-shot)"] = table["Δ loop"].mean()
            row["Loop improved"] = f"{(table['Δ loop'] > 0.0005).sum()} / {table['Δ loop'].notna().sum()}"
        rows.append(row)
    return pd.DataFrame(rows).sort_values("Batch", ascending=False)


def summary_table(frame, group):
    rows = []
    for key, part in frame.groupby(group):
        rows.append(
            {
                group: key,
                "Runs": len(part),
                "Mean baseline SSIM": part["baseline_ssim"].mean(),
                "Mean final SSIM": part["final_ssim"].mean(),
                "Mean Δ SSIM": part["delta_ssim"].mean(),
                "Mean Δ CLIP": (part["final_clip"] - part["baseline_clip"]).mean(),
                "Improved": f"{(part['delta_ssim'] > 0).sum()} / {len(part)}",
            }
        )
    return pd.DataFrame(rows)


def overview_view():
    frame = runs_frame(run_store.list_runs())
    if frame.empty:
        st.info("No runs recorded yet.")
        return
    number = st.column_config.NumberColumn(format="%.4f")
    signed = st.column_config.NumberColumn(format="%+.4f")

    evaluation = frame[(frame["source"] == "evaluation") & (frame["status"] == "completed")]
    st.markdown("##### Evaluation batches (thesis results)")
    if evaluation.empty:
        st.caption("No evaluation batches yet. Run `python evaluate_batch.py --apps <app> ...`.")
    else:
        summary = batch_summary(evaluation)
        st.dataframe(summary, hide_index=True, width="stretch", column_config={
            column: signed if column.startswith("Mean Δ") else number
            for column in summary.columns if column.startswith("Mean")
        })
        batch = st.selectbox("Per-screen results for batch", list(summary["Batch"]))
        table = batch_comparison(evaluation[evaluation["batch_id"] == batch])
        st.dataframe(table, hide_index=True, width="stretch", column_config={
            column: signed if column.startswith("Δ") else number
            for column in table.columns if column not in {"App", "Screen"}
        })
        st.caption("Full rows with setup details (commit, prompt hash, API calls): "
                   "output/evaluation/results.csv")

    dashboard = frame[frame["source"] == "dashboard"]
    fidelity = dashboard[(dashboard["mode"] == "fidelity") & dashboard["final_ssim"].notna()]
    edits = dashboard[(dashboard["mode"] == "edit") & dashboard["final_edit_compliance"].notna()]
    st.markdown("##### Dashboard runs")
    if fidelity.empty and edits.empty:
        st.caption("No completed dashboard runs yet.")
    columns = st.columns(3)
    if not fidelity.empty:
        columns[0].metric("Mean Δ SSIM (match screenshot)", f"{fidelity['delta_ssim'].mean():+.4f}")
        columns[1].metric("Screens improved", f"{(fidelity['delta_ssim'] > 0).sum()} / {len(fidelity)}")
        st.dataframe(summary_table(fidelity, "app"), hide_index=True, width="stretch",
                     column_config={"Mean Δ SSIM": signed, "Mean Δ CLIP": signed,
                                    "Mean baseline SSIM": number, "Mean final SSIM": number})
    if not edits.empty:
        columns[2].metric("Mean edit compliance", f"{edits['final_edit_compliance'].mean():.2f}")
        st.dataframe(
            edits[["started", "app", "component", "instruction", "model",
                   "final_edit_compliance", "final_preservation"]],
            hide_index=True,
            width="stretch",
        )

    st.markdown("##### Export")
    export_columns = st.columns(2)
    export_columns[0].download_button(
        "Runs (CSV)",
        pd.DataFrame(run_store.list_runs())[run_store.RUN_COLUMNS].to_csv(index=False),
        file_name="declarui_runs.csv",
        mime="text/csv",
    )
    export_columns[1].download_button(
        "Iterations (CSV)",
        pd.DataFrame(run_store.list_iterations()).to_csv(index=False),
        file_name="declarui_iterations.csv",
        mime="text/csv",
    )
    st.caption(f"All data lives in {run_store.DB_PATH} (SQLite).")
