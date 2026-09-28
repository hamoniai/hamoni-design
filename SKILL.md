---
name: hamoni-design-system
description: Apply the Hamoni design system when building Hamoni interfaces or brand assets — brand colors, typography, tokens, components and page templates.
user-invocable: true
---

# Hamoni Design System

One workforce: bring your people and AI together, orchestrated as one workforce and built to scale.

## What is inside

- `brand.json` — brand record (name, colors, seed, typography, voice, logo)
- `DESIGN.md` — canonical design specification; `guide.md` — short brand guide
- `README.md` — package overview, preview manifest and reuse workflow
- `colors_and_type.css` — reusable colour + typography foundation (link this in a project)
- `preview/` — focused review cards (colour, themes, type, spacing, components, assets)
- `ui_kits/app/` — applied interface kit (React) composing the app shell, nav, list rail, run area and composer
- `assets/` — preserved brand assets (logo, concept icons, photorealistic examples)
- `system/tokens.default.json` · `tokens.dark.json` · `tokens.compact.json` — design tokens
- `system/variables.css` · `variables.dark.css` · `brand-palette.css` — `--brand-*` CSS custom properties
- `system/theme.json` — antd `ConfigProvider` theme
- `system/kit.html` · `kit.dark.html` · `index.html` · `artifacts/` — component kit and generated pages

## Source context

- **Source:** `designmd://design-system-inspired-by-supabase`
- **Based on:** the Open Design [Supabase](https://github.com/nexu-io/open-design/tree/main/design-systems/supabase) design system
- **Product:** Hamoni — an enterprise platform that orchestrates people and AI as one workforce. **Surface:** web.
- **Evidence:** `context/source-context.md`, `context/input-DESIGN.md`

## When to use this skill

- Building or extending Hamoni web UI.
- Producing Hamoni brand assets (landing page, deck, poster, email, newsletter, form).
- Any work that must follow Hamoni's colours, typography and voice.

## How to use

1. Read `README.md` and `DESIGN.md` first.
2. **Colour** — primary purple `#bb86fc`; canvas light `#FBF6FF` / dark `#121212`; surfaces `#1e1e1e`; text `#e0e0e0` / `#a0a0a0` / `#6c6c6c`; borders `#2e2e2e`.
3. **Type** — Inter for display and body, weights 400 / 700. **Layout** — 8px radius, 1px borders, 8px baseline grid.
4. Link **`colors_and_type.css`** (colour + typography foundation) and toggle dark with the `.dark` class (or load `system/variables.dark.css` for a dark-only build).
5. Consume `system/tokens.*.json` in component libraries, or `system/theme.json` for antd.
6. Reuse the generated pages under `system/artifacts/`.
7. Keep all copy within the voice rules: prefer *people-powered*, *people-led*; avoid *staff*, *resources*, *replacement*.

## Design system highlights

- Dark-native-friendly, light-default palette built on a single seed; purple primary, teal secondary.
- Inter throughout, restrained weights (400 / 700), tight heading rhythm.
- Depth from borders and surfaces, not heavy shadows.
- Abstract circular purple logo used unmodified.

> The package ships `colors_and_type.css`, the focused `preview/*.html` cards and the applied kit at `ui_kits/app/`.
