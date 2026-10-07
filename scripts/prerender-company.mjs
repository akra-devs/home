import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const locales = ['ko', 'en', 'ja', 'zh'];
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const server = await createServer({ root, configFile: false, appType: 'custom', optimizeDeps: { noDiscovery: true }, server: { middlewareMode: true } });

try {
  const { renderSite, company, companyPath, homePath, organizationSchema } = await server.ssrLoadModule('/scripts/render-site.tsx');
  const urls = [];
  for (const routePath of [homePath, companyPath]) {
    for (const locale of locales) {
      const path = routePath(locale);
      const url = `${company.url}${path}`;
      const { body, title, description } = renderSite(path, locale);
      const alternateLinks = locales.map((language) => `<link rel="alternate" hreflang="${language === 'zh' ? 'zh-CN' : language}" href="${company.url}${routePath(language)}" />`).join('\n');
      const schema = [organizationSchema(), { '@context': 'https://schema.org', '@type': routePath === companyPath ? 'AboutPage' : 'WebPage', '@id': url, url, name: title, inLanguage: locale, about: { '@id': `${company.url}/#organization` } }];
      const html = template
        .replace('<html lang="ko">', `<html lang="${locale === 'zh' ? 'zh-CN' : locale}">`)
        .replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`)
        .replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*("\s*\/>)/g, `$1${escape(description)}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/g, `$1${escape(title)}$2`)
        .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${url}" />\n${alternateLinks}\n<link rel="alternate" hreflang="x-default" href="${company.url}${routePath('en')}" />\n<meta property="og:url" content="${url}" />\n<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`)
        .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
      const destination = resolve(dist, `.${path}`, 'index.html');
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, html);
      urls.push(url);
    }
  }
  const productPaths = ['key-ddal/', 'stillstamp/', 'waxball/', 'quick-translate/', 'quick-translate/privacy/', 'quick-translate/support/', 'stillstamp/support/'];
  urls.push(...productPaths.map((path) => `${company.url}/${path}`));
  writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`);
  writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${company.url}/sitemap.xml\n`);
  writeFileSync(resolve(dist, 'llms.txt'), `# Akra Dev — ${company.englishName}\n\n> ${company.englishName} (${company.legalName}) develops and operates mobile apps, games, and web and desktop tools in Seoul, South Korea.\n\n## Business\n\n- Representative: ${company.representativeEnglish || company.representative}\n- Korean business registration number: ${company.registrationNumber}\n- Date of business start: ${company.openingDate}\n- Date of business registration: ${company.registrationDate}\n- Business type: ${company.businessType}\n- Business item: ${company.businessItem}\n- Business address: ${company.addressEnglish}\n- Contact: ${company.email}\n\n## Official pages\n\n- [Company and history in English](${company.url}/en/company/)\n- [Company and history in Korean](${company.url}/company/)\n- [Products](${company.url}/en/#showcase)\n- [Google Play developer profile](${company.developerUrl})\n- [GitHub organization](${company.github})\n\n## Products\n\n- [Key Ddal](${company.url}/key-ddal/): ASMR keyboard app.\n- [CallFilm](${company.url}/mp4-transition-pages/): recordings with on-device AI captions, phrase search and video export.\n- [Stillstamp](${company.url}/stillstamp/): photo postcard app.\n- [WAXBALL / Bubblelock](${company.url}/waxball/): sensory game.\n\nProduct-page publication dates in the company history are distinct from original app release dates. Concept and private projects in the gallery are labeled separately.\n`);
  console.log('Prerendered 8 localized home/company pages with business identity, sitemap, robots.txt and llms.txt.');
} finally {
  await server.close();
}
