"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80";
const SIDEBAR_IMG =
  "https://images.unsplash.com/photo-1614064548237-096d4b40ebc7?auto=format&fit=crop&w=600&q=80";

const navSections = [
  { id: "overview", label: "Client Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "approach", label: "Our Approach" },
  { id: "stack", label: "Technology Stack" },
  { id: "lifecycle", label: "Cybersecurity Lifecycle" },
  { id: "benefits", label: "Key Benefits Delivered" },
  { id: "impact", label: "Business Impact" },
  { id: "closing", label: "Closing" },
];

const overview = [
  "One of the largest nonprofit microfinance institutions in the Philippines, serving underserved communities across the country.",
  "Distributed operations across multiple regions.",
  "Handles sensitive financial and personal data.",
  "Subject to regulatory and donor compliance.",
  "Cost-sensitive yet security-critical environment.",
];

const challenges = [
  {
    title: "Limited Visibility",
    body: "Lack of endpoints, network monitoring and visibility consistency across infrastructure.",
  },
  {
    title: "Security Gaps",
    body: "Weak processes, vulnerable endpoints, and limited compliance with framework requirements.",
  },
  {
    title: "Weak Processes",
    body: "Inadequate policies, procedures and internal vulnerability assessment processes.",
  },
  {
    title: "Vulnerability Risks",
    body: "Static security scans missed evolving threats and growing system risks.",
  },
  {
    title: "Cost Constraints",
    body: "Premium security tools required heavy investment with limited ROI clarity.",
  },
];

const stackCategories = {
  detection: { label: "Detection & Monitoring", color: "#2563eb", tint: "#dbeafe" },
  vulnerability: { label: "Vulnerability & Assessment", color: "#ea580c", tint: "#ffedd5" },
  response: { label: "Response & Analysis", color: "#b31c33", tint: "#fecdd3" },
  governance: { label: "Governance & Policy", color: "#15803d", tint: "#bbf7d0" },
} as const;

type Cat = keyof typeof stackCategories;

const tools: { name: string; note: string; cat: Cat }[] = [
  { name: "OpenVAS", note: "Vulnerability Detection", cat: "vulnerability" },
  { name: "Wazuh", note: "Threat Detection, Integrity, Monitoring", cat: "detection" },
  { name: "Graylog", note: "Centralized Log Mgmt & Analysis", cat: "detection" },
  { name: "VAPT as a Service", note: "Recurring 3rd-party Pentest", cat: "vulnerability" },
  { name: "Nessus Pro", note: "Premium Scanning & Assessment", cat: "vulnerability" },
  { name: "Cuckoo Sandbox", note: "Malware Sample Analysis", cat: "response" },
  { name: "Snort / Suricata", note: "IDS Network Intrusion", cat: "detection" },
  { name: "POAM Mgr.", note: "Plan of Action & Milestones", cat: "governance" },
];

const lifecycle = [
  { phase: "1. Deploy", body: "Deploy SIEM, EDR, scanning tools and inspect/setup infrastructure." },
  { phase: "2. Assess", body: "Vulnerability scans, penetration tests and configuration audits." },
  { phase: "3. Remediate", body: "Patch issues, harden systems and remediate findings." },
  { phase: "4. Monitor & Respond", body: "Continuous SOC monitoring and threat response." },
  { phase: "5. Govern & Improve", body: "Policies, awareness programs and continuous improvement." },
];

const benefits = [
  { title: "Open Source", body: "Significant reduction in software licensing & tool expenses." },
  { title: "Better Security", body: "Enterprise-grade security without enterprise price tag." },
  { title: "Unified Operations", body: "One integrated platform for all key operations." },
  { title: "Improved Collaboration", body: "Seamless file sharing, email & approvals across ~1,000 branches." },
  { title: "Scalable & Future-Ready", body: "Easily supports growth and evolving business needs." },
  { title: "More Privacy & Immunity", body: "On-prem infrastructure ensures data privacy, confidentiality and immunity towards being observed." },
];

const impactItems = [
  {
    title: "Stronger Security Posture",
    body: "Real-time visibility, threat detection, and rapid response across endpoints.",
  },
  {
    title: "Compliance & Audit Ready",
    body: "Documentation, evidence-ready logs, and structured policies.",
  },
  {
    title: "Significant Cost Savings",
    body: "Replaced premium security tools with high-performing open source alternatives.",
  },
  {
    title: "Operational Efficiency",
    body: "Centralized incident management & streamlined workflows for IT teams.",
  },
  {
    title: "Full Control & Data Sovereignty",
    body: "On-premise framework ensures no dependency on external observation.",
  },
];

export default function CybersecurityCaseStudy() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cy-hero-fade", { opacity: 0, y: 20, duration: 0.9, ease: EXPO, stagger: 0.08 });
      gsap.utils.toArray<HTMLElement>(".cy-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: EXPO,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
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
              <div className="cy-hero-fade inline-flex items-center gap-2 rounded-full border border-[#b31c33]/30 bg-[#b31c33]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                Case Study
              </div>
              <h1 className="cy-hero-fade mt-6 font-headline text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Strengthening <span className="text-[#b31c33]">Cybersecurity &amp; Compliance</span> with Open Source Technologies
              </h1>
              <p className="cy-hero-fade mt-6 font-headline text-xl italic text-[#5a4040] lg:text-2xl">
                Securing and Empowering Impact at Scale
              </p>
              <p className="cy-hero-fade mt-6 max-w-2xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                Illumia Solutions partnered with one of the largest nonprofit microfinance institutions in the Philippines to design and implement a comprehensive cybersecurity ecosystem using open source technologies and proven security solutions.
              </p>
              <div className="cy-hero-fade mt-8 flex flex-wrap gap-2">
                {["SIEM", "VAPT", "Compliance", "On-Premise", "Open Source"].map((b) => (
                  <span key={b} className="rounded-full border border-[#e2bebd]/70 bg-[#fcf9f8] px-3 py-1 text-xs font-medium text-[#5a4040]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="cy-hero-fade lg:col-span-5">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-[#e2bebd]/60 shadow-lg">
                <Image
                  src={HERO_IMG}
                  alt="Cybersecurity operations center"
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
      <nav className="sticky top-16 z-30 border-b border-[#e2bebd]/60 bg-white/95 backdrop-blur lg:hidden">
        <div className="flex gap-1 overflow-x-auto px-4 py-2">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeId === s.id
                  ? "bg-[#b31c33] text-white"
                  : "text-[#5a4040] hover:bg-[#fcf9f8]"
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
                  <Image src={SIDEBAR_IMG} alt="Security" fill sizes="200px" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">Talk to Us</div>
                  <p className="mt-2 text-sm text-[#5a4040]">Planning a similar transformation? We can help.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-20 lg:col-span-9">
            <section id="overview" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Client Overview</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A nonprofit at scale, with stakes that match.</h2>
              <ul className="mt-6 space-y-3">
                {overview.map((o, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-[#e2bebd]/60 bg-white p-4 text-[15px] leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[#b31c33]" />
                    <span className="text-[#1c1b1b]">{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="challenge" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">The Challenge</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Five gaps standing between today and resilience.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {challenges.map((c, i) => (
                  <article key={c.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-xl font-semibold text-[#b31c33]">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-3 font-headline text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{c.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="approach" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Our Approach &amp; Solution Architecture</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">An integrated cybersecurity framework.</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5a4040]">
                We designed an integrated cybersecurity framework combining open source technologies, on-premise infrastructure and industry-leading solutions to deliver full visibility, protection, control, and compliance.
              </p>
              <div className="mt-8 rounded-2xl border border-[#b31c33]/30 bg-[#fcf9f8] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Proxmox HCI Infrastructure</div>
                <div className="mt-1 font-headline text-lg text-[#1c1b1b]">Secure • Reliable • Scalable</div>
              </div>
            </section>

            <section id="stack" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Technology Stack</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Open source tools layered for coverage.</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {Object.entries(stackCategories).map(([k, c]) => (
                  <div key={k} className="flex items-center gap-2 text-xs">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-[#5a4040]">{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {tools.map((t) => {
                  const c = stackCategories[t.cat];
                  return (
                    <div
                      key={t.name}
                      className="rounded-2xl border bg-white p-5"
                      style={{ borderColor: c.color + "55" }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                        <div className="font-headline text-base font-semibold" style={{ color: c.color }}>
                          {t.name}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{t.note}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="lifecycle" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">End-to-End Cybersecurity Lifecycle</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Five-phase operating model.</h2>
              <div className="mt-8 space-y-4">
                {lifecycle.map((p, i) => (
                  <div key={p.phase} className="flex gap-5 rounded-2xl border border-[#e2bebd]/70 bg-white p-5">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#b31c33] font-headline text-lg text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-headline text-lg text-[#1c1b1b]">{p.phase.replace(/^\d+\.\s*/, "")}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#5a4040]">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Key Benefits Delivered</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">What the client gained.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((b) => (
                  <article key={b.title} className="rounded-2xl border border-[#e2bebd]/70 bg-[#fcf9f8] p-5">
                    <h3 className="font-headline text-base text-[#b31c33]">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{b.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="impact" className="cy-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Business Impact</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Long-term protection, without long-term cost.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {impactItems.map((m) => (
                  <article key={m.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <h3 className="font-headline text-lg text-[#b31c33]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{m.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="closing" className="cy-rise scroll-mt-32">
              <blockquote className="rounded-2xl border-l-4 border-[#b31c33] bg-[#fcf9f8] p-8 font-headline text-xl italic leading-relaxed text-[#1c1b1b] lg:text-2xl">
                The integrated solution has transformed how security posture is built, scaled and sustained — delivering long-term protection without long-term cost. We now have visibility, structured policies and a security framework built for the future.
              </blockquote>
              <p className="mt-8 text-sm leading-relaxed text-[#5a4040]">
                <strong className="text-[#1c1b1b]">About Illumia Solutions —</strong> We help organizations strengthen their cybersecurity using open source technologies, integrated frameworks and industry best practices.
              </p>
              <p className="mt-4 font-headline text-base text-[#b31c33]">Secure. Compliant. Cost-Effective.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
