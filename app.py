from pathlib import Path
from urllib.parse import quote

import streamlit as st

from run_pipeline import (
    PROJECT_ROOT,
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


def save_upload(uploaded_file):
    target_dir = TARGET_ROOT / "user_uploads"
    target_dir.mkdir(parents=True, exist_ok=True)
    original_name = Path(uploaded_file.name).name
    destination = target_dir / "UserUpload.png"
    destination.write_bytes(uploaded_file.getbuffer())
    return destination, original_name


def component_for_target(app_name, target_path):
    if app_name == "user_uploads":
        return "UserUploadScreen"
    generated_dir = PROJECT_ROOT / "src" / "generated" / app_name
    candidates = [target_path.stem]
    if not target_path.stem.endswith("Screen"):
        candidates.append(f"{target_path.stem}Screen")
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


def refine_targets(app_name, targets, tweak, max_iterations):
    jobs = []
    skipped = []
    for target in targets:
        component = component_for_target(app_name, target)
        if app_name == "user_uploads":
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
        selected_app = "user_uploads"
        uploaded_file = st.file_uploader(
            "Upload a mockup screenshot",
            type=["png", "jpg", "jpeg"],
            help="The uploaded image becomes the target screen automatically.",
        )
        targets = []
        if uploaded_file is not None:
            saved_path, original_name = save_upload(uploaded_file)
            st.success(f"Mockup saved as {saved_path.name} (uploaded file: {original_name})")
            targets = [saved_path]

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
        refinement_scope = "One screen"
        if targets:
            selected_target = targets[0]
            st.info(f"Ready to refine uploaded screen: {selected_target.name}")
        else:
            st.info("Upload a screenshot to begin.")

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
        if not targets:
            st.error("Choose an app or upload a mockup first.")
        else:
            selected_targets = (
                targets
                if refinement_scope == "All screens"
                else [selected_target] if selected_target else []
            )
            if not selected_targets:
                st.error("Choose a target screen first.")
            else:
                refine_targets(
                    selected_app,
                    selected_targets,
                    tweak,
                    int(max_iterations),
                )
