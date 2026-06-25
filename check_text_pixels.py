import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Let's crop a small region containing a letter from the left shin
# The left shin is at x=155 to 195, y=365 to 455
left_shin_crop = gray[365:455, 155:195]

# Print sorted unique values and their counts in the crop to find the text cluster
unique, counts = np.unique(left_shin_crop, return_counts=True)
val_counts = sorted(zip(unique, counts), key=lambda x: x[0])

print("Left shin grayscale values and counts (first 30 values):")
for val, count in val_counts[:30]:
    print(f"Gray={val:3d}: count={count}")

# Right shin crop
right_shin_crop = gray[365:455, 345:385]
unique_r, counts_r = np.unique(right_shin_crop, return_counts=True)
val_counts_r = sorted(zip(unique_r, counts_r), key=lambda x: x[0])

print("\nRight shin grayscale values and counts (first 30 values):")
for val, count in val_counts_r[:30]:
    print(f"Gray={val:3d}: count={count}")
