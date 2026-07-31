# VMware Mentions — Post-Remediation Report

**Project:** illumia-web
**Generated:** 2026-07-31 (after remediation of `VMWARE-MENTIONS-AUDIT.md`)
**Policy applied:** VMware may be named freely as a *factual migration source / platform reference*. What was removed: blame framing (Broadcom-acquisition blame, "VMware tax", "escaped", "ceased to exist", "financial liability/concern", unsourced cost-shock stats like "10× overnight"). Titles, headlines, and tooling references that name "VMware → Proxmox" were **kept** — that migration path is real and not adversarial.

This document lists every remaining "VMware" mention in `src/`, split into **prose/content** (83 occurrences across 13 files) and **structural** (27 occurrences across 9 files — routes, filenames, JSON-LD IDs).

---

## 1. Prose / content mentions (83)

### `src/components/Navbar.tsx` (10)
Case-study mega-menu cards.
| Line | Text | Category |
|---|---|---|
| 92 | `shortLabel: "VMware → Proxmox VE"` | Title |
| 94 | `label: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | Title |
| 96 | `desc: "Lifebank Foundation Inc. migrated from VMware to Proxmox VE via a phased, node-by-node migration…"` | Narrative |
| 100 | `"Rolling node-by-node migration — VMware live throughout"` | Narrative (method detail) |
| 126 | `shortLabel: "VMware → Proxmox (FTT)"` | Title |
| 128 | `label: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | Title |
| 130 | `desc: "Force Ten Technologies… migrated from VMware to Proxmox VE via a phased, node-by-node migration…"` | Narrative |
| 134 | `"Rolling node-by-node migration — VMware live throughout"` | Narrative (method detail) |
| 145 | `label: "VMware vSAN to Proxmox VE Ceph Migration with Zero New Hardware"` | Title |
| 147 | `desc: "Data Consultants Corporation migrated from VMware vSAN to Proxmox VE with Ceph…"` | Narrative |

### `src/components/TechSpotlight.tsx` (1)
Homepage bento card — visible sitewide on `/`.
| Line | Text | Category |
|---|---|---|
| 117 | "…we handle migrations end-to-end from **VMware**, Hyper-V, and other platforms, with zero data loss." | Peer-list (source platforms) |

### `src/app/cloud-migration-solutions/page.tsx` (3)
| Line | Text | Category |
|---|---|---|
| 45 | "Repatriate workloads from public cloud back to on-premises or private cloud on **VMware**, Proxmox, or OpenStack…" | Peer-list |
| 95 | `{ name: "VMware", category: "On-Premises" }` | Peer-list (supported destination) |
| 107 | "…repatriation to Proxmox or **VMware**…" (JSON-LD description) | Peer-list |

### `src/app/cloud-migration-solutions/layout.tsx` (1)
| Line | Text | Category |
|---|---|---|
| 6 | "…repatriation to Proxmox or **VMware**…" | Peer-list |

### `src/app/case-studies/page.tsx` (10)
| Line | Text | Category |
|---|---|---|
| 83 | `title: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | Title |
| 87 | "…decommissioning each **VMware** host, commissioning it as a Proxmox VE node…" | Narrative (method) |
| 96 | "Node-by-node rolling migration — **VMware** cluster live throughout" | Narrative (method detail) |
| 127 | `title: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration"` | Title |
| 131 | "…decommissioning each **VMware** host…" | Narrative (method) |
| 140 | "Node-by-node rolling migration — **VMware** cluster live throughout" | Narrative (method detail) |
| 141 | "Proxmox VE built-in **VMware** migration tooling — no third-party utilities" | Tooling reference |
| 149 | `title: "VMware vSAN to Proxmox VE Ceph Migration with Zero New Hardware"` | Title |
| 153 | "…migrate → evacuate → expand cycle ran until **VMware** was fully decommissioned…" | Narrative (project fact) |
| 197 | `{ label: "Infrastructure", count: "VMware · Proxmox · HCI" }` | Peer-list |

### `src/app/case-studies/proxmox-vmware-migration/layout.tsx` (4)
| Line | Text | Category |
|---|---|---|
| 4 | `title: "VMware to Proxmox VE Migration — Lifebank Foundation"` | Title |
| 6 | "…migrating a multi-node **VMware** vSphere cluster to Proxmox VE…" | Narrative |
| 14 | `headline: "VMware to Proxmox VE Migration — Lifebank Foundation"` | Title (JSON-LD) |
| 16 | Same description repeated in JSON-LD | Narrative |

### `src/app/case-studies/proxmox-vmware-migration/page.tsx` (12)
| Line | Text | Category |
|---|---|---|
| 54 | "…no active presence in **VMware**." | Narrative (project fact) |
| 61 | "Proxmox VE — an enterprise-grade open-source hypervisor with native **VMware** migration tooling…" | Tooling reference |
| 65 | "…each host decommissioned from **VMware**, commissioned as a Proxmox VE node…" | Narrative (method) |
| 69 | "…without disrupting active **VMware** workloads during the transition." | Narrative |
| 85 | "ISPL identified the **VMware** hosts running lowest-priority VMs…" | Narrative (method) |
| 90 | "…migrated using Proxmox VE's built-in **VMware** migration tooling…" | Tooling reference |
| 95 | "For every remaining **VMware** host: workloads evacuated to other **VMware** nodes…" | Narrative (method) |
| 116 | "Multi-node **VMware** vSphere cluster under subscription licensing" (before-state list) | Narrative |
| 188 | H1: "Achieving 80% Licensing Cost Reduction via **VMware** to Proxmox VE Migration" | Title |
| 195 | "ISPL delivered a phased, rolling migration from **VMware** vSphere and Veeam to Proxmox VE…" | Narrative |
| 199 | Badge: `"VMware Migration"` | Tag |
| 294 | "…built around a multi-node **VMware** vSphere cluster hosting a significant…" | Narrative |

### `src/app/case-studies/vmware-proxmox-migration-forceten/layout.tsx` (4)
| Line | Text | Category |
|---|---|---|
| 4 | `title: "VMware to Proxmox VE Migration — Force Ten Technologies"` | Title |
| 6 | "…migrating a multi-node **VMware** vSphere cluster and Veeam to Proxmox VE and PBS…" | Narrative |
| 14 | `headline: "VMware to Proxmox VE Migration — Force Ten Technologies"` | Title (JSON-LD) |
| 16 | Same description repeated in JSON-LD | Narrative |

### `src/app/case-studies/vmware-proxmox-migration-forceten/page.tsx` (13)
| Line | Text | Category |
|---|---|---|
| 42 | "…adding licensing overhead on top of **VMware**." | Narrative |
| 54 | "…no active presence in **VMware**." | Narrative (project fact) |
| 61 | "…native **VMware** migration tooling, cluster-native HA…" | Tooling reference |
| 65 | "…the **VMware** cluster staying operational throughout…" | Narrative |
| 69 | "…without disrupting active **VMware** workloads during the transition." | Narrative |
| 85 | "…identified the **VMware** hosts running lowest-priority VMs…" | Narrative (method) |
| 90 | "…migrated using Proxmox VE's built-in **VMware** migration tool…" | Tooling reference |
| 95 | "For every remaining **VMware** host: workloads evacuated to other **VMware** nodes…" | Narrative (method) |
| 116 | "Multi-node **VMware** vSphere cluster under subscription licensing" | Narrative |
| 188 | H1: "…via **VMware** to Proxmox VE Migration" | Title |
| 196 | "ISPL delivered a phased, rolling migration from **VMware** vSphere and Veeam to Proxmox VE…" | Narrative |
| 200 | Badge: `"VMware Migration"` | Tag |
| 296 | "IT infrastructure built around a multi-node **VMware** vSphere cluster…" | Narrative |

### `src/app/case-studies/vmware-vsan-proxmox-ceph/layout.tsx` (4)
| Line | Text | Category |
|---|---|---|
| 4 | `title: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp"` | Title |
| 6 | "…migrated Data Consultants Corporation from **VMware** vSphere with vSAN to Proxmox VE with Ceph…" | Narrative |
| 14 | `headline: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp"` | Title (JSON-LD) |
| 16 | Same description repeated in JSON-LD | Narrative |

### `src/app/case-studies/vmware-vsan-proxmox-ceph/page.tsx` (13)
| Line | Text | Category |
|---|---|---|
| 54 | "…Veeam Backup & Replication setup was tied to the **VMware** ecosystem." | Narrative |
| 94 | `title: "Controlled Node Evacuation from VMware"` | Section title |
| 109 | `title: "Workload Verification & VMware Decommissioning"` | Section title |
| 120 | "**VMware** vSphere with vSAN under subscription licensing" (before-state) | Narrative |
| 121 | "Veeam Backup & Replication tied to the **VMware** ecosystem" (before-state) | Narrative |
| 132 | "**VMware** fully decommissioned — vCenter and all ESXi licenses retired" (after-state) | Narrative (project fact) |
| 139 | Outcome tile: `title: "VMware Decommissioned"` | Metric title |
| 190 | H1: "Migrating **VMware** vSAN to Proxmox VE Ceph — Zero New Hardware" | Title |
| 267 | "ISPL brings certified, vendor-backed expertise across both the **VMware** and Proxmox ecosystems." | Positive/dual-expertise |
| 297 | "…infrastructure on **VMware** vSphere with vSAN…" | Narrative |
| 307 | "In 2024, DCC's **VMware** licensing model moved to a subscription basis…" | Narrative |
| 352 | "…progressively transfer the infrastructure from **VMware** to Proxmox VE…" | Narrative |
| 415 | "…deep familiarity with both the **VMware** and Proxmox ecosystems…" | Positive/dual-expertise |

### `src/app/proxmox-migration/page.tsx` (4)
| Line | Text | Category |
|---|---|---|
| 7 | Meta description: "…migration to Proxmox Virtual Environment from **VMware**, Hyper-V, Nutanix, and other platforms…" | Peer-list |
| 18 | Same, JSON-LD | Peer-list |
| 34 | "…handles the entire migration end-to-end with zero data loss, from **VMware**, Hyper-V, Nutanix, or bare metal." | Peer-list |
| 84 | `label: "VMware Importer"` (feature card) | Tooling reference |

### `src/app/proxmox-migration/ProxmoxContent.tsx` (4)
| Line | Text | Category |
|---|---|---|
| 174 | "Node-by-node — **VMware** stays live throughout" (methodology phase) | Narrative |
| 659 | `{/* Row 1: VMware Import — text left, screenshot right */}` (code comment) | Comment |
| 676 | "Import directly from **VMware** ESXi or vSphere with the native vCenter importer…" | Tooling reference |
| 688 | `alt="Proxmox VMware ESXi Guest Import"` | Alt text (real screenshot) |

---

## 2. Structural mentions (27) — routes, filenames, JSON-LD IDs

Lowercase `vmware` in URLs/filenames, kept per the original audit's own recommendation (§5, Option A): descriptive slugs aren't adversarial, and renaming would cost a 301 + SEO dip for no positioning benefit.

| File | Line | What |
|---|---|---|
| `Navbar.tsx` | 18, 90, 225 | Union type / object key `"proxmox-vmware"` |
| `Navbar.tsx` | 91, 125, 142 | Case-study `href`s |
| `Navbar.tsx` | 104 | Image path `1-vmware-migration-hero.jpg` |
| `case-studies/page.tsx` | 81, 125, 147 | Case-study `href`s |
| `case-studies/page.tsx` | 89 | Image path `1-vmware-migration-hero.jpg` |
| `proxmox-vmware-migration/page.tsx` | 14, 16 | Image paths (hero + sidebar) |
| `proxmox-vmware-migration/layout.tsx` | 7, 13, 17, 21 | `canonical`, `@id`, `url`, `image` |
| `vmware-proxmox-migration-forceten/layout.tsx` | 7, 13, 17 | `canonical`, `@id`, `url` |
| `vmware-vsan-proxmox-ceph/layout.tsx` | 7, 13, 17 | `canonical`, `@id`, `url` |
| `sitemap.ts` | 27, 29, 30 | Sitemap route paths |

---

## 3. What was removed (for reference)

Every occurrence of: "VMware tax" / "Broadcom tax", "Escape the VMware Tax", "Broadcom bought VMware. Your budget paid for it.", "VMware Alternative" (badge), the 6-row VMware-vs-Proxmox deficit table, "10× cost increases overnight", "financial liability" / "financial concern", "escaped unsustainable post-Broadcom VMware licensing", "left VMware entirely after Broadcom's licensing overhaul", "ceased to exist entirely". Full before/after detail is in `VMWARE-MENTIONS-AUDIT.md`, §3.1–§3.11.

## 4. Not addressed (left as fact-stating, not blame)

A handful of rows the original audit flagged 🟡/🟠 remain, because under the corrected policy (name VMware freely, strip only blame) they don't qualify as adversarial — they state project facts:
- `vsan-ceph/page.tsx:132` — "VMware fully decommissioned"
- `vsan-ceph/page.tsx:139` — outcome title "VMware Decommissioned"
- `vsan-ceph/page.tsx:61` — "no proprietary array dependency"
- `vsan-ceph/page.tsx:202`, `Navbar.tsx:151`, `case-studies/page.tsx:163` — "vSAN Migration" / "vSAN equivalence"
