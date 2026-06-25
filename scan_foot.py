import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

row_idx = 510
row_values = gray[row_idx, :]

socks_detected = []
in_sock = False
start_x = 0

for x in range(600):
    val = row_values[x]
    if val > 120:  # Bright sock pixel threshold
        if not in_sock:
            in_sock = True
            start_x = x
    else:
        if in_sock:
            in_sock = False
            end_x = x - 1
            if end_x - start_x > 10:
                socks_detected.append((start_x, end_x))

if in_sock:
    socks_detected.append((start_x, 599))

print("Detected bright regions (potential socks) along y=510:")
for idx, (s, e) in enumerate(socks_detected):
    print(f"Region {idx + 1}: x={s} to {e} (width={e - s + 1})")

print("\nRow profile (averages of 20px blocks):")
for block in range(0, 600, 20):
    block_mean = np.mean(row_values[block:block+20])
    print(f"x={block:03d}-{block+20:03d}: mean={block_mean:.1f}")
