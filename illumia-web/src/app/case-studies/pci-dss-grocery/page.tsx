"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "https://nextcloud.illumiasolutions.com/public.php/dav/files/p7oPQLdGntqDDza";
const SIDEBAR_IMG =
  "https://nextcloud.illumiasolutions.com/public.php/dav/files/rPGzbmRye4Zcpj2";

const navSections = [
  { id: "achievements", label: "Achievements" },
  { id: "challenges", label: "Business Challenges" },
  { id: "solutions", label: "Solution Delivered" },
  { id: "outcomes", label: "Key Outcomes" },
  { id: "lifecycle", label: "Compliance Lifecycle" },
  { id: "impact", label: "Business Impact" },
  { id: "testimonial", label: "Testimonial" },
];

const achievements = [
  "PCI DSS Level 2 Compliance Achieved",
  "On-Time Delivery with Zero Downtime",
  "Significant Cost Savings Using Open Source Stack",
  "Enhanced Security & Audit Readiness",
];

const businessChallenges = [
  "Risk of losing authorization to process credit card transactions without PCI compliance.",
  "First-time compliance effort with no prior PCI DSS experience.",
  "Distributed infrastructure across 17 locations with no segmentation — entire network was in scope.",
  "Initial SAQ B-IP deemed inapplicable; SAQ D required — 3X more stringent requirements.",
  "High cost proposals including expensive security tools (SIEM, MFA, NMS, Vulnerability Scanner, Patch Mgmt.).",
  "Limited IT security resources and high risk of budget overrun.",
  "Zero tolerance for downtime during peak business growth.",
];

const solutionsDelivered = [
  { title: "Assessment Management", body: "Coordinated QSA, ASV, and Penetration Testing vendors for assessments, scanning and testing." },
  { title: "Remediation Management", body: "Engineering support for remediation across network, servers, endpoints — on-site and remote." },
  { title: "Network Segmentation", body: "Implemented PCI-compliant segmentation across 17 locations through multiple rounds of design, implementation, and reviews." },
  { title: "Open Source Stack Implementation", body: "Deployed SIEM, RADIUS for MFA, Vulnerability Scanner, and Network Monitoring using open source technologies." },
  { title: "Internal VAPT", body: "Scanned several hundred devices across 17 locations multiple times to validate remediations until acceptable results were achieved." },
  { title: "Documentation & Policies", body: "Created all required policies, procedures, network diagrams (17 locations) and compliance records." },
  { title: "Project Management", body: "Provided tools for task tracking, document management, approvals and reporting." },
  { title: "Training & Awareness", body: "Conducted security awareness training for general users and PCI essentials training for IT staff." },
];

const keyOutcomes = [
  { title: "PCI DSS Level 2 (SAQ D) Compliance Achieved", body: "Met all PCI DSS requirements within the mandated timeline." },
  { title: "Zero Business Disruption", body: "Ensured uninterrupted store operations during implementation." },
  { title: "Cost Optimization", body: "Eliminated need for expensive proprietary tools by leveraging open source stack." },
  { title: "Improved Security Posture", body: "Implemented proper segmentation, access controls and monitoring across all locations." },
  { title: "Audit & Compliance Ready", body: "Complete documentation and evidence for audit and future compliance initiatives." },
  { title: "Stronger Team Capability", body: "Empowered internal team through targeted training and knowledge transfer." },
];

const processSteps = [
  { num: "1", phase: "Assess", body: "Identify assets, data flows, vulnerabilities and gaps." },
  { num: "2", phase: "Plan", body: "Define remediation strategy and roadmap." },
  { num: "3", phase: "Remediate", body: "Implement security controls, segmentation and hardening." },
  { num: "4", phase: "Validate", body: "VAPT, scans and testing to verify effectiveness." },
  { num: "5", phase: "Comply", body: "Documentation, policies and audit readiness." },
  { num: "6", phase: "Continuously Improve", body: "Monitor, review and enhance security posture." },
];

const businessImpact = [
  { title: "Transaction Continuity", body: "Continued ability to process credit card transactions without interruption." },
  { title: "Customer Trust", body: "Enhanced customer trust and brand reputation." },
  { title: "Scalable Security", body: "Scalable, cost-effective security architecture for future growth." },
  { title: "Ongoing Compliance", body: "Strong foundation for ongoing compliance and risk management." },
];

export default function PciDssCaseStudy() {
  const rootRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("achievements");

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pci-hero-fade", { opacity: 0, y: 20, duration: 0.9, ease: EXPO, stagger: 0.08 });
      gsap.utils.toArray<HTMLElement>(".pci-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: EXPO,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      if (railRef.current) {
        gsap.fromTo(
          railRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            ease: "none",
            scrollTrigger: {
              trigger: railRef.current.parentElement!,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={rootRef} className="bg-[#fcf9f8] text-[#1c1b1b]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e2bebd]/60 bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="pci-hero-fade inline-flex items-center gap-2 rounded-full border border-[#b31c33]/30 bg-[#b31c33]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                Case Study
              </div>
              <h1 className="pci-hero-fade mt-6 font-headline text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                <span className="text-[#b31c33]">PCI DSS Compliance</span> for a Renowned Grocery Store Outlet Chain in Illinois
              </h1>
              <p className="pci-hero-fade mt-6 max-w-2xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                During the pandemic in 2020, a leading grocery store chain in Illinois experienced an unprecedented surge in credit card transactions. A major payment brand mandated PCI DSS Level 2 compliance within a stringent timeline. DCC was engaged as the Program Manager to drive end-to-end compliance without disrupting business operations.
              </p>
              <div className="pci-hero-fade mt-8 flex flex-wrap gap-2">
                {["PCI DSS", "SAQ D", "17 Locations", "Zero Downtime", "Retail"].map((b) => (
                  <span key={b} className="rounded-full border border-[#e2bebd]/70 bg-[#fcf9f8] px-3 py-1 text-xs font-medium text-[#5a4040]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="pci-hero-fade lg:col-span-5">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-[#e2bebd]/60 shadow-lg">
                <Image
                  src={HERO_IMG}
                  alt="Grocery store payment"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky tab nav */}
      <nav className="hidden">
        <div className="flex gap-1 overflow-x-auto px-4 py-2">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeId === s.id ? "bg-[#b31c33] text-white" : "text-[#5a4040] hover:bg-[#fcf9f8]"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">On This Page</div>
              <nav className="mt-4 space-y-1">
                {navSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block rounded-lg border-l-2 px-3 py-2 text-sm transition ${
                      activeId === s.id
                        ? "border-[#b31c33] bg-[#fcf9f8] font-semibold text-[#b31c33]"
                        : "border-transparent text-[#5a4040] hover:bg-[#fcf9f8] hover:text-[#1c1b1b]"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#e2bebd]/60">
                <div className="relative aspect-[4/3]">
                  <Image src={SIDEBAR_IMG} alt="Retail compliance" fill sizes="240px" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">Talk to Us</div>
                  <p className="mt-2 text-sm text-[#5a4040]">Need PCI DSS compliance? Let&apos;s connect.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-20 lg:col-span-9">
            <section id="achievements" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Achievements</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Compliance delivered. Operations intact.</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {achievements.map((a) => (
                  <div key={a} className="flex items-center gap-3 rounded-xl border border-[#e2bebd]/70 bg-white px-5 py-4">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#b31c33] text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#1c1b1b]">{a}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="challenges" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Business Challenges</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Seven obstacles to PCI compliance.</h2>
              <ol className="mt-8 space-y-3">
                {businessChallenges.map((c, i) => (
                  <li key={i} className="flex gap-4 rounded-xl border border-[#b31c33]/20 bg-[#fecdd3]/20 p-5">
                    <div className="font-headline text-xl font-semibold text-[#b31c33]">{String(i + 1).padStart(2, "0")}</div>
                    <p className="text-sm leading-relaxed text-[#1c1b1b]">{c}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="solutions" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Solution Delivered</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Eight workstreams driving compliance.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {solutionsDelivered.map((s, i) => (
                  <article key={s.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-sm font-semibold text-[#b31c33]">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 font-headline text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{s.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="outcomes" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Key Outcomes</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Compliance, continuity and capability.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {keyOutcomes.map((o) => (
                  <article key={o.title} className="rounded-2xl border border-[#15803d]/30 bg-[#bbf7d0]/20 p-6">
                    <h3 className="font-headline text-base font-semibold text-[#15803d]">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1c1b1b]">{o.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="lifecycle" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Our Approach — End to End PCI DSS Compliance Lifecycle</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Six phases from assessment to continuous improvement.</h2>

              {/* Desktop horizontal timeline */}
              <div className="relative mt-12 hidden lg:block">
                <div className="absolute left-0 right-0 top-7 h-px bg-[#e2bebd]" />
                <div ref={railRef} className="absolute left-0 right-0 top-7 h-px bg-[#b31c33]" />
                <ol className="relative grid grid-cols-6 gap-3">
                  {processSteps.map((s) => (
                    <li key={s.num} className="flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#b31c33] bg-white font-headline text-lg font-semibold text-[#b31c33]">
                        {s.num}
                      </div>
                      <h3 className="mt-4 font-headline text-sm text-[#1c1b1b]">{s.phase}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#5a4040]">{s.body}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Mobile vertical */}
              <ol className="mt-8 space-y-3 lg:hidden">
                {processSteps.map((s) => (
                  <li key={s.num} className="flex gap-4 rounded-2xl border border-[#e2bebd]/70 bg-white p-5">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#b31c33] font-headline text-base font-semibold text-white">{s.num}</div>
                    <div>
                      <h3 className="font-headline text-base">{s.phase}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#5a4040]">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="impact" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Business Impact</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Continuity, trust and a foundation for growth.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {businessImpact.map((m) => (
                  <article key={m.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <h3 className="font-headline text-lg text-[#b31c33]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{m.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="testimonial" className="pci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Testimonial</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">In the client&apos;s words.</h2>
              <div className="relative mt-8 rounded-3xl border border-[#e2bebd]/70 bg-white p-8 shadow-sm lg:p-12">
                <div className="absolute -top-6 left-10 font-headline text-7xl leading-none text-[#b31c33]/30 select-none">&ldquo;</div>
                <blockquote className="font-headline text-xl italic leading-relaxed text-[#1c1b1b] lg:text-2xl">
                  Illumia Solutions played a critical role in helping us achieve PCI DSS compliance on time, within budget, and without impacting our business. Their expertise, leadership and use of open source technologies delivered exceptional value.
                </blockquote>
                <footer className="mt-6 text-sm font-semibold text-[#b31c33]">
                  — IT Director, Grocery Store Chain (Illinois)
                </footer>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
