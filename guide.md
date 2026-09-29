# Design System for Hamoni — Brand Guide

*One workforce*

## Product Context

Hamoni is a cloud workflow platform with an Operations-first focus that allows teams to integrate AI directly into their business processes as an actively contributing participant. Given the focus, the primary user is likely to be non-technical. Therefore there are three key rules 1) 80% of things should be easy; 2) the remaining 20% fall into an 'advanced mode' that should be used by a technical user; 3) when in advanced mode, the user should have full control, with only verification to ensure any provided changes do not break the platform.

## Components

- **Primary action** — one solid button per view: fill `var(--brand-color-primary)`, text `var(--brand-color-text)`.
- **Secondary** — outline (`1px var(--brand-color-border)`) or ghost/text; never a second solid fill.
- **Surfaces** — cards on `var(--brand-color-bg-container)`; raised panels on `var(--brand-color-bg-elevated)`.
- **Radius** — `3 / 5 / 8 / 10px` (xs / sm / default / lg).
- **Control heights** — `16 / 24 / 32 / 40px` (xs / sm / default / lg); `44px` minimum touch target on mobile.
- **Borders** — `1px` `var(--brand-color-border)` / `var(--brand-color-border-secondary)`.
- **States** — hover / focus / active use the derived `--brand-color-*-hover | -active | -border` tokens; always show a focus ring.
- **Inventory** — buttons, cards, forms/inputs, tabs, badges, avatars, accordion, progress, pagination, switches.

## Motion

- **Durations** — fast `0.1s` · mid `0.2s` · slow `0.3s`.
- **Easing** — in-out `cubic-bezier(0.645, 0.045, 0.355, 1)`; out `cubic-bezier(0.215, 0.61, 0.355, 1)`.
- **Usage** — transitions on hover/active (colour, border, small transforms); no large movement.
- **Reduced motion** — honour `prefers-reduced-motion: reduce` by dropping non-essential transitions.

## Anti-patterns

- Don't hardcode colours — use `--brand-color-*` tokens.
- Don't use colours outside the registered palette.
- Don't put light text on the light-purple primary fill — use `var(--brand-color-text)`.
- Don't recolour the logo or add a wordmark to it.
- Don't use the avoid-list vocabulary: *staff*, *resources*, *replacement*.
- Don't lean on heavy drop shadows — depth comes from borders and surfaces.
- Don't expose raw configuration to the non-technical user — put it behind **advanced mode**.



Extracted from designmd://design-system-inspired-by-supabase.

## Color roles

- **Near-black canvas** (`#121212`) — background: page canvas
- **Primary text grey** (`#e0e0e0`) — foreground: body text and headings
- **Primary purple** (`#bb86fc`) — accent: primary actions and emphasis
- **Elevated surface** (`#1e1e1e`) — surface: cards and panels
- **Secondary text grey** (`#a0a0a0`) — muted: secondary text and metadata
- **Border grey** (`#2e2e2e`) — border: rules and dividers
- **Tertiary text grey** (`#6c6c6c`) — muted: captions and disabled text

## Typography

- Display: Inter
- Body: Inter
- Mono: 'JetBrains Mono'

## Messaging pillars

- One workforce: Bring your people and AI together, orchestrated as one workforce and built to scale
