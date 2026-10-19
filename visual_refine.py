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
        "--evaluation",
        type=Path,
        default=Path("output") / "baseline-amazon-evaluation.json",
    )
    parser.add_argument(
        "--source-dir",
        type=Path,
        default=Path("src") / "generated",
    )
    parser.add_argument(
        "--backup-dir",
        type=Path,
        default=Path("output") / "refinement" / "iteration-0-source",
    )
    parser.add_argument("--model", default=MODEL)
    return parser.parse_args()


def resolve(path):
    return path if path.is_absolute() else Path.cwd() / path


def strip_code_fence(text):
    match = re.search(r"```(?:javascript|jsx|js)?\s*(.*?)```", text, re.DOTALL)
    return match.group(1).strip() if match else text.strip()


def image_part(path):
    return types.Part.from_bytes(
        data=path.read_bytes(),
        mime_type="image/png",
    )


def build_prompt(component, code, ssim, clip):
    return f"""
You are performing one visual refinement pass for a React Native Web UI.

Component: {component}
Current SSIM: {ssim}
Current CLIP similarity: {clip}

The first image is the original reference screenshot.
The second image is the current rendered screenshot.
Compare them and improve the generated component to reduce the visible differences.

Return only the complete JavaScript source code for {component}; do not use Markdown
fences or explanations. Preserve the existing component's behavior and React Native
Web compatibility. Keep local imports such as '../generated-icon' unchanged when
present. Do not introduce navigation packages, native-only APIs, or new assets.

Current source:
{code}
""".strip()


def refine(args):
    evaluation_path = resolve(args.evaluation)
    source_dir = resolve(args.source_dir)
    backup_dir = resolve(args.backup_dir)

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
