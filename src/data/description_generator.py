import json
import time
from groq import Groq

# 1. Initialize the Groq Client
client = Groq(api_key="YOUR_API_KEY_HERE")

def enrich_chapter_data(input_json, output_json):
    with open(input_json, 'r', encoding='utf-8') as f:
        chapters = json.load(f)

    print(f"[*] Starting enrichment for {len(chapters)} chapters using Groq...")

    for i, chapter in enumerate(chapters):
        title = chapter['title']
        
        # Skip if already populated 
        if chapter['description'] != "" and chapter['description'] != "Description unavailable at this time.":
            continue
            
        print(f"[{i+1}/{len(chapters)}] Generating description for: {title}...", end=" ", flush=True)
        
        prompt = f"Write a concise, 2-sentence medical description for a dermatology textbook chapter titled '{title}'. Make it factual and academic. Do not use bullet points or intro phrases."
        
        max_retries = 3
        for attempt in range(max_retries):
            try:
                chat_completion = client.chat.completions.create(
                    messages=[
                        {
                            "role": "user",
                            "content": prompt,
                        }
                    ],
                    model="llama-3.1-8b-instant", # The active production model
                )
                chapter['description'] = chat_completion.choices[0].message.content.strip()
                print("DONE")
                break 
            except Exception as e:
                if attempt < max_retries - 1:
                    print("RETRYING...", end=" ", flush=True)
                    time.sleep(3) 
                else:
                    print(f"FAILED: {e}")
                    chapter['description'] = "Description unavailable at this time."
        
        # 2.5 seconds = 24 requests per minute (Keeps you safely under the 30 RPM limit)
        time.sleep(2.5)

    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(chapters, f, indent=4)
        
    print(f"\n[SUCCESS] Enriched data saved to {output_json}")

if __name__ == "__main__":
    INPUT_FILE = "rooksChapters_updated.json"
    OUTPUT_FILE = "rooksChapters_Enriched.json"
    
    enrich_chapter_data(INPUT_FILE, OUTPUT_FILE)