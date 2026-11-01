import hashlib
import os
import re
from pathlib import Path

import streamlit as st

from pipeline import history_views
from run_pipeline import (
    PROJECT_ROOT,
    component_name_from_target,
    create_component_from_target,
    run_selected_refinement,
    server_is_ready,
)
from pipeline.visual_refine import JUDGE_MODEL, MODEL


TARGET_ROOT = PROJECT_ROOT / "Dataset" / "targets"
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg"}
MATCH_MODE = "Match the screenshot"
EDIT_MODE = "Apply a change"


def available_apps():
    if not TARGET_ROOT.is_dir():
        return []
    return sorted(
        directory.name
        for directory in TARGET_ROOT.iterdir()
        if directory.is_dir() and directory.name != "user_uploads"
    )


def available_targets(app_name):
    target_dir = TARGET_ROOT / app_name
    if not target_dir.is_dir():
        return []
    return sorted(
        path
        for path in target_dir.iterdir()
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def safe_name(value, fallback):
    cleaned = re.sub(r"[^A-Za-z0-9_-]+", "_", value).strip("_")
    return cleaned or fallback


def save_uploads(uploaded_files):
    app_name = "user_uploads"
    target_dir = TARGET_ROOT / app_name
    target_dir.mkdir(parents=True, exist_ok=True)
    saved = []
    for uploaded_file in uploaded_files:
        original_name = Path(uploaded_file.name).name
        extension = Path(original_name).suffix.lower()
        digest = hashlib.sha1(uploaded_file.getvalue()).hexdigest()[:8]
        stem = safe_name(Path(original_name).stem, "Screen")
        destination = target_dir / f"{stem}-{digest}{extension}"
        if not destination.exists():
            destination.write_bytes(uploaded_file.getvalue())
        saved.append(destination)
    return saved


def component_for_target(app_name, target_path):
    generated_dir = PROJECT_ROOT / "src" / "generated" / app_name
    candidates = [component_name_from_target(target_path), target_path.stem]
    for candidate in candidates:
        if (generated_dir / f"{candidate}.js").exists():
            return candidate
        if (generated_dir / f"{candidate}.jsx").exists():
            return candidate
    return None


def refine_targets(app_name, targets, tweak, max_iterations):
    """Generate missing components, run the loop per screen, return run ids."""
    run_ids = []
    for index, target in enumerate(targets, start=1):
        label = f"[{index}/{len(targets)}] {target.stem}"
        with st.status(label, expanded=False) as status:
            try:
                component = component_for_target(app_name, target)
                if component is None:
                    status.update(label=f"{label}: generating code from the screenshot...")
                    component, _ = create_component_from_target(app_name, target)
                status.update(
                    label=f"{label}: {'applying your change' if tweak else 'refining'} "
                    f"({max_iterations} pass(es) max)..."
                )
                result, _ = run_selected_refinement(
                    app_name, component, max_iterations=max_iterations, tweak=tweak
                )
                run_ids.append(result["run_id"])
                summary = (
                    f"compliance {result['edit_compliance']:.2f}"
                    if tweak
                    else f"SSIM {result['ssim']:.4f}"
                )
                status.update(label=f"{label}: done ({summary})", state="complete")
            except Exception as error:
                status.update(label=f"{label}: failed", state="error")
                st.error(str(error))
    return run_ids


def sidebar():
    with st.sidebar:
        st.markdown("### Settings")
        st.markdown(f"**Model:** `{MODEL}`")
        if JUDGE_MODEL != MODEL:
            st.markdown(f"**Judge model:** `{JUDGE_MODEL}`")
        st.caption("Change GEMINI_MODEL / GEMINI_JUDGE_MODEL in .env and restart the app.")
        if not os.environ.get("GEMINI_API_KEY"):
            st.error("GEMINI_API_KEY is missing from .env.")
        if server_is_ready():
            st.success("Render server running on port 3000")
        else:
            st.info("Render server will start automatically on the first run.")
        st.divider()
        st.markdown("### Metrics")
        st.caption(
            "**SSIM**: structural/layout similarity to the screenshot; the "
            "guardrail rejects passes that lower it by more than 0.02.  \n"
            "**Content SSIM**: SSIM over UI elements only.  \n"
            "**CLIP**: perceptual similarity.  \n"
            "**Edit compliance**: judge rating of whether your change was applied.  \n"
            "**Preservation**: how unchanged the rest of the screen stayed."
        )


def refine_tab():
    controls, preview = st.columns([3, 2], gap="large")
    pending_uploads = []
    selected_target = None
    selected_upload = None

    with controls:
        source = st.radio(
            "Screens", ["Existing app", "Upload mockups"], horizontal=True
        )
        if source == "Existing app":
            apps = available_apps()
            if not apps:
                st.error("No app datasets were found in Dataset/targets.")
                return
            app_name = st.selectbox("App", apps)
            targets = available_targets(app_name)
        else:
            app_name = "user_uploads"
            uploaded_files = st.file_uploader(
                "Mockup screenshots",
                type=["png", "jpg", "jpeg"],
                accept_multiple_files=True,
                help="Each screenshot becomes one screen; code is generated automatically.",
            )
            pending_uploads = list(uploaded_files or [])
            targets = available_targets(app_name)

        scope = st.radio("Scope", ["One screen", "All screens"], horizontal=True)
        if scope == "One screen":
            options = pending_uploads or targets
            if options:
                choice = st.selectbox(
                    "Screen",
                    options,
                    format_func=lambda item: item.name if hasattr(item, "name") else item.stem,
                )
                if pending_uploads:
                    selected_upload = choice
                else:
                    selected_target = choice
        else:
            count = len(targets) + len(pending_uploads)
            st.caption(f"{count} screen(s) will be processed.")

        mode = st.radio(
            "Goal",
            [MATCH_MODE, EDIT_MODE],
            horizontal=True,
            help="Match: refine the code until the render matches the screenshot. "
            "Change: apply your requested change and measure how well it was applied.",
        )
        tweak = ""
        if mode == EDIT_MODE:
            tweak = st.text_area(
                "Requested change",
                placeholder="e.g. Make the bottom tab bar dark and the active tab orange",
                height=80,
            )
        max_iterations = st.slider(
            "Refinement passes per screen", min_value=1, max_value=3, value=3,
            help="Passes after the baseline render (iteration 0).",
        )
        run_clicked = st.button(
            "Generate & refine" if source == "Upload mockups" else "Run",
            type="primary",
            disabled=mode == EDIT_MODE and not tweak.strip(),
        )

    with preview:
        shown = selected_upload or selected_target
        if shown is not None:
            st.image(shown, caption="Target screenshot", width="stretch")
        else:
            st.caption("Select a single screen to preview its screenshot.")

    if run_clicked:
        if pending_uploads:
            saved = save_uploads(pending_uploads)
            if scope == "One screen":
                selected = [saved[pending_uploads.index(selected_upload)]]
            else:
                selected = available_targets(app_name)
        else:
            selected = targets if scope == "All screens" else [selected_target] if selected_target else []
        if not selected:
            st.error("Choose a screen first.")
        else:
            run_ids = refine_targets(app_name, selected, tweak.strip(), int(max_iterations))
            st.session_state["recent_runs"] = run_ids

    recent = st.session_state.get("recent_runs") or []
    if recent:
        st.divider()
        st.markdown("### Results")
        tabs = st.tabs([run_id.split("-", 2)[-1] for run_id in recent])
        for tab, run_id in zip(tabs, recent):
            with tab:
                history_views.render_run(run_id, key_prefix=f"recent-{run_id}")


st.set_page_config(page_title="DeclarUI Refinement", layout="wide")
st.title("DeclarUI Visual Refinement")
st.caption(
    "Screenshot → React Native code, refined in a closed loop (render, measure, fix) "
    "for up to 3 passes."
)
sidebar()
refine, history, overview = st.tabs(["Refine", "History", "Overview"])
with refine:
    refine_tab()
with history:
    history_views.history_view()
with overview:
    history_views.overview_view()
