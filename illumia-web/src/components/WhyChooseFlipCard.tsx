"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  href: string;
}

export default function WhyChooseFlipCard({ title, description, href }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative min-h-[320px] sm:min-h-[240px] [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full min-h-[320px] sm:min-h-[240px] w-full [transform-style:preserve-3d] transition-[transform] duration-700 ease-in-out",
          flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front — image + quote. This is the flip-open trigger. It has no
            interactive children, so it's safe as a single tap/keyboard target
            (unlike wrapping the whole card, which would nest this target
            inside/around the "Get Support" link on the back face). */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => setFlipped(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped(true);
            }
          }}
          role="button"
          tabIndex={flipped ? -1 : 0}
          aria-hidden={flipped}
          aria-label={`${title} — press to flip for details`}
        >
          <Image
            src="/images/heroes/cloud-migration_hero.jpg"
            alt="Illumia Solutions infrastructure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-on-surface/55" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <span className="font-body text-xs tracking-[0.25em] uppercase text-white/70 font-semibold flex items-center gap-2">
              <svg className="w-3.5 h-3.5 shrink-0 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
              <svg className="w-3.5 h-3.5 shrink-0 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
              </svg>
              <span className="md:hidden">Tap to explore</span>
              <span className="hidden md:inline">Hover to explore</span>
            </span>
            <p className="font-headline text-xl text-white italic">
              &ldquo;Where precision meets purpose.&rdquo;
            </p>
          </div>
        </div>

        {/* Back — Continuous Support content. The real link and the explicit
            close button below are the only interactive elements here, so
            nothing overlaps them. Both are un-tabbable while the back face is
            rotated away so no invisible focusable elements linger in the
            front-face tab order. */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white border border-outline-variant/30 p-8 flex flex-col gap-4"
          aria-hidden={!flipped}
        >
          <h3 className="font-headline text-2xl text-stone-900">{title}</h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <Link
              href={href}
              className="font-body font-semibold text-xs inline-flex items-center gap-2 uppercase tracking-widest text-primary/80 hover:text-primary transition-colors duration-200 -m-2 p-2"
              tabIndex={flipped ? 0 : -1}
            >
              Get Support
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              tabIndex={flipped ? 0 : -1}
              aria-label="Close details"
              className="md:hidden font-body text-[10px] uppercase tracking-widest text-stone-500 -m-2 p-2"
            >
              Tap to close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
