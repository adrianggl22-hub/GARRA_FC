"""
Remove white background from Teamtec logo and replace with transparent.
Uses Pillow for image processing.
"""
from PIL import Image

INPUT = "/home/z/my-project/upload/Teamtec_logo.png"
OUTPUT = "/home/z/my-project/public/sponsor-teamtec.png"

# Open image
img = Image.open(INPUT).convert("RGBA")
print(f"Original size: {img.size}, mode: {img.mode}")

# Get pixel data
datas = img.getdata()
new_data = []

# Threshold for white/near-white
WHITE_THRESHOLD = 235

for item in datas:
    r, g, b, a = item
    # If pixel is white or near-white, make it transparent
    if r >= WHITE_THRESHOLD and g >= WHITE_THRESHOLD and b >= WHITE_THRESHOLD:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)

# Trim transparent borders
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
    print(f"Cropped to: {img.size}")

# Resize to reasonable max while keeping aspect ratio
max_size = 400
if max(img.size) > max_size:
    ratio = max_size / max(img.size)
    new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
    img = img.resize(new_size, Image.LANCZOS)
    print(f"Resized to: {img.size}")

# Save
img.save(OUTPUT, "PNG", optimize=True)
print(f"Saved to: {OUTPUT}")
print(f"Final size: {img.size}, mode: {img.mode}")
