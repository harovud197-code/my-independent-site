import cv2
import numpy as np

# Load the original image
img = cv2.imread("socks_original.png")
h, w, c = img.shape

# Define bounding boxes for the watermarks: (x_min, y_min, x_max, y_max)
# Define bounding boxes for the watermarks: (x_min, y_min, x_max, y_max)
# Left sock:
# 1. "LOGO" at top cuff: (245, 340, 275, 360)
# 2. "YOUR LOGO" vertically: (270, 365, 305, 455)
# 3. "YOUR LOGO" on the foot top/ankle: (240, 480, 290, 525)
# Right sock:
# 4. "LOGO" at top cuff: (330, 340, 370, 365)
# 5. "YOUR LOGO" vertically: (335, 365, 375, 455)
# 6. "YOUR LOGO" on the front foot top: (460, 500, 560, 565)

bboxes = [
    # Left sock
    (245, 340, 275, 360),
    (270, 365, 305, 455),
    (240, 480, 290, 525),
    # Right sock
    (330, 340, 370, 365),
    (335, 365, 375, 455),
    (460, 500, 560, 565)
]

# Create a blank mask
mask = np.zeros((h, w), dtype=np.uint8)

# For each bbox, extract the dark text pixels and add them to the mask
for i, (xmin, ymin, xmax, ymax) in enumerate(bboxes):
    # Crop region
    crop = img[ymin:ymax, xmin:xmax]
    # Convert to grayscale
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    
    # We want to find the dark pixels (black text on white sock).
    # Since the sock has some shadow, we can tune the threshold. Let's try < 85.
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

# Save mask, and results for verification
cv2.imwrite("mask.png", dilated_mask)
cv2.imwrite("inpainted_telea.png", inpainted_telea)
cv2.imwrite("inpainted_ns.png", inpainted_ns)

# Draw bboxes on the original to verify bounding box accuracy
bbox_img = img.copy()
for xmin, ymin, xmax, ymax in bboxes:
    cv2.rectangle(bbox_img, (xmin, ymin), (xmax, ymax), (0, 0, 255), 1)
cv2.imwrite("socks_bboxes_verify.png", bbox_img)

print("Test run complete. Created mask.png, inpainted_telea.png, inpainted_ns.png, socks_bboxes_verify.png")
