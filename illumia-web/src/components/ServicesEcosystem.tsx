"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
  { num: "01", label: "Hosting Services" },
  { num: "02", label: "Application Services" },
  { num: "03", label: "Migration Services" },
  { num: "04", label: "Maintenance Services" },
  { num: "05", label: "Virtual Private Server" },
  { num: "06", label: "Physical Server" },
  { num: "07", label: "Containers" },
  { num: "08", label: "Virtual Desktops" },
  { num: "09", label: "Disaster Recovery" },
  { num: "10", label: "Object Storage" },
  { num: "11", label: "Honeypot as a Service" },
  { num: "12", label: "EDR as a Service" },
  { num: "13", label: "WAF as a Service" },
  { num: "14", label: "NMS as a Service" },
  { num: "15", label: "SIEM as a Service" },
  { num: "16", label: "Email as a Service" },
  { num: "17", label: "PAM as a Service" },
  { num: "18", label: "Drive as a Service" },
  { num: "19", label: "Backup as a Service" },
  { num: "20", label: "On-Prem to Public Cloud" },
  { num: "21", label: "Cloud to Cloud" },
  { num: "22", label: "Cloud to On-Prem" },
  { num: "23", label: "Cloud Migration Solution" },
  { num: "24", label: "Remote Managed Services for Cloud" },
  { num: "25", label: "On-site Engineer Services" },
  { num: "26", label: "IT Risk and Security Strategy" },
  { num: "27", label: "Application Security" },
  { num: "28", label: "Mobile Security" },
  { num: "29", label: "Cloud Security" },
  { num: "30", label: "Infrastructure Security" },
  { num: "31", label: "Compliance Services" },
  { num: "32", label: "Specialized Services" },
  { num: "33", label: "Infrastructure Solutions" },
  { num: "34", label: "Application Solutions" },
  { num: "35", label: "Cybersecurity Solutions" },
  { num: "36", label: "On-Premise Private Cloud Solutions" },
  { num: "37", label: "Storage Solutions" },
  { num: "38", label: "Software-Defined Network" },
  { num: "39", label: "Collaboration Solutions" },
  { num: "40", label: "Project Management Solutions" },
  { num: "41", label: "Security Information and Event Management" },
  { num: "42", label: "Security Orchestration, Automation, and Response" },
  { num: "43", label: "Endpoint Detection and Response" },
  { num: "44", label: "Vulnerability Management" },
  { num: "45", label: "Governance, Risk, and Compliance" },
  { num: "46", label: "Privileged Access Management" },
  { num: "47", label: "Honeypot Solutions" },
  { num: "48", label: "Monitoring and Analytical Systems" },
];

const INITIAL_COUNT = 20;
const HIDDEN_SERVICES = ALL_SERVICES.slice(INITIAL_COUNT);

export default function ServicesEcosystem() {
  const [expanded, setExpanded] = useState(false);
  /**
   * Once the initial stagger animation completes, the parent whileInView
   * will never re-propagate "visible" to children that mount later.
   * We track this so the expand tile can drive its own animation on re-mount.
   *
   * Before stagger finishes: tile has no own `animate` → parent stagger drives it.
   * After stagger finishes:  tile has `animate="visible"` → it drives itself.
   */
  const [gridAnimDone, setGridAnimDone] = useState(false);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#f6f3f2] border-t border-[#e2bebd]/10">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
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
              className="font-headline text-5xl text-stone-900"
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

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          onAnimationComplete={() => setGridAnimDone(true)}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#e2bebd]/30"
        >
          {/* Always-visible first 20 */}
          {ALL_SERVICES.slice(0, INITIAL_COUNT).map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              whileHover={{ backgroundColor: "#ffffff", x: 2 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f6f3f2] p-6 cursor-default"
            >
              <span className="text-xs font-bold text-[#b31c33] mb-2 block font-body">
                {s.num}
              </span>
              <h4 className="text-xs font-bold tracking-wider uppercase text-stone-800 font-body leading-snug">
                {s.label}
              </h4>
            </motion.div>
          ))}

          {/* Animated hidden services (21-48) */}
          <AnimatePresence initial={false}>
            {expanded &&
              HIDDEN_SERVICES.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: i * 0.03, ease: EASE },
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    transition: { duration: 0.2, delay: 0 },
                  }}
                  whileHover={{ backgroundColor: "#ffffff", x: 2 }}
                  className="bg-[#f6f3f2] p-6 cursor-default"
                >
                  <span className="text-xs font-bold text-[#b31c33] mb-2 block font-body">
                    {s.num}
                  </span>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-stone-800 font-body leading-snug">
                    {s.label}
                  </h4>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Expand tile.
              - gridAnimDone=false (initial page load): no own `animate`, so the
                parent stagger propagates "visible" and the tile follows the sequence.
              - gridAnimDone=true (every re-mount after collapse): has own
                `animate="visible"` so it drives itself in independently. */}
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
                className="bg-[#f6f3f2] p-6 cursor-pointer text-left lg:col-span-2 group"
              >
                <span className="text-xs font-bold text-[#b31c33] group-hover:text-white/70 mb-2 block font-body transition-colors duration-200">
                  21&ndash;{ALL_SERVICES.length}
                </span>
                <h4 className="text-xs font-bold tracking-wider uppercase italic text-stone-600 group-hover:text-white font-body transition-colors duration-200 leading-snug">
                  And {HIDDEN_SERVICES.length} more services &mdash; click to expand
                </h4>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Collapse button */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.15 } }}
              exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
              className="mt-8"
            >
              <button
                onClick={() => setExpanded(false)}
                className="font-body text-xs text-[#b31c33] uppercase tracking-widest font-bold hover:underline underline-offset-4 transition-all"
              >
                &larr; Show fewer services
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
