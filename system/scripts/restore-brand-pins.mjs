#!/usr/bin/env node
// Re-applies the authored brand pins that `od brand finalize` resets.
//
// Run from the project root:
//   "$OD_NODE_BIN" system/scripts/restore-brand-pins.mjs
//
// Pins:
//   - light headings/text  -> #121212   (engine derives #2e2d2e)
//   - dark  headings/text  -> #FBF6FF   (engine derives #dcdcdc)
//   - dark  canvas         -> #121212   (engine derives #141414)
//
// NOTE: button colors are intentionally left at the engine defaults (#fff) and
// are not adjusted here.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(html|css|json)$/.test(entry.name)) targets.push(p);
  }
}

walk(path.join(root, 'system'));
const brandHtml = path.join(root, 'brand.html');
if (fs.existsSync(brandHtml)) targets.push(brandHtml);

const subs = [
  [/--brand-color-text: #2e2d2e/g, '--brand-color-text: #121212'],
  [/"colorText": "#2e2d2e"/g, '"colorText": "#121212"'],
  [/--brand-color-text: #dcdcdc/g, '--brand-color-text: #FBF6FF'],
  [/"colorText": "#dcdcdc"/g, '"colorText": "#FBF6FF"'],
  [/--brand-color-bg-container: #141414/g, '--brand-color-bg-container: #121212'],
  [/"colorBgContainer": "#141414"/g, '"colorBgContainer": "#121212"'],
];

let changed = 0;
for (const file of targets) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  for (const [re, to] of subs) src = src.replace(re, to);
  if (src !== before) {
    fs.writeFileSync(file, src);
    changed += 1;
    console.log('patched', path.relative(root, file));
  }
}
console.log(`done — ${changed} file(s) updated`);
