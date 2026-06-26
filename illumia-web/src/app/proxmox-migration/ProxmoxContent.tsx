"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Server, Layers, HardDrive, Shield, Network, Database, Cpu, RefreshCcw } from "lucide-react";

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

// Real images from proxmox.com
const IMG = {
  logo: "https://nextcloud.illumiasolutions.com/public.php/dav/files/9m8WGwRQQkATm43",
  dashboard: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-9.2-Datacenter-Dashboard.png",
  ha: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-9-2-HA-Balancing-Migration.png",
  esxi: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-8-2-VMware-ESXi-Guestimport.png",
  cluster: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-8-2-Cluster-Summary.png",
  metrics: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-9-0-Metrics.png",
  sdn: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-8-1-SDN.png",
  backup: "https://www.proxmox.com/images/proxmox/screenshots/Proxmox-VE-6-3-Backup-Server-Encryption.png",
};

function BrowserFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/[0.09] shadow-2xl shadow-black/60 ${className}`}>
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
                  src="https://nextcloud.illumiasolutions.com/public.php/dav/files/9m8WGwRQQkATm43"
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
                <span className="text-[#b31c33] italic font-normal">Zero Tax.</span>
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
                <BrowserFrame src={IMG.dashboard} alt="Proxmox VE Datacenter Dashboard" />
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
              className="grid lg:grid-cols-[45%_55%] gap-10 xl:gap-16 items-center py-14 border-b border-[#e2bebd]/40"
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
                <BrowserFrame src={IMG.esxi} alt="Proxmox VMware ESXi Guest Import" />
              </motion.div>
            </motion.div>

            {/* Row 2: HA — screenshot left, text right */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid lg:grid-cols-[55%_45%] gap-10 xl:gap-16 items-center py-14 border-b border-[#e2bebd]/40"
            >
              <motion.div variants={fadeIn} className="hidden lg:block">
                <BrowserFrame src={IMG.ha} alt="Proxmox HA Balancing and Migration" />
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
              className="grid lg:grid-cols-[45%_55%] gap-10 xl:gap-16 items-center py-14"
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
                <BrowserFrame src={IMG.metrics} alt="Proxmox VE Metrics Dashboard" />
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
