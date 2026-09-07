import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';

// Explicitly supplied product checkout; never fetch private app source into public/.
const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Supply the Stillstamp product checkout path.');
const output = resolve('public/stillstamp');
await mkdir(output, { recursive: true });
const captures = 'artifacts/visual-reference/current-html/390x844-runtime-v4';
const inputs = [
  ['artifacts/stillstamp-live-postcard-20260905.png', 'postcard', 1200, 'Actual generated output, 2026-09-05'],
  ['assets/stillstamp/tongyeong-source.png', 'original', 1200, 'Product-owned reference photo'],
  ['assets/stillstamp/tongyeong-source.png', 'original-small', 180, 'Thumbnail of the same reference photo'],
  [`${captures}/layout.png`, 'screen-layout', 390, 'Web SAMPLE capture; not mobile production evidence'],
  [`${captures}/adjust.png`, 'screen-adjust', 390, 'Web SAMPLE capture; not mobile production evidence'],
  [`${captures}/result.png`, 'screen-result', 390, 'Web SAMPLE capture; SAMPLE marking preserved'],
];
const assets = [];
for (const [source, name, width, role] of inputs) {
  const raw = await readFile(join(sourceRoot, source));
  const target = join(output, `${name}.webp`);
  await sharp(raw).resize({ width, withoutEnlargement: true }).webp({ quality: 86 }).toFile(target);
  const bytes = await readFile(target);
  const { width: w, height: h } = await sharp(bytes).metadata();
  assets.push({ source, output: `public/stillstamp/${name}.webp`, role, width: w, height: h,
    sha256: createHash('sha256').update(bytes).digest('hex'), bytes: bytes.length });
}
await mkdir('docs', { recursive: true });
await writeFile('docs/stillstamp-media.json', `${JSON.stringify({ observedOn: '2026-09-07',
  productRepository: 'akra-devs/akra-still-stamp', assets }, null, 2)}\n`);
console.log(`Prepared ${assets.length} Stillstamp assets, ${assets.reduce((n, a) => n + a.bytes, 0)} bytes.`);
