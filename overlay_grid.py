import cv2

img = cv2.imread("socks_original.png")
grid_img = img.copy()

# Add horizontal and vertical grid lines with coordinate labels
interval = 20
for y in range(300, 600, interval):
    cv2.line(grid_img, (0, y), (600, y), (0, 0, 255), 1)
    cv2.putText(grid_img, str(y), (5, y - 2), cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0, 0, 255), 1)

for x in range(0, 600, interval):
    cv2.line(grid_img, (x, 300), (x, 600), (255, 0, 0), 1)
    if x % 40 == 0:
        cv2.putText(grid_img, str(x), (x + 2, 315), cv2.FONT_HERSHEY_SIMPLEX, 0.3, (255, 0, 0), 1)

cv2.imwrite("socks_grid.png", grid_img)
print("Grid image saved to socks_grid.png")
