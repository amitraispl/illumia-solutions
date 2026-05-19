# Technical SEO Audit — illumiasolutions.com

**Date:** 2026-05-19
**Audited by:** Claude Code (seo-technical skill)
**Overall Score: 56/100**

---

## Category Scores

| Category | Status | Score |
|----------|--------|-------|
| Crawlability | pass | 90/100 |
| Indexability | warn | 60/100 |
| Security | warn | 45/100 |
| URL Structure | warn | 65/100 |
| Mobile | pass | 85/100 |
| Core Web Vitals | warn | 55/100 |
| Structured Data | warn | 60/100 |
| JS Rendering | pass | 90/100 |
| IndexNow | fail | 0/100 |

---

## Critical Issues (fix immediately)

### 1. Home page title is 105 characters — will be truncated in SERPs

`src/app/page.tsx:19`

```
"Illumia Solutions | Illuminating the Path to Success | Enterprise IT Services — Cloud, Cybersecurity & Open Source"
```

Max is 60 chars. Google will rewrite it. Suggested fix:

```
"Enterprise IT Services — Cloud, Cybersecurity & Open Source | Illumia Solutions"
```

(Still 80 chars — trim further to stay under 60.)

---

### 2. OG image missing on all pages

`src/app/layout.tsx:61–65` — `openGraph` block has no `images` field. `twitter.card` is `summary_large_image` but no image is defined. Social shares show a blank card for every page.

Fix: add a default OG image (1200×630) and reference it in layout metadata:

```ts
openGraph: {
  images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  type: "website",
  siteName: "Illumia Solutions",
  locale: "en_US",
},
twitter: {
  card: "summary_large_image",
  images: ["/og-default.png"],
},
```

---

### 3. `.docx` files exposed in `/public/photos/`

Four Word documents are publicly served and indexable by Google:

- `Why choose Illumia Solutions.docx`
- `FAQs.docx`
- `Global Reach.docx`
- `About Us.docx`

Potential content/info leak and junk index entries. Delete from `public/` or move outside the repo's public directory.

---

### 4. Sitemap `lastModified: new Date()` — always shows today's date

`src/app/sitemap.ts:67`

Every build marks every URL as "just modified today." Googlebot deprioritizes crawling when dates look unreliable. Use real dates or omit `lastModified` entirely:

```ts
// Option A: omit lastModified
return routes.map(({ path, priority, changeFrequency }) => ({
  url: `${base}${path}`,
  changeFrequency,
  priority,
}));

// Option B: hardcode actual last-changed dates per route
{ path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-05-01" },
```

---

## High Priority (fix within 1 week)

### 5. Duplicate URL pairs — canonical conflict risk

Both variants exist in the sitemap with no canonical resolution:

| Short URL | Long URL |
|-----------|----------|
| `/siem/` | `/siem-as-a-service/` |
| `/edr-solution/` | `/edr-as-a-service/` |
| `/pam/` | `/pam-as-a-service/` |
| `/honeypot-solution/` | `/honeypot-as-a-service/` |

If content is identical/near-identical → consolidate to one URL and 301 redirect the other.
If content differs → add `alternates: { canonical: "/preferred-url/" }` to each page's metadata.

---

### 6. `/collaboration-solutions/` page missing from sitemap

`src/app/collaboration-solutions/page.tsx` exists but is not listed in `src/app/sitemap.ts`. Orphaned page gets no crawl priority signal. Add to sitemap or confirm intentional omission.

---

### 7. No canonical tags on inner pages

Only the home page has `alternates: { canonical: "/" }`. With static export and `trailingSlash: true`, URLs like `/about` vs `/about/` can be treated as duplicates by some crawlers. Add canonical to every page:

```ts
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: "About Us",
  description: "...",
  alternates: { canonical: "/about/" },
};
```

---

### 8. `images: { unoptimized: true }` — no WebP/AVIF delivery

`next.config.ts:13` — forced by `output: "export"` (static export cannot do on-demand image optimization). Hero images from Unsplash are large JPEGs. Impact: slower LCP, larger payloads.

Fix options:
- Pre-optimize images at build time using `sharp` CLI
- Use Cloudflare Image Resizing or similar CDN-level optimization

---

### 9. `sameAs` in Organization schema points to GitHub Pages dev deployment

`src/app/layout.tsx:41`

```ts
sameAs: ["https://amitraispl.github.io/illumia-solutions/"],
```

`sameAs` should link to authoritative profiles (LinkedIn, Crunchbase, Google Business Profile, etc.), not a dev/staging site. Wrong `sameAs` dilutes entity disambiguation in Knowledge Graph.

---

## Medium Priority (fix within 1 month)

### 10. No security headers

Static export (`output: "export"`) cannot set HTTP headers via Next.js config. Must be set at CDN/hosting level (Cloudflare, Vercel, Netlify, etc.).

Missing headers:
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

### 11. Missing structured data types

| Schema Type | Page | Impact |
|-------------|------|--------|
| `WebSite` + `SearchAction` | Root layout | Sitelinks search box eligibility |
| `BreadcrumbList` | All inner pages | Rich breadcrumb in SERPs |
| `Service` | All service pages | Service rich results |
| `FAQPage` | `/faqs/` | FAQ accordion rich results |

---

### 12. About page metadata is keyword-weak

`src/app/about/page.tsx:11`

Current description: _"Providing clients with the tools and guidance they need to excel in an ever-changing business landscape, Illumia Solutions envisions itself as the beacon of innovation."_

Zero target keywords. No canonical. Rewrite with relevant terms:

```ts
description:
  "Illumia Solutions — CISA, CISSP, CEH, CCIE certified IT services firm based in Kolkata, India. 20+ years collective experience in cybersecurity, cloud infrastructure, and open-source solutions across India, USA, Australia, and beyond.",
alternates: { canonical: "/about/" },
```

---

### 13. `robots.txt` missing `Bytespider` and `Google-Extended`

Current file explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot. Two notable omissions:

- **`Bytespider`** (ByteDance/TikTok training crawler) — not listed, falls through to `Allow: /` wildcard. Fine if intentional.
- **`Google-Extended`** (Gemini training crawler, separate from Googlebot) — not listed. If you don't want content used for Gemini AI training (distinct from Google Search indexing), add a `Disallow: /` rule for it.

**Important:** Blocking `Google-Extended` does NOT affect Google Search ranking or AI Overviews — only Gemini model training.

---

### 14. OG locale is `en_US` only

`src/app/layout.tsx:64` — site actively serves India, Philippines, Kenya, Mozambique, Australia. Single `en_US` locale in OG is acceptable for now but won't match regional intent signals for social sharing in those markets.

---

## Low Priority (backlog)

### 15. IndexNow not implemented

IndexNow lets you notify Bing/Yandex of URL changes instantly on deployment. Low effort, worthwhile for a 60+ page site that updates regularly.

Reference: [indexnow.org](https://www.indexnow.org)

---

### 16. `keywords` meta tag in root layout — dead weight

`src/app/layout.tsx:52` — Google has ignored the `keywords` meta tag since ~2009. Not harmful, but dead weight. Remove or leave as-is.

---

### 17. External Unsplash hero images

No control over CDN availability, image format, or caching headers. If Unsplash CDN has issues, above-fold hero images 404. Long-term: host critical above-fold images in `public/` with proper optimization.

---

### 18. Check `collaboration-solutions` for missing metadata export

Verify `src/app/collaboration-solutions/page.tsx` has an `export const metadata` block. Pages without metadata get default title/description from root layout, which causes duplicate meta tags across multiple pages.

---

## What's Working Well

- `robots.txt` is clean, sitemap is referenced, AI crawler strategy appears intentional
- `llms.txt` is present and well-structured — good GEO/AI visibility signal
- Organization + LocalBusiness schema in root layout with full address, phone, email
- Static export (`output: "export"`) means all content is in initial HTML — zero JS rendering issues for Googlebot
- `trailingSlash: true` — consistent URL form across all pages
- `metadataBase` set correctly in layout
- Accessibility skip-link present (`<a href="#main-content">`)
- Google Fonts loaded via Next.js font optimization — no layout shift from font swap
- 60+ pages in sitemap with priority and changeFrequency signals
- Title template `"%s | Illumia Solutions"` ensures consistent brand suffix on inner pages

---

## Top 3 Highest-ROI Fixes

| Priority | Fix | Why |
|----------|-----|-----|
| 1 | Add default OG image | Immediate social CTR lift on every shared link |
| 2 | Fix home page title to ≤60 chars | Prevents Google rewriting it with unpredictable text |
| 3 | Add `alternates: { canonical }` to all inner pages | Protects against duplicate content penalties |
