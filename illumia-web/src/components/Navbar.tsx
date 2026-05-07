"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav aria-label="Main navigation" className="fixed top-0 w-full z-50 bg-[#fcf9f8]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#fcf9f8]/70 border-b border-[#e2bebd]/20 shadow-sm shadow-stone-900/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={LOGO_URL}
            alt="Illumia Solutions"
            width={160}
            height={48}
            priority
            className="h-12 w-auto object-contain"
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-stone-900 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#e2bebd]/20 px-6 py-4 ${mobileOpen ? "block" : "hidden"}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
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
        ))}
      </div>
    </nav>
  );
}
