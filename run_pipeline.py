"""Run the syntax, rendering, evaluation, and visual-refinement pipeline."""

import argparse
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from contextlib import contextmanager
from pathlib import Path

SSIM_THRESHOLD = 0.90
MAX_SSIM_REGRESSION = 0.08
PROJECT_ROOT = Path(__file__).resolve().parent


def component_name_from_target(target_path):
    """Return a valid component name derived from a target filename."""
    words = [
        word for word in target_path.stem.replace("-", "_").split("_") if word
    ]
    component = "".join(word[:1].upper() + word[1:] for word in words)
    component = component or "Screen"
    return component if component.endswith("Screen") else f"{component}Screen"


def parse_args():
    parser = argparse.ArgumentParser(
        description="Run automated visual self-refinement for an app."
    )
    parser.add_argument("--app", required=True, help="Application folder name.")
    parser.add_argument(
        "--max_iterations",
        type=int,
        default=3,
        help="Maximum number of render/evaluate/refine passes.",
    )
    arguments = parser.parse_args()
    if arguments.max_iterations < 1:
        parser.error("--max_iterations must be at least 1.")
    return arguments


def run_command(command, description):
    result = subprocess.run(
        command,
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
    )
    if result.stdout:
        print(result.stdout, end="")
    if result.stderr:
        print(result.stderr, end="")
    if result.returncode != 0:
        raise RuntimeError(
            f"{description} failed with exit code {result.returncode}."
        )
    return result


def server_is_ready(port=3000):
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{port}", timeout=2):
            return True
    except (urllib.error.URLError, TimeoutError):
        return False


@contextmanager
def ensure_dev_server(port=3000):
    """Use an existing React server or start one for the duration of a run."""
    if server_is_ready(port):
        yield None
        return

    npm_command = "npm.cmd" if os.name == "nt" else "npm"
    server = subprocess.Popen(
        [npm_command, "start", "--", "--port", str(port)],
        cwd=PROJECT_ROOT,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    try:
        deadline = time.monotonic() + 45
        while time.monotonic() < deadline:
            if server.poll() is not None:
                raise RuntimeError(
                    f"React development server exited with code {server.returncode}."
                )
            if server_is_ready(port):
                yield server
                return
            time.sleep(1)
        raise RuntimeError(
            f"React development server did not become ready on port {port}."
        )
    finally:
        if server.poll() is None:
            server.terminate()
            try:
                server.wait(timeout=10)
            except subprocess.TimeoutExpired:
                server.kill()
                server.wait()


def patch_syntax(client, model, component, source_path):
    from visual_refine import strip_code_fence

    code = source_path.read_text(encoding="utf-8")
    prompt = f"""
Repair the JavaScript/JSX syntax in this React Native Web component.

Component: {component}

Return only the complete corrected source code. Preserve the intended UI,
imports, component behavior, and React Native Web compatibility. Do not add
Markdown fences, explanations, navigation packages, native-only APIs, or assets.

Current source:
{code}
""".strip()
    response = client.models.generate_content(
        model=model,
        contents=[prompt],
    )
    patched_code = strip_code_fence(response.text or "")
    if not patched_code:
        raise RuntimeError(f"Gemini returned empty syntax patch for {component}.")
    source_path.write_text(f"{patched_code}\n", encoding="utf-8")


def validate_syntax(client, model, source_path):
    result = subprocess.run(
        [
            "node",
            "check_syntax.js",
            str(source_path),
        ],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
    )
    print(result.stdout, end="")
    if "SYNTAX_INVALID" not in result.stdout:
        if result.returncode != 0:
            raise RuntimeError(
                f"Syntax check failed unexpectedly for {source_path}."
            )
        return

    print(f"[Pipeline] Patching syntax for {source_path.name}...")
    patch_syntax(client, model, source_path.stem, source_path)
    verify = run_command(
        ["node", "check_syntax.js", str(source_path)],
        f"Syntax recheck for {source_path.name}",
    )
    if "SYNTAX_VALID" not in verify.stdout:
        raise RuntimeError(f"Gemini syntax patch remained invalid: {source_path}")


def refine_component(
    client,
    model,
    component,
    source_path,
    target_path,
    rendered_path,
    item,
    tweak="",
):
    from visual_refine import build_prompt, image_part, strip_code_fence

    code = source_path.read_text(encoding="utf-8")
    prompt = build_prompt(
        component,
        code,
        item["ssim"],
        item["clip_similarity"],
        tweak,
    )
    response = client.models.generate_content(
        model=model,
        contents=[prompt, image_part(target_path), image_part(rendered_path)],
    )
    refined_code = strip_code_fence(response.text or "")
    if not refined_code:
        raise RuntimeError(f"Gemini returned empty refinement for {component}.")
    source_path.write_text(f"{refined_code}\n", encoding="utf-8")


def create_component_from_target(app_name, target_path, tweak=""):
    """Generate an initial component for an uploaded target image."""
    try:
        from google import genai
        from visual_refine import MODEL, image_part, strip_code_fence
    except ModuleNotFoundError as error:
        raise RuntimeError(
            "Gemini dependencies are required to generate an uploaded screen."
        ) from error

    if "GEMINI_API_KEY" not in os.environ:
        raise RuntimeError("GEMINI_API_KEY is not set.")

    component = component_name_from_target(target_path)
    source_dir = PROJECT_ROOT / "src" / "generated" / app_name
    source_dir.mkdir(parents=True, exist_ok=True)
    source_path = source_dir / f"{component}.js"
    tweak_section = (
        f"\n\nUser-requested visual change:\n{tweak.strip()}"
        if tweak.strip()
        else ""
    )
    prompt = f"""
Create a complete React Native Web JSX component named {component} from the
provided target screenshot.

Return only valid JavaScript source code, without Markdown fences or explanations.
Use react-native primitives and keep the result compatible with this project's
headless renderer. Do not use navigation packages, native-only APIs, or external
assets. Reproduce the screenshot's layout, colors, spacing, typography, and
visible controls as closely as possible.{tweak_section}
""".strip()
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    response = client.models.generate_content(
        model=MODEL,
        contents=[prompt, image_part(target_path)],
    )
    generated_code = strip_code_fence(response.text or "")
    if not generated_code:
        raise RuntimeError(f"Gemini returned empty code for {target_path.name}.")
    source_path.write_text(f"{generated_code}\n", encoding="utf-8")
    return component, source_path

def run_selected_refinement(app_name, component, max_iterations=3, tweak=""):
    """Refine one generated screen and return its latest result and source."""
    try:
        from google import genai
        from visual_refine import MODEL
    except ModuleNotFoundError as error:
        raise RuntimeError(
            "Gemini dependencies are required to run the pipeline. "
            "Install the project's Python API requirements."
        ) from error

    if "GEMINI_API_KEY" not in os.environ:
        raise RuntimeError("GEMINI_API_KEY is not set.")
    if max_iterations < 1:
        raise ValueError("max_iterations must be at least 1.")

    generated_dir = PROJECT_ROOT / "src" / "generated" / app_name
    source_path = next(
        (
            generated_dir / f"{component}{extension}"
            for extension in (".js", ".jsx")
            if (generated_dir / f"{component}{extension}").exists()
        ),
        generated_dir / f"{component}.js",
    )
    target_dir = PROJECT_ROOT / "Dataset" / "targets" / app_name
    if not source_path.exists():
        raise FileNotFoundError(f"Generated component not found: {source_path}")
    if not target_dir.is_dir():
        raise FileNotFoundError(f"Target app directory not found: {target_dir}")

    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    result = None
    best_result = None
    best_source = None
    previous_result = None
    previous_source = None
    prompt_driven = bool(tweak.strip())
    with ensure_dev_server():
        for iteration in range(max_iterations):
            validate_syntax(client, MODEL, source_path)
            iteration_name = f"interactive-{component}/iteration-{iteration}"
            iteration_dir = (
                PROJECT_ROOT / "output" / app_name / f"interactive-{component}"
                / f"iteration-{iteration}"
            )
            run_command(
                [
                    "node",
                    "batch_render.js",
                    app_name,
                    iteration_name,
                    "3000",
                    component,
                ],
                f"Rendering {component}",
            )
            evaluation_path = iteration_dir.parent / f"iteration-{iteration}-evaluation.json"
            run_command(
                [
                    sys.executable,
                    "evaluate_baseline.py",
                    "--app",
                    app_name,
                    "--baseline",
                    str(iteration_dir),
                    "--output",
                    str(evaluation_path),
                ],
                f"Evaluating {component}",
            )
            report = json.loads(evaluation_path.read_text(encoding="utf-8"))
            result = next(
                (
                    item
                    for item in report.get("detailed_results", [])
                    if item.get("component") == component
                ),
                None,
            )
            if not result or result.get("metric_status") != "evaluated":
                raise RuntimeError(f"No usable evaluation result for {component}.")
            source_snapshot = source_path.read_bytes()
            source_snapshot_path = iteration_dir / f"{component}.source.js"
            source_snapshot_path.write_bytes(source_snapshot)
            if (
                previous_result is not None
                and result["ssim"] < previous_result["ssim"] - MAX_SSIM_REGRESSION
            ):
                if previous_source is not None:
                    source_path.write_bytes(previous_source)
                print(
                    f"[Pipeline] Rejected {component} iteration {iteration}: "
                    f"SSIM dropped from {previous_result['ssim']:.4f} to "
                    f"{result['ssim']:.4f}."
                )
                result = previous_result
                return result, source_path
            previous_result = result
            previous_source = source_snapshot
            if best_result is None or (
                result["ssim"],
                result["clip_similarity"],
            ) > (
                best_result["ssim"],
                best_result["clip_similarity"],
            ):
                best_result = result
                best_source = source_snapshot
            if (
                iteration == max_iterations - 1
                or (not prompt_driven and result["ssim"] >= SSIM_THRESHOLD)
            ):
                if prompt_driven:
                    return result, source_path
                source_path.write_bytes(best_source)
                return best_result, source_path

            refine_component(
                client,
                MODEL,
                component,
                source_path,
                Path(result["target"]),
                Path(result["render"]),
                result,
                tweak,
            )

    if best_source is not None:
        source_path.write_bytes(best_source)
    return best_result or result, source_path


def run_pipeline(app_name, max_iterations):
    try:
        from google import genai
        from visual_refine import MODEL
    except ModuleNotFoundError as error:
        raise RuntimeError(
            "Gemini dependencies are required to run the pipeline. "
            "Install the project's Python API requirements."
        ) from error

    if "GEMINI_API_KEY" not in os.environ:
        raise RuntimeError("GEMINI_API_KEY is not set.")

    source_dir = PROJECT_ROOT / "src" / "generated" / app_name
    target_dir = PROJECT_ROOT / "Dataset" / "targets" / app_name
    if not source_dir.is_dir():
        raise FileNotFoundError(f"Generated app directory not found: {source_dir}")
    if not target_dir.is_dir():
        raise FileNotFoundError(f"Target app directory not found: {target_dir}")

    components = sorted(
        path
        for path in source_dir.iterdir()
        if path.is_file() and path.suffix.lower() in {".js", ".jsx"}
    )
    if not components:
        raise RuntimeError(f"No generated components found in {source_dir}.")

    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    completed = set()
    best_results = {}
    best_sources = {}
    previous_results = {}
    previous_sources = {}

    def restore_best_sources():
        for source_path, source_bytes in best_sources.items():
            source_path.write_bytes(source_bytes)

    iteration = 0
    with ensure_dev_server():
        while iteration < max_iterations:
            print(f"\n[Pipeline] Starting iteration {iteration} for {app_name}")
            for source_path in components:
                if source_path.stem in completed:
                    continue
                validate_syntax(client, MODEL, source_path)

            iteration_dir = PROJECT_ROOT / "output" / app_name / f"iteration-{iteration}"
            evaluation_path = (
                PROJECT_ROOT
                / "output"
                / app_name
                / f"iteration-{iteration}-evaluation.json"
            )
            run_command(
                ["node", "batch_render.js", app_name, f"iteration-{iteration}", "3000"],
                f"Rendering iteration {iteration}",
            )
            run_command(
                [
                    sys.executable,
                    "evaluate_baseline.py",
                    "--app",
                    app_name,
                    "--baseline",
                    str(iteration_dir),
                    "--output",
                    str(evaluation_path),
                ],
                f"Evaluating iteration {iteration}",
            )

            report = json.loads(evaluation_path.read_text(encoding="utf-8"))
            results = {
                item["component"]: item
                for item in report.get("detailed_results", [])
            }
            pending = []
            for source_path in components:
                item = results.get(source_path.stem)
                if not item or item.get("metric_status") != "evaluated":
                    raise RuntimeError(
                        f"No usable evaluation result for {source_path.stem}."
                    )
                source_snapshot = source_path.read_bytes()
                previous_result = previous_results.get(source_path.stem)
                if (
                    previous_result is not None
                    and item["ssim"]
                    < previous_result["ssim"] - MAX_SSIM_REGRESSION
                ):
                    previous_source = previous_sources.get(source_path)
                    if previous_source is not None:
                        source_path.write_bytes(previous_source)
                    completed.add(source_path.stem)
                    print(
                        f"[Pipeline] Rejected {source_path.stem} iteration "
                        f"{iteration}: SSIM dropped from "
                        f"{previous_result['ssim']:.4f} to {item['ssim']:.4f}."
                    )
                    continue
                previous_results[source_path.stem] = item
                previous_sources[source_path] = source_snapshot
                if source_path.stem not in best_results or (
                    item["ssim"],
                    item["clip_similarity"],
                ) > (
                    best_results[source_path.stem]["ssim"],
                    best_results[source_path.stem]["clip_similarity"],
                ):
                    best_results[source_path.stem] = item
                    best_sources[source_path] = source_snapshot
                if item["ssim"] >= SSIM_THRESHOLD:
                    completed.add(source_path.stem)
                    print(
                        f"[Pipeline] {source_path.stem} converged with "
                        f"SSIM {item['ssim']:.4f}."
                    )
                else:
                    pending.append((source_path, item))

            if not pending:
                print("[Pipeline] All screens reached the SSIM threshold.")
                restore_best_sources()
                return
            if iteration == max_iterations - 1:
                print(
                    f"[Pipeline] Maximum iterations reached; "
                    f"{len(pending)} screen(s) remain below the threshold."
                )
                restore_best_sources()
                return

            for source_path, item in pending:
                target_path = Path(item["target"])
                rendered_path = Path(item["render"])
                print(
                    f"[Pipeline] Refining {source_path.stem} "
                    f"(SSIM {item['ssim']:.4f})..."
                )
                refine_component(
                    client,
                    MODEL,
                    source_path.stem,
                    source_path,
                    target_path,
                    rendered_path,
                    item,
                )
            iteration += 1


if __name__ == "__main__":
    arguments = parse_args()
    run_pipeline(arguments.app, arguments.max_iterations)
