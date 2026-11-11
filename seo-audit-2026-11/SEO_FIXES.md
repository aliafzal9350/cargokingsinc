# Cargo Kings Inc — SEO fixes (12 Nov 2026)

Repo: `aliafzal9350/cargokingsinc` · Next.js 14.2.15 App Router + `middleware.js` · Vercel · canonical host `https://www.cargokingsinc.com`

Ahrefs API returned "Insufficient plan"; URLs come from an independent crawl of the live site (10 sitemap URLs).

| # | Issue (Ahrefs) | Affected URLs | Root cause | File changed | Solution | Validation | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Meta descriptions too short (5) | /resources, /about, /contact, /privacy-policy, /terms | Short boilerplate | `app/resources/page.jsx`, `lib/company-pages.js` | Rewritten at 124–143 chars | Local crawl 100–165 | Fixed (exact 5-URL match) |
| 2 | Duplicate description across domains | /resources | Same text as Big Mack's /resources | `app/resources/page.jsx` | Unique Cargo Kings description | — | Fixed |
| 3 | External 4XX (1) | /fleet → `safer.fmcsa.dot.gov/CompanySnapshot.aspx`; /resources/electric-pallet-jack… → `osha.gov/powered-industrial-trucks` | Both government sites return 403 to automated clients, including curl with a browser UA. Real browsers load them. | `app/fleet/page.jsx` | FMCSA link now opens Cargo Kings' own snapshot (USDOT 3801387). OSHA link kept: it is the authoritative source. | Manual check in a real browser recommended | Partly fixed — Ahrefs will likely keep reporting it (bot blocking, not a broken page) |
| 4 | Titles over 60 chars | /fleet (72), /resources/expedited-freight-quote-checklist (61) | Long page titles | `app/fleet/page.jsx`, `lib/resources.js` | "Our Box Truck Fleet & Liftgate Equipment", "Expedited Freight Quote: What Dispatch Needs" | 54 / 58 chars | Fixed |
| 5 | Changed pages not submitted to IndexNow (9) | all | No integration | `scripts/indexnow.mjs`, `public/64133f20ebbcf508e6634b5097c7727e.txt` | Same workflow as the other sites (dry run by default) | Key file 200 locally; middleware does not block it | Requires manual action: run after deploy |
| 6 | 3XX redirects (4) / HTTP→HTTPS (2) / redirect chain (1) | `http://cargokingsinc.com/` → `https://cargokingsinc.com/` → `https://www.cargokingsinc.com/`, plus retired catalog query URLs | Vercel HTTPS upgrade, apex→www, and intentional 301s for old URLs | — | Kept. Internal links, sitemap and canonicals already use final URLs. | Crawl: 0 links to redirects | Intentionally unchanged |
| 7 | Page and SERP titles do not match (1) | Unknown (needs Ahrefs URL) | Google rewrites titles on its own | — | No action; titles now accurate and ≤60 chars, which reduces rewrites | — | Informational |
| 8 | USDOT typo (found 11 Nov) | sitewide | 3801397 instead of FMCSA's 3801387 | committed earlier (`3fa4ac9`) | Live site now shows 3801387 | Crawl of live JSON-LD | Fixed (live) |
| 9 | Pages added to sitemap / title & description changed (1 each) | /fleet | New page | — | — | Content reviewed | Informational |
