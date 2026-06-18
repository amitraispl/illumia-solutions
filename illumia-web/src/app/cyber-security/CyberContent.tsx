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

const SERVICES = [
  {
    num: "01",
    eyebrow: "Risk & Governance",
    title: "IT Risk and Security Strategy",
    desc: "Architect governance frameworks aligned with high-value institutional defence — strategy, vulnerability assessment, business continuity, and regulatory alignment.",
    bullets: ["Strategy & Framework Development", "Vulnerability Assessment", "Business Continuity Planning", "Regulatory Alignment"],
    href: "/it-risk-and-security-strategy",
    variant: "red-wide",
  },
  {
    num: "02",
    eyebrow: "AppSec",
    title: "Application Security",
    desc: "Securing the software stack through rigorous code review, penetration testing, and OWASP-aligned remediation protocols.",
    href: "/application-security",
    variant: "light",
  },
  {
    num: "03",
    eyebrow: "Mobile",
    title: "Mobile Security",
    desc: "Hardening mobile endpoints against current-generation attack vectors with BYOD strategy and mobile device forensics.",
    href: "/mobile-security",
    variant: "light",
  },
  {
    num: "04",
    eyebrow: "Cloud Posture",
    title: "Cloud Security",
    desc: "Architecting secure multi-cloud environments that prioritise data sovereignty and infrastructure resilience across AWS, Azure, and Google Cloud.",
    href: "/cloud-security",
    variant: "light",
  },
  {
    num: "05",
    eyebrow: "Infrastructure",
    title: "Infrastructure Security",
    desc: "Network segmentation, IDS/IPS deployment, server hardening, and full security architecture review for your critical infrastructure.",
    href: "/infrastructure-security",
    variant: "light",
  },
  {
    num: "06",
    eyebrow: "Regulatory",
    title: "Compliance Services",
    desc: "GDPR, ISO 27001, PCI-DSS, HIPAA, and SOC 2 alignment with continuously updated status tracking and audit-ready reporting.",
    href: "/compliance-services",
    variant: "wide",
  },
  {
    num: "07",
    eyebrow: "Advanced",
    title: "Specialized Services",
    desc: "Red team operations, digital forensics, threat hunting, incident response, and security awareness training.",
    href: "/specialized-services",
    variant: "light",
  },
];

export default function CyberSecurityContent() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="The Precision Editorial"
        title={
          <>
            Fortified{" "}
            <span className="italic font-normal text-[#b31c33]">Resilience.</span>
          </>
        }
        description="Navigating the complexities of modern digital threats requires more than just tools. It requires a partner dedicated to precision in cybersecurity strategy — protecting your assets, maintaining compliance, and ensuring business continuity."
        primaryCta={{ label: "Book a Security Consultation", href: "/contact#contact-form" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        imageSrc="https://nextcloud.illumiasolutions.com/public.php/dav/files/24pgQ3pHZkCZmE9"
        imageAlt="Cybersecurity professional"
        imageGrayscale={true}
        imagePosition="object-top"
      />

      {/* ─── 7 Service Cards ──────────────────────────────────────────────── */}
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
              Core Competencies
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900">
              Cyber Security Services
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Row 1: IT Risk (2-wide RED) + App Security */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href={SERVICES[0].href}
                className="group block h-full bg-[#b31c33] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#920022] transition-colors duration-300"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-4">{SERVICES[0].num} / {SERVICES[0].eyebrow}</span>
                <h3 className="font-headline text-3xl text-white mb-3">{SERVICES[0].title}</h3>
                <p className="text-white/80 text-sm font-body leading-relaxed mb-6">{SERVICES[0].desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {SERVICES[0].bullets!.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs font-body font-semibold text-white/70 uppercase tracking-wide">
                      <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" /> {b}
                    </div>
                  ))}
                </div>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="h-full">
              <Link
                href={SERVICES[1].href}
                className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">{SERVICES[1].num} / {SERVICES[1].eyebrow}</span>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">{SERVICES[1].title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">{SERVICES[1].desc}</p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Row 2: Mobile + Cloud + Infrastructure */}
            {[SERVICES[2], SERVICES[3], SERVICES[4]].map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="h-full">
                <Link
                  href={s.href}
                  className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">{s.num} / {s.eyebrow}</span>
                  <h3 className="font-headline text-2xl text-stone-900 mb-3">{s.title}</h3>
                  <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                    Read More <Arrow />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Row 3: Compliance (2-wide) + Specialized */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href={SERVICES[5].href}
                className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">{SERVICES[5].num} / {SERVICES[5].eyebrow}</span>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">{SERVICES[5].title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">{SERVICES[5].desc}</p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="h-full">
              <Link
                href={SERVICES[6].href}
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">{SERVICES[6].num} / {SERVICES[6].eyebrow}</span>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">{SERVICES[6].title}</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">{SERVICES[6].desc}</p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read More <Arrow />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Pull Quote / Editorial ───────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-6">
              Specialized Intelligence
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
              Purpose-built defence for every vector.
            </motion.h2>
            <motion.div variants={stagger} className="space-y-6">
              {[
                { label: "Compliance & Regulatory", desc: "GDPR, HIPAA, PCI-DSS, SOC2 and ISO 27001 alignment matched with continuously updated status tracking." },
                { label: "Mobile Security", desc: "Hardening the mobile endpoint against current-generation vectors with BYOD strategy and mobile device forensics." },
                { label: "IAM Governance", desc: "Identity as the new perimeter. Modern IAM built to keep you perpetually compliant without sacrificing velocity." },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex gap-5 border-b border-[#e2bebd]/40 pb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/10 flex items-center justify-center text-[#b31c33] shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-sm uppercase tracking-widest text-stone-900 mb-2">{item.label}</h4>
                    <p className="text-[#5a4040] text-sm font-body leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#e2bebd]/30 shadow-xl shadow-stone-200/40"
          >
            <blockquote className="font-headline text-3xl md:text-4xl italic text-stone-900 leading-tight mb-8">
              &ldquo;Security is not a final destination, but a state of{" "}
              <span className="text-[#b31c33]">perpetual vigilance</span>{" "}
              and tactical adaptation.&rdquo;
            </blockquote>
            <div className="border-t border-[#e2bebd]/40 pt-6">
              <p className="font-body text-xs uppercase tracking-widest text-[#5c5c5c] font-bold">
                — Chief Security Architect, Illumia
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Managed SOC Banner ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1b1b] text-white text-center relative overflow-hidden">
        <Image
          src="https://nextcloud.illumiasolutions.com/public.php/dav/files/3y5Xx2yCXRnm9SW"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
          <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block mb-6">
            Always On
          </span>
          <h2 className="font-headline text-5xl md:text-6xl text-white mb-6 leading-tight">
            Managed SOC 24/7/365
          </h2>
          <p className="text-stone-400 text-lg font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Continuous monitoring, detection, and response with our Security Operations Centre. AI-driven and Human-led Partner Solutions.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#d63849] shadow-xl shadow-[#b31c33]/30 active:scale-95 transition-all duration-200"
          >
            Activate 24/7 Defence
          </Link>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
