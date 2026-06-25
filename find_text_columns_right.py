import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Scan right shin region columns for dark pixels (text is < 85)
ymin, ymax = 365, 455
print("Dark pixel (< 100) counts per column from x=350 to x=430:")
for x in range(350, 430, 2):
    col = gray[ymin:ymax, x:x+2]
    dark_count = np.sum(col < 100)
    print(f"x={x:3d}-{x+2:3d}: dark_pixels={dark_count}")
