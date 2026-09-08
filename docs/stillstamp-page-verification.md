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

## Published and saved-state verification

Verified on 2026-09-08 at 13:13 UTC. Public source revision:
322e9540d943bcc580c78d9220bbffa1f5734faa; GitHub Pages artifact revision:
65f24792ad13caea5c2de1f653cebabf7cebb09a.

- [Source deployment](https://github.com/akra-devs/home/actions/runs/34228851266)
  and [Pages deployment](https://github.com/akra-devs/akra-devs.github.io/actions/runs/34228894017)
  completed successfully. All 33 public image responses returned HTTP 200 with
  SHA-256 matching the prepared derivatives (2,970,638 bytes in total).
- In the Codex in-app browser, the homepage Stillstamp card opened the public
  route. Both layout controls worked; all seven selected Korean images decoded
  after scrolling through the page. A normal viewport capture of the hero was
  visually inspected and is retained as qa/live-hero-ko.png. Earlier full-page
  compositor artifacts are not used as acceptance evidence.
- Play Console was opened under the verified Stillstamp developer principal.
  Korean and English now each contain the existing vase icon, a new portrait
  feature graphic, and six screenshots in keepsake/photo/layout/postcard/message/
  adjust order. The three text fields exactly match the merged app manifest.
- The Console save completed. Reloading the route confirmed both language copies
  and eight displayed assets per language. All 15 unique visual assets (the icon
  is shared) have their AI-generation label checked after reopening the dialog.
  Current state is **saved and ready to send for review**. No review submission,
  binary upload or production-rollout action was performed.
- Evidence: qa/live-publication.json and qa/play-listing-saved.json. Their exact
  file digests, together with the hero screenshot digest, are recorded in
  qa/publication-evidence.json. The Console evidence includes its official route
  and capture timestamps; the operator principal is represented by SHA-256.
- The new [Google AI-asset declaration guidance](https://support.google.com/googleplay/android-developer/answer/17262077?hl=en)
  was checked against the live form. The record describes authored marketing
  media and actual SAMPLE UI captures; it is not production generation proof.
