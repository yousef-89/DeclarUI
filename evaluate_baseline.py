"""Evaluate baseline renders against same-named reference images."""

import argparse
import json
import sys
from pathlib import Path

import cv2
import numpy as np


def parse_args():
    parser = argparse.ArgumentParser(
        description="Calculate SSIM and CLIP similarity for baseline renders."
    )
    parser.add_argument(
        "--targets",
        type=Path,
        default=Path("Dataset") / "targets",
        help="Directory containing reference images named after components.",
    )
    parser.add_argument(
        "--baseline",
        type=Path,
        default=Path("output") / "baseline",
        help="Directory containing baseline screenshots and summary.json.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("output") / "baseline_evaluation.json",
        help="Path for the evaluation report.",
    )
    return parser.parse_args()


def resolve_path(path):
    return path if path.is_absolute() else Path.cwd() / path


def find_target(target_dir, component):
    candidates = [component]
    if component.endswith("Screen"):
        candidates.append(component[:-len("Screen")])

    for candidate in candidates:
        target_path = target_dir / f"{candidate}.png"
        if target_path.exists():
            return target_path

    return target_dir / f"{candidates[0]}.png"


def load_ssim(target_path, render_path):
    target = cv2.imread(str(target_path), cv2.IMREAD_GRAYSCALE)
    rendered = cv2.imread(str(render_path), cv2.IMREAD_GRAYSCALE)

    if target is None:
        raise ValueError(f"Could not read target image: {target_path}")
    if rendered is None:
        raise ValueError(f"Could not read rendered image: {render_path}")

    resized = target.shape != rendered.shape
    if resized:
        rendered = cv2.resize(
            rendered,
            (target.shape[1], target.shape[0]),
            interpolation=cv2.INTER_AREA,
        )

    from skimage.metrics import structural_similarity

    score = structural_similarity(target, rendered, data_range=255)
    return float(score), resized, list(target.shape[::-1])


def load_clip_scores(target_paths, render_paths, device):
    import torch
    from PIL import Image
    from transformers import CLIPModel, CLIPProcessor

    model_name = "openai/clip-vit-base-patch32"
    processor = CLIPProcessor.from_pretrained(model_name)
    model = CLIPModel.from_pretrained(model_name).to(device)
    model.eval()

    target_images = [Image.open(path).convert("RGB") for path in target_paths]
    render_images = [Image.open(path).convert("RGB") for path in render_paths]

    target_inputs = processor(
        images=target_images,
        return_tensors="pt",
        padding=True,
    ).to(device)
    render_inputs = processor(
        images=render_images,
        return_tensors="pt",
        padding=True,
    ).to(device)

    with torch.no_grad():
        target_vision_output = model.vision_model(**target_inputs)
        render_vision_output = model.vision_model(**render_inputs)
        target_features = model.visual_projection(
            target_vision_output.pooler_output
        )
        render_features = model.visual_projection(
            render_vision_output.pooler_output
        )
        target_features = torch.nn.functional.normalize(
            target_features, p=2, dim=1
        )
        render_features = torch.nn.functional.normalize(
            render_features, p=2, dim=1
        )

    return [
        float(score)
        for score in (target_features * render_features)
        .sum(dim=1)
        .cpu()
        .tolist()
    ]


def run_evaluation(target_dir, baseline_dir, output_path):
    summary_path = baseline_dir / "summary.json"
    if not summary_path.exists():
        raise FileNotFoundError(
            f"Missing {summary_path}. Run the baseline renderer first."
        )

    with summary_path.open(encoding="utf-8") as file:
        summary = json.load(file)

    results = []
    metric_pairs = []
    for item in summary.get("results", []):
        component = item["component"]
        target_path = find_target(target_dir, component)
        rendered_path = Path(item["screenshot"]) if item.get("screenshot") else None
        result = {
            "component": component,
            "render_success": bool(item.get("success")),
            "render_error": item.get("error"),
            "target": str(target_path),
            "render": str(rendered_path) if rendered_path else None,
            "target_exists": target_path.exists(),
            "target_match": target_path.name if target_path.exists() else None,
            "metric_status": "not_evaluated",
            "ssim": None,
            "clip_similarity": None,
            "resized_for_ssim": None,
            "evaluation_size": None,
        }

        if not result["render_success"]:
            result["metric_status"] = "render_failed"
        elif not target_path.exists():
            result["metric_status"] = "target_missing"
        elif rendered_path is None or not rendered_path.exists():
            result["metric_status"] = "render_file_missing"
        else:
            result["metric_status"] = "ready"
            metric_pairs.append((result, target_path, rendered_path))

        results.append(result)

    if metric_pairs:
        device = "cuda" if __import__("torch").cuda.is_available() else "cpu"
        clip_scores = load_clip_scores(
            [pair[1] for pair in metric_pairs],
            [pair[2] for pair in metric_pairs],
            device,
        )
        for (result, target_path, rendered_path), clip_score in zip(
            metric_pairs, clip_scores
        ):
            ssim_score, resized, evaluation_size = load_ssim(
                target_path, rendered_path
            )
            result["ssim"] = round(ssim_score, 4)
            result["clip_similarity"] = round(clip_score, 4)
            result["resized_for_ssim"] = resized
            result["evaluation_size"] = {
                "width": evaluation_size[0],
                "height": evaluation_size[1],
            }
            result["metric_status"] = "evaluated"

    evaluated = [item for item in results if item["metric_status"] == "evaluated"]
    successful = [item for item in results if item["render_success"]]
    report = {
        "protocol_stage": (
            "Refined Evaluation (Iteration 1)"
            if "refined" in baseline_dir.name.lower()
            else "Baseline Evaluation (Iteration 0)"
        ),
        "targets_directory": str(target_dir),
        "baseline_directory": str(baseline_dir),
        "total_components": len(results),
        "successful_renders": len(successful),
        "failed_renders": len(results) - len(successful),
        "metric_evaluated_components": len(evaluated),
        "mean_ssim": round(
            float(np.mean([item["ssim"] for item in evaluated])), 4
        )
        if evaluated
        else None,
        "mean_clip_similarity": round(
            float(np.mean([item["clip_similarity"] for item in evaluated])), 4
        )
        if evaluated
        else None,
        "detailed_results": results,
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as file:
        json.dump(report, file, indent=2)
        file.write("\n")

    print(f"[Baseline Evaluation] Components: {report['total_components']}")
    print(f"[Baseline Evaluation] Successful renders: {report['successful_renders']}")
    print(
        "[Baseline Evaluation] Metric pairs evaluated: "
        f"{report['metric_evaluated_components']}"
    )
    print(f"[Baseline Evaluation] Mean SSIM: {report['mean_ssim']}")
    print(f"[Baseline Evaluation] Mean CLIP: {report['mean_clip_similarity']}")
    print(f"[Baseline Evaluation] Report: {output_path}")
    return report


if __name__ == "__main__":
    try:
        arguments = parse_args()
        run_evaluation(
            resolve_path(arguments.targets),
            resolve_path(arguments.baseline),
            resolve_path(arguments.output),
        )
    except ImportError as error:
        print(
            f"[Baseline Evaluation Error] Missing Python dependency: {error}",
            file=sys.stderr,
        )
        sys.exit(1)
    except Exception as error:
        print(f"[Baseline Evaluation Error] {error}", file=sys.stderr)
        sys.exit(1)
