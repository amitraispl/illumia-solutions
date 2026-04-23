import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Discover why businesses choose Illumia Solutions — industry-leading credentials, open-source expertise, and over 20 years of combined experience.",
};

const reasons = [
  { number: "01", title: "Industry-Leading Credentials", desc: "Our team possesses several top-level, industry-leading certifications across cybersecurity, cloud platforms, and open-source ecosystems — ensuring we deliver the highest standards of service and expertise." },
  { number: "02", title: "Experience Meets Innovation", desc: "We combine the fresh perspectives of young minds with the seasoned expertise of professionals who have over 20 years of industry experience. This blend creates unique, tailored solutions for every client." },
  { number: "03", title: "Open-Source Excellence", desc: "We harness the power of open-source technologies to deliver infrastructure, application, and cybersecurity solutions that are transparent, auditable, cost-effective, and enterprise-grade." },
  { number: "04", title: "Global Presence, Local Expertise", desc: "A diverse team with a global presence, supported by strategic partnerships, enabling us to understand and address unique challenges faced by businesses in different regions and industries." },
  { number: "05", title: "24/7 Multi-Timezone Support", desc: "Our team operates across multiple time zones, ensuring prompt and effective service whenever you need it. Your business doesn't stop, and neither do we." },
  { number: "06", title: "Innovative & Cost-Effective", desc: "We are dedicated to empowering businesses to achieve their goals through innovative and cost-effective solutions — making enterprise-grade technology accessible to organizations of every size." },
];

const stats = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "100%", label: "Open-Source Powered" },
  { value: "47+", label: "Specialized Modules" },
  { value: "24/7", label: "Support Coverage" },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="The Illumia Advantage"
        title={
          <>
            Why the World&apos;s Leaders{" "}
            <span className="italic text-[#b31c33]">Choose Illumia.</span>
          </>
        }
        description="At Illumia Solutions, we are dedicated to empowering businesses to achieve their goals through innovative and cost-effective solutions. Here's what sets us apart."
        primaryCta={{ label: "Partner With Us", href: "/contact" }}
        secondaryCta={{ label: "Our Story", href: "/about" }}
        imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Illumia Solutions enterprise environment"
      />

      {/* Stats Bar */}
      <section className="bg-[#b31c33] py-12">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-headline text-4xl font-bold">{s.value}</p>
                <p className="font-body text-xs uppercase tracking-widest text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Bento */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
              What Makes Us Different
            </span>
            <h2 className="font-headline text-5xl text-stone-900">
              Six Reasons to Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-[#b31c33] rounded-2xl p-10 flex flex-col gap-4">
              <span className="font-headline text-5xl italic text-[#ffdad9]">{reasons[0].number}.</span>
              <h3 className="font-headline text-3xl text-white">{reasons[0].title}</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed">{reasons[0].desc}</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop"
                alt="Illumia Solutions infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/60" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="font-headline text-xl text-white italic leading-tight">
                  &ldquo;Precision built, enterprise proven.&rdquo;
                </p>
              </div>
            </div>

            {reasons.slice(1).map((r) => (
              <div
                key={r.number}
                className="bg-[#f6f3f2] rounded-2xl p-10 border border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
              >
                <span className="font-headline text-4xl italic text-[#b31c33]">{r.number}.</span>
                <h3 className="font-headline text-2xl text-stone-900">{r.title}</h3>
                <p className="font-body text-sm text-[#5a4040] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 bg-[#f6f3f2] px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=60&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto text-center relative">
          <blockquote className="font-headline text-4xl md:text-5xl italic text-stone-900 leading-tight mb-8 max-w-4xl mx-auto">
            &ldquo;Illuminating the path to success — providing clients with the tools
            and guidance they need to excel in an ever-changing business landscape.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#b31c33] mx-auto mb-6" />
          <p className="text-[#b31c33] font-body text-xs uppercase tracking-widest font-bold">
            — Illumia Solutions Mission
          </p>
        </div>
      </section>

      {/* Imagery strip */}
      <section className="bg-white px-6 md:px-12 pb-32">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
              alt: "Team collaboration",
              label: "Collaboration",
            },
            {
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
              alt: "Operational dashboards",
              label: "Monitoring",
            },
            {
              src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop",
              alt: "Global network",
              label: "Global Reach",
            },
          ].map((tile) => (
            <div key={tile.label} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/70 via-[#1c1b1b]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#ffb3b3] font-bold block mb-1">
                  The Illumia Way
                </span>
                <p className="font-headline text-2xl text-white italic leading-tight">
                  {tile.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#1c1b1b] text-white">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="text-[#ffb3b3] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
            Partner With Us
          </span>
          <h2 className="font-headline text-5xl text-white mb-6">
            Ready to experience the Illumia advantage?
          </h2>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Let&apos;s discuss how our industry-leading expertise and innovative
            solutions can help your business thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#b31c33] hover:bg-[#920022] text-white px-10 py-5 rounded-xl font-body font-semibold text-sm tracking-wide shadow-lg shadow-[#b31c33]/30 transition-all duration-200 active:scale-95"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
