## Summary
Contrarian readiness review finds the direction mostly coherent, but two stated decisions are still only implied in the UI and one deployment/metadata assumption is unowned. Treat the transition as ready with WATCH only if the crystallized spec turns these into observable acceptance checks.

## Analysis
Evidence-backed review of the specified files:
- Quick Translate is first in `projects` through `quickTranslateProduct` (`data/products.ts:14-26`), and the showcase renders project order directly (`components/Showcase.tsx:68-72`). The visible section heading and lead remain generic: `작업 목록` and `직접 만든 제품과 함께 진행한 프로젝트` (`components/Showcase.tsx:33-34`), while cards show category/status rather than latest/representative status (`components/HoloCard.tsx:12`, `components/HoloCard.tsx:80-103`).
- ZIP is not just a temporary footnote: the detail page has a primary hero ZIP CTA (`components/QuickTranslatePages.tsx:169-186`) and a second high-emphasis closing ZIP CTA headed `ZIP으로 먼저 설치해 보세요` (`components/QuickTranslatePages.tsx:307-317`). That conflicts with the decision to keep the temporary ZIP path from being overemphasized.
- Product facts are split across `data/products.ts` (`quickTranslateProduct` title/description/image/href at lines 14-22), `components/QuickTranslatePages.tsx` (`version`, `downloadUrl`, `supportUrl`, `privacyUrl`, and `contactEmail` at lines 19-24), and `App.tsx` route declarations (`/quick-translate`, `/privacy`, `/support` at lines 25-29). This is acceptable as an implementation detail only if the spec names which source owns which product metadata and URL contract.

## Root Cause
The milestone decisions are phrased as intent, not falsifiable readiness criteria. That leaves hidden assumptions around discovery, trust posture, and URL ownership to be solved later by copy/layout choices rather than locked into the spec.

## Findings
1. MEDIUM — `data/products.ts:14-26`, `components/Showcase.tsx:33-34`, `components/HoloCard.tsx:12,80-103`: Quick Translate is latest/representative only by array order, not by user-facing copy. Impact: the home page can satisfy “4-5 cards” while still reading as a generic portfolio. Fix: require one explicit Korean cue on the showcase/card path, such as “최근 공개한 자체 제품” or “대표 작업,” and keep it singular to avoid sales copy.
2. MEDIUM — `components/QuickTranslatePages.tsx:169-186`, `components/QuickTranslatePages.tsx:307-317`: ZIP is visually promoted twice, including a closing section whose headline centers ZIP. Impact: this contradicts “temporary before Web Store” and can weaken trust-first design. Fix: spec should require one ZIP test-install path with adjacent why/Chrome-version/help/privacy context; make the second CTA support/privacy or future Web Store status instead of another ZIP push.
3. LOW — `data/products.ts:14-22`, `components/QuickTranslatePages.tsx:19-24`, `App.tsx:25-29`: partial metadata consolidation has no declared ownership boundary. Impact: Web Store migration can require coordinated edits in three places and route/support/privacy URLs may drift from card/download copy. Fix: crystallize the boundary: either extend `quickTranslateProduct` with product links/version/contact, or explicitly keep detail-page operational metadata local and document `data/products.ts` as showcase-only.

## Recommendations
1. Add a pass/fail criterion that users can identify Quick Translate as the recent representative Akra product from the home path without opening the detail page.
2. Add a pass/fail criterion that ZIP is framed once as a temporary test-install path, not as the product’s primary trust message.
3. Add a metadata ownership note before Web Store migration: showcase metadata vs. operational product metadata, including support/privacy/download routes.

## Architectural Status
WATCH

## Code Review Recommendation
COMMENT

## Trade-offs
- Explicit latest cue improves positioning but can sound promotional if repeated; use it once.
- Reducing ZIP emphasis improves trust and future Web Store transition, but users still need a clear test-install route; keep one concrete CTA.
- Consolidating all product metadata reduces drift, but may overfit a single product; a documented split is acceptable if ownership is intentional.
