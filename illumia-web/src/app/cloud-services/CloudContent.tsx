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

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  learnMoreHref,
  learnMoreLabel = "Learn More",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mb-14 flex flex-col sm:flex-row sm:items-end gap-6 justify-between"
    >
      <div>
        <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
          {eyebrow}
        </motion.span>
        <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900">
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p variants={fadeUp} className="text-[#5c5c5c] font-body text-sm mt-4 max-w-lg leading-relaxed">
            {subtitle}
          </motion.p>
        )}
      </div>
      {learnMoreHref && (
        <motion.div variants={fadeUp} className="shrink-0">
          <Link
            href={learnMoreHref}
            className="group font-body font-semibold text-xs inline-flex items-center gap-2 uppercase tracking-widest text-[#b31c33] border border-[#b31c33]/30 rounded-xl px-5 py-3 hover:bg-[#b31c33] hover:text-white transition-all duration-200"
          >
            {learnMoreLabel}
            <Arrow />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CloudServicesContent() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Precision Infrastructure"
        title={
          <>
            Cloud Services{" "}
            <span className="italic text-[#b31c33]">Redefined.</span>
          </>
        }
        description="At Illumia, we specialize in providing comprehensive cloud solutions tailored to meet the dynamic needs of businesses across industries. We leverage advanced cloud technology to optimize operations, enhance security, and ensure seamless scalability."
        primaryCta={{ label: "Consult an Expert", href: "/contact#contact-form" }}
        secondaryCta={{ label: "View Services", href: "#hosting" }}
        imageSrc="https://nextcloud.illumiasolutions.com/public.php/dav/files/XrNLy3ECNjZanyn"
        imageAlt="Cloud infrastructure — Illumia Solutions"
      />

      {/* ─── 01 / Hosting Services ────────────────────────────────────────── */}
      <section id="hosting" className="py-20 px-6 md:px-12 bg-[#f6f3f2] scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeader
            eyebrow="01 / Hosting Services"
            title="Enterprise Hosting"
            subtitle="Meticulously architected environments for mission-critical systems that require absolute uptime and high-fidelity compute resources."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* VPS — 2-wide RED */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href="/virtual-private-server"
                className="group block h-full bg-[#b31c33] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#920022] transition-colors duration-300"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-4">01 / VPS</span>
                <h3 className="font-headline text-3xl text-white mb-3">Virtual Private Server</h3>
                <p className="text-white/75 text-sm font-body leading-relaxed mb-6">
                  Secure, scalable, and customizable virtual servers with dedicated resources, full root access, and NVMe SSD storage — consistent enterprise performance without shared-resource risk.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["Dedicated Resources", "Full Root Access", "NVMe SSD Storage", "DDoS Protection"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-body font-semibold text-white/70 uppercase tracking-wide">
                      <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                  Explore VPS <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Physical Server */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/physical-server"
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">02 / Bare-Metal</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-.75m0-4.5v-9A2.25 2.25 0 014.5 3h15a2.25 2.25 0 012.25 2.25v9m-19.5 0h19.5m-10.5 3h.008v.008H11.25v-.008zm2.25 0h.008v.008H13.5v-.008z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">Physical Server</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">
                  Dedicated bare-metal servers for workloads requiring maximum compute power, hardware-level control, and zero virtualisation overhead.
                </p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Explore <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Containers — image wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href="/containers"
                className="group relative block rounded-2xl overflow-hidden min-h-[220px] h-full"
              >
                <Image
                  src="https://images.pexels.com/photos/5203849/pexels-photo-5203849.jpeg?w=1260&h=750&dpr=1"
                  alt="Container infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1c1b1b]/65 group-hover:bg-[#1c1b1b]/55 transition-colors" />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold">03 / Containers</span>
                  <div>
                    <h3 className="font-headline text-2xl text-white mb-2">Container Solutions</h3>
                    <p className="text-white/60 text-xs font-body mb-3">Portable, consistent environments across development, staging, and production.</p>
                    <span className="text-white/70 font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                      Explore Containers <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Virtual Desktops */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/virtual-desktops"
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">04 / DaaS</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">Virtual Desktops</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">
                  Secure remote desktop access from any device — all data stays in your data centre, eliminating endpoint risk.
                </p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Explore <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Disaster Recovery */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/disaster-recovery"
                className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">05 / DR</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">Disaster Recovery</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">
                  Automated failover and continuous replication meeting aggressive RTO and RPO targets.
                </p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Explore <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Object Storage — 2-wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href="/object-storage"
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">06 / Storage</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 4.5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">Object Storage</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6">
                  High-throughput, low-latency S3-compatible object storage for large-scale data, media archives, backup workloads, and analytics pipelines.
                </p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Explore Storage <Arrow />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 02 / Application Services ────────────────────────────────────── */}
      <section id="application" className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeader
            eyebrow="02 / Application Services"
            title="Application Services"
            subtitle="Purpose-built managed application environments — security, communication, storage, and monitoring delivered as a service."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* SIEM — 2-wide RED */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href="/siem-as-a-service"
                className="group block h-full bg-[#b31c33] rounded-2xl p-6 sm:p-8 lg:p-10 text-white hover:bg-[#920022] transition-colors duration-300"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-4">01 / Security</span>
                <h3 className="font-headline text-3xl text-white mb-3">SIEM as a Service</h3>
                <p className="text-white/80 text-sm font-body leading-relaxed mb-6">
                  Security Information and Event Management detecting, analysing, and responding to threats in real-time with AI-driven log aggregation and analysis — powered by Wazuh.
                </p>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                  Explore SIEM <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Honeypot */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/honeypot-as-a-service"
                className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">02 / Deception</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">Honeypot as a Service</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed">
                  Sophisticated deception technology detecting threats before they reach production systems — zero false positives, all signal.
                </p>
              </Link>
            </motion.div>

            {/* EDR */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/edr-solution"
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">03 / Endpoint</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">EDR as a Service</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed">
                  Real-time endpoint detection and automated response across your entire device fleet.
                </p>
              </Link>
            </motion.div>

            {/* WAF */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/waf-as-a-service"
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">04 / Application</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">WAF as a Service</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed">
                  Enterprise Web Application Firewall blocking OWASP Top 10, DDoS, and zero-day exploits.
                </p>
              </Link>
            </motion.div>

            {/* NMS */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/nms-as-a-service"
                className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">05 / Network</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-2xl text-stone-900 mb-3">NMS as a Service</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed">
                  Intelligent network management providing total visibility and predictive fault resolution.
                </p>
              </Link>
            </motion.div>

            {/* Email — 2-wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href="/email-as-a-service"
                className="group block h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">06 / Communication</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">Email as a Service</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">
                  Enterprise email infrastructure on Zimbra/Carbonio with Proxmox Mail Gateway — AI spam filtering, AD integration, and complete data sovereignty.
                </p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Explore Email <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* PAM */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/pam-as-a-service"
                className="group relative block rounded-2xl overflow-hidden min-h-[220px] h-full"
              >
                <Image
                  src="https://images.pexels.com/photos/11391947/pexels-photo-11391947.jpeg?w=1260&h=750&dpr=1"
                  alt="Privileged Access Management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1c1b1b]/65 group-hover:bg-[#1c1b1b]/55 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-white/70 font-bold">07 / Access</span>
                  <div>
                    <h3 className="font-headline text-2xl text-white mb-2">PAM as a Service</h3>
                    <p className="text-white/60 text-xs font-body mb-3">Privileged Access Management precisely controlling the keys to your critical systems.</p>
                    <span className="text-white/75 font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                      Explore PAM <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Drive — 2-wide */}
            <motion.div variants={fadeUp} className="lg:col-span-2 h-full">
              <Link
                href="/drive-as-a-service"
                className="group block h-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold">08 / Storage</span>
                  <div className="w-8 h-8 rounded-lg bg-[#b31c33]/8 flex items-center justify-center text-[#b31c33]/60 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">Drive as a Service</h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-4">
                  Secure self-hosted cloud storage powered by Nextcloud — seamless file sync, collaborative editing with OnlyOffice, and complete data sovereignty.
                </p>
                <span className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Explore Drive <Arrow />
                </span>
              </Link>
            </motion.div>

            {/* Backup — image RED */}
            <motion.div variants={fadeUp} className="h-full">
              <Link
                href="/backup-as-a-service"
                className="group relative block rounded-2xl overflow-hidden min-h-[220px] h-full"
              >
                <Image
                  src="https://nextcloud.illumiasolutions.com/public.php/dav/files/MGEq9LWor5NwxBx"
                  alt="Backup infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#b31c33]/80 group-hover:bg-[#920022]/85 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-white/70 font-bold">09 / Data Protection</span>
                  <div>
                    <h3 className="font-headline text-2xl text-white mb-2">Backup as a Service</h3>
                    <span className="text-white/75 font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                      Explore Backup <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 03 / Migration Services ──────────────────────────────────────── */}
      <section id="migration" className="py-20 px-6 md:px-12 bg-[#f6f3f2] scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeader
            eyebrow="03 / Migration Services"
            title="Cloud Migration"
            subtitle="Seamless, low-risk migration pathways engineered to move your workloads with zero business disruption."
            learnMoreHref="/cloud-migration-solutions"
            learnMoreLabel="Full Migration Guide"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          >
              {/* On-Prem to Public Cloud */}
              <motion.div variants={fadeUp} className="h-full">
                <div className="h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">01</span>
                  <h3 className="font-headline text-2xl text-stone-900 mb-3">On-Prem to Public Cloud</h3>
                  <p className="text-[#5a4040] text-sm font-body leading-relaxed">Lift-and-shift or re-platform on-premises workloads to leading public cloud providers with validated data integrity and minimal disruption.</p>
                </div>
              </motion.div>

              {/* Cloud to Cloud — image card */}
              <motion.div variants={fadeUp} className="h-full">
                <div className="group relative rounded-2xl overflow-hidden min-h-[220px] h-full">
                  <Image
                    src="https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?w=1260&h=750&dpr=1"
                    alt="Cloud to Cloud Migration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1c1b1b]/65 group-hover:bg-[#1c1b1b]/55 transition-colors" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-white/70 font-bold">02</span>
                    <div>
                      <h3 className="font-headline text-2xl text-white mb-2">Cloud to Cloud</h3>
                      <p className="text-white/70 text-xs font-body">Migrate between cloud providers or consolidate multi-cloud environments with full data integrity validation at every stage.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cloud to On-Prem */}
              <motion.div variants={fadeUp} className="h-full">
                <div className="h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">03</span>
                  <h3 className="font-headline text-2xl text-stone-900 mb-3">Cloud to On-Prem</h3>
                  <p className="text-[#5a4040] text-sm font-body leading-relaxed">Repatriate workloads back to on-premises or private cloud infrastructure when sovereignty, performance, or cost demands it.</p>
                </div>
              </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-[#1c1b1b] rounded-2xl p-6 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#ffb3b3] font-bold block mb-4">04 / End-to-End</span>
              <h3 className="font-headline text-3xl text-white mb-4">Complete Migration Solution</h3>
              <p className="text-stone-300 text-sm font-body leading-relaxed">
                From assessment and planning through execution and post-migration optimisation — Illumia manages the full migration lifecycle. We specialise in complex Oracle-to-open-source transitions and legacy system modernisation at enterprise scale.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start lg:items-end">
              <Link
                href="/contact#contact-form"
                className="inline-block bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/30 active:scale-95 transition-all text-sm"
              >
                Activate Migration Plans
              </Link>
              <p className="text-stone-500 text-xs font-body">Assessment included — no upfront commitment required.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 04 / Maintenance Services ────────────────────────────────────── */}
      <section id="maintenance" className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeader
            eyebrow="04 / Maintenance Services"
            title="Managed Maintenance"
            subtitle="Proactive infrastructure management and expert engineering support to keep your systems operating at peak efficiency."
            learnMoreHref="/maintenance-services"
            learnMoreLabel="Full Maintenance Guide"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div variants={fadeUp} className="bg-[#f6f3f2] rounded-2xl p-7 sm:p-10 lg:p-12 border border-[#e2bebd]/20 hover:bg-white hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300">
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-6">01 / Remote</span>
              <h3 className="font-headline text-3xl text-stone-900 mb-4">Remote Managed Services</h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-8">
                24/7 remote monitoring, management, and maintenance of your cloud infrastructure. Proactive issue resolution, performance tuning, patch management, and continuous optimisation — handled entirely by our certified engineering team.
              </p>
              <ul className="space-y-3">
                {["24/7 Monitoring & Alerting", "Patch & Update Management", "Performance Optimisation", "Incident Response SLA"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-body font-semibold text-[#5c5c5c] uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31c33] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#b31c33] rounded-2xl p-7 sm:p-10 lg:p-12 text-white hover:bg-[#920022] transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-6">02 / On-site</span>
                <h3 className="font-headline text-3xl text-white mb-4">On-site Engineer Services</h3>
                <p className="text-white/80 text-sm font-body leading-relaxed mb-8">
                  Dedicated on-site engineering support for hardware maintenance, complex deployments, and situations requiring a physical presence. Our field engineers are deployed across APAC, Africa, and ANZ regions.
                </p>
              </div>
              <Link
                href="/contact#contact-form"
                className="inline-block bg-white text-[#b31c33] px-8 py-3 rounded-xl font-body font-bold tracking-wide hover:bg-[#ffdad9] active:scale-95 transition-all text-sm w-fit"
              >
                Request On-site Support
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Technical Excellence ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12"
          >
            <motion.h2 variants={fadeUp} className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 leading-tight">
              Clinical Precision in Every Byte.
            </motion.h2>
            <motion.div variants={stagger} className="space-y-8">
              {[
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
                  desc: "Global backbone optimisation ensuring sub-millisecond response times for critical applications and services.",
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
              ].map((f) => (
                <motion.div key={f.title} variants={fadeUp} className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-white flex items-center justify-center rounded-xl border border-[#e2bebd]/30">
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
              <Link
                href="/contact#contact-form"
                className="inline-block bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 transition-all duration-200 active:scale-95"
              >
                Discuss Your Cloud Strategy
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-white rounded-2xl p-7 sm:p-10 lg:p-12 min-h-[400px] flex items-center justify-center border border-[#e2bebd]/30"
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
                    className="bg-[#f6f3f2] rounded-xl px-6 py-5 border border-[#e2bebd]/30 text-center"
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
      <section className="py-20 bg-[#1c1b1b] px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block mb-6">
            Start Today
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Ready to elevate your infrastructure?
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Join the enterprises running on an Illumia cloud. Our team spans time zones and disciplines — someone is always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/contact#contact-form"
              className="bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/30 transition-all duration-200 active:scale-95 text-center"
            >
              Get Started
            </Link>
            <Link
              href="/contact#contact-form"
              className="border border-white/20 text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-white/5 transition-colors text-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
