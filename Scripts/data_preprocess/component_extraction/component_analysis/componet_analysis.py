import json
from openai import OpenAI
import subprocess
import shutil
import httpx
import time
import base64
from google import genai
from google.genai import types
import re
import os
from openai import OpenAI
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..'))

from similarity_search import similarity_search
GEMINI_KEY = os.environ["GEMINI_API_KEY"]
# Initialize OpenAI client pointing to Google AI Studio
client = genai.Client(api_key=GEMINI_KEY)
def encode_image(image_path):
    """Reads image file and converts directly to a native Gemini Part object."""
    with open(image_path, "rb") as image_file:
        return types.Part.from_bytes(
            data=image_file.read(),
            mime_type="image/png"
        )

def split2type(image_dir, category, app_name, image_name, content):
    IMG_LIMIT = 10
    image_parts = []
    
    complete_img_path = os.path.join(BASE_DIR, "Dataset", category, app_name, image_name)
    if not os.path.exists(complete_img_path):
        complete_img_path = os.path.join(image_dir, category, app_name, image_name)

    # Index 0: Full page screenshot
    image_parts.append(encode_image(complete_img_path))
    
    split_img_dir = os.path.join(BASE_DIR, "Scripts", "data_preprocess", "component_extraction", "lang-segment-anything", "split_img", category, app_name, image_name.split(".")[0])

    if os.path.exists(split_img_dir):
        files = os.listdir(split_img_dir)
        png_files = [f for f in files if f.endswith('.png')]
        sorted_files = sorted(png_files, key=lambda x: int(os.path.splitext(x)[0]))
        for file in sorted_files:
            image_parts.append(encode_image(os.path.join(split_img_dir, file)))

    img_cnt = len(image_parts) - 1
    query_times = (img_cnt / (IMG_LIMIT - 1)) + 1
    left = 1
    if left + IMG_LIMIT - 1 <= img_cnt + 1:
        right = left + IMG_LIMIT - 1
    else:
        right = img_cnt + 1

    response = ""
    for i in range(int(query_times)):
        time.sleep(4)  # 15 RPM free tier rate limit protection
        
        # Native content payload: prompt text + full screenshot + crop sub-batch
        content_list = [content, image_parts[0]] + image_parts[left:right]
        
        try:
            completion = client.models.generate_content(
                model="gemini-3.5-flash-lite",
                contents=content_list,
            )
            response = response + (completion.text or "") + '\n'
        except Exception as e:
            print(f"[!] API Processing Error on sub-batch index {i}: {e}")
            
        left = right
        if left + IMG_LIMIT - 1 <= img_cnt + 1:
            right = left + IMG_LIMIT - 1
        else:
            right = img_cnt + 1

    return response



def extract_component_type(s):
    pattern = r'@@@(.*?)@@@'
    matches = re.findall(pattern, s)
    unique_matches = list(set(matches))  
    return unique_matches


def search_reference_info_ids(dir):
    for file in os.listdir(dir):
        page_name = file.split(".")[0].split("_")[0]
        type_or_position = file.split(".")[0].split("_")[1]
        refer_list = []
        print(page_name, type_or_position)
        if type_or_position == "type":
            with open(os.path.join(dir, file), 'r', encoding='utf-8') as f:
                data = f.read()
            type_list = extract_component_type(data)
            print(type_list)
            for type in type_list:
                sim_top2 = similarity_search(type)
                for sim in sim_top2:
                    if sim not in refer_list:
                        refer_list.append(sim)
            with open(os.path.join(dir, page_name + "_refer.json"), 'w', encoding='utf-8') as f:
                f.write(json.dumps(refer_list, ensure_ascii=False, indent=4))


def copy_file(src, dst):
    try:
        if not os.path.exists(src):
            print(f"Source file '{src}' does not exist.")
            return

        dst_dir = os.path.dirname(dst)
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
            print(f"Destination directory '{dst_dir}' created.")

        shutil.copy(src, dst)
        print(f"Successfully copied '{src}' to '{dst}'.")

    except Exception as e:
        print(f"Error occurred while copying: {e}")


def clear_folder(folder_path):
    try:
        if not os.path.exists(folder_path):
            print(f"Folder '{folder_path}' does not exist.")
            return

        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                print(f'Failed to delete {file_path}. Reason: {e}')
        
        print(f"Successfully cleared all contents of '{folder_path}'.")

    except Exception as e:
        print(f"Error occurred: {e}")


if __name__ == "__main__":
    component_info_folder = os.path.join(BASE_DIR, "Scripts", "results", "extract_results")
    language_list = ["RN", "Flutter", "ArkTS"]
    lang = language_list[0]  # React Native
    image_dir = os.path.join(BASE_DIR, "Dataset")
    
    initial_component_info_dir = os.path.join(component_info_folder, lang)
    initial_split_img_dir = os.path.join(BASE_DIR, "Scripts", "data_preprocess", "component_extraction", "lang-segment-anything", "split_img")
    initial_complete_img_dir = image_dir
    prompt_dir = os.path.join(BASE_DIR, "Scripts", "data_preprocess", "component_extraction", "component_analysis", "prompt_repo")

    if lang == "RN":
        prompt_path = os.path.join(prompt_dir, "RN_Split2TypePrompt.txt")
    elif lang == "ArkTS":
        prompt_path = os.path.join(prompt_dir, "ArkTS_Split2TypePrompt.txt")
    elif lang == "Flutter":
        prompt_path = os.path.join(prompt_dir, "Flutter_Split2TypePrompt.txt")

    with open(prompt_path, "r", encoding="utf-8") as f:
        split2type_prompt = f.read()
    
    state_file = {}
    for category in os.listdir(initial_complete_img_dir):
        complete_img_dir = os.path.join(initial_complete_img_dir, category)
        if not os.path.isdir(complete_img_dir):
            continue
            
        split_img_dir = os.path.join(initial_split_img_dir, category)
        component_info_dir = os.path.join(initial_component_info_dir, category)
        
        for app in os.listdir(complete_img_dir):
            app_path = os.path.join(complete_img_dir, app)
            if not os.path.isdir(app_path):
                continue
            image_state = {}
            for image_name in os.listdir(app_path):          
                if image_name.endswith('.png'):
                    image_state[image_name.split('.')[0]] = 0
                    state_file[app] = image_state

    if os.path.exists('state.json'):
        with open('state.json', 'r', encoding='utf-8') as f:
            state_file = json.load(f)

    for category in os.listdir(initial_complete_img_dir):
        complete_img_dir = os.path.join(initial_complete_img_dir, category)
        if not os.path.isdir(complete_img_dir):
            continue

        split_img_dir = os.path.join(initial_split_img_dir, category)
        component_info_dir = os.path.join(initial_component_info_dir, category)
        print(f"Processing category: {category}")
        
        for app in os.listdir(complete_img_dir): 
            app_img_dir = os.path.join(complete_img_dir, app)
            if not os.path.isdir(app_img_dir):
                continue
                
            app_component_info_dir = os.path.join(component_info_dir, app)
            if not os.path.exists(app_component_info_dir):
                os.makedirs(app_component_info_dir)
            app_split_img_dir = os.path.join(split_img_dir, app)
            
            for image_name in os.listdir(app_img_dir):
                if not image_name.endswith('.png'):
                    continue
                if app in state_file and image_name.split('.')[0] in state_file[app] and state_file[app][image_name.split('.')[0]] == 1:
                    continue
                print(f"Processing {app} {image_name}") 
                component_type = split2type(image_dir, category, app, image_name, split2type_prompt)
                component_type_path = os.path.join(app_component_info_dir, image_name.split('.')[0] + "_type.txt")
                
                with open(component_type_path, 'w', encoding='utf-8') as file:
                    file.write(component_type)
                
                position_before = os.path.join(app_split_img_dir, image_name.split('.')[0], "position.txt")
                position_after = os.path.join(app_component_info_dir, image_name.split('.')[0] + "_position.txt")
                copy_file(position_before, position_after)
                
                if app not in state_file:
                    state_file[app] = {}
                state_file[app][image_name.split('.')[0]] = 1
                
                with open('state.json', 'w', encoding='utf-8') as f:
                    json.dump(state_file, f, ensure_ascii=False, indent=4)
                print(f"Finished {app} {image_name}")

                import time; time.sleep(4) 
            if lang == "ArkTS":
                search_reference_info_ids(app_component_info_dir)
                
            print(f"Finished {app}")
        print(f"Finished {category}")