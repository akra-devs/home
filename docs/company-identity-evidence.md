# Company identity evidence

Prepared 2026-10-07 for the akra.kr company-information update.

## Identity

The public Google Play listing for `kr.akra.keyddal` was read in a browser:

- Developer display name: AkraDev Studio.
- About the developer: 아크라데브스튜디오.
- Business address: 서울특별시 마포구 서강로 121, 2층 205호 81호실
  (노고산동, 맹그로브신촌), 04057.
- Support email: help@akra.kr.
- The detailed Play contact address is a separate corroborating public record.

Source: https://play.google.com/store/apps/details?id=kr.akra.keyddal&hl=en

On 2026-10-07 the owner supplied the following transcription from their English
business certificate, issued 2026-08-08. The PDF itself was not independently
inspected in this task. The website uses these owner-confirmed public facts:

- Business name: AkraDev Studio.
- Business Taxpayer ID: 633-28-02044.
- Representative: LEE SEUNG JOO. No Korean spelling is inferred.
- Date of Business Start: 2025-10-17.
- Date of Business Registration: 2025-10-21.
- Address: 121 Seogang-ro, Mapo-gu, Seoul, Republic of Korea.
- Business Type: Information and communication.
- Business Item: Application software publishing.

The business start and registration dates are distinct in every locale, the
visible timeline and llms.txt. Organization foundingDate uses the business start;
it does not substitute the later registration date or imply incorporation.
The certificate file and issuance identifier are not published. Displaying this
identity does not assert government verification or program acceptance.

## Product and history records

The company page links to the public Play listings for Key Ddal, CallFilm,
Stillstamp and WAXBALL/Bubblelock, their product pages and support/policy pages.
No customer counts, revenue, funding, partnerships or incorporation status are
claimed. Concept/private entries remain separately labeled in the existing
homepage catalog.

The dated records below are **product-site publication history**, not inferred
app launch dates:

| Date | Record | Source commit |
| --- | --- | --- |
| 2026-06-20 | Quick Translate product introduction | `3bc9162` |
| 2026-08-05 | WAXBALL product introduction | `22f8846` |
| 2026-09-07 | Stillstamp product introduction | `b72a146` |
| 2026-09-20 | Key Ddal product introduction | `f5ba6fb` |
| 2026-10-03 | Stillstamp Korean/English support | `98b6bdf` |

These dates are retained from repository history. The company page explicitly
distinguishes them from the opening date and original app release dates.

## Local verification

- TypeScript, 468 translation keys in four locales, product catalog and brand
  checks pass. Full `npm run build`, eight-page prerendering and the final
  identity/output check pass with the owner-confirmed fields.
- Codex in-app browser: company pages render in Korean/English, language links
  navigate to distinct URLs, mobile menu opens and Escape closes it.
- Browser scripting was temporarily disabled to verify initial HTML contains
  company information, products, links and history; scripting was restored.
- Final company pages in all four locales were checked at actual CSS widths
  375, 768 and 1280px: representative, taxpayer ID and both dates are present;
  no horizontal overflow was measured in all 12 combinations.
- React Doctor reports existing product-page/context warnings. The touched
  malformed hash decode was guarded; no performance score is asserted.
- Deployment is verified separately against the merged source revision and public
  URLs. No Anthropic application or eligibility outcome is implied.

## Delivery boundary

Authoring: `akra-devs/home` (public), default `main`. Existing deployment:
`.github/workflows/deploy.yml`, main push → build → public `docs/` in
`akra-devs/akra-devs.github.io` → GitHub Pages. This content change preserves that
workflow, custom domain and app-ads declaration; it does not migrate CI policy.
