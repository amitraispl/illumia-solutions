# Claude Code Prompt — Illumia Solutions Case Study Pages

## TASK OVERVIEW

Build **three individual HTML case study pages** for Illumia Solutions. Each page covers a different case study and must use a **distinct layout**. All pages share the same design system (tokens, typography, components) but differ in page structure and visual hierarchy.

---

## DESIGN SYSTEM — MATCH THE EXISTING PROJECT

Before writing any code, audit the existing project for:
- CSS custom properties / design tokens (colors, spacing, font sizes, shadows, border-radius)
- Typography scale and font families (headings vs body vs labels)
- Component patterns: cards, badges, buttons, section containers, grids
- Header / footer / navigation structure
- Any existing utility classes or Tailwind config

Replicate those exactly. Do **not** introduce new fonts, new primary colors, or new spacing scales. If the project uses Tailwind, use those classes. If it uses CSS modules or a stylesheet, extend it.

**Illumia Solutions brand reference (from the case study documents):**
- Primary dark: deep navy (~`#0d1f3c` or match project variable)
- Accent: red/coral (~`#e63946` or match project variable)
- Background: white / very light grey
- Text: dark charcoal for body, white on dark sections
- Logo colors: blue wordmark + red shield icon

---

## GLOBAL RULES (apply to all three pages)

1. **No full-page images.** Images from the `/casestudies/` folder may appear as:
   - Partial-width sidebars (≤ 50% of viewport width)
   - Card thumbnails or section illustrations
   - Decorative crops (object-fit: cover, max-height constrained)
   - Never as hero backgrounds that fill the entire screen

2. **Architecture / concept diagrams must be built in HTML+CSS (or inline SVG).** Use boxes, arrows, badges, and connectors to visualise solution stacks and process flows — do NOT embed the original infographic images as the diagram.

3. **Three pages, three layouts.** See layout specs below.

4. **Images available:**
   - `ISPL Case Study Non-Profit Open Source Solutions Stack.png` → Page 1
   - `ISPL Case Study Open Source Cybersecurity Solution Stack.png` → Page 2
   - `ISPL Case study PCI DSS.jpeg` → Page 3
   All image paths should be relative, e.g. `./ISPL Case Study Non-Profit Open Source Solutions Stack.png`

5. **Icons:** Use an icon library already in the project (e.g. Heroicons, Lucide, Font Awesome). If none exists, use inline SVG or Unicode symbols. Do not add new icon CDN links unless the project already references that CDN.

6. **Responsive.** All three pages must be fully responsive (mobile-first, breakpoints at 768px and 1200px).

7. **Accessibility.** Semantic HTML5, proper heading hierarchy (one `<h1>` per page), `alt` text on all images, sufficient colour contrast.

---

## PAGE 1 — NON-PROFIT OPEN SOURCE SOLUTIONS STACK

**File:** `case-study-nonprofit-open-source.html`

**Case study summary:**
- Client: Leading Nonprofit Microfinance Institution, Philippines
- Headline: *Driving 50–65% IT Cost Reduction & Digital Transformation with Open Source Infrastructure*
- ~1,000 branches, ~1,000 employees, diverse geographies

### Layout: "Layered Sections with Stats Bar + Architecture Diagram"

```
┌─────────────────────────────────────────────────────────┐
│  NAV (shared header)                                    │
├─────────────────────────────────────────────────────────┤
│  HERO SECTION                                           │
│  [Label: Case Study]  [Tag: Non-Profit | Philippines]   │
│  H1: Driving 50–65% IT Cost Reduction…                  │
│  Subheadline paragraph                                  │
│  [2-column: text left | cropped image right (≤45%)]     │
├─────────────────────────────────────────────────────────┤
│  STATS STRIP (dark bg)                                  │
│  [~1000 Branches] [~1000 Employees] [Diverse Geos]      │
│  [Financial Inclusion at Scale]                         │
├─────────────────────────────────────────────────────────┤
│  THE CHALLENGE  (2-col grid, icon + text cards)         │
│  • High Licensing Costs  • Rising Cloud Expenses        │
│  • Fragmented Systems    • Scalability Constraints      │
├─────────────────────────────────────────────────────────┤
│  SOLUTION ARCHITECTURE DIAGRAM  (HTML/CSS/SVG)          │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  USERS (~1000 branches)                          │   │
│  │       │                                          │   │
│  │  ┌────▼──────────────────────────────────────┐  │   │
│  │  │  COLLABORATION & PRODUCTIVITY STACK        │  │   │
│  │  │  [Nextcloud] [Docuseal] [Odoo] [Carbonio]  │  │   │
│  │  └────────────────────────────────────────────┘  │   │
│  │       │                                          │   │
│  │  ┌────▼──────────────────────────────────────┐  │   │
│  │  │  BUSINESS APPLICATION STACK (ERPNext)      │  │   │
│  │  │  [HRM] [Payroll] [Project] [Reports]       │  │   │
│  │  └────────────────────────────────────────────┘  │   │
│  │       │                                          │   │
│  │  ┌────▼──────────────────────────────────────┐  │   │
│  │  │  CYBERSECURITY & GOVERNANCE STACK          │  │   │
│  │  │  [OpenVAS] [Suricata] [Wazuh] [Vault]      │  │   │
│  │  └────────────────────────────────────────────┘  │   │
│  │       │                                          │   │
│  │  ┌────▼──────────────────────────────────────┐  │   │
│  │  │  INFRASTRUCTURE LAYER                      │  │   │
│  │  │  [Proxmox] [ProxMox Backup] [HA Cluster]   │  │   │
│  │  └────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  BEFORE vs AFTER  (2-column comparison table/cards)     │
│  Left col = Before (red/warning tint)                   │
│  Right col = After (green/success tint)                 │
├─────────────────────────────────────────────────────────┤
│  OUTCOMES DELIVERED  (icon + metric cards, 3-col grid)  │
│  50–70% Software Licensing Reduction                    │
│  40–60% Cloud Infrastructure Cost Reduction             │
│  50–65% Total IT Cost Reduction                         │
├─────────────────────────────────────────────────────────┤
│  BUSINESS IMPACT AT SCALE  (horizontal icon-text row)   │
├─────────────────────────────────────────────────────────┤
│  QUOTE / CTA STRIP                                      │
│  "Open Source. Real Impact. Lasting Value."             │
│  [Contact Us]  [View All Case Studies]                  │
├─────────────────────────────────────────────────────────┤
│  FOOTER (shared)                                        │
└─────────────────────────────────────────────────────────┘
```

---

## PAGE 2 — OPEN SOURCE CYBERSECURITY SOLUTION STACK

**File:** `case-study-cybersecurity.html`

**Case study summary:**
- Client: Microfinance Institution, Philippines
- Headline: *Strengthening Cybersecurity & Compliance with Open Source Technologies*
- Securing and Empowering Impact at Scale
- End-to-end cybersecurity lifecycle covering 17+ locations

### Layout: "Two-Column Sticky Sidebar + Scrollable Main Content"

```
┌─────────────────────────────────────────────────────────┐
│  NAV                                                    │
├─────────────────────────────────────────────────────────┤
│  HERO (full-width, dark bg, NO background image)        │
│  [Breadcrumb: Home > Case Studies > Cybersecurity]      │
│  H1: Strengthening Cybersecurity & Compliance…          │
│  Subhead + two key badges [Secure] [Compliant]          │
├───────────────────────┬─────────────────────────────────┤
│  STICKY LEFT SIDEBAR  │  MAIN SCROLL AREA               │
│  (25% width)          │  (75% width)                    │
│                       │                                 │
│  ┌─ On this page ───┐ │  ─── CLIENT OVERVIEW ───        │
│  │ › The Challenge  │ │  One of the largest nonprofit   │
│  │ › Our Approach   │ │  microfinance institutions…     │
│  │ › Solution Stack │ │  [Stat cards in a 2×2 grid]     │
│  │ › Cyber Lifecycle│ │                                 │
│  │ › Key Outcomes   │ │  ─── THE CHALLENGE ───          │
│  │ › Business Impact│ │  Icon + text challenge cards    │
│  └──────────────────┘ │                                 │
│                       │  ─── OUR APPROACH ───           │
│  [Cropped case study  │  Brief paragraph                │
│   image, max 200px    │                                 │
│   tall, rounded]      │  ─── SOLUTION STACK ───         │
│                       │  Tool cards in a CSS grid:      │
│                       │  [Grafana] [OpenVAS] [Wazuh]    │
│                       │  [TargetHack] [Nextcloud] etc.  │
│                       │  Each card: icon, name, purpose │
│                       │                                 │
│                       │  ─── CYBERSECURITY LIFECYCLE ── │
│                       │  HTML/CSS horizontal flow:      │
│                       │                                 │
│                       │  [Identify]→[Protect]→[Detect]  │
│                       │       →[Respond]→[Recover]      │
│                       │                                 │
│                       │  Each step: icon, label,        │
│                       │  3 bullet sub-items below       │
│                       │                                 │
│                       │  ─── KEY OUTCOMES ───           │
│                       │  Large metric + label cards     │
│                       │                                 │
│                       │  ─── BUSINESS IMPACT ───        │
│                       │  Icon-text rows                 │
├───────────────────────┴─────────────────────────────────┤
│  CTA STRIP + FOOTER                                     │
└─────────────────────────────────────────────────────────┘
```

**On mobile:** sidebar collapses to a horizontal scrollable tab bar at the top; main content flows full-width below.

---

## PAGE 3 — PCI DSS COMPLIANCE

**File:** `case-study-pci-dss.html`

**Case study summary:**
- Client: Renowned Grocery Store Outlet Chain, Illinois, USA
- Headline: *PCI DSS Compliance for a Renowned Grocery Store Outlet Chain in Illinois*
- 17 locations, SAQ D (Level 2), zero downtime, achieved during peak pandemic period (2020)

### Layout: "Process-Driven Timeline Layout with 3-Column Content Blocks"

```
┌─────────────────────────────────────────────────────────┐
│  NAV                                                    │
├─────────────────────────────────────────────────────────┤
│  HERO (2-col, light bg)                                 │
│  Left (60%):                                            │
│  [Tag: PCI DSS Level 2 | Illinois, USA]                 │
│  H1: PCI DSS Compliance for a Renowned Grocery…        │
│  Lead paragraph (2–3 sentences)                         │
│  [4 achievement badges in a 2×2 micro-grid]             │
│    ✓ PCI DSS Level 2 Achieved                           │
│    ✓ On-Time Delivery with Zero Downtime                │
│    ✓ Significant Cost Savings                           │
│    ✓ Enhanced Security & Audit Readiness                │
│  Right (40%):                                           │
│  Cropped grocery store image (max-height: 380px,        │
│  object-fit: cover, rounded corners — NOT full page)    │
├─────────────────────────────────────────────────────────┤
│  3-COLUMN CONTENT SECTION                               │
│  ┌──────────────┬──────────────────┬──────────────────┐ │
│  │  BUSINESS    │  SOLUTIONS       │  KEY OUTCOMES    │ │
│  │  CHALLENGES  │  DELIVERED       │                  │ │
│  │  (red tint   │  (neutral)       │  (green/brand    │ │
│  │   header)    │                  │   tint header)   │ │
│  │              │                  │                  │ │
│  │  Icon + text │  Icon + text     │  Icon + metric   │ │
│  │  list items  │  list items      │  list items      │ │
│  └──────────────┴──────────────────┴──────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  END-TO-END PCI DSS COMPLIANCE LIFECYCLE (HTML diagram) │
│                                                         │
│  Section title: "Our Approach — End to End PCI DSS      │
│  Compliance Lifecycle"                                  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │                                                 │    │
│  │  ① ASSESS ──→ ② PLAN ──→ ③ REMEDIATE           │    │
│  │                                                 │    │
│  │           ──→ ④ VALIDATE ──→ ⑤ COMPLY           │    │
│  │                                                 │    │
│  │                    ──→ ⑥ CONTINUOUSLY IMPROVE   │    │
│  │                                                 │    │
│  │  Each step = numbered circle + label +          │    │
│  │  2-line description below                       │    │
│  │  Arrows are CSS borders or inline SVG           │    │
│  └─────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│  BUSINESS IMPACT (4-col icon+text cards)                │
│  [Continued credit card processing]                     │
│  [Enhanced customer trust & brand reputation]           │
│  [Scalable, cost-effective security architecture]        │
│  [Strong foundation for ongoing compliance]             │
├─────────────────────────────────────────────────────────┤
│  CLIENT TESTIMONIAL (full-width quote block)            │
│  "Illumia Solutions played a critical role…"            │
│  — IT Director, Grocery Store Chain (Illinois)          │
├─────────────────────────────────────────────────────────┤
│  CTA STRIP + FOOTER                                     │
└─────────────────────────────────────────────────────────┘
```

---

## SHARED COMPONENTS

### Architecture / Diagram Boxes
Build all diagrams in HTML+CSS (or inline SVG). Use:
- Rounded rectangles (`border-radius: 8px`) with light background + border
- Connecting arrows using CSS (`border-top + pseudo-element` triangle, or `border-left` for vertical), or `<svg>` `<line>` / `<polyline>` elements
- Layer labels as badges or column headers
- Colour-coded layers: each stack layer gets a distinct subtle background colour that stays within the project's palette

### Tool / Technology Cards
```
┌──────────────────────────────┐
│  [Icon]  Tool Name           │
│  Short purpose description   │
│  [Category badge]            │
└──────────────────────────────┘
```

### Stats / Metric Cards
```
┌──────────────────────────────┐
│         50–65%               │  ← large, bold
│   IT Cost Reduction          │  ← label
│  ───────────────────         │
│  ▲ vs. previous year         │  ← context note
└──────────────────────────────┘
```

### Before / After Comparison
Use a 2-column card layout — **not** a table:
- Left card: red/warning tint, "Before" header, bullet points
- Right card: green/success tint, "After" header, bullet points

---

## FILE STRUCTURE

```
casestudies/
├── case-study-nonprofit-open-source.html
├── case-study-cybersecurity.html
├── case-study-pci-dss.html
├── case-studies.css              ← shared styles for all 3 pages
│                                    (extend or import the project's main CSS)
├── ISPL Case Study Non-Profit Open Source Solutions Stack.png
├── ISPL Case Study Open Source Cybersecurity Solution Stack.png
└── ISPL Case study PCI DSS.jpeg
```

If the project already has a shared CSS/JS entry point, import it at the top of each HTML file and only add overrides in `case-studies.css`.

---

## TECHNICAL CONSTRAINTS

- **No full-page image backgrounds** (no `background-image` covering 100vw × 100vh)
- **No image-only sections** — every section must have at least text or an HTML-built diagram alongside any image
- Diagrams must be **HTML/CSS or inline SVG** — do not use `<img>` for diagrams or architecture drawings
- Keep external dependencies to what already exists in the project; do not add new CDN links for fonts, icon sets, or UI libraries not already used
- All pages must pass basic HTML validation (no unclosed tags, correct nesting)
- Images must have meaningful `alt` attributes

---

## CONTENT REFERENCE

All content (headlines, stats, bullet points, tool names, outcomes) should be extracted from the case study images provided. Do not invent data. Key content is summarised in the layout specs above. Cross-check against the source images for accuracy.

### Page 1 key content:
- Cost reductions: 50–70% software licensing, 40–60% cloud infrastructure, 50–65% total IT
- Open source stack layers: Collaboration (Nextcloud, Docuseal, Odoo, Carbonio), Business Apps (ERPNext: HRM, payroll, project management), Cybersecurity (OpenVAS, Suricata, Wazuh, Vault, Nessus), Infrastructure (Proxmox, ProxMox Backup Server, HA clustering)
- Savings: "Millions in savings over the next 2–5 years"

### Page 2 key content:
- Client visibility: Limited prior to engagement, audits non-existent
- Tools: Grafana, OpenVAS/Nessus, Wazuh, Metasploit/TargetHack, Nextcloud, Suricata, CrowdSec, SIEM, MFA, NMS, Vulnerability Scanner, Patch Management
- Lifecycle: Identify → Protect → Detect → Respond → Recover
- Outcomes: Stronger Security Posture, Compliance & Audit Ready, Significant Cost Savings, Operational Efficiency, Full License & Data Sovereignty

### Page 3 key content:
- 17 locations, SAQ D (Level 2), pandemic context (2020)
- Services: Assessment Management, Remediation Support, Network Segmentation, SIEM/MFA/NMS open source implementation, Internal VAPT, Documentation & Policies, Project Management, Training & Awareness
- Lifecycle: Assess → Plan → Remediate → Validate → Comply → Continuously Improve
- Quote: "Illumia Solutions played a critical role in helping us achieve PCI DSS compliance on time, within budget, and without impacting our business. Their expertise, leadership and use of open source technologies delivered exceptional value. — IT Director, Grocery Store Chain (Illinois)"

---

## DELIVERY CHECKLIST

Before considering the work done, verify:
- [ ] All three HTML files exist and open without console errors
- [ ] Each page uses a meaningfully different layout structure
- [ ] No page has a full-screen/full-page image
- [ ] All architecture diagrams are built in HTML/CSS or SVG (no infographic images used as diagrams)
- [ ] All pages are responsive at 375px, 768px, and 1440px
- [ ] Colour tokens and typography match the existing project
- [ ] Images have alt text
- [ ] Each page links back to a case studies index (use `#` if index page doesn't exist yet)
- [ ] Shared header and footer components are consistent across all three pages
