from PIL import Image, ImageOps
import numpy as np

SRC = "/mnt/user-data/uploads/logofox.jpg"
OUT = "/home/claude/fox-gym/public/images"
APP = "/home/claude/fox-gym/app"

img = Image.open(SRC).convert("RGB")
arr = np.array(img).astype("int16")

# Distance from white, per-pixel — used both to find the tight crop box and
# to build the alpha/recolor mask.
dist_from_white = 255 - arr.max(axis=2)  # 0 = pure white, higher = darker
mask = dist_from_white > 18  # pixels considered "ink"

# Tight bounding box around the ink, with a little breathing room.
ys, xs = np.where(mask)
pad = 6
x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, img.width)
y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, img.height)

cropped = img.crop((x0, y0, x1, y1))
cropped_mask = mask[y0:y1, x0:x1]
cropped_dist = dist_from_white[y0:y1, x0:x1]

# 1) Marca "original" prolija sobre fondo blanco — para favicon / apple-icon /
#    JSON-LD logo (Google prefiere una marca simple, cuadrada, fondo claro).
mark = ImageOps.expand(cropped, border=14, fill=(255, 255, 255))
mark = mark.resize((512, int(512 * mark.height / mark.width)), Image.LANCZOS)
# Centrar en lienzo cuadrado 512x512 blanco.
square = Image.new("RGB", (512, 512), (255, 255, 255))
square.paste(mark, (0, (512 - mark.height) // 2))
square.save(f"{OUT}/logo-mark.png")
print("saved logo-mark.png", square.size)

# 2) Versión blanca sobre transparente — para navbar/footer en fondo oscuro.
alpha = np.clip((cropped_dist.astype("float32") / 60) * 255, 0, 255).astype("uint8")
white_rgb = np.full((*alpha.shape, 3), 255, dtype="uint8")
rgba = np.dstack([white_rgb, alpha])
logo_white = Image.fromarray(rgba, mode="RGBA")
logo_white.save(f"{OUT}/logo-white.png")
print("saved logo-white.png", logo_white.size)

# 3) Favicon multi-tamaño a partir de la marca sobre blanco.
mark_sq = square.copy()
mark_sq.save(f"{APP}/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("saved favicon.ico")

# 4) Apple touch icon: marca blanca centrada sobre fondo oscuro de marca.
apple = Image.new("RGB", (180, 180), (13, 13, 13))
logo_for_apple = logo_white.resize(
    (int(120 * logo_white.width / logo_white.height), 120), Image.LANCZOS
)
apple.paste(logo_for_apple, ((180 - logo_for_apple.width) // 2, (180 - 120) // 2), logo_for_apple)
apple.save(f"{APP}/apple-icon.png")
print("saved apple-icon.png")
