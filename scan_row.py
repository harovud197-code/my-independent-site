import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Scan y=410 row for all x from 0 to 600
row_idx = 410
row_values = gray[row_idx, :]

print(f"Gray values along row y={row_idx}:")
# We will print sections where we see high values (socks are bright)
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
            if end_x - start_x > 10:  # Only count if the width is substantial
                socks_detected.append((start_x, end_x))

# Catch if sock goes to end
if in_sock:
    socks_detected.append((start_x, 599))

print("Detected bright regions (potential socks) along y=410:")
for idx, (s, e) in enumerate(socks_detected):
    print(f"Region {idx + 1}: x={s} to {e} (width={e - s + 1})")
    
# Let's also print 10-pixel average of the entire row to see the landscape
print("\nRow profile (averages of 20px blocks):")
for block in range(0, 600, 20):
    block_mean = np.mean(row_values[block:block+20])
    print(f"x={block:03d}-{block+20:03d}: mean={block_mean:.1f}")
