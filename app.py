from pathlib import Path

import streamlit as st

from run_pipeline import PROJECT_ROOT, run_selected_refinement


TARGET_ROOT = PROJECT_ROOT / "Dataset" / "targets"


def available_apps():
    if not TARGET_ROOT.is_dir():
        return []
    return sorted(
        directory.name
        for directory in TARGET_ROOT.iterdir()
        if directory.is_dir()
    )


def available_targets(app_name):
    target_dir = TARGET_ROOT / app_name
    return sorted(
        path
        for path in target_dir.iterdir()
        if path.is_file() and path.suffix.lower() in {".png", ".jpg", ".jpeg"}
    )


def save_upload(uploaded_file):
    target_dir = TARGET_ROOT / "user_uploads"
    target_dir.mkdir(parents=True, exist_ok=True)
    destination = target_dir / Path(uploaded_file.name).name
    destination.write_bytes(uploaded_file.getbuffer())
    return destination


def component_for_target(app_name, target_path):
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


st.set_page_config(page_title="DeclarUI Interactive Refinement", layout="wide")
st.title("DeclarUI Interactive Visual Refinement")

left, right = st.columns(2)

with left:
    apps = available_apps()
    if "user_uploads" not in apps:
        apps.append("user_uploads")
    selected_app = st.selectbox("Target app", apps)
    refinement_scope = st.radio(
        "Refinement scope",
        ["Selected screen", "All screens"],
        horizontal=True,
    )
    uploaded_file = st.file_uploader(
        "Upload a custom mockup",
        type=["png", "jpg", "jpeg"],
    )
    if uploaded_file is not None:
        saved_path = save_upload(uploaded_file)
        st.success(f"Saved mockup to {saved_path.relative_to(PROJECT_ROOT)}")
        selected_app = "user_uploads"

    targets = available_targets(selected_app)
    selected_target = None
    if not targets:
        st.warning(f"No target images found for {selected_app}.")
    elif refinement_scope == "Selected screen":
        selected_target = st.selectbox(
            "Target screen",
            targets,
            format_func=lambda path: path.stem,
        )
    else:
        st.info("All target screens in this app will be processed.")
    tweak = st.text_input("Natural Language Tweak")
    max_iterations = st.number_input(
        "Maximum refinement iterations per screen",
        min_value=1,
        max_value=3,
        value=3,
        step=1,
    )

with right:
    st.subheader("Refinement")
    run_clicked = st.button("Run Refinement", type="primary")
    if run_clicked:
        selected_targets = (
            [selected_target]
            if refinement_scope == "Selected screen" and selected_target
            else targets if refinement_scope == "All screens" else []
        )
        jobs = []
        skipped = []
        for target in selected_targets:
            component = component_for_target(selected_app, target)
            if component is None:
                skipped.append(target.name)
            else:
                jobs.append((target, component))

        if skipped:
            st.warning(
                "Skipped targets without generated components: "
                + ", ".join(skipped)
            )
        if not jobs:
            st.error(
                f"No selected targets have matching components in "
                f"src/generated/{selected_app}."
            )
        else:
            results = []
            for target, component in jobs:
                try:
                    with st.spinner(f"Refining {component}..."):
                        result, source_path = run_selected_refinement(
                            selected_app,
                            component,
                            max_iterations=int(max_iterations),
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
                with st.expander(f"Generated JSX: {component}"):
                    st.code(
                        source_path.read_text(encoding="utf-8"),
                        language="jsx",
                    )
