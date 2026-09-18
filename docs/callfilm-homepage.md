# CallFilm homepage discovery

The homepage catalog links the existing independent product site at
https://akra.kr/mp4-transition-pages/ from the showcase and footer. Reuse
the existing HoloCard and catalog-driven footer; no new route or design
primitive is needed. The product site remains owned by
`akra-devs/mp4-transition-pages` and is not copied into the home build.

The Korean, English, Japanese and Chinese catalog text describes recording
conversion, on-device AI captions and phrase search, as shown on the live
product site on 2026-09-18. The catalog links the introduction rather than
adding a separate store-install claim.

## Media provenance

- Original: `akra-devs/mp4-transition-pages/site/assets/callfilm-icon.png`
- Source revision: `a033b3cd2563cc3b940adbd8b27545b6b71e8b3a`
- Retrieved: https://akra.kr/mp4-transition-pages/assets/callfilm-icon.png
- Original: 512 × 512 PNG, SHA-256
  `84d3fbece6623bf073c59b27fded1ed5783fcaf17693ec04921969f55da1222f`
- Output: `public/callfilm/feature.webp`, 800 × 500, 2,824 bytes, SHA-256
  `c14a44002235be7a7af608502aeac48cf91dc54a3b650aadbd188293aff8a951`
- Transformation: resize the icon to 220px and place it at (290, 40) on an
  800 × 500 canvas in its brand red; encode WebP quality 88. The space
  below the icon keeps the shared card title and description readable.
- This is existing official app icon, not a new app screenshot.

## Validation

Typecheck, four-locale translation validation, product catalog validation,
brand checks, production build and generated-route checks passed.

Browser checks: 375px, 767px and 1280px CSS widths showed no horizontal overflow. Verified the existing category filter and all four locale selections update the CallFilm card and footer link. The independent target site was opened directly before publication. No Lighthouse score is claimed.
