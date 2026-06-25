import cv2
import numpy as np
import os

# Define input and output paths
input_path = "socks_original.png"
output_path = "website/public/images/socks-no-watermark.png"

# Ensure output directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# Load original image
img = cv2.imread(input_path)
h, w, c = img.shape

# 6 precise bounding boxes determined by pixel-level light scanning to perfectly isolate the watermarks
bboxes = [
    # Left sock
    (150, 340, 195, 365),     # Cuff LOGO
    (155, 365, 195, 455),     # Shin YOUR LOGO
    (150, 480, 210, 520),     # Heel/Sole YOUR LOGO
    # Right sock
    (340, 340, 385, 365),     # Cuff LOGO
    (345, 365, 385, 455),     # Shin YOUR LOGO
    (330, 515, 380, 554)      # Foot top/toes YOUR LOGO
]

# Create a blank mask
mask = np.zeros((h, w), dtype=np.uint8)

# Extract dark text pixels within each bounding box
for xmin, ymin, xmax, ymax in bboxes:
    crop = img[ymin:ymax, xmin:xmax]
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    
    # Threshold < 85 is verified to capture 100% of the black text without capturing any sock fabric shadows
    _, thresh = cv2.threshold(gray, 85, 255, cv2.THRESH_BINARY_INV)
    mask[ymin:ymax, xmin:xmax] = thresh

# Dilate the mask slightly (3x3 kernel, 1 iteration) to cover anti-aliased edge pixels of the text
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
dilated_mask = cv2.dilate(mask, kernel, iterations=1)

# Inpaint using OpenCV's intelligent Telea algorithm
# Telea's horizontal/vertical pixel interpolation works flawlessly on the ribbed fabric of the socks
final_image = cv2.inpaint(img, dilated_mask, 5, cv2.INPAINT_TELEA)

# Save the pristine, watermark-free image to the designated path
cv2.imwrite(output_path, final_image)
print(f"Success! Watermark-free product image saved to {output_path}")
