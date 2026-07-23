"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

interface Props {
  title: string;
  desc: string;
  bg: string;
  className?: string;
  reverse?: boolean;
  dark?: boolean;
}

export default function AboutWhyCard({
  title,
  desc,
  bg,
  className = "",
  reverse = false,
  dark = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl overflow-hidden flex min-h-[300px] ${
        reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row"
      } ${dark ? "bg-[#1c1b1b]" : "bg-[#f6f3f2]"} ${className}`}
    >
      {/* Image */}
      <div className="relative w-full md:w-[42%] shrink-0 min-h-[220px] md:min-h-0">
        <Image
          src={bg}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 42vw, 100vw"
        />
        <div className={`absolute inset-0 ${dark ? "bg-[#1c1b1b]/30" : "bg-[#1c1b1b]/15"}`} />
      </div>

      {/* Content */}
      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-4">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-10 bg-[#b31c33]"
        />
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className={`font-headline text-2xl leading-snug ${dark ? "text-white" : "text-stone-900"}`}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.38 }}
          className={`font-body text-sm leading-relaxed ${dark ? "text-stone-300" : "text-[#5a4040]"}`}
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
}
