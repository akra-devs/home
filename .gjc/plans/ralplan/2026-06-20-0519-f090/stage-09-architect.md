## Summary
The spec can be smaller before crystallization without dropping any recorded decision: reduce it to three observable checks plus one scoped data placement note. No blocker to the `ready` milestone, but the text should prevent paging, ZIP installation, and metadata consolidation from expanding into broader redesign work.

## Analysis
Evidence inspected: `data/products.ts`, `components/QuickTranslatePages.tsx`, `components/Showcase.tsx`, `components/HoloCard.tsx`, and `App.tsx`.

- Home showcase already has the smallest viable shape: `quickTranslateProduct` is first in `projects` (`data/products.ts:14-26`), the list contains five cards (`data/products.ts:25-63`), `Showcase` only filters and maps projects (`components/Showcase.tsx:19-72`), and `HoloCard` renders generic card state (`components/HoloCard.tsx:11-12`, `components/HoloCard.tsx:95-103`, `components/HoloCard.tsx:166-171`). This supports a small acceptance rule rather than a new paging component.
- Product release metadata is split today: the shared `Project` model has only card fields (`data/products.ts:3-11`), while version, download, support, privacy, and contact live in a local `product` object (`components/QuickTranslatePages.tsx:19-24`). The route map is static and simple (`App.tsx:26-29`), so metadata consolidation should not pull routing or CMS-like structure into scope.
- ZIP is currently prominent in two places: the hero CTA and note (`components/QuickTranslatePages.tsx:169-186`) plus a large lower CTA (`components/QuickTranslatePages.tsx:307-317`). Support mentions installation help (`components/QuickTranslatePages.tsx:410-411`) but then provides contact and FAQs only (`components/QuickTranslatePages.tsx:413-427`). The ready spec should say temporary ZIP is clear but visually calm, with only minimal install handoff.
- Trust and copy criteria are already expressible as concrete UI checks: privacy claims preserve the Akra server boundary and Chrome API caveat (`components/QuickTranslatePages.tsx:56`, `components/QuickTranslatePages.tsx:213`, `components/QuickTranslatePages.tsx:383-388`), and necessary English terms appear as product, platform, shortcut, or technical terms (`components/QuickTranslatePages.tsx:151-154`, `components/QuickTranslatePages.tsx:174`, `data/products.ts:20`).

## Root Cause
The remaining risk is not missing decisions; it is over-specification. The interview has enough facts, but some facts can accidentally become new feature work: paging implementation, detailed ZIP installation flows, or a generalized product catalog.

## Findings
1. LOW — `data/products.ts:14-26`, `data/products.ts:25-63`, `components/Showcase.tsx:19-72`, `components/HoloCard.tsx:11-12`: Home readiness can be one small rule: 4-5 cards, Quick Translate first or visibly highest priority, and no real paging work until the list grows. Impact: avoids turning the future paging feel into an implementation requirement. Fix: crystallize paging as a future-proofing acceptance note, not ready-scope UI.
2. MEDIUM — `data/products.ts:3-11`, `components/QuickTranslatePages.tsx:19-24`, `App.tsx:26-29`: Partial metadata consolidation needs a tight boundary. Impact: without a boundary, implementers may build a broader catalog, router, or content layer. Fix: move only Quick Translate release metadata such as version, temporary download URL, planned Web Store URL, support URL, privacy URL, and contact email toward `quickTranslateProduct` or a nested release field in `data/products.ts`.
3. MEDIUM — `components/QuickTranslatePages.tsx:169-186`, `components/QuickTranslatePages.tsx:307-317`, `components/QuickTranslatePages.tsx:410-427`: ZIP trust should be stated once clearly and kept calm. Impact: current content can make ZIP feel like the main product while support does not yet give an install handoff. Fix: require temporary pre-Web Store wording near the CTA, one minimal install or support handoff, and privacy wording that keeps the Akra server plus Chrome API boundary. Keep English only for Akra Quick Translate, Chrome, Translator API, ZIP, Alt+T or Option+T, MV3, and stack tags.

## Recommendations
1. Crystallize the spec into three checks: representative product hierarchy, temporary release channel trust, and natural Korean copy with essential English only.
2. Add one implementation note for metadata: consolidate only release metadata into `data/products.ts`; do not introduce a new routing or catalog architecture.
3. Treat paging as a future visual affordance and ZIP install as a short trust handoff, not as new features.

## Architectural Status
WATCH

## Code Review Recommendation
COMMENT

## Trade-offs
| Option | Pros | Cons |
| --- | --- | --- |
| Three observable checks plus one metadata note | Small, testable, preserves all decisions | Leaves exact copy to implementation |
| Detailed section-by-section spec | Reduces writer discretion | Bloats crystallization and invites redesign |
| Add paging and full install flows now | Solves imagined future needs | Violates temporary and 4-5 card simplification goals |
