"""Prompt building and Gemini helpers shared by the refinement loop."""

import json
import os

from pipeline import env_config  # noqa: F401  (loads .env before settings are read)
import re
from pathlib import Path
from string import Template

from google.genai import types


MODEL = os.environ.get("GEMINI_MODEL", "gemini-3.5-flash-lite")
JUDGE_MODEL = os.environ.get("GEMINI_JUDGE_MODEL", MODEL)
PROMPT_DIR = Path(__file__).resolve().parent / "prompts"
PROJECT_ROOT = Path(__file__).resolve().parent.parent
ICON_SOURCE = PROJECT_ROOT / "src" / "generated" / "generated-icon.js"


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


EDIT_PATTERN = re.compile(
    r"<<<<<<< SEARCH[ \t]*\n(.*?)\n?=======[ \t]*\n(.*?)\n?>>>>>>> REPLACE", re.DOTALL
)


def parse_edits(text):
    """Return (search, replace) pairs from SEARCH/REPLACE blocks in a response."""
    return EDIT_PATTERN.findall(text.replace("\r\n", "\n"))


def apply_edits(code, edits):
    """Apply SEARCH/REPLACE edits in order.

    Returns (code, applied count, failed search texts). An exact match is tried
    first, then a line-by-line match that ignores indentation, because models
    often re-indent the snippets they copy.
    """
    applied, failed = 0, []
    for search, replace in edits:
        if search.strip() and search in code:
            code = code.replace(search, replace, 1)
            applied += 1
            continue
        wanted = [line.strip() for line in search.strip("\n").split("\n")]
        lines = code.split("\n")
        stripped = [line.strip() for line in lines]
        start = next(
            (index for index in range(len(lines) - len(wanted) + 1)
             if any(wanted) and stripped[index:index + len(wanted)] == wanted),
            None,
        )
        if start is None:
            failed.append(search)
            continue
        indent = lines[start][: len(lines[start]) - len(lines[start].lstrip())]
        replacement = replace.split("\n") if replace else []
        if replacement:
            replacement[0] = indent + replacement[0].lstrip()
        lines[start:start + len(wanted)] = replacement
        code = "\n".join(lines)
        applied += 1
    return code, applied, failed


def response_notes(text):
    """Return the model's reasoning text that precedes the code or edits."""
    return re.split(r"```|<<<<<<< SEARCH", text, maxsplit=1)[0].strip()


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
    extraction_dir = PROJECT_ROOT / "Dataset" / "extractions"
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


def build_layout_feedback(target_path, rendered_path, worst_regions=None, inventory=None):
    """Describe measured layout differences between target and render.

    Blocks are detected in both images and matched, so the model receives
    explicit corrections ("card c12: move up 18, make 7 taller") instead of
    two block lists it would have to compare itself.
    """
    from pipeline.layout_analysis import geometry_report, load_pair

    target, rendered = load_pair(target_path, rendered_path)
    sections = [geometry_report(target, rendered, inventory)]
    if worst_regions:
        sections.append("Horizontal bands with the largest visual mismatch (lowest SSIM):")
        sections.append("\n".join(
            f"- y {region['y_start']}-{region['y_end']}: SSIM {region['ssim']}"
            for region in worst_regions
        ))
    return "\n\n".join(sections)


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
