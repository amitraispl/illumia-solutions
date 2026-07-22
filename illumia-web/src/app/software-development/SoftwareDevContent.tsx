"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import IntegrationNetworkGraphic from "@/components/IntegrationNetworkGraphic";
import AgileLoopGraphic from "@/components/AgileLoopGraphic";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Arrow = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const modules = [
  {
    href: "/design-development",
    category: "Design",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Design & Development",
    desc: "End-to-end UI/UX design and engineering — wireframes, prototypes, and design systems carried through to production-ready code by one accountable team.",
    image: "/images/software-development/design-card.jpg",
    imageAlt: "UX wireframe sketch on a notepad next to a phone",
    items: [
      "UX Research & Wireframing",
      "Interactive Prototyping & Design Systems",
      "Full-Stack Implementation",
    ],
  },
  {
    href: "/custom-mobile-application",
    category: "Mobile",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Custom Mobile Application",
    desc: "Native iOS/Android and cross-platform apps engineered for performance, offline resilience, and App Store-ready polish.",
    image: "/images/software-development/mobile-card.jpg",
    imageAlt: "Hand holding a phone showing a custom app interface",
    items: [
      "Native iOS & Android Development",
      "Offline-First Architecture",
      "Push, Deep Linking & Device APIs",
    ],
  },
  {
    href: "/custom-web-application",
    category: "Web",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Custom Web Application",
    desc: "Scalable, secure web applications on modern frameworks — from internal operations tools to customer-facing platforms.",
    image: "/images/software-development/web-card.jpg",
    imageAlt: "Multi-monitor code editor setup on a developer's desk",
    items: [
      "React / Next.js Front-Ends",
      "API & Database Architecture",
      "CI/CD & Containerised Delivery",
    ],
  },
  {
    href: "/third-party-integrations",
    category: "Integrations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Third-Party Integrations",
    desc: "Seamless API integrations connecting your software to CRMs, payment gateways, ERPs, and the wider tools your business depends on.",
    items: [
      "CRM, ERP & Payment Gateway Sync",
      "Custom API Design & Management",
      "Event-Driven Data Pipelines",
    ],
  },
];

const process = [
  { n: "01", title: "Discover", desc: "Stakeholder interviews, technical audits, and scope framing — revisited every sprint as real usage and new context reshape what we thought we knew." },
  { n: "02", title: "Design", desc: "Wireframes and UX flows shaped with your team, sent back for another pass whenever testing or review surfaces something the first draft missed." },
  { n: "03", title: "Prototype", desc: "Clickable prototypes validated with real users before production code is committed — and again, any time a later stage reveals a gap." },
  { n: "04", title: "Develop", desc: "Iterative builds in short sprints, each one shippable to staging so scope can adapt before it hardens into something harder to change." },
  { n: "05", title: "Test", desc: "QA folded into every sprint, not saved for the end — issues route straight back into design or development while they're still cheap to fix." },
  { n: "06", title: "Review", desc: "Stakeholder walkthroughs each sprint surface what's working and what isn't, feeding directly into the next round of design and build." },
  { n: "07", title: "Iterate", desc: "Insights from testing, review, and stakeholder feedback loop back into earlier phases — the cycle repeats until the product is right, not just shipped." },
];

const deliverables = [
  {
    title: "Full Source Code Ownership",
    desc: "Every repository transferred to your GitHub org on delivery. No proprietary lock-in, ever.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Technical Documentation",
    desc: "Architecture diagrams, API references, and setup guides — written for the team that inherits the code.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6 9.75h-6m6 3H8.25m9-13.5H6.75a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Design Files & Assets",
    desc: "Figma files, component libraries, and brand assets — yours to reuse and extend.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Post-Launch Support Window",
    desc: "A defined support period after go-live to catch what only real usage surfaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

export default function SoftwareDevelopmentContent() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Bespoke Engineering"
        title={
          <>
            Software Development{" "}
            <span className="italic text-[#b31c33]">Engineered, Not Assembled.</span>
          </>
        }
        description="From pixel-perfect design to production-grade mobile and web applications, our engineering team builds custom software precisely matched to your business logic — and connects it seamlessly to the tools you already run."
        primaryCta={{ label: "Consult an Expert", href: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore Our Work", href: "#core-solutions" }}
        imageSrc="/images/software-development/hero.jpg"
        imageAlt="Developer working across multiple monitors of code"
      />

      {/* ─── Editorial Intro ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[0.95]">
              Software Built Around{" "}
              <span className="italic text-[#b31c33]">Your Business.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-lg text-[#5a4040] leading-relaxed font-body">
              We don&apos;t start from a template. Every engagement begins with your
              actual workflows, data, and users — then moves through design,
              engineering, and integration by the same accountable team, from
              first wireframe to a system that talks to the rest of your stack.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Core Solutions Bento (zigzag) ──────────────────────────────────── */}
      <section id="core-solutions" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Core Service Architecture
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900">
              Four disciplines, one accountable team.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* 01 / Design & Development — RED accent, wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href={modules[0].href} className="group block h-full bg-[#b31c33] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#920022] transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4 text-white">
                  {modules[0].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-white/60">{modules[0].category}</span>
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
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* 01 / Design image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image src={modules[0].image!} alt={modules[0].imageAlt!} fill className="object-cover" />
            </motion.div>

            {/* 02 / Mobile image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image src={modules[1].image!} alt={modules[1].imageAlt!} fill className="object-cover" />
            </motion.div>

            {/* 02 / Custom Mobile Application — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href={modules[1].href} className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4 text-[#b31c33]">
                  {modules[1].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-[#b31c33]">{modules[1].category}</span>
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
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* 03 / Custom Web Application — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href={modules[2].href} className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4 text-[#b31c33]">
                  {modules[2].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-[#b31c33]">{modules[2].category}</span>
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
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* 03 / Web image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image src={modules[2].image!} alt={modules[2].imageAlt!} fill className="object-cover" />
            </motion.div>

            {/* 04 / Integrations illustration */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px] bg-[#1c1b1b] p-3">
              <div className="absolute inset-3 rounded-xl overflow-hidden bg-[#1c1b1b]">
                <IntegrationNetworkGraphic variant="onDark" satelliteCount={5} />
              </div>
            </motion.div>

            {/* 04 / Third-Party Integrations — RED accent, wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link href={modules[3].href} className="group block h-full bg-[#b31c33] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#920022] transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4 text-white">
                  {modules[3].icon}
                  <span className="font-body text-xs tracking-[0.3em] uppercase font-bold text-white/60">{modules[3].category}</span>
                </div>
                <h3 className="font-headline text-3xl text-white mb-3">{modules[3].title}</h3>
                <p className="text-white/80 text-sm font-body leading-relaxed mb-6">{modules[3].desc}</p>
                <div className="space-y-2 mb-6">
                  {modules[3].items.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3 text-xs font-body font-semibold uppercase tracking-wide text-white/70">
                      <span className="text-[#ffdad9] font-bold">{String(idx + 10).padStart(2, "0")}</span> {item}
                    </div>
                  ))}
                </div>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── How We Work — process ──────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              How We Work
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-5">
              A cycle, not a straight line.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#5a4040] leading-relaxed font-body max-w-3xl">
              Discovery doesn&apos;t end when design starts, and testing doesn&apos;t wait
              for the end. Every stage stays open to what the next one learns — your
              team reviews and weighs in throughout, not just at kickoff and handoff.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-px bg-[#e2bebd]/30"
          >
            {process.map((step) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                className="bg-[#f6f3f2] p-6 lg:p-7 flex flex-col gap-4"
              >
                <span className="font-headline italic text-[#b31c33] text-3xl leading-none tabular-nums">
                  {step.n}
                </span>
                <h3 className="font-headline text-xl text-stone-900">{step.title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* loop-back — Iterate feeds straight back into Discover */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <svg className="w-5 h-5 text-[#b31c33] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#5a4040]">
              Iterate feeds straight back into Discover
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── What You Get ─────────────────────────────────────────────────────── */}
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
              Full Transparency
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900">
              Own everything you pay for.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {deliverables.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden bg-[#f6f3f2] rounded-2xl p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:border-[#b31c33]/20 hover:shadow-xl hover:shadow-stone-200/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#b31c33]/8 group-hover:bg-[#b31c33] flex items-center justify-center text-[#b31c33] group-hover:text-white shrink-0 transition-colors duration-300 mb-6">
                  {item.icon}
                </div>
                <h3 className="font-headline text-xl text-stone-900 mb-2.5">{item.title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Agile Delivery ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16"
          >
            <div className="max-w-xl">
              <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
                Agile Delivery
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-5">
                Those seven stages repeat — they don&apos;t run once.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-[#5a4040] leading-relaxed font-body">
                Discover, design, prototype, develop, test, review, and iterate
                aren&apos;t a straight line we walk once and hand off. We work in
                short sprints, so any stage can send us back to an earlier one —
                you see working software early and often, and scope adapts as
                testing, reviews, and stakeholder feedback teach us something the
                initial spec couldn&apos;t.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="relative aspect-square max-w-md mx-auto w-full">
              <AgileLoopGraphic />
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                title: "Short Sprints",
                desc: "Work broken into fixed, short cycles — usually two weeks — each ending in something you can actually review.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Ship Early, Ship Often",
                desc: "Staging environments updated every sprint, not unveiled at the end. You see the product take shape as it's built.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l4.5-1.5 10-10a2.121 2.121 0 00-3-3l-10 10L4.5 19.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 6l4 4" />
                  </svg>
                ),
              },
              {
                title: "Backlog, Not a Blueprint",
                desc: "Priorities re-ordered as we learn — from user feedback, real data, or a shift in your business — without renegotiating the whole project.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
                  </svg>
                ),
              },
              {
                title: "Continuous Feedback",
                desc: "Regular reviews with your team keep design, engineering, and integration work aligned to what's actually needed, sprint over sprint.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 10-3.4 6.55L20 20l-1.2-3.6A7.96 7.96 0 0020 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-7 border border-[#e2bebd]/20 hover:border-[#b31c33]/20 hover:shadow-xl hover:shadow-stone-200/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#b31c33]/8 group-hover:bg-[#b31c33] flex items-center justify-center text-[#b31c33] group-hover:text-white shrink-0 transition-colors duration-300 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-headline text-xl text-stone-900 mb-2.5">{item.title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Pull Quote ───────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
        <Image
          src="/images/software-development/cta-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.1]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <p className="font-headline text-4xl md:text-5xl italic text-white leading-tight max-w-4xl mx-auto mb-10">
            &ldquo;Software that fits your business exactly —{" "}
            <span className="text-[#ffb3b3]">not the other way around</span>.&rdquo;
          </p>
          <div className="w-16 h-px bg-[#b31c33] mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone-500">
            — Illumia Software Development Philosophy
          </p>
        </div>
      </section>
    </>
  );
}
