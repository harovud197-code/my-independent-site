import os
import requests
from PIL import Image

def main():
    url = "https://sc02.alicdn.com/kf/Hcba5286f79be4c96888f028ed1ceed39g.png"
    temp_path = "temp_athletes.png"
    output_path = "cleaned-athletes.jpg"

    print(f"Downloading original image from {url}...")
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(temp_path, "wb") as f:
            f.write(response.content)
        print(f"Downloaded and saved to {temp_path}")
    else:
        print(f"Failed to download image: HTTP {response.status_code}")
        return

    # Process image with PIL
    try:
        img = Image.open(temp_path)
        width, height = img.size
        print(f"Image loaded. Dimensions: {width}x{height}")

        # Crop clean region from directly above the watermark
        # Watermark region: [width - 160:width, height - 55:height]
        # Clean region: [width - 160:width, height - 110:height - 55]
        crop_box = (width - 160, height - 110, width, height - 55)
        clean_patch = img.crop(crop_box)

        # Paste over the watermark
        paste_box = (width - 160, height - 55)
        img.paste(clean_patch, paste_box)
        print("Pasted clean patch over the watermark region successfully.")

        # Convert to RGB (in case of PNG with transparency / alpha channel)
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            # Create a white background or just discard alpha
            # Since the original background is fully opaque, we can just convert to RGB
            rgb_img = img.convert('RGB')
        else:
            rgb_img = img.convert('RGB')

        # Save as JPEG
        rgb_img.save(output_path, "JPEG", quality=95)
        print(f"Successfully processed image and saved to {output_path}")

        # Cleanup temp file
        if os.path.exists(temp_path):
            os.remove(temp_path)

    except Exception as e:
        print(f"An error occurred during image processing: {e}")

if __name__ == "__main__":
    main()
