import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'vite';

const server = await createServer({ configFile: false, appType: 'custom', optimizeDeps: { noDiscovery: true }, server: { middlewareMode: true } });
try {
  const { company, companyPath, homePath } = await server.ssrLoadModule('/data/company.ts');
  for (const field of ['representative', 'registrationNumber', 'openingDate']) {
    assert.ok(company[field], `Owner-confirmed ${field} is required before publishing.`);
  }
  assert.match(company.openingDate, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(company.registrationNumber, /^\d{3}-\d{2}-\d{5}$/);
  for (const locale of ['ko', 'en', 'ja', 'zh']) {
    for (const path of [homePath(locale), companyPath(locale)]) {
      const html = readFileSync(`dist${path}index.html`, 'utf8');
      assert.ok(html.includes(company.registrationNumber), `${path}: missing visible registration number`);
      assert.ok(html.includes(company.openingDate), `${path}: missing opening date`);
      assert.ok(html.includes(company.legalName), `${path}: missing registered name`);
      assert.ok(html.includes(`<link rel="canonical" href="https://akra.kr${path}"`), `${path}: wrong canonical`);
      assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: expected exactly one h1`);
      assert.ok(html.includes('hreflang="en"'), `${path}: missing language alternates`);
      assert.ok(html.includes('<main'), `${path}: empty prerendered page`);
      const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      assert.equal(schema[0].identifier.value, company.registrationNumber);
      assert.equal(schema[0].foundingDate, company.openingDate);
    }
  }
  // Product route copies must not accidentally contain home/company body or metadata.
  for (const product of ['key-ddal', 'stillstamp', 'waxball']) {
    const html = readFileSync(`dist/${product}/index.html`, 'utf8');
    assert.ok(html.includes(`href="https://akra.kr/${product}/"`));
    assert.ok(!html.includes('id="business-details"'));
  }
  assert.ok(readFileSync('dist/app-ads.txt', 'utf8').includes('google.com, pub-4496960310554471, DIRECT, f08c47fec0942fa0'));
  console.log('Company identity, static HTML, metadata, locale routes and product boundaries verified.');
} finally { await server.close(); }
