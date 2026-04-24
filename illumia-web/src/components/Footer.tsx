"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const LOGO_URL =
  "https://nextcloud.illumiasolutions.com/s/BoJ6wwwsN5ja8aR/download/Slide4_transparent-removebg-preview.png";

const solutions = [
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "Application Solutions", href: "/application-solutions" },
  { label: "Infrastructure Solutions", href: "/infrastructure-solutions" },
  { label: "Web Meeting Solution", href: "/web-meeting-solution" },
  { label: "PAM as a Service", href: "/pam-as-a-service" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Why Us", href: "/why-us" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Link
        href={href}
        className="group inline-flex items-center gap-2.5 font-body text-[13px] text-stone-400 hover:text-white transition-colors duration-200"
      >
        <span className="w-0 h-px bg-[#b31c33] group-hover:w-4 transition-all duration-200 shrink-0" />
        {children}
      </Link>
    </motion.li>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0d] relative overflow-hidden">
      {/* Red accent gradient strip on top */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#b31c33] to-transparent" />

      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(179, 28, 51, 0.6) 0%, transparent 42%), radial-gradient(circle at 80% 85%, rgba(179, 28, 51, 0.4) 0%, transparent 48%)",
        }}
      />

      {/* CTA band */}
      <div className="relative border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12  pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-7">
          <div className="max-w-xl">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#ffb3b3] font-bold mb-3">
              Ready to Start
            </p>
            <h3 className="font-headline text-3xl md:text-4xl text-white leading-tight">
              Let&apos;s architect your{" "}
              <span className="italic text-[#ffb3b3]">next breakthrough.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#b31c33] hover:bg-[#920022] text-white px-8 py-4 rounded-xl font-body font-semibold text-sm tracking-wide shadow-lg shadow-[#b31c33]/30 transition-all duration-200 active:scale-95 shrink-0"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-14 mb-16">

          {/* Brand column - wider */}
          <div className="flex flex-col gap-7 md:col-span-12 lg:col-span-4">
            <Link href="/" className="flex items-center shrink-0 w-fit">
              <Image
                src={LOGO_URL}
                alt="Illumia Solutions"
                width={180}
                height={54}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-stone-300/80 font-body text-sm leading-relaxed max-w-sm">
              Empowering businesses with innovative and cost-effective IT solutions
              in cybersecurity, cloud computing, and open-source technologies.
            </p>

            {/* Address card */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 max-w-sm">
              <svg className="w-5 h-5 shrink-0 text-[#b31c33] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs font-bold tracking-widest uppercase text-stone-200">
                  Headquarters
                </p>
                <p className="text-stone-400 font-body text-xs leading-relaxed">
                  2nd-FR, FL-C, 98/9, Gopal Lal Tagore Rd,
                  <br />
                  Baranagar, Kolkata — 700036, India
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/company/illumia-solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-[#b31c33] hover:border-[#b31c33] flex items-center justify-center text-stone-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:solutions@illumiasolutions.com"
                aria-label="Email us"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-[#b31c33] hover:border-[#b31c33] flex items-center justify-center text-stone-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Solutions column */}
          <div className="flex flex-col gap-6 md:col-span-4 lg:col-span-3">
            <div>
              <h4 className="font-headline italic text-lg text-white mb-2">Solutions</h4>
              <div className="h-px w-10 bg-[#b31c33]" />
            </div>
            <ul className="space-y-3.5">
              {solutions.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-6 md:col-span-4 lg:col-span-2">
            <div>
              <h4 className="font-headline italic text-lg text-white mb-2">Company</h4>
              <div className="h-px w-10 bg-[#b31c33]" />
            </div>
            <ul className="space-y-3.5">
              {company.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-6 md:col-span-4 lg:col-span-3">
            <div>
              <h4 className="font-headline italic text-lg text-white mb-2">Get in Touch</h4>
              <div className="h-px w-10 bg-[#b31c33]" />
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:solutions@illumiasolutions.com"
                  className="group flex items-start gap-3 text-stone-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 text-[#b31c33] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="font-body text-[13px] leading-relaxed">
                    solutions@illumiasolutions.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <svg className="w-4 h-4 mt-0.5 text-[#b31c33] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-[13px]">24/7 Multi-Timezone Support</span>
                  <span className="font-body text-[11px] text-stone-500">
                    Always on when you need us
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p className="font-body text-xs text-stone-500">
              © {new Date().getFullYear()} Illumia Solutions. All rights reserved.
            </p>
            <ul className="flex gap-6">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-xs text-stone-500 hover:text-stone-200 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-body text-stone-500">
            <span className="h-px w-8 bg-[#b31c33]/40" />
            <span className="tracking-wider uppercase">
              Kolkata, India — in service of enterprise excellence
            </span>
            <span className="h-px w-8 bg-[#b31c33]/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
