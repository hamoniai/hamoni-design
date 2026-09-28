#!/usr/bin/env node
// Runs `od brand finalize` and then immediately re-applies the authored
// overrides that the generator resets — so a regeneration lands in the
// corrected state instead of the raw engine output.
//
// The branding generator writes components with a hardcoded `#fff` on the
// primary fill and derives the heading/canvas colors; there is no seed field
// for on-primary text, so these must be re-applied after every finalize.
//
// Usage (from the project root):
//   "$OD_NODE_BIN" system/scripts/finalize-and-fix.mjs <brand-id>
//
// Example brand id: design-system-inspired-by-supabase-7f851d
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const brandId = process.argv[2] || process.env.OD_BRAND_ID;
if (!brandId) {
  console.error('Usage: "$OD_NODE_BIN" system/scripts/finalize-and-fix.mjs <brand-id>');
  process.exit(1);
}

const node = process.env.OD_NODE_BIN || process.execPath;
const bin = process.env.OD_BIN;

if (bin) {
  const res = spawnSync(node, [bin, 'brand', 'finalize', brandId], { stdio: 'inherit' });
  if (res.status !== 0) {
    console.error('finalize failed; not applying pins.');
    process.exit(res.status ?? 1);
  }
} else {
  console.warn('OD_BIN not set — skipping finalize, only applying pins.');
}

const restore = path.join(root, 'system', 'scripts', 'restore-brand-pins.mjs');
if (!fs.existsSync(restore)) {
  console.error('restore-brand-pins.mjs not found next to this script.');
  process.exit(1);
}
const res2 = spawnSync(node, [restore], { stdio: 'inherit' });
if (res2.status !== 0) process.exit(res2.status ?? 1);

// Strip the markdown heading from HTML, rebuild the foundation, refresh previews.
for (const step of ['clean-design-heading.mjs', 'refresh-colors-and-type.mjs', 'refresh-previews.mjs']) {
  const p = path.join(root, 'system', 'scripts', step);
  if (fs.existsSync(p)) {
    const res = spawnSync(node, [p], { stdio: 'inherit' });
    if (res.status !== 0) process.exit(res.status ?? 1);
  }
}
process.exit(0);
