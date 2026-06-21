## Summary
The current product direction is coherent, but the visual layer still carries portfolio-template complexity that competes with the simpler story: Akra is a real product team and Quick Translate is the latest representative work. Simplification should reduce motion, labels, decorative cards, and duplicated CTAs while keeping the ZIP-install trust path explicit.

## Analysis
Evidence-backed findings:
- components/HoloCard.tsx uses per-card 3D tilt, springs, glare, rainbow foil, shadow lift, z-depth transforms, hover border/ring changes, category badges, icons, tags, and sample/private markers. With data/products.ts mixing one real product with several concept/sample items and remote placeholder images, the homepage can feel like a flashy portfolio grid rather than a product-team proof point.
- components/Showcase.tsx adds category tabs and animated filtering over only two categories. Because Quick Translate must lead as latest representative work, the tab UI and equal-card grid create decision overhead before the visitor reaches the real product.
- components/QuickTranslatePages.tsx already communicates key facts for ZIP distribution, but it repeats the download CTA in the hero and lower gradient CTA, has multiple badge/stat/feature/screenshot sections, and sends installation detail to Support instead of showing the load-unpacked steps directly beside the ZIP download. Visual polish should preserve confidence in the pre-Web-Store ZIP method by making install steps more prominent, not by adding more decorative sections.

## Root Cause
The visual system still optimizes for breadth and impressiveness from a studio/portfolio template, while the milestone intent optimizes for trust, product reality, and a single clear install path for Quick Translate.

## Findings
- MEDIUM, components/HoloCard.tsx plus components/Showcase.tsx: high-motion holographic cards and tabbed filtering add spectacle around sample/concept work, diluting Quick Translate as the representative product. Simplify card treatment and ranking before adding polish.
- MEDIUM, data/products.ts: placeholder images and multiple concept products can weaken the claim that Akra is a real product team. Keep Quick Translate visually first and distinguish any concepts quietly.
- MEDIUM, components/QuickTranslatePages.tsx: ZIP-install confidence depends more on visible step-by-step install guidance than on more badges, feature tiles, or repeated CTAs. Move or expose the load-unpacked path in the main page.

## Recommendations
1. Ask the user which visual elements may be reduced: 3D/holographic card effects, category tabs, secondary/concept cards, repeated CTA bands, feature tile count, and English-like badges.
2. Preserve the visible trust elements: Quick Translate first, version/Chrome requirement, ZIP download, privacy statement, limitations, and explicit install method.
3. Treat visual polish as simplification and hierarchy, not additional animation.

## Architectural Status
WATCH

## Code Review Recommendation
COMMENT

## Trade-offs
- Keep full visual effects: looks energetic, but risks agency/template feel and weakens product trust.
- Remove most motion and tab UI: calmer, more credible, but less flashy.
- Keep many project cards: shows breadth, but makes Quick Translate less representative.
- Lead with Quick Translate and quiet samples: stronger product-team story, but narrower portfolio impression.
