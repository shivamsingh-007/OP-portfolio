# Design Commands Reference

> Quick-access commands for every design category. Copy, paste, ship.

---

## Table of Contents

1. [Logo Design](#1-logo-design)
2. [Corporate Identity (CIP)](#2-corporate-identity-cip)
3. [Presentations & Slides](#3-presentations--slides)
4. [Banner Design](#4-banner-design)
5. [Icon Design](#5-icon-design)
6. [Social Photos](#6-social-photos)
7. [Workflows](#7-workflows)

---

## 1. Logo Design

55+ styles, 30 color palettes, 25 industry guides.

### Search Styles

```bash
# By aesthetic
python3 ~/.claude/skills/design/scripts/logo/search.py "minimalist clean" --domain style
python3 ~/.claude/skills/design/scripts/logo/search.py "vintage retro badge" --domain style
python3 ~/.claude/skills/design/scripts/logo/search.py "geometric abstract" --domain style

# By color psychology
python3 ~/.claude/skills/design/scripts/logo/search.py "tech professional" --domain color
python3 ~/.claude/skills/design/scripts/logo/search.py "warm luxury gold" --domain color

# By industry
python3 ~/.claude/skills/design/scripts/logo/search.py "healthcare medical" --domain industry
python3 ~/.claude/skills/design/scripts/logo/search.py "fintech banking" --domain industry
python3 ~/.claude/skills/design/scripts/logo/search.py "food restaurant" --domain industry
```

### Generate Design Brief

```bash
python3 ~/.claude/skills/design/scripts/logo/search.py "tech startup modern" --design-brief -p "BrandName"
```

### Generate with AI

```bash
# With style + industry
python3 ~/.claude/skills/design/scripts/logo/generate.py --brand "TechFlow" --style minimalist --industry tech

# With freeform prompt
python3 ~/.claude/skills/design/scripts/logo/generate.py --prompt "coffee shop vintage badge" --style vintage

# Custom color
python3 ~/.claude/skills/design/scripts/logo/generate.py --brand "NeonLabs" --style cyberpunk --industry tech --color "#00FF88"
```

---

## 2. Corporate Identity (CIP)

50+ deliverables, 20 styles, 20 industries.

### Search Domains

```bash
# Deliverables
python3 ~/.claude/skills/design/scripts/cip/search.py "business card letterhead" --domain deliverable
python3 ~/.claude/skills/design/scripts/cip/search.py "presentation folder" --domain deliverable

# Styles
python3 ~/.claude/skills/design/scripts/cip/search.py "luxury premium elegant" --domain style
python3 ~/.claude/skills/design/scripts/cip/search.py "minimalist modern" --domain style

# Industries
python3 ~/.claude/skills/design/scripts/cip/search.py "hospitality hotel" --domain industry
python3 ~/.claude/skills/design/scripts/cip/search.py "tech startup" --domain industry

# Mockups
python3 ~/.claude/skills/design/scripts/cip/search.py "office reception" --domain mockup
python3 ~/.claude/skills/design/scripts/cip/search.py "stationery desk" --domain mockup
```

### Generate Brief

```bash
python3 ~/.claude/skills/design/scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"
```

### Generate Mockups

```bash
# Single deliverable (with logo — recommended)
python3 ~/.claude/skills/design/scripts/cip/generate.py --brand "TopGroup" --logo /path/to/logo.png --deliverable "business card" --industry "consulting"

# Full CIP set
python3 ~/.claude/skills/design/scripts/cip/generate.py --brand "TopGroup" --logo /path/to/logo.png --industry "consulting" --set

# Pro model (4K text)
python3 ~/.claude/skills/design/scripts/cip/generate.py --brand "TopGroup" --logo logo.png --deliverable "business card" --model pro

# Without logo
python3 ~/.claude/skills/design/scripts/cip/generate.py --brand "TechFlow" --deliverable "business card" --no-logo-prompt
```

### Render HTML Presentation

```bash
python3 ~/.claude/skills/design/scripts/cip/render-html.py --brand "TopGroup" --industry "consulting" --images /path/to/cip-output
```

---

## 3. Presentations & Slides

Strategic HTML presentations with Chart.js, design tokens, copywriting.

### Quick Start

```bash
# Auto-detect domain
python3 scripts/search-slides.py "investor pitch"

# Copywriting focus
python3 scripts/search-slides.py "problem agitation" -d copy

# Chart focus
python3 scripts/search-slides.py "revenue growth" -d chart

# Contextual (position 2 of 9 total slides)
python3 scripts/search-slides.py "problem slide" --context --position 2 --total 9
```

### Knowledge Base

| Topic | File |
|-------|------|
| Creation Guide | `references/slides-create.md` |
| Layout Patterns | `references/slides-layout-patterns.md` |
| HTML Template | `references/slides-html-template.md` |
| Copywriting | `references/slides-copywriting-formulas.md` |
| Strategies | `references/slides-strategies.md` |

### Decision CSVs

| File | Purpose |
|------|---------|
| `data/slide-strategies.csv` | 15 deck structures + emotion arcs |
| `data/slide-layouts.csv` | 25 layouts + component variants |
| `data/slide-typography.csv` | Content type → Typography scale |
| `data/slide-color-logic.csv` | Emotion → Color treatment |
| `data/slide-charts.csv` | 25 chart types with Chart.js config |

---

## 4. Banner Design

22 art direction styles across social, ads, web, print.

### Size Reference

| Platform | Type | Size (px) |
|----------|------|-----------|
| Facebook | Cover | 820 × 312 |
| Twitter/X | Header | 1500 × 500 |
| LinkedIn | Personal | 1584 × 396 |
| LinkedIn | Company | 1128 × 191 |
| YouTube | Channel art | 2560 × 1440 |
| Instagram | Story | 1080 × 1920 |
| Instagram | Post | 1080 × 1080 |
| Instagram | Carousel | 1080 × 1350 |
| Google Ads | Med Rectangle | 300 × 250 |
| Google Ads | Leaderboard | 728 × 90 |
| Google Ads | Skyscraper | 160 × 600 |
| Website | Hero | 1920 × 600–1080 |

### Top Art Styles

| Style | Best For |
|-------|----------|
| Minimalist | SaaS, tech, enterprise |
| Bold Typography | Announcements, launches |
| Gradient | Modern brands, apps |
| Photo-Based | Lifestyle, e-commerce |
| Geometric | Tech, fintech |
| Glassmorphism | SaaS, mobile apps |
| Neon/Cyberpunk | Gaming, events, nightlife |
| Brutalist | Agencies, creative studios |
| Watercolor/Hand-drawn | Organic, wellness, food |
| Isometric 3D | Tech, product demos |

### Design Rules

- Safe zones: critical content in central 70–80%
- One CTA per banner, bottom-right, min 44px height
- Max 2 fonts, min 16px body, ≥32px headline
- Text under 20% for ads (Meta penalizes)
- Print: 300 DPI, CMYK, 3–5mm bleed

### Workflow

```
1. Gather requirements → purpose, platform, content, brand, style
2. Research → Browse Pinterest for references
3. Design → Create HTML/CSS banner
4. Export → Screenshot to PNG at exact dimensions
5. Present → Show all options side-by-side, iterate
```

---

## 5. Icon Design

15 styles, 12 categories. Gemini 3.1 Pro Preview.

### Generate Single Icon

```bash
python3 ~/.claude/skills/design/scripts/icon/generate.py --prompt "settings gear" --style outlined
python3 ~/.claude/skills/design/scripts/icon/generate.py --prompt "shopping cart" --style filled --color "#6366F1"
python3 ~/.claude/skills/design/scripts/icon/generate.py --name "dashboard" --category navigation --style duotone
```

### Generate Batch Variations

```bash
python3 ~/.claude/skills/design/scripts/icon/generate.py --prompt "cloud upload" --batch 4 --output-dir ./icons
```

### Multi-size Export

```bash
python3 ~/.claude/skills/design/scripts/icon/generate.py --prompt "user profile" --sizes "16,24,32,48" --output-dir ./icons
```

### Top Styles

| Style | Best For |
|-------|----------|
| outlined | UI interfaces, web apps |
| filled | Mobile apps, nav bars |
| duotone | Marketing, landing pages |
| rounded | Friendly apps, health |
| sharp | Tech, fintech, enterprise |
| flat | Material design, Google-style |
| gradient | Modern brands, SaaS |
| sharp-solid | Enterprise, dashboards |

---

## 6. Social Photos

Multi-platform social image design: HTML/CSS → screenshot export.

### Key Sizes

| Platform | Size (px) | Platform | Size (px) |
|----------|-----------|----------|-----------|
| IG Post | 1080 × 1080 | FB Post | 1200 × 630 |
| IG Story | 1080 × 1920 | X Post | 1200 × 675 |
| IG Carousel | 1080 × 1350 | LinkedIn | 1200 × 627 |
| YT Thumbnail | 1280 × 720 | Pinterest | 1000 × 1500 |

### Workflow

```
1. Analyze → subject, platforms, style, brand context
2. Ideate → 3–5 concepts
3. Design → HTML per idea × size
4. Export → Screenshot at exact px (2x deviceScaleFactor)
5. Verify → Visually inspect; fix and re-export
6. Report → Summary with design decisions
```

---

## 7. Workflows

### Complete Brand Package

```
Step 1: Logo
  python3 scripts/logo/generate.py --brand "BrandName" --style minimalist --industry tech

Step 2: CIP (business cards, letterhead, etc.)
  python3 scripts/cip/generate.py --brand "BrandName" --logo logo.png --industry tech --set

Step 3: Presentation
  Load references/slides-create.md → Build pitch deck
```

### New Design System

```
Step 1: Brand (brand skill) → Colors, typography, voice
Step 2: Tokens (design-system skill) → Semantic token layers
Step 3: Implement (ui-styling skill) → Tailwind, shadcn/ui config
```

### Portfolio Refresh

```
Step 1: Logo → Generate new variants
Step 2: Banners → Social headers for LinkedIn, X, GitHub
Step 3: Social Photos → Profile images, post templates
```

---

## Setup

```bash
export GEMINI_API_KEY="your-key"  # https://aistudio.google.com/apikey
pip install google-genai pillow
```

---

## References

| Topic | File |
|-------|------|
| Logo Design Guide | `references/logo-design.md` |
| Logo Styles | `references/logo-style-guide.md` |
| Logo Colors | `references/logo-color-psychology.md` |
| Logo Prompts | `references/logo-prompt-engineering.md` |
| CIP Design Guide | `references/cip-design.md` |
| CIP Deliverables | `references/cip-deliverable-guide.md` |
| CIP Styles | `references/cip-style-guide.md` |
| CIP Prompts | `references/cip-prompt-engineering.md` |
| Slides Create | `references/slides-create.md` |
| Slides Layouts | `references/slides-layout-patterns.md` |
| Slides Template | `references/slides-html-template.md` |
| Slides Copy | `references/slides-copywriting-formulas.md` |
| Slides Strategy | `references/slides-strategies.md` |
| Banner Sizes & Styles | `references/banner-sizes-and-styles.md` |
| Social Photos Guide | `references/social-photos-design.md` |
| Icon Design Guide | `references/icon-design.md` |
