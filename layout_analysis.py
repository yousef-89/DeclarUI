"""Shared image analysis for rendering, evaluation, and refinement feedback.

All comparisons happen on a logical canvas (LOGICAL_WIDTH points wide, height
derived from the target's aspect ratio) so that device pixel ratio, screenshot
resolution, and aspect ratio no longer distort the metrics.
"""

import cv2
import numpy as np

LOGICAL_WIDTH = 390
BACKGROUND_TOLERANCE = 18
CONTENT_DILATION = 6
MAX_BLOCKS = 40


def read_color(path):
    image = cv2.imread(str(path), cv2.IMREAD_COLOR)
    if image is None:
        raise ValueError(f"Could not read image: {path}")
    return image


def logical_size(path):
    """Return the (width, height) viewport that matches the target's aspect ratio."""
    height, width = read_color(path).shape[:2]
    return LOGICAL_WIDTH, int(round(LOGICAL_WIDTH * height / width))


def to_logical(image, size):
    return cv2.resize(image, size, interpolation=cv2.INTER_AREA)


def load_pair(target_path, render_path):
    """Load target and render as color images on the target's logical canvas."""
    size = logical_size(target_path)
    target = to_logical(read_color(target_path), size)
    render = to_logical(read_color(render_path), size)
    return target, render


def background_color(image):
    """Estimate the background as the most frequent color in the image."""
    pixels = image[::2, ::2].reshape(-1, 3)
    quantized = pixels // 8
    colors, inverse, counts = np.unique(
        quantized, axis=0, return_inverse=True, return_counts=True
    )
    dominant = pixels[inverse.reshape(-1) == np.argmax(counts)]
    return np.median(dominant, axis=0).astype(np.int16)


def content_mask(image):
    """Return a boolean mask of pixels that differ from the background."""
    difference = np.abs(image.astype(np.int16) - background_color(image))
    return difference.max(axis=2) > BACKGROUND_TOLERANCE


def ssim_metrics(target, render):
    """Return global SSIM, content-region SSIM, and the per-pixel SSIM map.

    Content SSIM averages the SSIM map only where either image contains
    foreground content, so large shared blank areas cannot inflate the score.
    """
    from skimage.metrics import structural_similarity

    target_gray = cv2.cvtColor(target, cv2.COLOR_BGR2GRAY)
    render_gray = cv2.cvtColor(render, cv2.COLOR_BGR2GRAY)
    score, ssim_map = structural_similarity(
        target_gray, render_gray, data_range=255, full=True
    )
    kernel = np.ones((2 * CONTENT_DILATION + 1,) * 2, np.uint8)
    mask = cv2.dilate(
        (content_mask(target) | content_mask(render)).astype(np.uint8), kernel
    ).astype(bool)
    content_score = float(ssim_map[mask].mean()) if mask.any() else float(score)
    return float(score), content_score, ssim_map, mask


def region_report(ssim_map, mask, bands=12, worst=4):
    """Describe the horizontal bands with the lowest content SSIM."""
    height = ssim_map.shape[0]
    edges = np.linspace(0, height, bands + 1).astype(int)
    regions = []
    for top, bottom in zip(edges[:-1], edges[1:]):
        band_mask = mask[top:bottom]
        if band_mask.mean() < 0.02:
            continue
        regions.append(
            {
                "y_start": int(top),
                "y_end": int(bottom),
                "ssim": round(float(ssim_map[top:bottom][band_mask].mean()), 4),
            }
        )
    return sorted(regions, key=lambda region: region["ssim"])[:worst]


def detect_blocks(image):
    """Detect visual blocks (text lines, icons, cards, bars) as bounding boxes."""
    background = background_color(image)
    mask = content_mask(image).astype(np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((5, 9), np.uint8))
    count, _, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=8)
    height, width = image.shape[:2]
    blocks = []
    for index in range(1, count):
        x, y, w, h, area = stats[index]
        if area < 30 or w * h > 0.9 * width * height:
            continue
        pixels = image[y:y + h, x:x + w][mask[y:y + h, x:x + w].astype(bool)]
        # Report the color that stands out from the background (e.g. the text
        # color rather than its anti-aliased edges).
        contrast = np.abs(pixels.astype(np.int16) - background).max(axis=1)
        strong = pixels[contrast >= np.percentile(contrast, 75)] if len(pixels) else pixels
        b, g, r = (np.median(strong, axis=0) if len(strong) else (0, 0, 0))
        blocks.append(
            {
                "x": int(x),
                "y": int(y),
                "w": int(w),
                "h": int(h),
                "color": f"#{int(r):02x}{int(g):02x}{int(b):02x}",
            }
        )
    blocks.sort(key=lambda block: block["w"] * block["h"], reverse=True)
    blocks = blocks[:MAX_BLOCKS]
    blocks.sort(key=lambda block: (block["y"], block["x"]))
    return blocks


def describe_layout(image, normalized=False):
    """Return a compact textual layout description.

    Coordinates are logical points, or with `normalized` Gemini's native
    box_2d format: [ymin, xmin, ymax, xmax] scaled to 0-1000.
    """
    height, width = image.shape[:2]
    bg = background_color(image)
    lines = [
        f"Canvas: {width}x{height} points, background "
        f"#{int(bg[2]):02x}{int(bg[1]):02x}{int(bg[0]):02x}.",
    ]
    blocks = detect_blocks(image)
    if normalized:
        lines.append("Detected blocks (box_2d [ymin, xmin, ymax, xmax] in 0-1000, dominant color):")
        lines.extend(
            f"- [{round(block['y'] * 1000 / height)}, {round(block['x'] * 1000 / width)}, "
            f"{round((block['y'] + block['h']) * 1000 / height)}, "
            f"{round((block['x'] + block['w']) * 1000 / width)}] {block['color']}"
            for block in blocks
        )
    else:
        lines.append("Detected blocks (x, y, width, height, dominant color), top to bottom:")
        lines.extend(
            f"- ({block['x']}, {block['y']}, {block['w']}, {block['h']}) {block['color']}"
            for block in blocks
        )
    return "\n".join(lines)


def pad_to_square(image, fill):
    """Letterbox an RGB PIL image to a square so CLIP sees the whole screen."""
    from PIL import Image

    side = max(image.size)
    canvas = Image.new("RGB", (side, side), fill)
    canvas.paste(image, ((side - image.width) // 2, (side - image.height) // 2))
    return canvas


def comparison_image(target_path, render_path, scale=1.5, grid=50):
    """Return PNG bytes: target | render side by side with a y-axis ruler.

    Gives the model a shared coordinate frame for measuring vertical offsets
    and sizes, which it cannot do reliably from two separate images.
    """
    target, render = load_pair(target_path, render_path)
    height, width = target.shape[:2]
    size = (int(width * scale), int(height * scale))
    panels = [cv2.resize(image, size, interpolation=cv2.INTER_AREA) for image in (target, render)]
    ruler_width, gap, header = 44, 12, 28
    canvas = np.full(
        (size[1] + header, ruler_width + 2 * size[0] + gap, 3), 255, np.uint8
    )
    left = ruler_width
    right = ruler_width + size[0] + gap
    canvas[header:, left:left + size[0]] = panels[0]
    canvas[header:, right:right + size[0]] = panels[1]
    font = cv2.FONT_HERSHEY_SIMPLEX
    cv2.putText(canvas, "REFERENCE", (left + 6, 20), font, 0.6, (0, 0, 0), 2)
    cv2.putText(canvas, "RENDER", (right + 6, 20), font, 0.6, (0, 0, 0), 2)
    for y in range(0, height + 1, grid):
        pixel_y = header + int(y * scale)
        for x0 in (left, right):
            line = canvas[pixel_y:pixel_y + 1, x0:x0 + size[0]]
            line[:] = (line * 0.4 + np.array([60, 60, 255]) * 0.6).astype(np.uint8)
        cv2.putText(canvas, str(y), (2, pixel_y + 4), font, 0.4, (0, 0, 200), 1)
    return cv2.imencode(".png", canvas)[1].tobytes()


def structural_preservation(before_path, after_path, canvas, region=None, margin=8):
    """SSIM of edge structure between two renders, outside an edited region.

    Comparing gradient magnitudes instead of intensities keeps intended color
    changes (e.g. a new background color) from counting as layout changes,
    while moved, resized, added, or removed elements still lower the score.
    """
    from skimage.metrics import structural_similarity

    def edges(path):
        gray = cv2.cvtColor(to_logical(read_color(path), canvas), cv2.COLOR_BGR2GRAY)
        gx = cv2.Sobel(gray, cv2.CV_32F, 1, 0, ksize=3)
        gy = cv2.Sobel(gray, cv2.CV_32F, 0, 1, ksize=3)
        return np.clip(cv2.magnitude(gx, gy), 0, 255)

    before, after = edges(before_path), edges(after_path)
    _, ssim_map = structural_similarity(before, after, data_range=255, full=True)
    keep = np.ones(ssim_map.shape, bool)
    if region:
        x, y, w, h = (int(round(value)) for value in region)
        keep[max(0, y - margin):y + h + margin, max(0, x - margin):x + w + margin] = False
    if keep.mean() < 0.05:
        keep[:] = True
    return float(ssim_map[keep].mean())
