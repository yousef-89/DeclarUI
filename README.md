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

Then render every `.js` and `.jsx` component currently in `src/generated`:
```bash
npm run render:baseline
```

Baseline screenshots are written to `output/baseline-amazon`, along with
`summary.json`, which records the success or failure of each component:
```bash
npm run render:baseline
```

Refined screenshots use a separate output directory:
```bash
npm run render:refined
```

The underlying renderer also accepts a custom output directory and server port:
```bash
npm run render:baseline -- output/my-baseline 3001
```

The batch command scans the directory once when it starts; newly added
components are included the next time the command is run.

To evaluate the baseline renders, place the corresponding original reference
images in `Dataset/targets`, then run:
```bash
npm run evaluate:baseline
```

To evaluate a refined iteration, run:
```bash
npm run evaluate:refined
```

To perform one automated visual-refinement pass, keep the development server
running and run:
```bash
npm run refine:visual
npm run render:refined
npm run evaluate:refined
```
The current generated sources are backed up to
`output/refinement/iteration-0-source` before refinement. The refinement uses
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
`output/baseline_evaluation.json`. The selected target filename is recorded in
the report. Failed renders and components without a matching target remain in
the report but are excluded from metric averages. Reference images must be
original ground-truth screenshots; do not copy baseline renders into
`Dataset/targets`.
