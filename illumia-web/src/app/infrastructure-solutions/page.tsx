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

export default function InfrastructureSolutionsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Infrastructure Solutions"
        title={
          <>
            Infrastructure{" "}
            <span className="italic font-normal text-[#b31c33]">Solutions.</span>
          </>
        }
        description="At Illumia Solutions, we provide comprehensive infrastructure solutions designed to enhance your IT capabilities while reducing costs and complexity."
        primaryCta={{ label: "Explore Solutions", href: "#solutions" }}
        secondaryCta={{ label: "Contact Us", href: "/contact#contact-form" }}
        imageSrc="https://nextcloud.illumiasolutions.com/public.php/dav/files/sNr6oH4jcefKrQK"
        imageAlt="Infrastructure Solutions — Illumia Solutions"
      />

      {/* ─── 01 · On-Premise Private Cloud ────────────────────────────────── */}
      <section id="solutions" className="py-24 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6"
            >
              <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                01 / On-Premise Private Cloud
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900 leading-tight">
                On-Premise Private Cloud Solutions with Proxmox
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-[#5a4040] font-body text-sm leading-relaxed">
                  Our on-premise private cloud solutions are built on hyperconverged infrastructure, offering seamless scalability, high performance, and simplified management. This solution integrates compute, storage, and networking into a single system, providing the efficiency and flexibility needed for modern business operations.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Highly scalable — host an unlimited number of Virtual Machines (VMs) and containers",
                    "Fault-tolerant, maintaining an uptime of 99.9% to keep business operations continuously running",
                    "Integrates compute, storage, and networking into a single cohesive system",
                    "Powered by Proxmox — open-source, no licensing fees, full enterprise capability",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-body text-[#5a4040] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b31c33] mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/on-premise-private-cloud"
                  className="inline-flex items-center gap-3 bg-[#b31c33] text-white px-7 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 active:scale-95 transition-all duration-200"
                >
                  Read More <Arrow />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/60"
            >
              <Image
                src="https://nextcloud.illumiasolutions.com/public.php/dav/files/WG6jaBQzC8KXMTw"
                alt="On-premise private cloud infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-body text-xs tracking-[0.3em] uppercase text-[#ffb3b3] font-bold block mb-1">Hyperconverged Infrastructure</span>
                <p className="font-headline text-xl text-white italic">Compute · Storage · Network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 02 · Storage Solutions ───────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-300/40 order-2 lg:order-1"
            >
              <Image
                src="https://nextcloud.illumiasolutions.com/public.php/dav/files/RFRjxkgPS2AsG9t"
                alt="Storage solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-body text-xs tracking-[0.3em] uppercase text-[#ffb3b3] font-bold block mb-1">Enterprise Storage</span>
                <p className="font-headline text-xl text-white italic">Block · Object · Cold</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6 order-1 lg:order-2"
            >
              <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                02 / Storage Solutions
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900 leading-tight">
                Storage Solutions
              </motion.h2>

              <motion.div variants={stagger} className="space-y-6">
                {[
                  {
                    label: "High-Performance Block Storage",
                    text: "Designed for mission-critical applications requiring low latency and high throughput, our block storage solutions ensure your data is always accessible and secure.",
                  },
                  {
                    label: "Object Storage",
                    text: "Ideal for unstructured data, our object storage solutions offer scalable, durable, and cost-effective storage options, perfect for big data and cloud-native applications. Object storage can hold an unlimited number of objects and is easily scalable to meet the growing data needs of your business.",
                  },
                  {
                    label: "Cold Storage for Archival",
                    text: "For long-term data retention, our cold storage solutions provide cost-efficient archival storage that ensures data integrity and availability over extended periods.",
                  },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeUp} className="border-b border-[#e2bebd]/40 pb-5">
                    <h4 className="font-body font-bold text-xs uppercase tracking-[0.2em] text-[#b31c33] mb-2">{item.label}</h4>
                    <p className="font-body text-sm text-[#5a4040] leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  href="/object-storage"
                  className="inline-flex items-center gap-3 bg-[#b31c33] text-white px-7 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 active:scale-95 transition-all duration-200"
                >
                  Read More <Arrow />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 03 · Software-Defined Network ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#1c1b1b] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(179,28,51,0.07),transparent)]" />
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6"
            >
              <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold">
                03 / Software-Defined Network
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-white leading-tight">
                Software-Defined Network (SDN)
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-stone-400 font-body text-sm leading-relaxed">
                  Our SDN and SD-WAN solutions eliminate the need for traditional central controllers by implementing advanced networking technologies. This innovative approach enhances network resilience, reduces latency, and simplifies network management, ensuring your infrastructure is always connected and efficient.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Eliminates need for traditional central controllers",
                    "Enhances network resilience and reduces latency",
                    "Simplifies network management across distributed environments",
                    "Ensures infrastructure is always connected and efficient",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-body text-stone-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b31c33] mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/software-defined-network"
                  className="inline-flex items-center gap-3 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide transition-all duration-200 active:scale-95"
                >
                  Read More <Arrow />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Network Resilience", value: "Enhanced" },
                { label: "Latency", value: "Reduced" },
                { label: "Central Controllers", value: "Eliminated" },
                { label: "Management", value: "Simplified" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                  <p className="font-headline text-2xl text-white mb-2">{stat.value}</p>
                  <p className="font-body text-xs uppercase tracking-widest text-[#ffb3b3] font-bold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f6f3f2] px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-6">
            Start Today
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6">
            Ready to build your infrastructure?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Our engineering team will design, deploy, and manage the infrastructure your business needs to scale with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/30 active:scale-95 transition-all"
            >
              Start a Conversation
            </Link>
            <Link
              href="/on-premise-private-cloud"
              className="inline-block border border-[#b31c33]/30 text-[#b31c33] px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9]/20 transition-colors"
            >
              Private Cloud Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
