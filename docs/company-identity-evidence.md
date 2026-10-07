# Company identity evidence

Prepared 2026-10-07 for the akra.kr company-information update.

## Identity

The public Google Play listing for `kr.akra.keyddal` was read in a browser:

- Developer display name: AkraDev Studio.
- About the developer: 아크라데브스튜디오.
- Business address: 서울특별시 마포구 서강로 121, 2층 205호 81호실
  (노고산동, 맹그로브신촌), 04057.
- Support email: help@akra.kr.
- English address is a translation of that public address.

Source: https://play.google.com/store/apps/details?id=kr.akra.keyddal&hl=en

Representative, preferred English representative spelling, business registration
number and business opening date are awaiting the owner's reply. Those facts
must not be inferred from a GitHub username, commit date, domain registration,
or an app release. The production output check deliberately rejects missing
identity fields. Do not merge or deploy until these values are supplied.

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

## Verification so far

- TypeScript, 462 translation keys in four locales, product catalog and brand
  checks pass. Vite production compilation and eight-page prerendering succeed.
- Full `npm run build` intentionally fails its final business identity check
  while owner-confirmed registration fields are missing.
- Codex in-app browser: company pages render in Korean/English, language links
  navigate to distinct URLs, mobile menu opens and Escape closes it.
- Browser scripting was temporarily disabled to verify initial HTML contains
  company information, products, links and history; scripting was restored.
- No horizontal overflow at the measured CSS widths 375px and 960px. Further
  final-layout checks are required once registration fields are filled.
- React Doctor reports existing product-page/context warnings. The touched
  malformed hash decode was guarded; no performance score is asserted.
- No merge, deployment, Anthropic application or eligibility outcome is implied.

## Delivery boundary

Authoring: `akra-devs/home` (public), default `main`. Existing deployment:
`.github/workflows/deploy.yml`, main push → build → public `docs/` in
`akra-devs/akra-devs.github.io` → GitHub Pages. This content change preserves that
workflow, custom domain and app-ads declaration; it does not migrate CI policy.
