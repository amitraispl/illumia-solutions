"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

// ─── Change "index" to "grid" to revert to the original box pattern ───────────
const VARIANT: "grid" | "index" = "index";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ALL_SERVICES = [
  { num: "01", label: "Hosting Services",                              href: "/cloud-services#hosting" },
  { num: "02", label: "Application Services",                         href: "/cloud-services#application" },
  { num: "03", label: "Migration Services",                           href: "/cloud-services#migration" },
  { num: "04", label: "Maintenance Services",                         href: "/cloud-services#maintenance" },
  { num: "05", label: "Virtual Private Server",                       href: "/virtual-private-server" },
  { num: "06", label: "Physical Server",                              href: "/physical-server" },
  { num: "07", label: "Containers",                                   href: "/containers" },
  { num: "08", label: "Virtual Desktops",                             href: "/virtual-desktops" },
  { num: "09", label: "Disaster Recovery",                            href: "/disaster-recovery" },
  { num: "10", label: "Object Storage",                               href: "/object-storage" },
  { num: "11", label: "Honeypot as a Service",                        href: "/honeypot-as-a-service" },
  { num: "12", label: "EDR as a Service",                             href: "/edr-as-a-service" },
  { num: "13", label: "WAF as a Service",                             href: "/waf-as-a-service" },
  { num: "14", label: "NMS as a Service",                             href: "/nms-as-a-service" },
  { num: "15", label: "SIEM as a Service",                            href: "/siem-as-a-service" },
  { num: "16", label: "Email as a Service",                           href: "/email-as-a-service" },
  { num: "17", label: "PAM as a Service",                             href: "/pam-as-a-service" },
  { num: "18", label: "Drive as a Service",                           href: "/drive-as-a-service" },
  { num: "19", label: "Backup as a Service",                          href: "/backup-as-a-service" },
  { num: "20", label: "On-Prem to Public Cloud",                      href: "/cloud-services#migration" },
  { num: "21", label: "Cloud to Cloud",                               href: "/cloud-services#migration" },
  { num: "22", label: "Cloud to On-Prem",                             href: "/cloud-services#migration" },
  { num: "23", label: "Cloud Migration Solution",                     href: "/cloud-migration-solutions" },
  { num: "24", label: "Remote Managed Services for Cloud",            href: "/cloud-services#maintenance" },
  { num: "25", label: "On-site Engineer Services",                    href: "/cloud-services#maintenance" },
  { num: "26", label: "IT Risk and Security Strategy",                href: "/it-risk-and-security-strategy" },
  { num: "27", label: "Application Security",                         href: "/application-security" },
  { num: "28", label: "Mobile Security",                              href: "/mobile-security" },
  { num: "29", label: "Cloud Security",                               href: "/cloud-security" },
  { num: "30", label: "Infrastructure Security",                      href: "/infrastructure-security" },
  { num: "31", label: "Compliance Services",                          href: "/compliance-services" },
  { num: "32", label: "Specialized Services",                         href: "/specialized-services" },
  { num: "33", label: "Infrastructure Solutions",                     href: "/infrastructure-solutions" },
  { num: "34", label: "Application Solutions",                        href: "/application-solutions" },
  { num: "35", label: "Cybersecurity Solutions",                      href: "/cybersecurity-solutions" },
  { num: "36", label: "On-Premise Private Cloud Solutions",           href: "/on-premise-private-cloud" },
  { num: "37", label: "Storage Solutions",                            href: "/object-storage" },
  { num: "38", label: "Software-Defined Network",                     href: "/software-defined-network" },
  { num: "39", label: "Collaboration Solutions",                      href: "/collaboration-solutions" },
  { num: "40", label: "Project Management Solutions",                 href: "/project-management-solutions" },
  { num: "41", label: "Security Information and Event Management",    href: "/siem" },
  { num: "42", label: "Security Orchestration, Automation, and Response", href: "/soar" },
  { num: "43", label: "Endpoint Detection and Response",              href: "/edr-solution" },
  { num: "44", label: "Vulnerability Management",                     href: "/vulnerability-management" },
  { num: "45", label: "Governance, Risk, and Compliance",             href: "/governance-risk-compliance" },
  { num: "46", label: "Privileged Access Management",                 href: "/pam" },
  { num: "47", label: "Honeypot Solutions",                           href: "/honeypot-solution" },
  { num: "48", label: "Monitoring and Analytical Systems",            href: "/monitoring-analytics" },
];

const INITIAL_COUNT = 20;
const HIDDEN_SERVICES = ALL_SERVICES.slice(INITIAL_COUNT);

// ─── Shared arrow icon ────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ServicesEcosystem() {
  const [expanded, setExpanded] = useState(false);
  const [gridAnimDone, setGridAnimDone] = useState(false);

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-[#f6f3f2] border-t border-[#e2bebd]/10">
      <div className="max-w-screen-2xl mx-auto">

        {/* ─── Header ────────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
        >
          <div className="space-y-4">
            <motion.span
              variants={fadeUp}
              className="font-body text-xs tracking-widest uppercase text-[#b31c33] font-bold"
            >
              Comprehensive Capabilities
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900"
            >
              Ecosystem of Services
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-xs text-[#5a4040] leading-relaxed italic font-body max-w-xs"
          >
            &ldquo;A unified suite of specialized instruments designed for the modern
            enterprise.&rdquo;
          </motion.p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════════
            VARIANT: "index" — typographic editorial list
            VARIANT: "grid"  — original box pattern (change VARIANT above)
        ═══════════════════════════════════════════════════════════════════════ */}

        {VARIANT === "grid" ? (
          <>
            {/* ── Original box grid ─────────────────────────────────────────── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              onAnimationComplete={() => setGridAnimDone(true)}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#e2bebd]/30"
            >
              {ALL_SERVICES.slice(0, INITIAL_COUNT).map((s) => (
                <motion.div
                  key={s.num}
                  variants={fadeUp}
                  whileHover={{ backgroundColor: "#ffffff", x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-[#f6f3f2] p-6 group"
                >
                  <Link
                    href={s.href}
                    className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b31c33]"
                    aria-label={s.label}
                  />
                  <span className="pointer-events-none text-xs font-bold text-[#b31c33] mb-2 block font-body">{s.num}</span>
                  <h4 className="pointer-events-none text-xs font-bold tracking-wider uppercase text-stone-800 font-body leading-snug group-hover:text-[#b31c33] transition-colors duration-200">
                    {s.label}
                  </h4>
                </motion.div>
              ))}

              <AnimatePresence initial={false}>
                {expanded &&
                  HIDDEN_SERVICES.map((s, i) => (
                    <motion.div
                      key={s.num}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: i * 0.03, ease: EASE } }}
                      exit={{ opacity: 0, y: 8, transition: { duration: 0.2, delay: 0 } }}
                      whileHover={{ backgroundColor: "#ffffff", x: 2 }}
                      className="relative bg-[#f6f3f2] p-6 group"
                    >
                      <Link href={s.href} className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b31c33]" aria-label={s.label} />
                      <span className="pointer-events-none text-xs font-bold text-[#b31c33] mb-2 block font-body">{s.num}</span>
                      <h4 className="pointer-events-none text-xs font-bold tracking-wider uppercase text-stone-800 font-body leading-snug group-hover:text-[#b31c33] transition-colors duration-200">
                        {s.label}
                      </h4>
                    </motion.div>
                  ))}
              </AnimatePresence>

              <AnimatePresence>
                {!expanded && (
                  <motion.button
                    key="expand-tile"
                    variants={fadeUp}
                    initial="hidden"
                    animate={gridAnimDone ? "visible" : undefined}
                    exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
                    onClick={() => setExpanded(true)}
                    whileHover={{ backgroundColor: "#b31c33", transition: { duration: 0.2 } }}
                    className="bg-[#1c1b1b] p-6 cursor-pointer text-left lg:col-span-2 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-bold text-[#ffb3b3] group-hover:text-white/70 font-body transition-colors duration-200">21&ndash;{ALL_SERVICES.length}</span>
                      <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center text-white/50 group-hover:text-white transition-all duration-200 text-sm leading-none shrink-0">+</span>
                    </div>
                    <h4 className="text-xs font-bold tracking-wider uppercase italic text-stone-300 group-hover:text-white font-body transition-colors duration-200 leading-snug">
                      {HIDDEN_SERVICES.length} more services — expand
                    </h4>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.15 } }}
                  exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
                  className="mt-8"
                >
                  <button onClick={() => setExpanded(false)} className="font-body text-xs text-[#b31c33] uppercase tracking-widest font-bold hover:underline underline-offset-4 transition-all">
                    &larr; Show fewer services
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <>
            {/* ── Index / typographic list ───────────────────────────────────── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              onAnimationComplete={() => setGridAnimDone(true)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* Always-visible first 20 */}
              {ALL_SERVICES.slice(0, INITIAL_COUNT).map((s) => (
                <motion.div
                  key={s.num}
                  variants={fadeUp}
                  className="group border-b border-[#e2bebd]/40 hover:border-[#b31c33]/20 transition-colors duration-200"
                >
                  <Link
                    href={s.href}
                    className="flex items-center gap-4 py-4 px-3 hover:bg-white group-hover:translate-x-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b31c33]"
                  >
                    <span className="font-headline italic text-[#b31c33] text-sm w-7 shrink-0 tabular-nums leading-none">
                      {s.num}
                    </span>
                    <h4 className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-stone-700 group-hover:text-[#b31c33] transition-colors duration-200 leading-snug flex-1">
                      {s.label}
                    </h4>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#b31c33] shrink-0">
                      <ArrowIcon />
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Animated hidden services (21–48) */}
              <AnimatePresence initial={false}>
                {expanded &&
                  HIDDEN_SERVICES.map((s, i) => (
                    <motion.div
                      key={s.num}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: i * 0.025, ease: EASE } }}
                      exit={{ opacity: 0, y: 4, transition: { duration: 0.15, delay: 0 } }}
                      className="group border-b border-[#e2bebd]/40 hover:border-[#b31c33]/20 transition-colors duration-200"
                    >
                      <Link
                        href={s.href}
                        className="flex items-center gap-4 py-4 px-3 hover:bg-white hover:pl-5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b31c33]"
                      >
                        <span className="font-headline italic text-[#b31c33] text-sm w-7 shrink-0 tabular-nums leading-none">
                          {s.num}
                        </span>
                        <h4 className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-stone-700 group-hover:text-[#b31c33] transition-colors duration-200 leading-snug flex-1">
                          {s.label}
                        </h4>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#b31c33] shrink-0">
                          <ArrowIcon />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>

            {/* Expand / Collapse */}
            <div className="mt-8 flex items-center gap-6">
              <AnimatePresence mode="wait">
                {!expanded ? (
                  <motion.button
                    key="expand-btn"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    onClick={() => setExpanded(true)}
                    className="group inline-flex items-center gap-3 font-body text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-[#b31c33] transition-colors duration-200 cursor-pointer min-h-[44px]"
                  >
                    <span className="w-11 h-11 rounded-full border border-[#e2bebd]/60 group-hover:border-[#b31c33]/40 group-hover:bg-[#b31c33] inline-flex items-center justify-center text-stone-500 group-hover:text-white transition-all duration-200 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M5 1v8M1 5h8" />
                      </svg>
                    </span>
                    Show {HIDDEN_SERVICES.length} more services
                  </motion.button>
                ) : (
                  <motion.button
                    key="collapse-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    onClick={() => setExpanded(false)}
                    className="font-body text-xs text-[#b31c33] uppercase tracking-widest font-bold hover:underline underline-offset-4 transition-all cursor-pointer"
                  >
                    &larr; Show fewer services
                  </motion.button>
                )}
              </AnimatePresence>

              <span className="font-body text-xs text-[#5c5c5c] tabular-nums">
                {expanded ? ALL_SERVICES.length : INITIAL_COUNT} / {ALL_SERVICES.length} services
              </span>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
