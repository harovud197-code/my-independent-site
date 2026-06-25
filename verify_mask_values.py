import cv2
import numpy as np

img = cv2.imread("socks_original.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

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

for i, (xmin, ymin, xmax, ymax) in enumerate(bboxes):
    crop = gray[ymin:ymax, xmin:xmax]
    # Count pixels below 85
    under_85 = np.sum(crop < 85)
    under_110 = np.sum(crop < 110)
    under_130 = np.sum(crop < 130)
    total = crop.size
    print(f"Box {i+1} (x:{xmin}-{xmax}, y:{ymin}-{ymax}): total={total}")
    print(f"  Pixels < 85:  {under_85} ({under_85/total*100:.1f}%)")
    print(f"  Pixels < 110: {under_110} ({under_110/total*100:.1f}%)")
    print(f"  Pixels < 130: {under_130} ({under_130/total*100:.1f}%)")
