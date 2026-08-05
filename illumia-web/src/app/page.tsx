import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// import ServicesEcosystem from "@/components/ServicesEcosystem";
import TechSpotlight from "@/components/TechSpotlight";
import PageHero from "@/components/PageHero";
import { Marquee } from "@/components/ui/marquee";
import SlideTextButton from "@/components/kokonutui/slide-text-button";
import WhyChooseFlipCard from "@/components/WhyChooseFlipCard";
const seqriteLogo = "/images/logos/seqrite-logo-partner.png";
const forceLogo = "/images/logos/force-logo.png";
const zextrasLogo = "/images/logos/zextras-partner-logo.png";
const proxmoxLogo = "/images/logos/proxmox-logo.svg";
const lifebankLogo = "/images/logos/lifebank-foundation.png";
const guacamoleLogo = "/images/logos/apache-guacamole-partner.png";

const netboxLabsLogo = "/images/logos/netbox-labs.png";
const cybernetLogo = "/images/logos/cybernet-ai-technologies-logo.png";
const dccLogo = "/images/logos/data-consultants-corporation-logo.png";


export const metadata: Metadata = {
  title: "Illumia Solutions | Enterprise IT Services | Cloud, Cybersecurity & Open Source",
  description:
    "Enterprise-grade cloud infrastructure, cybersecurity, open-source and software development services. Proxmox Silver Partner. CISA, CISSP, CEH, CCIE certified.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20+", label: "Years of Collective Industry Experience" },
  { value: "47+", label: "Specialized Service Modules" },
  { value: "100%", label: "Open-Source Powered" },
  { value: "24/7", label: "Multi-Timezone Support" },
];

const partnerLogos = [
  { src: seqriteLogo, alt: "Seqrite — Partner", width: 160, height: 60, href: "https://www.seqrite.com" },
  { src: forceLogo, alt: "Force Ten Technologies — Partner", width: 120, height: 60, href: "https://www.forcetentech.com/new/index.html" },
  { src: zextrasLogo, alt: "Zextras — Partner", width: 120, height: 50, href: "https://www.zextras.com" },
  { src: proxmoxLogo, alt: "Proxmox — Silver Partner", width: 100, height: 60, href: "https://www.proxmox.com/en/partners/find-partner/all/partner/illumia-solutions", wide: true },
  { src: lifebankLogo, alt: "LifeBank Foundation — Partner", width: 140, height: 60, href: "https://lifebankfoundation.org" },
  { src: guacamoleLogo, alt: "Apache Guacamole — Commercial Support Partner", width: 140, height: 60, href: "https://guacamole.apache.org/support/#commercial-support" },
  { src: netboxLabsLogo, alt: "NetBox Labs — Partner", width: 140, height: 50, href: "https://netboxlabs.com" },
  { src: cybernetLogo, alt: "Cybernet & AI Technologies — Partner", width: 250, height: 60, href: "https://www.auscybernet.au/" },
  { src: dccLogo, alt: "Data Consultants Corporation — Partner", width: 190, height: 60, href: "http://www.dccil.com/" },
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
      "Robust cybersecurity services covering IT risk management, application security, and cloud security — with compliance built in for PCI-DSS, ISO 27001, HIPAA, and GDPR from day one.",
  },
  {
    title: "Advanced Cloud Solutions",
    href: "/cloud-services",
    description:
      "Cloud services designed to optimise your operations and strengthen security — hosting, application services, migration, and maintenance, delivered as solutions engineered to scale with your business.",
  },
  {
    title: "Innovative Open-Source",
    href: "/application-solutions",
    description:
      "We leverage the flexibility and cost-effectiveness of open-source technology to deliver tailored infrastructure, application, and security solutions — including hyperconverged systems and private cloud.",
  },
  {
    title: "Global Reach, Local Touch",
    href: "/about",
    description:
      "With a global presence, Illumia Solutions meets your IT needs regardless of location — our team operates across multiple time zones, ensuring prompt, effective service wherever you need it.",
  },
  {
    title: "Continuous Support",
    href: "/contact#contact-form",
    description:
      "Our dedicated support team provides continuous monitoring, management, and maintenance services to ensure your IT infrastructure operates smoothly and securely. We offer 24/7 support to address any issues promptly and minimise disruption.",
  },
];

const globalReachCountries = ["India", "USA", "Philippines", "Australia", "Kenya", "Nigeria"];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Global IT Solutions"
        badgeClassName="text-sm lg:text-[17px]"
        title={
          <>
            Illuminating{" "}
            <span className="italic font-normal text-primary">the path</span>{" "}
            to SUCCESS
          </>
        }
        description="Enterprise-grade cybersecurity, cloud, and open-source solutions — engineered for resilience, built for scale. Globally we deliver precision technology that powers ambitious businesses forward."
        primaryCta={{ label: "Talk to Our Team", href: "/contact#contact-form" }}
        secondaryCta={{ label: "Learn About Us", href: "/about" }}
        imageSrc="/images/home/hero.jpg"
        imageAlt="Diverse team collaborating around a table with laptops"
      >
        {/* Stats row inside hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6 pt-4 border-t border-outline-variant/40">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 min-w-0">
              <span className="font-headline text-3xl sm:text-4xl font-bold text-primary tabular-nums">
                {stat.value}
              </span>
              <span className="font-body text-[10px] sm:text-xs text-tertiary uppercase tracking-wider sm:tracking-widest leading-tight font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ─── Partnership Strip ────────────────────────────────────────────── */}
      <div className="border-y border-outline-variant/30 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <div className="flex shrink-0 items-center justify-center md:justify-start gap-3 pt-2 pb-4 md:py-0">
            <span className="hidden md:block w-4 h-px bg-primary" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary font-bold whitespace-nowrap">
              Trusted By
            </span>
          </div>
          {/* paddingX formula: wider rendered logo → proportionally more gap, capped at maxRenderedW
              renderedW = (width/height)×40  |  px = round(20 + (min(renderedW,maxRenderedW)/maxRenderedW)×20)
              maxRenderedW = (160/60)×40 = 106.67 (Seqrite) — cap prevents very wide lockups (e.g. Proxmox) from getting oversized gaps */}
          <Marquee
            pauseOnHover
            repeat={3}
            className="w-full md:flex-1 [--duration:30s] [--gap:0px] p-0"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            {partnerLogos.map((logo) => {
              const renderedW = (logo.width / logo.height) * 40;
              const maxRenderedW = (160 / 60) * 40;
              const px = Math.round(20 + (Math.min(renderedW, maxRenderedW) / maxRenderedW) * 20);
              return (
                <a
                  key={logo.alt}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  style={{ paddingLeft: `${px}px`, paddingRight: `${px}px` }}
                  className="flex items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="eager"
                    unoptimized
                    className={`object-contain max-h-12 w-auto transition-transform duration-200 hover:scale-110 ${logo.wide ? "max-w-72" : "max-w-36"}`}
                  />
                </a>
              );
            })}
          </Marquee>
        </div>
      </div>

      <TechSpotlight />

      {/* ─── About Snapshot ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Left: editorial text + image */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div>
                <span className="font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase text-primary font-bold block mb-6">
                  Who We Are
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[0.95] mb-5 md:mb-8">
                  The intersection of{" "}
                  <span className="italic text-primary">legacy wisdom</span>{" "}
                  and radical innovation.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                  We don&apos;t just build systems; we curate environments where technology
                  serves human objectives with flawless execution. Our multidisciplinary
                  team bridges the gap between complex hardware and intuitive software.
                </p>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/heroes/homepage-about_team-at-work.jpg"
                  alt="Illumia Solutions collaborative team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent" />
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
                  className="bg-white rounded-2xl p-5 md:p-8 border border-outline-variant/30 flex gap-4 md:gap-5 transition-[border-color,box-shadow,transform] duration-200 cursor-default [&:hover]:border-outline-variant/60 [&:hover]:shadow-xl [&:hover]:shadow-stone-200/50 [&:hover]:-translate-y-2"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      {item.label}
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2">
                <Link
                  href="/about"
                  className="block w-full sm:inline-block sm:w-auto px-8 py-4 rounded-xl font-body font-semibold tracking-wide text-center bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary-dark active:scale-[0.98] transition-[background-color,box-shadow] duration-200"
                >
                  Our Story
                </Link>
                <SlideTextButton
                  text="Get in Touch"
                  hoverText="Contact Us"
                  href="/contact#contact-form"
                  variant="ghost"
                  className="h-auto py-4 rounded-xl border-primary/30 text-primary hover:bg-primary-light/20 tracking-wide font-body font-semibold w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Ecosystem Bento ────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16 gap-6 md:gap-8">
            <div>
              <span className="text-primary font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase font-semibold block mb-4">
                Core Competencies
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[0.95]">
                Expertise{" "}
                <span className="italic text-primary">Ecosystem</span>
              </h2>
            </div>
            <p className="text-tertiary font-body text-sm max-w-xs leading-relaxed italic">
              &ldquo;Three disciplines. One team. Zero compromises on security, scale, or cost.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cell 1: Cloud Solutions — wide */}
            <Link
              href="/cloud-services"
              className="group lg:col-span-2 bg-surface-low rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/60 transition-[background-color,border-color,box-shadow] duration-300 border border-transparent hover:border-outline-variant/40"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary font-bold block mb-4">
                01 / Foundation
              </span>
              <h3 className="font-headline text-3xl text-stone-900 mb-3">
                Enterprise Cloud Solutions
              </h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6">
                From hosted infrastructure to SD-WAN and Open Storage, we don&apos;t just provide storage; we provide a complete cloud ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Cloud Hosting", "Cloud Migration", "Hosted Storage", "Load Balancing"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-body font-semibold text-tertiary uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <span className="mt-6 text-primary font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] uppercase tracking-widest">
                Explore Cloud
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Cell 2: Cyber Security — RED accent */}
            <Link
              href="/cyber-security"
              className="group bg-primary rounded-2xl p-6 md:p-8 lg:p-10 text-white hover:bg-primary-dark transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-3">
                02 / Adaptive
              </span>
              <h3 className="font-headline text-3xl text-white mb-3">
                Cyber Security Services
              </h3>
              <p className="text-white/75 text-sm font-body leading-relaxed mb-6">
                Not just tools — precision cybersecurity. Protecting your assets, ensuring compliance, and maintaining business continuity.
              </p>
              <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] uppercase tracking-widest text-white/80">
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
                src="/images/content/homepage-opensource_open-source-integration.jpg"
                alt="Open Source Integration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-on-surface/60 group-hover:bg-on-surface/50 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60 font-bold">
                  03 / Open Source
                </span>
                <div>
                  <h3 className="font-headline text-2xl text-white mb-2">Open Source Integration</h3>
                  <span className="text-white/70 font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] uppercase tracking-widest">
                    Explore Open Source
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Cell 4: Digital Transformation — wide, dark */}
            <Link
              href="/application-solutions"
              className="group lg:col-span-2 bg-on-surface rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-[#272524] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-subdued font-bold block mb-4">
                  04 / Modernization
                </span>
                <h3 className="font-headline text-3xl text-white mb-3">
                  Digital Transformation
                </h3>
                <p className="text-stone-400 text-sm font-body leading-relaxed mb-6">
                  Streamlining legacy systems through automated innovations and bespoke application development for the modern enterprise.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Cloud", "Web-Meeting", "Mail", "Collaboration"].map((tag) => (
                  <span key={tag} className="font-body text-xs font-bold uppercase tracking-wider text-primary-subdued bg-white/8 border border-white/15 rounded-md px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 text-primary-subdued font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] uppercase tracking-widest">
                Explore Solutions
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Global Reach ─────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-on-surface text-white relative overflow-hidden">
        <Image
          src="/images/content/homepage-faqs_decorative-background.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase text-primary-subdued font-bold block mb-6">
                Global Presence
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5 md:mb-8">
                Global Reach,{" "}
                <span className="italic text-primary-subdued">Local Touch.</span>
              </h2>
              <p className="text-stone-400 text-base md:text-lg leading-relaxed mb-6 md:mb-10 font-body">
                Our headquarters give us global satellite offices, enabling strategic partnerships and
                enterprise-class support across the regions that matter to your business.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {globalReachCountries.map((country) => (
                  <div key={country} className="flex items-center gap-3 border border-white/20 rounded-xl px-4 py-3 bg-white/10 hover:bg-white/15 transition-colors duration-200">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-sm font-semibold text-stone-200">{country}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border border-white/10 border-l-2 border-l-primary/60 rounded-2xl p-6 bg-white/5">
                <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-subdued shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-body text-xs font-bold uppercase tracking-widest text-primary-subdued mb-1">Regional Headquarters</h4>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">APAC · North America · Africa · ANZ</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-white/10 border-l-2 border-l-primary/60 rounded-2xl p-6 bg-white/5">
                <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-subdued shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-body text-xs font-bold uppercase tracking-widest text-primary-subdued mb-1">Global Logistics</h4>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">24/7 multi-timezone support · Local delivery teams</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-white/10 border-l-2 border-l-primary/60 rounded-2xl p-6 bg-white/5">
                <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-subdued shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-body text-xs font-bold uppercase tracking-widest text-primary-subdued mb-1">Trusted By</h4>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">Seqrite · Force Ten Technologies · Zextras · Proxmox · LifeBank Foundation · Apache Guacamole · NetBox Labs · Cybernet & AI Technologies · Data Consultants Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us Bento ──────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-surface-low border-t border-outline-variant/20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-10 md:mb-16">
            <span className="text-primary font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase font-semibold block mb-4">
              The Illumia Advantage
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[0.95]">
              Why Choose{" "}
              <span className="italic text-primary">Illumia Solutions?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr] gap-4 lg:items-start">

            {/* Left column: RED anchor + flip card stacked.
                Below lg the wrapper collapses (contents) so all 6 cards share
                one uniform grid; at lg it becomes the bento's left column. */}
            <div className="contents lg:flex lg:flex-col lg:gap-4">
              <Link
                href={whyChoose[0].href}
                className="group bg-primary rounded-2xl p-6 md:p-8 lg:p-10 text-white hover:bg-primary-dark transition-colors duration-300 flex flex-col gap-5 flex-1"
              >
                <h3 className="font-headline text-2xl text-white">{whyChoose[0].title}</h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">{whyChoose[0].description}</p>
                <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] uppercase tracking-widest text-white/70">
                  Explore Our Expertise
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
              <WhyChooseFlipCard
                title={whyChoose[5].title}
                description={whyChoose[5].description}
                href={whyChoose[5].href}
              />
            </div>

            {/* Right column: 2×2 sub-grid at lg; below lg collapses (contents)
                into the parent grid so every card is equal width. */}
            <div className="contents lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
              {whyChoose.slice(1, 5).map((item, i) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-2xl p-6 md:p-8 border border-outline-variant/30 hover:border-outline-variant/60 hover:shadow-xl hover:shadow-stone-200/60 transition-[border-color,box-shadow] duration-300 flex flex-col gap-4"
                >
                  <h3 className="font-headline text-2xl text-stone-900 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">{item.description}</p>
                  {i === 3 && (
                    <span className="font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-[gap] uppercase tracking-widest text-primary/60 group-hover:text-primary">
                      Our Global Reach
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}

      {/* ─── CTA Strip ────────────────────────────────────────────────────── */}
      <section className="bg-surface py-10 md:py-16 border-t border-outline-variant/20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <span className="text-primary font-body text-[13px] lg:text-[15px] tracking-[0.25em] uppercase font-semibold block mb-4 md:mb-6">
            Start Today
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-5 md:mb-8 leading-tight">
            Ready to{" "}
            <span className="italic text-primary">illuminate</span>{" "}
            your path?
          </h2>
          <p className="text-on-surface-variant text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-body leading-relaxed">
            Whether you&apos;re hardening your security posture, migrating to the cloud,
            or modernising legacy infrastructure — our team is ready to map the way forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SlideTextButton
              text="Contact Us Today"
              hoverText="Let's Talk"
              href="/contact#contact-form"
              className="h-auto py-4 rounded-xl bg-primary hover:bg-primary-dark shadow-xl shadow-primary/20 active:scale-[0.98] tracking-wide font-body font-semibold"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
           