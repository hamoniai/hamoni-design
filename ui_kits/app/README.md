# Hamoni — applied UI kit

A runnable, product-like surface for the Hamoni design system: an operations
console where people and the AI participant work a **run** together. Open
`index.html` in a browser (it needs network access for the React/Babel CDN).

## Structure

| File | Role it models |
| --- | --- |
| `index.html` | Browser entry — loads `../../colors_and_type.css`, React 18.3.1 (UMD, dev), ReactDOM, Babel standalone 7.29.0, then mounts the composed `App`. |
| `components/Sidebar.jsx` | App shell navigation (brand mark, nav items, theme toggle, user). |
| `components/ListRail.jsx` | List rail — the queue of runs with status dots. |
| `components/ChatArea.jsx` | Run area — header, message timeline, composer. |
| `components/MessageBubble.jsx` | Message / comment role — a person or the AI participant. |
| `components/InputBar.jsx` | Composer role — comment / ask the assistant. |
| `components/App.jsx` | App shell — composes the three columns into one surface. |

Each component file assigns its browser global (`window.Sidebar`, `window.MessageBubble`, …) and `App.jsx` assigns `window.App`, so the entry can load them as plain `<script type="text/babel">` files and render the composed result.

## Design notes

- **Everything is tokenised.** The kit uses `var(--brand-*)` only — no hard-coded colours — so it re-themes from `colors_and_type.css`. The sidebar "Dark mode" button toggles the `.dark` class on `<html>`.
- **One primary action.** The only solid purple control is the composer's **Send**; nav, "New" and the theme toggle are secondary/ghost.
- **Colour discipline.** Purple marks the active nav item, the AI participant and the composer; status uses the semantic tokens (warning / success / error / primary).
- **Layout.** Three columns (216 / 288 / fluid) that stack below 900px so nothing scrolls horizontally.

## Source basis

Hamoni is a cloud workflow platform with an Operations-first focus, where AI is
an actively contributing participant and the primary user is non-technical. The
three product rules — 80% easy, a separate advanced mode, full control in
advanced mode — shape the surface: a plain-language run queue, a conversational
work area, and an assistant that proposes actions rather than exposing config.

## Usage

```html
<link rel="stylesheet" href="../../colors_and_type.css" />
<div id="root"></div>
<!-- load components/*.jsx in dependency order, then: -->
<script type="text/babel">
  const { App } = window;
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
```

Reuse individual roles (`MessageBubble`, `InputBar`, …) in other surfaces, or
copy the tokenised inline styles into your own component layer.
