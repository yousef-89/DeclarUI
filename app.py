import hashlib
import re
from pathlib import Path
from urllib.parse import quote

import streamlit as st

from run_pipeline import (
    PROJECT_ROOT,
    component_name_from_target,
    create_component_from_target,
    run_selected_refinement,
)


TARGET_ROOT = PROJECT_ROOT / "Dataset" / "targets"
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg"}


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


def preview_url(app_name, component, port=3000):
    return (
        f"http://127.0.0.1:{port}/?app={quote(app_name)}"
        f"&component={quote(component)}"
    )


def refine_targets(app_name, targets, tweak, max_iterations, generate_missing=False):
    jobs = []
    skipped = []
    for target in targets:
        component = component_for_target(app_name, target)
        if component is None and generate_missing:
            try:
                with st.spinner(f"Creating a component for {target.name}..."):
                    component, _ = create_component_from_target(
                        app_name, target, tweak=tweak
                    )
            except Exception as error:
                st.error(f"Could not create {target.name}: {error}")
        if component is None:
            skipped.append(target.name)
        else:
            jobs.append((target, component))

    if skipped:
        st.warning(
            "Skipped targets without generated components: " + ", ".join(skipped)
        )
    if not jobs:
        st.error(f"No generated components are available for {app_name}.")
        return

    results = []
    for target, component in jobs:
        try:
            with st.spinner(f"Refining {component}..."):
                result, source_path = run_selected_refinement(
                    app_name,
                    component,
                    max_iterations=max_iterations,
                    tweak=tweak,
                )
            results.append((target, component, result, source_path))
        except Exception as error:
            st.error(f"{component} failed: {error}")

    for target, component, result, source_path in results:
        st.success(
            f"{component}: SSIM {result['ssim']:.4f} | "
            f"CLIP {result['clip_similarity']:.4f}"
        )
        st.image(
            result["render"],
            caption=f"Rendered {component} against {target.name}",
            width="stretch",
        )
        st.link_button(
            f"Open {component} in interactive preview",
            preview_url(app_name, component),
            type="secondary",
        )
        with st.expander(f"Generated JSX: {component}"):
            st.code(source_path.read_text(encoding="utf-8"), language="jsx")


st.set_page_config(page_title="DeclarUI Interactive Refinement", layout="wide")
st.title("DeclarUI Interactive Visual Refinement")
st.caption("Choose an existing app or upload a mockup. The dashboard handles the rest.")

left, right = st.columns(2)

with left:
    workflow = st.radio(
        "What do you want to refine?",
        ["An existing app", "A new uploaded mockup"],
    )
    pending_uploads = []
    selected_upload_index = None

    if workflow == "An existing app":
        apps = available_apps()
        if not apps:
            st.error("No app datasets were found in Dataset/targets.")
            selected_app = None
            targets = []
        else:
            selected_app = st.selectbox("Choose an app", apps)
            targets = available_targets(selected_app)
    else:
        pending_uploads = []
        selected_upload_index = None
        uploaded_files = st.file_uploader(
            "Upload one or more mockup screenshots",
            type=["png", "jpg", "jpeg"],
            accept_multiple_files=True,
            help="Each screenshot becomes one target screen in the uploaded app.",
        )
        selected_app = "user_uploads"
        existing_uploads = available_targets(selected_app)
        pending_uploads = list(uploaded_files or [])
        selected_upload_index = None
        if uploaded_files:
            st.success(
                f"{len(uploaded_files)} screen(s) ready. "
                "They will be stored only when you start refinement."
            )
        targets = existing_uploads

    selected_target = None
    if workflow == "An existing app":
        refinement_scope = st.radio(
            "Refinement scope",
            ["One screen", "All screens"],
            horizontal=True,
            help="Use One screen for focused experimentation or All screens for an app-level run.",
        )
        if targets and refinement_scope == "One screen":
            selected_target = st.selectbox(
                "Choose the screen to refine",
                targets,
                format_func=lambda path: path.stem,
            )
        elif targets:
            st.info(f"All {len(targets)} target screens will be processed.")
    else:
        refinement_scope = st.radio(
            "Refinement scope",
            ["One screen", "All screens"],
            horizontal=True,
            help="Use One screen for testing or All screens for the uploaded app.",
        )
        if targets:
            if refinement_scope == "One screen":
                selected_target = st.selectbox(
                    "Choose the uploaded screen to refine",
                    pending_uploads if pending_uploads else targets,
                    format_func=lambda item: (
                        item.name if hasattr(item, "name") else item.stem
                    ),
                )
                if pending_uploads:
                    selected_upload_index = pending_uploads.index(selected_target)
            else:
                total_pending = len(targets) + len(pending_uploads)
                st.info(f"All {total_pending} uploaded screens will be processed.")
        else:
            if pending_uploads:
                st.info(
                    f"{len(pending_uploads)} screen(s) are ready and will be "
                    "stored when you start refinement."
                )
            else:
                st.info("Upload one or more screenshots to begin.")

    tweak = st.text_input(
        "What would you like to change?",
        placeholder="e.g. Make the background yellow and increase the title size",
    )
    with st.expander("Advanced settings"):
        max_iterations = st.number_input(
            "Maximum refinement iterations per screen",
            min_value=1,
            max_value=3,
            value=3,
            step=1,
            help="The pipeline supports at most 3 iterations per screen.",
        )

with right:
    st.subheader("Run refinement")
    if workflow == "An existing app" and refinement_scope == "All screens":
        button_label = "Refine all screens"
    elif workflow == "A new uploaded mockup":
        button_label = "Generate and refine mockup"
    else:
        button_label = "Refine selected screen"

    run_clicked = st.button(button_label, type="primary")
    st.caption(
        "The interactive preview opens the React Native Web screen so you can "
        "click controls and type into fields."
    )
    if run_clicked:
        if workflow == "A new uploaded mockup" and pending_uploads:
            saved_targets = save_uploads(pending_uploads)
            targets = available_targets(selected_app)
            if refinement_scope == "One screen":
                selected_targets = [
                    saved_targets[selected_upload_index]
                ] if selected_upload_index is not None else []
            else:
                selected_targets = targets
        else:
            selected_targets = (
                targets
                if refinement_scope == "All screens"
                else [selected_target] if selected_target else []
            )
        if not targets:
            st.error("Choose an app or upload a mockup first.")
        else:
            if not selected_targets:
                st.error("Choose a target screen first.")
            else:
                refine_targets(
                    selected_app,
                    selected_targets,
                    tweak,
                    int(max_iterations),
                    True,
                )
