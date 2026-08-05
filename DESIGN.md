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
