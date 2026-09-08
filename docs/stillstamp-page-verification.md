# Stillstamp introduction verification — 2026-09-08

Page: https://akra.kr/stillstamp/ · Source: akra-devs/home.
Delivery: existing main workflow builds Vite and publishes dist to
akra-devs/akra-devs.github.io/docs, preserving CNAME. No delivery changes.

The page uses the user-selected flower portrait, sunset and cat as an editorial
sequence: complete portrait postcard, interactive sunset layouts, cat-only
postcard, actual editing screens, FAQ and current availability. The catalog card
and social image use the portrait. Footer discovery remains linked.

Assets are optimized derivatives listed with original and final SHA-256 in
stillstamp-media.json. User-supplied AI art and native-compositor illustrations
are labeled separately from actual Flutter UI. SAMPLE remains on all UI captures.
Korean/English art previews and UI captures are explicit; Japanese/Chinese host
copy explains its English UI captures. The Korean hero note is translated in the
adjacent caption. The app remains in invited Android internal testing.

Validation performed:
- TypeScript, 365-key / four-locale translation parity, brand/catalog checks and
  production/static-route build passed.
- React Doctor changed-source audit: 100, no new diagnostics. This is not a
  Lighthouse performance score; Lighthouse was not measured.
- Codex in-app browser: Korean, English, Japanese and Chinese at actual CSS
  widths 375, 767 and 1280. No horizontal overflow; controls are 48px (rounding
  reports 47.99). Evidence: qa/responsive.json.
- Both layout choices changed the image and pressed states. Tab + Enter selected
  postcard-only. All three FAQ disclosures expanded with accurate content.
- Reduced-motion emulation removed preview animation and button transitions.
- Hero and selected-mode assets decoded; native art and store source PNGs were
  visually inspected. Browser full-page screenshot capture had compositor
  scaling artifacts; it is not retained as visual acceptance evidence.
- Shared browser emulation is cleared after inspection.

Availability: no public install badge or unverified release claim. This change
updates marketing only, not an Android/iOS binary or server generation behavior.
