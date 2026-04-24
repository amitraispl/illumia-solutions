"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Props {
  number: string;
  title: string;
  desc: string;
  bg: string;
  className?: string;
}

export default function AboutFlipCard({ number, title, desc, bg, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const flippedRef = useRef(false);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const flip = contextSafe((toY: number) => {
    gsap.to(innerRef.current, {
      rotateY: toY,
      duration: 0.6,
      ease: "power2.inOut",
    });
  });

  const onEnter = contextSafe(() => flip(180));
  const onLeave  = contextSafe(() => flip(0));

  const onTap = contextSafe(() => {
    flippedRef.current = !flippedRef.current;
    flip(flippedRef.current ? 180 : 0);
  });

  return (
    <div
      ref={containerRef}
      className={`relative [perspective:1000px] cursor-pointer select-none ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onTap}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{ willChange: "transform" }}
      >
        {/* ── Front — image + number + title ───────────────────────────── */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden min-h-[inherit]">
          <Image
            src={bg}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/95 via-[#1c1b1b]/40 to-transparent" />
          <div className="absolute inset-0 p-7 flex flex-col justify-between">
            <span className="font-headline text-6xl italic text-white/15 leading-none">
              {number}.
            </span>
            <div className="space-y-2">
              <h3 className="font-headline text-2xl text-white leading-snug">{title}</h3>
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/40 block">
                Hover to read
              </span>
            </div>
          </div>
        </div>

        {/* ── Back — written content ────────────────────────────────────── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-[#f6f3f2] border border-[#e2bebd]/40 p-7 flex flex-col"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Decorative watermark — absolute so it takes no vertical space */}
          <span className="pointer-events-none select-none absolute top-3 right-4 font-headline text-8xl italic text-[#b31c33]/8 leading-none">
            {number}.
          </span>
          <div className="space-y-3 flex flex-col h-full">
            <div className="h-px w-10 bg-[#b31c33] shrink-0" />
            <h3 className="font-headline text-xl text-stone-900 leading-snug shrink-0">{title}</h3>
            <p className="font-body text-sm text-[#5a4040] leading-relaxed overflow-hidden">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
