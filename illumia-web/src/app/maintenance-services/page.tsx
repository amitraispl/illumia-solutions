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

const Arrow = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const remoteFeatures = [
  {
    title: "Proactive 24/7 Monitoring",
    desc: "Round-the-clock surveillance of your cloud systems — identifying and resolving issues before they escalate into significant problems.",
  },
  {
    title: "Performance Optimisation",
    desc: "Continuous analysis and tuning of cloud resources to deliver best-in-class performance, efficiency, and cost-effectiveness.",
  },
  {
    title: "Security & Compliance",
    desc: "Robust security protocols protecting your cloud infrastructure from threats, with compliance management across GDPR, HIPAA, ISO 27001, and PCI-DSS.",
  },
  {
    title: "Automated Backup & DR",
    desc: "Scheduled automated backups and comprehensive disaster recovery planning to minimise downtime and data loss.",
  },
  {
    title: "Cost Management",
    desc: "Resource allocation optimisation and budget tracking to eliminate cloud waste and prevent unexpected expenditure.",
  },
  {
    title: "Incident Management",
    desc: "Structured incident tracking, management, and resolution with defined SLAs ensuring minimal disruption to your operations.",
  },
];

const onsiteFeatures = [
  {
    title: "Expert On-site Engineers",
    desc: "Highly skilled field engineers deployed across APAC, Africa, and ANZ — providing hands-on support for complex technical issues.",
  },
  {
    title: "Routine Maintenance",
    desc: "Hardware inspections, software updates, and system optimisations performed on a regular schedule to prevent issues before they occur.",
  },
  {
    title: "Emergency Response",
    desc: "Rapid on-site response to critical issues requiring immediate physical attention — minimising downtime and operational disruption.",
  },
  {
    title: "Project Implementation",
    desc: "Deployment and implementation of new IT projects, system upgrades, and migrations — on time and within budget.",
  },
  {
    title: "Knowledge Transfer",
    desc: "Structured training sessions and knowledge transfer to empower your internal IT team to manage systems effectively.",
  },
  {
    title: "Resource Optimisation",
    desc: "Continuous performance review and resource management — reducing waste and improving infrastructure utilisation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    desc: "Comprehensive analysis of your IT infrastructure to identify potential issues, gaps, and areas for improvement.",
  },
  {
    step: "02",
    title: "Tailored Plan",
    desc: "Customised maintenance strategy addressing your specific environment, risk profile, compliance requirements, and SLA targets.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Deployment of monitoring, tooling, and engineering resources with zero disruption to live operations.",
  },
  {
    step: "04",
    title: "Continuous Optimisation",
    desc: "Ongoing refinement of processes, performance tuning, and proactive issue resolution — month after month.",
  },
];

export default function MaintenanceServicesPage() {
  return (
    <>
      <PageHero
        badge="04 / Maintenance Services"
        title={
          <>
            Managed{" "}
            <span className="italic font-normal text-[#b31c33]">Maintenance.</span>
          </>
        }
        description="Proactive infrastructure management and expert engineering support — remote and on-site — to keep your IT systems running at peak efficiency, security, and reliability."
        primaryCta={{ label: "Get a Maintenance Plan", href: "/contact#contact-form" }}
        secondaryCta={{ label: "Cloud Services", href: "/cloud-services#maintenance" }}
        imageSrc="https://nextcloud.illumiasolutions.com/public.php/dav/files/7CtcpxZJFnQbEZi"
        imageAlt="Infrastructure monitoring dashboard"
      />

      {/* ─── Process ──────────────────────────────────────────────────────── */}
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
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900">
              Assessment first. Always.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5c5c5c] font-body text-sm mt-4 max-w-lg leading-relaxed">
              Every engagement begins with a thorough assessment — no cookie-cutter plans, no wasted spend.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className={`rounded-2xl p-10 flex flex-col gap-4 ${
                  i === 0 ? "bg-[#b31c33]" : "bg-white border border-[#e2bebd]/30 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300"
                }`}
              >
                <span className={`font-headline text-4xl italic ${i === 0 ? "text-[#ffdad9]" : "text-[#b31c33]"}`}>
                  {step.step}.
                </span>
                <h3 className={`font-headline text-xl ${i === 0 ? "text-white" : "text-stone-900"}`}>
                  {step.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-[#5a4040]"}`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Remote Managed Services ──────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 space-y-6"
            >
              <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block">
                01 / Remote
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900 leading-tight">
                Remote Managed Services for Cloud
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#5a4040] font-body text-sm leading-relaxed">
                Our remote managed services provide continuous monitoring, management, and maintenance of your cloud infrastructure — 24/7, 365 days a year. Our certified engineering team handles everything so your team can focus on the business.
              </motion.p>
              <motion.div variants={fadeUp} className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="https://nextcloud.illumiasolutions.com/public.php/dav/files/aNxHyHwJoLJ4G9e"
                  alt="Remote monitoring operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/40 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {remoteFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="bg-[#f6f3f2] rounded-2xl p-8 border border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300"
                >
                  <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-headline text-lg text-stone-900 mb-2">{f.title}</h4>
                  <p className="font-body text-sm text-[#5a4040] leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── On-site Services ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#1c1b1b]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1"
            >
              {onsiteFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#b31c33]/30 transition-all duration-300"
                >
                  <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-headline text-lg text-white mb-2">{f.title}</h4>
                  <p className="font-body text-sm text-stone-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 space-y-6 order-1 lg:order-2"
            >
              <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block">
                02 / On-site
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-white leading-tight">
                On-site Engineer Services
              </motion.h2>
              <motion.p variants={fadeUp} className="text-stone-400 font-body text-sm leading-relaxed">
                When a physical presence is required, our field engineers are ready. Deployed across APAC, Africa, and ANZ — our team handles hardware maintenance, complex deployments, emergency responses, and staff training.
              </motion.p>
              <motion.div variants={fadeUp} className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://nextcloud.illumiasolutions.com/public.php/dav/files/3y5Xx2yCXRnm9SW"
                  alt="On-site engineer support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1c1b1b]/50" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold">
                    APAC · Africa · ANZ
                  </span>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-3 bg-white text-[#b31c33] px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9] active:scale-95 transition-all duration-200 group"
                >
                  Request On-site Support
                  <Arrow />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-white rounded-2xl p-12 md:p-16 grid lg:grid-cols-2 gap-12 items-center border border-[#e2bebd]/30">
            <div>
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
                Always On
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
                Your infrastructure,{" "}
                <span className="italic text-[#b31c33]">always performing.</span>
              </h2>
              <p className="text-[#5a4040] font-body text-sm leading-relaxed">
                Partner with Illumia Solutions to ensure your IT systems are always performing at their best — supporting your business goals and driving success with 24/7 expert management.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-3 bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-xl shadow-[#b31c33]/20 active:scale-95 transition-all duration-200 group"
              >
                Start a Maintenance Plan
                <Arrow />
              </Link>
              <Link
                href="/cloud-services#maintenance"
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

      <ServicesEcosystem />
    </>
  );
}
