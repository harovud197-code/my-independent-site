import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Crop left shin area
left_shin = gray[365:455, 270:305]
print("Left Shin Crop Stats:")
print(f"Min: {np.min(left_shin)}")
print(f"Max: {np.max(left_shin)}")
print(f"Mean: {np.mean(left_shin)}")
print(f"Median: {np.median(left_shin)}")

# Crop right shin area
right_shin = gray[365:455, 335:375]
print("\nRight Shin Crop Stats:")
print(f"Min: {np.min(right_shin)}")
print(f"Max: {np.max(right_shin)}")
print(f"Mean: {np.mean(right_shin)}")
print(f"Median: {np.median(right_shin)}")

# Save these crops for inspection
cv2.imwrite("crop_left_shin.png", img[365:455, 270:305])
cv2.imwrite("crop_right_shin.png", img[365:455, 335:375])
