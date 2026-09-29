# Hamoni Design System

The design system for **Hamoni** — one workforce, bringing people and AI together.

## Product Overview

Hamoni is an enterprise platform for orchestrating people and AI as one workforce. It brings human teams and AI together into a single, scalable system, and this package is the visual and verbal foundation for Hamoni interfaces.

- **Primary surface:** web
- **Core idea:** bring your people and AI together, orchestrated as one workforce and built to scale
- **Brand character:** Friendly, Approachable, Professional, Competent, Empathetic, Supportive
- **Tone:** professional, outcomes-driven and enterprise-focused, balancing high-tech capability with human-centric collaboration
- **Language:** prefer *people-powered*, *people-led*; avoid *staff*, *resources*, *replacement*

### Product Context

Hamoni is a **cloud workflow platform with an Operations-first focus**. It lets teams integrate AI directly into their business processes as an actively contributing participant, and because of that focus the primary user is likely **non-technical**. Three rules guide the product and this system:

1. **80% should be easy** — the common path is effortless for non-technical people.
2. **The remaining 20% is an 'advanced mode'** — a separate surface intended for technical users.
3. **Advanced mode gives full control** — the only guardrail is verification, to ensure provided changes do not break the platform.

This is the durable home for product context: `README.md` is hand-authored and is never regenerated, unlike `DESIGN.md` / `guide.md`.

## Source & References

- **Source:** `designmd://design-system-inspired-by-supabase`
- **Based on:** the Open Design [Supabase](https://github.com/nexu-io/open-design/tree/main/design-systems/supabase) design system
- **Brand record:** [`brand.json`](./brand.json)
- **Canonical spec:** [`DESIGN.md`](./DESIGN.md) · [`guide.md`](./guide.md)
- **Source evidence:** [`context/source-context.md`](./context/source-context.md) · [`context/input-DESIGN.md`](./context/input-DESIGN.md)
- **Logo:** [`assets/Logo-notext_transparent.svg`](./assets/Logo-notext_transparent.svg)

## Package Contents

| Path | What it is |
| --- | --- |
| `brand.json` | Brand record — name, colours, seed, typography, voice, logo. |
| `DESIGN.md` | Canonical design specification. |
| `guide.md` | Short brand guide. |
| `README.md` | This file. |
| `colors_and_type.css` | Reusable colour + typography foundation — link this in a project. |
| `preview/` | Focused review cards (colour, themes, type, spacing, components, assets). |
| `ui_kits/app/` | Applied interface kit (React) — `index.html` + role components. |
| `assets/` | Preserved brand assets (logo, concept icons, photorealistic examples). |
| `system/seed.json` | Effective token seed. |
| `system/tokens.default.json` | Derived tokens (light). |
| `system/tokens.dark.json` | Derived tokens (dark). |
| `system/tokens.compact.json` | Derived tokens (compact). |
| `system/variables.css` | `--brand-*` custom properties (`:root` light + `.dark`). |
| `system/variables.dark.css` | Standalone dark-theme `:root`. |
| `system/brand-palette.css` | Exact authored reference ramps. |
| `system/theme.json` | antd `ConfigProvider` theme. |
| `system/kit.html` | Component kit (light). |
| `system/kit.dark.html` | Component kit (dark). |
| `system/index.html` | Gallery of components and assets. |
| `system/artifacts/` | Generated pages — landing, deck, poster, email, newsletter, form. |
| `system/BRAND-SYSTEM.md` | How the system is generated and re-themed. |
| `system/scripts/` | Helper scripts (re-apply authored pins after regeneration). |

## Preview Manifest

Focused review cards in `preview/` (each links `colors_and_type.css`):

- `preview/colors-primary.html` — primary purple ramp + semantic primary tokens
- `preview/colors-themes.html` — light default vs dark `.dark`
- `preview/typography-specimens.html` — Inter display/body + JetBrains Mono
- `preview/spacing-tokens.html` — spacing scale + radius
- `preview/components-buttons.html` — button variants, sizes and states
- `preview/brand-assets.html` — logo, concept icons and photorealistic examples

Longer surfaces:

- `ui_kits/app/index.html` — applied operations-console interface (React, composed from role components)
- `brand.html` — brand kit (logo, palette, typography, voice, assets)
- `system/kit.html` · `system/kit.dark.html` — component showcases
- `system/index.html` — component + asset gallery
- `system/artifacts/landing.html` · `deck.html` · `poster.html` · `email.html` · `newsletter.html` · `form.html`

## Design System Highlights

- **Colour** — primary purple `#bb86fc`; canvas light `#FBF6FF` / dark `#121212`; surfaces `#1e1e1e`; text greys `#e0e0e0`, `#a0a0a0`, `#6c6c6c`; borders `#2e2e2e`.
- **Typography** — Inter for display and body, weights 400 / 700; `'JetBrains Mono'` for code and numerals.
- **Layout** — 8px radius, 1px borders, 8px baseline grid.
- **Themes** — light is the default; dark is opt-in via the `.dark` class (or `system/variables.dark.css`).
- **Logo** — abstract circular mark in purple `#7f39fb`, transparent background (280×288).

## Reuse Workflow

1. Link **`colors_and_type.css`** (the colour + typography foundation) and toggle dark with the `.dark` class — or load `system/variables.dark.css` for a dark-only build.
2. Consume the derived tokens (`system/tokens.*.json`) or the antd theme (`system/theme.json`) in components.
3. Use the exact authored swatches from `system/brand-palette.css` when you need the reference ramp.
4. Review components in the kits and reuse the generated pages under `system/artifacts/`.
5. Keep all copy within the voice rules in **Product Overview** above.

## Maintenance

The system is generated from `brand.json`: edit that, then run `od brand finalize <brand-id>`. Finalize regenerates `DESIGN.md`, `guide.md`, the kits and the artifacts; the authored heading/canvas pins are re-applied with `system/scripts/restore-brand-pins.mjs`.
