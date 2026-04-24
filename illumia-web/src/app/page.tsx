import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServicesEcosystem from "@/components/ServicesEcosystem";
import PageHero from "@/components/PageHero";
import { Marquee } from "@/components/ui/marquee";
import SlideTextButton from "@/components/kokonutui/slide-text-button";
import WhyChooseFlipCard from "@/components/WhyChooseFlipCard";

export const metadata: Metadata = {
  title: "Illumia Solutions | Illuminating the Path to Success",
  description:
    "At Illumia Solutions, we are dedicated to empowering businesses to achieve their goals through innovative and cost-effective solutions in cybersecurity, cloud, and open-source technologies.",
};

const stats = [
  { value: "20+", label: "Years of Industry Experience" },
  { value: "47+", label: "Specialized Service Modules" },
  { value: "100%", label: "Open-Source Powered" },
  { value: "24/7", label: "Multi-Timezone Support" },
];

const partnerLogos = [
  { src: "/photos/Seqrite_logo Partner-768x299.png", alt: "Seqrite — Partner", width: 160, height: 60 },
  { src: "/photos/Force Logo.png", alt: "Force Networks — Partner", width: 120, height: 60 },
  { src: "/photos/zextras_Partner_logo_RGB_web-7.png", alt: "Zextras — Partner", width: 120, height: 50 },
  { src: "/photos/Proxmox-Silver-Partner.png", alt: "Proxmox — Silver Partner", width: 130, height: 60 },
  { src: "/photos/LifeBank-Foundation.png", alt: "LifeBank Foundation — Partner", width: 140, height: 60 },
  { src: "/photos/Apache-Guacamole-Partner.png", alt: "Apache Guacamole — Commercial Support Partner", width: 140, height: 60 },
];

const whyChoose = [
  {
    title: "Expertise Across Domains",
    href: "/about",
    description:
      "Our team of certified professionals — including CISA, CISSP, CEH, and CCIE — boasts over 20 years of industry-relevant experience, ensuring top-tier protection and service tailored to your unique needs.",
  },
  {
    title: "Comprehensive Cybersecurity",
    href: "/cyber-security",
    description:
      "Robust cybersecurity services covering IT risk management, application security, mobile and cloud security. We help you navigate complex regulatory landscapes and ensure data privacy with PCI-DSS, ISO 27001, HIPAA, and GDPR compliance.",
  },
  {
    title: "Advanced Cloud Solutions",
    href: "/cloud-services",
    description:
      "Cloud services designed to optimise your operations, enhance security, and ensure seamless scalability. Whether you need hosting, application services, migration, or maintenance, we provide comprehensive solutions that scale for tomorrow.",
  },
  {
    title: "Innovative Open-Source",
    href: "/application-solutions",
    description:
      "We leverage the flexibility and cost-effectiveness of open-source technologies to deliver tailored infrastructure, application, and cybersecurity solutions — including hyperconverged infrastructure, high-performance block storage, and private cloud.",
  },
  {
    title: "Global Reach, Local Touch",
    href: "/about",
    description:
      "With a global presence, Illumia Solutions is well-equipped to meet your IT needs regardless of location. Our team operates across multiple time zones, ensuring prompt and effective service whenever you need it.",
  },
  {
    title: "Continuous Support",
    href: "/contact",
    description:
      "Our dedicated support team provides continuous monitoring, management, and maintenance services to ensure your IT infrastructure operates smoothly and securely. We offer 24/7 support to address any issues promptly and minimise disruption.",
  },
];

const globalReachCountries = ["India", "USA", "Philippines", "Australia", "Kenya", "Mozambique"];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Global IT Solutions"
        title={
          <>
            Illuminating{" "}
            <span className="italic font-normal text-[#b31c33]">the path</span>{" "}
            to SUCCESS
          </>
        }
        description="Enterprise-grade cybersecurity, cloud, and open-source solutions — engineered for resilience, built for scale. From Kolkata to the globe, we deliver precision technology that powers ambitious businesses forward."
        primaryCta={{ label: "Start Your Journey", href: "/contact" }}
        secondaryCta={{ label: "Learn About Us", href: "/about" }}
        imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Modern technology workspace with multiple screens"
      >
        {/* Stats row inside hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#e2bebd]/40">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-headline text-3xl font-bold text-[#b31c33]">
                {stat.value}
              </span>
              <span className="font-body text-[11px] text-[#5c5c5c] uppercase tracking-wider leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ─── Partnership Strip ────────────────────────────────────────────── */}
      <div className="border-y border-[#e2bebd]/30 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-5 flex items-center gap-8">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8e706f] shrink-0 font-semibold">
            Strategic Partners
          </span>
          {/* paddingX formula: wider rendered logo → proportionally more gap
              renderedW = (width/height)×40  |  px = round(20 + (renderedW/maxRenderedW)×20)
              maxRenderedW = (160/60)×40 = 106.67 (Seqrite) */}
          <Marquee
            pauseOnHover
            repeat={3}
            className="flex-1 [--duration:16s] [--gap:0px] p-0"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            {partnerLogos.map((logo) => {
              const renderedW = (logo.width / logo.height) * 40;
              const px = Math.round(20 + (renderedW / ((160 / 60) * 40)) * 20);
              return (
                <div
                  key={logo.alt}
                  style={{ paddingLeft: `${px}px`, paddingRight: `${px}px` }}
                  className="flex items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-h-10 w-auto opacity-60 hover:opacity-90 transition-opacity duration-200 grayscale hover:grayscale-0"
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>

      {/* ─── About Snapshot ───────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: editorial text + image */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div>
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-6">
                  Who We Are
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-stone-900 leading-[0.95] tracking-tight mb-8">
                  The intersection of{" "}
                  <span className="italic text-[#b31c33]">legacy wisdom</span>{" "}
                  and radical innovation.
                </h2>
                <p className="text-[#5a4040] text-lg leading-relaxed font-body">
                  We don&apos;t just build systems; we curate environments where technology
                  serves human objectives with flawless execution. Our multidisciplinary
                  team bridges the gap between complex hardware and intuitive software.
                </p>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                  alt="Illumia Solutions collaborative team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Mission / Vision / Values cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                  label: "Our Mission",
                  text: "To provide precision-engineered digital foundations that empower enterprise growth through security and scalability.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Our Vision",
                  text: "To be the global beacon of innovation for businesses navigating through complex technological challenges with clinical precision.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  ),
                  label: "Our Values",
                  text: "Integrity, transparency, and relentless pursuit of excellence — enlightening businesses with unique solutions that guide them to thrive.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-8 border border-[#e2bebd]/30 flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#b31c33]/10 flex items-center justify-center text-[#b31c33]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xs font-bold uppercase tracking-widest text-[#b31c33] mb-2">
                      {item.label}
                    </h4>
                    <p className="font-body text-sm text-[#5a4040] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 pt-2">
                <Link
                  href="/about"
                  className="bg-[#b31c33] text-white px-8 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 active:scale-95 text-center"
                >
                  Our Story
                </Link>
                <SlideTextButton
                  text="Get in Touch"
                  hoverText="Contact Us"
                  href="/contact"
                  variant="ghost"
                  className="h-auto py-4 rounded-xl border-[#b31c33]/30 text-[#b31c33] hover:bg-[#ffdad9]/20 tracking-wide font-body font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Ecosystem Bento ────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <div>
              <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
                Core Competencies
              </span>
              <h2 className="font-headline text-5xl text-stone-900">
                Expertise Ecosystem
              </h2>
            </div>
            <p className="text-[#5c5c5c] font-body text-sm max-w-xs leading-relaxed italic">
              &ldquo;A unified suite of specialised instruments designed for the modern enterprise.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cell 1: Cloud Solutions — wide */}
            <Link
              href="/cloud-services"
              className="group lg:col-span-2 bg-[#f6f3f2] rounded-2xl p-10 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/60 transition-all duration-300 border border-transparent hover:border-[#e2bebd]/40"
            >
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">
                01 / Foundation
              </span>
              <h3 className="font-headline text-3xl text-stone-900 mb-3">
                Enterprise Cloud Solutions
              </h3>
              <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6">
                From hosted infrastructure to SD-WAN and Open Storage, we don&apos;t just provide storage; we provide a complete cloud ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Cloud Hosting", "Cloud Migration", "Hosted Storage", "Load Balancing"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-body font-semibold text-[#5c5c5c] uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#b31c33] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <span className="mt-6 text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                Learn More
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Cell 2: Cyber Security — RED accent */}
            <Link
              href="/cyber-security"
              className="group bg-[#b31c33] rounded-2xl p-10 text-white hover:bg-[#920022] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold block mb-3">
                02 / Adaptive
              </span>
              <h3 className="font-headline text-3xl text-white mb-3">
                Cyber Security Services
              </h3>
              <p className="text-white/75 text-sm font-body leading-relaxed mb-6">
                Not just tools — precision cybersecurity. Protecting your assets, ensuring compliance, and maintaining business continuity.
              </p>
              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/80">
                Explore Security
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Cell 3: Image card — Open Source */}
            <Link
              href="/open-source-solutions"
              className="group relative rounded-2xl overflow-hidden min-h-[280px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop"
                alt="Open Source Integration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/60 group-hover:bg-[#1c1b1b]/50 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">
                  03 / Open Source
                </span>
                <div>
                  <h3 className="font-headline text-2xl text-white mb-2">Open Source Integration</h3>
                  <span className="text-white/70 font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                    Learn More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Cell 4: Digital Transformation — wide */}
            <Link
              href="/application-solutions"
              className="group lg:col-span-2 bg-[#f6f3f2] rounded-2xl p-10 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/60 transition-all duration-300 border border-transparent hover:border-[#e2bebd]/40 flex flex-col justify-between"
            >
              <div>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-4">
                  04 / Modernization
                </span>
                <h3 className="font-headline text-3xl text-stone-900 mb-3">
                  Digital Transformation
                </h3>
                <p className="text-[#5a4040] text-sm font-body leading-relaxed mb-6">
                  Streamlining legacy systems through automated innovations and bespoke application development for the modern enterprise.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Application Dev", "DevSecOps", "Kubernetes", "Cloud-Native"].map((tag) => (
                  <span key={tag} className="font-body text-[10px] font-bold uppercase tracking-wider text-[#5c5c5c] border border-[#e2bebd]/60 rounded-md px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us Bento ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#f6f3f2] border-t border-[#e2bebd]/20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
              The Illumia Advantage
            </span>
            <h2 className="font-headline text-5xl text-stone-900">
              Why Choose Illumia Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 0 — RED accent */}
            <Link
              href={whyChoose[0].href}
              className="group bg-[#b31c33] rounded-2xl p-10 text-white hover:bg-[#920022] transition-colors duration-300 flex flex-col gap-4"
            >
              <h3 className="font-headline text-2xl text-white">{whyChoose[0].title}</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed flex-1">{whyChoose[0].description}</p>
              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-white/70">
                Learn More <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>

            {/* Cards 1-3 — white */}
            {whyChoose.slice(1, 4).map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-2xl p-10 border border-[#e2bebd]/30 hover:border-[#e2bebd]/60 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300 flex flex-col gap-4"
              >
                <h3 className="font-headline text-2xl text-stone-900 group-hover:text-[#b31c33] transition-colors duration-300">{item.title}</h3>
                <p className="font-body text-sm text-[#5a4040] leading-relaxed flex-1">{item.description}</p>
              </Link>
            ))}

            {/* Flip card — image front / Continuous Support back */}
            <WhyChooseFlipCard
              title={whyChoose[5].title}
              description={whyChoose[5].description}
              href={whyChoose[5].href}
            />

            {/* Card 4 */}
            <Link
              href={whyChoose[4].href}
              aria-label={`${whyChoose[4].title} — learn more`}
              className="group bg-white rounded-2xl p-10 border border-[#e2bebd]/30 hover:border-[#e2bebd]/60 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300 flex flex-col gap-4"
            >
              <h3 className="font-headline text-2xl text-stone-900 group-hover:text-[#b31c33] transition-colors duration-300">{whyChoose[4].title}</h3>
              <p className="font-body text-sm text-[#5a4040] leading-relaxed flex-1">{whyChoose[4].description}</p>
              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[#b31c33]/60 group-hover:text-[#b31c33]">
                Learn More
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Global Reach ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#1c1b1b] text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=70&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block mb-6">
                Global Presence
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-white leading-tight mb-8">
                Global Reach,{" "}
                <span className="italic text-[#ffb3b3]">Local Precision.</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-10 font-body">
                Our headquarters give us global satellite offices, enabling strategic partnerships and
                enterprise-class support across the regions that matter to your business.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {globalReachCountries.map((country) => (
                  <div key={country} className="flex items-center gap-3 border border-white/10 rounded-xl px-4 py-3 bg-white/5">
                    <span className="w-2 h-2 rounded-full bg-[#b31c33] shrink-0" />
                    <span className="font-body text-sm font-semibold text-stone-300">{country}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border border-white/10 rounded-2xl p-6 bg-white/5">
                <span className="w-10 h-10 rounded-xl bg-[#b31c33]/20 flex items-center justify-center text-[#ffb3b3] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-body text-xs font-bold uppercase tracking-widest text-[#ffb3b3] mb-1">Regional Headquarters</h4>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">APAC · North America · Africa · ANZ</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-white/10 rounded-2xl p-6 bg-white/5">
                <span className="w-10 h-10 rounded-xl bg-[#b31c33]/20 flex items-center justify-center text-[#ffb3b3] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-body text-xs font-bold uppercase tracking-widest text-[#ffb3b3] mb-1">Global Logistics</h4>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">24/7 multi-timezone support · Local delivery teams</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-white/10 rounded-2xl p-6 bg-white/5">
                <span className="w-10 h-10 rounded-xl bg-[#b31c33]/20 flex items-center justify-center text-[#ffb3b3] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-body text-xs font-bold uppercase tracking-widest text-[#ffb3b3] mb-1">Strategic Partners</h4>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">Seqrite · Force Networks · Zextras · Proxmox · LifeBank Foundation · Apache Guacamole</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesEcosystem />

      {/* ─── CTA Strip ────────────────────────────────────────────────────── */}
      <section className="bg-[#fcf9f8] py-28 border-t border-[#e2bebd]/20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-6">
            Start Today
          </span>
          <h2 className="font-headline text-5xl md:text-6xl text-stone-900 mb-8 leading-tight">
            Ready to{" "}
            <span className="italic text-[#b31c33]">illuminate</span>{" "}
            your path?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed">
            Whether you&apos;re hardening your security posture, migrating to the cloud,
            or modernising legacy infrastructure — our team is ready to map the way forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SlideTextButton
              text="Contact Us Today"
              hoverText="Let's Talk"
              href="/contact"
              className="h-auto py-4 rounded-xl bg-[#b31c33] hover:bg-[#920022] shadow-xl shadow-[#b31c33]/20 active:scale-95 tracking-wide font-body font-semibold"
            />
            <Link
              href="/about"
              className="border border-[#b31c33]/30 text-[#b31c33] px-10 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9]/20 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
           