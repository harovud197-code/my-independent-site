import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Let's search for the left sock and right sock on-shin coordinates at y from 365 to 455
# We know the left sock is roughly between x=200 and 280
# The right sock is roughly between x=320 and 400

print("Left region column means (x=210 to 280):")
for x in range(210, 280, 5):
    col_slice = gray[365:455, x:x+5]
    print(f"x={x}-{x+5}: mean={np.mean(col_slice):.1f}, min={np.min(col_slice)}, max={np.max(col_slice)}")

print("\nRight region column means (x=320 to 390):")
for x in range(320, 390, 5):
    col_slice = gray[365:455, x:x+5]
    print(f"x={x}-{x+5}: mean={np.mean(col_slice):.1f}, min={np.min(col_slice)}, max={np.max(col_slice)}")
