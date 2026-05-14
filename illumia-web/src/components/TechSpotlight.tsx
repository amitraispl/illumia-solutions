"use client";

import { motion } from "motion/react";
import Link from "next/link";

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
              href="/contact#contact-form"
              className="group block h-full bg-[#b31c33] rounded-2xl p-10 text-white hover:bg-[#920022] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-white/60 font-bold">
                  Responsible AI
                </span>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-white/40 font-bold border border-white/20 rounded-full px-3 py-1">
                  EU AI Act 2025
                </span>
              </div>

              <h3 className="font-headline text-3xl md:text-4xl text-white mb-4 leading-tight">
                Govern AI Before It{" "}
                <span className="italic font-normal text-[#ffdad9]">Governs You.</span>
              </h3>
              <p className="text-white/75 text-sm font-body leading-relaxed mb-8 max-w-xl">
                The EU AI Act is live. AI systems are proliferating across enterprises at a pace regulators are scrambling to match. Most organisations have no governance framework — no risk classification, no audit trail, no accountability layer. Illumia builds structured AI governance programs that let you deploy AI with confidence, not liability.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {["Risk Classification Frameworks", "Bias & Fairness Auditing", "EU AI Act Alignment", "Model Accountability Policies", "AI Incident Response", "Regulatory Reporting"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-body font-semibold text-white/70 uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#ffdad9]/60 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                Build Your AI Governance Framework <Arrow />
              </span>
            </Link>
          </motion.div>

          {/* ── Proxmox — cream ────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="h-full">
            <Link
              href="/contact#contact-form"
              className="group block h-full bg-white rounded-2xl p-10 border border-[#e2bebd]/30 hover:shadow-2xl hover:shadow-stone-200/70 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#b31c33]/8 border border-[#b31c33]/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                  VMware Alternative
                </span>
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

          {/* ── ERPNext — white ────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="h-full">
            <Link
              href="/contact#contact-form"
              className="group block h-full bg-[#f6f3f2] rounded-2xl p-10 border border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-2xl hover:shadow-stone-200/60 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#b31c33]/8 border border-[#b31c33]/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                  Open-Source ERP
                </span>
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
              href="/contact#contact-form"
              className="group block h-full bg-[#1c1b1b] rounded-2xl p-10 text-white hover:bg-[#111010] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-10 h-full">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold">
                      Network Source of Truth
                    </span>
                    <div className="hidden lg:flex items-center gap-2">
                      {["IPAM", "DCIM", "Automation"].map((tag) => (
                        <span key={tag} className="font-body text-xs font-bold uppercase tracking-wider text-[#ffb3b3]/60 bg-white/5 border border-white/10 rounded-md px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-headline text-3xl md:text-4xl text-white mb-4 leading-tight group-hover:text-[#ffdad9] transition-colors duration-300">
                    Your Network, Documented.{" "}
                    <span className="italic font-normal text-[#ffb3b3]">Precisely.</span>
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

                {/* Icon column */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-3 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31c33]/20 group-hover:border-[#b31c33]/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white/25 group-hover:text-[#ffb3b3] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31c33]/15 group-hover:border-[#b31c33]/20 transition-all duration-300">
                    <svg className="w-6 h-6 text-white/20 group-hover:text-[#ffb3b3] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31c33]/10 group-hover:border-[#b31c33]/15 transition-all duration-300">
                    <svg className="w-5 h-5 text-white/15 group-hover:text-[#ffb3b3] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
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
