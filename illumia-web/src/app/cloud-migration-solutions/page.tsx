"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
// import ServicesEcosystem from "@/components/ServicesEcosystem";

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

const migrationTypes = [
  {
    num: "01",
    title: "On-Prem to Public Cloud",
    desc: "Lift-and-shift or re-platform on-premises workloads to leading public cloud providers — Azure, AWS, GCP, and Oracle Cloud — with validated data integrity and minimal disruption.",
    image: "https://nextcloud.illumiasolutions.com/public.php/dav/files/SoSt49noKW8Kdem",
    imageAlt: "Global cloud network",
  },
  {
    num: "02",
    title: "Cloud to Cloud",
    desc: "Migrate between cloud platforms or consolidate multi-cloud environments. Move workloads between Azure, AWS, GCP, and Oracle Cloud to optimise performance, cost, and compliance.",
    image: "https://nextcloud.illumiasolutions.com/public.php/dav/files/2WHwGdd9oY9Lg3D",
    imageAlt: "Cloud data transfer",
  },
  {
    num: "03",
    title: "Cloud to On-Prem",
    desc: "Repatriate workloads from public cloud back to on-premises or private cloud on VMware, Proxmox, or OpenStack — for sovereignty, compliance, or cost optimisation.",
    image: "https://nextcloud.illumiasolutions.com/public.php/dav/files/pJ2xYkwB5KE8KSA",
    imageAlt: "On-premises data centre",
  },
];

const processSteps = [
  {
    phase: "Phase 01",
    title: "Assessment & Planning",
    items: [
      "Comprehensive analysis of existing infrastructure, applications, and workloads",
      "Custom migration roadmap aligned to your business goals and timelines",
      "Risk identification and mitigation strategy",
    ],
  },
  {
    phase: "Phase 02",
    title: "Migration Strategy",
    items: [
      "Lift-and-shift for rapid, low-complexity migrations",
      "Replatforming to leverage cloud-native features",
      "Refactoring for maximum cloud efficiency and scalability",
    ],
  },
  {
    phase: "Phase 03",
    title: "Implementation",
    items: [
      "Executed with zero tolerance for data loss — integrity checks at every stage",
      "Automated tooling for speed and repeatability",
      "Staged cutover with rollback capability",
    ],
  },
  {
    phase: "Phase 04",
    title: "Optimisation & Handover",
    items: [
      "Performance tuning post-migration",
      "Cost and resource optimisation",
      "Ongoing monitoring, management, and support",
    ],
  },
];

const platforms = [
  { name: "Microsoft Azure", category: "Public Cloud" },
  { name: "Amazon Web Services", category: "Public Cloud" },
  { name: "Google Cloud Platform", category: "Public Cloud" },
  { name: "Oracle Cloud", category: "Public Cloud" },
  { name: "VMware", category: "On-Premises" },
  { name: "Proxmox VE", category: "On-Premises" },
  { name: "OpenStack", category: "On-Premises" },
  { name: "Hybrid / Private Cloud", category: "Hybrid" },
];

export default function CloudMigrationPage() {
  return (
    <>
      <PageHero
        badge="03 / Migration Services"
        title={
          <>
            Cloud Migration{" "}
            <span className="italic font-normal text-[#b31c33]">Solutions.</span>
          </>
        }
        description="Seamless, low-risk migration pathways engineered to move your workloads with zero business disruption. From on-premises to public cloud, cloud-to-cloud, or repatriation — we manage the full lifecycle."
        primaryCta={{ label: "Plan Your Migration", href: "/contact#contact-form" }}
        secondaryCta={{ label: "Cloud Services", href: "/cloud-services#migration" }}
        imageSrc="/cld-mig.png"
        imageAlt="Cloud migration data centre infrastructure"
      />

      {/* ─── Migration Types ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Migration Pathways
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900">
              Every direction covered.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5c5c5c] font-body text-sm mt-4 max-w-lg leading-relaxed">
              Whether you&apos;re moving to the cloud, between clouds, or repatriating workloads — Illumia has a validated pathway.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {migrationTypes.map((type, i) => (
              <motion.div
                key={type.num}
                variants={fadeUp}
                className={`group relative rounded-2xl overflow-hidden min-h-[360px] ${i === 1 ? "lg:mt-8" : ""}`}
              >
                <Image
                  src={type.image}
                  alt={type.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1c1b1b]/65 group-hover:bg-[#1c1b1b]/55 transition-colors" />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold">
                    {type.num}
                  </span>
                  <div>
                    <h3 className="font-headline text-2xl text-white mb-3">{type.title}</h3>
                    <p className="text-white/70 text-sm font-body leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Our Methodology
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900">
              Migration process, end-to-end.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.phase}
                variants={fadeUp}
                className={`rounded-2xl p-10 flex flex-col gap-5 ${
                  i === 0
                    ? "bg-[#b31c33] text-white"
                    : "bg-[#f6f3f2] border border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-xl transition-all duration-300"
                }`}
              >
                <div>
                  <span className={`font-body text-xs tracking-[0.3em] uppercase font-bold block mb-2 ${i === 0 ? "text-white/60" : "text-[#b31c33]"}`}>
                    {step.phase}
                  </span>
                  <h3 className={`font-headline text-2xl ${i === 0 ? "text-white" : "text-stone-900"}`}>
                    {step.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className={`flex items-start gap-3 text-sm font-body leading-relaxed ${i === 0 ? "text-white/80" : "text-[#5a4040]"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${i === 0 ? "bg-white/50" : "bg-[#b31c33]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Platform Support ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#1c1b1b]">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block mb-4">
              Platform Expertise
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-white">
              Every major platform. Zero vendor lock-in.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-400 font-body text-sm mt-4 max-w-lg leading-relaxed">
              Illumia&apos;s engineering team is certified across all leading public cloud and on-premises platforms.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {platforms.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#b31c33]/30 transition-all duration-300"
              >
                <p className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold mb-2">{p.category}</p>
                <p className="font-headline text-base text-white">{p.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-white rounded-2xl p-12 md:p-16 grid lg:grid-cols-2 gap-12 items-center border border-[#e2bebd]/30">
            <div>
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
                Start Your Migration
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
                Ready to move?{" "}
                <span className="italic text-[#b31c33]">We&apos;ll map the route.</span>
              </h2>
              <p className="text-[#5a4040] font-body text-sm leading-relaxed">
                Every migration begins with a no-commitment assessment. Our engineers analyse your environment and deliver a risk-graded roadmap within days — not weeks.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-3 bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-xl shadow-[#b31c33]/20 active:scale-95 transition-all duration-200 group"
              >
                Request Migration Assessment
                <Arrow />
              </Link>
              <Link
                href="/cloud-services#migration"
                className="inline-flex items-center gap-3 border border-[#b31c33]/30 text-[#b31c33] px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9]/20 transition-colors duration-200 group"
              >
                Back to Cloud Services
                <Arrow />
              </Link>
              <p className="text-[#5c5c5c] text-xs font-body">Assessment included — no upfront commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
