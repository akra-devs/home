# Charm Lab policy page verification

- Existing home build pipeline unchanged. Six explicit public HTML documents; no app source or SDK in the public directory.
- TypeScript, all 414 translation keys, brand assets, product catalog and production build checks passed.
- Local direct URLs match built files byte for byte; English/Korean language links work.
- Browser DOM at 375, 768 and 1280 CSS pixels has no horizontal overflow. Phone and wide renders inspected; max reading width 768px with 24px gutters.
- Initial HTML contains the complete policy, semantic headings, visible-focus links, language state, canonical URL and support contact. No scripts or external font requests.
- Page copies are bound to the app policy document hashes in charm-policy-source.json.
- Public legal text is a factual implementation disclosure; qualified regional legal review and store declarations are separate release tasks.
