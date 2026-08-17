import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(root, 'dist');
const manifestPath = join(root, 'public', 'brand', 'assets.manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const sha256 = (value) => createHash('sha256').update(value).digest('hex');

const expectedBrandFiles = new Set([
  'assets.manifest.json',
  ...manifest.assets.map((asset) => asset.path.replace(/^brand\//, '')),
]);
const builtBrandFiles = new Set(await readdir(join(distDir, 'brand')));

const missing = [...expectedBrandFiles].filter((name) => !builtBrandFiles.has(name));
const unexpected = [...builtBrandFiles].filter((name) => !expectedBrandFiles.has(name));
if (missing.length || unexpected.length) {
  throw new Error(`Built brand asset set drifted. Missing: ${missing.join(', ') || 'none'}; unexpected: ${unexpected.join(', ') || 'none'}.`);
}

for (const asset of manifest.assets) {
  const builtBytes = await readFile(join(distDir, asset.path));
  if (sha256(builtBytes) !== asset.sha256) {
    throw new Error(`${asset.path} digest differs in the production build.`);
  }
}

const builtLegacyLogo = await readFile(join(distDir, 'logo-01.png'));
const primary512 = manifest.assets.find((asset) => asset.assetId === 'akra-mark-512');
if (!primary512 || sha256(builtLegacyLogo) !== primary512.sha256) {
  throw new Error('The built /logo-01.png compatibility alias differs from the 512px primary mark.');
}

const [builtLegacySecondary, archivedLegacySecondary] = await Promise.all([
  readFile(join(distDir, 'logo-02.png')),
  readFile(join(root, 'assets', 'brand-legacy', 'logo-02.png')),
]);
if (!builtLegacySecondary.equals(archivedLegacySecondary)) {
  throw new Error('The built /logo-02.png compatibility asset differs from its archive.');
}

const htmlPaths = [
  join(distDir, 'index.html'),
  join(distDir, 'waxball', 'index.html'),
  join(distDir, 'quick-translate', 'index.html'),
  join(distDir, 'quick-translate', 'privacy', 'index.html'),
  join(distDir, 'quick-translate', 'support', 'index.html'),
];

for (const htmlPath of htmlPaths) {
  const html = await readFile(htmlPath, 'utf8');
  for (const requiredAsset of [
    '/brand/akra-mark-square.svg',
    '/brand/akra-mark-16.png',
    '/brand/akra-mark-32.png',
    '/brand/akra-mark-48.png',
    '/brand/akra-mark-192.png',
    '/brand/akra-mark-512.png',
    '/brand/apple-touch-icon-180.png',
  ]) {
    if (!html.includes(requiredAsset)) {
      throw new Error(`${htmlPath} is missing ${requiredAsset}.`);
    }
  }
}

const builtScripts = (await readdir(join(distDir, 'assets'))).filter((name) => name.endsWith('.js'));
let hasBrandConsumer = false;
for (const script of builtScripts) {
  const source = await readFile(join(distDir, 'assets', script), 'utf8');
  if (source.includes('/logo-01.png') || source.includes('/logo-02.png')) {
    throw new Error(`${script} still references a legacy raster logo.`);
  }
  hasBrandConsumer ||= source.includes('/brand/akra-mark.svg');
}

if (!hasBrandConsumer) {
  throw new Error('The production JavaScript does not contain the brand mark consumer.');
}

console.log(`Built brand assets verified: ${manifest.assets.length} ABI entries across ${htmlPaths.length} route documents.`);
