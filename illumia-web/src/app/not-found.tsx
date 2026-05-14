import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const quickLinks = [
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "Open Source Solutions", href: "/open-source-solutions" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact#contact-form" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen pt-40 pb-16 bg-[#fcf9f8] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#b31c33 1px, transparent 1px), linear-gradient(to right, #b31c33 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Red radial glow — top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(179,28,51,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* 404 display number */}
        <div className="relative mb-8 select-none">
          <span
            className="font-headline text-[160px] md:text-[200px] leading-none font-bold text-[#b31c33]/[0.08] block"
            aria-hidden
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#b31c33]/40" />
              <span className="font-body text-xs tracking-[0.35em] uppercase text-[#b31c33] font-bold">
                Page Not Found
              </span>
              <span className="h-px w-12 bg-[#b31c33]/40" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-headline text-4xl md:text-5xl text-stone-900 leading-tight tracking-tight mb-5">
          This path leads{" "}
          <span className="italic text-[#b31c33]">nowhere.</span>
        </h1>

        <p className="font-body text-[#5a4040] text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for has moved, been removed, or never
          existed. Let&apos;s get you back on track.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Link
            href="/"
            className="bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide shadow-xl shadow-[#b31c33]/20 hover:bg-[#920022] active:scale-95 transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact#contact-form"
            className="border border-[#b31c33]/30 text-[#b31c33] px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9]/20 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-[#e2bebd]/40 pt-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#b31c33] font-bold mb-6">
            Or go directly to
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm font-semibold text-stone-600 hover:text-[#b31c33] border border-[#e2bebd]/60 hover:border-[#b31c33]/30 rounded-lg px-4 py-2 transition-all duration-200 hover:bg-[#ffdad9]/10 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
