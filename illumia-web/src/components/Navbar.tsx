"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const LOGO_URL =
  "https://nextcloud.illumiasolutions.com/s/BoJ6wwwsN5ja8aR/download/Slide4_transparent-removebg-preview.png";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type CaseStudyId =
  | "nonprofit"
  | "cyber"
  | "pci"
  | "proxmox-vmware"
  | "proxmox-hci"
  | "forceten"
  | "dcc-ceph"
  | "bare-metal";

interface CaseStudyItem {
  id: CaseStudyId;
  href: string;
  shortLabel: string;
  subtitle: string;
  label: string;
  tag: string;
  desc: string;
  shortDesc: string;
  highlights: string[];
  image: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "nonprofit",
    href: "/case-studies/non-profit-open-source",
    shortLabel: "Non-Profit OSS",
    subtitle: "Open-source infrastructure transformation across 1,000+ branches",
    label: "Driving 50–65% IT Cost Reduction with Open Source Infrastructure",
    tag: "Open Source · Non-Profit",
    desc: "A leading Microfinance Non-Profit in the Philippines transformed its entire IT landscape — cutting costs, improving collaboration, and scaling operations across 1,000+ branches with an integrated open-source stack.",
    shortDesc: "Cost reduction & collaboration overhaul",
    highlights: [
      "50–65% reduction in annual IT costs",
      "1,000+ branches migrated in phased rollout",
      "Nextcloud · ERPNext · Proxmox · Ceph stack",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/7meetxSGsFNNkYa",
  },
  {
    id: "cyber",
    href: "/case-studies/cybersecurity-open-source",
    shortLabel: "Cybersecurity OSS",
    subtitle: "Layered open-source defence with full audit visibility",
    label: "Strengthening Cybersecurity & Compliance with Open Source",
    tag: "Cybersecurity · Open Source",
    desc: "One of the largest nonprofit microfinance institutions in the Philippines implemented a comprehensive open-source security stack — full visibility, threat detection, and compliance readiness.",
    shortDesc: "Visibility, compliance & sovereignty",
    highlights: [
      "Wazuh SIEM/XDR with custom detection rules",
      "Suricata IDS + OpenVAS vulnerability scanning",
      "On-prem data sovereignty, audit-ready posture",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/FJHofMbWQQKjGW8",
  },
  {
    id: "pci",
    href: "/case-studies/pci-dss-grocery",
    shortLabel: "PCI DSS Retail",
    subtitle: "PCI DSS Level 2 attestation for 17-location retail chain",
    label: "PCI DSS Compliance for a Grocery Retail Store Chain in Illinois",
    tag: "Compliance · Retail",
    desc: "During the pandemic surge in credit card transactions, Illumia delivered full PCI DSS Level 2 compliance for a 17-location grocery chain — on time, on budget, and with zero business disruption.",
    shortDesc: "17-location first-attempt attestation",
    highlights: [
      "PCI DSS SAQ D Level 2 achieved first attempt",
      "17 POS sites hardened, segmented and logged",
      "Zero downtime through migration and audit",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/p7oPQLdGntqDDza",
  },
  {
    id: "proxmox-vmware",
    href: "/case-studies/proxmox-vmware-migration",
    shortLabel: "VMware → Proxmox VE",
    subtitle: "80% licensing cost reduction — zero new hardware",
    label: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration",
    tag: "Infrastructure · Proxmox",
    desc: "Lifebank Foundation Inc. escaped unsustainable post-Broadcom VMware licensing via a phased, node-by-node migration to Proxmox VE — zero new hardware procured, zero VMs lost, every downtime threshold met.",
    shortDesc: "Platform independence, zero capex",
    highlights: [
      "80% reduction in annual licensing costs",
      "Rolling node-by-node migration — VMware live throughout",
      "Proxmox Backup Server replacing Veeam, encryption at rest",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/w7MtAYxqXsfHgS5",
  },
  {
    id: "proxmox-hci",
    href: "/case-studies/proxmox-hci-expansion",
    shortLabel: "NVMe HCI Expansion",
    subtitle: "Two-cluster HCI estate — scale out, not replace",
    label: "Progressive HCI Expansion & NVMe Cluster for High-IOPS Workloads",
    tag: "Infrastructure · HCI",
    desc: "When I/O-intensive workloads outgrew an existing SSD/HDD Proxmox cluster, ISPL added a three-node NVMe cluster for high-IOPS VMs — preserving the original investment and wrapping the full estate in 24/7 managed services.",
    shortDesc: "NVMe tier added, original preserved",
    highlights: [
      "Three-node NVMe/SSD cluster for high-IOPS VMs",
      "~14-day on-site migration sprint — no disruption",
      "Full AMC & 24/7 managed services across both clusters",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/zxZN9QmzGDYq8dB",
  },
  {
    id: "forceten",
    href: "/case-studies/vmware-proxmox-migration-forceten",
    shortLabel: "VMware → Proxmox (FTT)",
    subtitle: "80% licensing cost reduction — financial-sector migration",
    label: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration",
    tag: "Infrastructure · Proxmox",
    desc: "Forceten Technologies, a financial software developer, escaped unsustainable post-Broadcom VMware licensing via a phased, node-by-node migration to Proxmox VE — zero new hardware, zero VMs lost, every downtime threshold met.",
    shortDesc: "Financial-sector platform independence",
    highlights: [
      "80% reduction in annual licensing costs",
      "Rolling node-by-node migration — VMware live throughout",
      "Existing dual SAN reused, PBS replacing Veeam with encryption",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/wLxcmBwerzBERD3",
  },
  {
    id: "dcc-ceph",
    href: "/case-studies/vmware-vsan-proxmox-ceph",
    shortLabel: "vSAN → Proxmox Ceph",
    subtitle: "Live hyper-converged re-platform — zero new hardware",
    label: "VMware vSAN to Proxmox VE Ceph Migration with Zero New Hardware",
    tag: "Infrastructure · Ceph HCI",
    desc: "Data Consultants Corporation left VMware entirely after Broadcom's licensing overhaul — ISPL re-platformed a live vSphere + vSAN cluster to Proxmox VE with Ceph via a phased node-liberation strategy, on existing hardware, sub-24-hour downtime.",
    shortDesc: "Node-liberation, sub-24h downtime",
    highlights: [
      "Phased node-liberation on a live production cluster",
      "Ceph for self-healing hyper-converged storage — vSAN equivalence",
      "SSDs as Ceph OSDs, NVMe as DB/WAL; PBS replacing Veeam",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/SWNMwRaw5WCRoxQ",
  },
  {
    id: "bare-metal",
    href: "/case-studies/bare-metal-proxmox-migration",
    shortLabel: "Bare Metal → HCI",
    subtitle: "Two-cluster Proxmox HCI estate for 5,000+ employees",
    label: "From Bare Metal to a Two-Cluster Proxmox HCI Estate",
    tag: "Infrastructure · HCI",
    desc: "ISPL modernised Lifebank Foundation from fragmented bare-metal servers onto a Proxmox VE + Ceph HCI cluster, then added a dedicated NVMe tier for high-IOPS workloads — 50+ VMs across two clusters, IOPS-driven interruptions cut to zero.",
    shortDesc: "Consolidation, then NVMe expansion",
    highlights: [
      "50+ VMs consolidated across two HCI clusters",
      "Dedicated NVMe/SSD tier — high-IOPS capacity up several times",
      "On-site/off-site PBS backup, full 24/7 managed services",
    ],
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/DMG5xaPGnZLat4x",
  },
];

// ── Case study selector icons ───────────────────────────────────────────────
const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const ServerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const CpuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const CASE_STUDY_ICONS: Record<CaseStudyId, React.ReactNode> = {
  nonprofit: <HeartIcon />,
  cyber: <LockIcon />,
  pci: <CardIcon />,
  "proxmox-vmware": <ServerIcon />,
  "proxmox-hci": <CpuIcon />,
  forceten: <ServerIcon />,
  "dcc-ceph": <CpuIcon />,
  "bare-metal": <ServerIcon />,
};

interface CaseMegaMenuProps {
  onClose: () => void;
  activeCaseStudy: CaseStudyId;
  onCaseStudyChange: (id: CaseStudyId) => void;
  pageCaseStudy: CaseStudyId | null;
}

function CaseStudiesMegaMenu({
  onClose,
  activeCaseStudy,
  onCaseStudyChange,
  pageCaseStudy,
}: CaseMegaMenuProps) {
  const activeCs = CASE_STUDIES.find((cs) => cs.id === activeCaseStudy)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: EASE }}
      className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/40 shadow-2xl shadow-stone-900/10 z-50"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex">

        {/* Left: case study selector */}
        <div className="w-64 xl:w-72 shrink-0 border-r border-outline-variant/30 py-10 pr-2 flex flex-col gap-0 max-h-[480px]">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-4 px-4 shrink-0">
            Featured Work
          </span>
          <style>{`
            .cs-scroll::-webkit-scrollbar { width: 4px; }
            .cs-scroll::-webkit-scrollbar-track { background: transparent; }
            .cs-scroll::-webkit-scrollbar-thumb { background: #e2bebd; border-radius: 99px; }
            .cs-scroll::-webkit-scrollbar-thumb:hover { background: #b31c33; }
            .cs-scroll { scrollbar-width: thin; scrollbar-color: #e2bebd transparent; }
          `}</style>
          <div className="cs-scroll overflow-y-scroll flex flex-col gap-2 pr-4">
          {CASE_STUDIES.map((cs) => {
            const selected = activeCaseStudy === cs.id;
            const onPage = pageCaseStudy === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => onCaseStudyChange(cs.id)}
                className={`group/cat flex items-center gap-3.5 w-full text-left px-4 py-3.5 border-l-2 transition-colors duration-200 ${
                  selected
                    ? "border-primary bg-primary/[0.06]"
                    : "border-transparent hover:border-outline-variant hover:bg-stone-50/80"
                }`}
              >
                <span
                  className={`shrink-0 transition-colors duration-200 ${selected ? "text-primary" : "text-stone-400 group-hover/cat:text-stone-600"}`}
                  aria-hidden
                >
                  {CASE_STUDY_ICONS[cs.id]}
                </span>
                <div className="min-w-0 text-left flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`font-headline text-base leading-snug transition-colors duration-200 ${
                      selected ? "text-primary" : "text-stone-800 group-hover/cat:text-stone-900"
                    }`}>
                      {cs.shortLabel}
                    </p>
                    {onPage && !selected && (
                      <span className="font-body text-[10px] tracking-widest uppercase text-primary/60 font-semibold">
                        current
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-stone-400 mt-0.5 leading-snug">
                    {cs.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
          </div>
        </div>

        {/* Right: case study detail */}
        <div className="flex-1 min-w-0 pl-10 py-10 relative overflow-hidden">
          {/* All-case-studies link — AT TOP, prominent, with external-link icon */}
          <Link
            href="/case-studies"
            onClick={onClose}
            className="group/catlink inline-flex items-center gap-2.5 mb-6 pb-5 border-b border-outline-variant/40 w-full"
          >
            <span className="font-headline text-xl text-stone-900 group-hover/catlink:text-primary transition-colors duration-200 leading-none">
              All Case Studies
            </span>
            <ExternalArrow className="w-4 h-4 text-stone-400 group-hover/catlink:text-primary transition-colors duration-200 shrink-0" />
          </Link>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeCaseStudy}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Image */}
              <Link
                href={activeCs.href}
                onClick={onClose}
                className="group/img md:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100"
              >
                <Image
                  src={activeCs.image}
                  alt={activeCs.label}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/img:scale-[1.05]"
                />
                <div className="absolute inset-x-3 top-3">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
                    {activeCs.tag}
                  </span>
                </div>
              </Link>

              {/* Text */}
              <div className="md:col-span-7 flex flex-col">
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-2">
                  {activeCs.subtitle}
                </p>
                <h3 className="font-headline text-xl md:text-2xl text-stone-900 leading-snug mb-4">
                  {activeCs.label}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">
                  {activeCs.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {activeCs.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 font-body text-xs text-stone-700 leading-snug"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.5L5 9L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={activeCs.href}
                  onClick={onClose}
                  className="group/cta inline-flex items-center gap-2 self-start rounded-lg bg-primary px-5 py-2.5 font-body text-xs font-semibold text-white transition hover:bg-primary-dark mt-auto"
                >
                  Read Case Study
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}

function getCaseStudyFromPath(p: string): CaseStudyId | null {
  for (const cs of CASE_STUDIES) {
    if (p === cs.href || p.startsWith(cs.href + "/")) return cs.id;
  }
  return null;
}

type ServiceCategory = "cloud" | "cyber" | "open" | "dev";

interface ServiceItem {
  label: string;
  href: string;
}

interface ServiceGroup {
  id: ServiceCategory;
  label: string;
  href: string;
  description: string;
  items: ServiceItem[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "cloud",
    label: "Cloud",
    href: "/cloud-services",
    description: "Infrastructure, hosting & compute",
    items: [
      { label: "Hosting Services", href: "/cloud-services#hosting" },
      { label: "Virtual Private Server", href: "/virtual-private-server" },
      { label: "Physical Server", href: "/physical-server" },
      { label: "Containers", href: "/containers" },
      { label: "Virtual Desktops", href: "/virtual-desktops" },
      { label: "Object Storage", href: "/object-storage" },
      { label: "Disaster Recovery", href: "/disaster-recovery" },
      { label: "Software-Defined Network", href: "/software-defined-network" },
      { label: "Cloud Migration Solutions", href: "/cloud-migration-solutions" },
      { label: "On-Premise Private Cloud", href: "/on-premise-private-cloud" },
      { label: "Private Cloud with Proxmox VE", href: "/on-premise-private-cloud-solutions" },
      { label: "Infrastructure Solutions", href: "/infrastructure-solutions" },
      { label: "Application Solutions", href: "/application-solutions" },
      { label: "Maintenance Services", href: "/cloud-services#maintenance" },
      { label: "Monitoring & Analytics", href: "/monitoring-analytics" },
    ],
  },
  {
    id: "cyber",
    label: "Cyber Security",
    href: "/cyber-security",
    description: "Security, compliance & threat management",
    items: [
      { label: "IT Risk & Security Strategy", href: "/it-risk-and-security-strategy" },
      { label: "Application Security", href: "/application-security" },
      { label: "Mobile Security", href: "/mobile-security" },
      { label: "Cloud Security", href: "/cloud-security" },
      { label: "Infrastructure Security", href: "/infrastructure-security" },
      { label: "Compliance Services", href: "/compliance-services" },
      { label: "Cybersecurity Solutions", href: "/cybersecurity-solutions" },
      { label: "Specialized Services", href: "/specialized-services" },
      { label: "SIEM as a Service", href: "/siem-as-a-service" },
      { label: "EDR as a Service", href: "/edr-as-a-service" },
      { label: "WAF as a Service", href: "/waf-as-a-service" },
      { label: "PAM as a Service", href: "/pam-as-a-service" },
      { label: "NMS as a Service", href: "/nms-as-a-service" },
      { label: "Honeypot as a Service", href: "/honeypot-as-a-service" },
      { label: "SIEM", href: "/siem" },
      { label: "SOAR", href: "/soar" },
      { label: "Endpoint Detection & Response", href: "/edr-solution" },
      { label: "Vulnerability Management", href: "/vulnerability-management" },
      { label: "Governance, Risk & Compliance", href: "/governance-risk-compliance" },
      { label: "Privileged Access Management", href: "/pam" },
      { label: "Honeypot Solutions", href: "/honeypot-solution" },
    ],
  },
  {
    id: "open",
    label: "Open Source",
    href: "/open-source-solutions",
    description: "Open-source powered enterprise tools",
    items: [
      { label: "Collaboration Solutions", href: "/collaboration-solutions" },
      { label: "Project Management Solutions", href: "/project-management-solutions" },
      { label: "Web Meeting Solution", href: "/web-meeting-solution" },
      { label: "Email as a Service", href: "/email-as-a-service" },
      { label: "Drive as a Service", href: "/drive-as-a-service" },
      { label: "Backup as a Service", href: "/backup-as-a-service" },
      { label: "NetBox Platform", href: "/netbox-platform" },
    ],
  },
  {
    id: "dev",
    label: "Software Development",
    href: "/software-development",
    description: "Custom apps, web & integrations",
    items: [
      { label: "Design & Development", href: "/design-development" },
      { label: "Custom Mobile Application", href: "/custom-mobile-application" },
      { label: "Custom Web Application", href: "/custom-web-application" },
      { label: "Third-Party Integrations", href: "/third-party-integrations" },
    ],
  },
];

const ALL_SERVICE_HREFS = new Set(
  SERVICE_GROUPS.flatMap((g) => [g.href, ...g.items.map((i) => i.href)])
);

function getCategoryFromPath(p: string): ServiceCategory {
  for (const group of SERVICE_GROUPS) {
    if (p === group.href || p.startsWith(group.href + "/")) return group.id;
    if (group.items.some((item) => {
      const base = item.href.split("#")[0];
      return p === base || p.startsWith(base + "/");
    })) return group.id;
  }
  return "cloud";
}

// ── Category icons ──────────────────────────────────────────────────────────
const CloudIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const DevIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="4" width="18" height="13" rx="1.5" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const CATEGORY_ICONS: Record<ServiceCategory, React.ReactNode> = {
  cloud: <CloudIcon />,
  cyber: <ShieldIcon />,
  open: <CodeIcon />,
  dev: <DevIcon />,
};

// ── Shared icons ────────────────────────────────────────────────────────────
const Chevron = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ExternalArrow = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// ── Mega menu ───────────────────────────────────────────────────────────────
interface MegaMenuProps {
  onClose: () => void;
  activeCategory: ServiceCategory;
  onCategoryChange: (c: ServiceCategory) => void;
  pageCategory: ServiceCategory | null;
}

function ServicesMegaMenu({ onClose, activeCategory, onCategoryChange, pageCategory }: MegaMenuProps) {
  const activeGroup = SERVICE_GROUPS.find((g) => g.id === activeCategory)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: EASE }}
      className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/40 shadow-2xl shadow-stone-900/10 z-50"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex">

        {/* Left: category selector */}
        <div className="w-64 xl:w-72 shrink-0 border-r border-outline-variant/30 py-10 pr-8 flex flex-col gap-2">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-4 px-4">
            Our Services
          </span>

          {SERVICE_GROUPS.map((group) => {
            const selected = activeCategory === group.id;
            const onPage = pageCategory === group.id;
            return (
              <button
                key={group.id}
                onClick={() => onCategoryChange(group.id)}
                className={`group/cat flex items-center gap-3.5 w-full text-left px-4 py-3.5 border-l-2 transition-colors duration-200 ${
                  selected
                    ? "border-primary bg-primary/[0.06]"
                    : "border-transparent hover:border-outline-variant hover:bg-stone-50/80"
                }`}
              >
                <span
                  className={`shrink-0 transition-colors duration-200 ${selected ? "text-primary" : "text-stone-400 group-hover/cat:text-stone-600"}`}
                  aria-hidden
                >
                  {CATEGORY_ICONS[group.id]}
                </span>
                <div className="min-w-0 text-left flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`font-headline text-base leading-snug transition-colors duration-200 ${
                      selected ? "text-primary" : "text-stone-800 group-hover/cat:text-stone-900"
                    }`}>
                      {group.label}
                    </p>
                    {onPage && !selected && (
                      <span className="font-body text-[10px] tracking-widest uppercase text-primary/60 font-semibold">
                        current
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-stone-400 mt-0.5 leading-snug">
                    {group.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: service items with category link at top */}
        <div className="flex-1 min-w-0 pl-10 py-10 flex flex-col">
          <div className="relative overflow-hidden flex-1">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18, position: "absolute" as const, top: 0, left: 0, right: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {/* Category page link — AT TOP, prominent, with external-link icon */}
                <Link
                  href={activeGroup.href}
                  onClick={onClose}
                  className="group/catlink inline-flex items-center gap-2.5 mb-6 pb-5 border-b border-outline-variant/40 w-full"
                >
                  <span className="font-headline text-xl text-stone-900 group-hover/catlink:text-primary transition-colors duration-200 leading-none">
                    {activeGroup.label} Services
                  </span>
                  <ExternalArrow className="w-4 h-4 text-stone-400 group-hover/catlink:text-primary transition-colors duration-200 shrink-0" />
                </Link>

                {/* Items grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1" data-category={activeGroup.id}>
                  {activeGroup.items.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      onClick={onClose}
                      className="group/item flex items-center gap-3 py-2.5 px-3 text-stone-600 hover:text-primary hover:bg-primary/[0.05] transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant group-hover/item:bg-primary shrink-0 transition-colors duration-200" />
                      <span className="font-body text-sm leading-snug">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Platform Spotlights — always visible, directs users to deep-dive pages */}
          <div className="mt-6 pt-5 border-t border-outline-variant/25 shrink-0">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary font-bold mb-3">
              Platform Deep-Dives
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/on-premise-private-cloud-solutions"
                onClick={onClose}
                className="group/pl flex items-center gap-3 rounded-lg border border-outline-variant/30 px-4 py-3 hover:border-primary/30 hover:bg-primary/[0.04] transition-colors duration-200"
              >
                <div className="shrink-0 w-7 h-7 rounded-md bg-stone-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/proxmox-icon.png"
                    alt="Proxmox VE"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-stone-800 group-hover/pl:text-primary transition-colors duration-200 leading-snug truncate">
                    Proxmox VE
                  </p>
                  <p className="font-body text-[11px] text-stone-400 leading-snug">Private Cloud · Zero licensing</p>
                </div>
                <ExternalArrow className="w-3.5 h-3.5 text-stone-300 group-hover/pl:text-primary shrink-0 ml-auto transition-colors duration-200" />
              </Link>
              <Link
                href="/netbox-platform"
                onClick={onClose}
                className="group/pl flex items-center gap-3 rounded-lg border border-outline-variant/30 px-4 py-3 hover:border-primary/30 hover:bg-primary/[0.04] transition-colors duration-200"
              >
                <div className="shrink-0 w-7 h-7 rounded-md bg-stone-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/netbox-icon.png"
                    alt="NetBox Labs"
                    className="w-7 h-7 object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-stone-800 group-hover/pl:text-primary transition-colors duration-200 leading-snug truncate">
                    NetBox Platform
                  </p>
                  <p className="font-body text-[11px] text-stone-400 leading-snug">Network source of truth</p>
                </div>
                <ExternalArrow className="w-3.5 h-3.5 text-stone-300 group-hover/pl:text-primary shrink-0 ml-auto transition-colors duration-200" />
              </Link>
              <Link
                href="/odoo"
                onClick={onClose}
                className="group/pl flex items-center gap-3 rounded-lg border border-outline-variant/30 px-4 py-3 hover:border-primary/30 hover:bg-primary/[0.04] transition-colors duration-200"
              >
                <div className="shrink-0 w-7 h-7 rounded-md bg-stone-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/odoo-logo.png"
                    alt="Odoo"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-stone-800 group-hover/pl:text-primary transition-colors duration-200 leading-snug truncate">
                    Odoo
                  </p>
                  <p className="font-body text-[11px] text-stone-400 leading-snug">80+ integrated business apps</p>
                </div>
                <ExternalArrow className="w-3.5 h-3.5 text-stone-300 group-hover/pl:text-primary shrink-0 ml-auto transition-colors duration-200" />
              </Link>
              <Link
                href="/erpnext"
                onClick={onClose}
                className="group/pl flex items-center gap-3 rounded-lg border border-outline-variant/30 px-4 py-3 hover:border-primary/30 hover:bg-primary/[0.04] transition-colors duration-200"
              >
                <div className="shrink-0 w-7 h-7 rounded-md bg-stone-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://nextcloud.illumiasolutions.com/public.php/dav/files/sJgp3azLEFFKZdC"
                    alt="ERPNext"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-stone-800 group-hover/pl:text-primary transition-colors duration-200 leading-snug truncate">
                    ERPNext
                  </p>
                  <p className="font-body text-[11px] text-stone-400 leading-snug">Open-source ERP suite</p>
                </div>
                <ExternalArrow className="w-3.5 h-3.5 text-stone-300 group-hover/pl:text-primary shrink-0 ml-auto transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// ── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyId>(
    () => getCaseStudyFromPath(pathname) ?? "nonprofit"
  );
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(() => getCategoryFromPath(pathname));
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<ServiceCategory | null>(null);
  const [mobileCaseStudiesExpanded, setMobileCaseStudiesExpanded] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeServices = useCallback(() => {
    setServicesOpen(false);
  }, []);

  const toggleServices = useCallback(() => {
    setServicesOpen((prev) => {
      if (!prev) {
        setActiveCategory(getCategoryFromPath(pathname));
        setCaseStudiesOpen(false);
      }
      return !prev;
    });
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const isServicesActive =
    SERVICE_GROUPS.some((g) => isActive(g.href)) ||
    ALL_SERVICE_HREFS.has(pathname);

  // Which category the current page belongs to (null if not on any service page)
  const pageCategory: ServiceCategory | null = isServicesActive ? getCategoryFromPath(pathname) : null;

  // Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setCaseStudiesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile on scroll
  useEffect(() => {
    if (!mobileOpen) return;
    function handleScroll() { setMobileOpen(false); }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Route change → close all
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setServicesOpen(false);
    setCaseStudiesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const isCaseStudiesActive = pathname === "/case-studies" || pathname.startsWith("/case-studies/");
  const pageCaseStudy = getCaseStudyFromPath(pathname);

  const navLinkClass = (href: string) =>
    `font-headline text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${
      isActive(href) ? "text-primary font-bold" : "text-stone-600 hover:text-primary"
    }`;

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm shadow-stone-900/5"
    >
      {/* ── Bar row ──────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={LOGO_URL}
            alt="Illumia Solutions"
            width={160}
            height={48}
            priority
            className="h-8 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          <Link href="/about" className={navLinkClass("/about")}>
            About Us
          </Link>

          {/* Services — click to toggle */}
          <button
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            onClick={toggleServices}
            className={`flex items-center gap-1.5 font-headline text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${
              servicesOpen || isServicesActive
                ? "text-primary font-bold"
                : "text-stone-600 hover:text-primary"
            }`}
          >
            Services
            <motion.span
              animate={{ rotate: servicesOpen ? 180 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex"
            >
              <Chevron className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          {/* Case Studies — click to toggle mega menu */}
          <button
            aria-expanded={caseStudiesOpen}
            aria-haspopup="true"
            onClick={() => {
              setCaseStudiesOpen((prev) => {
                if (!prev) {
                  setActiveCaseStudy(getCaseStudyFromPath(pathname) ?? "nonprofit");
                  if (servicesOpen) setServicesOpen(false);
                }
                return !prev;
              });
            }}
            className={`flex items-center gap-1.5 font-headline text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${
              caseStudiesOpen || isCaseStudiesActive
                ? "text-primary font-bold"
                : "text-stone-600 hover:text-primary"
            }`}
          >
            Case Studies
            <motion.span
              animate={{ rotate: caseStudiesOpen ? 180 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex"
            >
              <Chevron className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          <Link href="/faqs" className={navLinkClass("/faqs")}>
            FAQs
          </Link>

          <Link href="/contact#contact-form" className={navLinkClass("/contact")}>
            Contact Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] p-2.5"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
        >
          <span
            className="block h-0.5 w-6 bg-stone-900 rounded-full origin-center transition-transform duration-300"
            style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : undefined }}
          />
          <span
            className="block h-0.5 w-6 bg-stone-900 rounded-full transition-opacity duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 bg-stone-900 rounded-full origin-center transition-transform duration-300"
            style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : undefined }}
          />
        </button>
      </div>

      {/* ── Services mega menu ── */}
      <AnimatePresence>
        {servicesOpen && (
          <ServicesMegaMenu
            onClose={closeServices}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            pageCategory={pageCategory}
          />
        )}
      </AnimatePresence>

      {/* ── Case Studies mega menu ── */}
      <AnimatePresence>
        {caseStudiesOpen && (
          <CaseStudiesMegaMenu
            onClose={() => setCaseStudiesOpen(false)}
            activeCaseStudy={activeCaseStudy}
            onCaseStudyChange={setActiveCaseStudy}
            pageCaseStudy={pageCaseStudy}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile menu ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="region"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/20 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-4">
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 font-headline text-sm tracking-widest uppercase border-b border-outline-variant/20 transition-colors duration-200 ${
                  isActive("/about") ? "text-primary font-bold" : "text-stone-700 hover:text-primary"
                }`}
              >
                About Us
              </Link>

              {/* Services accordion */}
              <div className="border-b border-outline-variant/20">
                <button
                  onClick={() => setMobileServicesExpanded((s) => !s)}
                  className={`flex items-center justify-between w-full py-3.5 font-headline text-sm tracking-widest uppercase transition-colors duration-200 ${
                    isServicesActive ? "text-primary" : "text-stone-700 hover:text-primary"
                  }`}
                >
                  Services
                  <motion.span
                    animate={{ rotate: mobileServicesExpanded ? 180 : 0 }}
                    transition={{ duration: 0.32, ease: EASE }}
                    className="inline-flex"
                  >
                    <Chevron className="w-3.5 h-3.5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.id} className="ml-3 border-b border-outline-variant/20 last:border-0">

                          {/* Category link at top of sub-accordion header */}
                          <div className="flex items-center justify-between py-3">
                            <Link
                              href={group.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 font-headline text-sm text-stone-700 hover:text-primary transition-colors duration-200"
                            >
                              <span className="text-stone-400">{CATEGORY_ICONS[group.id]}</span>
                              {group.label}
                              <ExternalArrow className="w-3.5 h-3.5 text-stone-400" />
                            </Link>
                            <button
                              onClick={() =>
                                setMobileActiveCategory((c) => c === group.id ? null : group.id)
                              }
                              aria-label={`Toggle ${group.label} services`}
                              className="p-1 text-stone-400 hover:text-primary transition-colors duration-200"
                            >
                              <motion.span
                                animate={{ rotate: mobileActiveCategory === group.id ? 180 : 0 }}
                                transition={{ duration: 0.25, ease: EASE }}
                                className="inline-flex"
                              >
                                <Chevron className="w-3.5 h-3.5" />
                              </motion.span>
                            </button>
                          </div>

                          <AnimatePresence initial={false}>
                            {mobileActiveCategory === group.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: EASE }}
                                className="overflow-hidden pb-2"
                              >
                                {group.items.map((item) => (
                                  <Link
                                    key={item.href + item.label}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2.5 py-2.5 pl-5 font-body text-sm text-stone-600 hover:text-primary transition-colors duration-200"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Case Studies accordion */}
              <div className="border-b border-outline-variant/20">
                <button
                  onClick={() => setMobileCaseStudiesExpanded((s) => !s)}
                  className={`flex items-center justify-between w-full py-3.5 font-headline text-sm tracking-widest uppercase transition-colors duration-200 ${
                    isCaseStudiesActive ? "text-primary" : "text-stone-700 hover:text-primary"
                  }`}
                >
                  Case Studies
                  <motion.span
                    animate={{ rotate: mobileCaseStudiesExpanded ? 180 : 0 }}
                    transition={{ duration: 0.32, ease: EASE }}
                    className="inline-flex"
                  >
                    <Chevron className="w-3.5 h-3.5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileCaseStudiesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 pb-2">
                        <Link
                          href="/case-studies"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-2.5 pl-2 font-body text-sm text-stone-600 hover:text-primary transition-colors duration-200 border-b border-outline-variant/20 mb-1"
                        >
                          All Case Studies
                          <ExternalArrow className="w-3.5 h-3.5 text-stone-400" />
                        </Link>
                        {CASE_STUDIES.map((cs) => (
                          <Link
                            key={cs.href}
                            href={cs.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-start gap-2.5 py-2.5 pl-5 font-body text-sm text-stone-600 hover:text-primary transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0 mt-2" />
                            <div>
                              <p className="leading-snug">{cs.label}</p>
                              <p className="text-[10px] text-stone-400 tracking-wider uppercase mt-0.5">{cs.tag}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/faqs"
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 font-headline text-sm tracking-widest uppercase border-b border-outline-variant/20 transition-colors duration-200 ${
                  isActive("/faqs") ? "text-primary font-bold" : "text-stone-700 hover:text-primary"
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact#contact-form"
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 font-headline text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isActive("/contact") ? "text-primary font-bold" : "text-stone-700 hover:text-primary"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
