## Summary
This lateral review is WATCH rather than BLOCK: the scope can move from initial to progress, but the visual polish question should not be treated as decoration only. The current files lean toward spectacle and portfolio breadth while the stated success condition depends on trust, real-product credibility, and confidence in pre-Web-Store ZIP installation.

## Analysis
Evidence reviewed: `components/HoloCard.tsx`, `components/QuickTranslatePages.tsx`, `components/Showcase.tsx`, and `data/products.ts`. No build, lint, test, formatter, or product-source mutation was run per assignment constraints.

The homepage currently mixes a real Quick Translate card with concept/private/placeholder work. `Showcase.tsx:33-34` frames the section as a generic work list, while `data/products.ts:32`, `data/products.ts:41`, and `data/products.ts:59` identify several items as concepts or hidden detail, and `data/products.ts:34`, `data/products.ts:43`, `data/products.ts:52`, `data/products.ts:61` use placeholder image URLs. `HoloCard.tsx:24-25`, `HoloCard.tsx:137-139`, and `HoloCard.tsx:163` add strong 3D tilt, holographic sheen, and perspective treatment to every card.

The Quick Translate page does a good job naming the product, version, Chrome floor, ZIP download, screenshots, limitations, privacy posture, and support email. However, the explicit install path for a ZIP-distributed Chrome extension is not actually presented: `QuickTranslatePages.tsx:174-186` promotes ZIP download and says test install is possible, `QuickTranslatePages.tsx:276` promises four steps, but the steps begin at opening a page and choosing languages rather than unzipping, enabling developer mode, and loading the unpacked extension. Search evidence found `chrome://extensions/shortcuts` only for shortcut changes at `QuickTranslatePages.tsx:95`, not install.

English and developer labels are partly necessary, but they are now visually prominent enough to shape tone. Examples include `Chrome MV3` and `Alt+T` in `QuickTranslatePages.tsx:211-212`, `Chrome 내장 Translator API` in `QuickTranslatePages.tsx:163`, `Chrome storage.sync` and `Translator API` in `QuickTranslatePages.tsx:383-388`, and `TypeScript` in `data/products.ts:20`. This may be acceptable for trust, but it conflicts with the stated caution against unnecessary English labels unless the team decides which technical terms are intentionally kept.

## Root Cause
The unresolved design decision is whether visual polish should optimize for memorable portfolio energy or for grounded installation trust. The current implementation assumes high-motion premium visuals and broad showcase breadth increase credibility, but the product goal says visitors must understand an unusual ZIP distribution path with confidence.

## Findings
1. Severity: MEDIUM. Reference: `components/HoloCard.tsx:24-25`, `components/HoloCard.tsx:137-139`, `components/Showcase.tsx:33-34`, `data/products.ts:32-61`. Impact: high-gloss holographic cards plus placeholder/concept work can make Akra look like a speculative portfolio instead of a real product team with Quick Translate as current representative work. Fix suggestion: decide whether Quick Translate should be visually and structurally privileged, and either reduce spectacle on non-real cards or separate concepts from shipped/current work.

2. Severity: MEDIUM. Reference: `components/QuickTranslatePages.tsx:174-186`, `components/QuickTranslatePages.tsx:276-290`, `components/QuickTranslatePages.tsx:308-317`, `components/QuickTranslatePages.tsx:410-436`. Impact: ZIP confidence is under-specified; the page offers downloads and support, but not the sideloading path or trust signals needed before Web Store availability. Fix suggestion: use visual polish budget on a concrete install/trust block: unzip, Chrome extensions page, developer mode, load unpacked, version/file identity, permissions/privacy, and known limitations.

3. Severity: LOW. Reference: `components/QuickTranslatePages.tsx:163`, `components/QuickTranslatePages.tsx:211-212`, `components/QuickTranslatePages.tsx:383-388`, `data/products.ts:20`. Impact: technical English labels may be necessary proof, but they can also read like developer marketing and weaken the desired Korean plain-spoken tone. Fix suggestion: define which English/technical tokens are mandatory trust terms and which should be localized or demoted into supporting copy.

## Recommendations
- Fold these into one user-facing question: should the next polish pass prioritize product trust and install clarity over motion-rich portfolio impact, even if that means making Quick Translate more dominant and making concept work less visually equal.
- Treat ZIP install confidence as a first-class visual-design constraint, not only a copy task.
- Keep only English/technical labels that increase trust or are official product/platform names.

## Architectural Status
WATCH

## Code Review Recommendation
COMMENT

## Trade-offs
- Strong holographic portfolio treatment: memorable and premium, but can feel speculative when paired with concepts and placeholder imagery.
- Trust-first product treatment: less flashy, but better aligned with a real product team and a pre-Web-Store ZIP install funnel.
- Technical labels retained: precise and credible for Chrome extension users, but risks agency/developer jargon if overused.
- Technical labels localized or demoted: warmer Korean tone, but may hide compatibility and privacy facts that build confidence.
