"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Server, Layers, HardDrive, Shield, Network, Database, Cpu, RefreshCcw, Globe2, ScanLine, ShieldAlert } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };

// Real images — official proxmox.com screenshots
const IMG = {
  logo: "/images/logos/proxmox-silver-partner.png",
  dashboard: "/images/proxmox/dashboard.png",
  ha: "/images/proxmox/ha.png",
  esxi: "/images/proxmox/esxi.png",
  cluster: "/images/proxmox/cluster.png",
  metrics: "/images/proxmox/metrics.png",
  sdn: "/images/proxmox/sdn.png",
  backup: "/images/proxmox/backup.png",
};

/* Plain figure-caption style attribution — no background, sits below the image.
   `dark` = caption sits on a dark section bg, so use light text; otherwise dark text. */
function SourceCaption({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p className={`mt-2 font-body text-[11px] italic ${dark ? "text-white/45" : "text-[#5a4040]"}`}>
      Source: {children}
    </p>
  );
}

function BrowserFrame({
  src,
  alt,
  source,
  dark = false,
  className = "",
}: {
  src: string;
  alt: string;
  source?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="rounded-xl overflow-hidden border border-white/[0.09] shadow-2xl shadow-black/60">
        <div className="bg-[#1c1b1b] px-4 py-2.5 flex items-center gap-3 border-b border-white/[0.07]">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
          </div>
          <div className="flex-1 h-[18px] rounded bg-white/[0.06] max-w-[200px]" />
        </div>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="eager"
          decoding="async"
        />
      </div>
      {source && <SourceCaption dark={dark}>{source}</SourceCaption>}
    </div>
  );
}

const COMPARISON = [
  { before: "Per-core subscription — no perpetual licences", after: "AGPL open-source, zero seat fees" },
  { before: "vCenter required for HA", after: "Built-in cluster management" },
  { before: "vSAN billed separately", after: "Ceph integrated, no cost" },
  { before: "Broadcom vendor lock-in", after: "Community + optional SLA" },
  { before: "Thick-client vSphere admin", after: "Browser-native web console" },
  { before: "ESXi proprietary kernel", after: "Debian, upstream patches same day" },
];

const REMAINING_CAPS = [
  { icon: HardDrive, title: "ZFS Snapshots", text: "Instant copy-on-write, async replication, self-healing checksums — ideal for branch and edge." },
  { icon: Shield, title: "Proxmox Backup Server", text: "Deduplicated, encrypted incremental backups with point-in-time restore. Replaces Veeam licensing." },
  { icon: Network, title: "SDN Stack", text: "VXLAN overlays, EVPN, and zone-based segmentation. Native OVS and Linux bridge." },
  { icon: Database, title: "REST API", text: "Every UI action has an API equivalent. Provision via Terraform, configure via Ansible." },
];

const AMS_PILLARS = [
  {
    n: "01",
    icon: ScanLine,
    title: "Gap Assessment, Recommendation & Remediation",
    text: "Systematic evaluation of your Proxmox environment against security baselines and operational best practices. Findings delivered as prioritised action items with remediation handled end-to-end by Illumia engineers.",
    items: ["Annual baseline audit", "Remediation roadmap", "Configuration hardening", "Post-remediation validation"],
  },
  {
    n: "02",
    icon: Globe2,
    title: "Geo-Distributed Monitoring",
    text: "24/7 observability across all nodes, clusters, and sites — latency, saturation, and error rates surfaced in a unified dashboard. Proactive alerting catches degradation before it becomes downtime.",
    items: ["Multi-site cluster visibility", "Real-time metric collection", "Alerting & escalation runbooks", "Monthly uptime reports"],
  },
  {
    n: "03",
    icon: ShieldAlert,
    title: "Quarterly Vulnerability Assessment",
    text: "Four structured security reviews per year covering CVE exposure, network surface, and access controls. Each assessment closes with a risk-rated finding report and patch coordination.",
    items: ["CVE scanning per node", "Network exposure review", "Privileged access audit", "Patch scheduling & coordination"],
  },
  {
    n: "04",
    icon: RefreshCcw,
    title: "Proxmox Ecosystem Upgradation",
    text: "Continuous alignment with the Proxmox VE release track — planned, tested, zero-downtime upgrades to PVE, PBS, and PMG components with full rollback procedures documented before every change.",
    items: ["Version lifecycle tracking", "Staged rolling upgrades", "Pre-upgrade test validation", "Rollback runbook per upgrade"],
  },
];

const PROXMOX_PRODUCTS = [
  {
    n: "01",
    name: "Proxmox Virtual Environment",
    abbr: "PVE",
    tagline: "Type-1 Hypervisor Platform",
    desc: "KVM virtualisation and LXC containers unified under one browser interface. Built-in HA clustering, live migration, Ceph HCI storage, ZFS, and a full REST API — zero per-core fees, zero seat counts.",
    features: [
      "KVM VMs and LXC containers on one platform",
      "Built-in HA clustering and live migration",
      "Ceph block/object + ZFS local storage",
      "Full REST API — Terraform and Ansible ready",
    ],
    img: "/images/proxmox/dashboard.png",
    imgAlt: "Proxmox VE Datacenter Dashboard",
    source: "proxmox.com",
  },
  {
    n: "02",
    name: "Proxmox Datacenter Manager",
    abbr: "PDM",
    tagline: "Centralised Fleet Control",
    desc: "Single management plane across every Proxmox VE cluster in your estate. Monitor, coordinate upgrades, and enforce access policies from one interface — spanning multiple sites with no per-node agents.",
    features: [
      "Multi-cluster unified dashboard",
      "Cross-site node and VM visibility",
      "Centralised upgrade coordination",
      "RBAC scoped to cluster or node level",
    ],
    img: "/images/proxmox/pdm.png",
    imgAlt: "Proxmox Datacenter Manager",
    source: "proxmox.com",
  },
  {
    n: "03",
    name: "Proxmox Backup Server",
    abbr: "PBS",
    tagline: "Deduplicated, Encrypted Backup",
    desc: "Incremental block-level backups for VMs, containers, and physical hosts. Client-side AES-256 encryption, chunk-level deduplication, and verifiable point-in-time restores — replaces Veeam without the invoice.",
    features: [
      "Incremental block-level snapshot backups",
      "Client-side AES-256 encryption",
      "Chunk deduplication — 60–80% storage savings",
      "Restore integrity verification before you need it",
    ],
    img: "/images/proxmox/backup.png",
    imgAlt: "Proxmox Backup Server Dashboard",
    source: "proxmox.com",
  },
  {
    n: "04",
    name: "Proxmox Mail Gateway",
    abbr: "PMG",
    tagline: "On-Premise Email Security",
    desc: "Open-source SMTP proxy scanning all inbound and outbound mail traffic. Spam classification, virus scanning, DMARC/SPF/DKIM enforcement, and per-user quarantine — SMTP proxy architecture, no MX record change required.",
    features: [
      "Spam and phishing classification engine",
      "Virus scanning — ClamAV and commercial feeds",
      "DMARC / SPF / DKIM enforcement",
      "Per-user quarantine and detailed reporting",
    ],
    img: "/images/proxmox/pmg.png",
    imgAlt: "Proxmox Mail Gateway Dashboard",
    source: "proxmox.com",
  },
];

const PHASES = [
  {
    n: "01", title: "Assessment",
    items: ["VM inventory and dependency mapping", "Workload criticality and I/O classification", "Hardware compatibility audit", "Migration risk register"],
  },
  {
    n: "02", title: "Design",
    items: ["Cluster architecture and node sizing", "Storage layout — Ceph, ZFS, or NFS", "Network topology and VLAN plan", "HA policy per workload tier"],
  },
  {
    n: "03", title: "Phased Migration",
    items: ["Non-critical workloads first", "Parallel-run validation before cutover", "Node-by-node — VMware stays live throughout", "Documented rollback per batch"],
  },
  {
    n: "04", title: "Handover",
    items: ["Runbook and architecture documentation", "Team training on Proxmox VE and PBS", "Monitoring and alerting configured", "Optional 90-day post-migration SLA"],
  },
];

export default function ProxmoxContent() {
  return (
    <div className="overflow-x-hidden">
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[100dvh] bg-[#fcf9f8] overflow-hidden flex items-center">

        {/* Subtle dot texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(28,27,27,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient red glow */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 w-[50vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_left,rgba(179,28,51,0.06),transparent_70%)]" />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 pt-28 md:pt-36 pb-20 md:pb-16">
          <div className="grid lg:grid-cols-[52%_48%] gap-10 xl:gap-16 items-center">

            {/* ── Left: text ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-0">

              {/* Proxmox logo — big */}
              <motion.div variants={fadeUp} className="mb-5">
                <img
                  src={IMG.logo}
                  alt="Proxmox"
                  className="h-8 md:h-10 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Badge */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
                <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">
                  Silver Partner
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-headline text-[3.2rem] sm:text-6xl md:text-7xl xl:text-[5rem] text-[#1c1b1b] leading-[0.88] tracking-[-0.03em] mb-7"
              >
                On-Premise<br />
                Private Cloud.<br />
                <span className="text-[#b31c33] italic font-normal">Begone Big Bills.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="font-body text-[15px] text-[#5a4040] leading-[1.8] max-w-[520px] mb-9">
                Proxmox Virtual Environment delivers KVM VMs, LXC containers, HA clustering, Ceph HCI storage, and live migration under an open-source AGPL licence — with no per-CPU fees, no seat counts, and no Broadcom renewal surprises.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeIn} className="flex flex-wrap gap-x-8 gap-y-4 pb-9 mb-9 border-b border-[#e2bebd]/60">
                {[
                  { v: "60–80%", l: "vs VMware licensing" },
                  { v: "AGPL", l: "Open-source licence" },
                  { v: "0 data loss", l: "Migration methodology" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-headline text-[1.6rem] text-[#1c1b1b] leading-none mb-1">{s.v}</div>
                    <div className="font-body text-[11px] text-[#8e706f] tracking-wide">{s.l}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-6 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97]"
                >
                  Plan Your Migration
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-[#1c1b1b]/15 text-[#5a4040] hover:text-[#1c1b1b] hover:border-[#1c1b1b]/30 px-6 py-3.5 rounded-[10px] font-body text-sm font-medium transition-all duration-200"
                >
                  See Case Studies
                  <ArrowUpRight size={13} className="opacity-60" />
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Right: screenshots ── */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              {/* Main screenshot */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              >
                <BrowserFrame src={IMG.dashboard} alt="Proxmox VE Datacenter Dashboard" source="proxmox.com" />
              </motion.div>

              {/* Floating secondary screenshot */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-[58%] z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BrowserFrame src={IMG.ha} alt="Proxmox HA Migration" />
                </motion.div>
              </motion.div>

              {/* Background blur blob */}
              <div aria-hidden className="absolute inset-y-8 -inset-x-4 bg-[radial-gradient(ellipse_70%_60%_at_60%_50%,rgba(179,28,51,0.05),transparent)] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ ANNUAL MAINTENANCE SERVICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          {/* ── Header ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-10 border-b border-[#e2bebd]/40"
          >
            <div>
              <motion.span variants={fadeUp} className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
                Annual Maintenance Service
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-headline text-4xl md:text-[2.8rem] lg:text-[3.2rem] text-[#1c1b1b] leading-[1.03] tracking-tight"
              >
                Beyond migration.<br />
                <span className="italic font-normal text-[#b31c33]">Infrastructure, sustained.</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-end gap-x-10 gap-y-3 lg:pb-1 shrink-0">
              {[
                { v: "4", l: "Service pillars" },
                { v: "Annual", l: "Commitment term" },
                { v: "Quarterly", l: "Security cadence" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-headline text-[1.6rem] text-[#1c1b1b] leading-none mb-1">{s.v}</div>
                  <div className="font-body text-[11px] text-[#8e706f] tracking-wide">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Bento Grid ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          >
            {/* Card 01 — Gap Assessment (tall, spans 2 rows on left) */}
            <motion.div
              variants={fadeUp}
              className="md:row-span-2 bg-white border border-[#e2bebd]/40 rounded-2xl p-8 flex flex-col gap-6 group hover:border-[#b31c33]/25 hover:shadow-xl hover:shadow-[#b31c33]/[0.05] transition-all duration-300"
            >
              <div className="relative h-36 rounded-xl overflow-hidden bg-[#b31c33]/[0.025] border border-[#e2bebd]/50 shrink-0">
                <div
                  className="absolute inset-0 p-3"
                  style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gridTemplateRows: "repeat(6, 1fr)" }}
                >
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[3px] h-[3px] rounded-full bg-[#b31c33] self-center justify-self-center"
                      animate={{ opacity: [0.07, 0.65, 0.07] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: (i % 20) * 0.08, ease: "easeInOut" }}
                    />
                  ))}
                </div>
                <motion.div
                  className="absolute inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-[#b31c33]/65 to-transparent"
                  animate={{ top: ["12px", "calc(100% - 12px)", "12px"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="absolute bottom-2 right-3 font-body text-[8px] tracking-[0.22em] uppercase text-[#b31c33]/35 select-none">
                  Scanning environment
                </span>
              </div>
              <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums">01</span>
              <div>
                <h3 className="font-headline text-[1.2rem] text-[#1c1b1b] leading-[1.2] tracking-tight mb-2.5">
                  Gap Assessment,<br />Recommendation & Remediation
                </h3>
                <p className="font-body text-[13px] text-[#5a4040] leading-[1.8]">
                  Systematic evaluation against security baselines and operational best practices. Findings delivered as prioritised action items — remediation handled end-to-end by Illumia engineers.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#e2bebd]/40">
                {["Annual baseline audit", "Remediation roadmap", "Configuration hardening", "Post-remediation validation"].map(it => (
                  <li key={it} className="flex items-center gap-2.5">
                    <CheckCircle2 size={11} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-[12px] text-[#8e706f]">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 02 — Geo Monitoring (wide, top right, col-span-2) */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 bg-white border border-[#e2bebd]/40 rounded-2xl p-8 flex flex-col gap-5 group hover:border-[#b31c33]/25 hover:shadow-xl hover:shadow-[#b31c33]/[0.05] transition-all duration-300"
            >
              <div className="relative h-20 rounded-xl overflow-hidden bg-[#b31c33]/[0.025] border border-[#e2bebd]/50 shrink-0">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  {[
                    { x1: "8%", y1: "50%", x2: "27%", y2: "28%", d: 0 },
                    { x1: "27%", y1: "28%", x2: "50%", y2: "62%", d: 0.4 },
                    { x1: "50%", y1: "62%", x2: "73%", y2: "22%", d: 0.8 },
                    { x1: "73%", y1: "22%", x2: "92%", y2: "56%", d: 1.2 },
                  ].map((l, i) => (
                    <motion.line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                      stroke="rgba(179,28,51,0.18)" strokeWidth="1"
                      animate={{ opacity: [0.18, 0.55, 0.18] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: l.d }}
                    />
                  ))}
                </svg>
                {[
                  { left: "8%", top: "50%", delay: 0 },
                  { left: "27%", top: "28%", delay: 0.4 },
                  { left: "50%", top: "62%", delay: 0.8 },
                  { left: "73%", top: "22%", delay: 1.2 },
                  { left: "92%", top: "56%", delay: 1.6 },
                ].map((n, i) => (
                  <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: n.left, top: n.top }}>
                    <motion.div
                      className="absolute rounded-full border border-[#b31c33]/22"
                      style={{ inset: "-7px" }}
                      animate={{ scale: [1, 2.4], opacity: [0.4, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: n.delay, ease: "easeOut" }}
                    />
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-[#b31c33]"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: n.delay }}
                    />
                  </div>
                ))}
                <span className="absolute top-1.5 left-3 font-body text-[8px] tracking-[0.2em] uppercase text-[#b31c33]/30 select-none">AP-South</span>
                <span className="absolute top-1.5 right-3 font-body text-[8px] tracking-[0.2em] uppercase text-[#b31c33]/30 select-none">EU-West</span>
              </div>
              <div className="flex items-start gap-5">
                <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums shrink-0">02</span>
                <div>
                  <h3 className="font-headline text-[1.2rem] text-[#1c1b1b] leading-[1.2] tracking-tight mb-2">Geo-Distributed Monitoring</h3>
                  <p className="font-body text-[13px] text-[#5a4040] leading-[1.8]">
                    24/7 observability across all nodes, clusters, and sites — latency, saturation, and error rates surfaced in a unified dashboard. Proactive alerting catches degradation before downtime.
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-1.5 pt-4 border-t border-[#e2bebd]/40">
                {["Multi-site cluster visibility", "Real-time metric collection", "Alerting & escalation runbooks", "Monthly uptime reports"].map(it => (
                  <li key={it} className="flex items-center gap-2">
                    <CheckCircle2 size={11} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-[12px] text-[#8e706f]">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 03 — Quarterly Vulnerability */}
            <motion.div
              variants={fadeUp}
              className="bg-white border border-[#e2bebd]/40 rounded-2xl p-8 flex flex-col gap-5 group hover:border-[#b31c33]/25 hover:shadow-xl hover:shadow-[#b31c33]/[0.05] transition-all duration-300"
            >
              <div className="relative w-14 h-14 shrink-0">
                <motion.div className="absolute inset-0 rounded-full border border-dashed border-[#b31c33]/22"
                  animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute inset-[7px] rounded-full border border-[#b31c33]/12"
                  animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute inset-[2px] rounded-full bg-[#b31c33]/[0.04]"
                  animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldAlert size={19} className="text-[#b31c33]" strokeWidth={1.5} />
                </div>
              </div>
              <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums">03</span>
              <div>
                <h3 className="font-headline text-[1.2rem] text-[#1c1b1b] leading-[1.2] tracking-tight mb-2">Quarterly Vulnerability Assessment</h3>
                <p className="font-body text-[13px] text-[#5a4040] leading-[1.8]">
                  Four structured security reviews per year. CVE exposure, network surface, access controls — each closes with a risk-rated report and coordinated patch scheduling.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#e2bebd]/40">
                {["CVE scanning per node", "Network exposure review", "Privileged access audit", "Patch scheduling"].map(it => (
                  <li key={it} className="flex items-center gap-2.5">
                    <CheckCircle2 size={11} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-[12px] text-[#8e706f]">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 04 — Ecosystem Upgradation */}
            <motion.div
              variants={fadeUp}
              className="bg-white border border-[#e2bebd]/40 rounded-2xl p-8 flex flex-col gap-5 group hover:border-[#b31c33]/25 hover:shadow-xl hover:shadow-[#b31c33]/[0.05] transition-all duration-300"
            >
              <div className="rounded-lg bg-[#b31c33]/[0.025] border border-[#e2bebd]/50 px-4 py-3 space-y-2 shrink-0">
                {[
                  { pkg: "PVE", from: "8.1.3", to: "8.2.4", delay: 0 },
                  { pkg: "PBS", from: "3.2.1", to: "3.3.0", delay: 1.1 },
                  { pkg: "PMG", from: "8.0.2", to: "8.1.1", delay: 2.2 },
                ].map((v) => (
                  <motion.div key={v.pkg} className="flex items-center gap-2 font-mono text-[11px]"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: v.delay, ease: "easeInOut" }}
                  >
                    <span className="text-[#1c1b1b] font-semibold w-7">{v.pkg}</span>
                    <span className="text-[#8e706f]">{v.from}</span>
                    <ArrowRight size={9} className="text-[#b31c33] shrink-0" />
                    <span className="text-[#b31c33] font-semibold">{v.to}</span>
                    <motion.div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#b31c33]"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: v.delay + 1.5 }} />
                  </motion.div>
                ))}
              </div>
              <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums">04</span>
              <div>
                <h3 className="font-headline text-[1.2rem] text-[#1c1b1b] leading-[1.2] tracking-tight mb-2">Proxmox Ecosystem Upgradation</h3>
                <p className="font-body text-[13px] text-[#5a4040] leading-[1.8]">
                  Continuous alignment with the Proxmox release track — planned, tested, zero-downtime upgrades to PVE, PBS, and PMG with full rollback procedures documented before every change.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#e2bebd]/40">
                {["Version lifecycle tracking", "Staged rolling upgrades", "Pre-upgrade validation", "Rollback runbooks"].map(it => (
                  <li key={it} className="flex items-center gap-2.5">
                    <CheckCircle2 size={11} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-[12px] text-[#8e706f]">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── CTA strip ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#e2bebd]/40"
          >
            <p className="font-body text-[14px] text-[#5a4040] max-w-lg">
              AMS engagements are scoped annually with optional monthly reporting. Direct line to Illumia engineers — not a ticketing queue.
            </p>
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97] shrink-0"
            >
              Request AMS Proposal
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ━━━ PROXMOX PRODUCT SUITE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0d0c0c] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-16">
            <motion.span variants={fadeUp} className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Proxmox Product Suite
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight max-w-2xl">
              One ecosystem.<br />
              <span className="text-[#b31c33] italic font-normal">Four products.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/40 leading-[1.8] max-w-xl mt-5">
              Proxmox ships a complete on-premise infrastructure stack — virtualisation, centralised management, backup, and mail security — all open-source, all under one licence model.
            </motion.p>
          </motion.div>

          <div className="flex flex-col">
            {PROXMOX_PRODUCTS.map((p, i) => (
              <motion.div
                key={p.n}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14 border-b border-white/[0.07] last:border-0"
              >
                <motion.div variants={fadeUp} className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-headline italic text-[#b31c33] text-2xl leading-none tabular-nums">{p.n}</span>
                    <span className="font-body text-[9px] tracking-[0.28em] uppercase text-white/28 font-semibold">{p.abbr}</span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-[2rem] text-white leading-[1.1] tracking-tight">
                    {p.name}
                  </h3>
                  <p className="font-body text-[11px] tracking-[0.22em] uppercase text-[#b31c33] font-semibold">{p.tagline}</p>
                  <p className="font-body text-[14px] text-white/42 leading-[1.85]">{p.desc}</p>
                  <ul className="flex flex-col gap-2.5 pt-2">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                        <span className="font-body text-sm text-white/52">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeIn} className={`hidden lg:block ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <BrowserFrame src={p.img} alt={p.imgAlt} source={p.source} dark />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━ CAPABILITIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-16">
            <motion.span variants={fadeUp} className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Platform Capabilities
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-xl">
              Everything enterprise virtualisation requires.
            </motion.h2>
          </motion.div>

          {/* Capability spotlight rows — alternating */}
          <div className="flex flex-col gap-0">

            {/* Row 1: VMware Import — text left, screenshot right */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14 border-b border-[#e2bebd]/40"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <div className="inline-flex items-center gap-2.5 self-start">
                  <Server size={14} className="text-[#b31c33]" strokeWidth={1.5} />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-bold">Virtualisation</span>
                </div>
                <h3 className="font-headline text-3xl md:text-[2rem] text-[#1c1b1b] leading-[1.1] tracking-tight">
                  KVM VMs and LXC Containers — one platform, no extra licences.
                </h3>
                <p className="font-body text-[14px] text-[#5a4040] leading-[1.8]">
                  Hardware-virtualised VMs via KVM alongside lightweight Linux containers via LXC — both managed from a single browser interface. Import directly from VMware ESXi or vSphere with the native vCenter importer, preserving disks, MACs, and network configuration.
                </p>
                <ul className="flex flex-col gap-2">
                  {["Live migration across nodes", "Nested virtualisation support", "PCI passthrough for GPUs and NICs", "Direct ESXi/vCenter import"].map(it => (
                    <li key={it} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                      <span className="font-body text-sm text-[#5a4040]">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="hidden lg:block">
                <BrowserFrame src={IMG.esxi} alt="Proxmox VMware ESXi Guest Import" source="proxmox.com" />
              </motion.div>
            </motion.div>

            {/* Row 2: HA — screenshot left, text right */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14 border-b border-[#e2bebd]/40"
            >
              <motion.div variants={fadeIn} className="hidden lg:block">
                <BrowserFrame src={IMG.ha} alt="Proxmox HA Balancing and Migration" source="proxmox.com" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <div className="inline-flex items-center gap-2.5 self-start">
                  <Layers size={14} className="text-[#b31c33]" strokeWidth={1.5} />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-bold">High Availability</span>
                </div>
                <h3 className="font-headline text-3xl md:text-[2rem] text-[#1c1b1b] leading-[1.1] tracking-tight">
                  HA clustering with automated failover — no extra licences.
                </h3>
                <p className="font-body text-[14px] text-[#5a4040] leading-[1.8]">
                  Corosync quorum, automated fencing, and per-VM migration policies. Dynamic load balancing redistributes VMs across nodes in real time. Match or exceed your existing vSphere HA SLAs without a vCenter licensing line item.
                </p>
                <ul className="flex flex-col gap-2">
                  {["Automated VM and container failover", "Live migration and rolling upgrades", "Dynamic load balancer (Proxmox VE 9+)", "Fencing with IPMI, watchdog, agents"].map(it => (
                    <li key={it} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                      <span className="font-body text-sm text-[#5a4040]">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Row 3: Ceph Storage — text left, screenshot right */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <div className="inline-flex items-center gap-2.5 self-start">
                  <Database size={14} className="text-[#b31c33]" strokeWidth={1.5} />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-bold">Storage</span>
                </div>
                <h3 className="font-headline text-3xl md:text-[2rem] text-[#1c1b1b] leading-[1.1] tracking-tight">
                  Ceph HCI and ZFS — software-defined storage built in.
                </h3>
                <p className="font-body text-[14px] text-[#5a4040] leading-[1.8]">
                  Hyperconverged Ceph block and object storage replicated across nodes — replaces expensive vSAN clusters on existing commodity hardware. ZFS for instant snapshots, async replication, and self-healing on local disks. Proxmox Backup Server ships free.
                </p>
                <ul className="flex flex-col gap-2">
                  {["Ceph RBD block + CephFS shared storage", "Configurable replication factor", "ZFS snapshots and async send/receive", "Deduplicated PBS backups with encryption"].map(it => (
                    <li key={it} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                      <span className="font-body text-sm text-[#5a4040]">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="hidden lg:block">
                <BrowserFrame src={IMG.metrics} alt="Proxmox VE Metrics Dashboard" source="proxmox.com" />
              </motion.div>
            </motion.div>
          </div>

          {/* Remaining capabilities — divided list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid sm:grid-cols-2 gap-0 border-t border-[#e2bebd]/40"
          >
            {REMAINING_CAPS.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp} className="flex gap-5 py-7 border-b border-[#e2bebd]/40 sm:odd:pr-10 sm:even:pl-10 sm:even:border-l sm:even:border-l-[#e2bebd]/40">
                <cap.icon size={16} className="text-[#b31c33] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-headline text-[1rem] text-[#1c1b1b] mb-1.5">{cap.title}</h4>
                  <p className="font-body text-sm text-[#5a4040] leading-[1.7]">{cap.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ BROADCOM PROBLEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0d0c0c] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[55%_45%] gap-14 lg:gap-20 items-start">

          {/* Left: editorial */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-6">
              The Broadcom Problem
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-6 max-w-lg">
              Broadcom bought VMware. Your budget paid for it.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8] mb-5 max-w-[500px]">
              Post-acquisition pricing killed perpetual licences, collapsed bundles, and pushed organisations onto per-core subscriptions. Many enterprises saw 5–10× cost increases overnight. The platform is identical — only the invoice changed.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8] max-w-[500px]">
              Proxmox VE runs the same workloads, meets the same HA requirements, integrates with the same automation toolchain — and ships zero licensing fees.
            </motion.p>
          </motion.div>

          {/* Right: comparison */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-3 pb-2.5 border-b border-white/[0.08]">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/38 font-semibold">VMware today</span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-semibold">Proxmox VE</span>
            </motion.div>
            {COMPARISON.map((row, i) => (
              <motion.div key={i} variants={fadeUp} className="grid grid-cols-2 gap-4 py-3 border-b border-white/[0.07]">
                <span className="font-body text-[13px] text-white/35 line-through decoration-[#b31c33]/30 leading-snug">
                  {row.before}
                </span>
                <span className="font-body text-[13px] text-white font-medium leading-snug">
                  {row.after}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ MIGRATION METHODOLOGY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-14">
            <motion.span variants={fadeUp} className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Illumia Migration Methodology
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-2xl">
              VMware to Proxmox — zero data loss.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e2bebd]/20">
            {PHASES.map((p) => (
              <motion.div key={p.n} variants={fadeUp} className="bg-[#fcf9f8] hover:bg-white transition-colors duration-200 p-8 md:p-10 flex flex-col gap-5">
                <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums">{p.n}</span>
                <h3 className="font-headline text-xl text-[#1c1b1b]">{p.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 items-start">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#b31c33] shrink-0 mt-[7px]" />
                      <span className="font-body text-sm text-[#5a4040] leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0d0c0c] overflow-hidden">
        {/* Background screenshot — dimmed */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMG.cluster}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-[0.055] scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0c] via-[#0d0c0c]/90 to-[#0d0c0c]/70" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={IMG.logo} alt="Proxmox" className="h-7 w-auto brightness-0 invert opacity-50" decoding="async" />
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">Silver Partner</span>
            </div>
            <h2 className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-5">
              Ready to end the VMware tax?
            </h2>
            <p className="font-body text-[15px] text-white/42 leading-[1.8] max-w-xl">
              Illumia delivers production-grade migrations with direct escalation to Proxmox engineers, zero data loss methodology, and optional post-migration managed services under SLA.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97]"
            >
              Plan Your Migration
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.11] text-white/52 hover:text-white hover:border-white/24 px-7 py-3.5 rounded-[10px] font-body text-sm font-medium transition-all duration-200"
            >
              View Case Studies
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
