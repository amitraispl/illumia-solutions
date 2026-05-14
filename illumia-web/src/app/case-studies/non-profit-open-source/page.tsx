"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80";
const SIDEBAR_IMG =
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80";

const navSections = [
  { id: "glance", label: "At A Glance" },
  { id: "challenge", label: "The Challenge" },
  { id: "transformation", label: "The Transformation" },
  { id: "ecosystem", label: "Technology Ecosystem" },
  { id: "cost", label: "Cost Optimization" },
  { id: "before-after", label: "Before vs. After" },
  { id: "impact", label: "Business Impact" },
  { id: "matters", label: "Why It Matters" },
];

const glance = [
  { value: "~1,000", label: "Branches Nationwide" },
  { value: "Thousands", label: "Employees & Field Staff" },
  { value: "Diverse", label: "Geographies & Communities" },
  { value: "One Goal", label: "Financial Inclusion" },
];

const challenges = [
  { title: "High Licensing Costs", body: "Expensive licenses for email, collaboration, ERP, HR, payroll, security and more." },
  { title: "Rising Cloud Expenses", body: "Storage-heavy workloads, always-on compute and multiple cloud subscriptions were driving costs up." },
  { title: "Fragmented Systems", body: "Disconnected tools for HR, payroll, projects, approvals and communication." },
  { title: "Scalability Constraints", body: "With ~1,000 branches and a growing user base, costs were unsustainable and hard to control." },
];

const transformation = [
  "Adopted a unified open source ecosystem across infrastructure, security, productivity and business applications.",
  "Migrated from multiple proprietary and cloud-based solutions to a secure, scalable and cost-efficient on-premise environment.",
  "Enabled seamless collaboration, digital approvals and centralized operations for all branches.",
  "Achieved significant cost savings while improving control, security and operational visibility.",
  "On-premises infrastructure ensures data privacy, greater confidentiality and immunity towards external observation.",
];

const layers = [
  {
    name: "Collaboration & Productivity Stack",
    color: "#2563eb",
    tint: "#dbeafe",
    items: [
      { tool: "Nextcloud", note: "File sharing & collaboration" },
      { tool: "Decisions", note: "Digital approvals & e-signatures" },
      { tool: "Zimbra", note: "Enterprise email & calendar" },
      { tool: "Carbonio", note: "Advanced email & collaboration for managers" },
    ],
  },
  {
    name: "Business Applications Stack (ERPNext)",
    color: "#ea580c",
    tint: "#ffedd5",
    items: [
      { tool: "ERPNext HRM", note: "HRM & Recruitment" },
      { tool: "Payroll", note: "Salary, benefits, payouts" },
      { tool: "Project Mgmt.", note: "Tasks & approvals" },
      { tool: "Reports", note: "Reports & Analytics" },
      { tool: "Finance", note: "Finance & Operations" },
    ],
  },
  {
    name: "Cybersecurity & Governance Stack",
    color: "#b31c33",
    tint: "#fecdd3",
    items: [
      { tool: "Wazuh", note: "SIEM & Threat Detection" },
      { tool: "Graylog", note: "Log Management" },
      { tool: "OpenSCAP", note: "Vulnerability Assessment" },
      { tool: "Nessus Pro", note: "Network Attack Surface Detection" },
      { tool: "Nextcloud", note: "Secure Document Mgmt." },
      { tool: "Suricata", note: "Network Access Control" },
      { tool: "Redmine", note: "Workflow Mgmt." },
      { tool: "GLPI", note: "Net & Compliance" },
    ],
  },
  {
    name: "Infrastructure Layer",
    color: "#15803d",
    tint: "#bbf7d0",
    items: [{ tool: "Proxmox HCI", note: "Virtualization • Compute • Storage • High Availability" }],
  },
];

const costStats = [
  { pct: "50–70%", title: "Reduction in Software Licensing Costs", body: "Eliminated multiple SaaS subscriptions including email, collaboration, ERP, HR, payroll, security and productivity tools." },
  { pct: "40–60%", title: "Reduction in Cloud Expenses", body: "Migrated storage-heavy workloads and compute from cloud to on-premise infrastructure using Proxmox." },
  { pct: "50–65%", title: "Total IT Cost Reduction", body: "Overall savings achieved across software, cloud and operations over the next 3–5 years." },
];

const beforeItems = [
  "Multiple proprietary tools and patch solutions",
  "High per-user licensing and renewal costs",
  "Heavy cloud dependency and data outside control",
  "Manual processes and paper-based approvals",
  "Limited visibility across branches and operations",
  "Higher security spend with multiple vendors",
];

const afterItems = [
  "Unified open source technology stack",
  "One-time infrastructure investment + minimal recurring cost",
  "Centralized on-premise environment with full data sovereignty",
  "Digital workflows with Decisions for fast approvals",
  "Real-time visibility and reporting with ERPNext",
  "Enterprise-grade security without enterprise cost",
];

const impact = [
  { title: "Nationwide", body: "Empowers collaboration and productivity across ~1,000 branches." },
  { title: "Inclusive", body: "Supports diverse communities and beneficiaries with stable, accessible tools." },
  { title: "Secure", body: "Strong on-premise security ensures confidentiality and regulatory readiness." },
  { title: "Scalable", body: "Designed to grow with the organization’s expanding mission and reach." },
];

const matters = [
  { title: "More Impact", body: "Lower IT costs mean more resources for community programs and beneficiaries." },
  { title: "Built to Scale", body: "Flexible architecture that grows with the organization, branches, services and people." },
  { title: "Sustainable", body: "Long-term cost-effective IT operations aligned with non-profit mission." },
  { title: "Future-Ready", body: "Open standards, modern technology, foundation built for innovation, expansion and digital resilience." },
];

export default function NonProfitCaseStudy() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("glance");

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".np-hero-fade", { opacity: 0, y: 20, duration: 0.9, ease: EXPO, stagger: 0.08 });
      gsap.utils.toArray<HTMLElement>(".np-rise").forEach((el) => {
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
              <div className="np-hero-fade inline-flex items-center gap-2 rounded-full border border-[#b31c33]/30 bg-[#b31c33]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                Case Study
              </div>
              <h1 className="np-hero-fade mt-6 font-headline text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Driving <span className="text-[#b31c33]">50–65% IT Cost Reduction</span> &amp; Digital Transformation with Open Source Infrastructure
              </h1>
              <p className="np-hero-fade mt-6 font-headline text-xl italic text-[#5a4040] lg:text-2xl">
                A Leading Non-Profit Microfinance Institution in the Philippines
              </p>
              <p className="np-hero-fade mt-6 max-w-2xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                Operating ~1,000 branches across the Philippines, the organization transformed its IT landscape with an integrated open source stack — dramatically reducing costs while improving collaboration, security and operational efficiency.
              </p>
              <div className="np-hero-fade mt-8 flex flex-wrap gap-2">
                {["Open Source", "ERPNext", "Proxmox", "On-Premise", "Non-Profit"].map((b) => (
                  <span key={b} className="rounded-full border border-[#e2bebd]/70 bg-[#fcf9f8] px-3 py-1 text-xs font-medium text-[#5a4040]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="np-hero-fade lg:col-span-5">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-[#e2bebd]/60 shadow-lg">
                <Image
                  src={HERO_IMG}
                  alt="Community microfinance"
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
                  <Image src={SIDEBAR_IMG} alt="Community" fill sizes="240px" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">Talk to Us</div>
                  <p className="mt-2 text-sm text-[#5a4040]">Planning a similar transformation? We can help.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-20 lg:col-span-9">
            <section id="glance" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">At A Glance</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A nationwide nonprofit, in numbers.</h2>
              <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {glance.map((g) => (
                  <div key={g.label} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6 text-center">
                    <div className="font-headline text-3xl font-semibold text-[#b31c33] lg:text-4xl">{g.value}</div>
                    <div className="mt-2 text-sm text-[#5a4040]">{g.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="challenge" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">The Challenge</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A growing nonprofit pressed by costs and complexity.</h2>
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

            <section id="transformation" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">The Transformation</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">One stack. Built end-to-end on open source.</h2>
              <ul className="mt-8 space-y-3">
                {transformation.map((t, i) => (
                  <li key={i} className="flex gap-4 rounded-xl border border-[#e2bebd]/60 bg-[#fcf9f8] p-5">
                    <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#b31c33] font-headline text-sm text-white">{i + 1}</div>
                    <p className="text-[15px] leading-relaxed text-[#1c1b1b]">{t}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="ecosystem" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Our Open Source Technology Ecosystem</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A layered stack that serves ~1,000 branches.</h2>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border-2 border-dashed border-[#8e706f]/40 bg-white p-5 text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a4040]">Users</div>
                  <div className="mt-1 font-headline text-lg text-[#1c1b1b]">
                    ~1,000 Branches • Central Office &amp; Remote Operations across the Philippines
                  </div>
                </div>
                {layers.map((layer) => (
                  <div
                    key={layer.name}
                    className="rounded-2xl border bg-white p-5"
                    style={{ borderColor: layer.color, backgroundColor: layer.tint + "33" }}
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="font-headline text-base font-semibold uppercase tracking-wide" style={{ color: layer.color }}>
                        {layer.name}
                      </h3>
                      <div className="h-px flex-1" style={{ backgroundColor: layer.color, opacity: 0.3 }} />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                      {layer.items.map((it) => (
                        <div key={it.tool} className="rounded-lg border bg-white p-3 text-left" style={{ borderColor: layer.color + "55" }}>
                          <div className="font-headline text-sm font-semibold" style={{ color: layer.color }}>{it.tool}</div>
                          <div className="mt-1 text-xs leading-snug text-[#5a4040]">{it.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="cost" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Significant Cost Optimization Achieved</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Measurable reductions across every layer.</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {costStats.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-4xl font-semibold text-[#b31c33]">{s.pct}</div>
                    <h3 className="mt-3 font-headline text-base">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{s.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 rounded-2xl border-l-4 border-[#b31c33] bg-[#fcf9f8] p-6 font-headline text-lg italic text-[#1c1b1b] lg:text-xl">
                Millions in savings over the next 3–5 years, enabling more resources to reach and empower communities.
              </p>
            </section>

            <section id="before-after" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Before vs. After Transformation</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">From fragmented &amp; expensive to unified &amp; efficient.</h2>
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#b31c33]/30 bg-[#fecdd3]/30 p-6">
                  <div className="font-headline text-sm font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Before</div>
                  <ul className="mt-4 space-y-3">
                    {beforeItems.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-[#1c1b1b]">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#b31c33]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#15803d]/30 bg-[#bbf7d0]/30 p-6">
                  <div className="font-headline text-sm font-semibold uppercase tracking-[0.2em] text-[#15803d]">After</div>
                  <ul className="mt-4 space-y-3">
                    {afterItems.map((a) => (
                      <li key={a} className="flex gap-3 text-sm leading-relaxed text-[#1c1b1b]">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#15803d]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="impact" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Business Impact at Scale</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Outcomes that reach every branch.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {impact.map((m) => (
                  <article key={m.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <h3 className="font-headline text-lg text-[#b31c33]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{m.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="matters" className="np-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Why It Matters</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Open source. Real impact. Lasting value.</h2>
              <p className="mt-4 text-base leading-relaxed text-[#5a4040]">
                Building secure, scalable and cost-effective IT ecosystems for mission-driven organizations.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {matters.map((m) => (
                  <article key={m.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <h3 className="font-headline text-lg text-[#b31c33]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{m.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-10 text-sm leading-relaxed text-[#5a4040]">
                <strong className="text-[#1c1b1b]">About Illumia Solutions —</strong> We help organizations build secure, scalable and cost-effective IT environments using open source technologies and industry-leading practices.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
