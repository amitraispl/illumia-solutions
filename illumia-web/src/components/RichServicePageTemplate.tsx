"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import PageHero from "@/components/PageHero";
// import ServicesEcosystem from "@/components/ServicesEcosystem";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export interface FeatureItem {
  label: string;
  text: string;
}

export interface RichFeature {
  title: string;
  items: FeatureItem[];
}

export interface RichServicePageTemplateProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  sectionTitle: string;
  features: RichFeature[];
  closingText?: string;
  ctaText?: string;
  darkHero?: boolean;
  heroImage?: string;
  /** Set true when heroImage is portrait-oriented (taller than wide) so the mobile/tablet hero box doesn't crop most of it away */
  heroPortrait?: boolean;
  /** Render this instead of the hero photo — for illustration/graphic heroes */
  heroImageNode?: ReactNode;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

export default function RichServicePageTemplate({
  badge,
  title,
  titleHighlight,
  description,
  sectionTitle,
  features,
  closingText,
  ctaText = "Get Started",
  darkHero,
  heroImage = "/images/heroes/cloud-migration_hero.jpg",
  heroPortrait = false,
  heroImageNode,
  secondaryImage,
  secondaryImageAlt,
}: RichServicePageTemplateProps) {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge={badge}
        title={
          titleHighlight ? (
            <>
              {title}{" "}
              <span className="italic font-normal text-[#b31c33]">
                {titleHighlight}
              </span>
            </>
          ) : (
            title
          )
        }
        description={description}
        primaryCta={{ label: ctaText, href: "/contact#contact-form" }}
        secondaryCta={{ label: "All Services", href: "/" }}
        imageSrc={heroImage}
        imageNode={heroImageNode}
        imageAlt={`${title} — Illumia Solutions`}
        portraitImage={heroPortrait}
      />

      {/* ─── Features ─────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-24 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">

          {/* Section heading */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-10 md:mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4"
            >
              {badge}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 max-w-3xl"
            >
              {sectionTitle}
            </motion.h2>
          </motion.div>

          {/* Feature cards grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2bebd]/20"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="bg-white hover:bg-[#faf8f7] transition-colors duration-200 p-5 md:p-8 flex flex-col gap-4 md:gap-5 border border-[#e2bebd]/30"
              >
                {/* Number + Title */}
                <div className="flex items-start gap-4">
                  <span className="font-headline italic text-[#b31c33] text-2xl leading-none shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <h3 className="font-headline text-xl text-stone-900 leading-snug">
                    {feature.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#e2bebd]/50 w-full" />

                {/* Sub-items */}
                <div className="flex flex-col gap-4">
                  {feature.items.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <span className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-[#b31c33]">
                        {item.label}
                      </span>
                      <p className="font-body text-sm text-[#5a4040] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Secondary image ──────────────────────────────────────────────── */}
      {secondaryImage ? (
        <section className="bg-white px-6 md:px-12 pb-14 md:pb-24">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[420px] shadow-xl shadow-stone-200/60"
            >
              <Image
                src={secondaryImage}
                alt={secondaryImageAlt || `${title} — Illumia Solutions`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* ─── Closing + CTA ────────────────────────────────────────────────── */}
     
<section className="relative bg-[#1a1919] px-6 md:px-12 py-14 md:py-24 overflow-hidden min-h-[280px] md:min-h-[320px] flex items-center">

  {/* Ambient glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(179,28,51,0.07),transparent)]" />

  <div className="relative w-full max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">

    {/* Left — closing text */}
    {closingText ? (
      <div className="flex flex-col gap-5">
        <span className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-bold before:content-[''] before:inline-block before:w-[18px] before:h-[2px] before:bg-[#b31c33] before:rounded-full">
          {badge}
        </span>
        <p className="font-body text-[15px] text-white/55 leading-[1.75]">
          {closingText}
        </p>
        <div className="w-10 h-[3px] bg-gradient-to-r from-[#b31c33] to-transparent rounded-full" />
        <div className="flex items-center gap-4 flex-wrap">
          {["No lock-in", "Dedicated team", "Fast onboarding"].flatMap((item, i) => [
            i > 0 ? <span key={`dot-${i}`} className="w-1 h-1 rounded-full bg-white/15" /> : null,
            <div key={item} className="flex items-center gap-1.5">
              <span className="flex items-center justify-center w-[14px] h-[14px] rounded-full bg-[#b31c33]/20 flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2.5" stroke="#b31c33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-body text-xs text-white/35">{item}</span>
            </div>,
          ]).filter(Boolean)}
        </div>
      </div>
    ) : (
      <div />
    )}

    {/* Right — CTA */}
    <div className="relative flex flex-col gap-8 lg:pl-16
      before:hidden lg:before:block
      before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px
      before:bg-white/[0.08]
      after:hidden lg:after:block
      after:absolute after:left-0 after:top-[20%] after:h-[60%] after:w-px
      after:bg-gradient-to-b after:from-transparent after:via-[#b31c33]/50 after:to-transparent">

      <div className="lg:ml-auto text-left lg:text-right lg:pr-16">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#ffb3b3]/75 font-bold block mb-3">
          Ready to get started?
        </span>
        <h2 className="font-headline text-3xl md:text-4xl text-white leading-[1.2] tracking-tight">
          Contact us to{" "}
          <span className="text-white/45 font-normal">learn more.</span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:ml-auto lg:pr-16">
        <Link
          href="/contact#contact-form"
          className="inline-flex items-center justify-center gap-3 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95"
        >
          {ctaText}
          <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white/15 flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 border border-white/12 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 text-white/60 hover:text-white/90 px-7 py-3.5 rounded-[10px] font-body text-sm font-medium transition-all duration-200"
        >
          Explore Services
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
