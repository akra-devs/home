import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Supply the Stillstamp product checkout path.');
const output = resolve('public/stillstamp');
await mkdir(output, { recursive: true });
const originals = ['flowers', 'sunset', 'cat'].map(subject => ({
  source: `design/marketing/three-stories/${subject}-note.png`, name: `${subject}-note`,
  role: 'User-approved AI style illustration, caption edited with built-in ImageGen; not a live app generation',
}));
const previews = ['ko', 'en'].flatMap(lang => [
  ...['sunset-composite', 'sunset-postcard', 'cat-postcard'].map(name => ({
    source: `store-assets/stories/${name}-${lang}.png`, name: `${name}-${lang}`,
    role: 'Actual PostcardPreview compositor with externally authored art; art-only style illustration, not an app screenshot',
  })),
]);
const screens = ['ko', 'en'].flatMap(lang => [
  ['03-layout', 'layout'], ['05-message', 'message'], ['04-postcard', 'result'],
].map(([input, name]) => ({
  source: `store-assets/stories/raw/${lang}/${input}.png`, name: `screen-${name}-${lang}`,
  role: 'Uncropped actual Flutter UI with prepared SAMPLE artwork; no production generation claim', screen: true,
})));
const assets = [];
for (const item of [...originals, ...previews, ...screens]) {
  const raw = await readFile(join(sourceRoot, item.source));
  for (const width of item.screen ? [540] : [640, 960, 1448]) {
    const name = item.screen || width === 1448 ? item.name : `${item.name}-${width}`;
    const target = join(output, `${name}.webp`);
    await sharp(raw).resize({ width, withoutEnlargement: true }).webp({ quality: item.screen ? 90 : 85 }).toFile(target);
    const bytes = await readFile(target);
    const { width: w, height: h } = await sharp(bytes).metadata();
    assets.push({ source: item.source, sourceSha256: createHash('sha256').update(raw).digest('hex'), output: `public/stillstamp/${name}.webp`, role: item.role, width: w, height: h, sha256: createHash('sha256').update(bytes).digest('hex'), bytes: bytes.length });
  }
}
await writeFile('docs/stillstamp-media.json', `${JSON.stringify({ observedOn: '2026-09-08', productRepository: 'akra-devs/akra-still-stamp', productSourceRevision: process.argv[3] || 'pending-source-commit', assets }, null, 2)}\n`);
console.log(`Prepared ${assets.length} assets, ${assets.reduce((n,a) => n+a.bytes,0)} bytes.`);
