"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LOGO_URL =
  "/images/logos/illumia-logo.png";

const solutions = [
  { label: "Cloud Services", href: "/cloud-services/" },
  { label: "Cyber Security", href: "/cyber-security/" },
  { label: "Open Source Solutions", href: "/open-source-solutions/" },
];

const company = [
  { label: "About Us", href: "/about/" },
  { label: "Contact Us", href: "/contact/#contact-form" },
  { label: "FAQs", href: "/faqs/" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms/" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.15, ease: "easeOut" }}>
      <Link
        href={href}
        className="group flex items-center gap-0 py-2 -my-2 font-body text-[12.5px] text-stone-400 hover:text-white transition-colors duration-200"
      >
        <span className="w-0 h-px bg-primary group-hover:w-5 mr-0 group-hover:mr-2.5 transition-[width,margin] duration-200 ease-out shrink-0" />
        {children}
      </Link>
    </motion.li>
  );
}

function ColHeading({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col gap-2.5 pb-5 border-b border-white/[0.20]">
      <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary font-bold tabular-nums">
        {num}
      </span>
      <h4 className="font-headline italic text-[17px] text-white leading-none">{label}</h4>
    </div>
  );
}

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ease = "power2.out";

      gsap.from(".footer-strip", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ".footer-strip", start: "top 98%" },
      });

      gsap.from(".footer-brand", {
        opacity: 0, x: -24, duration: 0.9, ease,
        scrollTrigger: { trigger: ".footer-brand", start: "top 88%" },
      });

      gsap.from(".footer-col", {
        opacity: 0, y: 28, duration: 0.75, ease,
        stagger: 0.1,
        scrollTrigger: { trigger: ".footer-col", start: "top 88%" },
      });

      gsap.from(".footer-bottom", {
        opacity: 0, y: 10, duration: 0.6, ease, delay: 0.2,
        scrollTrigger: { trigger: ".footer-bottom", start: "top 99%" },
      });
    },
    { scope: containerRef }
  );

  return (
    <footer ref={containerRef} className="w-full bg-surface-inverse relative overflow-hidden">

      {/* Layered ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 300% 50% at 0% 0%, rgba(179,28,51,0.38) 0%, transparent 60%), radial-gradient(ellipse 110% 65% at 100% 100%, rgba(179,28,51,0.32) 0%, transparent 60%), radial-gradient(ellipse 70% 40% at 50% 50%, rgba(179,28,51,0.08) 0%, transparent 100%)",
        }}
      />

      {/* Subtle noise mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Top accent strip */}
      <div className="footer-strip h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* ─── Main content ──────────────────────────────────────────────────── */}
      <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 pt-16 pb-0">

        {/* Primary grid: brand | nav cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14">

          {/* Brand column */}
          <div className="footer-brand lg:col-span-4 flex flex-col gap-7 lg:pr-8 lg:border-r lg:border-white/[0.20]">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center shrink-0 w-fit group">
                <Image
                  src={LOGO_URL}
                  alt="Illumia Solutions"
                  width={180}
                  height={54}
                  className="h-[40px] md:h-[48px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
              <span className="font-body text-[9px] tracking-[0.32em] uppercase text-primary font-bold">
                Illuminating the Path to Success
              </span>
            </div>

            <p className="text-stone-400 font-body text-[12.5px] leading-[1.65] max-w-[300px]">
              Empowering businesses with innovative and cost-effective IT solutions
              in cybersecurity, cloud computing, and open-source technologies.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              <motion.a
                href="https://www.linkedin.com/company/illumia-solutions-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="w-11 h-11 rounded-[10px] bg-white/[0.08] border border-white/[0.18] hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center text-stone-300 hover:text-white transition-[background-color,border-color,box-shadow,color] duration-200"
              >
                <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:sales@illumiasolutions.com"
                aria-label="Email us"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="w-11 h-11 rounded-[10px] bg-white/[0.08] border border-white/[0.18] hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center text-stone-300 hover:text-white transition-[background-color,border-color,box-shadow,color] duration-200"
              >
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 lg:pl-8 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-12">

            {/* Solutions */}
            <div className="footer-col flex flex-col gap-5">
              <ColHeading num="01" label="Solutions" />
              <ul className="space-y-[14px] pt-1">
                {solutions.map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col flex flex-col gap-5">
              <ColHeading num="02" label="Company" />
              <ul className="space-y-[14px] pt-1">
                {company.map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="footer-col flex flex-col gap-5">
              <ColHeading num="03" label="Get in Touch" />
              <ul className="space-y-4 pt-1">
                <li>
                  <a
                    href="mailto:sales@illumiasolutions.com"
                    className="group flex items-start gap-3 text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.18] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-[background-color,border-color] duration-200">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-body text-[12px] text-stone-300">Sales Enquiry</span>
                      <span className="font-body text-[12px] leading-relaxed break-all">
                        sales@illumiasolutions.com
                      </span>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-stone-400">
                  <span className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.18] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-[12px] text-stone-300">Talk to Sales</span>
                    <a
                      href="tel:+919332045178"
                      className="group/ph inline-flex items-center gap-0 font-body text-[12px] text-stone-400 hover:text-white transition-colors duration-200 mt-1"
                    >
                      <span className="w-0 h-px bg-primary group-hover/ph:w-3 mr-0 group-hover/ph:mr-1.5 transition-[width,margin] duration-200 ease-out shrink-0" />
                      (+91) 9332045178
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-stone-400">
                  <span className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.18] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-[12px] text-stone-300">Headquarters</span>
                    <span className="font-body text-[12px] text-stone-400 leading-relaxed">
                      2nd-FR, FL-C, 98/9, Gopal Lal Tagore Rd,<br />
                      Baranagar, Kolkata — 700036, India
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ─── Bottom Bar ───────────────────────────────────────────────────── */}
        <div className="footer-bottom mt-14">
          {/* gradient separator */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.20] to-transparent mb-6" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-8">
            <p className="font-body text-[11px] text-stone-400">
              © {new Date().getFullYear()} Illumia Solutions Pvt. Ltd. All rights reserved.
            </p>
            <ul className="flex justify-between md:justify-end md:gap-5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-[11px] text-stone-400 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline decoration-primary/40"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
