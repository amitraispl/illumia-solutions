"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
  /** Apply grayscale + contrast filter to image (portrait/editorial style) */
  imageGrayscale?: boolean;
  /** Tailwind object-position class, e.g. "object-top" */
  imagePosition?: string;
  /** Extra content rendered below the CTAs (e.g. a stats row) */
  children?: ReactNode;
}

export default function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  imageGrayscale = false,
  imagePosition = "object-center",
  children,
}: PageHeroProps) {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      {/* ── Text half ── */}
      <div className="relative z-10 lg:w-[52%] bg-[#fcf9f8] pt-24 pb-12 md:pt-36 md:pb-20 px-6 md:px-12 lg:pl-12 xl:pl-20 lg:pr-12 xl:pr-16 flex items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold mb-6 block"
          >
            {badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-900 leading-[0.93] tracking-tighter mb-5 md:mb-8"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-[#5a4040] font-body leading-relaxed mb-8 md:mb-10 max-w-lg"
          >
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide shadow-xl shadow-[#b31c33]/20 hover:bg-[#920022] active:scale-95 transition-all duration-200"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="border border-[#b31c33]/40 text-[#b31c33] px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#b31c33] hover:text-white hover:border-[#b31c33] transition-all duration-200"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>

          {children && (
            <motion.div variants={fadeUp} className="mt-10">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ── Image half — full-bleed to screen edge ── */}
      <div className="relative h-[55vw] md:h-[42vw] lg:h-auto lg:flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${imagePosition} ${
            imageGrayscale ? "grayscale brightness-90 contrast-110" : ""
          }`}
          priority
        />
        {/* Subtle left-edge blend on desktop */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fcf9f8]/30 to-transparent pointer-events-none hidden lg:block" />
        {/* Bottom gradient on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fcf9f8]/60 to-transparent pointer-events-none lg:hidden" />
      </div>
    </section>
  );
}
