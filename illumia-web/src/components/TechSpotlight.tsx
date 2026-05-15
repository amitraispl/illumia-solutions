"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import proxmoxLogo from "../../public/Proxmox-Silver-Partner.png";
import erpnextLogo from "../../public/photos/erpnext-logo.png";
import netboxLogo from "../../public/photos/netbox-logo-light.svg";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stagger = {
  hidden: {},
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
    <section className="py-20 bg-[#f6f3f2]">
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
            <motion.span variants={fadeUp} className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-bold block mb-4">
              Technology Focus Areas
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[0.95]">
              Where Industry Is{" "}
              <span className="italic text-[#b31c33]">Moving Next?</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[#5c5c5c] font-body text-sm max-w-xs leading-relaxed md:text-right">
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

          {/* ── AI Governance — RED 2-wide ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
            <Link
              href="/ai-governance"
              className="group relative block h-full bg-[#b31c33] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#920022] transition-colors duration-300 cursor-pointer overflow-hidden"
            >
              {/* EU stars watermark */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-56 h-56 text-white/[0.07] rotate-6">
                <EuStars />
              </div>

              <div className="relative flex items-center justify-between mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-white/60 font-bold">
                  Responsible AI
                </span>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-white/40 font-bold border border-white/20 rounded-full px-3 py-1">
                  EU AI Act 2025
                </span>
              </div>

              <h3 className="relative font-headline text-3xl md:text-4xl text-white mb-4 leading-tight">
                Govern AI Before It{" "}
                <span className="italic font-normal text-[#ffdad9]">Governs You.</span>
              </h3>
              <p className="relative text-white/75 text-sm font-body leading-relaxed mb-8 max-w-xl">
                The EU AI Act is live. AI systems are proliferating across enterprises at a pace regulators are scrambling to match. Most organisations have no governance framework — no risk classification, no audit trail, no accountability layer. Illumia builds structured AI governance programs that let you deploy AI with confidence, not liability.
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {["Risk Classification Frameworks", "Bias & Fairness Auditing", "EU AI Act Alignment", "Model Accountability Policies", "AI Incident Response", "Regulatory Reporting"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-body font-semibold text-white/70 uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#ffdad9]/60 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between gap-4 flex-wrap">
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                  Build Your AI Governance Framework <Arrow />
                </span>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-body font-bold text-white/45">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/25">
                    <span className="w-3 h-3 text-white/80">
                      <EuStars />
                    </span>
                  </span>
                  EU · NIST AI RMF · ISO 42001
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── Proxmox — cream ────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="h-full">
            <Link
              href="/proxmox-migration"
              className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-2xl hover:shadow-stone-200/70 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                  VMware Alternative
                </span>
                <div className="relative h-10 w-24 shrink-0">
                  <Image
                    src={proxmoxLogo}
                    alt="Proxmox Silver Partner"
                    fill
                    sizes="96px"
                    className="object-contain object-right"
                  />
                </div>
              </div>

              <h3 className="font-headline text-2xl text-stone-900 mb-3 leading-tight group-hover:text-[#b31c33] transition-colors duration-300">
                Escape the VMware Tax.
              </h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6 flex-1">
                Broadcom&apos;s VMware acquisition sent licensing costs through the roof — some enterprises saw 10× increases overnight. Proxmox VE delivers identical enterprise virtualisation — VMs, containers, HA clusters, live migration — at zero licensing cost. We handle the migration end-to-end with zero data loss.
              </p>

              <div className="border-t border-[#e2bebd]/40 pt-5 mb-5">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#5c5c5c] font-bold mb-2">Typical Outcome</p>
                <p className="font-headline text-3xl text-[#b31c33]">60–80%</p>
                <p className="font-body text-xs text-[#5a4040]">reduction in hypervisor licensing costs</p>
              </div>

              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[#b31c33]/70 group-hover:text-[#b31c33]">
                Migrate to Proxmox <Arrow />
              </span>
            </Link>
          </motion.div>

          {/* ── ERPNext — cream ────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="h-full">
            <Link
              href="/erpnext"
              className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-2xl hover:shadow-stone-200/60 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                  Open-Source ERP
                </span>
                <div className="relative h-10 w-10 rounded-lg bg-white border border-[#e2bebd]/40 p-1 shrink-0">
                  <Image
                    src={erpnextLogo}
                    alt="ERPNext"
                    fill
                    sizes="40px"
                    className="object-contain p-0.5"
                  />
                </div>
              </div>

              <h3 className="font-headline text-2xl text-stone-900 mb-3 leading-tight group-hover:text-[#b31c33] transition-colors duration-300">
                Enterprise ERP. No Enterprise Price Tag.
              </h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6 flex-1">
                SAP, Oracle, and Dynamics are priced for Fortune 500 budgets. ERPNext is 100% open-source — accounting, manufacturing, HR, CRM, inventory, and project management — deployed on your own infrastructure with no per-seat licensing and no vendor lock-in.
              </p>

              <ul className="space-y-2 mb-6">
                {["Full Accounting & Finance", "Manufacturing & MRP", "HR & Payroll", "CRM & Sales Pipeline"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs font-body font-semibold text-[#5c5c5c] uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31c33] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[#b31c33]/70 group-hover:text-[#b31c33]">
                Explore ERPNext <Arrow />
              </span>
            </Link>
          </motion.div>

          {/* ── NetBox — dark 2-wide ────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
            <Link
              href="/netbox"
              className="group block h-full bg-[#1c1b1b] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#111010] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-10 h-full">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-[#00f2d4]/80 font-bold">
                      Network Source of Truth
                    </span>
                    <div className="hidden lg:flex items-center gap-2">
                      {["IPAM", "DCIM", "Automation"].map((tag) => (
                        <span key={tag} className="font-body text-xs font-bold uppercase tracking-wider text-[#00f2d4]/60 bg-white/5 border border-white/10 rounded-md px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-headline text-3xl md:text-4xl text-white mb-4 leading-tight group-hover:text-[#00f2d4] transition-colors duration-300">
                    Your Network, Documented.{" "}
                    <span className="italic font-normal text-[#00f2d4]">Precisely.</span>
                  </h3>
                  <p className="text-stone-400 text-sm font-body leading-relaxed mb-8 flex-1">
                    Spreadsheets, Visio diagrams, and tribal knowledge are not a network strategy — they&apos;re a liability. NetBox is your single source of truth for IP addressing, data centre infrastructure, and rack management. It integrates natively with Ansible, Terraform, and Nautobot so provisioning becomes repeatable, handovers become seamless, and audits become painless.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {["IP Address Management", "Data Centre Documentation", "Rack & Elevation Planning", "Ansible & Terraform Integration"].map((item) => (
                      <span key={item} className="font-body text-xs font-semibold uppercase tracking-wide text-stone-500 border border-white/10 rounded-lg px-3 py-1.5">
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-stone-500 group-hover:text-white">
                    Modernise Network Documentation <Arrow />
                  </span>
                </div>

                {/* Logo column */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-6 shrink-0 lg:w-48">
                  <div className="relative w-44 h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={netboxLogo}
                      alt="NetBox"
                      fill
                      sizes="176px"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00f2d4]/40 to-transparent" />
                  <div className="grid grid-cols-3 gap-2 w-full max-w-[176px]">
                    {["IPv4", "IPv6", "VRF", "VLAN", "BGP", "ASN"].map((proto) => (
                      <span
                        key={proto}
                        className="text-[10px] font-body font-bold tracking-wider text-[#00f2d4]/40 border border-[#00f2d4]/15 rounded-md px-1.5 py-1 text-center"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
