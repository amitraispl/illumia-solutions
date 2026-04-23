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

const techFeatures = [
  {
    title: "Immutable Security",
    desc: "Continuous threat monitoring and zero-trust architecture integrated at every layer of your cloud infrastructure.",
    icon: (
      <svg className="w-5 h-5 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Ultra-Low Latency",
    desc: "Global backbone optimization ensuring sub-millisecond response times for critical applications and services.",
    icon: (
      <svg className="w-5 h-5 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Seamless Scalability",
    desc: "Auto-scaling infrastructure that grows with your business without performance degradation or cost surprises.",
    icon: (
      <svg className="w-5 h-5 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
  },
];

export default function CloudServicesContent() {
  return (
    <>
      {/* ─── Hero — split text/image layout ──────────────────────────────── */}
      <PageHero
        badge="Precision Infrastructure"
        title={
          <>
            Cloud Services{" "}
            <span className="italic text-[#b31c33]">Redefined.</span>
          </>
        }
        description="At Illumia, we specialize in providing comprehensive cloud solutions tailored to meet the dynamic needs of businesses across industries. We leverage advanced cloud technology to optimize operations, enhance security, and ensure seamless scalability."
        primaryCta={{ label: "Consult an Expert", href: "/contact" }}
        secondaryCta={{ label: "View Infrastructure", href: "#ecosystem" }}
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=85&auto=format&fit=crop"
        imageAlt="Cloud infrastructure — Illumia Solutions"
      />

      {/* ─── Obsidian Ecosystem Bento ─────────────────────────────────────── */}
      <section id="ecosystem" className="py-32 px-6 md:px-12 bg-[#f6f3f2] scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Enterprise Cloud Portfolio
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-5xl text-stone-900">
              The Obsidian Ecosystem
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5c5c5c] font-body text-sm mt-4 max-w-sm leading-relaxed">
              Thirteen specialized vectors of cloud innovation designed for the modern enterprise. We don&apos;t just provide storage; we provide complete cloud mastery.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Cell 1: Enterprise Hosting — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-white rounded-2xl p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">01 / Foundation</span>
              <h3 className="font-headline text-3xl text-stone-900 mb-3">Enterprise Hosting</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6">Meticulously architected environments for mission-critical systems that require absolute up-time performance and high-fidelity compute resources.</p>
              <div className="grid grid-cols-2 gap-2">
                {["Virtual Private Server", "Physical Server", "Containers", "Virtual Desktops"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-body font-semibold text-[#5c5c5c] uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#b31c33] shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-6 text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest group">
                Explore Architecture
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>

            {/* Cell 2: Application Services */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 hover:shadow-lg transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">02 / Application</span>
              <h3 className="font-headline text-2xl text-stone-900 mb-3">Application Services</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">Purpose-built application environments without operational constraints, with full access to enterprise-grade compute.</p>
            </motion.div>

            {/* Cell 3: Image — Cloud Infrastructure */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop"
                alt="Cloud infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/60" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">03 / Migration</span>
                <div>
                  <h3 className="font-headline text-2xl text-white mb-1">Cloud Migration</h3>
                  <p className="text-white/60 text-xs font-body">On-Prem → Public Cloud</p>
                </div>
              </div>
            </motion.div>

            {/* Cell 4: Maintenance */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 hover:shadow-lg transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">04 / Maintenance</span>
              <h3 className="font-headline text-2xl text-stone-900 mb-3">Maintenance</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">Proactive maintenance models and system tuning to ensure your infrastructure performs with engineered precision.</p>
            </motion.div>

            {/* Cell 5: NMS */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 hover:shadow-lg transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">05 / NMS</span>
              <h3 className="font-headline text-2xl text-stone-900 mb-3">NMS as a Service</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">Intelligent network management systems providing total visibility and predictive fault resolution.</p>
            </motion.div>

            {/* Cell 6: SIEM — RED accent */}
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-[#b31c33] rounded-2xl p-10 text-white hover:bg-[#920022] transition-colors duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold block mb-4">06 / Security</span>
              <h3 className="font-headline text-3xl text-white mb-3">SIEM as a Service</h3>
              <p className="text-white/80 text-sm font-body leading-relaxed mb-6">Security Information and Event Management that detects, analyses, and responds to threats in real-time with AI-driven log aggregation and analysis.</p>
              <Link href="/contact" className="font-body font-semibold text-xs inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-white/80 group">
                Review Today
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>

            {/* Cell 7: Email Solutions */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 hover:shadow-lg transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">07 / Email</span>
              <h3 className="font-headline text-2xl text-stone-900 mb-3">E-mail Solutions</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">Enterprise-grade email infrastructure with advanced spam filtering and seamless enterprise directory integration.</p>
            </motion.div>

            {/* Cell 8: PAM */}
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 hover:shadow-lg transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">08 / PAM</span>
              <h3 className="font-headline text-2xl text-stone-900 mb-3">PAM as a Service</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed">Intelligent Privileged Access Management control to keep the keys to your kingdom precisely managed.</p>
            </motion.div>

            {/* Cell 9-11: Drive / Backup / VDaaS */}
            {[
              { num: "09", title: "Cloud Drive", desc: "Enterprise cloud storage for seamless file access from anywhere." },
              { num: "10", title: "Cloud Backup", desc: "Comprehensive data protection necessary for business continuity." },
              { num: "11", title: "Virtual DaaS", desc: "Virtual desktop computing settings to keep your staff productive." },
            ].map((item) => (
              <motion.div key={item.num} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-[#e2bebd]/30 hover:shadow-lg transition-all duration-300">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-3">{item.num}</span>
                <h3 className="font-headline text-xl text-stone-900 mb-2">{item.title}</h3>
                <p className="text-[#5a4040] text-xs font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* Cell 12: Legacy Migration — RED accent + image */}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop"
                alt="Legacy migration infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#b31c33]/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70 font-bold">12 / Migration</span>
                <div>
                  <h3 className="font-headline text-2xl text-white mb-2">Legacy Migration</h3>
                  <p className="text-white/75 text-xs font-body mb-4">Making non-profitable Oracle a complete alternative. We specialize in complex migration of business-critical systems.</p>
                  <Link href="/contact" className="font-body font-semibold text-xs inline-flex items-center gap-2 uppercase tracking-widest text-white/80 hover:gap-4 transition-all group">
                    Activate Migration Plans
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Cell 13: Object Storage — wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-white rounded-2xl p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">13 / Storage</span>
              <h3 className="font-headline text-3xl text-stone-900 mb-3">Object Storage</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">High-throughput, low-latency object storage with S3-compatible API. Perfect for large-scale data, media, backup archives, and analytics workloads.</p>
              <Link href="/object-storage" className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest group">
                Explore Storage
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Technical Excellence ─────────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12"
          >
            <motion.h2 variants={fadeUp} className="font-headline text-5xl text-stone-900 leading-tight">
              Clinical Precision in Every Byte.
            </motion.h2>
            <motion.div variants={stagger} className="space-y-8">
              {techFeatures.map((f) => (
                <motion.div key={f.title} variants={fadeUp} className="flex gap-6 group">
                  <div className="h-10 w-10 shrink-0 bg-[#f6f3f2] flex items-center justify-center rounded-xl border border-[#e2bebd]/30">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-sm tracking-widest uppercase mb-2 text-stone-900">{f.title}</h4>
                    <p className="text-[#5a4040] leading-relaxed font-body text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-block bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 transition-all duration-200 active:scale-95">
                Discuss Your Cloud Strategy
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-[#f6f3f2] rounded-2xl p-12 min-h-[400px] flex items-center justify-center"
          >
            <div className="text-center w-full">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["Azure", "AWS", "Google Cloud", "Oracle Cloud"].map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl px-6 py-5 shadow-sm border border-[#e2bebd]/30 text-center"
                  >
                    <p className="font-body font-semibold text-sm text-stone-900">{p}</p>
                  </motion.div>
                ))}
              </div>
              <p className="font-body text-xs text-[#5c5c5c] uppercase tracking-widest">
                Cloud Platform Partners
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f6f3f2] px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="font-headline text-5xl text-stone-900 mb-6">
            Ready to elevate your infrastructure?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Join the elite enterprises running on an Illumia Obsidian Cloud. To elevate your architectural audit —
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block bg-[#1c1b1b] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#2a2929] shadow-lg transition-all duration-200 active:scale-95">
              Get Started
            </Link>
            <Link href="/contact" className="inline-block border border-[#b31c33]/30 text-[#b31c33] px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9]/20">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
