"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const LOGO_URL =
  "https://nextcloud.illumiasolutions.com/s/BoJ6wwwsN5ja8aR/download/Slide4_transparent-removebg-preview.png";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type CaseStudyId = "nonprofit" | "cyber" | "pci";

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
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=70",
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
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=70",
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
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=70",
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

const CASE_STUDY_ICONS: Record<CaseStudyId, React.ReactNode> = {
  nonprofit: <HeartIcon />,
  cyber: <LockIcon />,
  pci: <CardIcon />,
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
      className="absolute top-full left-0 w-full bg-[#fcf9f8] border-b border-[#e2bebd]/40 shadow-2xl shadow-stone-900/10 z-50"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex">

        {/* Left: case study selector */}
        <div className="w-64 xl:w-72 shrink-0 border-r border-[#e2bebd]/30 py-10 pr-8 flex flex-col gap-2">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#b31c33] font-bold mb-4 px-4">
            Featured Work
          </span>

          {CASE_STUDIES.map((cs) => {
            const selected = activeCaseStudy === cs.id;
            const onPage = pageCaseStudy === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => onCaseStudyChange(cs.id)}
                className={`group/cat flex items-center gap-3.5 w-full text-left px-4 py-3.5 border-l-2 transition-colors duration-200 ${
                  selected
                    ? "border-[#b31c33] bg-[#b31c33]/[0.06]"
                    : "border-transparent hover:border-[#e2bebd] hover:bg-stone-50/80"
                }`}
              >
                <span
                  className={`shrink-0 transition-colors duration-200 ${selected ? "text-[#b31c33]" : "text-stone-400 group-hover/cat:text-stone-600"}`}
                  aria-hidden
                >
                  {CASE_STUDY_ICONS[cs.id]}
                </span>
                <div className="min-w-0 text-left flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`font-headline text-base leading-snug transition-colors duration-200 ${
                      selected ? "text-[#b31c33]" : "text-stone-800 group-hover/cat:text-stone-900"
                    }`}>
                      {cs.shortLabel}
                    </p>
                    {onPage && !selected && (
                      <span className="font-body text-[10px] tracking-widest uppercase text-[#b31c33]/60 font-semibold">
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

        {/* Right: case study detail */}
        <div className="flex-1 min-w-0 pl-10 py-10 relative overflow-hidden">
          {/* All-case-studies link — AT TOP, prominent, with external-link icon */}
          <Link
            href="/case-studies"
            onClick={onClose}
            className="group/catlink inline-flex items-center gap-2.5 mb-6 pb-5 border-b border-[#e2bebd]/40 w-full"
          >
            <span className="font-headline text-xl text-stone-900 group-hover/catlink:text-[#b31c33] transition-colors duration-200 leading-none">
              All Case Studies
            </span>
            <ExternalArrow className="w-4 h-4 text-stone-400 group-hover/catlink:text-[#b31c33] transition-colors duration-200 shrink-0" />
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
                  <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b31c33] backdrop-blur">
                    {activeCs.tag}
                  </span>
                </div>
              </Link>

              {/* Text */}
              <div className="md:col-span-7 flex flex-col">
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-[#b31c33] font-bold mb-2">
                  {activeCs.subtitle}
                </p>
                <h3 className="font-headline text-xl md:text-2xl text-stone-900 leading-snug mb-4">
                  {activeCs.label}
                </h3>
                <p className="font-body text-sm text-[#5a4040] leading-relaxed mb-5">
                  {activeCs.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {activeCs.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 font-body text-xs text-stone-700 leading-snug"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#b31c33]/10 text-[#b31c33]">
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
                  className="group/cta inline-flex items-center gap-2 self-start rounded-lg bg-[#b31c33] px-5 py-2.5 font-body text-xs font-semibold text-white transition hover:bg-[#920022] mt-auto"
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

type ServiceCategory = "cloud" | "cyber" | "open";

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

const CATEGORY_ICONS: Record<ServiceCategory, React.ReactNode> = {
  cloud: <CloudIcon />,
  cyber: <ShieldIcon />,
  open: <CodeIcon />,
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
      className="absolute top-full left-0 w-full bg-[#fcf9f8] border-b border-[#e2bebd]/40 shadow-2xl shadow-stone-900/10 z-50"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex">

        {/* Left: category selector */}
        <div className="w-64 xl:w-72 shrink-0 border-r border-[#e2bebd]/30 py-10 pr-8 flex flex-col gap-2">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#b31c33] font-bold mb-4 px-4">
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
                    ? "border-[#b31c33] bg-[#b31c33]/[0.06]"
                    : "border-transparent hover:border-[#e2bebd] hover:bg-stone-50/80"
                }`}
              >
                <span
                  className={`shrink-0 transition-colors duration-200 ${selected ? "text-[#b31c33]" : "text-stone-400 group-hover/cat:text-stone-600"}`}
                  aria-hidden
                >
                  {CATEGORY_ICONS[group.id]}
                </span>
                <div className="min-w-0 text-left flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`font-headline text-base leading-snug transition-colors duration-200 ${
                      selected ? "text-[#b31c33]" : "text-stone-800 group-hover/cat:text-stone-900"
                    }`}>
                      {group.label}
                    </p>
                    {onPage && !selected && (
                      <span className="font-body text-[10px] tracking-widest uppercase text-[#b31c33]/60 font-semibold">
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
        <div className="flex-1 min-w-0 pl-10 py-10 relative overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18, position: "absolute" as const, top: 0, left: 40, right: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {/* Category page link — AT TOP, prominent, with external-link icon */}
              <Link
                href={activeGroup.href}
                onClick={onClose}
                className="group/catlink inline-flex items-center gap-2.5 mb-6 pb-5 border-b border-[#e2bebd]/40 w-full"
              >
                <span className="font-headline text-xl text-stone-900 group-hover/catlink:text-[#b31c33] transition-colors duration-200 leading-none">
                  {activeGroup.label} Services
                </span>
                <ExternalArrow className="w-4 h-4 text-stone-400 group-hover/catlink:text-[#b31c33] transition-colors duration-200 shrink-0" />
              </Link>

              {/* Items grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1" data-category={activeGroup.id}>
                {activeGroup.items.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={onClose}
                    className="group/item flex items-center gap-3 py-2.5 px-3 text-stone-600 hover:text-[#b31c33] hover:bg-[#b31c33]/[0.05] transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e2bebd] group-hover/item:bg-[#b31c33] shrink-0 transition-colors duration-200" />
                    <span className="font-body text-sm leading-snug">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
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
      isActive(href) ? "text-[#b31c33] font-bold" : "text-stone-600 hover:text-[#b31c33]"
    }`;

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-[#fcf9f8]/90 backdrop-blur-xl border-b border-[#e2bebd]/20 shadow-sm shadow-stone-900/5"
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
                ? "text-[#b31c33] font-bold"
                : "text-stone-600 hover:text-[#b31c33]"
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
                ? "text-[#b31c33] font-bold"
                : "text-stone-600 hover:text-[#b31c33]"
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
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#e2bebd]/20 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-4">
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 font-headline text-sm tracking-widest uppercase border-b border-[#e2bebd]/20 transition-colors duration-200 ${
                  isActive("/about") ? "text-[#b31c33] font-bold" : "text-stone-700 hover:text-[#b31c33]"
                }`}
              >
                About Us
              </Link>

              {/* Services accordion */}
              <div className="border-b border-[#e2bebd]/20">
                <button
                  onClick={() => setMobileServicesExpanded((s) => !s)}
                  className={`flex items-center justify-between w-full py-3.5 font-headline text-sm tracking-widest uppercase transition-colors duration-200 ${
                    isServicesActive ? "text-[#b31c33]" : "text-stone-700 hover:text-[#b31c33]"
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
                        <div key={group.id} className="ml-3 border-b border-[#e2bebd]/20 last:border-0">

                          {/* Category link at top of sub-accordion header */}
                          <div className="flex items-center justify-between py-3">
                            <Link
                              href={group.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 font-headline text-sm text-stone-700 hover:text-[#b31c33] transition-colors duration-200"
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
                              className="p-1 text-stone-400 hover:text-[#b31c33] transition-colors duration-200"
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
                                    className="flex items-center gap-2.5 py-2.5 pl-5 font-body text-sm text-stone-600 hover:text-[#b31c33] transition-colors duration-200"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#e2bebd] shrink-0" />
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
              <div className="border-b border-[#e2bebd]/20">
                <button
                  onClick={() => setMobileCaseStudiesExpanded((s) => !s)}
                  className={`flex items-center justify-between w-full py-3.5 font-headline text-sm tracking-widest uppercase transition-colors duration-200 ${
                    isCaseStudiesActive ? "text-[#b31c33]" : "text-stone-700 hover:text-[#b31c33]"
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
                          className="flex items-center gap-2 py-2.5 pl-2 font-body text-sm text-stone-600 hover:text-[#b31c33] transition-colors duration-200 border-b border-[#e2bebd]/20 mb-1"
                        >
                          All Case Studies
                          <ExternalArrow className="w-3.5 h-3.5 text-stone-400" />
                        </Link>
                        {CASE_STUDIES.map((cs) => (
                          <Link
                            key={cs.href}
                            href={cs.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-start gap-2.5 py-2.5 pl-5 font-body text-sm text-stone-600 hover:text-[#b31c33] transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#e2bebd] shrink-0 mt-2" />
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
                className={`block py-3.5 font-headline text-sm tracking-widest uppercase border-b border-[#e2bebd]/20 transition-colors duration-200 ${
                  isActive("/faqs") ? "text-[#b31c33] font-bold" : "text-stone-700 hover:text-[#b31c33]"
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact#contact-form"
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 font-headline text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isActive("/contact") ? "text-[#b31c33] font-bold" : "text-stone-700 hover:text-[#b31c33]"
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
