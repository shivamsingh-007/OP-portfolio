# Design

## Palette

- **Ink (background):** `#0A0A0A` — near-black, the dominant canvas
- **Ink Deep:** `#050508` — deeper blacks for layering
- **Ink Mid:** `#121212` — subtle surface differentiation
- **Ink Panel:** `#1A1A1F` — card/panel backgrounds
- **Ink Grey:** `#2D2D33` — borders, halftone dots
- **Ink Wash:** `#3D3D44` — muted dividers, scrollbar
- **Paper (text):** `#F5F0E8` — warm off-white, primary text
- **Blood (primary):** `#C41E3A` — Spider-Man red, CTAs, accents
- **Crimson:** `#E83E5A` — hover states, highlights
- **Blood Glow:** `#C41E3A66` — glows, shadows
- **Cyan:** `#00D4FF` — secondary accent, team badges
- **Magenta:** `#FF00FF` — tertiary accent, code highlights
- **Yellow:** `#FFE330` — warnings, trophies, scores

## Typography

- **Display:** Bangers — comic book headlines, uppercase, condensed
- **Body:** Space Grotesk — geometric sans, clean readability
- **Mono:** JetBrains Mono — code, labels, technical details

### Scale

- Hero heading: `clamp(2.5rem, 5vw, 4rem)` with Bangers
- Section heading: `clamp(2rem, 4vw, 3rem)` with Bangers
- Body: `0.88rem`–`1rem` with Space Grotesk
- Labels/mono: `0.6rem`–`0.75rem` with JetBrains Mono
- Line height body: 1.6 (light-on-dark needs extra breathing room)

## Spacing

- Section padding: `clamp(32px, 5vw, 60px)` vertical, `clamp(16px, 4vw, 80px)` horizontal
- Card padding: 20px internal
- Gap between cards: 14px
- Border radius: `4px` (sm), `8px` (md), `16px` (lg), `9999px` (full)

## Components

- **SplitSection** — 3-column grid: left content | red center line + spider station | right content
- **ProjectCard** — Dark glass panel with left accent border, hover lift, tech tags
- **Chatbot** — Dark glass container with message bubbles, quick action chips, input form
- **Arcade** — Canvas-based game with dark background, red pipes, score display
- **CircularGallery** — CSS 3D carousel with perspective, grayscale cards, hover reveal
- **SlideTabs** — Fixed top navbar with framer-motion sliding cursor, blood-red pill
- **LogoLoop** — Horizontal scrolling tech logos with fade-out edges

## Layout

- Single-page scroll with section anchors
- Hero: full viewport with spiderman.png background, zoom animation
- Sticky navbar appears after hero scroll
- Sections use SplitSection for red-line vertical rhythm
- Background images: grayscale + reduced brightness + ink gradient fades
- FallingSpider: fixed overlay, stops at contact section

## Motion

- Hero: `heroZoom` keyframe (scale 1.15 → 1)
- FallingSpider: scroll-driven vertical position with eased transition
- Cards: `slideUp` reveal on intersection
- CircularGallery: scroll-driven rotation via sticky positioning
- SlideTabs: framer-motion sliding cursor
- All animations respect `prefers-reduced-motion`

## Effects

- Halftone pattern: `radial-gradient(circle, var(--ink-grey) 1px, transparent 1px)` at 8px grid
- Glass panels: `backdrop-filter: blur(8px)` with subtle borders
- Selection: blood-red background
- Scrollbar: 6px, dark track, red hover
