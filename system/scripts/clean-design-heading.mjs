#!/usr/bin/env node
// The brand description embeds the DESIGN.md sections (## Product Context,
// ## Components, ## Motion, ## Anti-patterns) as markdown so the docs render
// them as sections. The generator inlines the SAME description into the
// generated HTML, where markdown is not parsed, so the raw "## …" text and its
// bullets become visible. Reduce the HTML copy to just the Product Context
// paragraph; DESIGN.md / guide.md are left untouched.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) targets.push(p);
  }
}
walk(path.join(root, 'system'));
const brandHtml = path.join(root, 'brand.html');
if (fs.existsSync(brandHtml)) targets.push(brandHtml);

// The sections run to the end of the description, which in HTML is closed by a
// tag (`</…`) and in the payload by the JSON quote (`"`).
const SECTION = (name) => new RegExp('\\s*## ' + name + '[\\s\\S]*?(?=<\\/|")', 'g');

let changed = 0;
for (const file of targets) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  src = src
    // Drop the "## Product Context" heading, keep the paragraph.
    .replace(/## Product Context\\n\\n/g, '')
    .replace(/## Product Context\r?\n\r?\n/g, '')
    .replace(/## Product Context/g, '')
    // Drop the remaining sections (components / motion / anti-patterns).
    .replace(SECTION('Components'), '')
    .replace(SECTION('Motion'), '')
    .replace(SECTION('Anti-patterns'), '');
  if (src !== before) {
    fs.writeFileSync(file, src);
    changed += 1;
    console.log('cleaned', path.relative(root, file));
  }
}
console.log(`done — ${changed} file(s) cleaned`);
