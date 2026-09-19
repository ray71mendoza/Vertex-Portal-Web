// Converts one or more images under public/images/ to WebP, in place.
// Usage: node scripts/convert-to-webp.mjs <file1.png> [file2.jpg ...]
// (paths are relative to public/images/)
import sharp from 'sharp';
import { statSync } from 'node:fs';
import path from 'node:path';

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error('Usage: node scripts/convert-to-webp.mjs <file1.png> [file2.jpg ...]');
  process.exit(1);
}

const dir = path.resolve('public/images');

for (const file of files) {
  const src = path.join(dir, file);
  const outName = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const out = path.join(dir, outName);
  const before = statSync(src).size;

  await sharp(src).webp({ quality: 82 }).toFile(out);

  const after = statSync(out).size;
  const pct = (100 * (1 - after / before)).toFixed(1);
  console.log(`${file} -> ${outName}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`);
}
