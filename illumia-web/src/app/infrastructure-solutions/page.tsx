import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";

export const metadata: Metadata = {
  title: "Infrastructure Solutions",
  description:
    "Software-defined infrastructure built on robust open-source foundations — HCI, containers, object storage, VPS, and network management solutions.",
};

const solutions = [
  {
    title: "On-Premise Private Cloud",
    desc: "Built on Hyperconverged Infrastructure (HCI), which integrates compute, storage, and networking into a single cohesive system. Achieve public cloud flexibility while maintaining full control over your data.",
    href: "/on-premise-private-cloud",
    features: ["HCI Architecture", "Compute Integration", "Network Fabric", "Storage Pooling"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Private cloud data centre",
  },
  {
    title: "Virtual Private Server (VPS)",
    desc: "VPS offerings meticulously designed to meet the diverse needs of modern businesses, combining scalability and performance with enterprise-grade isolation and security at competitive pricing.",
    href: "/virtual-private-server",
    features: ["Full Root Access", "SSD Storage", "Managed Backups", "DDoS Protection"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Server hardware close-up",
  },
  {
    title: "Object Storage",
    desc: "Advanced Object Storage services designed to offer high performance, scalability, and seamless integration with existing systems. Fully compatible with Amazon S3 API for easy migration.",
    href: "/object-storage",
    features: ["S3-Compatible API", "High Availability", "Geo-Redundancy", "Lifecycle Policies"],
    image: "https://images.unsplash.com/photo-1614064548237-096d7f2d6b3e?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Rack of storage drives",
  },
  {
    title: "Container Solutions",
    desc: "Container technologies including LXC, LXD, and Docker, complemented by comprehensive orchestration solutions like Kubernetes. Deploy, scale, and manage containerized workloads with confidence.",
    href: "/containers",
    features: ["Docker & LXC/LXD", "Kubernetes Orchestration", "Service Mesh", "CI/CD Integration"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Shipping container yard",
  },
  {
    title: "NMS as a Service",
    desc: "Network Management System as a Service — a comprehensive solution that provides businesses with tools and services to monitor, manage, and optimize their network infrastructure in real time.",
    href: "/nms-as-a-service",
    features: ["Real-Time Monitoring", "Alerting & Reporting", "Topology Discovery", "Performance Analytics"],
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Network switch with cables",
  },
  {
    title: "PAM as a Service",
    desc: "Comprehensive Privileged Access Management as a Service tailored to meet the unique needs of your business. Control, monitor, and audit all privileged access across your infrastructure.",
    href: "/pam-as-a-service",
    features: ["Session Recording", "Just-in-Time Access", "Credential Vaulting", "Audit Trails"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Secure key and lock imagery",
  },
];

export default function InfrastructureSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Infrastructure Solutions"
        title={
          <>
            Enterprise-Grade{" "}
            <span className="italic text-[#b31c33]">Infrastructure</span>{" "}
            at Scale
          </>
        }
        description="Software-defined infrastructure built on robust open-source foundations. From hyperconverged systems to managed containers — we architect the backbone of your digital operations."
        primaryCta={{ label: "Consult Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Solutions", href: "#solutions" }}
        imageSrc="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Infrastructure solutions — Illumia Solutions"
      />

      {/* Solutions Grid */}
      <section id="solutions" className="py-32 bg-white px-6 md:px-12 scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
              Our Portfolio
            </span>
            <h2 className="font-headline text-5xl text-stone-900">
              Infrastructure Solutions Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group bg-[#f6f3f2] rounded-2xl overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 border border-transparent hover:border-[#e2bebd]/40 flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/35 via-transparent to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-headline text-2xl text-stone-900 mb-4">{s.title}</h3>
                  <p className="text-[#5a4040] leading-relaxed font-body font-light text-sm mb-6 flex-1">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs font-body text-stone-600">
                        <span className="w-1 h-1 rounded-full bg-[#b31c33] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-[#b31c33] font-body font-semibold text-xs inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest mt-auto"
                  >
                    Learn More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Highlight */}
      <section className="py-24 bg-[#f6f3f2] px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -right-20 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=60&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-6">
                Technical Approach
              </span>
              <h2 className="font-headline text-5xl text-stone-900 mb-8">
                Hyperconverged Infrastructure
              </h2>
              <p className="text-[#5a4040] text-lg font-body leading-relaxed mb-8">
                Our HCI solutions integrate compute, storage, and networking into a single
                cohesive system — eliminating infrastructure silos and dramatically
                simplifying management while improving performance and scalability.
              </p>
              <div className="space-y-4">
                {[
                  "Eliminate traditional 3-tier infrastructure complexity",
                  "Unified management plane for all resources",
                  "Linear scalability — add nodes as you grow",
                  "Built-in redundancy and data protection",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ffdad9] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="font-body text-[#5a4040] leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85&auto=format&fit=crop"
                alt="Hyperconverged infrastructure visualization"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/70 via-[#1c1b1b]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#ffb3b3] font-bold block mb-2">
                  Unified Architecture
                </span>
                <p className="font-headline text-2xl text-white italic leading-snug">
                  Compute &middot; Storage &middot; Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#1c1b1b] text-white">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="text-[#ffb3b3] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
            Architect Your Backbone
          </span>
          <h2 className="font-headline text-5xl text-white mb-6">
            Let&apos;s design your infrastructure.
          </h2>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            From hyperconverged systems to managed container platforms — we build
            the foundation your applications depend on.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#b31c33] hover:bg-[#920022] text-white px-10 py-5 rounded-xl font-body font-semibold text-sm tracking-wide shadow-lg shadow-[#b31c33]/30 transition-all duration-200 active:scale-95"
          >
            Consult Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
