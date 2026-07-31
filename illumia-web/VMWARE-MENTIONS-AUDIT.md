# VMware Mention Audit & Remediation Plan

**Project:** illumia-web
**Generated:** 2026-07-31
**Purpose:** Remove all competitive/adversarial positioning against VMware. Retain VMware only as a *neutral, factual* platform reference (e.g. "we migrate from platforms such as VMware, Hyper-V, and Nutanix").

---

## 1. Executive Summary

| Metric | Count |
|---|---|
| Files containing VMware-family terms | **14** (source) + **2** image assets |
| Raw occurrences: `VMware` | **143** |
| Raw occurrences: `vSphere` | **31** |
| Raw occurrences: `vSAN` | **40** |
| Raw occurrences: `ESXi` | **18** |
| Raw occurrences: `vCenter` | **9** |
| Raw occurrences: `Broadcom` | **24** |
| Raw occurrences: `Veeam` (adjacent competitor risk) | **59** |
| **Total flagged occurrences** | **324** |
| URL routes containing `vmware` | **3** |
| Image filenames containing `vmware` | **2** |

### Sentiment Distribution (by mention)

| Sentiment | Count (approx.) | % | Action |
|---|---|---|---|
| 🔴 **Hostile / Attacking** — mocking, "tax", "escape", "the problem", blame framing | ~34 | 10% | **Rewrite or delete** |
| 🟠 **Adversarial-Comparative** — head-to-head "VMware vs Proxmox", "better than", feature-deficit tables | ~48 | 15% | **Rewrite as neutral or delete** |
| 🟡 **Negative-Contextual** — factual but frames VMware as the cause of client pain (cost, licensing, "untenable") | ~71 | 22% | **Neutralise wording** |
| 🟢 **Neutral-Technical** — VMware named only as source platform / tooling / hostname | ~121 | 37% | **Keep as-is** |
| ⚪ **Structural** — slugs, filenames, IDs, schema `@id`, sitemap paths | ~50 | 16% | **Keep (SEO), or rename with 301s** |

### Where the damage is concentrated

1. **`/proxmox-migration`** — the single most hostile page. Contains "Escape the VMware Tax", "The Broadcom Problem", "Broadcom bought VMware. Your budget paid for it.", and a 6-row deficit comparison table. **This page needs a full repositioning, not edits.**
2. **`TechSpotlight.tsx`** — the homepage card repeats "Escape the VMware Tax" + "10× increases". Visible sitewide.
3. **3 case studies** — the pain narrative is inherently "VMware licensing became untenable". This is *client-attributed fact* and is defensible, but the current phrasing editorialises. Needs de-editorialising, not deletion.
4. **`Navbar.tsx`** — mega-menu descriptions echo the case-study framing sitewide.

---

## 2. Legend

**Sentiment codes**

- 🔴 `HOSTILE` — Directly attacks, mocks, or blames VMware/Broadcom. **Must go.**
- 🟠 `ADVERSARIAL` — Positions VMware as the loser in a comparison. **Must go or become neutral.**
- 🟡 `NEGATIVE` — Factual, but negative-toned toward VMware. **Soften.**
- 🟢 `NEUTRAL` — Safe as-is. Platform named factually.
- ⚪ `STRUCTURAL` — Code identifier, path, filename, schema. No prose risk.

**Risk codes**

- `R3` High — publicly visible headline/marketing copy or SEO metadata.
- `R2` Medium — body copy, card descriptions.
- `R1` Low — internal identifiers, alt text, comments.

**Approved neutral vocabulary (use these replacements consistently)**

| ❌ Do not use | ✅ Use instead |
|---|---|
| "Escape the VMware Tax" | "Proxmox VE Migration & Deployment" |
| "The Broadcom Problem" | "Why Organisations Are Evaluating Proxmox VE" |
| "VMware tax" / "Broadcom tax" | "hypervisor licensing spend" |
| "Broadcom bought VMware. Your budget paid for it." | "Re-evaluating your virtualisation platform?" |
| "VMware Alternative" (as a service type) | "Open-Source Virtualisation" |
| "Escalating VMware Licensing Costs" | "A Platform & Budget Review" |
| "VMware became financially untenable" | "The client elected to review their virtualisation licensing strategy" |
| "left VMware entirely" | "consolidated onto Proxmox VE" |
| "VMware fully decommissioned" | "Migration completed across all nodes" |
| "Savings vs VMware" | "Typical licensing cost reduction" |
| "VMware Today \| Proxmox VE" (deficit table) | Delete the table; replace with a Proxmox-only capability list |
| "no Broadcom price hikes" | "predictable, published subscription pricing" |
| "Broadcom's acquisition of VMware triggered…" | "The client's licensing renewal cycle prompted a platform review" |
| "migration from VMware" (as a service) | "migration from VMware, Hyper-V, Nutanix, XenServer and other platforms" |

**Golden rule for every remaining mention:** VMware may appear only as (a) a named *source platform* in a migration sentence, (b) a *tooling* reference (e.g. "Proxmox VE's built-in ESXi import tool"), or (c) a *listed platform* among peers. Never as a subject with a negative predicate.

---

## 3. File-by-File Remediation Checklist

> Claude Code: tick each `[ ]` → `[x]` as it is changed. Do not tick until the edit is applied **and** `npm run build` passes.

---

### 3.1 `src/app/proxmox-migration/page.tsx` — 🔴 HIGHEST PRIORITY (9 lines) ✅ DONE

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [x] | 5 | `title: "Proxmox VE Migration — Escape the VMware Tax"` | 🔴 HOSTILE | R3 | `title: "Proxmox VE Migration & Deployment — Illumia Solutions"` |
| [x] | 7 | `description: "End-to-end migration from VMware ESXi/vSphere to Proxmox…"` | 🟡 NEGATIVE | R3 | `"End-to-end migration to Proxmox Virtual Environment from VMware, Hyper-V, Nutanix, and other platforms. Enterprise capabilities — VMs, containers, HA clusters, live migration — with predictable open-source economics."` |
| [x] | 16 | `serviceType: "VMware Alternative"` | 🟠 ADVERSARIAL | R3 | `serviceType: "Virtualisation Migration Services"` |
| [x] | 18 | Same description repeated in JSON-LD | 🟡 NEGATIVE | R3 | Mirror the line-7 rewrite exactly (keep both in sync) |
| [x] | 31 | `badge="VMware Alternative"` | 🟠 ADVERSARIAL | R3 | `badge="Proxmox Silver Partner"` |
| [x] | 33 | `titleHighlight="Escape the VMware Tax."` | 🔴 HOSTILE | R3 | `titleHighlight="Enterprise Virtualisation, Open Source."` |
| [x] | 34 | `description="Broadcom's VMware acquisition pushed enterprise hypervisor licensing through the roof — many organisations have seen 10× cost increases overnight…"` | 🔴 HOSTILE | R3 | `"Proxmox Virtual Environment delivers enterprise virtualisation — KVM-based VMs, LXC containers, HA clusters, Ceph storage, live migration — under an open-source AGPL licence. Illumia is a Proxmox Silver Partner and handles the entire migration end-to-end with zero data loss, from VMware, Hyper-V, Nutanix, or bare metal."` |
| [x] | 39 | `closingText="…migrations that retire VMware licensing… so you eliminate the Broadcom tax, not your uptime SLAs."` | 🔴 HOSTILE | R3 | `"…delivers production-grade migrations to Proxmox VE without compromising on enterprise capability. From workload assessment and design to cutover, hardening, and post-migration support, our engineers cover every stage — so your uptime SLAs are never at risk."` |
| [x] | 46 | `"Eliminate per-CPU, per-core, and per-VM licensing fees overnight — including vSphere, vCenter, and vSAN line items."` | 🟠 ADVERSARIAL | R2 | `"Proxmox VE is fully open-source under AGPL — no per-CPU, per-core, or per-VM licensing fees. Support is purchased separately and only where you need it."` |
| [x] | 50 | `"No bundled add-ons, no surprise renewals, no Broadcom price hikes."` | 🔴 HOSTILE | R2 | `"Pay only for the support tier you actually need — published pricing, no bundled add-ons."` |
| [x] | 63 | `"Match or exceed your existing vSphere SLAs."` | 🟠 ADVERSARIAL | R2 | `"Native HA with automated failover, live migration, and rolling upgrades — designed to meet your existing availability SLAs."` |
| [x] | 72 | `"Replace expensive vSAN clusters with commodity hardware."` | 🟠 ADVERSARIAL | R2 | `"Built-in Ceph for hyperconverged, software-defined block and object storage on commodity hardware."` |
| [ ] | 84 | `label: "VMware Importer"` | 🟢 NEUTRAL | R1 | **Keep** — factual product feature name. Optionally `"Guest Import Tooling"`. |
| [ ] | 85 | `"Proxmox VE's native vCenter importer pulls VMs directly from your existing ESXi or vSphere environment…"` | 🟢 NEUTRAL | R1 | **Keep** — this is the canonical safe usage pattern. |
| [x] | 111 | `"no thick client, no separate vCenter VM, no per-admin licence."` | 🟠 ADVERSARIAL | R2 | `"Manage the entire cluster from a browser — no thick client and no separate management appliance required."` |

---

### 3.2 `src/app/proxmox-migration/ProxmoxContent.tsx` — 🔴 HIGHEST PRIORITY (9 lines + 1 section) ✅ DONE

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 24 | `esxi: "/images/proxmox-migration/esxi.png"` | ⚪ STRUCTURAL | R1 | **Keep** — it is a genuine screenshot of the import tool. |
| [x] | **78–85** | `const COMPARISON = [...]` — 6-row deficit table | 🔴 HOSTILE | R3 | **DELETE the entire array and the section that renders it (lines ~800–818).** Every row is a competitor-deficit claim: "Free ESXi hypervisor tier discontinued", "DRS is an Enterprise Plus–only feature", "vSAN, NSX, Aria bundled only in higher-tier editions", "No backup tool bundled with vSphere itself", "Per-core licensing with a 16-core minimum per CPU", "Feature access split across four consolidated SKUs". **Replace with a single-column `PROXMOX_CAPABILITIES` list stating only what Proxmox VE includes.** |
| [x] | 79 | `"Free ESXi hypervisor tier discontinued"` | 🔴 HOSTILE | R3 | Delete (see above) |
| [x] | 80 | `"DRS is an Enterprise Plus–only feature, not in Standard"` | 🔴 HOSTILE | R3 | Delete |
| [x] | 81 | `"vSAN, NSX, Aria bundled only in higher-tier editions"` | 🔴 HOSTILE | R3 | Delete |
| [x] | 82 | `"No backup tool bundled with vSphere itself"` | 🔴 HOSTILE | R3 | Delete |
| [x] | 83 | `"Per-core licensing with a 16-core minimum per CPU"` | 🔴 HOSTILE | R3 | Delete |
| [x] | 84 | `"Feature access split across four consolidated SKUs (VCF, VVF, Standard, Enterprise Plus)"` | 🔴 HOSTILE | R3 | Delete |
| [ ] | 172 | `"Node-by-node — VMware stays live throughout"` | 🟢 NEUTRAL | R1 | **Keep** — or generalise to `"Node-by-node — your source cluster stays live throughout"` for platform-neutrality. |
| [x] | 225 | `"…no seat counts, and no Broadcom renewal surprises."` | 🔴 HOSTILE | R2 | `"…no per-CPU core fees and no seat counts."` |
| [x] | 231 | `{ v: "60–80%", l: "Savings vs VMware" }` | 🟠 ADVERSARIAL | R3 | `{ v: "60–80%", l: "Typical Licensing Cost Reduction" }` |
| [ ] | 657 | `{/* Row 1: VMware Import — text left, screenshot right */}` | ⚪ STRUCTURAL | R1 | Code comment. Optionally → `{/* Row 1: Guest Import */}` |
| [ ] | 674 | `"Import directly from VMware ESXi or vSphere with the native vCenter importer, preserving disks, MACs, and network configuration."` | 🟢 NEUTRAL | R1 | **Keep** — canonical safe usage. Optionally broaden: `"Import directly from VMware ESXi/vSphere, Hyper-V, or OVF/OVA…"` |
| [ ] | 677 | `"Direct ESXi/vCenter import"` | 🟢 NEUTRAL | R1 | **Keep** |
| [ ] | 686 | `alt="Proxmox VMware ESXi Guest Import"` | 🟢 NEUTRAL | R1 | **Keep** — accurate alt text for a real UI screenshot. |
| [x] | 710 | `"Match or exceed your existing vSphere HA SLAs without a vCenter licensing line item."` | 🟠 ADVERSARIAL | R2 | `"Corosync quorum, automated fencing, and per-VM migration policies, with dynamic load balancing across nodes — built into the platform."` |
| [x] | 740 | `"…replaces expensive vSAN clusters on existing commodity hardware."` | 🟠 ADVERSARIAL | R2 | `"Hyperconverged Ceph block and object storage replicated across nodes on commodity hardware."` |
| [x] | **778–820** | Entire `{/* BROADCOM PROBLEM */}` section | 🔴 HOSTILE | R3 | **DELETE OR FULLY REPLACE the section.** See detail below. |
| [x] | 785 | `"The Broadcom Problem"` (eyebrow) | 🔴 HOSTILE | R3 | → `"Why Proxmox VE"` |
| [x] | 788 | `"Broadcom bought VMware. Your budget paid for it."` (H2) | 🔴 HOSTILE | R3 | → `"Enterprise virtualisation without licensing complexity."` |
| [x] | 791 | `"Post-acquisition pricing killed perpetual licences, collapsed bundles… 5–10× cost increases overnight. The platform is identical — only the invoice changed."` | 🔴 HOSTILE | R3 | → `"Organisations reviewing their virtualisation strategy increasingly evaluate open-source platforms for cost predictability and architectural control. Proxmox VE is a mature, production-grade option with commercial support available."` |
| [x] | 801 | Column header `"VMware Today"` | 🔴 HOSTILE | R3 | Delete along with the comparison grid; make it a single-column "What Proxmox VE Includes" list. |
| [x] | 827 | `"VMware to Proxmox — zero data loss."` (H2) | 🟡 NEGATIVE | R3 | → `"Zero data loss migration methodology."` |
| [x] | 872 | `"Ready to end the VMware tax?"` (CTA H2) | 🔴 HOSTILE | R3 | → `"Ready to plan your Proxmox migration?"` |

**Detailed rewrite for the deleted "Broadcom Problem" section (lines ~778–820):**

Replace the two-column left-editorial/right-deficit-table layout with a **single positive value section**:

- Eyebrow: `Why Proxmox VE`
- Headline: `Enterprise virtualisation, open source.`
- Body: `Proxmox VE runs production workloads, meets enterprise HA requirements, and integrates with the same automation toolchain your team already uses — under an AGPL licence with optional commercial subscription support.`
- Right column: a **single-column** capability list (Ceph HCI storage · Cluster HA & fencing · Live migration · LXC + KVM · Integrated firewall & SDN · Proxmox Backup Server · Full REST API · Cluster Resource Scheduler) — **no "before" column, no competitor named.**

---

### 3.3 `src/components/TechSpotlight.tsx` — 🔴 HIGH (sitewide homepage card, 3 lines) ✅ DONE

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [x] | 108 | `VMware Alternative` (eyebrow badge) | 🟠 ADVERSARIAL | R3 | → `Proxmox Silver Partner` |
| [x] | 113 | `Escape the VMware Tax.{" "}` + `<span>For Good.</span>` | 🔴 HOSTILE | R3 | → `Enterprise Virtualisation.{" "}` + `<span>Open Source.</span>` |
| [x] | 117 | `"Broadcom's VMware acquisition sent licensing costs through the roof — some enterprises saw 10× increases overnight. Proxmox VE delivers identical enterprise virtualisation…"` | 🔴 HOSTILE | R3 | → `"Proxmox VE delivers enterprise virtualisation — VMs, containers, HA clusters, live migration — on an open-source platform with optional commercial support. As a Proxmox Silver Partner, we handle migrations end-to-end from VMware, Hyper-V, and other platforms, with zero data loss."` |

---

### 3.4 `src/components/Navbar.tsx` — 🟠 HIGH (sitewide mega-menu, 17 lines) ✅ DONE (prose edits; structural IDs/routes left as-is per §5 Option A)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 18 | `\| "proxmox-vmware"` (union type) | ⚪ STRUCTURAL | R1 | Rename to `"proxmox-lbf"` only if you also rename the route; otherwise keep. |
| [ ] | 90 | `id: "proxmox-vmware"` | ⚪ STRUCTURAL | R1 | Same as above — must match line 18 and 225. |
| [ ] | 91 | `href: "/case-studies/proxmox-vmware-migration/"` | ⚪ STRUCTURAL | R1 | **Keep** unless route renamed (see §5 SEO note). |
| [x] | 92 | `shortLabel: "VMware → Proxmox VE"` | 🟡 NEGATIVE | R3 | → `"Hypervisor Migration — LBF"` or `"Proxmox VE Migration"` |
| [x] | 94 | `label: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | 🟡 NEGATIVE | R3 | → `"80% Licensing Cost Reduction via Proxmox VE Migration"` |
| [x] | 96 | `"Lifebank Foundation Inc. escaped unsustainable post-Broadcom VMware licensing via a phased, node-by-node migration…"` | 🔴 HOSTILE | R3 | → `"Lifebank Foundation Inc. consolidated onto Proxmox VE via a phased, node-by-node migration — zero new hardware procured, zero VMs lost, every downtime threshold met."` |
| [ ] | 100 | `"Rolling node-by-node migration — VMware live throughout"` | 🟢 NEUTRAL | R2 | **Keep** — factual method description, or → `"source cluster live throughout"`. |
| [ ] | 104 | `"/images/case-studies/1-vmware-migration-hero.jpg"` | ⚪ STRUCTURAL | R1 | Rename file + reference together, or keep (see §4). |
| [ ] | 125 | `href: "/case-studies/vmware-proxmox-migration-forceten/"` | ⚪ STRUCTURAL | R1 | **Keep** unless route renamed |
| [x] | 126 | `shortLabel: "VMware → Proxmox (FTT)"` | 🟡 NEGATIVE | R3 | → `"Proxmox VE Migration (FTT)"` |
| [x] | 128 | `label: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | 🟡 NEGATIVE | R3 | → `"80% Licensing Cost Reduction via Proxmox VE Migration"` |
| [x] | 130 | `"Force Ten Technologies… escaped unsustainable post-Broadcom VMware licensing…"` | 🔴 HOSTILE | R3 | → `"Force Ten Technologies, a financial software developer, consolidated onto Proxmox VE via a phased, node-by-node migration — zero new hardware, zero VMs lost, every downtime threshold met."` |
| [ ] | 134 | `"Rolling node-by-node migration — VMware live throughout"` | 🟢 NEUTRAL | R2 | **Keep** or generalise |
| [ ] | 142 | `href: "/case-studies/vmware-vsan-proxmox-ceph/"` | ⚪ STRUCTURAL | R1 | **Keep** unless route renamed |
| [x] | 143 | `shortLabel: "vSAN → Proxmox Ceph"` | 🟡 NEGATIVE | R3 | → `"HCI Re-Platform — Ceph"` |
| [x] | 145 | `label: "VMware vSAN to Proxmox VE Ceph Migration with Zero New Hardware"` | 🟡 NEGATIVE | R3 | → `"Hyper-Converged Re-Platform to Proxmox VE + Ceph with Zero New Hardware"` |
| [x] | 147 | `"Data Consultants Corporation left VMware entirely after Broadcom's licensing overhaul — ISPL re-platformed a live vSphere + vSAN cluster…"` | 🔴 HOSTILE | R3 | → `"Data Consultants Corporation consolidated onto Proxmox VE with Ceph — ISPL re-platformed a live hyper-converged cluster via a phased node-liberation strategy, on existing hardware, sub-24-hour downtime."` |
| [x] | 151 | `"Ceph for self-healing hyper-converged storage — vSAN equivalence"` | 🟡 NEGATIVE | R2 | → `"Ceph for self-healing hyper-converged storage"` |
| [ ] | 225 | `"proxmox-vmware": <ServerIcon />` | ⚪ STRUCTURAL | R1 | Keep in sync with lines 18 & 90 |

---

### 3.5 `src/app/case-studies/page.tsx` — 🟡 HIGH (index page, 17 lines)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 81 | `href: "/case-studies/proxmox-vmware-migration"` | ⚪ STRUCTURAL | R1 | Keep unless route renamed |
| [ ] | 83 | `title: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | 🟡 NEGATIVE | R3 | → `"80% Licensing Cost Reduction via Proxmox VE Migration"` |
| [ ] | 85 | `"Lifebank Foundation Inc. faced unsustainable VMware licensing costs following Broadcom's acquisition."` | 🔴 HOSTILE | R3 | → `"Lifebank Foundation Inc. undertook a virtualisation platform review as part of a licensing cost-optimisation programme. ISPL delivered a phased, rolling migration to Proxmox VE — zero new hardware, zero VMs lost, every downtime threshold met."` |
| [ ] | 87 | `"…decommissioning each VMware host, commissioning it as a Proxmox VE node…"` | 🟢 NEUTRAL | R2 | **Keep** — factual method. |
| [ ] | 89 | `"/images/case-studies/1-vmware-migration-hero.jpg"` | ⚪ STRUCTURAL | R1 | See §4 |
| [ ] | 96 | `"Node-by-node rolling migration — VMware cluster live throughout"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 125 | `href: "/case-studies/vmware-proxmox-migration-forceten"` | ⚪ STRUCTURAL | R1 | Keep unless renamed |
| [ ] | 127 | `title: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | 🟡 NEGATIVE | R3 | → `"80% Licensing Cost Reduction via Proxmox VE Migration"` |
| [ ] | 129 | `"…faced unsustainable VMware licensing after Broadcom's acquisition."` | 🔴 HOSTILE | R3 | → `"Force Ten Technologies Pvt. Ltd., a financial software developer, initiated a virtualisation licensing review. ISPL delivered a phased, rolling migration to Proxmox VE…"` |
| [ ] | 131 | `"…decommissioning each VMware host…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 140 | `"Node-by-node rolling migration — VMware cluster live throughout"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 141 | `"Proxmox VE built-in VMware migration tooling — no third-party utilities"` | 🟢 NEUTRAL | R2 | **Keep** — product feature reference. |
| [ ] | 147 | `href: "/case-studies/vmware-vsan-proxmox-ceph"` | ⚪ STRUCTURAL | R1 | Keep unless renamed |
| [ ] | 149 | `title: "VMware vSAN to Proxmox VE Ceph Migration with Zero New Hardware"` | 🟡 NEGATIVE | R3 | → `"Hyper-Converged Re-Platform to Proxmox VE + Ceph with Zero New Hardware"` |
| [ ] | 151 | `"…left VMware entirely after Broadcom's licensing overhaul. ISPL re-platformed a live hyper-converged cluster from vSphere with vSAN to Proxmox VE with Ceph…"` | 🔴 HOSTILE | R3 | → `"Data Consultants Corporation, a US-based IT services firm, consolidated its virtualisation estate onto Proxmox VE. ISPL re-platformed a live hyper-converged cluster to Proxmox VE with Ceph — on existing hardware, sub-24-hour downtime."` |
| [ ] | 153 | `"…nodes still active in the vSAN cluster… VMs were shifted off the vSAN pool…"` | 🟢 NEUTRAL | R2 | **Keep** — technical method detail. |
| [ ] | 157 | `{ value: "vSAN→Ceph", label: "Storage Re-Platformed" }` | 🟡 NEGATIVE | R2 | → `{ value: "HCI→Ceph", label: "Storage Re-Platformed" }` |
| [ ] | 163 | `"Ceph for self-healing hyper-converged storage — vSAN equivalence"` | 🟡 NEGATIVE | R2 | → `"Ceph for self-healing hyper-converged storage"` |
| [ ] | 197 | `{ label: "Infrastructure", count: "VMware · Proxmox · HCI" }` | 🟢 NEUTRAL | R2 | **Keep** — this is the ideal neutral pattern (platform listed among peers). Optionally expand: `"VMware · Hyper-V · Proxmox · HCI"`. |

---

### 3.6 `src/app/case-studies/proxmox-vmware-migration/layout.tsx` — 🟡 (8 lines, SEO metadata)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 4 | `title: "VMware to Proxmox VE Migration — Lifebank Foundation"` | 🟡 NEGATIVE | R3 | → `"Proxmox VE Migration — Lifebank Foundation"` |
| [ ] | 6 | `"…by migrating a multi-node VMware vSphere cluster to Proxmox VE…"` | 🟢 NEUTRAL | R3 | **Keep** — canonical safe pattern (source platform named factually). |
| [ ] | 7 | `canonical: "/case-studies/proxmox-vmware-migration/"` | ⚪ STRUCTURAL | R1 | **Keep** — do not break canonical unless you ship a 301 (see §5). |
| [ ] | 13 | `"@id": ".../proxmox-vmware-migration/#article"` | ⚪ STRUCTURAL | R1 | Keep in sync with canonical |
| [ ] | 14 | `headline: "VMware to Proxmox VE Migration — Lifebank Foundation"` | 🟡 NEGATIVE | R3 | Mirror line 4 |
| [ ] | 16 | Duplicate description | 🟢 NEUTRAL | R3 | Mirror line 6 |
| [ ] | 17 | `url:` | ⚪ STRUCTURAL | R1 | Keep in sync |
| [ ] | 21 | `image: ".../1-vmware-migration-hero.jpg"` | ⚪ STRUCTURAL | R1 | See §4 |

---

### 3.7 `src/app/case-studies/proxmox-vmware-migration/page.tsx` — 🟡 (18 lines)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 14 | `"/images/case-studies/1-vmware-migration-hero.jpg"` | ⚪ STRUCTURAL | R1 | See §4 |
| [ ] | 16 | `"/images/case-studies/2-vmware-migration-sidebar.jpg"` | ⚪ STRUCTURAL | R1 | See §4 |
| [ ] | 37 | `title: "Escalating VMware Licensing Costs"` | 🔴 HOSTILE | R3 | → `"Licensing Cost Review"` |
| [ ] | 38 | `"Broadcom's acquisition of VMware triggered a shift to subscription-based pricing with considerably higher price points — making VMware financially untenable for Lifebank with no proportional gain in value."` | 🔴 HOSTILE | R3 | → `"As part of a wider cost-optimisation programme, Lifebank reviewed its virtualisation licensing model against projected renewal costs and set a target to materially reduce recurring platform spend."` |
| [ ] | 54 | `"A subset of VMs existed only within the Veeam backup repository with no active presence in VMware."` | 🟢 NEUTRAL | R2 | **Keep** — purely factual state description. |
| [ ] | 61 | `"…Proxmox VE — an enterprise-grade open-source hypervisor with native VMware migration tooling, cluster HA, full SAN compatibility…"` | 🟢 NEUTRAL | R2 | **Keep** — ideal usage. |
| [ ] | 65 | `"…each host decommissioned from VMware, commissioned as a Proxmox VE node…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 69 | `"…without disrupting active VMware workloads during the transition."` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 85 | `"ISPL identified the VMware hosts running lowest-priority VMs… removed two hosts from vSphere…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 90 | `"…migrated using Proxmox VE's built-in VMware migration tooling via an offline method…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 95 | `"…Repeated until VMware vSphere ceased to exist entirely."` | 🟠 ADVERSARIAL | R2 | → `"…Repeated until all hosts had been re-provisioned as Proxmox VE nodes."` ("ceased to exist" is triumphalist.) |
| [ ] | 116 | `"VMware vSphere cluster with high-cost subscription licensing"` (Before-state list) | 🟡 NEGATIVE | R2 | → `"Multi-node VMware vSphere cluster under subscription licensing"` (drop "high-cost") |
| [ ] | 188 | `Achieving <span>80% Licensing Cost Reduction</span> via VMware to Proxmox VE Migration` (H1) | 🟡 NEGATIVE | R3 | → `Achieving <span>80% Licensing Cost Reduction</span> via Proxmox VE Migration` |
| [ ] | 194 | `"Following Broadcom's VMware acquisition, Lifebank faced unsustainable licensing costs."` | 🔴 HOSTILE | R3 | → `"Facing a virtualisation licensing renewal, Lifebank set out to reduce recurring platform costs without compromising availability."` |
| [ ] | 195 | `"ISPL delivered a phased, rolling migration from VMware vSphere and Veeam to Proxmox VE and…"` | 🟢 NEUTRAL | R3 | **Keep** |
| [ ] | 199 | Badge array includes `"VMware Migration"` | 🟢 NEUTRAL | R2 | **Keep** — or `"Hypervisor Migration"` for neutrality. |
| [ ] | 294 | `"…built around a multi-node VMware vSphere cluster hosting a significant…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 304 | `"But it was entirely dependent on VMware's licensing model — which,"` | 🔴 HOSTILE | R3 | → `"The environment was technically sound. The driver for change was commercial rather than technical: leadership targeted a structural reduction in recurring platform licensing."` (merge 304+305) |
| [ ] | 305 | `"following Broadcom's acquisition, was about to become a significant financial liability."` | 🔴 HOSTILE | R3 | Delete — folded into the 304 rewrite. |

---

### 3.8 `src/app/case-studies/vmware-proxmox-migration-forceten/layout.tsx` — 🟡 (7 lines)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 4 | `title: "VMware to Proxmox VE Migration — Force Ten Technologies"` | 🟡 NEGATIVE | R3 | → `"Proxmox VE Migration — Force Ten Technologies"` |
| [ ] | 6 | `"…migrating a multi-node VMware vSphere cluster and Veeam to Proxmox VE and PBS…"` | 🟢 NEUTRAL | R3 | **Keep** |
| [ ] | 7 | `canonical` | ⚪ STRUCTURAL | R1 | Keep (see §5) |
| [ ] | 13 | `"@id"` | ⚪ STRUCTURAL | R1 | Keep in sync |
| [ ] | 14 | `headline: "VMware to Proxmox VE Migration — Force Ten Technologies"` | 🟡 NEGATIVE | R3 | Mirror line 4 |
| [ ] | 16 | Duplicate description | 🟢 NEUTRAL | R3 | Mirror line 6 |
| [ ] | 17 | `url` | ⚪ STRUCTURAL | R1 | Keep in sync |

---

### 3.9 `src/app/case-studies/vmware-proxmox-migration-forceten/page.tsx` — 🟡 (17 lines)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 37 | `title: "Escalating VMware Licensing Costs"` | 🔴 HOSTILE | R3 | → `"Licensing Cost Review"` |
| [ ] | 38 | `"Broadcom's acquisition of VMware restructured the licensing model… a sharp, unavoidable increase in expenditure for FTT with no proportional gain in functionality or business value."` | 🔴 HOSTILE | R3 | → `"FTT's platform licensing was due for renewal under a subscription model. Leadership targeted a structural reduction in recurring virtualisation spend without reducing capability."` |
| [ ] | 42 | `"…Veeam Backup & Replication — a capable solution, but one adding licensing overhead on top of VMware."` | 🟡 NEGATIVE | R2 | → `"FTT's data protection was built around Veeam Backup & Replication. With the platform changing, consolidating backup onto a natively integrated tool removed a separate licensing line."` (Note: Veeam is also a partner-sensitive vendor — soften too.) |
| [ ] | 54 | `"A subset of VMs existed only within the Veeam backup repository with no active presence in VMware."` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 61 | `"…per-host licensing elimination, native VMware migration tooling, cluster-native HA…"` | 🟡 NEGATIVE | R2 | → `"…Proxmox VE was recommended for its open-source licensing model, native guest import tooling for VMware environments, cluster-native HA and live migration…"` |
| [ ] | 65 | `"…the VMware cluster staying operational throughout…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 69 | `"…without disrupting active VMware workloads during the transition."` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 85 | `"…identified the VMware hosts running lowest-priority VMs… removed from vSphere…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 90 | `"…migrated using Proxmox VE's built-in VMware migration tool — no third-party utilities."` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 95 | `"…Repeated until the VMware vSphere environment ceased to exist entirely."` | 🟠 ADVERSARIAL | R2 | → `"…Repeated until all hosts had been re-provisioned as Proxmox VE nodes."` |
| [ ] | 116 | `"VMware vSphere cluster with high-cost subscription licensing"` | 🟡 NEGATIVE | R2 | → `"Multi-node VMware vSphere cluster under subscription licensing"` |
| [ ] | 188 | H1 `…via VMware to Proxmox VE Migration` | 🟡 NEGATIVE | R3 | → `…via Proxmox VE Migration` |
| [ ] | 194 | `"Following Broadcom's VMware acquisition, Force Ten Technologies — a software developer serving…"` | 🔴 HOSTILE | R3 | → `"Facing a virtualisation licensing renewal, Force Ten Technologies — a software developer serving…"` |
| [ ] | 196 | `"ISPL delivered a phased, rolling migration from VMware vSphere and Veeam to Proxmox VE and…"` | 🟢 NEUTRAL | R3 | **Keep** |
| [ ] | 200 | Badge array includes `"VMware Migration"` | 🟢 NEUTRAL | R2 | **Keep** or → `"Hypervisor Migration"` |
| [ ] | 296 | `"IT infrastructure built around a multi-node VMware vSphere cluster — hosting everything from…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 306 | `"But it was entirely dependent on VMware's licensing model — which,"` | 🔴 HOSTILE | R3 | → `"The environment was technically sound. The driver for change was commercial: a structural reduction in recurring licensing was the objective."` (merge 306+307) |
| [ ] | 307 | `"following Broadcom's acquisition, was about to become a significant financial concern."` | 🔴 HOSTILE | R3 | Delete — folded into 306 rewrite. |

---

### 3.10 `src/app/case-studies/vmware-vsan-proxmox-ceph/layout.tsx` — 🟡 (7 lines)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 4 | `title: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp"` | 🟡 NEGATIVE | R3 | → `"Hyper-Converged Migration to Proxmox VE + Ceph — Data Consultants Corp"` |
| [ ] | 6 | `"…migrated Data Consultants Corporation from VMware vSphere with vSAN to Proxmox VE with Ceph — a phased node-liberation strategy…"` | 🟢 NEUTRAL | R3 | **Keep** — factual source-platform naming. |
| [ ] | 7 | `canonical` | ⚪ STRUCTURAL | R1 | Keep (see §5) |
| [ ] | 13 | `"@id"` | ⚪ STRUCTURAL | R1 | Keep in sync |
| [ ] | 14 | `headline` (duplicate of line 4) | 🟡 NEGATIVE | R3 | Mirror line 4 |
| [ ] | 16 | Duplicate description | 🟢 NEUTRAL | R3 | Mirror line 6 |
| [ ] | 17 | `url` | ⚪ STRUCTURAL | R1 | Keep in sync |

---

### 3.11 `src/app/case-studies/vmware-vsan-proxmox-ceph/page.tsx` — 🟠 (17 lines — most vSAN-heavy)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 29 | `{ value: "vSAN→Ceph", label: "Storage Re-Platformed" }` | 🟡 NEGATIVE | R2 | → `{ value: "HCI→Ceph", label: "Storage Re-Platformed" }` |
| [ ] | 38 | `"Broadcom's transition from perpetual to mandatory subscription-based licensing left DCC facing renewal costs disproportionate to business value delivered… a direct threat to profitability."` | 🔴 HOSTILE | R3 | → `"As an IT services organisation operating on defined margins, DCC targeted a structural reduction in recurring infrastructure licensing to protect profitability at its next renewal cycle."` |
| [ ] | 54 | `"The existing Veeam Backup & Replication setup was tied to the VMware ecosystem. Retaining it post-migration meant carrying forward a licensing cost with limited justification…"` | 🟡 NEGATIVE | R2 | → `"The existing Veeam Backup & Replication deployment was integrated with the source platform. Post-migration, a backup tool natively integrated with Proxmox VE was required."` |
| [ ] | 61 | `"…paired with Ceph… for its functional equivalence to vSAN: redundant, self-healing, hyper-converged storage with no proprietary array dependency."` | 🟠 ADVERSARIAL | R2 | → `"…paired with Ceph as the distributed storage backend: redundant, self-healing, hyper-converged storage matching the architecture of the outgoing platform."` (drop "no proprietary array dependency") |
| [ ] | 69 | `"…bootstrapping a PVE cluster from nodes still active in the vSAN cluster… shifted off the vSAN pool…"` | 🟢 NEUTRAL | R2 | **Keep** — technical detail. |
| [ ] | 73 | `"Proxmox VE's built-in ESXi-to-PVE migration tool converted and transferred VMs…"` | 🟢 NEUTRAL | R2 | **Keep** — ideal usage. |
| [ ] | 85 | `"ESXi hosts carrying a lighter VM load were flagged as first-wave liberation candidates…"` | 🟢 NEUTRAL | R2 | **Keep** — though consider replacing the word "liberation" (see note below). |
| [ ] | 90 | `"Three ESXi hosts running comparatively fewer VMs were selected… outside the vSAN pool."` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 94 | `title: "Controlled Node Evacuation from VMware"` | 🟡 NEGATIVE | R2 | → `"Controlled Node Evacuation"` |
| [ ] | 95 | `"…maintenance mode with vSAN data migration policy set to 'Full Data Migration'… removed from vCenter (VCSA)…"` | 🟢 NEUTRAL | R2 | **Keep** — genuinely technical and correct. |
| [ ] | 105 | `"Using the built-in ESXi-to-PVE tool, VMs on local datastores (no vSAN dependency) were migrated first…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 109 | `title: "Workload Verification & VMware Decommissioning"` | 🟡 NEGATIVE | R2 | → `"Workload Verification & Source Platform Decommissioning"` |
| [ ] | 110 | `"…Only after sign-off were vCenter Server (VCSA) and all ESXi host licenses formally decommissioned."` | 🟢 NEUTRAL | R2 | **Keep** — factual project step. |
| [ ] | 120 | `"VMware vSphere with vSAN under high-cost subscription licensing"` | 🟡 NEGATIVE | R2 | → `"VMware vSphere with vSAN under subscription licensing"` |
| [ ] | 121 | `"Veeam Backup & Replication tied to the VMware ecosystem"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 132 | `"VMware fully decommissioned — vCenter and all ESXi licenses retired"` | 🟠 ADVERSARIAL | R2 | → `"Migration completed across all nodes — source platform licences retired"` |
| [ ] | 136 | `"Broadcom's VMware subscription exposure eliminated entirely — a recurring financial gain…"` | 🔴 HOSTILE | R3 | → `"Recurring hypervisor licensing spend structurally reduced — an ongoing financial gain, not a one-time saving."` |
| [ ] | 139 | `{ value: "100%", title: "VMware Decommissioned", body: "Every ESXi node re-provisioned as Proxmox VE…" }` | 🟠 ADVERSARIAL | R3 | → `{ value: "100%", title: "Estate Migrated", body: "Every node re-provisioned as Proxmox VE; all VMs migrated to the new PVE + Ceph cluster." }` |
| [ ] | 142 | `function DccVsanCephCaseStudy()` | ⚪ STRUCTURAL | R1 | **Keep** — internal identifier. |
| [ ] | 190 | H1: `Migrating <span>VMware vSAN to Proxmox VE Ceph</span> — Zero New Hardware` | 🟡 NEGATIVE | R3 | → `Migrating <span>Hyper-Converged Storage to Proxmox VE + Ceph</span> — Zero New Hardware` |
| [ ] | 196 | `"After Broadcom's VMware licensing overhaul threatened its operational margins, DCC chose to leave"` | 🔴 HOSTILE | R3 | → `"To protect its operational margins ahead of a licensing renewal, DCC elected to consolidate onto Proxmox VE."` (merge 196+197) |
| [ ] | 197 | `"VMware entirely. ISPL — a Proxmox Silver Partner — re-platformed a live hyper-converged cluster from"` | 🔴 HOSTILE | R3 | Fold into 196 rewrite; keep the ISPL Silver Partner clause. |
| [ ] | 198 | `"vSphere with vSAN to Proxmox VE with Ceph using a phased node-liberation strategy, on existing"` | 🟢 NEUTRAL | R3 | **Keep** |
| [ ] | 202 | Badge array includes `"vSAN Migration"` | 🟡 NEGATIVE | R2 | → `"HCI Migration"` |
| [ ] | 267 | `"ISPL brings certified, vendor-backed expertise across both the VMware and Proxmox ecosystems."` | 🟢 NEUTRAL | R2 | **Keep** — this is *positive* toward VMware (claims dual expertise). Good pattern. |
| [ ] | 297 | `"infrastructure on VMware vSphere with vSAN — multiple physical host nodes interconnected…"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 307 | `"In 2024, Broadcom's acquisition of VMware discontinued perpetual licenses and pushed customers toward"` | 🔴 HOSTILE | R3 | → `"In 2024, DCC's licensing model moved to a subscription basis, prompting a review of its virtualisation platform strategy."` (merge 307–309) |
| [ ] | 309 | `"against no new functional gains, DCC's leadership decided to leave VMware entirely — without new"` | 🔴 HOSTILE | R3 | → `"DCC's leadership decided to consolidate onto Proxmox VE — without new hardware investment."` |
| [ ] | 353 | `"…progressively transfer the infrastructure from VMware to Proxmox VE, all on"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 415 | `"The phased node-liberation strategy, the disciplined vSAN evacuation, and the iterative migrate-evacuate-expand"` | 🟢 NEUTRAL | R2 | **Keep** |
| [ ] | 416 | `"approach were all products of deep familiarity with both the VMware and Proxmox ecosystems — enabling a migration"` | 🟢 NEUTRAL | R2 | **Keep** — again a *positive* dual-expertise framing. |

> **Language note:** "node **liberation**" appears 4× in this case study. It is metaphorically anti-VMware (implies captivity). Recommend a global rename to "node **reclamation**" or "phased node **release**". Add as a follow-up task.

---

### 3.12 `src/app/cloud-migration-solutions/page.tsx` + `layout.tsx` — 🟢 LOW (4 lines)

| ☐ | File:Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | `layout.tsx:6` | `"…and repatriation to Proxmox or VMware."` | 🟢 NEUTRAL | R2 | **Keep** — model example of the approved neutral pattern. |
| [ ] | `page.tsx:45` | `"Repatriate workloads from public cloud back to on-premises or private cloud on VMware, Proxmox, or OpenStack…"` | 🟢 NEUTRAL | R2 | **Keep** — **this is the target tone for the whole site.** |
| [ ] | `page.tsx:95` | `{ name: "VMware", category: "On-Premises" }` | 🟢 NEUTRAL | R1 | **Keep** — platform listed as a supported destination. |
| [ ] | `page.tsx:107` | Duplicate of layout description in JSON-LD | 🟢 NEUTRAL | R2 | **Keep** |

---

### 3.13 `src/app/sitemap.ts` — ⚪ STRUCTURAL (3 lines)

| ☐ | Line | Current | Sentiment | Risk | Suggested change |
|---|---|---|---|---|---|
| [ ] | 27 | `"/case-studies/proxmox-vmware-migration/"` | ⚪ STRUCTURAL | R1 | Keep unless routes renamed — then update all three together |
| [ ] | 29 | `"/case-studies/vmware-proxmox-migration-forceten/"` | ⚪ STRUCTURAL | R1 | Same |
| [ ] | 30 | `"/case-studies/vmware-vsan-proxmox-ceph/"` | ⚪ STRUCTURAL | R1 | Same |

---

## 4. Image Assets

| ☐ | File | Referenced in | Suggested change |
|---|---|---|---|
| [ ] | `public/images/case-studies/1-vmware-migration-hero.jpg` | `case-studies/page.tsx:89`, `proxmox-vmware-migration/page.tsx:14`, `proxmox-vmware-migration/layout.tsx:21`, `Navbar.tsx:104` | Optional rename → `1-hypervisor-migration-hero.jpg`. **Must update all 4 references in the same commit.** Low priority (filenames aren't user-visible). |
| [ ] | `public/images/case-studies/2-vmware-migration-sidebar.jpg` | `proxmox-vmware-migration/page.tsx:16` | Optional rename → `2-hypervisor-migration-sidebar.jpg` |
| [ ] | `public/images/proxmox-migration/esxi.png` | `ProxmoxContent.tsx:24, 686` | **Keep** — it is a real screenshot of the Proxmox ESXi import UI. Accurate and non-adversarial. |

---

## 5. Route / SEO Decision (⚠️ requires a human decision before Claude acts)

Three routes contain `vmware` in the slug:

- `/case-studies/proxmox-vmware-migration/`
- `/case-studies/vmware-proxmox-migration-forceten/`
- `/case-studies/vmware-vsan-proxmox-ceph/`

**Trade-off:**

| Option | Pros | Cons |
|---|---|---|
| **A. Keep slugs (recommended)** | Zero SEO loss; slugs are descriptive not adversarial; "vmware-proxmox-migration" is a factual migration-path descriptor | The word `vmware` remains in URLs |
| **B. Rename + 301 redirect** | Fully removes the term | Requires redirect config in `next.config.ts`, sitemap update, canonical + JSON-LD `@id` + `url` update, Navbar hrefs, case-studies index hrefs — 5 files each; temporary ranking dip |

**Recommendation: Option A.** A URL naming a migration source path is not an attack. Spend the effort on the headline copy instead.

If Option B is chosen, the rename set would be:

- `proxmox-vmware-migration` → `proxmox-migration-lifebank`
- `vmware-proxmox-migration-forceten` → `proxmox-migration-forceten`
- `vmware-vsan-proxmox-ceph` → `proxmox-ceph-hci-datacon`

…plus permanent redirects in `next.config.ts` and a `Navbar.tsx` union-type ID rename (lines 18, 90, 225).

---

## 6. Recommended Execution Order

| ☐ | # | Task | Files |
|---|---|---|---|
| [ ] | 1 | **Kill the hostile headlines** — "VMware Tax", "Broadcom Problem", "Broadcom bought VMware" | `proxmox-migration/page.tsx`, `ProxmoxContent.tsx`, `TechSpotlight.tsx` |
| [ ] | 2 | **Delete the `COMPARISON` deficit table** and its rendering section; replace with a Proxmox-only capability list | `ProxmoxContent.tsx` |
| [ ] | 3 | **Rewrite the "Broadcom Problem" section** into a positive "Why Proxmox VE" section | `ProxmoxContent.tsx` |
| [ ] | 4 | **Neutralise all page titles & meta descriptions** (SEO surfaces) | 4 × `layout.tsx`, `proxmox-migration/page.tsx` |
| [ ] | 5 | **De-editorialise the 3 case-study "Challenge" narratives** — reframe from "VMware became untenable" to "the client ran a cost review" | 3 × case-study `page.tsx` |
| [ ] | 6 | **Update Navbar mega-menu copy** to match the new case-study titles/descriptions | `Navbar.tsx` |
| [ ] | 7 | **Update case-studies index cards** to match | `case-studies/page.tsx` |
| [ ] | 8 | **Replace triumphalist verbs** — "ceased to exist", "fully decommissioned", "left VMware entirely", "escaped" | Sitewide grep |
| [ ] | 9 | **Rename "node liberation" → "node reclamation"** (4 occurrences) | `vmware-vsan-proxmox-ceph/page.tsx` |
| [ ] | 10 | **Soften Veeam mentions** (same competitive-attack risk, 59 occurrences) | 3 × case studies |
| [ ] | 11 | **Decide route/SEO option** (§5) and execute if Option B | `sitemap.ts`, `next.config.ts`, `Navbar.tsx`, layouts |
| [ ] | 12 | **Optional: rename VMware-named image assets** (§4) | `public/images/case-studies/` |

---

## 7. Verification Checklist

| ☐ | Check | Command / method |
|---|---|---|
| [ ] | No hostile phrasing remains | `grep -rniE "vmware tax\|broadcom tax\|broadcom problem\|escape the\|10×\|10x cost\|price hike\|ceased to exist\|untenable\|financial liability\|your budget paid" src` → must return **0** |
| [ ] | No adversarial comparison remains | `grep -rniE "vs vmware\|savings vs\|vmware today\|replace expensive\|match or exceed\|no proprietary" src` → must return **0** |
| [ ] | Remaining VMware mentions all pass the "golden rule" | `grep -rniE "vmware" src` → manually confirm each is source-platform, tooling, or peer-list usage |
| [ ] | Broadcom is not named anywhere in prose | `grep -rniE "broadcom" src` → must return **0** |
| [ ] | Metadata & JSON-LD titles/descriptions match rendered `<h1>`/body | Manual diff of each `layout.tsx` vs its `page.tsx` |
| [ ] | Build passes | `npm run build` |
| [ ] | Lint passes | `npm run lint` |
| [ ] | Sitemap, canonical, and JSON-LD `@id`/`url` are consistent | Manual check across `sitemap.ts` + 3 layouts |
| [ ] | No broken images | Confirm every `IMG.*` and `/images/...` reference resolves |
| [ ] | No broken internal links after any route rename | `grep -rn "case-studies/" src` cross-checked against directory names |
| [ ] | Visual QA of `/proxmox-migration`, `/`, `/case-studies` and all 3 case-study pages | Local dev server + screenshots |

---

## 8. Sentiment Analysis — Detailed Findings

### 8.1 Rhetorical devices currently in use against VMware

| Device | Example | Where | Why it is a problem |
|---|---|---|---|
| **Pejorative metaphor** | "the VMware tax", "the Broadcom tax" | `proxmox-migration/page.tsx:5,33,39`, `ProxmoxContent.tsx:872`, `TechSpotlight.tsx:113` | Frames a competitor's commercial pricing as an unjust levy. Highest-risk phrasing on the site. |
| **Escape/captivity framing** | "Escape the VMware Tax… For Good.", "node liberation" | `TechSpotlight.tsx:113`, `vmware-vsan-proxmox-ceph/page.tsx` (4×) | Casts VMware customers as trapped. |
| **Direct blame attribution** | "Broadcom bought VMware. Your budget paid for it." | `ProxmoxContent.tsx:788` | Explicit accusation, headline-sized. |
| **Deficit tabulation** | 6-row "VMware Today" vs "Proxmox VE" table | `ProxmoxContent.tsx:78–85, 800–818` | Structured, itemised competitor criticism — reads as a hit list. |
| **Triumphalism** | "ceased to exist entirely", "VMware fully decommissioned", "left VMware entirely" | 3 × case-study `page.tsx` | Celebrates a competitor's removal rather than the client's outcome. |
| **Quantified alarm** | "10× cost increases overnight", "5–10× overnight" | `proxmox-migration/page.tsx:34`, `ProxmoxContent.tsx:791`, `TechSpotlight.tsx:117` | Unsourced comparative claims about a named competitor — the highest legal-exposure category. |
| **Value-denial** | "no proportional gain in value", "no new functional gains", "The platform is identical — only the invoice changed" | 3 × case studies, `ProxmoxContent.tsx:791` | Asserts the competitor delivers no value for price. |

### 8.2 Safe patterns already present in the codebase (use as templates)

These lines are already correct and should be the model for all rewrites:

1. `cloud-migration-solutions/page.tsx:45` — *"Repatriate workloads… on VMware, Proxmox, or OpenStack"* → peer-list pattern.
2. `cloud-migration-solutions/page.tsx:95` — `{ name: "VMware", category: "On-Premises" }` → supported-platform pattern.
3. `case-studies/page.tsx:197` — `"VMware · Proxmox · HCI"` → capability-breadth pattern.
4. `vmware-vsan-proxmox-ceph/page.tsx:267, 416` — *"expertise across both the VMware and Proxmox ecosystems"* → **dual-expertise pattern; genuinely positive and commercially useful.** Consider amplifying this framing sitewide.
5. `ProxmoxContent.tsx:674, 686` — ESXi/vCenter import tooling references → tooling-fact pattern.

### 8.3 Strategic recommendation

The current site positions Illumia as an **anti-VMware** vendor. The safer and commercially broader position is **platform-agnostic migration specialist with deep Proxmox partnership**:

> *"Illumia migrates production virtualisation estates — VMware, Hyper-V, Nutanix, XenServer, or bare metal — onto the platform that fits your commercial and technical requirements. As a Proxmox Silver Partner we hold certified expertise in Proxmox VE, and our engineers are equally fluent in the platforms you're moving from."*

This retains every case study and every technical proof point, keeps `VMware` in the copy for SEO and credibility, and removes 100% of the adversarial framing. It also **opens the door to VMware-destination work** (`cloud-migration-solutions` already advertises repatriation *to* VMware — currently contradicted by the rest of the site).

---

## 9. Progress Tracker

**Total actionable checkboxes: 106**

| Section | Items | Done |
|---|---|---|
| 3.1 `proxmox-migration/page.tsx` | 15 | 0 |
| 3.2 `ProxmoxContent.tsx` | 23 | 0 |
| 3.3 `TechSpotlight.tsx` | 3 | 0 |
| 3.4 `Navbar.tsx` | 19 | 0 |
| 3.5 `case-studies/page.tsx` | 18 | 0 |
| 3.6 `proxmox-vmware-migration/layout.tsx` | 8 | 0 |
| 3.7 `proxmox-vmware-migration/page.tsx` | 18 | 0 |
| 3.8 `forceten/layout.tsx` | 7 | 0 |
| 3.9 `forceten/page.tsx` | 18 | 0 |
| 3.10 `vsan-ceph/layout.tsx` | 7 | 0 |
| 3.11 `vsan-ceph/page.tsx` | 31 | 0 |
| 3.12 `cloud-migration-solutions` | 4 | 0 |
| 3.13 `sitemap.ts` | 3 | 0 |
| 4. Images | 3 | 0 |
| 6. Execution order | 12 | 0 |
| 7. Verification | 11 | 0 |
