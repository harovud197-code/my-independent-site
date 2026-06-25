import requests

url = "https://sc02.alicdn.com/kf/H738c5a1af75f4bbea6ffd759ac8e1a13d.png"
output_path = "socks_original.png"

print(f"Downloading from {url}...")
response = requests.get(url, stream=True)
if response.status_code == 200:
    with open(output_path, "wb") as f:
        f.write(response.content)
    print(f"Downloaded and saved to {output_path}")
else:
    print(f"Failed to download image: HTTP {response.status_code}")
