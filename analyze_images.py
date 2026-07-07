import requests
from PIL import Image
from io import BytesIO

urls = {
    "ID1": "https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-crew-grip-three-colors.jpg?v=1",
    "ID2": "https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-pilates-low-cut-straps-final.jpg?v=1",
    "ID3": "https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-running-long-three-colors-final.jpg?v=1",
}
headers = {"User-Agent": "Mozilla/5.0"}
for name, url in urls.items():
    try:
        r = requests.get(url, headers=headers, timeout=15)
        r.raise_for_status()
        img = Image.open(BytesIO(r.content)).convert("RGB")
        w, h = img.size
        corners = [(5,5),(w-5,5),(5,h-5),(w-5,h-5)]
        avg = tuple(sum(img.getpixel(p)[i] for p in corners)//4 for i in range(3))
        print(f"{name}: size={w}x{h}, bg=#{avg[0]:02X}{avg[1]:02X}{avg[2]:02X}")
        # Save locally for visual inspection
        img.save(f"{name}.jpg")
        print(f"  Saved {name}.jpg")
    except Exception as e:
        print(f"Error processing {name}: {e}")
