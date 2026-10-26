"""Run one automated visual-refinement pass over evaluated generated screens."""

import argparse
import json
import os
import re
import shutil
from pathlib import Path

from google import genai
from google.genai import types


MODEL = "gemini-3.5-flash-lite"


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
    match = re.search(r"```(?:javascript|jsx|js)?\s*(.*?)```", text, re.DOTALL)
    return match.group(1).strip() if match else text.strip()


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


def build_prompt(component, code, ssim, clip, tweak=""):
    tweak_section = ""
    if tweak.strip():
        tweak_section = f"""

User-directed edit (highest priority):
{tweak.strip()}

Apply this request deliberately and visibly. Treat it as an edit instruction,
not as optional feedback. Identify the affected property or region first, then
change only what is needed to satisfy it. Preserve all unrelated layout,
content, controls, interactions, imports, and styling. If the requested change
intentionally differs from the reference screenshot, keep that intentional
difference; do not undo it merely to increase SSIM or CLIP.

Before returning the code, verify:
1. The requested change is represented explicitly in the source.
2. The changed value is applied to the correct visible element.
3. Existing UI structure and behavior are preserved.
4. The result remains valid React Native Web JSX.
""".rstrip()
    return f"""
You are performing one visual refinement pass for a React Native Web UI.

Component: {component}
Current SSIM: {ssim}
Current CLIP similarity: {clip}

The first image is the original reference screenshot.
The second image is the current rendered screenshot.
Compare them and improve the generated component to reduce visible differences.
When a user-directed edit is provided below, the user request takes priority
over matching the original reference. Make progressive, cumulative edits: start
from the current source, keep successful previous changes, and do not rewrite
the screen from scratch.

Return only the complete JavaScript source code for {component}; do not use Markdown
fences or explanations. Preserve the existing component's behavior and React Native
Web compatibility. Keep local imports such as '../generated-icon' unchanged when
present. Do not introduce navigation packages, native-only APIs, new assets,
placeholder content, or unrelated redesigns. Prefer explicit style values over
indirect or ambiguous changes.

Current source:
{code}
{tweak_section}
""".strip()


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

        code = source_path.read_text(encoding="utf-8")
        prompt = build_prompt(
            component,
            code,
            item["ssim"],
            item["clip_similarity"],
        )
        response = client.models.generate_content(
            model=args.model,
            contents=[prompt, image_part(target_path), image_part(rendered_path)],
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
