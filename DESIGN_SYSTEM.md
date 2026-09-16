# MECNUN — CREATIVE DIRECTION & DESIGN SYSTEM (STATE 02)

## 1. Brand Identity & Positioning

- **Brand**: `MECNUN`
- **Position**: Computer Engineer | Web Developer | Digital Experience Developer
- **Domain**: `mecnunum.com`
- **Slogan**: *Himmetiyle Hizmetinizdeyiz.*
- **Core Archetype**: High-end Creative Technology Studio fused with an Elite Technical Personal Brand.

### Character & Philosophy:
1. **Premium & Editorial**: Inspired by architectural monographs and high-end editorial layouts. Large typographic contrasts, generous negative space, uncompromising polish.
2. **Futuristic & Technological**: Precision cybernetic mono annotations, WebGL 3D immersion, quantum glows (Cyan, Lime, Fuchsia), engineered micro-interactions.
3. **Minimal & Sophisticated**: Elimination of generic UI clutter, cards without purpose, or cookie-cutter templates.
4. **Uncompromised Usability**: High-contrast ratios, legible body typography, responsive tap targets, and smooth scroll ergonomics.

---

## 2. Design Tokens Matrix

### 2.1 Color Palette & Semantics

| Token Name | Hex Code | Semantic Role |
| :--- | :--- | :--- |
| **Studio Cyan** | `#00F0FF` | Primary Interactive & Quantum Glow |
| **Studio Lime** | `#CCFF00` | Accent Highlight, Success, Kinetic Energy |
| **Studio Fuchsia** | `#FF007F` | Experimental Highlights & Gradients |
| **Studio Purple** | `#9D00FF` | Deep Cosmic Depth & Ambient Lights |
| **Void Black** | `#030304` | Canvas & Deepest Background Layer |
| **Obsidian Base** | `#08080A` | Default Dark Mode Surface |
| **Titanium Raised** | `#121216` | Elevated Glass Panels & Cards |
| **Zinc Border** | `rgba(255,255,255,0.08)` | Hairline Sub-pixel Borders |

---

### 2.2 Typography Hierarchy

- **Primary Sans**: `Inter` (Tech Grotesque / UI System)
- **Technical Mono**: `JetBrains Mono` (Data, Code, Coordinates, Metadata)

| Scale | Fluid Range (Mobile ➔ Desktop) | Use Case |
| :--- | :--- | :--- |
| **Display 2XL** | `clamp(3.5rem, 8vw + 1rem, 7.5rem)` | Hero Studio Headline (`MECNUNUM`) |
| **Display XL** | `clamp(2.75rem, 5vw + 1rem, 5rem)` | Section Key Titles |
| **Heading 1** | `clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)` | Major Feature Headers |
| **Heading 2** | `clamp(1.5rem, 2vw + 0.5rem, 2.25rem)` | Sub-headings & Slogans |
| **Body Large** | `1.125rem (18px)` | Lead Paragraphs |
| **Body Medium** | `1rem (16px)` | Standard Content / Descriptions |
| **Caption / Mono**| `0.75rem (12px)` | Badges, Timestamps, Engineering Roles |

---

### 2.3 Surfaces & Glassmorphism

- **`.glass-panel`**:
  `background: rgba(16, 16, 20, 0.65); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08);`
- **`.glass-panel-glow`**:
  Adds atmospheric neon border glow (`border-color: rgba(0, 240, 255, 0.3); box-shadow: 0 0 25px rgba(0, 240, 255, 0.15);`)

---

### 2.4 Motion & Animation Tokens

- **Editorial Bezier**: `cubic-bezier(0.19, 1, 0.22, 1)` — Ultra-snappy, decelerating editorial curve.
- **Magnetic Spring**: `cubic-bezier(0.25, 1, 0.5, 1)` — Organic hover response.
- **Durations**:
  - `fast`: `150ms` (hover, clicks)
  - `normal`: `300ms` (modals, dropdowns)
  - `medium`: `600ms` (page reveals, layout morphs)
  - `deliberate`: `1200ms` (hero 3D camera pan, ambient loops)

---

### 2.5 Z-Index Layering

```
Z-Index 200: Tooltips & Floating Hints
Z-Index 100: Modals & Fullscreen Navigation
Z-Index 50:  Sticky Header & Theme Toggle
Z-Index 20:  Interactive UI Cards & Overlays
Z-Index 10:  Page Content & Typography
Z-Index 0:   3D WebGL Canvas Layer
Z-Index -1:  Ambient Cosmic Glows & Mesh Gradients
```

---

## 3. Anti-Template Rules

1. **No Generic Cards**: Never create generic white/grey boxes with basic box-shadow. Every card must use sub-pixel borders, frosted backdrop blur, and contextual ambient lighting.
2. **Editorial Asymmetry**: Favor clean typographic contrast, subtle offsets, and distinct engineering mono labels over standard centered boilerplate templates.
3. **Purposeful WebGL Integration**: The 3D layer is not an afterthought banner; it forms the atmospheric bedrock of the visual narrative and responds dynamically to user touch/pointer input.
