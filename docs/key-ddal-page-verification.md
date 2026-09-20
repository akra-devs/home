# Key Ddal introduction

## Ownership and scope

- Source: `akra-devs/home`; route `/key-ddal/`.
- Delivery: existing home workflow to `akra-devs/akra-devs.github.io/docs`,
  then its existing GitHub Pages build. No delivery configuration change.
- Discovery: shared catalog drives the homepage HoloCard and footer.
- Product evidence: `akra-devs/key-ddal` revision
  `224103812a2c5ecb9ac8b13877fd7d1ad92cd775`, README, AGENTS navigation scope,
  DESIGN, release blockers dated 2026-09-19 and store capture evidence.
- Android is described as preparing for launch. No store link or public
  install claim is invented. iOS is explicitly not yet publicly released.
- Tap Lab, Capsule and Keyboard are in scope. Suspended Collection, Build
  and Shop are not promoted. This change does not alter the app.

## Media and copy

`key-ddal-media.json` records originals, revisions, transformations and hashes.
The hero and card use product-owned Porcelain Touch artwork. The social
image is the product's existing official feature graphic. The two UI images
are actual Korean shared Flutter Web captures, labeled with their capture
date and distinguished from installed Android screens.

All introduction and card copy supports Korean, English, Japanese and Chinese.
Policy/support destinations use existing Korean or English documents. Japanese
and Chinese use the published English versions; policies are not newly authored.

## Verification

- Typecheck, 414-key/four-locale translation check, catalog and brand checks,
  production build and six generated static routes passed.
- Browser inspected at 375, 768 and 1280 CSS pixels without horizontal overflow.
- Real rendered hero and screenshot selector reviewed; both images load.
- Keyboard Enter changed the selected screenshot and its `aria-pressed` state.
- Both FAQ disclosures opened. Reduced-motion emulation was exercised.
- All four language selections changed page title, heading and copy; language-
  specific support links resolved as intended.
- Homepage card and footer exist; card navigation opened the exact introduction.
- Published support, privacy and terms destinations returned HTTP 200 in both
  Korean and English. Static route metadata is checked before publishing.

## Review

The existing gallery shell is preserved and the warm product art provides the
focal point. Phone visitors can identify what the app does and whether it can
be installed. Keyboard users can reach the screen controls and disclosures;
labels accompany selected states. Source artwork and actual screen evidence
remain distinct. No app simulator, autoplay audio or new purchase flow is added.
No Lighthouse score or physical-device screen-reader test is claimed.
