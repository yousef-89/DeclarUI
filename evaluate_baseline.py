"""Evaluate baseline renders against same-named reference images."""

import argparse
import json
import re
import sys
from pathlib import Path

import numpy as np


def parse_args():
    parser = argparse.ArgumentParser(
        description="Calculate SSIM and CLIP similarity for baseline renders."
    )
    parser.add_argument(
        "--app",
        required=True,
        help="Application name used in Dataset/targets, src/generated, and output.",
    )
    parser.add_argument(
        "--targets",
        type=Path,
        default=None,
        help="Directory containing reference images named after components.",
    )
    parser.add_argument(
        "--baseline",
        type=Path,
        default=None,
        help="Directory containing baseline screenshots and summary.json.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Path for the evaluation report.",
    )
    return parser.parse_args()


def resolve_path(path):
    return path if path.is_absolute() else Path.cwd() / path


def load_targets(target_dir):
    targets = {}
    for path in sorted(target_dir.iterdir()):
        if path.is_file() and path.suffix.lower() in {".png", ".jpg", ".jpeg"}:
            targets.setdefault(path.stem, path)
    return targets


def find_target(targets, component):
    candidates = [component]
    if component.endswith("Screen"):
        candidates.append(component[:-len("Screen")])
    for candidate in candidates:
        if candidate in targets:
            return targets[candidate]

    def normalized(value):
        value = re.sub(r"screen$", "", value, flags=re.IGNORECASE)
        return re.sub(r"[^a-z0-9]+", "", value.lower())

    normalized_candidates = {normalized(candidate) for candidate in candidates}
    for target_stem, target_path in targets.items():
        if normalized(target_stem) in normalized_candidates:
            return target_path
    return None


def load_ssim(target_path, render_path):
    """Compare both images on the target's logical canvas.

    Returns global SSIM, content-region SSIM, the lowest-scoring screen regions,
    and the logical evaluation size.
    """
    from layout_analysis import load_pair, region_report, ssim_metrics

    target, rendered = load_pair(target_path, render_path)
    score, content_score, ssim_map, mask = ssim_metrics(target, rendered)
    return (
        score,
        content_score,
        region_report(ssim_map, mask),
        [target.shape[1], target.shape[0]],
    )


def load_clip_scores(target_paths, render_paths, device):
    import torch
    from PIL import Image
    from transformers import CLIPModel, CLIPProcessor

    model_name = "openai/clip-vit-base-patch32"
    processor = CLIPProcessor.from_pretrained(model_name)
    model = CLIPModel.from_pretrained(model_name).to(device)
    model.eval()

    from layout_analysis import background_color, pad_to_square

    def letterboxed(path):
        # CLIPProcessor center-crops to a square, which would discard the top
        # and bottom of a phone screenshot; pad to a square instead.
        image = Image.open(path).convert("RGB")
        blue, green, red = (
            int(channel)
            for channel in background_color(np.asarray(image)[:, :, ::-1])
        )
        return pad_to_square(image, (red, green, blue))

    target_images = [letterboxed(path) for path in target_paths]
    render_images = [letterboxed(path) for path in render_paths]

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

    if not target_dir.exists():
        raise FileNotFoundError(f"Target directory not found: {target_dir}")

    targets = load_targets(target_dir)
    results = []
    metric_pairs = []
    for item in summary.get("results", []):
        component = item["component"]
        target_path = find_target(targets, component)
        rendered_path = Path(item["screenshot"]) if item.get("screenshot") else None
        result = {
            "component": component,
            "render_success": bool(item.get("success")),
            "render_error": item.get("error"),
            "target": str(target_path) if target_path else None,
            "render": str(rendered_path) if rendered_path else None,
            "target_exists": target_path is not None,
            "target_match": target_path.name if target_path else None,
            "metric_status": "not_evaluated",
            "ssim": None,
            "content_ssim": None,
            "clip_similarity": None,
            "worst_regions": None,
            "resized_for_ssim": None,
            "evaluation_size": None,
        }

        if not result["render_success"]:
            result["metric_status"] = "render_failed"
        elif target_path is None:
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
            ssim_score, content_score, worst_regions, evaluation_size = load_ssim(
                target_path, rendered_path
            )
            result["ssim"] = round(ssim_score, 4)
            result["content_ssim"] = round(content_score, 4)
            result["clip_similarity"] = round(clip_score, 4)
            result["worst_regions"] = worst_regions
            result["resized_for_ssim"] = True
            result["evaluation_size"] = {
                "width": evaluation_size[0],
                "height": evaluation_size[1],
            }
            result["metric_status"] = "evaluated"

    evaluated = [item for item in results if item["metric_status"] == "evaluated"]
    successful = [item for item in results if item["render_success"]]
    report = {
        "protocol_stage": (
            f"Refinement Evaluation ({baseline_dir.name})"
            if baseline_dir.name.startswith("iteration-")
            and baseline_dir.name != "iteration-0"
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
        "mean_content_ssim": round(
            float(np.mean([item["content_ssim"] for item in evaluated])), 4
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
    print(f"[Baseline Evaluation] Mean content SSIM: {report['mean_content_ssim']}")
    print(f"[Baseline Evaluation] Mean CLIP: {report['mean_clip_similarity']}")
    print(f"[Baseline Evaluation] Report: {output_path}")
    return report


if __name__ == "__main__":
    try:
        arguments = parse_args()
        run_evaluation(
            resolve_path(arguments.targets or Path("Dataset") / "targets" / arguments.app),
            resolve_path(arguments.baseline or Path("output") / arguments.app / "baseline"),
            resolve_path(arguments.output or Path("output") / arguments.app / "baseline-evaluation.json"),
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
