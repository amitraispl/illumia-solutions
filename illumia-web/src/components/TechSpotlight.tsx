"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const proxmoxLogo = "/images/logos/proxmox-silver-partner.avif";
const erpnextLogo = "/images/logos/erpnext-logo.jpg";


const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const Arrow = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const EuStars = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
    <g fill="currentColor">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI) / 6 - Math.PI / 2;
        const cx = parseFloat((50 + Math.cos(angle) * 36).toFixed(4));
        const cy = parseFloat((50 + Math.sin(angle) * 36).toFixed(4));
        return (
          <polygon
            key={i}
            points="0,-3.2 0.94,-0.99 3.04,-0.99 1.35,0.38 1.88,2.59 0,1.21 -1.88,2.59 -1.35,0.38 -3.04,-0.99 -0.94,-0.99"
            transform={`translate(${cx} ${cy})`}
          />
        );
      })}
    </g>
  </svg>
);

export default function TechSpotlight() {
  return (
    <section className="py-12 md:py-20 bg-surface-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* ─── Header ──────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8"
        >
          <div>
            <motion.span variants={fadeUp} className="text-primary font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase font-bold block mb-4">
              Technology Focus Areas
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[0.93] tracking-tight">
              Where Industry Is{" "}
              <span className="italic text-primary">Moving Next?</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-tertiary font-body text-sm max-w-xs leading-relaxed md:text-right">
            Four high-demand technologies where Illumia&apos;s expertise creates outsized impact — and significant cost savings — for your business.
          </motion.p>
        </motion.div>

        {/* ─── Bento Grid ──────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >

          {/* ── Proxmox — RED 2-wide ───────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
            <Link
              href="/on-premise-private-cloud-solutions"
              className="group relative flex flex-col h-full bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 text-white overflow-hidden transition-[background-color,box-shadow] duration-300 hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/40"
            >
              {/* Subtle noise texture overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] rounded-2xl"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
              />

              <div className="relative flex items-center justify-between gap-3 mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-white/60 font-bold">
                  Proxmox Silver Partner
                </span>
                <div className="relative h-15 w-28 sm:h-18 sm:w-40 lg:h-20 lg:w-52 shrink-0">
                  <Image
                    src={proxmoxLogo}
                    alt="Proxmox Silver Partner"
                    fill
                    sizes="(min-width: 1024px) 208px, (min-width: 640px) 160px, 112px"
                    className="object-contain object-right"
                  />
                </div>
              </div>

              <h3 className="relative font-headline text-3xl md:text-5xl text-white mb-4 leading-[0.95] tracking-tight">
                Enterprise Virtualisation.{" "}
                <span className="italic font-normal text-white/70">Open Source.</span>
              </h3>
              <p className="relative text-white/70 text-sm font-body leading-[1.7] mb-8 max-w-xl flex-1">
                Proxmox VE delivers enterprise virtualisation — VMs, containers, HA clusters, live migration — on an open-source platform with optional commercial support. As a Proxmox Silver Partner, we handle migrations end-to-end from VMware, Hyper-V, and other platforms, with zero data loss.
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {["VMs & LXC Containers", "HA Clustering & Failover", "Live Migration", "Ceph Distributed Storage", "Automated Backup & Snapshots", "Zero-Downtime Migration"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-body font-semibold text-white/70 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />{b}
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between gap-4 flex-wrap border-t border-white/15 pt-6">
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] duration-200 uppercase tracking-widest text-white/70 group-hover:text-white">
                  Migrate to Proxmox <Arrow />
                </span>
                <div className="text-right">
                  <p className="font-body text-[10px] uppercase tracking-widest text-white/35 font-bold">Typical Outcome</p>
                  <p className="font-headline text-2xl font-bold text-white">60–80% cost reduction</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── AI Governance — WHITE 1-col ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="h-full">
            <Link
              href="/ai-governance"
              className="group relative block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-stone-200/80 overflow-hidden flex flex-col transition-[box-shadow] duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* EU stars watermark */}
              <div className="pointer-events-none absolute -right-8 -bottom-8 w-52 h-52 text-primary/[0.05]">
                <EuStars />
              </div>

              <div className="relative flex items-center justify-between flex-wrap gap-2 mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-primary font-bold">
                  Responsible AI
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/60 font-bold border border-primary/20 rounded-full px-3 py-1">
                  EU AI Act 2025
                </span>
              </div>

              <h3 className="relative font-headline text-3xl md:text-4xl text-stone-900 mb-4 leading-[0.95] tracking-tight group-hover:text-primary transition-colors duration-300">
                Govern AI Before It{" "}
                <span className="italic font-normal text-primary">Governs You.</span>
              </h3>
              <p className="relative text-stone-500 text-sm font-body leading-[1.7] mb-6 flex-1">
                The EU AI Act is live, and most organisations still have no governance framework — no risk classification, no audit trail, no accountability layer. Illumia builds structured AI governance programs aligned to EU, NIST AI RMF, and ISO 42001 standards.
              </p>

              <div className="relative grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                {["Risk Classification", "Bias & Fairness Auditing", "EU AI Act Alignment", "AI Incident Response"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-body font-semibold text-stone-500 uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{b}
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between gap-3 flex-wrap border-t border-stone-100 pt-5">
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] duration-200 uppercase tracking-widest text-primary/60 group-hover:text-primary">
                  Build Your Framework <Arrow />
                </span>
                <p className="font-body text-[10px] uppercase tracking-widest text-stone-400 font-bold">EU · NIST · ISO 42001</p>
              </div>
            </Link>
          </motion.div>

          {/* ── NetBox — WHITE 1-col (teal accent) ─────────────────────────── */}
          <motion.div variants={fadeUp} className="h-full">
            <Link
              href="/netbox-platform"
              className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-stone-200/80 overflow-hidden flex flex-col transition-[box-shadow] duration-300 hover:shadow-xl hover:shadow-[#00f2d4]/15"
            >
              <div className="mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase font-bold" style={{ color: "#00f2d4" }}>
                  Network Source of Truth
                </span>
              </div>

              <h3 className="font-headline text-3xl md:text-4xl text-stone-900 mb-4 leading-[0.95] tracking-tight transition-colors duration-300 group-hover:text-[#00c4aa]">
                Your Network, Documented.{" "}
                <span className="italic font-normal" style={{ color: "#00f2d4" }}>Precisely.</span>
              </h3>
              <p className="text-stone-500 text-sm font-body leading-[1.7] mb-6 flex-1">
                Spreadsheets and tribal knowledge aren&apos;t a network strategy — they&apos;re a liability. NetBox is your single source of truth for IP addressing, DCIM, and rack management, integrating natively with Ansible, Terraform, and Nautobot.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["IP Address Management", "Data Centre Documentation", "Rack & Elevation Planning", "Ansible & Terraform Integration"].map((tag) => (
                  <span key={tag} className="font-body text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1.5 border border-stone-200 bg-stone-50 text-stone-800">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t pt-5" style={{ borderColor: "rgba(0,242,212,0.12)" }}>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] duration-200 uppercase tracking-widest" style={{ color: "rgba(0,242,212,0.6)" }}>
                  Modernise Network Documentation <Arrow />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── ERPNext — DARK 2-wide ──────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
            <Link
              href="/erpnext"
              className="group relative flex flex-col h-full bg-on-surface rounded-2xl p-6 sm:p-8 lg:p-10 text-white overflow-hidden transition-[background-color,box-shadow] duration-300 hover:bg-[#111010] hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Subtle noise */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.03] rounded-2xl"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
              />

              <div className="relative flex items-center justify-between gap-3 mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(0,136,254,0.8)" }}>
                  Open-Source ERP
                </span>
                <div className="relative h-14 w-14 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={erpnextLogo}
                    alt="ERPNext"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="relative font-headline text-3xl md:text-5xl text-white mb-4 leading-[0.93] tracking-tight">
                Enterprise ERP.{" "}
                <span className="italic font-normal" style={{ color: "#0088fe" }}>No Enterprise Price Tag.</span>
              </h3>
              <p className="relative text-stone-400 text-sm font-body leading-[1.7] mb-8 max-w-xl flex-1">
                SAP, Oracle, and Dynamics are priced for Fortune 500 budgets. ERPNext is 100% open-source — accounting, manufacturing, HR, CRM, inventory, and project management — deployed on your own infrastructure with no per-seat licensing and no vendor lock-in.
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {["Full Accounting & Finance", "Manufacturing & MRP", "HR & Payroll", "CRM & Sales Pipeline", "Inventory & Supply Chain", "Project Management"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-body font-semibold text-stone-400 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "rgba(0,136,254,0.6)" }} />{b}
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between gap-4 flex-wrap border-t border-white/10 pt-6">
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] duration-200 uppercase tracking-widest text-stone-500 group-hover:text-white">
                  Explore ERPNext <Arrow />
                </span>
                <div className="text-right">
                  <p className="font-body text-[10px] uppercase tracking-widest text-stone-600 font-bold">Licensing Cost</p>
                  <p className="font-headline text-2xl font-bold" style={{ color: "#0088fe" }}>$0 per seat, forever</p>
                </div>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
