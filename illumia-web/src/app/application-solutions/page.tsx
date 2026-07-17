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

const collaborationCards = [
  {
    num: "01",
    title: "Mail Services",
    desc: "Reliable and secure email solutions that facilitate seamless communication within your organization. Our mail services include a mobile application for on-the-go access and multi-factor authentication (MFA) to enhance security.",
    href: "/email-as-a-service",
    image: "/images/content/application-solutions-mail.jpg",
    imageAlt: "Secure enterprise mail services",
  },
  {
    num: "02",
    title: "Cloud Storage",
    desc: "Scalable cloud storage solutions that provide secure and easy access to your data from anywhere, anytime.",
    href: "/drive-as-a-service",
    image: "/images/content/cloud.jpg",
    imageAlt: "Cloud storage infrastructure",
  },
  {
    num: "03",
    title: "Web-Meeting Solutions",
    desc: "High-quality video conferencing tools that enable effective remote communication and collaboration.",
    href: "/web-meeting-solution",
    image: "/images/case-studies/case-study-nonprofit_sidebar-section.jpg",
    imageAlt: "Video meeting collaboration",
  },
  {
    num: "04",
    title: "Collaborative Editing",
    desc: "Real-time collaborative editing tools that enhance teamwork and productivity by allowing multiple users to work on documents simultaneously.",
    href: "/collaborative-editing",
    image: "/images/heroes/homepage-about_team-at-work.jpg",
    imageAlt: "Team collaborative editing",
  },
];

export default function ApplicationSolutionsPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Application Solutions"
        title={
          <>
            Application{" "}
            <span className="italic font-normal text-[#b31c33]">Solutions.</span>
          </>
        }
        description="Our application solutions are designed to enhance collaboration, streamline project management, and ensure robust security. We leverage the best open-source technologies to deliver innovative solutions tailored to your business needs."
        primaryCta={{ label: "Explore Solutions", href: "#collaboration" }}
        secondaryCta={{ label: "Contact Us", href: "/contact#contact-form" }}
        imageSrc="/images/application-solutions/cicdp.png"
        imageAlt="Application solutions — Illumia Solutions"
      />

      {/* ─── Collaboration Solutions ───────────────────────────────────────── */}
      <section id="collaboration" className="py-20 px-6 md:px-12 bg-[#f6f3f2] scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              01 / Collaboration Solutions
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900">
              Collaboration Solutions
            </motion.h2>
          </motion.div>

          {/* 2×2 equal bento grid — all cards same dark-overlay image style */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {collaborationCards.map((card) => (
              <motion.div key={card.num} variants={fadeUp} className="h-full">
                <Link
                  href={card.href}
                  className="group relative block rounded-2xl overflow-hidden min-h-[340px] h-full"
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1c1b1b]/60 group-hover:bg-[#1c1b1b]/50 transition-colors" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-between">
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold">
                      {card.num}
                    </span>
                    <div>
                      <h3 className="font-headline text-3xl text-white mb-3">{card.title}</h3>
                      <p className="text-white/70 text-sm font-body leading-relaxed mb-6 max-w-md">
                        {card.desc}
                      </p>
                      <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                        Read More <Arrow />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Project Management Solutions ─────────────────────────────────── */}
      <section id="project-management" className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.span variants={fadeUp} className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              02 / Project Management
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl text-stone-900">
              Project Management Solutions
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4"
          >
            {/* Wide image card */}
            <motion.div variants={fadeUp} className="lg:col-span-8 h-full">
              <div className="relative rounded-2xl overflow-hidden min-h-[360px] h-full">
                <Image
                  src="/images/content/application-solutions-project-mgmt.jpg"
                  alt="Project management board"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1b]/60 via-[#1c1b1b]/30 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-4">01</span>
                  <h3 className="font-headline text-4xl text-white mb-3">Project Management</h3>
                  <p className="text-white/70 text-sm font-body leading-relaxed max-w-lg">
                    Comprehensive features for planning, tracking, and executing projects. These solutions ensure efficient resource allocation, clear communication, and timely delivery of project milestones.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content + CTA card */}
            <motion.div variants={fadeUp} className="lg:col-span-4 h-full">
              <div className="bg-[#f6f3f2] rounded-2xl p-10 border border-[#e2bebd]/20 h-full flex flex-col justify-between min-h-[360px]">
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-6">
                    Open-Source Powered
                  </p>
                  <p className="text-[#5a4040] font-body text-sm leading-relaxed mb-6">
                    Our project management tools provide comprehensive features for planning, tracking, and executing projects — ensuring efficient resource allocation, clear communication, and timely delivery of project milestones.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Agile & Kanban Boards", "Resource Planning", "Milestone Tracking", "Team Collaboration", "Reporting & Analytics"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-xs font-body font-semibold text-[#5c5c5c] uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b31c33] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/project-management-solutions"
                  className="group inline-flex items-center gap-2 bg-[#b31c33] text-white px-6 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 active:scale-95 transition-all duration-200"
                >
                  Read More
                  <Arrow />
                </Link>
              </div>
            </motion.div>
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
            Ready to modernise your applications?
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Our team of open-source experts will help you build, migrate, and optimise your application stack for the modern enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/30 active:scale-95 transition-all"
            >
              Start a Conversation
            </Link>
            <Link
              href="/open-source-solutions"
              className="inline-block border border-white/20 text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-white/5 transition-colors"
            >
              Open Source Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
