import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import time
import json
from openai import OpenAI
import subprocess
import shutil
import httpx
import base64
import re
import os
import openai
from google import genai
from google.genai import types
import glob
import time
import logging
from utils.compiler.Flutter_compiler import compile_and_run_flutter_project
from utils.compiler.hvigor_compiler import compile_and_run_arkts_project
from utils.compiler.RN_compiler import run_gradlew_assemble
from utils.connect_neo4j import search_neo4j_by_id




SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "..", ".."))

lang_index = 0
UI_class_list = ["RN", "Flutter", "ArkTS"]
UI_class = UI_class_list[lang_index]
UItype_list = ["React Native", "Flutter", "ArkTS"]
UItype = UItype_list[lang_index]

# Point directly to the template folder inside utils/project_templates/
project_template_folder = os.path.join(
    PROJECT_ROOT, "Scripts", "code_generation", "utils", "project_templates", UI_class
)

picture_folder = os.path.join(PROJECT_ROOT, "Dataset")
prompt_folder = os.path.join(PROJECT_ROOT, "Scripts", "code_generation", "utils", "prompt_templates", UI_class)
component_info_folder = os.path.join(PROJECT_ROOT, "Scripts", "results", "extract_results", UI_class)
output_folder = os.path.join(PROJECT_ROOT, "Scripts", "results", "code_results", "baseline_gpt")

GEMINI_KEY = os.environ["GEMINI_API_KEY"]


# Initialize the OpenAI client pointing to Google AI Studio
client = genai.Client(api_key=GEMINI_KEY)


# Initialize logging
logging.basicConfig(
    level=logging.INFO,
    filename='gpt_code_generate.log',   
    filemode='a',         
    format='%(asctime)s - %(levelname)s \n %(message)s'  
    )


def get_uitype_detail():
    """
    Get the detail of the UI type
    """
    type_detail = {}
    if UItype == "React Native":
        save_type = "js"
        entry_func_name = "App"
        extend_name = "Screen"
        nav_code_template = ["navigation.navigate('{nav_id}'","'{nav_id}'"]
    elif UItype == "Flutter":
        save_type = "dart"
        entry_func_name = "main"
        extend_name = "Screen"
        nav_code_template = ["Navigator.pushNamed(context, '{nav_id}'","Navigator.pushReplacementNamed(context, '{nav_id}'","Navigator.pushNamed(\ncontext,\n'{nav_id}'"]     
    elif UItype =="ArkTS":
        save_type = "ets"
        entry_func_name = "main_pages"
        extend_name = "Page"
        nav_code_template = ["pushUrl({{ url: 'pages/{nav_id}'"]
    else:
        save_type = "txt"
        entry_func_name = ""
        extend_name = ""
        nav_code_template =[""]
    type_detail["save_type"] = save_type
    type_detail["entry_func_name"] = entry_func_name
    type_detail["extend_name"] = extend_name
    type_detail['nav_code_template'] = nav_code_template
    return type_detail


def get_page_list(app_classification,app_name):
    """
    Retrieve the list of all pages, and for arkts, store them in main_pages.json
    """
    PTG_path = os.path.join(picture_folder,app_classification,app_name,'PTG.json')
    page_list = []
    with open(PTG_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    node_list = data['N']
    if UItype == "ArkTS":
        for node in node_list:
            page_list.append("pages/"+node['id']+'Page')
        main_pages = {}
        main_pages['src']=page_list
        if not os.path.exists(os.path.join(output_folder,app_classification,app_name)):
            os.makedirs(os.path.join(output_folder,app_classification,app_name))
        with open(os.path.join(output_folder,app_classification,app_name,'main_pages.json'), 'w', encoding='utf-8') as f:
            json.dump(main_pages, f, ensure_ascii=False, indent=4)
    else:
        for node in node_list:
            page_list.append(node['id'])
    return page_list
    

def get_navigation_list(app_classification,app_name,page_name):
    PTG_path = os.path.join(picture_folder,app_classification,app_name,'PTG.json')
    with open(PTG_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    # Retrieve all sub-dictionaries where 'from' is 'page_name'
    results = [item for item in data['E'] if (item.get('from') == page_name) or (item.get('from') == 'any') or (item.get('from') == '*')]
    navigation_list = []
    for result in results:
        if result['to'] == page_name:
            continue
        if UItype == 'ArkTS':
            navigation_list.append(result['to']+'Page')
        else:
            navigation_list.append(result['to'])
    return navigation_list


def KG_retrival(reference_path):
    refer_folder = "./component_info/ArkTS/references"
    # KG-retrival 
    with open(reference_path, 'r', encoding='utf-8') as f:
        refer_list = json.load(f)
    refer_info = []
    for refer_id in refer_list:
        path = os.path.join(refer_folder, refer_id+'.json')
        # If the component refer for this id has been queried before, read it directly
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                refer_info.append(json.load(f))
        # If it has not been queried, query and save it
        else:
            refer_res = search_neo4j_by_id(int(refer_id))
            refer_info.append(refer_res)
    return refer_info


def prompt_construct(app_classification,app_name,page_name,sequence=1,type="Screen",implemented_ids=[],not_implemented_ids=[],error_msg = '',error_filenames = ''):
    node_id = page_name
    # component info path
    type_path = os.path.join(component_info_folder,app_classification,app_name,page_name+'_type.txt')
    reference_path = os.path.join(component_info_folder,app_classification,app_name,page_name+'_refer.json')
    # PTG path
    PTG_path = os.path.join(picture_folder,app_classification,app_name,'PTG.json')
    # prompt path
    baseline_prompt_path = r'DeclarUI\Scripts\code_generation\utils\prompt_templates\baseline\baselinePrompt.txt'
    baselineNavigation_prompt_path = r'DeclarUI\Scripts\code_generation\utils\prompt_templates\baseline\NavigationPrompt.txt'
    first_prompt_path = os.path.join(prompt_folder,'FirstPrompt.txt')
    sub_prompt_path = os.path.join(prompt_folder,'SubPrompt.txt')
    navigation_prompt_path = os.path.join(prompt_folder,'PTG2NavigationPrompt.txt')
    refine_prompt_path = os.path.join(prompt_folder,'RefineCodePrompt.txt')
    compile_refine_prompt_path = os.path.join(r'DeclarUI\Scripts\code_generation\utils\prompt_templates','RefineCompileErrorPrompt.txt')
    if UItype == 'ArkTS':
        refer_refine_prompt_path = os.path.join(prompt_folder,'ReferRefinePrompt.txt')
        
    page_list = get_page_list(app_classification,app_name)
    navigation_list = get_navigation_list(app_classification,app_name,page_name)
    type_detail = get_uitype_detail()
    extend_name = type_detail["extend_name"]
    save_type = '.'+ type_detail["save_type"]
    if type == 'baseline':
        with open(baseline_prompt_path, 'r', encoding='utf-8') as file:
            baseline_prompt = file.read()
        prompt = baseline_prompt.format(node_id=node_id,page_list=page_list)
        return prompt
    if type == 'baselineNavigation':
        with open(baselineNavigation_prompt_path, 'r', encoding='utf-8') as file:
            baselineNavigation = file.read()
        prompt = baselineNavigation.format(page_list=page_list)
        return prompt
    with open(type_path, 'r', encoding='utf-8') as file:
        component_type = file.read()
    with open(PTG_path,'r',encoding='utf-8') as file:
        PTG = json.load(file)
    if type == "Screen":
        if sequence == 1:
            with open(first_prompt_path, 'r', encoding='utf-8') as file:
                first_prompt = file.read()
            if UItype == "ArkTS":
                prompt = first_prompt.format(UItype=UItype,node_id=node_id,page_list=page_list,navigation_list = navigation_list,component_type=component_type,PTG=PTG)
            elif UItype == "Flutter":
                prompt = first_prompt.format(UItype=UItype,node_id=node_id,navigation_list=navigation_list,component_type=component_type,PTG=PTG)
            else:
                prompt = first_prompt.format(UItype=UItype,node_id=node_id,component_type=component_type,PTG=PTG)
        else:
            with open(sub_prompt_path, 'r', encoding='utf-8') as file:
                sub_prompt = file.read()
            if UItype == "ArkTS": 
                prompt = sub_prompt.format(UItype=UItype,node_id=node_id,page_list=page_list,navigation_list=navigation_list,component_type=component_type,PTG=PTG)
            elif UItype == "Flutter":
                prompt = sub_prompt.format(UItype=UItype,node_id=node_id,navigation_list = navigation_list,component_type=component_type,PTG=PTG)
            else:
                prompt = sub_prompt.format(UItype=UItype,node_id=node_id,component_type=component_type,PTG=PTG)
    elif type == "Navigation":
        with open(navigation_prompt_path, 'r', encoding='utf-8') as file:
            navigation_prompt = file.read()
        if UItype == "React Native":
            prompt = navigation_prompt.format(UItype=UItype,PTG=PTG,page_list=page_list)
        else:
            prompt = navigation_prompt.format(UItype=UItype,PTG=PTG)
    elif type == "Refine":
        with open(refine_prompt_path, 'r', encoding='utf-8') as file:
            refine_prompt = file.read()
        refine_page_path = os.path.join(output_folder, app_classification, app_name, page_name+extend_name+save_type)
        with open(refine_page_path,'r',encoding='utf-8') as file:
                page_code = file.read()
        prompt = refine_prompt.format(node_id=node_id,implemented_ids=implemented_ids,not_implemented_ids=not_implemented_ids,page_code=page_code) 
    elif type == "Refer_refine":
        with open(refer_refine_prompt_path, 'r', encoding='utf-8') as file:
            refer_refine_prompt = file.read()
        refer_info = KG_retrival(reference_path)
        prompt = refer_refine_prompt.format(UItype=UItype,refer_info=refer_info,node_id=node_id,page_list=page_list,navigation_list=navigation_list)   
    elif type == "Compile_refine":
        with open(compile_refine_prompt_path, 'r', encoding='utf-8') as file:
            compile_refine_prompt = file.read()
        error_file_path = os.path.join(output_folder, app_classification, app_name, error_filenames)
        with open(error_file_path,'r',encoding='utf-8') as file:
            error_code = file.read()
        prompt = compile_refine_prompt.format(compile_error_log=error_msg,error_code=error_code,error_filename=error_filenames)
    return prompt      


def save_response(output_folder, app_classification, app_name, pic_name, response, save_type="js"):
    if not response or not response.strip():
        raise ValueError(
            f"Refusing to save an empty generated response: "
            f"{app_classification}/{app_name}/{pic_name}"
        )

    save_type = get_uitype_detail()['save_type']
    # Create output folder if it does not exist
    output_folder = os.path.join(output_folder, app_classification, app_name)
    if not os.path.exists(output_folder):
        os.makedirs(output_folder, exist_ok=True)
    
    output_path = os.path.join(output_folder, f'{pic_name}'+f'.{save_type}') 
 
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(response)       
        

def save_compile_refined_code_to_files(output_folder, app_classification, app_name, data):
    pattern = r'@@@(.+?)@@@([\s\S]*?)(?=@@@|$)'
    matches = re.findall(pattern, data)

    node_ids = []

    for node_id, code in matches:
        code = code.strip()
        node_id = node_id.split('.')[0]
        if UItype == 'Flutter':
            file_extension = 'dart' if node_id.endswith('Screen') else 'txt'
        elif UItype == 'ArkTS':
            file_extension = 'ets' if node_id.endswith('Page') else 'txt'
        elif UItype == 'React Native':
            file_extension = 'js' if node_id.endswith('Screen') else 'txt'
        if node_id == 'AppScreen':
            node_id = 'App'
        node_ids.append(node_id)
        if '/' in node_id:
            node_id = node_id.replace('/', '_')
        with open(os.path.join(output_folder,app_classification,app_name,f'{node_id}.{file_extension}'), 'w', encoding='utf-8') as file:
            file.write(code)
    return node_ids


def extract_package_name(code):
    if UItype == 'Flutter':
        package_list = re.findall(r"import 'package:(\w+)/", code)
        return package_list
    elif UItype == 'React Native':
        exist_package_list =["@react-native-community/masked-view","@react-navigation/bottom-tabs","@react-navigation/native","@react-navigation/stack","jsc-android","react","react-native","react-native-gesture-handler","react-native-safe-area-context","react-native-safe-area-view","react-native-screens","@react-native-community/slider"]
        add_package_list = []
        # Analyze the code line by line to find import statements
        for line in code.split('\n'):
            line = line.strip()
            if line.startswith('import'):
                if not line.endswith(';'):
                  continue
                # Analyze the import lines to extract package names
                parts = line.split(' ')
                # Determine if it is a regular import or an import from a specific package
                if 'from' in line:
                    package_name = line.split('from ')[1].replace(';', '').strip().replace("'", "").replace('"', '')
                    if not package_name.startswith('@'):
                        package_name = package_name.split('/')[0]
                    if package_name not in exist_package_list:
                        add_package_list.append(package_name)
                else:
                    package_name = parts[1].replace(';', '').strip().replace("'", "").replace('"', '')
                    if not package_name.startswith('@'):
                        package_name = package_name.split('/')[0]
                    if package_name not in exist_package_list:
                        add_package_list.append(package_name)
        return add_package_list
    
    
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


def remove_first_and_last_lines(input_str):
    if input_str.startswith('```'):
        lines = input_str.splitlines()
        if len(lines) > 2:
            return '\n'.join(lines[1:-1])
        else:
            return ''  
    return input_str


def inspect_RNnavigation(app_classification,app_name,page_name):
    navigation_list = get_navigation_list(app_classification,app_name,page_name)
    type_detail = get_uitype_detail()
    extend_name = type_detail["extend_name"]
    save_type = type_detail["save_type"]
    nav_code_template =  type_detail['nav_code_template']

    code_path = os.path.join(output_folder,app_classification,app_name,page_name+extend_name+'.'+save_type)
    with open(code_path, 'r', encoding='utf-8') as file:
        js_file_content = file.read()

    implemented_ids = []
    not_implemented_ids = []


    for nav_id in navigation_list:
        implemented = False
        for code_temp in nav_code_template:
            if code_temp.format(nav_id=nav_id) in js_file_content:
                if nav_id not in implemented_ids:
                    implemented_ids.append(nav_id)
                implemented = True
        if not implemented:
            if nav_id not in not_implemented_ids:
                not_implemented_ids.append(nav_id)

    logging.info("Implemented IDs:%s", implemented_ids)
    logging.info("Not Implemented IDs:%s", not_implemented_ids)
    return implemented_ids, not_implemented_ids


def is_fully_navigated(res,implemented_ids,not_implemented_ids, app_classification, app_name, page_name, extend_name,client):
    navi_iter_limit = 3
    iter_cnt = 0
    while not_implemented_ids and iter_cnt < navi_iter_limit:
        logging.info(f'{app_name} {page_name} Not implemented ids: {not_implemented_ids}')
        RefinePrompt = prompt_construct(app_classification,app_name,page_name,type="Refine",implemented_ids=implemented_ids,not_implemented_ids=not_implemented_ids)
        res = send_single_prompt_and_get_response(client,RefinePrompt)
        save_response(output_folder, app_classification, app_name, page_name+ extend_name, res)
        # recheck navigation
        implemented_ids,not_implemented_ids=inspect_RNnavigation(app_classification,app_name,page_name)
        iter_cnt += 1
    return res


def send_single_prompt_and_get_response(client, prompt, image_path=''):
    time.sleep(4)  # Rate limit protection (15 RPM)
    
    contents = [prompt]
    if image_path and os.path.exists(image_path):
        with open(image_path, "rb") as f:
            contents.append(types.Part.from_bytes(data=f.read(), mime_type="image/png"))

    max_attempts = 4
    transient_statuses = ("429", "500", "502", "503", "504")
    last_error = None

    for attempt in range(1, max_attempts + 1):
        try:
            completion = client.models.generate_content(
                model="gemini-3.5-flash-lite",
                contents=contents
            )
            res = remove_first_and_last_lines(completion.text or "").strip()
            if not res:
                raise RuntimeError("The model returned an empty response.")
            return res
        except Exception as error:
            last_error = error
            error_text = str(error)
            is_transient = any(status in error_text for status in transient_statuses)
            if not is_transient or attempt == max_attempts:
                raise RuntimeError(
                    f"Generation failed after {attempt} attempt(s): {error}"
                ) from error

            delay_seconds = 5 * (2 ** (attempt - 1))
            print(
                f"[!] Transient generation error on attempt {attempt}/{max_attempts}: "
                f"{error}"
            )
            print(f"Retrying in {delay_seconds} seconds...")
            time.sleep(delay_seconds)

    raise RuntimeError(f"Generation failed: {last_error}")

def clear_folder(folder_path):
    try:
        # Ensure the folder exists
        if not os.path.exists(folder_path):
            print(f"Folder '{folder_path}' does not exist.")
            return

        # Remove all contents within the folder
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)  # Remove the file or link
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)  # Remove the directory
            except Exception as e:
                print(f'Failed to delete {file_path}. Reason: {e}')
        
        # logging.info("Successfully cleared all contents of %s.",folder_path)

    except Exception as e:
        print(f"Error occurred: {e}")
  

def copy_file2project(src_folder, dst_folder):
    components_folder = os.path.join(dst_folder,"components")

    for item in os.listdir(src_folder):
        extension = os.path.splitext(item)[1]
        if extension == '.js' or extension == '.jsx':
            if item == "App.js":
                shutil.copy(os.path.join(src_folder, item), dst_folder)
            else:
                src_path = os.path.join(src_folder, item)
                shutil.copy(src_path, components_folder)
                print(f"{item} copied!") 


def send_mutiple_prompts_and_get_response(app_classification, app_name):
    # Use global client initialized at the top of the file
    entry_func_name = get_uitype_detail()["entry_func_name"]
    extend_name = get_uitype_detail()["extend_name"]
    page_seq = 0
    
    app_file_path = os.path.join(picture_folder, app_classification, app_name)
    png_files = glob.glob(os.path.join(app_file_path, '*.png'))
    
    add_package_list = []
    for png_file in png_files:
        page_seq += 1
        page_extension = os.path.basename(png_file)
        page_name = os.path.splitext(page_extension)[0]
        prompt = prompt_construct(app_classification, app_name, page_name, page_seq, type="Screen")
        
        # Pass image file path directly to send_single_prompt_and_get_response
        res = send_single_prompt_and_get_response(client, prompt, image_path=png_file)
        print(f'----------{page_name} code:----------\n{res}')
        save_response(output_folder, app_classification, app_name, page_name + extend_name, res)
        logging.info(f'----------{page_name} code:----------\n{res}')
        
        implemented_ids, not_implemented_ids = inspect_RNnavigation(app_classification, app_name, page_name)
        res = is_fully_navigated(res, implemented_ids, not_implemented_ids, app_classification, app_name, page_name, extend_name, client=client)
        
        if UItype == "React Native":
            add_package_set = set(add_package_list)
            add_package_set = add_package_set.union(set(extract_package_name(res)))
            add_package_list = list(add_package_set)

        print("Successfully saved response")
        
    print('Generating application entry.') 
    NavigationPrompt = prompt_construct(app_classification, app_name, page_name, type="Navigation")
    res = send_single_prompt_and_get_response(client, NavigationPrompt)
    logging.info(f'=========App.js code:=========\n{res}\n')
    save_response(output_folder, app_classification, app_name, entry_func_name, res)
    
    compile_state = False
    loop_count = 0
    error_msg = ''
    
    clear_folder(os.path.join(project_template_folder, "components"))
    copy_file2project(os.path.join(output_folder, app_classification, app_name), os.path.join(project_template_folder))
    print(f'Add Package List: {add_package_list}')
    compile_state, error_msg = run_gradlew_assemble(project_template_folder, app_classification, app_name, add_package_list)
    
    while not compile_state and loop_count < 3:
        print(f"---------------{loop_count+1} fix---------------")
        CompileRefinePrompt = prompt_construct(app_classification, app_name, page_name, type="Compile_refine", error_msg=error_msg)
        res = send_single_prompt_and_get_response(client, CompileRefinePrompt)
        logging.info(f'{page_name} code:\n{res}\n')
        refined_list = save_compile_refined_code_to_files(output_folder, app_classification, app_name, res)
        copy_file2project(os.path.join(output_folder, app_classification, app_name), os.path.join(project_template_folder))
        compile_state, error_msg = run_gradlew_assemble(project_template_folder, app_classification, app_name, [])
        loop_count += 1
        
    return compile_state, loop_count, error_msg
        
        
def generate_by_classification(app_classification):
      
    complete_img_dir = os.path.join(picture_folder, app_classification)
        
    for app_name in os.listdir(complete_img_dir):
        start_time = time.time()
        print("Processing %s...",app_name)
        print(f"Processing {app_name}...")
        compile_state,loop_cnt,error_msg = send_mutiple_prompts_and_get_response(app_classification,app_name)
        end_time = time.time()
        print("time cost:",end_time-start_time)
        print("time cost: %s",end_time-start_time)

        print("%s processed.",app_name)


def generate_by_app(app_classification,app_name):
    print("Start processing %s...",app_name)
    start_time = time.time()
    compile_state,loop_cnt,error_msg = send_mutiple_prompts_and_get_response(app_classification,app_name)
    end_time = time.time()
    print("%s processed.",app_name)
    
    
if __name__ == "__main__":
    generate_by_app("Shopping&E-commerce", "Amazon")
   