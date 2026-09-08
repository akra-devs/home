---
name: Akra Dev
description: A midnight product gallery where real product media receives the strongest visual light.
colors:
  midnight-canvas: "#09090b"
  raised-surface: "#18181b"
  quiet-surface: "#27272a"
  primary-blue: "#3b82f6"
  primary-text: "#ffffff"
  body-text: "#d4d4d8"
  muted-text: "#a1a1aa"
  hairline: "rgba(255, 255, 255, 0.10)"
  waxball-ink: "#f8f7ff"
  waxball-muted: "#aaa8b7"
  waxball-violet: "#6d5dff"
  waxball-cyan: "#75d9ff"
  waxball-lilac: "#d9d1ff"
typography:
  display:
    fontFamily: "Playfair Display, Noto Serif KR, serif"
    fontSize: "clamp(3.75rem, 8vw, 9rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  productDisplay:
    fontFamily: "Playfair Display, Noto Serif KR, serif"
    fontSize: "clamp(5.5rem, 9.4vw, 9.3rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.065em"
  headline:
    fontFamily: "Playfair Display, Noto Serif KR, serif"
    fontSize: "clamp(2.35rem, 5vw, 4.9rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  card: "16px"
  panel: "24px"
  media: "32px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "64px"
  section: "clamp(94px, 12vw, 170px)"
components:
  button-primary:
    backgroundColor: "{colors.primary-text}"
    textColor: "{colors.midnight-canvas}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.10)"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  product-card:
    backgroundColor: "{colors.raised-surface}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.card}"
    padding: "32px"
  split-comparison:
    backgroundColor: "{colors.midnight-canvas}"
    textColor: "{colors.waxball-ink}"
    rounded: "{rounded.media}"
  material-selector:
    backgroundColor: "transparent"
    textColor: "{colors.waxball-ink}"
    rounded: "{rounded.card}"
---

# Design System: Akra Dev

## Internal-tool documentation

The `/mcp/`, `/mcp/privacy/` and `/mcp/terms/` documents use the shared midnight,
white, body and muted text colors. The reusable document shell is a 65ch reading
column with 24px gutters (16px on phones), 32px header padding and 64px section
spacing. The document owns scrolling. Use 16px/1.8 body text, the existing serif
headline scale, underlined links and 44px navigation targets with visible focus.
These are static informational documents, without a login form or application
dashboard. English and Korean sections have explicit language attributes and
anchor navigation. The existing system fonts provide fallbacks without a new
font download. No script, tracking, animation, form or third-party embed is
needed. Content, keyboard navigation and phone reading are the quality criteria;
the pages make no claim that public visitors can use the internal connector.

## Overview

**Creative North Star: “The Midnight Product Gallery.”**

Akra places real products in a nearly black exhibition space and uses light, scale, and editorial type to establish hierarchy. The dark canvas is not decoration: it lets authentic product media carry the story. Playfair Display or Noto Serif KR provides the declarative voice; Pretendard keeps controls and explanatory copy direct.

Product pages retain the same navigation, typography, and base contrast, then extend the system with a product-specific light palette. Waxball uses lilac, violet, and cyan as restrained illumination around real in-game media. Those colors do not replace the global navigation, body copy, or interaction semantics.

## Durable Rules

1. **The Product Light Rule.** Product-specific color may illuminate media and key controls, but never recolor the entire interface or undermine the shared Akra shell.
2. **The One Declaration Rule.** Each viewport gets one dominant editorial declaration. For Waxball it is the oversized “WAXBALL” wordmark.
3. **The Flat-at-Rest Rule.** Surfaces stay quiet at rest. Depth increases only on focus, hover, scroll entry, or the primary product media.
4. **The Evidence Rule.** Use actual app captures, exported renders, and real video. Generated artwork may guide composition but must not be presented as product behavior.

## Color

- **Global neutrals:** Midnight Canvas, Raised Surface, Quiet Surface, white-to-zinc text, and a 10% white hairline.
- **Global action color:** Product Blue for ordinary links, focus support, and generic product status.
- **Waxball light:** Violet (`#6d5dff`) and Cyan (`#75d9ff`) create the split chamber glow; Lilac (`#d9d1ff`) marks the active fracture stage; Waxball Ink and Muted keep text warmer than pure white and neutral gray.
- **Material accents:** Individual ball colors are content data, not global tokens. They belong to that material option and must not leak into site chrome.

## Typography

- **Display:** Playfair Display with Noto Serif KR fallback. Use only for the primary declaration and major section turns.
- **Product display:** Waxball’s desktop wordmark uses `clamp(5.5rem, 9.4vw, 9.3rem)`, a compact line height, and tight tracking. Mobile scales down rather than wrapping into a second line.
- **Headline:** `clamp(2.35rem, 5vw, 4.9rem)` for editorial section openings.
- **Body:** Pretendard, 16px by default, at least 1.6 line height, and a readable maximum measure near 65 characters.
- **Labels:** 12px semibold or bold with deliberate tracking for stages, categories, and status. Labels support the story; they never become a repeated eyebrow above every section.

## Layout

- Shared content maxes out at 1280px. Desktop gutters are 24px per side through `calc(100% - 48px)`; mobile gutters are 16px through `calc(100% - 32px)`.
- Waxball’s first viewport is an asymmetric two-column chamber: editorial copy and stage rail on the left, interactive split media on the right.
- Collapse the hero below 900px. On mobile, preserve the order: declaration → CTAs/facts → product orb → stage rail.
- Long-form sections use generous fluid vertical spacing rather than stacking many boxed cards. Feature copy and evidence alternate to create rhythm.
- Avoid decorative grids and arbitrary dashboard layouts. A line, panel, or card must explain grouping or interaction.

## Shape and Depth

- Controls: 8px or pills, depending on whether the control is compact or a primary CTA.
- Data and product cards: 16px.
- Interior and mobile media panels: 24px.
- Cinematic evidence and hero media: 32px.
- Circles are reserved for ball media, stage dots, and compact icon controls.
- Use a single hairline plus restrained ambient shadow. Blur and glow support product lighting; they must not soften text or obscure real media.

## Signature Components

### Floating Navigation

The global Akra navigation remains legible above every product world. It has a minimum 44px mobile target, visible focus treatment, real destinations, and a translucent black surface only when contrast requires it.

### Holographic Product Card

The homepage’s featured Waxball card spans additional grid width. Pointer tilt is restrained, disabled for coarse pointers and reduced-motion users, and never blocks the product link or copy.

### Waxball Split Comparison

Two actual renders share one circular frame: intact shell and core cutaway. A native range input is the accessible source of truth; named stage buttons are shortcuts. Surface reveals mostly intact shell, Fracture shows the transition, and Core reveals mostly cutaway. The interaction must work without hover and expose focus clearly.

### Fracture Stage Rail

Three named stages provide the minimum useful mental model without simulating all in-game presses. Progress animates with transforms, not layout width. Desktop aligns the rail beneath the hero copy; mobile places it beneath the orb so the relationship remains obvious.

### Material Selector

Material choices use real selection-screen art, descriptive Korean names, and `aria-pressed`. The active state changes the large evidence panel and explanatory copy; focus and selection cannot rely on color alone.

### Evidence Media

Screenshots use WebP and the product walkthrough uses H.264/AAC MP4 with controls. Lazy-load below-the-fold images, reserve dimensions or aspect ratio, and avoid autoplay. Product claims must be visible in the media or traceable to the project’s actual implementation.

## Motion and Accessibility

- State changes: approximately 180ms ease-out.
- Editorial reveals: up to 600ms with a decelerating curve.
- Never transition layout dimensions for continuous input; use transforms and opacity.
- Honor `prefers-reduced-motion`, disable decorative pointer tilt on coarse inputs, and keep every interactive target at least 44px on touch layouts.
- Provide semantic buttons, pressed state, labels for range controls, keyboard-visible focus, meaningful image alt text, and sufficient text contrast.

## Do / Don’t

**Do** use real assets at the largest meaningful size, connect each claim to visible evidence, keep Korean copy concise, preserve a clear mobile reading order, and test in the actual in-app browser.

**Don’t** invent store ratings or usage counts, use fake links, replace product evidence with generated mockups, add repeated eyebrow labels, cover the page in glow borders, or require hover to understand an interaction.

## Deliberately Not Canonized

One-off material accent colors remain data-driven. The removed decorative grid and repeated hero/final-CTA eyebrow labels are not design-system patterns and must not return through component reuse.

## Stillstamp product page

Reference observation: 2026-09-07, `https://akra.kr/waxball/` and
`https://akra.kr/mp4-transition-pages/`. Reuse the Akra shell and the sequence
of outcome, actual media, steps, availability and support. Runtime inspection
at 1280px confirmed Pretendard 16px body, serif display, white pill actions
with 24px horizontal padding, and the existing 1280px content limit.

Stillstamp's signature is a real paper-and-ink postcard in a dark exhibition
space, with the source photograph beside it. Its original/result selector
compares supplied sample assets; it never pretends to generate an image.
Keep the actual product evidence visible and legible without pointer hover.

- Product colors: warm ink `#f6f0df`, muted `#b6b5ad`, paper `#eee3c9`,
  sage `#bacdb7`, forest light `rgba(105,133,111,.16)` and warm light
  `rgba(201,172,114,.09)`. Retain the global midnight background.
- Display: Playfair Display/Noto Serif KR, `clamp(3.5rem,7.5vw,7rem)` for
  the name, `clamp(2rem,3.4vw,3.2rem)` for the statement; section headings
  `clamp(2rem,4vw,3.75rem)`. Body 16px/1.8; labels 12px; supporting 14px.
- Spacing: 8, 12, 16, 24, 32, 48, 64px; section padding
  `clamp(80px,10vw,128px)`, hero top 136px (120px on small screens),
  back-link bottom gap 16px and hero bottom 48px (32px on small screens).
- Reusable primitives: `ss-button` (primary and secondary, 48px minimum,
  hover/focus/active); `ss-section-head`; `ss-media` (reserved 4:3 area,
  whole image contained); `ss-step`; native disclosure FAQ. All selected
  states use text plus `aria-pressed`; focus has a 2px sage outline.
- Paper elevation: 8px corner radius, fine paper rim and
  `0 32px 80px rgba(0,0,0,.35)` shadow. Source thumbnail has a 4px paper mat.
- Responsive: 1fr/1.15fr hero above 900px, one column below; 24px desktop
  gutters and 16px mobile; three sample screens above 640px, one below.
  The document owns scrolling. No sideways carousel or hidden instructions.
- Interaction: reuse simple native controls; feedback uses opacity/transform
  over 180ms. No ambient animation. Reduced motion removes transitions.
- Accessibility/personas: a new phone visitor can identify the result and
  current availability; keyboard users can select both examples and expand
  FAQs; each example has localized alt text. Android internal testing is
  not described as a public store launch. Web SAMPLE captures remain labeled.
- Existing-site debt: third-party fonts and the shared React shell predate
  this page. Do not claim a measured performance score without an audit.

### Stillstamp three-story sequence (2026-09-08)

Use the approved flower portrait, sunset and cat as three different editorial
moments: portrait hero, sunset layout comparison, quiet cat postcard, real app
editing screens, then availability/support. Keep the midnight Akra shell.
The benefit is the dominant 38–64px serif declaration; the brand is an 18px
signature. Mobile order: title, explanation, example CTA, whole 4:3 artwork.

Native 48px mode buttons expose aria-pressed, update a reserved 4:3 panel and
its caption. Consulted beui.dev/r/tabs/raw: adapt controlled selection and
180ms opacity feedback, without adding spring motion or a dependency. Reduced
motion removes transitions. No scroll animation, autoplay or horizontal rail.

The cat source is an intentional photo window; its main postcard is a whole
native-compositor render. Generated reference art has a visible localized
style-example caption. Actual Flutter captures retain SAMPLE. Neither is
claimed as a production AI request. Export previews use real compositor code
with externally authored fixture art, with that provenance documented.

Use 640/960/1448 responsive artwork and lazy-load below the hero. Four host
locales get translated copy/alt/controls. App UI captures are Korean/English;
Japanese/Chinese deliberately use English captures with a localized disclosure.
Korean personal notes are translated alongside the hero. Current public
availability remains Android internal testing. Each source, transformation,
revision and optimized digest is recorded in the media inventory.
