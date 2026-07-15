import math
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

BLACK = (13, 13, 13)
CHARCOAL = (22, 22, 22)
CHARCOAL2 = (30, 30, 30)
GOLD = (245, 180, 0)
GOLD_DIM = (179, 134, 0)
WHITE = (255, 255, 255)
GRAY = (161, 161, 161)

FONT_BOLD = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"
FONT_SEMI = "/usr/share/fonts/truetype/google-fonts/Poppins-SemiBold.ttf"
FONT_MED = "/usr/share/fonts/truetype/google-fonts/Poppins-Medium.ttf"

import os
if not os.path.exists(FONT_SEMI):
    FONT_SEMI = FONT_BOLD
if not os.path.exists(FONT_MED):
    FONT_MED = FONT_BOLD


def gradient_bg(w, h, c1, c2, angle=115):
    base = Image.new("RGB", (w, h), c1)
    top = Image.new("RGB", (w, h), c2)
    mask = Image.new("L", (w, h))
    md = ImageDraw.Draw(mask)
    rad = math.radians(angle)
    length = w * abs(math.cos(rad)) + h * abs(math.sin(rad))
    for i in range(int(length)):
        val = int(255 * (i / length))
        md.line(
            [
                (i * math.cos(rad) - h * math.sin(rad), i * math.sin(rad) + h * math.cos(rad)),
                (i * math.cos(rad) + w * math.sin(rad), i * math.sin(rad) - w * math.cos(rad)),
            ],
            fill=val,
            width=3,
        )
    mask = mask.filter(ImageFilter.GaussianBlur(2))
    return Image.composite(top, base, mask)


def add_noise(img, amount=6):
    px = img.load()
    w, h = img.size
    rnd = random.Random(42)
    for _ in range(int(w * h * 0.02)):
        x, y = rnd.randrange(w), rnd.randrange(h)
        r, g, b = px[x, y]
        n = rnd.randint(-amount, amount)
        px[x, y] = (max(0, min(255, r + n)), max(0, min(255, g + n)), max(0, min(255, b + n)))
    return img


def diagonal_stripes(draw, w, h, color, spacing=46, width=2, alpha_layer=None):
    for x in range(-h, w, spacing):
        draw.line([(x, h), (x + h, 0)], fill=color, width=width)


def corner_tag(draw, w, h, text):
    font = ImageFont.truetype(FONT_SEMI, 20)
    pad_x, pad_y = 16, 10
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    box = [24, 24, 24 + tw + pad_x * 2, 24 + th + pad_y * 2]
    draw.rectangle(box, fill=GOLD)
    draw.text((24 + pad_x, 24 + pad_y - bbox[1]), text, font=font, fill=BLACK)


def label(draw, w, h, title, subtitle):
    title_font = ImageFont.truetype(FONT_BOLD, 46)
    sub_font = ImageFont.truetype(FONT_MED, 24)

    bbox = draw.textbbox((0, 0), title, font=title_font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx, ty = w / 2 - tw / 2, h / 2 - th / 2 - 18
    draw.text((tx, ty), title, font=title_font, fill=WHITE)

    bbox2 = draw.textbbox((0, 0), subtitle, font=sub_font)
    sw, sh = bbox2[2] - bbox2[0], bbox2[3] - bbox2[1]
    sx, sy = w / 2 - sw / 2, ty + th + 18
    draw.text((sx, sy), subtitle, font=sub_font, fill=GRAY)


def make_placeholder(path, w, h, title, tag="ESPACIO PARA FOTO REAL", fmt="WEBP", quality=82):
    img = gradient_bg(w, h, BLACK, CHARCOAL2, angle=120)
    draw = ImageDraw.Draw(img, "RGBA")
    diagonal_stripes(draw, w, h, (245, 180, 0, 18), spacing=64, width=2)

    # soft gold glow blob
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gx, gy = int(w * 0.78), int(h * 0.22)
    gr = int(min(w, h) * 0.32)
    gd.ellipse([gx - gr, gy - gr, gx + gr, gy + gr], fill=(245, 180, 0, 60))
    glow = glow.filter(ImageFilter.GaussianBlur(int(gr * 0.6)))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")

    draw = ImageDraw.Draw(img, "RGBA")
    corner_tag(draw, w, h, tag)
    label(draw, w, h, title, "Centro de Entrenamiento FOX — Balcarce")

    # thin frame
    draw.rectangle([0, 0, w - 1, h - 1], outline=(255, 255, 255, 25), width=2)

    img = add_noise(img, amount=4)
    if fmt == "WEBP":
        img.save(path, format="WEBP", quality=quality, method=6)
    else:
        img.save(path, quality=quality)
    size_kb = os.path.getsize(path) / 1024
    print(f"saved {path} ({size_kb:.0f} KB)")


out_dir = "/home/claude/fox-gym/public/images"
import os
os.makedirs(out_dir, exist_ok=True)

make_placeholder(f"{out_dir}/hero.webp", 1920, 1200, "FOX", "Foto real recomendada: sala de musculación", quality=78)
make_placeholder(f"{out_dir}/gallery-musculacion.webp", 1200, 900, "Musculación", quality=75)
make_placeholder(f"{out_dir}/gallery-aerobico.webp", 1200, 900, "Aeróbico", quality=75)
make_placeholder(f"{out_dir}/gallery-patio.webp", 1200, 900, "Patio interno", quality=75)
make_placeholder(f"{out_dir}/gallery-duchas.webp", 1200, 900, "Duchas y lockers", quality=75)
make_placeholder(f"{out_dir}/gallery-comunidad.webp", 1200, 900, "Comunidad FOX", quality=75)
make_placeholder(f"{out_dir}/gallery-ingreso.webp", 1200, 900, "Ingreso", quality=75)
# OG image se mantiene en JPG: mejor compatibilidad con crawlers de redes
# sociales (Facebook/WhatsApp a veces no procesan bien WebP) y no pesa en
# el payload de la página porque se sirve aparte, sólo al compartir el link.
make_placeholder(f"{out_dir}/og-image.jpg", 1200, 630, "FOX", "El gimnasio más completo de Balcarce", fmt="JPEG", quality=85)

print("done")
