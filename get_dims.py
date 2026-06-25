import cv2

img = cv2.imread("socks_original.png")
if img is not None:
    print(f"Image dimensions: {img.shape}")
else:
    print("Failed to load image")
