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
    >
      <div
        className={cn(
          "relative min-h-[240px] w-full [transform-style:preserve-3d] transition-[transform] duration-700 ease-in-out",
          flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front — image + quote */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop"
            alt="Illumia Solutions infrastructure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1c1b1b]/55" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/35 font-semibold">
              Hover to reveal
            </span>
            <p className="font-headline text-xl text-white italic">
              &ldquo;Where precision meets purpose.&rdquo;
            </p>
          </div>
        </div>

        {/* Back — Continuous Support content */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white border border-[#e2bebd]/30 p-8 flex flex-col gap-4">
          <h3 className="font-headline text-2xl text-stone-900">{title}</h3>
          <p className="font-body text-sm text-[#5a4040] leading-relaxed flex-1">{description}</p>
          <Link
            href={href}
            className="font-body font-semibold text-xs inline-flex items-center gap-2 uppercase tracking-widest text-[#b31c33]/60 hover:text-[#b31c33] transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
