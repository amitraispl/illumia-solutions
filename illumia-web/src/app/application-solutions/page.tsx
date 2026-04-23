import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";

export const metadata: Metadata = {
  title: "Application Solutions",
  description:
    "Our application solutions are designed to enhance collaboration, streamline project management, and ensure robust security leveraging the best open-source technologies.",
};

const solutions = [
  {
    num: "01",
    title: "Web Meeting Solutions",
    desc: "Top-tier web-meeting solutions using Carbonio, Jitsi Meet, and Nextcloud Talk. Secure, self-hosted video conferencing that keeps your communications private and compliant.",
    href: "/web-meeting-solution",
    tags: ["Carbonio", "Jitsi Meet", "Nextcloud Talk"],
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Team collaborating over video meeting",
  },
  {
    num: "02",
    title: "Collaboration Platforms",
    desc: "Integrated collaboration suites powered by open-source technology. Email, calendar, file sharing, and real-time communication in a unified, secure environment.",
    href: "/contact",
    tags: ["Nextcloud", "Open-Source", "Self-Hosted"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Team collaborating around a shared workspace",
  },
  {
    num: "03",
    title: "Project Management",
    desc: "Streamlined project management tools designed for modern teams. Track progress, manage resources, and deliver projects on time with transparent, auditable workflows.",
    href: "/contact",
    tags: ["Agile", "Kanban", "Open-Source"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Kanban board with sticky notes on a wall",
  },
  {
    num: "04",
    title: "Custom Application Development",
    desc: "Bespoke application development leveraging the best open-source frameworks. From microservices to monoliths, we architect solutions that scale with your business.",
    href: "/contact",
    tags: ["Custom Dev", "API-First", "Microservices"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Developer writing application code",
  },
];

const modules = [
  { code: "OS-01", label: "Cloud Architecture" },
  { code: "OS-02", label: "CI/CD Optimization" },
  { code: "OS-03", label: "Legacy Migration" },
  { code: "OS-04", label: "Security Auditing" },
  { code: "OS-05", label: "Database Tuning" },
  { code: "OS-06", label: "API Management" },
  { code: "OS-07", label: "Penetration Testing" },
  { code: "OS-08", label: "Edge Computing" },
  { code: "OS-09", label: "Serverless Logic" },
  { code: "OS-10", label: "Frontend Precision" },
  { code: "OS-11", label: "Observability Stack" },
  { code: "OS-12", label: "Compliance Guard" },
  { code: "OS-13", label: "Network Integrity" },
  { code: "OS-14", label: "Load Balancing" },
  { code: "OS-15", label: "Workflow Engine" },
  { code: "OS-16", label: "Caching Strategy" },
  { code: "OS-17", label: "Event Sourcing" },
  { code: "OS-18", label: "DR Orchestration" },
];

export default function ApplicationSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Open Source Philosophy"
        title={
          <>
            Precision Engineering{" "}
            <span className="italic text-[#b31c33]">Without Borders</span>
          </>
        }
        description="Harnessing the collective intelligence of the global open-source community to deliver enterprise-grade reliability. Our application solutions enhance collaboration, streamline operations, and ensure robust security."
        primaryCta={{ label: "Explore Solutions", href: "#solutions" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Application solutions — Illumia Solutions"
      />

      {/* Introduction */}
      <section className="bg-[#f6f3f2] py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-4xl text-stone-900 leading-tight">
              The Open Standard of Excellence.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-[#5a4040] leading-relaxed font-body">
              Illumia Solutions bridges the gap between community-driven innovation and
              corporate-grade stability. Our application modules are designed for
              transparency, security, and limitless scale. We don&apos;t just use open
              source; we refine it into high-precision instruments for modern business.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85&auto=format&fit=crop"
                alt="Engineer reviewing open-source code"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section id="solutions" className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto space-y-24">
          {solutions.map((s, i) => (
            <div
              key={s.num}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden shadow-xl shadow-stone-200/50">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1c1b1b]/20 via-transparent to-[#b31c33]/15" />
                  <span className="absolute bottom-6 right-8 font-headline text-8xl font-bold text-white/25 select-none drop-shadow-md">{s.num}</span>
                </div>
              </div>
              <div className={`lg:col-span-6 flex flex-col gap-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-body text-[#b31c33] font-bold text-xs uppercase tracking-widest">
                  {s.num} — Application Module
                </span>
                <h3 className="font-headline text-4xl italic text-stone-900">{s.title}</h3>
                <p className="text-[#5a4040] text-lg font-body leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-[#f6f3f2] text-xs font-body font-semibold uppercase tracking-wider text-stone-700 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={s.href}
                  className="text-[#b31c33] font-body font-bold text-sm tracking-widest uppercase border-b-2 border-[#b31c33]/20 pb-1 w-fit hover:border-[#b31c33] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Modules */}
      <section className="py-32 bg-[#f6f3f2] px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h2 className="font-headline text-5xl font-semibold text-stone-900">
              The Illumia Application Ecosystem
            </h2>
            <p className="text-[#5c5c5c] font-body tracking-widest uppercase text-xs">
              47 Precision Modules Integrated
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#e2bebd]/30">
            {modules.map((m) => (
              <div
                key={m.code}
                className="bg-[#fcf9f8] p-6 flex flex-col justify-between min-h-[140px] hover:bg-white transition-colors"
              >
                <span className="text-xs font-body text-[#b31c33] font-bold uppercase tracking-tight">
                  {m.code}
                </span>
                <span className="text-xs font-body text-stone-800 font-semibold uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="bg-[#b31c33] hover:bg-[#920022] text-white font-body text-xs tracking-widest px-10 py-4 uppercase transition-all rounded-xl shadow-lg"
            >
              Explore All 47 Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1c1b1b] text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-headline text-5xl mb-6">
            Ready to modernize your applications?
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Our team of open-source experts will help you build, migrate, and optimize
            your application stack for the modern enterprise.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#d63849] shadow-lg shadow-[#b31c33]/30 active:scale-95"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
