"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const modules = [
  {
    category: "Infrastructure",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Infrastructure Modules",
    desc: "Software-defined infrastructure built on the backbone of robust open-source foundations. Our modules focus on extreme availability and automated scaling.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Server infrastructure and hardware",
    items: [
      "Container Orchestration & Kubernetes Fabrics",
      "Cloud-Native Storage Provisioning",
      "Hybrid-Cloud Networking Protocols",
    ],
  },
  {
    category: "Application",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Application Modules",
    desc: "Modular application blocks designed for seamless integration and rapid deployment. Accelerate your digital roadmap with pre-hardened components.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Coding collaboration and application development",
    items: [
      "Microservices Frameworks & API Gateways",
      "Reactive State Management Libraries",
      "Real-Time Data Processing Pipelines",
    ],
  },
  {
    category: "Cybersecurity",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Cybersecurity Modules",
    desc: "Open-source security that doesn't compromise. Trust but verify with our auditable, community-vetted protection layers.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Cybersecurity and code security",
    items: [
      "Identity & Access Management (IAM) Solutions",
      "End-to-End Encryption Wrappers",
      "Zero-Trust Network Access Modules",
    ],
  },
];

const solutions = [
  { code: "OS-01", label: "Cloud Architecture" }, { code: "OS-02", label: "CI/CD Optimization" },
  { code: "OS-03", label: "Legacy Migration" }, { code: "OS-04", label: "Security Auditing" },
  { code: "OS-05", label: "Database Tuning" }, { code: "OS-06", label: "API Management" },
  { code: "OS-07", label: "Penetration Testing" }, { code: "OS-08", label: "Edge Computing" },
  { code: "OS-09", label: "Serverless Logic" }, { code: "OS-10", label: "Frontend Precision" },
  { code: "OS-11", label: "Observability Stack" }, { code: "OS-12", label: "Compliance Guard" },
  { code: "OS-13", label: "Network Integrity" }, { code: "OS-14", label: "Load Balancing" },
  { code: "OS-15", label: "Workflow Engine" }, { code: "OS-16", label: "Caching Strategy" },
  { code: "OS-17", label: "Event Sourcing" }, { code: "OS-18", label: "DR Orchestration" },
];

export default function OpenSourceSolutionsContent() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Open Infrastructure"
        title={
          <>
            Precision Engineering{" "}
            <span className="italic font-normal text-[#b31c33]">Without Borders.</span>
          </>
        }
        description="Harnessing the collective intelligence of the global open-source community to deliver enterprise-grade reliability. We don't just use open source — we refine it into high-precision instruments for modern business."
        primaryCta={{ label: "Explore Our Ecosystem", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Open source coding and development"
      />

      {/* ─── Editorial Intro ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-5xl md:text-6xl text-stone-900 leading-[0.95]">
              The Open Standard of{" "}
              <span className="italic text-[#b31c33]">Excellence.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-lg text-[#5a4040] leading-relaxed font-body">
              Illumia Solutions bridges the gap between community-driven innovation and
              corporate-grade stability. Our open-source modules are designed for
              transparency, security, and limitless scale — spanning infrastructure,
              application development, and cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Core Solutions Bento ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Core Solutions Architecture
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-5xl text-stone-900">
              Precision-built on open foundations.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Infrastructure — RED accent, wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href="/infrastructure-solutions" className="group block h-full bg-[#b31c33] rounded-2xl p-10 text-white hover:bg-[#920022] transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4 text-white">
                  {modules[0].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-white/60">Infrastructure</span>
                </div>
                <h3 className="font-headline text-3xl text-white mb-3">{modules[0].title}</h3>
                <p className="text-white/80 text-sm font-body leading-relaxed mb-6">{modules[0].desc}</p>
                <div className="space-y-2 mb-6">
                  {modules[0].items.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3 text-xs font-body font-semibold uppercase tracking-wide text-white/70">
                      <span className="text-[#ffdad9] font-bold">{String(idx + 1).padStart(2, "0")}</span> {item}
                    </div>
                  ))}
                </div>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                  Read More <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            </motion.div>

            {/* Infrastructure image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image src={modules[0].image} alt={modules[0].imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1c1b1b]/55" />
              <div className="absolute inset-0 p-8 flex items-end">
                <span className="font-headline text-4xl font-bold text-white/20 uppercase select-none">Infra</span>
              </div>
            </motion.div>

            {/* Application image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image src={modules[1].image} alt={modules[1].imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1c1b1b]/55" />
              <div className="absolute inset-0 p-8 flex items-end">
                <span className="font-headline text-4xl font-bold text-white/20 uppercase select-none">App</span>
              </div>
            </motion.div>

            {/* Application — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href="/application-solutions" className="group block h-full bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4 text-[#b31c33]">
                  {modules[1].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-[#b31c33]">Application</span>
                </div>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">{modules[1].title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6">{modules[1].desc}</p>
                <div className="space-y-2 mb-6">
                  {modules[1].items.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3 text-xs font-body font-semibold uppercase tracking-wide text-[#5c5c5c]">
                      <span className="text-[#b31c33] font-bold">{String(idx + 4).padStart(2, "0")}</span> {item}
                    </div>
                  ))}
                </div>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read More <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            </motion.div>

            {/* Cybersecurity — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href="/cyber-security" className="group block h-full bg-white rounded-2xl p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4 text-[#b31c33]">
                  {modules[2].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-[#b31c33]">Cybersecurity</span>
                </div>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">{modules[2].title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6">{modules[2].desc}</p>
                <div className="space-y-2 mb-6">
                  {modules[2].items.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3 text-xs font-body font-semibold uppercase tracking-wide text-[#5c5c5c]">
                      <span className="text-[#b31c33] font-bold">{String(idx + 7).padStart(2, "0")}</span> {item}
                    </div>
                  ))}
                </div>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read More <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            </motion.div>

            {/* Cybersecurity image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image src={modules[2].image} alt={modules[2].imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1c1b1b]/55" />
              <div className="absolute inset-0 p-8 flex items-end">
                <span className="font-headline text-4xl font-bold text-white/20 uppercase select-none">Cyber</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Pull Quote ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <p className="font-headline text-4xl md:text-5xl italic text-white leading-tight max-w-4xl mx-auto mb-10">
            &ldquo;Open source isn&apos;t a compromise — it&apos;s the highest form of{" "}
            <span className="text-[#ffb3b3]">technological transparency</span>.&rdquo;
          </p>
          <div className="w-16 h-px bg-[#b31c33] mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone-500">
            — Illumia Open-Source Philosophy
          </p>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
