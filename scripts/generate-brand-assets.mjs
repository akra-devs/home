import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(root, 'public', 'brand');
const legacyLogoPath = join(root, 'public', 'logo-01.png');
const legacySecondaryLogoPath = join(root, 'public', 'logo-02.png');
const archivedSecondaryLogoPath = join(root, 'assets', 'brand-legacy', 'logo-02.png');
const referencePath = join(root, 'assets', 'brand-concepts', 'akra-dev-icon-01-forward-cut-a.png');
const checkOnly = process.argv.includes('--check');

const generatorRevision = 'forward-cut-a@1';
const deliveryProfile = 'runtime-strict';
const primaryBlue = '#3B82F6';
const lightFacet = '#75D9FF';
const midnight = '#09090B';

const paths = `
  <path id="akra-left" d="M36 633 368 38 523 311C383 363 335 416 277 468L381 465 233 633Z" fill="${primaryBlue}"/>
  <path id="akra-forward" d="M733 275C601 323 491 371 432 418L543 633H701L607 462Z" fill="${primaryBlue}"/>
  <path id="akra-fold" d="m733 275-157 133 31 54Z" fill="${lightFacet}"/>
`;

const tightSvg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 672" fill="none" focusable="false" aria-hidden="true">
${paths}</svg>
`);

const squareSvg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768" fill="none" focusable="false" aria-hidden="true">
  <g transform="translate(0 48)">
${paths}  </g>
</svg>
`);

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const posixPath = (value) => value.split('\\').join('/');

const referenceBytes = await readFile(referencePath);
const referenceDigest = sha256(referenceBytes);
const legacySecondaryLogo = await readFile(archivedSecondaryLogoPath);

const outputs = new Map([
  ['akra-mark.svg', tightSvg],
  ['akra-mark-square.svg', squareSvg],
]);

const transparentSizes = [16, 32, 48, 192, 512];
for (const size of transparentSizes) {
  const png = await sharp(squareSvg)
    .resize(size, size, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, adaptiveFiltering: false, palette: false })
    .toBuffer();
  outputs.set(`akra-mark-${size}.png`, png);
}

const appleTouch = await sharp(squareSvg)
  .resize(180, 180, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
  .flatten({ background: midnight })
  .png({ compressionLevel: 9, adaptiveFiltering: false, palette: false })
  .toBuffer();
outputs.set('apple-touch-icon-180.png', appleTouch);
const legacyLogo = outputs.get('akra-mark-512.png');

const assetDefinitions = [
  {
    id: 'akra-mark-header',
    materialId: 'akra-primary',
    sizeId: 'scalable-tight',
    file: 'akra-mark.svg',
    viewBox: '0 0 768 672',
    consumers: ['components/BrandMark.tsx -> Navbar', 'components/BrandMark.tsx -> Footer'],
  },
  {
    id: 'akra-mark-square',
    materialId: 'akra-primary',
    sizeId: 'scalable-square',
    file: 'akra-mark-square.svg',
    viewBox: '0 0 768 768',
    consumers: ['index.html svg favicon'],
  },
  ...transparentSizes.map((size) => ({
    id: `akra-mark-${size}`,
    materialId: 'akra-primary',
    sizeId: `${size}x${size}`,
    file: `akra-mark-${size}.png`,
    viewBox: null,
    consumers: [`index.html ${size}x${size} favicon`],
  })),
  {
    id: 'akra-apple-touch-180',
    materialId: 'akra-midnight-tile',
    sizeId: '180x180',
    file: 'apple-touch-icon-180.png',
    viewBox: null,
    consumers: ['index.html apple-touch-icon'],
  },
];

const totalPngBytes = [...outputs]
  .filter(([name]) => name.endsWith('.png'))
  .reduce((sum, [, value]) => sum + value.length, 0);

const manifest = {
  schemaVersion: 1,
  deliveryProfile,
  generatorRevision,
  reference: {
    path: posixPath(relative(root, referencePath)),
    sha256: referenceDigest,
  },
  palette: {
    primaryBlue,
    lightFacet,
    midnight,
  },
  budgets: {
    maxSvgBytes: 2048,
    maxRuntimePngBytes: 512000,
    maxDecodedBytes: 1048576,
  },
  assets: assetDefinitions.map((asset) => {
    const value = outputs.get(asset.file);
    return {
      assetId: asset.id,
      materialId: asset.materialId,
      sizeId: asset.sizeId,
      path: `brand/${asset.file}`,
      sha256: sha256(value),
      byteSize: value.length,
      viewBox: asset.viewBox,
      supportedStates: ['default'],
      consumers: asset.consumers,
    };
  }),
};

outputs.set('assets.manifest.json', Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`));

const forbiddenSvgPatterns = [
  /<image\b/i,
  /<foreignObject\b/i,
  /<filter\b/i,
  /<style\b/i,
  /<script\b/i,
  /<animate\b/i,
  /(?:href|src)\s*=\s*["']https?:/i,
];
for (const [name, value] of outputs) {
  if (!name.endsWith('.svg')) continue;
  const source = value.toString('utf8');
  if (forbiddenSvgPatterns.some((pattern) => pattern.test(source))) {
    throw new Error(`${name} contains a forbidden runtime-strict SVG construct.`);
  }
  if (value.length > manifest.budgets.maxSvgBytes) {
    throw new Error(`${name} exceeds the ${manifest.budgets.maxSvgBytes}-byte SVG budget.`);
  }
  if ((source.match(/<path\b/g) ?? []).length !== 3) {
    throw new Error(`${name} must contain exactly three deterministic paths.`);
  }
}

if (totalPngBytes > manifest.budgets.maxRuntimePngBytes) {
  throw new Error(`PNG derivatives exceed the ${manifest.budgets.maxRuntimePngBytes}-byte runtime budget.`);
}

for (const size of transparentSizes) {
  const name = `akra-mark-${size}.png`;
  const { data, info } = await sharp(outputs.get(name)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const cornerAlpha = data[3];
  let paintedPixels = 0;
  for (let offset = 3; offset < data.length; offset += 4) {
    if (data[offset] > 0) paintedPixels += 1;
  }
  const paintedRatio = paintedPixels / (info.width * info.height);
  const decodedBytes = info.width * info.height * info.channels;
  if (info.width !== size || info.height !== size || cornerAlpha !== 0) {
    throw new Error(`${name} failed dimension or transparent-canvas validation.`);
  }
  if (paintedRatio < 0.1 || paintedRatio > 0.8) {
    throw new Error(`${name} has an invalid painted-pixel ratio (${paintedRatio.toFixed(3)}).`);
  }
  if (decodedBytes > manifest.budgets.maxDecodedBytes) {
    throw new Error(`${name} exceeds the ${manifest.budgets.maxDecodedBytes}-byte decoded budget.`);
  }
}

const consumerChecks = [
  ['components/BrandMark.tsx', '/brand/akra-mark.svg'],
  ['index.html', '/brand/akra-mark-square.svg'],
  ...transparentSizes.map((size) => ['index.html', `/brand/akra-mark-${size}.png`]),
  ['index.html', '/brand/apple-touch-icon-180.png'],
];

for (const [consumerFile, expectedReference] of consumerChecks) {
  const source = await readFile(join(root, consumerFile), 'utf8');
  if (!source.includes(expectedReference)) {
    throw new Error(`${consumerFile} does not consume ${expectedReference}.`);
  }
}

if (checkOnly) {
  for (const [name, expected] of outputs) {
    const current = await readFile(join(outputDir, name));
    if (!current.equals(expected)) {
      throw new Error(`${name} differs from deterministic generator output.`);
    }
  }
  const currentLegacyLogo = await readFile(legacyLogoPath);
  if (!currentLegacyLogo.equals(legacyLogo)) {
    throw new Error('logo-01.png differs from the 512px compatibility alias.');
  }
  const currentLegacySecondaryLogo = await readFile(legacySecondaryLogoPath);
  if (!currentLegacySecondaryLogo.equals(legacySecondaryLogo)) {
    throw new Error('logo-02.png differs from its preserved compatibility asset.');
  }
  console.log(`Brand assets verified: ${outputs.size} files + 2 legacy aliases · ${generatorRevision} · ${referenceDigest.slice(0, 12)}`);
} else {
  await mkdir(outputDir, { recursive: true });
  await Promise.all([
    ...[...outputs].map(([name, value]) => writeFile(join(outputDir, name), value)),
    writeFile(legacyLogoPath, legacyLogo),
    writeFile(legacySecondaryLogoPath, legacySecondaryLogo),
  ]);
  console.log(`Brand assets generated: ${outputs.size} files + 2 legacy aliases · ${generatorRevision} · ${referenceDigest.slice(0, 12)}`);
}
