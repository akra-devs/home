import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'vite';

const server = await createServer({ configFile: false, appType: 'custom', optimizeDeps: { noDiscovery: true }, server: { middlewareMode: true } });
try {
  const { company, companyPath, homePath } = await server.ssrLoadModule('/data/company.ts');
  for (const field of ['representative', 'registrationNumber', 'dunsNumber', 'openingDate', 'registrationDate', 'businessType', 'businessItem']) {
    assert.ok(company[field], `Owner-confirmed ${field} is required before publishing.`);
  }
  assert.match(company.openingDate, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(company.registrationDate, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(company.openingDate <= company.registrationDate, 'Business start must not be replaced by the later registration date.');
  assert.match(company.registrationNumber, /^\d{3}-\d{2}-\d{5}$/);
  assert.match(company.dunsNumber, /^\d{9}$/, 'D-U-N-S must retain all nine digits as text.');
  for (const locale of ['ko', 'en', 'ja', 'zh']) {
    for (const path of [homePath(locale), companyPath(locale)]) {
      const html = readFileSync(`dist${path}index.html`, 'utf8');
      const body = html.match(/<body>(.*?)<\/body>/s)[1].replace(/<script\b[^>]*>.*?<\/script>/gs, '');
      for (const value of [company.registrationNumber, company.dunsNumber, company.openingDate, company.registrationDate, company.representative]) {
        assert.ok(body.includes(value), `${path}: missing visible business fact ${value}`);
      }
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
      assert.equal(schema[0].taxID, company.registrationNumber);
      assert.equal(schema[0].duns, company.dunsNumber);
      assert.equal(schema[0].legalName, company.englishName);
    }
  }
  // Product route copies must not accidentally contain home/company body or metadata.
  for (const product of ['key-ddal', 'stillstamp', 'waxball']) {
    const html = readFileSync(`dist/${product}/index.html`, 'utf8');
    assert.ok(html.includes(`href="https://akra.kr/${product}/"`));
    assert.ok(!html.includes('id="business-details"'));
  }
  assert.ok(readFileSync('dist/app-ads.txt', 'utf8').includes('google.com, pub-4496960310554471, DIRECT, f08c47fec0942fa0'));
  const llms = readFileSync('dist/llms.txt', 'utf8');
  for (const value of [company.dunsNumber, company.registrationDate, company.businessType, company.businessItem]) assert.ok(llms.includes(value));
  console.log('Company identity, static HTML, metadata, locale routes and product boundaries verified.');
} finally { await server.close(); }
