"""Streamlit views for refinement runs: run detail, history, and overview."""

import json
from pathlib import Path
from urllib.parse import quote

import altair as alt
import pandas as pd
import streamlit as st

from pipeline import run_store

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


def preview_url(app_name, component, port=3000):
    return f"http://127.0.0.1:{port}/?app={quote(app_name)}&component={quote(component)}"


def theme_mode():
    theme = getattr(getattr(st, "context", None), "theme", None)
    return "dark" if getattr(theme, "type", None) == "dark" else "light"


def existing(path):
    return path and Path(path).exists()


def fmt(value, digits=4):
    return "–" if value is None else f"{value:.{digits}f}"


def delta(final, baseline, digits=4):
    """Metric delta text, or None when unchanged (no misleading arrow)."""
    if final is None or baseline is None or abs(final - baseline) < 0.5 * 10 ** -digits:
        return None
    return f"{final - baseline:+.{digits}f}"


def read_text(path):
    return Path(path).read_text(encoding="utf-8") if existing(path) else None


def show_image(path, caption, width=260):
    """Show a phone screenshot at a phone-like width so a page fits several."""
    if existing(path):
        st.image(str(path), caption=caption, width=width)
    else:
        st.caption(f"{caption}: no image stored for this run.")


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

    st.subheader(f"{run['component']} · {run['app']}")
    st.caption(
        " · ".join(
            part
            for part in [
                "User edit" if editing else "Fidelity refinement",
                run["model"] or "model unknown",
                (run["started_at"] or "imported from metrics_tracker.csv").replace("T", " "),
                f"best: iteration {run['best_iteration']}" if run["best_iteration"] is not None else None,
                run["status"],
            ]
            if part
        )
    )
    if run["status"] == "failed":
        st.error(f"Run failed: {run['error']}")
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
    accepted = sum(item["status"] in {"improved", "accepted", "user_edit"} for item in iterations)
    columns[3].metric("Passes kept", f"{accepted} / {max(len(iterations) - 1, 0)}",
                      help="Refinement passes that passed the guardrail.")

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
        st.markdown("##### Final code")
        action_columns = st.columns([1, 1, 4])
        action_columns[0].download_button(
            "Download .js",
            final_code,
            file_name=f"{run['component']}.js",
            mime="text/javascript",
            key=f"{key_prefix}-download-{run_id}",
        )
        action_columns[1].link_button(
            "Open interactive preview", preview_url(run["app"], run["component"])
        )
        st.code(final_code, language="jsx", line_numbers=True)


def runs_frame(runs):
    frame = pd.DataFrame(runs)
    if frame.empty:
        return frame
    frame["delta_ssim"] = frame["final_ssim"] - frame["baseline_ssim"]
    frame["started"] = frame["started_at"].fillna("imported").str.replace("T", " ")
    return frame


def history_view():
    runs = run_store.list_runs()
    if not runs:
        st.info("No runs recorded yet. Runs appear here as soon as you refine a screen.")
        if st.button("Import metrics_tracker.csv"):
            imported = run_store.import_tracker_csv(Path("metrics_tracker.csv"))
            st.success(f"Imported {imported} runs.")
            st.rerun()
        return

    frame = runs_frame(runs)
    filters = st.columns([2, 2, 1, 1, 2])
    apps = filters[0].multiselect("App", sorted(frame["app"].unique()))
    models = filters[1].multiselect("Model", sorted(frame["model"].dropna().unique()))
    mode = filters[2].selectbox("Mode", ["All", "fidelity", "edit"])
    status = filters[3].selectbox("Status", ["All", *sorted(frame["status"].dropna().unique())])
    search = filters[4].text_input("Search component", placeholder="e.g. IMG9052")
    if apps:
        frame = frame[frame["app"].isin(apps)]
    if models:
        frame = frame[frame["model"].isin(models)]
    if mode != "All":
        frame = frame[frame["mode"] == mode]
    if status != "All":
        frame = frame[frame["status"] == status]
    if search:
        frame = frame[frame["component"].str.contains(search, case=False)]

    table = frame[
        ["started", "app", "component", "mode", "model", "baseline_ssim",
         "final_ssim", "delta_ssim", "final_clip", "final_edit_compliance", "status"]
    ].reset_index(drop=True)
    st.caption(f"{len(table)} run(s). Select a row to see its details.")
    event = st.dataframe(
        table,
        hide_index=True,
        width="stretch",
        on_select="rerun",
        selection_mode="single-row",
        key="history-table",
        column_config={
            "started": "Started",
            "app": "App",
            "component": "Screen",
            "mode": "Mode",
            "model": "Model",
            "baseline_ssim": st.column_config.NumberColumn("Baseline SSIM", format="%.4f"),
            "final_ssim": st.column_config.NumberColumn("Final SSIM", format="%.4f"),
            "delta_ssim": st.column_config.NumberColumn("Δ SSIM", format="%+.4f"),
            "final_clip": st.column_config.NumberColumn("Final CLIP", format="%.4f"),
            "final_edit_compliance": st.column_config.NumberColumn("Edit compliance", format="%.2f"),
            "status": "Status",
        },
    )
    rows = event.selection.rows if event else []
    if not rows:
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
    # One-shot batch runs have no refinement passes (Δ = 0 by construction).
    fidelity = frame[
        (frame["mode"] == "fidelity")
        & frame["final_ssim"].notna()
        & (frame["condition"] != "oneshot")
    ]
    edits = frame[(frame["mode"] == "edit") & frame["final_edit_compliance"].notna()]

    columns = st.columns(4)
    columns[0].metric("Runs recorded", len(frame))
    if not fidelity.empty:
        columns[1].metric("Mean Δ SSIM (fidelity)", f"{fidelity['delta_ssim'].mean():+.4f}")
        columns[2].metric("Screens improved", f"{(fidelity['delta_ssim'] > 0).sum()} / {len(fidelity)}")
    if not edits.empty:
        columns[3].metric("Mean edit compliance", f"{edits['final_edit_compliance'].mean():.2f}")

    number_format = {
        column: st.column_config.NumberColumn(format="%+.4f" if "Δ" in column else "%.4f")
        for column in ["Mean baseline SSIM", "Mean final SSIM", "Mean Δ SSIM", "Mean Δ CLIP"]
    }
    if not fidelity.empty:
        st.markdown("##### Fidelity refinement by model")
        st.dataframe(summary_table(fidelity, "model"), hide_index=True, width="stretch",
                     column_config=number_format)
        st.markdown("##### Fidelity refinement by app")
        st.dataframe(summary_table(fidelity, "app"), hide_index=True, width="stretch",
                     column_config=number_format)
    if not edits.empty:
        st.markdown("##### User edits")
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
