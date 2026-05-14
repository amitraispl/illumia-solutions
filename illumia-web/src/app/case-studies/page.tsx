import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world transformations delivered by Illumia Solutions — from open source cost reduction to PCI DSS compliance and enterprise cybersecurity.",
};

const caseStudies = [
  {
    href: "/case-studies/non-profit-open-source",
    tag: "Open Source · Non-Profit",
    title: "Driving 50–65% IT Cost Reduction with Open Source Infrastructure",
    desc:
      "A leading Microfinance Non-Profit in the Philippines transformed its entire IT landscape — cutting costs, improving collaboration, and scaling operations across 1,000+ branches with an integrated open-source stack.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { value: "50–65%", label: "IT Cost Reduction" },
      { value: "~1,000", label: "Branches" },
      { value: "3–5 yrs", label: "Savings Horizon" },
    ],
  },
  {
    href: "/case-studies/cybersecurity-open-source",
    tag: "Cybersecurity · Open Source",
    title: "Strengthening Cybersecurity & Compliance with Open Source Technologies",
    desc:
      "One of the largest nonprofit microfinance institutions in the Philippines implemented a comprehensive open-source security stack — full visibility, threat detection, and compliance readiness.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { value: "24/7", label: "Monitoring" },
      { value: "Audit", label: "Ready" },
      { value: "On-Prem", label: "Data Sovereignty" },
    ],
  },
  {
    href: "/case-studies/pci-dss-grocery",
    tag: "Compliance · Retail",
    title: "PCI DSS Compliance for a Grocery Store Chain in Illinois",
    desc:
      "During the pandemic surge in credit card transactions, Illumia delivered full PCI DSS Level 2 compliance for a 17-location grocery chain — on time, on budget, and with zero business disruption.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { value: "Level 2", label: "PCI DSS SAQ D" },
      { value: "17", label: "Locations" },
      { value: "Zero", label: "Downtime" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#fcf9f8]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e2bebd]/40 bg-gradient-to-b from-white to-[#fcf9f8]">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-36 lg:pb-24">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b31c33]/30 bg-[#b31c33]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                Case Studies
              </span>
              <h1 className="mt-6 font-headline text-5xl leading-[0.95] tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
                Real problems. <span className="italic text-[#b31c33]">Real results.</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[#5a4040] lg:text-lg">
                From cost transformation to compliance — see how Illumia Solutions has delivered measurable impact for organisations across industries and geographies.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-[#e2bebd]/60 bg-white p-6">
                <div className="text-center">
                  <div className="font-headline text-2xl font-semibold text-[#b31c33] lg:text-3xl">3</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-[#5a4040]">Case Studies</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-2xl font-semibold text-[#b31c33] lg:text-3xl">17+</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-[#5a4040]">Industries</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-2xl font-semibold text-[#b31c33] lg:text-3xl">1k+</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-[#5a4040]">Branches Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="border-b border-[#e2bebd]/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#e2bebd]/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/10"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-stone-100">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b31c33] backdrop-blur">
                      {cs.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-headline text-xl leading-snug text-stone-900 transition-colors duration-300 group-hover:text-[#b31c33] lg:text-2xl">
                    {cs.title}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[#5a4040]">
                    {cs.desc}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#e2bebd]/50 pt-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-headline text-lg font-semibold text-[#b31c33] leading-none">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-wider text-[#5a4040]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#b31c33] transition-all duration-200 group-hover:gap-3">
                    Read Case Study
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-3xl border border-[#e2bebd]/60 bg-white p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b31c33]">Work With Us</p>
                <h2 className="mt-4 font-headline text-3xl leading-tight tracking-tight text-stone-900 lg:text-5xl">
                  Ready to become our next success story?
                </h2>
                <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-[#5a4040]">
                  Tell us what you&apos;re trying to solve. We&apos;ll show you how open source, sound architecture and proven engineering deliver outcomes that last.
                </p>
              </div>
              <div className="flex lg:col-span-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#b31c33] px-7 py-4 font-body text-sm font-semibold tracking-wide text-white transition hover:bg-[#920022]"
                >
                  Get in Touch
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
