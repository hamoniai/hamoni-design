#!/usr/bin/env node
// Regenerates the package foundation `colors_and_type.css` from the generated
// tokens (system/variables.css) and the authored ramps (system/brand-palette.css).
// Run after finalize so the reusable foundation matches the current theme.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const varsPath = path.join(root, 'system', 'variables.css');
const rampsPath = path.join(root, 'system', 'brand-palette.css');

if (!fs.existsSync(varsPath)) {
  console.error('missing system/variables.css — run finalize first');
  process.exit(1);
}

const vars = fs.readFileSync(varsPath, 'utf8').trim();
const ramps = fs.existsSync(rampsPath) ? fs.readFileSync(rampsPath, 'utf8').trim() : '';

const header = `/* Hamoni Design System — colours & typography
 * Reusable foundation for any project. Light is the default; add the \`.dark\`
 * class (or load system/variables.dark.css) for the dark theme.
 * Generated from system/variables.css + system/brand-palette.css — edit those,
 * not this file.
 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;700&display=swap');`;

const body = [
  '/* ---- colour + typography tokens (light = :root, dark = .dark) ---- */',
  vars,
  '',
  '/* ---- authored reference ramps ---- */',
  ramps,
  '',
].join('\n');

const out = header + '\n\n' + body;
fs.writeFileSync(path.join(root, 'colors_and_type.css'), out);
console.log(`wrote colors_and_type.css (${out.split('\n').length} lines)`);
