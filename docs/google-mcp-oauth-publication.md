# Google MCP OAuth documentation

The public pages at `/mcp/`, `/mcp/privacy/`, and `/mcp/terms/` describe Akra MCP Analytics for the owner and authorized internal operators. They explain the existing local reporting workflow, Google access scopes, AI processing, retention and revocation. The homepage footer makes the documentation discoverable without adding a consumer product.

## Verification (9 September 2026)

- TypeScript typecheck, all four locale dictionaries and production build passed.
- Vite includes all three HTML pages and the shared stylesheet as static public assets.
- Independent source review found one small navigation target; the brand link now has a 44 px minimum height.
- Codex in-app browser loaded all three routes and checked English/Korean content, canonical links, heading structure and navigation. The Korean anchor moves to the translated section.
- Layout checks at three browser viewport settings reported no horizontal document overflow. Desktop screenshots were inspected. The browser's 80% scale changed effective CSS widths and clipped screenshots under viewport overrides, so this is not a claim of exact device-width screenshot coverage.
- No Lighthouse score was measured. These documentation pages contain no JavaScript, analytics or sign-in flow.

Publication uses the existing main-branch workflow and GitHub Pages destination. Google consent-screen publication and authentication are verified separately; publishing these pages alone does not establish OAuth approval or API access.
