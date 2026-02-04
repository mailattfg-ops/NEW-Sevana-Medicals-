import shutil
import os

source_dir = r"C:\Users\apasi\.gemini\antigravity\brain\5679530c-d451-484b-84a3-d2b5e235573c"
dest_dir = r"c:\Users\apasi\Desktop\TFG WORKS\Pharmacy\src\public\Images"

assets = {
    "products_hero_visual_1770108826748.png": "ProductsHero.png",
    "services_hero_visual_1770108845809.png": "ServicesHero.png",
    "about_hero_visual_1770108865227.png": "AboutHero.png"
}

for src_name, dest_name in assets.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    try:
        shutil.copy2(src_path, dest_path)
        print(f"Successfully copied {src_name} to {dest_name}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
