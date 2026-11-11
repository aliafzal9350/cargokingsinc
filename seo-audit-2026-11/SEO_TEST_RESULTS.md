# Cargo Kings Inc — test results (12 Nov 2026, local production build)

| Check | Result |
| --- | --- |
| `npm run build` (Next 14.2.15) | PASS |
| `scripts/check-site.mjs` (extended) | PASS: 10 pages, 10 internal paths, 0 warnings |
| `check-google-tag.mjs GTM-TNMN2FZP` | PASS |
| `check-publisher.mjs` | PASS |
| `check-guide-content.mjs` | electric-pallet-jack guide PASS; quote-checklist guide under the script's 1,000-word rule (pre-existing) |
| JSON-LD | Valid on all pages (Organization with USDOT 3801387 / MC 1368401; Article on guides) |
| Redirects | Intentional host/protocol 308s only; no internal links to redirects; no loops |
| Sitemap / robots | Valid, canonical host only |
| External links | FMCSA and OSHA return 403 to automated clients; both load in browsers |
| IndexNow key file | 200 locally (middleware does not intercept it) |
| Lighthouse / schema.org validator | Not run (needs deploy / tool not installed) |
