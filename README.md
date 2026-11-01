# DeclarUI
DeclarUI is an approach for the purpose of enhancing MLLM-based declarative UI code generation from UI designs. DeclarUI integrates advanced computer vision techniques with MLLMs to decompose complex UI designs into structured component information. We introduce the Page Transition Graph (PTG) to represent the app's navigation logic, which, combined with the structured component information, forms a comprehensive prompt for the MLLM. After initial code generation, DeclarUI employs an iterative refinement process, performing navigational integrity and compilation checks to identify and rectify common errors. This multi-stage approach ensures the generated UI code is both visually accurate and functionally robust across multiple pages.

## Dataset
We curated a dataset of 50 mobile app UI designs (including 250 app pages), including 25 UI design mockups and 25 real-app screenshots, across 10 functional categories, including Social Networking, Entertainment, Productivity, Education, Wellness, Finance, Shopping & E-commerce, Travel & Navigation, News & Information, and Utility & Practical Tools. This diversity allows us to assess the generalizability and robustness of our approach across various UI design paradigms and app types. For each app, the composition is as follows:
- five UI design mockups/app screenshots, representing a set of pages within an app that are logically related.
- one Page Transition Graph(PTG) JSON file, representing interaction logic within pages.

## Getting Started
### Prerequisites
Ensure you have the following prerequisites installed:
- Python 3.8 or higher
- Andrid Studio and React Native CLI
- Git

### Installation
Clone the repository to your local machine:
```bash
git clone ...
cd DeclarUI
```

### Data preprocessing
Our data preprocess including two steps:
1. PTG construction
You can run the following command to generate PTG JSON files for each app:
```bash
cd Scripts/data_preprocess/ptg_construction
python ptg_generate.py
```
2. UI component extraction
The UI component extraction process involves three main steps:
- Grounding DINO: This step involves using the Grounding DINO model to detect UI components in the app screenshots.
- SAM: This step involves using the SAM model to segment the detected UI components.
- LLM: This step involves using the LLM to generate descriptions for the segmented UI components.

You can run the following command to extract UI components and obtain component analysis results from the app screenshots:
```bash
cd Scripts/data_preprocess/component_extraction
python lang-segment-anything/extract_components_from_img.py
python lang-segment-anything/deduplicate_split_img.py
python componet_analysis/componet_analysis.py
```

### UI code generation
To generate UI code, run the following command:
```bash
cd Scripts/code_generation/code_generate_scripts
python code_generate_declarUI.py
```

## Autonomous visual refinement loop (thesis extension)

DeclarUI's original refinement only repairs compilation and navigation errors.
This extension adds a closed loop that turns a UI screenshot into React Native
code and refines it visually without human intervention:

1. **Component perception** - Gemini decomposes the screenshot into typed
   components (buttons, inputs, sliders, tab bars, carousels, ...) with bounding
   boxes, grounded by computer-vision block measurements.
2. **Baseline generation** - Gemini writes a React Native Web screen from the
   screenshot, the component inventory, and the measured layout.
3. **Headless rendering** - Puppeteer renders the screen in a viewport with the
   target's aspect ratio.
4. **Dual-metric evaluation** - SSIM (structure/layout) and CLIP (perceptual
   similarity) against the screenshot; content SSIM is logged in addition.
5. **Iterative refinement** - up to 3 diagnose-then-fix passes using the target,
   the render, a side-by-side comparison with a coordinate ruler, and the
   mismatch regions.
6. **Guardrail and rollback** - a pass that lowers SSIM by more than 0.02
   relative to the best version so far is rejected, the best version is
   restored, and refinement continues from it. Syntax and runtime errors get
   one automatic repair attempt.

**User edits.** A natural-language change ("make the tab bar dark") is applied
by a separate loop and scored with **Edit Compliance** (a Gemini judge's 0-1
rating of whether the change is visibly applied) and **Structural
Preservation** (edge-based SSIM between the pre-edit and post-edit renders
outside the edited region). SSIM/CLIP against the screenshot are not
meaningful for intended edits and are only logged for reference.

### Setup

```bash
npm install
python -m pip install -r requirements.txt
```

Create a `.env` file in the project root (it is gitignored):

```text
GEMINI_API_KEY=your-key
GEMINI_MODEL=gemini-3.8-flash          # optional, default gemini-3.5-flash-lite
GEMINI_JUDGE_MODEL=gemini-3.8-flash    # optional, defaults to GEMINI_MODEL
```

`GEMINI_MODEL` is used by the loop and by the original DeclarUI scripts.

### Running

Dashboard (refine screens, browse history, compare results):

```bash
streamlit run app.py
```

Command line, all screens of one app:

```bash
python run_pipeline.py --app Breadfast --max_iterations 3
```

Both start the React Native Web render host (`npm start`, port 3000)
automatically if it is not already running. Screenshots are taken from
`Dataset/targets/<app>/`; generated screens live in `src/generated/<app>/`.

### Results and history

Every run is recorded in `output/history.db` (SQLite) and in its own folder:

```text
output/<app>/runs/<run_id>/iteration-<n>/
    <Component>.png          render of this iteration
    <Component>.source.js    code of this iteration
    prompt.txt               prompt sent to Gemini
    diagnosis.txt / plan.txt Gemini's diagnosis (refinement) or plan (edit)
output/<app>/inventory/<model>/<Component>.json   cached component inventory
```

The dashboard's **History** tab separates your dashboard runs, evaluation
batches (one-shot vs. loop per screen), and legacy imports, and shows each run
with its screenshots, metric trajectory, prompts, model notes, and code.
**Live preview** copies that run's final code to `src/generated/_preview/` and
opens it in the render server, so the preview always matches the run.
**Overview** shows the evaluation results per batch and screen and exports
runs/iterations as CSV. `metrics_tracker.csv` is
still appended for compatibility. Results from before the history store are in
`output/legacy/`.

### Batch evaluation (ablation)

```bash
python evaluate_batch.py --apps Breadfast Spotify                 # oneshot + loop
python evaluate_batch.py --conditions oneshot loop loop-noguard   # all apps, with guardrail ablation
python evaluate_batch.py --resume <batch_id>                      # continue after a quota stop
```

Each screen is generated once from its screenshot; every condition starts from
that same code, so results are paired per screen. `oneshot` is generation
only, `loop` is the full loop, and `loop-noguard` is the loop without the
rollback guardrail. One row per screen and condition, with the model, git
commit, prompt hash, and thresholds, is appended to
`output/evaluation/results.csv`; each batch also gets
`output/evaluation/<batch_id>/manifest.json`. The existing code in
`src/generated/<app>/` is backed up and restored after the batch. When the
Gemini quota runs out, the batch stops cleanly and can be resumed.

### Project layout

```text
app.py                  Streamlit dashboard
run_pipeline.py         refinement loop and command-line entry point
evaluate_batch.py       batch evaluation (one-shot vs. loop ablation)
pipeline/
    visual_refine.py    prompt building and Gemini helpers
    prompts/            prompt templates (inventory, generate, refine, edit, judge, repair)
    layout_analysis.py  logical canvas, SSIM/content SSIM, block detection, comparison image
    evaluate_baseline.py  SSIM + CLIP evaluation of a render folder
    run_store.py        SQLite run history
    history_views.py    dashboard views (run detail, history, overview)
    env_config.py       loads .env
renderer/
    batch_render.js     renders components with Puppeteer
    render_runner.js    single-screen capture (freshness check, error detection)
    check_syntax.js     JSX syntax check
src/                    React Native Web render host and generated screens
Dataset/                DeclarUI dataset and target screenshots (Dataset/targets/)
Scripts/                original DeclarUI preprocessing and generation scripts
output/                 run results and history database
```

### Individual tools

```bash
node renderer/batch_render.js <app> <output-subfolder> [port] [component]
python -m pipeline.evaluate_baseline --app <app> --baseline output/<app>/<subfolder>
node renderer/check_syntax.js src/generated/<app>/<Component>.js
```

Target screenshots are matched to components by name (`Home.png` ->
`HomeScreen`). They must be original screenshots, never copies of renders.
