from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "public" / "social-share.png"
APPLE_ICON_PATH = ROOT / "public" / "apple-touch-icon.png"

WIDTH, HEIGHT = 1200, 630

# Create gradient background
image = Image.new("RGB", (WIDTH, HEIGHT), "#050510")
draw = ImageDraw.Draw(image)

start_color = (8, 8, 18)
end_color = (23, 12, 52)

for y in range(HEIGHT):
    t = y / (HEIGHT - 1)
    r = int(start_color[0] * (1 - t) + end_color[0] * t)
    g = int(start_color[1] * (1 - t) + end_color[1] * t)
    b = int(start_color[2] * (1 - t) + end_color[2] * t)
    draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

# Accent panel
panel_margin = 64
panel_bbox = (
    panel_margin,
    panel_margin,
    WIDTH - panel_margin,
    HEIGHT - panel_margin,
)
draw.rounded_rectangle(panel_bbox, radius=48, fill=(12, 16, 40, 255), outline=(110, 231, 255), width=6)

accent_bar_height = 10
accent_bar = (
    panel_margin + 80,
    panel_margin + 100,
    panel_margin + 380,
    panel_margin + 100 + accent_bar_height,
)
draw.rounded_rectangle(accent_bar, radius=accent_bar_height // 2, fill=(124, 58, 237))

# Typography
font_title = ImageFont.load_default()
font_sub = ImageFont.load_default()
font_body = ImageFont.load_default()

text_x = panel_margin + 80
text_y = panel_margin + 140

title = "Meghamsys"
subtitle = "AI-Native Digital Partner"
body = "AI copilots • Automation • Intelligent Products"

# Basic manual scaling for default font
scale_factor = 3
if hasattr(font_title, "font") and hasattr(font_title.font, "variant"):
    pass

draw.text((text_x, text_y), title, font=font_title, fill=(232, 246, 255))
text_y += 48

draw.text((text_x, text_y), subtitle, font=font_sub, fill=(184, 198, 224))
text_y += 40

draw.text((text_x, text_y), body, font=font_body, fill=(152, 170, 210))

# Metrics block
metric_start_x = text_x
metric_start_y = panel_margin + 320
metric_gap = 220
metrics = [
    ("50+", "AI copilots shipped"),
    ("12x", "Productivity lift"),
    ("Global", "Strategy, design, engineering"),
]

for idx, (heading, summary) in enumerate(metrics):
    x = metric_start_x + idx * metric_gap
    draw.text((x, metric_start_y), heading, font=font_title, fill=(232, 246, 255))
    draw.text((x, metric_start_y + 28), summary, font=font_body, fill=(170, 184, 216))

# Save output
OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
image.save(OUTPUT_PATH, format="PNG", optimize=True)
print(f"Generated social preview image -> {OUTPUT_PATH}")

# Apple touch icon
icon_size = 180
icon = Image.new("RGB", (icon_size, icon_size), "#050510")
icon_draw = ImageDraw.Draw(icon)

icon_draw.ellipse((30, 30, 150, 150), fill=(124, 58, 237))
icon_draw.ellipse((40, 40, 140, 140), fill=(110, 231, 255))
icon_draw.ellipse((55, 55, 125, 125), fill="#050510")

icon_font = ImageFont.load_default()
icon_text = "M"
text_bbox = icon_draw.textbbox((0, 0), icon_text, font=icon_font)
tw = text_bbox[2] - text_bbox[0]
th = text_bbox[3] - text_bbox[1]
icon_draw.text(((icon_size - tw) / 2, (icon_size - th) / 2), icon_text, font=icon_font, fill=(232, 246, 255))

icon.save(APPLE_ICON_PATH, format="PNG", optimize=True)
print(f"Generated apple touch icon -> {APPLE_ICON_PATH}")
