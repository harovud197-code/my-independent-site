import cv2
import numpy as np

# Load original image
img = cv2.imread("socks_original.png")
h, w, c = img.shape

# Precise bounding boxes determined by pixel-level light scanning
bboxes = [
    # Left sock
    (150, 340, 195, 365),     # Cuff LOGO
    (155, 365, 195, 455),     # Shin YOUR LOGO
    (235, 480, 285, 525),     # Heel/Sole YOUR LOGO
    # Right sock
    (340, 340, 385, 365),     # Cuff LOGO
    (345, 365, 385, 455),     # Shin YOUR LOGO
    (330, 520, 380, 565)      # Foot top/toes YOUR LOGO
]

# Create blank mask
mask = np.zeros((h, w), dtype=np.uint8)

# For each bbox, extract the dark text pixels and add them to the mask
for i, (xmin, ymin, xmax, ymax) in enumerate(bboxes):
    crop = img[ymin:ymax, xmin:xmax]
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    
    # We want to find the dark pixels (black text on white sock).
    # Since we are strictly inside the bounding boxes of the socks, 
    # we can use a safe threshold of < 85 to capture black text letters.
    _, thresh = cv2.threshold(gray, 85, 255, cv2.THRESH_BINARY_INV)
    
    # Place it back in the mask
    mask[ymin:ymax, xmin:xmax] = thresh

# Dilate the mask slightly to cover the anti-aliased edges of the text
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
dilated_mask = cv2.dilate(mask, kernel, iterations=1)

# Inpaint using INPAINT_TELEA
inpainted_telea = cv2.inpaint(img, dilated_mask, 5, cv2.INPAINT_TELEA)

# Inpaint using INPAINT_NS
inpainted_ns = cv2.inpaint(img, dilated_mask, 5, cv2.INPAINT_NS)

# Save verification images
cv2.imwrite("mask_precise.png", dilated_mask)
cv2.imwrite("inpainted_telea_precise.png", inpainted_telea)
cv2.imwrite("inpainted_ns_precise.png", inpainted_ns)

# Draw bboxes on the original to verify bounding box accuracy
bbox_img = img.copy()
for xmin, ymin, xmax, ymax in bboxes:
    cv2.rectangle(bbox_img, (xmin, ymin), (xmax, ymax), (0, 0, 255), 1)
cv2.imwrite("socks_bboxes_verify3.png", bbox_img)

print("Inpainting complete! Created mask_precise.png, inpainted_telea_precise.png, inpainted_ns_precise.png, socks_bboxes_verify3.png")
