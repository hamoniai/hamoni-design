#!/usr/bin/env node
// Refreshes the hand-authored preview/ cards against the current tokens.
//
// The cards link the tokens via CSS, so swatches/typography/spacing follow the
// theme automatically. What does NOT update on its own is any hard-coded text —
// the ramp hex labels in preview/colors-primary.html. This step rewrites those
// from system/brand-palette.css and verifies every relative reference resolves.
//
// Run from the project root:
//   "$OD_NODE_BIN" system/scripts/refresh-previews.mjs
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const previewDir = path.join(root, 'preview');
if (!fs.existsSync(previewDir)) {
  console.log('no preview/ folder — nothing to refresh');
  process.exit(0);
}

// Parse the authored palette (--brand-purple-50: #f2e7fe; ...).
const palette = {};
const palettePath = path.join(root, 'system', 'brand-palette.css');
if (fs.existsSync(palettePath)) {
  const css = fs.readFileSync(palettePath, 'utf8');
  for (const m of css.matchAll(/(--brand-[a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})/g)) {
    palette[m[1].toLowerCase()] = m[2];
  }
}

const htmlFiles = fs.readdirSync(previewDir).filter((f) => f.endsWith('.html'));
let updated = 0;

for (const f of htmlFiles) {
  const p = path.join(previewDir, f);
  let src = fs.readFileSync(p, 'utf8');
  const before = src;

  src = src
    .split('\n')
    .map((line) => {
      const step = line.match(/--brand-purple-(\d+)/);
      if (!step) return line;
      const hex = palette['--brand-purple-' + step[1]];
      if (!hex) return line;
      // Rewrite the label text of the swatch that references this ramp step.
      return line.replace(/(<div class="lbl">)[^<]*(<\/div>)/, `$1${step[1]} · ${hex}$2`);
    })
    .join('\n');

  if (src !== before) {
    fs.writeFileSync(p, src);
    updated += 1;
    console.log('refreshed', path.relative(root, p));
  }
}

// Verify all relative references resolve.
let missing = 0;
for (const f of htmlFiles) {
  const p = path.join(previewDir, f);
  const src = fs.readFileSync(p, 'utf8');
  for (const ref of src.match(/\.\.\/[A-Za-z0-9_./-]+/g) || []) {
    if (!fs.existsSync(path.resolve(previewDir, ref))) {
      console.log('MISSING ref', ref, 'in', f);
      missing += 1;
    }
  }
}

console.log(`done — ${updated} card(s) refreshed, ${missing} missing reference(s)`);
process.exit(missing ? 1 : 0);
