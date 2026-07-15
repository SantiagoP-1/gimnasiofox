from PIL import Image
import numpy as np
import os

SRC = "/mnt/user-data/uploads/1784071098021_image.png"
OUT = "/home/claude/fox-gym/public/images"
APP = "/home/claude/fox-gym/app"

img = Image.open(SRC).convert("RGB")
arr = np.array(img).astype("int16")

# El fondo es negro puro; el arte (cromado + dorado) es mucho más brillante.
brightness = arr.max(axis=2)  # 0 = negro, 255 = brillante
mask = brightness > 12

ys, xs = np.where(mask)
pad = 10
x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, img.width)
y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, img.height)
cropped = img.crop((x0, y0, x1, y1))
cropped_b = brightness[y0:y1, x0:x1]

# 1) Logo completo (lockup con "Centro de Entrenamiento" + "FOX"), fondo
#    transparente — para navbar, footer, JSON-LD logo.
alpha = np.clip((cropped_b.astype("float32") / 30) * 255, 0, 255).astype("uint8")
rgba = np.dstack([np.array(cropped), alpha])
logo_full = Image.fromarray(rgba, mode="RGBA")
logo_full.save(f"{OUT}/logo-white.png")
print("saved logo-white.png", logo_full.size)

# 2) Marca sobre fondo negro sólido (para favicon / apple-icon / lugares que
#    necesitan un fondo opaco, no transparencia).
mark_on_black = Image.new("RGB", cropped.size, (13, 13, 13))
mark_on_black.paste(cropped, (0, 0))
mark_on_black.save(f"{OUT}/logo-mark.png")
print("saved logo-mark.png", mark_on_black.size)

# 3) Favicon: recorte centrado solo en el bloque "FOX" grande (la línea
#    "Centro de Entrenamiento" no se lee a 16-32px), fondo negro.
w, h = cropped.size
fox_only = cropped.crop((0, int(h * 0.38), w, h))
fox_square = Image.new("RGB", (max(fox_only.size), max(fox_only.size)), (13, 13, 13))
fox_square.paste(fox_only, ((fox_square.width - fox_only.width) // 2, (fox_square.height - fox_only.height) // 2))
fox_square.save(f"{APP}/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("saved favicon.ico")

# 4) Apple touch icon (180x180), fondo de marca.
apple = Image.new("RGB", (180, 180), (13, 13, 13))
fox_resized = fox_square.resize((150, 150), Image.LANCZOS)
apple.paste(fox_resized, (15, 15))
apple.save(f"{APP}/apple-icon.png")
print("saved apple-icon.png")
