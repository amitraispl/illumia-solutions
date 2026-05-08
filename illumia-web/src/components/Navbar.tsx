"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const LOGO_URL =
  "https://nextcloud.illumiasolutions.com/s/BoJ6wwwsN5ja8aR/download/Slide4_transparent-removebg-preview.png";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Cyber Security Services", href: "/cyber-security" },
  { label: "Open Source Solutions", href: "/open-source-solutions" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Close on scroll
  useEffect(() => {
    if (!mobileOpen) return;
    function handleScroll() {
      setMobileOpen(false);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav ref={navRef} aria-label="Main navigation" className="fixed top-0 w-full z-50 bg-[#fcf9f8]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#fcf9f8]/70 border-b border-[#e2bebd]/20 shadow-sm shadow-stone-900/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={LOGO_URL}
            alt="Illumia Solutions"
            width={160}
            height={48}
            priority
            className="h-8 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`font-headline text-sm tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${
                isActive(link.href)
                  ? "text-[#b31c33] font-bold border-b border-[#b31c33]/40"
                  : "text-stone-600 hover:text-[#b31c33]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Animated hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] p-2.5 text-stone-900"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
        >
          <span
            className="block h-0.5 w-6 bg-stone-900 rounded-full origin-center transition-all duration-300 ease-in-out"
            style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : undefined }}
          />
          <span
            className="block h-0.5 w-6 bg-stone-900 rounded-full transition-all duration-300 ease-in-out"
            style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? "scaleX(0)" : undefined }}
          />
          <span
            className="block h-0.5 w-6 bg-stone-900 rounded-full origin-center transition-all duration-300 ease-in-out"
            style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : undefined }}
          />
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="region"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#e2bebd]/20 px-6 py-4"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2, ease: EASE }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block py-3 font-headline text-sm tracking-widest uppercase transition-colors border-b border-[#e2bebd]/20 ${
                    isActive(link.href)
                      ? "text-[#b31c33] font-bold"
                      : "text-stone-700 hover:text-[#b31c33]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
