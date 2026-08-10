# GEO Audit Report — illumiasolutions.com

**Date:** 2026-08-10
**Business type:** Agency (Enterprise IT services — cloud, cybersecurity, open-source, custom software; Kolkata, India; certified Proxmox Silver Partner)
**Pages assessed:** 70 (full sitemap), deep-dive on homepage, /about/, /faqs/, /contact/, 3+ service pages, 3+ case studies

---

## Composite GEO Score: 55 / 100 (Average)

| Category | Weight | Score | Contribution | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 78/100 | 19.5 | Good |
| Brand Authority Signals | 20% | 14/100 | 2.8 | Critical |
| Content Quality & E-E-A-T | 20% | 55/100 | 11.0 | Average |
| Technical Foundations | 15% | 82/100 | 12.3 | Good |
| Structured Data | 10% | 58/100 | 5.8 | Fair |
| Platform Optimization | 10% | 39/100 | 3.9 | Weak |
| **Composite** | 100% | | **55.3 → 55/100** | |

**Read:** the site's technical plumbing (SSR, crawlability, schema) is in solid shape and AI bots can fully see the content. The score is held down almost entirely by one thing — **the business has no discoverable identity outside its own website**. No Wikipedia, no Wikidata, no Reddit, no YouTube, a near-dormant LinkedIn, and zero named humans anywhere on the site. That single gap (Brand Authority, 14/100) and its knock-on effect on Platform Optimization (39/100, since ChatGPT and Perplexity weight third-party entity signals heavily) account for most of the lost points.

---

## Priority Action Plan

### Critical (fix first — biggest score impact for the effort)

1. **Name real humans on the site.** Zero named founders/engineers anywhere — certifications (CISA/CISSP/CEH/CCIE) are claimed in prose but never attached to a person. Add a Team/Experts page: names, photos, specific certs with verification links, LinkedIn profiles. This unlocks Person schema, Article `author`, and is the single highest-leverage fix touching 3 of the 5 category scores (Content, Structured Data, Brand Authority).
2. **Build third-party entity presence from zero.** No Wikipedia/Wikidata, no Reddit, no YouTube. For an audience of sysadmins evaluating Proxmox/VMware migration, Reddit (r/Proxmox, r/homelab, r/sysadmin) is the highest-ROI near-term lever — genuine participation, not promotion. Create a Wikidata item (lower bar than Wikipedia). Launch a YouTube channel with migration walkthroughs tied to existing case studies.
3. **Reactivate LinkedIn.** It's the only external `sameAs` signal already engineered into your schema, but sits at 105 followers with almost no posting. Weekly posts (migration wins, AI-governance/EU AI Act content — you already have strong on-site material for this) before the next audit cycle.

### High

4. **Add `author` to all case-study Article schema** (currently missing on every case study checked). Interim fix: attribute to the Organization; long-term: attribute to named engineers once Team page exists.
5. **Expand `sameAs` on Organization schema** beyond LinkedIn + Proxmox partner page — add Twitter/X, YouTube, Crunchbase, Facebook, GitHub as they come online.
6. **Fix security headers** — HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy are entirely absent on every page tested. Config-only fix via Cloudflare Transform Rules or Next.js `headers()` — no code risk.
7. **Server-render the mega-menu links.** ~55 of 70 sitemap pages (79%) have zero link path from the homepage's initial HTML — nav mega-menu is client-JS-injected only. AI crawlers that follow links rather than parse `sitemap.xml` (many don't) will likely never discover most service pages. Render the full `<a href>` list in initial HTML, hide/collapse visually via CSS only.
8. **Register Bing Webmaster Tools + implement IndexNow.** `/.well-known/indexnow-key.txt` 404s, no `msvalidate.01` meta tag. Both ChatGPT web search and Bing Copilot run on the Bing index — low-effort, two-platform win.
9. **Pull case-study numbers onto the service pages they support.** Real, quantified proof (80% licensing cost cut, zero downtime, PCI DSS Level 2 across 17 sites) is siloed inside 7 case studies and never surfaces on the ~45 service pages selling that work.
10. **Launch bylined technical content.** Zero blog/knowledge-base content across all 70 URLs — only sales pages, case studies, FAQs. AI platforms and Google's quality guidelines both reward demonstrated ongoing expertise over sales copy.

### Medium

11. Add 301 redirect between `www` and apex (`illumiasolutions.com`) — both currently return independent 200s; canonical tag mitigates Google-specific risk but wastes crawl budget for bots that don't respect canonicals.
12. Set long-lived `Cache-Control` (`public, max-age=31536000, immutable`) on `/_next/static/*` and image assets — currently `cf-cache-status: BYPASS` on every hashed static asset.
13. Standardize `BreadcrumbList` sitewide — missing on `/about/`, `/faqs/`, `/contact/`, `/proxmox-migration/`, `/erpnext/` while present elsewhere (template gap).
14. Add question-phrased H2s ("What is...", "How does...") and comparison tables to core service pages — currently confined to `/faqs/`. Direct-answer 40-60 word openers per section.
15. Fill `llms.txt` gaps: add `/llms-full.txt` (404 today), add missing pages (`/ai-governance/`, `/proxmox-migration/`, 5 of 9 case studies, most granular security pages), backfill ~9 missing `: description` clauses, tighten the over-length blockquote, add `## Key Facts` / `## Contact` sections.
16. Rewrite the weakest citability blocks as answer-first definitions with concrete facts — worst offender: "Backup as a Service" on `/cloud-services/` has no description text at all (13/100, the floor of the whole audit).
17. Add `speakable` schema to Article templates, targeting the results/summary section of each case study.
18. Review near-duplicate page pairs for cannibalization: `/siem/` + `/siem-as-a-service/`, `/edr-solution/` + `/edr-as-a-service/`, `/pam/` + `/pam-as-a-service/`, `/honeypot-solution/` + `/honeypot-as-a-service/`.
19. Add `SearchAction` to WebSite schema; add `knowsAbout`, `foundingDate`, structured `ContactPoint` to Organization schema.
20. Secure named/verifiable client testimonials — most case studies use unattributed quotes ("IT Director, Grocery Store Chain") and anonymized client names.

### Low

21. Add "last reviewed"/`dateModified` dates to service pages; add a brief editorial-standards note to the About page.
22. Add real architecture diagrams/dashboard screenshots to case studies in place of stock photography.
23. Explicitly block `Bytespider` in robots.txt (aggressive, low-value crawler currently allowed by wildcard).
24. Confirm Next.js image optimization is active — sampled assets serve directly from `/images/...` rather than `/_next/image?url=...`, no automatic AVIF/WebP conversion observed.
25. Consider Cloudflare's "Markdown for Agents" content-negotiation feature (`Accept: text/markdown`) as an early GEO differentiator — currently unsupported.
26. Add explicit `Content-Signal` directive to robots.txt (e.g. `Content-Signal: ai-train=yes, search=yes, ai-retrieval=yes`) per contentsignals.org.

---

## Category Detail

### 1. AI Citability & Visibility — 78/100 (25% weight)

| Sub-component | Score |
|---|---|
| Citability (avg, 4 pages sampled) | 63/100 |
| AI Crawler Access | 100/100 |
| llms.txt quality | 75/100 |

**Crawler access is fully open** — robots.txt allows all major AI bots (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot, CCBot) with no restrictions; sitemap referenced correctly.

**Citability by page:**
| Page | Score | Strongest block | Weakest block |
|---|---|---|---|
| `/ai-governance/` | 69/100 | EU AI Act article-level mapping — 85/100 | Closing statement — 50/100 |
| Case study: proxmox-vmware-migration | 70/100 | "At a Glance" stats (80% cost reduction, $0 capex) — 80/100 | Conclusion paragraph — 51/100 |
| Homepage | 59/100 | Proxmox VE block (60-80% cost reduction) — 79/100 | Mission/Vision/Values — 34/100 |
| `/cloud-services/` | 53/100 | Honeypot-as-a-Service definition — 71/100 | Backup-as-a-Service (no description) — 13/100 |

Pages citing specific numbers, named legal articles, and real clients substantially outperform generic marketing copy — the pattern to replicate across the site.

**llms.txt** exists and is well-organized by category, but is missing `/llms-full.txt`, omits several flagship pages (ai-governance, proxmox-migration, 5/9 case studies, most granular security pages), and ~9 of 24 entries lack the required description clause.

### 2. Brand Authority Signals — 14/100 (20% weight)

| Platform | Score | Weight | Status |
|---|---|---|---|
| YouTube | 8/100 | 25% | Absent |
| Reddit | 5/100 | 25% | Absent |
| Wikipedia | 0/100 | 20% | Absent (confirmed via API; also a name-collision risk with an unrelated "Illumia" AI startup and "Illumio") |
| LinkedIn | 35/100 | 15% | Present but dormant — 105 followers, ~1 post/2 weeks |
| Other platforms | 35/100 | 15% | Proxmox Silver Partner directory + a genuine Apache Guacamole GitHub PR naming Illumia as a commercial-support partner; no G2/Clutch/Trustpilot/Quora/Stack Overflow/HN presence |

This is the lowest-scoring category and the biggest lever for the composite score. The Guacamole GitHub PR is a real, high-authority third-party signal worth replicating with other named partners (NetBox Labs, Zextras, Seqrite).

### 3. Content Quality & E-E-A-T — 55/100 (20% weight)

| Dimension | Score /25 |
|---|---|
| Experience | 15 |
| Expertise | 11 |
| Authoritativeness | 6 |
| Trustworthiness | 18 |
| Topical authority modifier | +5 |

Case studies carry genuine original data (80% licensing cost cut, PCI DSS Level 2 across 17 locations, 50-65% IT cost reduction across 1,000+ branches) — real Experience signal. But zero named humans anywhere undercuts Expertise and Authoritativeness, and that same proof rarely surfaces on the service pages it should be supporting.

### 4. Technical Foundations — 82/100 (15% weight)

| Sub-category | Score |
|---|---|
| Server-Side Rendering | 13/15 |
| Crawlability | 13.5/15 |
| Indexability | 9.5/12 |
| Security Headers | 4/10 |
| URL Structure | 7.5/8 |
| Mobile Optimization | 9.5/10 |
| Core Web Vitals (estimated, no CrUX data pulled) | 12.5/15 |
| Page Speed & Server | 12/15 |

Strongest category. SSR is excellent — full text, meta tags, and JSON-LD present in raw HTML on every page checked, so AI crawlers see exactly what a browser sees. TTFB ~305ms, Brotli active, clean URL structure, correct mobile viewport. The two real gaps: missing security headers (config-only fix) and a client-JS-only mega-menu that hides ~79% of the sitemap from crawlers that follow links instead of parsing XML.

### 5. Structured Data — 58/100 (10% weight)

JSON-LD only (no Microdata/RDFa), 100% server-rendered — no JS-injection risk. Organization+LocalBusiness, WebSite present sitewide; FAQPage on `/faqs/` (30 Q&As); Article + BreadcrumbList on case studies; Service schema on service pages. Gaps: no `author` on any Article, `sameAs` limited to 2 links, BreadcrumbList inconsistent on newer pages, no `speakable`, no `SearchAction`, no Person schema anywhere (no named individuals to attach it to). Ready-to-use JSON-LD snippets for Article+speakable, expanded Organization, WebSite SearchAction, and BreadcrumbList are in the full subagent transcripts — ask me to pull them out when ready to implement.

### 6. Platform Optimization — 39/100 (10% weight)

| Platform | Score | Note |
|---|---|---|
| Google AI Overviews | 65/100 | Strong FAQ/list structure, fast SSR; needs more question-phrased H2s outside `/faqs/` |
| Bing Copilot | 49/100 | Best of the five; hurt by missing IndexNow + no Bing verification |
| Google Gemini | 32/100 | Good schema coverage; no YouTube/Knowledge Panel/Google ecosystem presence |
| Perplexity | 26/100 | Clean SSR content is favorable; near-zero Reddit/forum presence caps the score |
| ChatGPT Web Search | 22/100 | No Wikipedia/Wikidata entity signals at all — the dominant factor in ChatGPT's citation weighting |

Directly downstream of the Brand Authority gap — ChatGPT and Perplexity both weight third-party entity presence (Wikipedia, Reddit) above on-site quality.

---

## What's Already Working

- SSR renders full content, meta tags, and JSON-LD server-side — nothing hidden behind client JS for AI crawlers (except the nav menu, see Priority #7).
- robots.txt fully open to every major AI crawler, sitemap correctly referenced, no `noindex`/`noai` anywhere.
- `llms.txt` already exists and is reasonably organized (ahead of most competitors at this stage).
- Organization+LocalBusiness JSON-LD is comprehensive on NAP/address/areaServed; FAQPage schema correctly implemented; Article+BreadcrumbList on case studies.
- Case studies contain genuinely strong, specific, quotable data — the raw material for E-E-A-T and citability is there, it just needs to be surfaced more widely and attributed to real people.
- TTFB, compression, mobile viewport, and URL structure are all solid.

---

*Full findings, methodology, and additional JSON-LD snippets from each of the 5 specialist subagents (geo-ai-visibility, geo-platform-analysis, geo-technical, geo-content, geo-schema) are available on request.*
