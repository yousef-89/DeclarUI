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

### Headless baseline rendering
Start the React Native Web host in one terminal:
```bash
npm start
```

Then render every `.js` and `.jsx` component in the selected app folder:
```bash
npm run render:baseline
```

The app-scoped renderer command is:
```bash
node batch_render.js <app_name> <iteration> [port] [component]
```
For example, `node batch_render.js Amazon baseline 3000` scans
`src/generated/Amazon` and writes screenshots to `output/Amazon/baseline`, along with
`summary.json`, which records the success or failure of each component:

To render one selected screen only:
```bash
node batch_render.js Amazon interactive-AccountScreen 3000 AccountScreen
```

Refined screenshots use a separate output directory:
```bash
npm run render:refined
```

The batch command scans the directory once when it starts; newly added
components are included the next time the command is run.

To evaluate the baseline renders, place the corresponding original reference
images in `Dataset/targets/<app_name>`. The evaluator dynamically loads every
`.png`, `.jpg`, and `.jpeg` file in that folder:
```bash
python evaluate_baseline.py --app Amazon
```

To evaluate a refined iteration, run:
```bash
python evaluate_baseline.py --app Amazon --baseline output/Amazon/refined `
  --output output/Amazon/refined-evaluation.json
```

To perform one automated visual-refinement pass, keep the development server
running and run:
```bash
npm run refine:visual
npm run render:refined
npm run evaluate:refined
```
The current generated sources are backed up to
`output/<app_name>/refinement/iteration-0-source` before refinement. The refinement uses
the baseline evaluation report, reference screenshots, current renders, and
Gemini to produce revised component code.

The Python evaluation dependencies can be installed with:
```bash
python -m pip install -r requirements-evaluation.txt
```

The evaluator first looks for an exact component-name match, such as
`DefaultViewScreen.png`, and then automatically tries the original screen name
without the `Screen` suffix, such as `DefaultView.png`. It calculates SSIM and
CLIP similarity for valid pairs and writes
`output/<app_name>/baseline-evaluation.json`. The selected target filename is recorded in
the report. Failed renders and components without a matching target remain in
the report but are excluded from metric averages. Reference images must be
original ground-truth screenshots; do not copy baseline renders into
`Dataset/targets`.

Before rendering, a generated component can be checked with:
```bash
node check_syntax.js src/generated/Amazon/HomeScreen.js
```
The checker prints `SYNTAX_VALID` for valid JSX or
`SYNTAX_INVALID: <error message>` for parser failures.

The Streamlit dashboard supports both selected-screen and all-screen refinement. In all-screen mode, each target with a matching generated component is processed independently and receives its own output folder and evaluation report. Targets without generated components are skipped and reported.

Running all screens is considerably more expensive than refining one screen: with five screens and three maximum iterations, it can require up to 15 render/evaluation/refinement cycles and multiple Gemini requests. Use selected-screen mode for development and small app experiments; use all-screen mode for a controlled app-level experiment.

Start the dashboard with:
```bash
streamlit run app.py
```
After a refinement result is displayed, use **Open ... in interactive preview** to open the generated screen in the React Native Web host. This preview is separate from Puppeteer screenshot capture and lets you click controls and type into text fields. Start the host first in another terminal:
```bash
npm start
```
The preview URL uses `?app=<app_name>&component=<component_name>` and opens the same component selected by the dashboard.

In the dashboard, choose **An existing app** to refine one screen or all screens from a dataset. If a target image has no matching generated component, the dashboard creates that component from the image before refinement. Choose **A new uploaded mockup** to upload one or more images and click **Generate and refine mockup**. Selected files remain temporary until that button is pressed; this prevents accidental uploads or duplicate files from being stored. After confirmation, the dashboard stores every image in the internal `Dataset/targets/user_uploads/` collection, creates a matching generated component for each image when needed, and runs the same refinement workflow without requiring the user to know the project folder structure. The natural-language tweak is included in component generation and subsequent refinement prompts.

Uploaded image names are made safe and receive a short content hash, so repeated
uploads do not overwrite different images. For example:
```text
Dataset/targets/user_uploads/Home-a1b2c3d4.png
src/generated/user_uploads/HomeA1b2c3d4Screen.js
```
These internal names are hidden from normal users; the dashboard handles them
automatically.

To add an external multi-screen app manually, create one folder such as
`Dataset/targets/MyExternalApp/` and copy its screenshots there. It appears as
a normal app in the existing-app selector. Matching generated components can be
added under `src/generated/MyExternalApp/`; if they are missing, the dashboard
generates them from the screenshots before refinement.

Each interactive screen preserves its iteration history under:
```text
output/<app_name>/interactive-<component>/iteration-0/
output/<app_name>/interactive-<component>/iteration-1/
output/<app_name>/interactive-<component>/iteration-2/
```

The complete bounded self-refinement pipeline can be run with:
```bash
python run_pipeline.py --app Amazon --max_iterations 3
```
For each iteration, it validates generated components, renders the app,
calculates SSIM and CLIP, and asks Gemini to refine screens whose SSIM is below
`0.90`. Screens meeting the threshold are skipped in later iterations.

For interactive refinement with a user instruction, the dashboard returns the
final accepted iteration so that requested changes can accumulate across
passes. Without a user instruction, it returns the iteration with the highest
SSIM. A refinement that drops SSIM by more than `0.08` from the previous
accepted iteration is rejected and the previous component source is restored;
this prevents a severe regression from replacing a usable screen. All
iteration screenshots and evaluation reports remain available for inspection.
