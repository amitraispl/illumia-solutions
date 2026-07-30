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
  /** Render this instead of the <Image> — for illustration/graphic heroes that aren't a photo */
  imageNode?: ReactNode;
  /** Extra content rendered below the CTAs (e.g. a stats row) */
  children?: ReactNode;
  /** Additional classes for the badge span (e.g. to increase font size) */
  badgeClassName?: string;
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
  imageNode,
  children,
  badgeClassName = "",
}: PageHeroProps) {
  return (
    <section className="flex flex-col lg:flex-row min-h-[100dvh] overflow-hidden">
      {/* ── Text half ── */}
      <div className="relative z-10 lg:w-[52%] bg-surface pt-24 pb-12 md:pt-36 md:pb-20 px-6 md:px-12 lg:pl-12 xl:pl-20 lg:pr-12 xl:pr-16 flex items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className={`font-body tracking-[0.25em] uppercase text-primary font-bold mb-6 block ${badgeClassName || "text-[13px] lg:text-[15px]"}`}
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
            className="text-base md:text-xl text-on-surface-variant font-body leading-relaxed mb-8 md:mb-10 max-w-lg"
          >
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href={primaryCta.href}
              className="bg-primary text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide shadow-xl shadow-primary/20 hover:bg-primary-dark active:scale-[0.98] transition-[background-color,box-shadow] duration-200 text-center"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="border border-primary/40 text-primary px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-primary hover:text-white hover:border-primary active:scale-[0.98] transition-[color,background-color,border-color] duration-200 text-center"
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
        {imageNode ? (
          imageNode
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className={`object-cover ${imagePosition} ${
              imageGrayscale ? "grayscale brightness-90 contrast-110" : ""
            }`}
            priority
          />
        )}
        {/* Subtle left-edge blend on desktop */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface/30 to-transparent pointer-events-none hidden lg:block" />
        {/* Bottom gradient on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/60 to-transparent pointer-events-none lg:hidden" />
      </div>
    </section>
  );
}
