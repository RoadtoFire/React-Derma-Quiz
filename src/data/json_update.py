import json

def add_placeholders(input_filepath, output_filepath):
    """
    Loads a JSON array of chapters, injects default image and description 
    values into each object, and exports the updated array.
    """
    
    # 1. Load the existing JSON data into Python memory
    try:
        with open(input_filepath, 'r', encoding='utf-8') as file:
            chapters = json.load(file)
    except FileNotFoundError:
        print(f"[ERROR] Could not find {input_filepath}")
        return

    # 2. Define your static placeholder variables
    default_image = "./images/BologniaChapters/Botulinum Toxin.jpg"
    default_desc = ""

    # 3. Iterate through the array of dictionaries and update keys
    for chapter in chapters:
        chapter['image'] = default_image
        chapter['description'] = default_desc

    # 4. Serialize the updated Python list back to a JSON file
    with open(output_filepath, 'w', encoding='utf-8') as file:
        json.dump(chapters, file, indent=4)

    print(f"[SUCCESS] Injected placeholders into {len(chapters)} chapters.")
    print(f"[INFO] Exported file: {output_filepath}")

if __name__ == "__main__":
    # Point this to the file you just uploaded
    INPUT_FILE = "rooksChapters.json"
    OUTPUT_FILE = "rooksChapters_updated.json"
    
    add_placeholders(INPUT_FILE, OUTPUT_FILE)