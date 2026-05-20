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
      className="relative min-h-[240px] [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={cn(
          "relative h-full min-h-[240px] w-full [transform-style:preserve-3d] transition-[transform] duration-700 ease-in-out",
          flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front — image + quote */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <Image
            src="https://nextcloud.illumiasolutions.com/public.php/dav/files/yPMfpZFbJ9BX6Qo"
            alt="Illumia Solutions infrastructure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1c1b1b]/55" />
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

        {/* Back — Continuous Support content */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white border border-[#e2bebd]/30 p-8 flex flex-col gap-4">
          <h3 className="font-headline text-xl sm:text-2xl text-stone-900">{title}</h3>
          <p className="font-body text-sm text-[#5a4040] leading-relaxed flex-1">{description}</p>
          <div className="flex items-center justify-between">
            <Link
              href={href}
              className="font-body font-semibold text-xs inline-flex items-center gap-2 uppercase tracking-widest text-[#b31c33]/60 hover:text-[#b31c33] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              Get Support
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="md:hidden font-body text-[10px] uppercase tracking-widest text-stone-300">
              Tap to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
