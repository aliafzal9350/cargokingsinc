# Cargo Kings Inc — baseline SEO audit (live crawl 12 Nov 2026)

- Site: https://www.cargokingsinc.com (apex 308 → www) · Repo: aliafzal9350/cargokingsinc
- Stack: Next.js 14.2.15 App Router; `lib/site.js` `pageMetadata()`; `components/EditorialPage.jsx`; `middleware.js`; `app/sitemap.js`, `app/robots.js`; Vercel. No IndexNow.
- Baseline build and `check-site.mjs`: pass.
- Ahrefs (4 and 11 Nov): health 100, 0 errors, 9 warnings, 11 notices. API: *Insufficient plan*; URLs below come from this crawl.

## Verified defects (priority)
- **P1** External 403s (FMCSA, OSHA): bot blocking by government sites.
- **P1** 5 descriptions under 100 chars (exact Ahrefs match).
- **P2** 2 titles over 60 chars; /resources description duplicated from Big Mack.
- **P2** No IndexNow.
- **P3** Hosting redirect chain for http://apex.
- JSON-LD valid (Organization + Article).

## Live crawl inventory

| URL | Status | Hops | Title (len) | Description len | Canonical | og:url = canonical | In sitemap | JSON-LD types |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| https://www.cargokingsinc.com/ | 200 | 0 | Cargo Kings Inc \| Expedited Box Truck Freight (45) | 131 | https://www.cargokingsinc.com | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/resources | 200 | 0 | Freight Planning Guides \| Cargo Kings (37) | 99 | https://www.cargokingsinc.com/resources | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/fleet | 200 | 0 | Our Fleet: Box Trucks with Liftgate & Electric Pallet Jack \| Cargo Kings (72) | 156 | https://www.cargokingsinc.com/fleet | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/resources/electric-pallet-jack-freight-delivery | 200 | 0 | Electric Pallet Jack Delivery: What to Check \| Cargo Kings (58) | 150 | https://www.cargokingsinc.com/resources/electric-pallet-jack-freight-delivery | yes | yes | Organization, Person, PropertyValue, Article |
| https://www.cargokingsinc.com/resources/expedited-freight-quote-checklist | 200 | 0 | Expedited Freight Quote: Details Dispatch Needs \| Cargo Kings (61) | 131 | https://www.cargokingsinc.com/resources/expedited-freight-quote-checklist | yes | yes | Organization, Person, PropertyValue, Article |
| https://www.cargokingsinc.com/editorial-policy | 200 | 0 | About Our Freight Guides \| Cargo Kings (38) | 111 | https://www.cargokingsinc.com/editorial-policy | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/about | 200 | 0 | About Cargo Kings Inc \| Cargo Kings (35) | 76 | https://www.cargokingsinc.com/about | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/contact | 200 | 0 | Contact Dispatch & Request a Quote \| Cargo Kings (48) | 83 | https://www.cargokingsinc.com/contact | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/privacy-policy | 200 | 0 | Privacy Policy \| Cargo Kings (28) | 69 | https://www.cargokingsinc.com/privacy-policy | yes | yes | Organization, Person, PropertyValue |
| https://www.cargokingsinc.com/terms | 200 | 0 | Website Terms \| Cargo Kings (27) | 88 | https://www.cargokingsinc.com/terms | yes | yes | Organization, Person, PropertyValue |

**Host / protocol variants**

- 308 http://www.cargokingsinc.com/ → 200 https://www.cargokingsinc.com/
- 308 http://cargokingsinc.com/ → 308 https://cargokingsinc.com/ → 200 https://www.cargokingsinc.com/
- 308 https://cargokingsinc.com/ → 200 https://www.cargokingsinc.com/

**External links (non-200 to an automated client)**

- 403 https://safer.fmcsa.dot.gov/CompanySnapshot.aspx
- 403 https://www.osha.gov/powered-industrial-trucks

**robots.txt**

```
User-Agent: *
Allow: /

Sitemap: https://www.cargokingsinc.com/sitemap.xml
```
