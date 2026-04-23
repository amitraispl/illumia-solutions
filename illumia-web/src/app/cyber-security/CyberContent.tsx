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

const specializedItems = [
  { label: "Compliance & Regulatory", desc: "GDPR, HIPAA, PCI-DSS, SOC2 and ISO 27001 alignment matched with continuously updated status tracking." },
  { label: "Mobile Security", desc: "Hardening the mobile endpoint against current-generation vectors with BYOD strategy and mobile device forensics." },
  { label: "IAM Governance", desc: "Identity as the new perimeter. Modern IAM built to keep you perpetually compliant without sacrificing velocity." },
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
        primaryCta={{ label: "Audit your Infrastructure", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Cybersecurity professional"
        imageGrayscale={true}
        imagePosition="object-top"
      />

      {/* ─── Cyber Ecosystem Bento ────────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Core Competencies
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-5xl text-stone-900">
              Cyber Ecosystem
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Cell 1: IT Risk & Governance — tall */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 flex flex-col gap-4 row-span-2">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold">01 / Adaptivity</span>
              <h3 className="font-headline text-3xl text-stone-900">IT Risk &amp; Governance</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">
                Navigating the landscape of modern IT-threat actors, requires more than tools — it requires a philosophy. We architect governance frameworks that align with high-value institutional defence without sacrificing business continuity.
              </p>
              <div className="space-y-2 mt-2">
                {["Strategy & Framework", "Vulnerability Assessment", "Business Continuity Planning", "IT Integrity Risk Management"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs font-body font-semibold text-[#5c5c5c] uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#b31c33] shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cell 2: Application Security — RED accent */}
            <motion.div variants={fadeUp} className="bg-[#b31c33] rounded-2xl p-10 text-white">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold block mb-4">02 / App Security</span>
              <h3 className="font-headline text-2xl text-white mb-3">Application Security</h3>
              <p className="text-white/80 text-sm font-body leading-relaxed">Securing the software stack through code review, penetration testing and rigorous precision testing protocols.</p>
            </motion.div>

            {/* Cell 3: Server room image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop"
                alt="Infrastructure security"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/65" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50 font-bold">03 / Infrastructure</span>
                <p className="font-headline text-white text-xl">Infrastructure Resilience</p>
              </div>
            </motion.div>

            {/* Cell 4: Cloud Infrastructure */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">04 / Cloud</span>
              <h3 className="font-headline text-2xl text-stone-900 mb-3">Cloud Security</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">Architecting secure multi-cloud environments that prioritize data sovereignty and infrastructure resilience across AWS, Azure, and Google Cloud.</p>
            </motion.div>

            {/* Cell 5: Vulnerability Management — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&auto=format&fit=crop"
                alt="Vulnerability management and threat detection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/70" />
              <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50 font-bold">05 / MED-SIX &amp; EDGE</span>
                <div>
                  <h3 className="font-headline text-3xl text-white mb-3">Infrastructure Resilience</h3>
                  <p className="text-white/70 text-sm font-body leading-relaxed">Delivering the perimeter and the core: We design technical architecture with full support, intuition, and iterative review movement native to it here.</p>
                  <div className="flex gap-3 mt-4">
                    {[
                      <svg key="sh" className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                      <svg key="cloud" className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
                      <svg key="bolt" className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                    ]}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Specialized Intelligence ─────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bullet list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-6">
              Specialized Intelligence
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-5xl text-stone-900 mb-12 leading-tight">
              Purpose-built defence for every vector.
            </motion.h2>
            <motion.div variants={stagger} className="space-y-6">
              {specializedItems.map((item) => (
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

          {/* Right: pull quote card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-white rounded-2xl p-12 border border-[#e2bebd]/30 shadow-xl shadow-stone-200/40"
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
      <section className="py-28 bg-[#1c1b1b] text-white text-center relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563986768494-4759ece87d8b?w=1600&q=60&auto=format&fit=crop"
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
            href="/contact"
            className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#d63849] shadow-xl shadow-[#b31c33]/30 active:scale-95 transition-all duration-200"
          >
            Activate 24/7 Defence
          </Link>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="font-headline text-5xl text-stone-900 mb-6">
            Ready to secure your business?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Our certified cybersecurity experts are ready to assess your current posture
            and develop a tailored defense strategy.
          </p>
          <Link href="/contact" className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 transition-all duration-200 active:scale-95">
            Get a Security Assessment
          </Link>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
