# Akra Dev website

Source for [akra.kr](https://akra.kr), the product and company website of
아크라데브스튜디오 (AkraDev Studio), Seoul, South Korea.

The site introduces our software products, their public store and support
destinations, and company information in Korean, English, Japanese and Chinese.
Business and product inquiries: [help@akra.kr](mailto:help@akra.kr).

## Local development

Requires Node.js 20 or newer. The static website does not require an API key.

```sh
npm ci
npm run dev
```

## Validation and build

```sh
npm run typecheck
npm run check:i18n
npm run build
npm run preview
```

The build validates the product catalog and brand assets, creates direct product
routes, and prerenders the home and company pages in all four languages. Business
identity checks reject missing representative, registration number or opening
date. Structured data, `sitemap.xml`, `robots.txt` and `llms.txt` are generated
from the same company source. Never place registration certificates, private
account evidence or credentials in `public/`.

## Content and publication

- `data/company.ts`: public business facts, product links and dated site records.
- `i18n/company.ts`: localized company copy.
- `data/products.ts`: shared product catalog and availability labels.
- `DESIGN.md`: existing visual system and accessibility rules.
- `docs/company-identity-evidence.md`: sources and verification boundaries.

The existing deployment workflow builds `main` and publishes its output to
`akra-devs/akra-devs.github.io`, whose GitHub Pages site serves `akra.kr`.
Some product/support URLs are separate project sites under the same domain.
Verify both deployment runs and the public URLs after a release.
