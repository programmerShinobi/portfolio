#!/usr/bin/env python3
"""Generate public/og-image.png (1200x630) for link-share previews.
Reproducible: run `python3 scripts/generate-og-image.py`. Requires Pillow."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (11, 16, 32)          # #0b1020 deep navy
CYAN = (34, 211, 238)      # #22d3ee
GRID = (56, 189, 248)      # blueprint line
OFF = (232, 237, 246)      # off-white text
MUTE = (138, 160, 194)     # muted slate

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img, "RGBA")

# blueprint grid
step = 40
for x in range(0, W, step):
    d.line([(x, 0), (x, H)], fill=GRID + (16,), width=1)
for y in range(0, H, step):
    d.line([(0, y), (W, y)], fill=GRID + (16,), width=1)

# accent bar
d.rectangle([80, 150, 92, 480], fill=CYAN)

f_eyebrow = ImageFont.truetype(MONO, 26)
f_name = ImageFont.truetype(BOLD, 84)
f_role = ImageFont.truetype(BOLD, 40)
f_tag = ImageFont.truetype(REG, 30)
f_url = ImageFont.truetype(MONO, 24)

x = 130
d.text((x, 150), "SOFTWARE ENGINEER", font=f_eyebrow, fill=CYAN)
d.text((x, 200), "Faqih Pratama", font=f_name, fill=OFF)
d.text((x, 292), "Muhti", font=f_name, fill=OFF)
d.text((x, 410), "Backend · Legacy modernization · Integration", font=f_role, fill=OFF)
d.text((x, 462), "Clarity for complex systems.", font=f_tag, fill=MUTE)
d.text((x, 545), "programmershinobi.github.io/portfolio", font=f_url, fill=CYAN)

img.save("public/og-image.png", "PNG", optimize=True)
print("wrote public/og-image.png", img.size)
