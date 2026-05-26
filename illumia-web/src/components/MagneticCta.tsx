"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";

interface MagneticCtaProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function MagneticCta({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticCtaProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 16, mass: 0.07 });
  const y = useSpring(rawY, { stiffness: 200, damping: 16, mass: 0.07 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set((e.clientX - (left + width / 2)) * 0.36);
    rawY.set((e.clientY - (top + height / 2)) * 0.36);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative inline-block"
    >
      <motion.div style={{ x, y }}>
        <Link
          href={href}
          className={`inline-block px-8 py-4 rounded-xl font-body font-semibold tracking-wide text-center select-none ${
            variant === "primary"
              ? "bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary-dark active:scale-[0.98] transition-[background-color,box-shadow] duration-200"
              : "border border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary active:scale-[0.98] transition-[color,background-color,border-color] duration-200"
          } ${className}`}
        >
          {children}
        </Link>
      </motion.div>
    </div>
  );
}
