"""Run one automated visual-refinement pass over evaluated generated screens."""

import argparse
import json
import os

import env_config  # noqa: F401  (loads .env before settings are read)
import re
import shutil
from pathlib import Path
from string import Template

from google import genai
from google.genai import types


MODEL = os.environ.get("GEMINI_MODEL", "gemini-3.5-flash-lite")
JUDGE_MODEL = os.environ.get("GEMINI_JUDGE_MODEL", MODEL)
PROMPT_DIR = Path(__file__).resolve().parent / "prompts"
ICON_SOURCE = Path(__file__).resolve().parent / "src" / "generated" / "generated-icon.js"


def parse_args():
    parser = argparse.ArgumentParser(
        description="Refine generated screens using reference and rendered images."
    )
    parser.add_argument(
        "--app",
        required=True,
        help="Application name used in src/generated and output paths.",
    )
    parser.add_argument(
        "--evaluation",
        type=Path,
        default=None,
    )
    parser.add_argument(
        "--source-dir",
        type=Path,
        default=None,
    )
    parser.add_argument(
        "--backup-dir",
        type=Path,
        default=None,
    )
    parser.add_argument("--model", default=MODEL)
    return parser.parse_args()


def resolve(path):
    return path if path.is_absolute() else Path.cwd() / path


def strip_code_fence(text):
    """Extract the component source from a model response.

    Prefers a fenced block tagged jsx/js/javascript; otherwise uses the longest
    fenced block, so a DIAGNOSIS or JSON block cannot be mistaken for code.
    """
    blocks = re.findall(r"```([A-Za-z]*)[ \t]*\n?(.*?)```", text, re.DOTALL)
    code_blocks = [
        body for language, body in blocks
        if language.lower() in {"jsx", "js", "javascript", "tsx"}
    ]
    candidates = code_blocks or [body for _, body in blocks]
    if candidates:
        return max(candidates, key=len).strip()
    return text.strip()


def response_notes(text):
    """Return the model's reasoning text that precedes the code block."""
    return text.split("```", 1)[0].strip()


def load_prompt(name, **values):
    """Fill a prompt template from the prompts/ directory."""
    template = Template((PROMPT_DIR / f"{name}.txt").read_text(encoding="utf-8"))
    return template.substitute(**values).strip()


def icon_names():
    source = ICON_SOURCE.read_text(encoding="utf-8")
    block = source[source.index("const ICONS"):source.index("const ALIASES")]
    return ", ".join(re.findall(r"^  '([a-z-]+)':", block, re.MULTILINE))


def rn_rules(component, canvas):
    return load_prompt(
        "rn_web_rules",
        component=component,
        canvas_width=canvas[0],
        canvas_height=canvas[1],
        icon_names=icon_names(),
    )


def image_part(path):
    suffix = path.suffix.lower()
    mime_type = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
    }.get(suffix)
    if mime_type is None:
        raise ValueError(f"Unsupported image format: {path}")
    return types.Part.from_bytes(
        data=path.read_bytes(),
        mime_type=mime_type,
    )


def png_part(png_bytes):
    return types.Part.from_bytes(data=png_bytes, mime_type="image/png")


def _normalized_name(value):
    return re.sub(r"[^a-z0-9]+", "", value.lower().replace("screen", ""))


def load_spatial_metadata(target_path):
    """Load target-specific GroundingDINO/SAM metadata when available."""
    extraction_dir = Path(__file__).resolve().parent / "Dataset" / "extractions"
    if not extraction_dir.is_dir():
        return "{}"

    target_names = {
        _normalized_name(target_path.stem),
        _normalized_name(target_path.name),
    }
    matches = []
    for metadata_path in sorted(extraction_dir.rglob("*.json")):
        searchable_names = {
            _normalized_name(metadata_path.stem),
            _normalized_name(metadata_path.parent.name),
        }
        if target_names.intersection(searchable_names):
            matches.append(metadata_path)

    if not matches:
        return "{}"

    metadata = {}
    for metadata_path in matches:
        try:
            content = json.loads(metadata_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as error:
            raise RuntimeError(
                f"Could not load spatial metadata from {metadata_path}: {error}"
            ) from error
        metadata[str(metadata_path.relative_to(extraction_dir))] = content
    return json.dumps(metadata, indent=2, ensure_ascii=True)


def build_layout_feedback(target_path, rendered_path, worst_regions=None):
    """Describe measured layout differences between target and render."""
    from layout_analysis import describe_layout, load_pair

    target, rendered = load_pair(target_path, rendered_path)
    sections = [
        "Target screenshot layout (measured):",
        describe_layout(target),
        "",
        "Current render layout (measured on the same canvas):",
        describe_layout(rendered),
    ]
    if worst_regions:
        sections.extend(["", "Regions with the largest visual mismatch (lowest SSIM):"])
        sections.extend(
            f"- y {region['y_start']}-{region['y_end']}: SSIM {region['ssim']}"
            for region in worst_regions
        )
    return "\n".join(sections)


def format_inventory(inventory):
    """Render a component inventory as compact prompt text."""
    if not inventory:
        return "(not available)"
    screen = inventory.get("screen", {})
    lines = [
        f"Screen: {screen.get('summary', '')} Background {screen.get('background', '?')}, "
        f"{screen.get('theme', '?')} theme, status bar "
        f"{'shown' if screen.get('has_status_bar') else 'not shown'}."
    ]
    for item in inventory.get("components", []):
        details = [
            f"{item.get('id', '?')} {item.get('type', 'other')} bbox={item.get('bbox')}"
        ]
        for key in ("text", "icon", "style", "state"):
            if item.get(key):
                details.append(f"{key}: {item[key]}")
        if item.get("parent"):
            details.append(f"in {item['parent']}")
        lines.append("- " + "; ".join(details))
    return "\n".join(lines)


def build_prompt(
    component,
    code,
    item,
    canvas,
    inventory=None,
    layout_feedback="",
    regression_note="",
):
    """Build the refinement prompt for one iteration."""
    note = f"\nNote: {regression_note}\n" if regression_note else ""
    return load_prompt(
        "refine",
        component=component,
        canvas_width=canvas[0],
        canvas_height=canvas[1],
        ssim=item["ssim"],
        content_ssim=item.get("content_ssim"),
        clip=item["clip_similarity"],
        regression_note=note,
        inventory=format_inventory(inventory),
        layout_feedback=layout_feedback,
        rules=rn_rules(component, canvas),
        code=code,
    )


def refine(args):
    evaluation_path = resolve(
        args.evaluation or Path("output") / args.app / "baseline-evaluation.json"
    )
    source_dir = resolve(args.source_dir or Path("src") / "generated" / args.app)
    backup_dir = resolve(
        args.backup_dir
        or Path("output") / args.app / "refinement" / "iteration-0-source"
    )

    if "GEMINI_API_KEY" not in os.environ:
        raise RuntimeError("GEMINI_API_KEY is not set.")
    if not evaluation_path.exists():
        raise FileNotFoundError(f"Evaluation report not found: {evaluation_path}")
    if not source_dir.exists():
        raise FileNotFoundError(f"Generated source directory not found: {source_dir}")

    report = json.loads(evaluation_path.read_text(encoding="utf-8"))
    backup_dir.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    refined = []

    for item in report.get("detailed_results", []):
        if item.get("metric_status") != "evaluated":
            continue

        component = item["component"]
        source_path = source_dir / f"{component}.js"
        target_path = Path(item["target"])
        rendered_path = Path(item["render"])
        if not source_path.exists():
            print(f"[Visual Refinement] Skipping missing source: {source_path}")
            continue

        backup_path = backup_dir / source_path.name
        if not backup_path.exists():
            shutil.copy2(source_path, backup_path)

        from layout_analysis import comparison_image, logical_size

        code = source_path.read_text(encoding="utf-8")
        prompt = build_prompt(
            component,
            code,
            item,
            logical_size(target_path),
            layout_feedback=build_layout_feedback(
                target_path, rendered_path, item.get("worst_regions")
            ),
        )
        response = client.models.generate_content(
            model=args.model,
            contents=[
                prompt,
                image_part(target_path),
                image_part(rendered_path),
                png_part(comparison_image(target_path, rendered_path)),
            ],
        )
        refined_code = strip_code_fence(response.text or "")
        if not refined_code:
            raise RuntimeError(f"Empty refinement response for {component}")

        source_path.write_text(f"{refined_code}\n", encoding="utf-8")
        refined.append(component)
        print(f"[Visual Refinement] Refined {component}")

    if not refined:
        raise RuntimeError("No evaluated components were available for refinement.")

    print(f"[Visual Refinement] Completed iteration 1 for {len(refined)} components.")
    print(f"[Visual Refinement] Original source backup: {backup_dir}")


if __name__ == "__main__":
    arguments = parse_args()
    refine(arguments)
