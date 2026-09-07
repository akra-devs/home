# Stillstamp introduction page

Verified locally on 2026-09-07 at `/stillstamp/` against the production Vite
build. Live reference pages inspected: `https://akra.kr/waxball/` and
`https://akra.kr/mp4-transition-pages/`.

## Evidence and current availability

- Product source: `akra-devs/akra-still-stamp`, local `akra-photo-letter` checkout.
- Android: `kr.akra.stillstamp`, internal testing only, based on
  `docs/store-evidence/play-kr-internal-rollout-2026-09-07.json`. No public
  install link or iOS availability is claimed.
- Output provenance: `docs/quality/pixel4-device-evidence.md` identifies the
  actual exported image `artifacts/stillstamp-live-postcard-20260905.png`.
- `stillstamp-media.json` inventories six optimized copies (550,418 bytes),
  keeping original/sample distinctions. All three editing captures retain
  their visible SAMPLE markings. No generated advertising video is presented
  as app behavior.
- The preview lifecycle keeps the new gallery card clickable while preserving
  private-card behavior for other products. Footer discovery is also included.

## Checks performed

- TypeScript, all 366 translation keys in four languages, product catalog,
  brand assets, production build and static route output passed.
- React Doctor reported no diagnostics for the new page or its translations.
  Existing unrelated site warnings are not a clean-site attestation.
- Browser: Korean, English, Japanese and Chinese language selection changed
  the heading, text and document title; the site's Korean sample captures
  remain explicitly labeled rather than pretending to be localized app builds.
- CSS viewports 375, 768 and 1280px: no horizontal document overflow. The
  device-metrics override was used because the IAB host's existing 80% zoom
  otherwise changes the effective CSS viewport width.
- Original/result selection changes the image and pressed state; keyboard
  Enter toggles it in the 375px viewport. FAQ expansion shows actual availability
  information and keyboard focus has a visible outline.
- Reduced-motion emulation sets action transitions to 0s. All sample images
  load. Tablet screenshot review confirms the three-screen reading order.
- The homepage's `stillstamp 상세 페이지로 이동` link opens the actual introduction.
- Generated `dist/stillstamp/index.html` contains the product-specific title,
  description, canonical and Open Graph image before client execution.

Browser screenshot evidence is in the implementation task. No Lighthouse or
runtime react-scan score is claimed; those measurements were not run through
the available browser connection. Local checks alone do not prove publication.
