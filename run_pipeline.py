"""Run the syntax, rendering, evaluation, and visual-refinement pipeline."""

import argparse
import csv
import json
import os

import env_config  # noqa: F401  (loads .env before settings are read)
import subprocess
import sys
import time
import urllib.error
import urllib.request
from contextlib import contextmanager
from pathlib import Path

SSIM_THRESHOLD = 0.90
CONTENT_SSIM_THRESHOLD = 0.75
MAX_SSIM_REGRESSION = 0.02
PROJECT_ROOT = Path(__file__).resolve().parent
METRICS_TRACKER_PATH = PROJECT_ROOT / "metrics_tracker.csv"
EDIT_COMPLIANCE_THRESHOLD = 0.9
PRESERVATION_THRESHOLD = 0.95
EDIT_TOLERANCE = 0.1
METRICS_COLUMNS = [
    "App",
    "Component",
    "Iteration Number",
    "Mode",
    "SSIM",
    "Content SSIM",
    "CLIP",
    "Edit Compliance",
    "Preservation",
    "Status",
    "Model",
    "Run ID",
]


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


def run_command(command, description, env=None, check=True):
    result = subprocess.run(
        command,
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
        env={**os.environ, **env} if env else None,
    )
    if result.stdout:
        print(result.stdout, end="")
    if result.stderr:
        print(result.stderr, end="")
    if check and result.returncode != 0:
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
    stamp_path = PROJECT_ROOT / "src" / "render-stamp.json"
    if not stamp_path.exists():
        stamp_path.write_text('{"stamp": "initial"}\n', encoding="utf-8")
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


GEMINI_RETRY_DELAYS = (10, 30, 60, 120)


def generate(client, model, contents, json_output=False):
    """Call Gemini, retrying temporary overload and rate-limit errors."""
    from google.genai import errors, types

    config = (
        types.GenerateContentConfig(
            response_mime_type="application/json", temperature=0
        )
        if json_output
        else None
    )
    for delay in (*GEMINI_RETRY_DELAYS, None):
        try:
            return client.models.generate_content(
                model=model, contents=contents, config=config
            )
        except errors.APIError as error:
            if delay is None or error.code not in {429, 500, 503, 504}:
                raise
            print(f"[Pipeline] Gemini returned {error.code}; retrying in {delay}s...")
            time.sleep(delay)


def repair_component(client, model, component, source_path, problem):
    """Ask Gemini to fix a syntax or runtime error without redesigning the UI."""
    from visual_refine import load_prompt, strip_code_fence

    prompt = load_prompt(
        "repair",
        component=component,
        problem=problem,
        code=source_path.read_text(encoding="utf-8"),
    )
    response = generate(client, model, [prompt])
    patched_code = strip_code_fence(response.text or "")
    if not patched_code:
        raise RuntimeError(f"Gemini returned empty repair for {component}.")
    source_path.write_text(f"{patched_code}\n", encoding="utf-8")


def check_syntax(source_path):
    """Return None when the source parses, otherwise the parser message."""
    result = run_command(
        ["node", "check_syntax.js", str(source_path)],
        f"Syntax check for {source_path.name}",
        check=False,
    )
    if "SYNTAX_VALID" in result.stdout:
        return None
    if "SYNTAX_INVALID" not in result.stdout:
        raise RuntimeError(f"Syntax check failed unexpectedly for {source_path}.")
    return result.stdout.strip()


def validate_syntax(client, model, source_path):
    """Patch invalid syntax once; return False if the source is still invalid."""
    problem = check_syntax(source_path)
    if problem is None:
        return True
    print(f"[Pipeline] Patching syntax for {source_path.name}...")
    repair_component(client, model, source_path.stem, source_path, problem)
    return check_syntax(source_path) is None


def find_component_target(app_name, component):
    from evaluate_baseline import find_target, load_targets

    target_dir = PROJECT_ROOT / "Dataset" / "targets" / app_name
    if not target_dir.is_dir():
        raise FileNotFoundError(f"Target app directory not found: {target_dir}")
    return find_target(load_targets(target_dir), component)


def render_and_evaluate(app_name, component, iteration, viewport, output_name=None):
    """Render one component and return its evaluation entry.

    Output goes to output/<app>/<output_name>/iteration-<n>; runs use their
    own folder so later runs never overwrite earlier renders.
    """
    output_name = output_name or f"interactive-{component}"
    iteration_name = f"{output_name}/iteration-{iteration}"
    iteration_dir = PROJECT_ROOT / "output" / app_name / output_name / f"iteration-{iteration}"
    run_command(
        ["node", "batch_render.js", app_name, iteration_name, "3000", component],
        f"Rendering {component}",
        env={"RENDER_VIEWPORTS": json.dumps({component: list(viewport)})},
        check=False,
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
    if result is None:
        raise RuntimeError(f"No metrics found for {component} in {evaluation_path}.")
    return result, iteration_dir


def attempt_iteration(client, model, app_name, component, source_path, iteration, viewport, output_name=None):
    """Validate, render, and evaluate; repair one syntax or runtime error.

    Returns (result, iteration_dir, error). `result` is None when the source
    could not be rendered even after the repair attempt.
    """
    if not validate_syntax(client, model, source_path):
        return None, None, "syntax error persisted after repair"
    result, iteration_dir = render_and_evaluate(app_name, component, iteration, viewport, output_name)
    if result.get("metric_status") == "evaluated":
        return result, iteration_dir, None

    error = result.get("render_error") or result.get("metric_status")
    if result.get("metric_status") != "render_failed":
        raise RuntimeError(f"Could not evaluate {component}: {error}")
    print(f"[Pipeline] Render failed for {component}: {error}. Repairing...")
    repair_component(client, model, component, source_path, error)
    if not validate_syntax(client, model, source_path):
        return None, iteration_dir, error
    result, iteration_dir = render_and_evaluate(app_name, component, iteration, viewport, output_name)
    if result.get("metric_status") == "evaluated":
        return result, iteration_dir, None
    return None, iteration_dir, result.get("render_error") or error


def open_metrics_tracker():
    """Open the CSV tracker, migrating or archiving older column layouts."""
    if METRICS_TRACKER_PATH.exists():
        with METRICS_TRACKER_PATH.open(newline="", encoding="utf-8") as tracker_file:
            rows = list(csv.reader(tracker_file))
        header = rows[0] if rows else None
        if header and header != METRICS_COLUMNS and set(header) <= set(METRICS_COLUMNS):
            records = [dict(zip(header, row)) for row in rows[1:]]
            with METRICS_TRACKER_PATH.open("w", newline="", encoding="utf-8") as tracker_file:
                writer = csv.DictWriter(tracker_file, METRICS_COLUMNS, restval="")
                writer.writeheader()
                writer.writerows(records)
        elif header != METRICS_COLUMNS:
            archive_path = METRICS_TRACKER_PATH.with_name(
                f"metrics_tracker_legacy_{int(time.time())}.csv"
            )
            METRICS_TRACKER_PATH.rename(archive_path)
            print(f"[Pipeline] Archived old metrics tracker to {archive_path.name}.")
    tracker_exists = METRICS_TRACKER_PATH.exists()
    tracker_file = METRICS_TRACKER_PATH.open("a", newline="", encoding="utf-8")
    if not tracker_exists:
        csv.writer(tracker_file).writerow(METRICS_COLUMNS)
    return tracker_file


def log_metrics(recorder, iteration, result, status, error=None):
    """Record an iteration in the run history database and the CSV tracker."""
    judge = (
        {key: result.get(key) for key in ("edited_region", "evidence", "unintended_changes")}
        if result and "edit_compliance" in result
        else None
    )
    recorder.record_iteration(iteration, result, status, error=error, judge=judge)
    result = result or {}
    with open_metrics_tracker() as tracker_file:
        csv.writer(tracker_file).writerow(
            [
                recorder.app,
                recorder.component,
                iteration,
                recorder.mode,
                result.get("ssim", ""),
                result.get("content_ssim", ""),
                result.get("clip_similarity", ""),
                result.get("edit_compliance", ""),
                result.get("preservation", ""),
                status,
                recorder.model,
                recorder.run_id,
            ]
        )


def regressed(result, reference):
    """Guardrail: reject a candidate whose SSIM drops more than the tolerance.

    Content SSIM is deliberately not used here: font rendering differs between
    the render and the screenshot, so it fluctuates with text pixels and
    rejected candidates whose layout had clearly improved.
    """
    return result["ssim"] < reference["ssim"] - MAX_SSIM_REGRESSION


def converged(result):
    """Stop early only if layout matches in content regions too, so a mostly
    blank screen cannot reach the SSIM threshold with misplaced elements."""
    return (
        result["ssim"] >= SSIM_THRESHOLD
        and result["content_ssim"] >= CONTENT_SSIM_THRESHOLD
    )


def parse_json_response(text):
    """Parse a JSON object from a model response, tolerating stray text."""
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        start, end = text.find("{"), text.rfind("}")
        if start == -1 or end <= start:
            raise
        return json.loads(text[start:end + 1])


def save_notes(notes_path, prompt, response_text):
    """Keep the model's diagnosis/plan with the iteration for traceability."""
    from visual_refine import response_notes

    if notes_path is None:
        return
    notes_path.parent.mkdir(parents=True, exist_ok=True)
    notes_path.write_text(
        response_notes(response_text) or "(no notes returned)", encoding="utf-8"
    )
    notes_path.with_name("prompt.txt").write_text(prompt, encoding="utf-8")


def normalize_inventory(inventory, canvas):
    """Convert Gemini box_2d boxes (0-1000, [ymin, xmin, ymax, xmax]) to
    [x, y, width, height] canvas points, dropping malformed boxes."""
    width, height = canvas
    components = []
    for item in inventory.get("components", []):
        box = item.pop("box_2d", None)
        if not (isinstance(box, list) and len(box) == 4):
            continue
        try:
            ymin, xmin, ymax, xmax = (min(max(float(value), 0), 1000) for value in box)
        except (TypeError, ValueError):
            continue
        if ymax <= ymin or xmax <= xmin:
            continue
        item["bbox"] = [
            round(xmin * width / 1000),
            round(ymin * height / 1000),
            round((xmax - xmin) * width / 1000),
            round((ymax - ymin) * height / 1000),
        ]
        components.append(item)
    inventory["components"] = components
    return inventory


def build_inventory(client, model, app_name, component, target_path, canvas):
    """Decompose the target screenshot into typed UI components (cached)."""
    from layout_analysis import describe_layout, read_color, to_logical
    from visual_refine import image_part, load_prompt, load_spatial_metadata

    cache_path = PROJECT_ROOT / "output" / app_name / "inventory" / f"{component}.json"
    if cache_path.exists():
        return json.loads(cache_path.read_text(encoding="utf-8"))

    layout = describe_layout(to_logical(read_color(target_path), canvas), normalized=True)
    spatial_metadata = load_spatial_metadata(target_path)
    if spatial_metadata != "{}":
        layout += f"\n\nGroundingDINO/SAM detections:\n{spatial_metadata}"
    prompt = load_prompt(
        "inventory",
        canvas_width=canvas[0],
        canvas_height=canvas[1],
        layout=layout,
    )
    print(f"[Pipeline] Building component inventory for {component}...")
    response = generate(client, model, [prompt, image_part(target_path)], json_output=True)
    inventory = normalize_inventory(parse_json_response(response.text or ""), canvas)
    cache_path.parent.mkdir(parents=True, exist_ok=True)
    cache_path.write_text(json.dumps(inventory, indent=2), encoding="utf-8")
    return inventory


def refine_component(
    client,
    model,
    component,
    source_path,
    target_path,
    rendered_path,
    item,
    canvas,
    inventory=None,
    regression_note="",
    notes_path=None,
):
    """Run one diagnose-then-fix refinement pass against the target."""
    from layout_analysis import comparison_image
    from visual_refine import (
        build_layout_feedback,
        build_prompt,
        image_part,
        png_part,
        strip_code_fence,
    )

    prompt = build_prompt(
        component,
        source_path.read_text(encoding="utf-8"),
        item,
        canvas,
        inventory=inventory,
        layout_feedback=build_layout_feedback(
            target_path, rendered_path, item.get("worst_regions")
        ),
        regression_note=regression_note,
    )
    response = generate(
        client,
        model,
        [
            prompt,
            image_part(target_path),
            image_part(rendered_path),
            png_part(comparison_image(target_path, rendered_path)),
        ],
    )
    refined_code = strip_code_fence(response.text or "")
    if not refined_code:
        raise RuntimeError(f"Gemini returned empty refinement for {component}.")
    save_notes(notes_path, prompt, response.text)
    source_path.write_text(f"{refined_code}\n", encoding="utf-8")


def edit_component(
    client,
    model,
    component,
    source_path,
    before_path,
    current_path,
    instruction,
    canvas,
    feedback="",
    notes_path=None,
):
    """Apply the user's requested change to the current source."""
    from visual_refine import image_part, load_prompt, rn_rules, strip_code_fence

    prompt = load_prompt(
        "edit",
        component=component,
        instruction=instruction.strip(),
        feedback=f"# Feedback on the previous attempt\n{feedback}\n" if feedback else "",
        rules=rn_rules(component, canvas),
        code=source_path.read_text(encoding="utf-8"),
    )
    response = generate(
        client, model, [prompt, image_part(before_path), image_part(current_path)]
    )
    edited_code = strip_code_fence(response.text or "")
    if not edited_code:
        raise RuntimeError(f"Gemini returned empty edit for {component}.")
    save_notes(notes_path, prompt, response.text)
    source_path.write_text(f"{edited_code}\n", encoding="utf-8")


def judge_edit(client, model, before_path, after_path, instruction, canvas):
    """Score a user edit: compliance from a VLM judge, preservation measured.

    Edit Compliance (0-1) is the judge's rating of whether the requested change
    is visibly and correctly applied. Structural Preservation is the edge-SSIM
    between the pre-edit and post-edit renders outside the region the request
    legitimately affects, so unrequested layout changes lower it.
    """
    from layout_analysis import structural_preservation
    from visual_refine import image_part, load_prompt

    prompt = load_prompt(
        "edit_judge",
        instruction=instruction.strip(),
        canvas_width=canvas[0],
        canvas_height=canvas[1],
    )
    response = generate(
        client,
        model,
        [prompt, image_part(before_path), image_part(after_path)],
        json_output=True,
    )
    verdict = parse_json_response(response.text or "")
    compliance = min(max(float(verdict.get("compliance", 0)), 0.0), 10.0) / 10
    region = verdict.get("edited_region")
    if not (isinstance(region, list) and len(region) == 4):
        region = None
    preservation = structural_preservation(before_path, after_path, canvas, region)
    return {
        "edit_compliance": round(compliance, 4),
        "preservation": round(preservation, 4),
        "edited_region": region,
        "evidence": verdict.get("evidence", ""),
        "unintended_changes": verdict.get("unintended_changes", []),
    }


def create_component_from_target(app_name, target_path):
    """Generate an initial component: decompose the screenshot, then code it."""
    try:
        from google import genai
        from layout_analysis import describe_layout, logical_size, read_color, to_logical
        from visual_refine import (
            MODEL,
            format_inventory,
            image_part,
            load_prompt,
            rn_rules,
            strip_code_fence,
        )
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
    canvas = logical_size(target_path)
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    inventory = build_inventory(client, MODEL, app_name, component, target_path, canvas)
    prompt = load_prompt(
        "generate",
        component=component,
        canvas_width=canvas[0],
        canvas_height=canvas[1],
        inventory=format_inventory(inventory),
        layout=describe_layout(to_logical(read_color(target_path), canvas)),
        rules=rn_rules(component, canvas),
    )
    response = generate(client, MODEL, [prompt, image_part(target_path)])
    generated_code = strip_code_fence(response.text or "")
    if not generated_code:
        raise RuntimeError(f"Gemini returned empty code for {target_path.name}.")
    save_notes(
        PROJECT_ROOT / "output" / app_name / "generation" / component / "notes.txt",
        prompt,
        response.text,
    )
    source_path.write_text(f"{generated_code}\n", encoding="utf-8")
    return component, source_path


def evaluate_candidate(client, model, recorder, source_path, iteration, viewport):
    """Render and score the current source, keeping a copy of the source."""
    result, iteration_dir, error = attempt_iteration(
        client, model, recorder.app, recorder.component, source_path, iteration,
        viewport, recorder.output_name,
    )
    source_snapshot = source_path.read_bytes()
    iteration_dir = recorder.iteration_dir(iteration)
    iteration_dir.mkdir(parents=True, exist_ok=True)
    (iteration_dir / f"{recorder.component}.source.js").write_bytes(source_snapshot)
    return result, source_snapshot, error


def run_fidelity_loop(client, model, recorder, source_path, target_path, viewport, max_iterations):
    """Refine the screen towards the target screenshot.

    Iteration 0 evaluates the current source; iterations 1..max_iterations each
    evaluate one refinement pass. A candidate that drops SSIM by more than
    MAX_SSIM_REGRESSION relative to the best accepted version is rejected, the
    best version is restored, and refinement continues from it.
    """
    component = recorder.component
    inventory = build_inventory(client, model, recorder.app, component, target_path, viewport)
    baseline = None
    best_result = None
    best_source = None
    best_iteration = None
    current_result = None
    regression_note = ""
    for iteration in range(max_iterations + 1):
        result, source_snapshot, error = evaluate_candidate(
            client, model, recorder, source_path, iteration, viewport
        )
        if result is None:
            log_metrics(recorder, iteration, None, "render_failed", error=error)
            if best_result is None:
                raise RuntimeError(f"{component} could not be rendered: {error}")
            source_path.write_bytes(best_source)
            current_result = best_result
            regression_note = (
                f"the previous refinement failed to render ({error}) and was "
                "discarded. Start again from this source."
            )
            print(f"[Pipeline] Rejected {component} iteration {iteration}: {error}")
        elif best_result is None:
            baseline = best_result = current_result = result
            best_source, best_iteration = source_snapshot, iteration
            log_metrics(recorder, iteration, result, "baseline")
        elif regressed(result, best_result):
            log_metrics(recorder, iteration, result, "rejected")
            source_path.write_bytes(best_source)
            current_result = best_result
            regression_note = (
                f"the previous refinement attempt was rolled back because it "
                f"lowered SSIM from {best_result['ssim']:.4f} to "
                f"{result['ssim']:.4f}. Its diagnosis was probably wrong or the "
                "edits were too broad; try different, targeted fixes."
            )
            print(
                f"[Pipeline] Rejected {component} iteration {iteration}: "
                f"SSIM {best_result['ssim']:.4f} -> {result['ssim']:.4f}."
            )
        else:
            improved = (result["ssim"], result["clip_similarity"]) > (
                best_result["ssim"],
                best_result["clip_similarity"],
            )
            if improved:
                best_result, best_source, best_iteration = result, source_snapshot, iteration
            current_result = result
            regression_note = ""
            log_metrics(recorder, iteration, result, "improved" if improved else "accepted")

        if iteration == max_iterations or converged(best_result):
            break

        print(f"[Pipeline] Refining {component} (iteration {iteration + 1})...")
        refine_component(
            client,
            model,
            component,
            source_path,
            target_path,
            Path(current_result["render"]),
            current_result,
            viewport,
            inventory=inventory,
            regression_note=regression_note,
            notes_path=recorder.iteration_dir(iteration + 1) / "diagnosis.txt",
        )

    print(
        f"[Pipeline] {component} final: SSIM {best_result['ssim']:.4f}, "
        f"content SSIM {best_result['content_ssim']:.4f}, "
        f"CLIP {best_result['clip_similarity']:.4f}."
    )
    return baseline, best_result, best_source, best_iteration


def edit_is_better(candidate, best):
    """Prefer clearly higher compliance; otherwise higher preservation."""
    if candidate["edit_compliance"] >= best["edit_compliance"] + EDIT_TOLERANCE:
        return True
    if candidate["edit_compliance"] <= best["edit_compliance"] - EDIT_TOLERANCE:
        return False
    return (candidate["edit_compliance"], candidate["preservation"]) > (
        best["edit_compliance"],
        best["preservation"],
    )


def edit_regressed(candidate, best):
    """Guardrail for edits: no clear compliance gain and preservation dropped."""
    return (
        candidate["edit_compliance"] < best["edit_compliance"] + EDIT_TOLERANCE
        and candidate["preservation"] < best["preservation"] - MAX_SSIM_REGRESSION
    )


def edit_done(result):
    return (
        result["edit_compliance"] >= EDIT_COMPLIANCE_THRESHOLD
        and result["preservation"] >= PRESERVATION_THRESHOLD
    )


def edit_feedback(result):
    lines = [
        f"Edit compliance: {result['edit_compliance']:.2f} (judge: {result['evidence']})",
        f"Structural preservation outside the edited region: {result['preservation']:.3f}",
    ]
    if result.get("unintended_changes"):
        lines.append("Unintended changes to undo:")
        lines.extend(f"- {change}" for change in result["unintended_changes"])
    return "\n".join(lines)


def run_edit_loop(client, model, recorder, source_path, viewport, max_iterations, instruction):
    """Apply a user-requested change and score it against the pre-edit render.

    SSIM/CLIP against the original screenshot are logged for reference only:
    an intended edit deliberately moves the screen away from the screenshot.
    Candidates are ranked by Edit Compliance, then Structural Preservation.
    """
    from visual_refine import JUDGE_MODEL

    component = recorder.component
    baseline, baseline_source, error = evaluate_candidate(
        client, model, recorder, source_path, 0, viewport
    )
    if baseline is None:
        log_metrics(recorder, 0, None, "render_failed", error=error)
        raise RuntimeError(f"{component} could not be rendered: {error}")
    log_metrics(recorder, 0, baseline, "baseline")
    before_path = Path(baseline["render"])
    best_result, best_source, best_iteration = None, None, None
    current_render = before_path
    feedback = ""
    for iteration in range(1, max_iterations + 1):
        print(f"[Pipeline] Applying user edit to {component} (iteration {iteration})...")
        edit_component(
            client,
            model,
            component,
            source_path,
            before_path,
            current_render,
            instruction,
            viewport,
            feedback=feedback,
            notes_path=recorder.iteration_dir(iteration) / "plan.txt",
        )
        result, source_snapshot, error = evaluate_candidate(
            client, model, recorder, source_path, iteration, viewport
        )
        if result is None:
            log_metrics(recorder, iteration, None, "render_failed", error=error)
            source_path.write_bytes(best_source or baseline_source)
            feedback = f"The previous attempt failed to render ({error}) and was discarded."
            continue

        result.update(
            judge_edit(client, JUDGE_MODEL, before_path, Path(result["render"]), instruction, viewport)
        )
        if best_result is not None and edit_regressed(result, best_result):
            status = "rejected"
            source_path.write_bytes(best_source)
            current_render = Path(best_result["render"])
            feedback = (
                "The previous attempt was rolled back because it changed parts "
                "of the screen the request did not mention.\n" + edit_feedback(result)
            )
        else:
            status = "accepted"
            if best_result is None or edit_is_better(result, best_result):
                best_result, best_source, best_iteration = result, source_snapshot, iteration
                status = "improved"
            current_render = Path(result["render"])
            feedback = edit_feedback(result)
        log_metrics(recorder, iteration, result, status)
        print(
            f"[Pipeline] {component} edit iteration {iteration}: compliance "
            f"{result['edit_compliance']:.2f}, preservation "
            f"{result['preservation']:.3f} ({status})."
        )
        if best_result is not None and edit_done(best_result):
            break

    if best_result is None:
        best_result = {**baseline, "edit_compliance": 0.0, "preservation": 1.0}
        best_source, best_iteration = baseline_source, 0
    return baseline, best_result, best_source, best_iteration


def run_selected_refinement(app_name, component, max_iterations=3, tweak=""):
    """Refine one generated screen and return its best result and source.

    Without a tweak the screen is refined towards its target screenshot. With
    a tweak, the user's requested change is applied and scored instead. Every
    run is recorded in the history database (run_store) under its own folder.
    """
    try:
        from google import genai
        from layout_analysis import logical_size
        from run_store import RunRecorder
        from visual_refine import JUDGE_MODEL, MODEL
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
    if not source_path.exists():
        raise FileNotFoundError(f"Generated component not found: {source_path}")
    target_path = find_component_target(app_name, component)
    if target_path is None:
        raise FileNotFoundError(f"No target screenshot found for {component}.")
    viewport = logical_size(target_path)

    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    editing = bool(tweak.strip())
    recorder = RunRecorder(
        app_name,
        component,
        "edit" if editing else "fidelity",
        MODEL,
        target_path,
        max_iterations,
        instruction=tweak.strip(),
        judge_model=JUDGE_MODEL if editing else None,
    )
    original_source = source_path.read_bytes()
    try:
        with ensure_dev_server():
            if editing:
                baseline, best, best_source, best_iteration = run_edit_loop(
                    client, MODEL, recorder, source_path, viewport, max_iterations, tweak,
                )
            else:
                baseline, best, best_source, best_iteration = run_fidelity_loop(
                    client, MODEL, recorder, source_path, target_path, viewport,
                    max_iterations,
                )
    except BaseException as error:
        # Never leave a rejected or half-refined candidate on disk.
        source_path.write_bytes(original_source)
        recorder.finish(status="failed", error=str(error) or type(error).__name__)
        raise

    source_path.write_bytes(best_source)
    recorder.finish(baseline, best, best_iteration)
    return {**best, "run_id": recorder.run_id}, source_path


def run_pipeline(app_name, max_iterations):
    source_dir = PROJECT_ROOT / "src" / "generated" / app_name
    if not source_dir.is_dir():
        raise FileNotFoundError(f"Generated app directory not found: {source_dir}")

    components = sorted(
        path.stem
        for path in source_dir.iterdir()
        if path.is_file() and path.suffix.lower() in {".js", ".jsx"}
    )
    if not components:
        raise RuntimeError(f"No generated components found in {source_dir}.")

    results = {}
    with ensure_dev_server():
        for component in components:
            if find_component_target(app_name, component) is None:
                print(f"[Pipeline] Skipping {component}: no target screenshot.")
                continue
            print(f"\n[Pipeline] Refining {app_name}/{component}")
            results[component], _ = run_selected_refinement(
                app_name, component, max_iterations
            )

    print("\n[Pipeline] Summary")
    for component, result in results.items():
        status = "converged" if converged(result) else "below threshold"
        print(
            f"  {component}: SSIM {result['ssim']:.4f} | content SSIM "
            f"{result['content_ssim']:.4f} | CLIP "
            f"{result['clip_similarity']:.4f} ({status})"
        )


if __name__ == "__main__":
    arguments = parse_args()
    run_pipeline(arguments.app, arguments.max_iterations)
