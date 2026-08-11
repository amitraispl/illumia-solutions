"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "/images/case-studies/forceten-hero.jpg";
const SIDEBAR_IMG =
  "/images/case-studies/forceten-sidebar.jpg";

const navSections = [
  { id: "glance", label: "At A Glance" },
  { id: "background", label: "Background" },
  { id: "challenges", label: "The Challenges" },
  { id: "solution", label: "Solution Proposed" },
  { id: "implementation", label: "Implementation" },
  { id: "before-after", label: "Before vs. After" },
  { id: "outcomes", label: "Outcomes" },
];

const glance = [
  { value: "80%", label: "Licensing Cost Reduction" },
  { value: "Zero", label: "VMs Lost in Transition" },
  { value: "$0", label: "New Hardware Capex" },
  { value: "5", label: "Migration Phases" },
];

const challenges = [
  {
    title: "Licensing Cost Review",
    body: "FTT's platform licensing was due for renewal under a subscription model. Leadership targeted a structural reduction in recurring virtualisation spend without reducing capability.",
  },
  {
    title: "Backup Infrastructure Tied to the Platform",
    body: "FTT's data protection was built entirely around Veeam Backup & Replication — a capable solution, but one adding licensing overhead on top of VMware. With migration inevitable, retaining Veeam meant carrying a redundant cost misaligned with the new direction.",
  },
  {
    title: "Workload Continuity Risk",
    body: "Workloads carried unequal downtime tolerance — 40% Critical (max 1 hour), 30% Medium (up to 4 hours), and 30% Low (up to 24 hours), every window restricted to weekends and off-hours. Exceeding thresholds risked financial disruption and reputational exposure.",
  },
  {
    title: "No New Hardware Permitted",
    body: "FTT held a firm position of zero new hardware procurement. The entire migration and new platform commissioning had to execute within the existing physical footprint — leaving no margin for error in capacity planning and sequencing.",
  },
  {
    title: "Orphaned VM Workloads",
    body: "A subset of VMs existed only within the Veeam backup repository with no active presence in VMware. These workloads still held business relevance and needed to be recovered and re-platformed — adding a further layer of complexity to migration scope.",
  },
];

const solutionItems = [
  {
    title: "Proxmox VE as Target Platform",
    body: "Built on the KVM hypervisor and LXC containers, Proxmox VE was recommended for its per-host licensing elimination, native VMware migration tooling, cluster-native HA and live migration, full iSCSI/Fibre Channel SAN compatibility, and Proxmox's official enterprise subscription support.",
  },
  {
    title: "Phased Rolling Node Migration",
    body: "Given the no-new-hardware constraint and tiered downtime sensitivity, ISPL proposed migrating node by node rather than a bulk cutover — the VMware cluster staying operational throughout, each Proxmox VE node validated before the next host was decommissioned, critical workloads migrated last.",
  },
  {
    title: "Existing SAN Infrastructure Reused",
    body: "Rather than introducing new storage, ISPL leveraged the existing dual SAN setup. The ~40% available headroom was sufficient to carve dedicated LUNs for the Proxmox VE cluster without disrupting active VMware workloads during the transition.",
  },
  {
    title: "Recovery of Orphaned VMs",
    body: "VMs present only in the Veeam repository were restored directly via Veeam's standard VM restore procedure and onboarded into the Proxmox VE cluster as part of migration scope — ensuring no workload was left behind.",
  },
  {
    title: "Proxmox Backup Server Replaces Veeam",
    body: "Both Veeam servers were repurposed as Proxmox Backup Server nodes — mirroring the existing on-site primary / off-site replica design, with encryption at rest applied to all backup data, consistent with financial-sector data security expectations.",
  },
];

const phases = [
  {
    num: "01",
    title: "Initial Proxmox VE Cluster Commissioning",
    body: "Without touching any active workload, ISPL identified the VMware hosts running lowest-priority VMs and consolidated those onto remaining hosts — freeing two physical hosts. These were cleanly removed from vSphere, installed with Proxmox VE, and formed a 2-node PVE cluster. New LUNs were carved from existing SAN headroom and integrated as shared storage.",
  },
  {
    num: "02",
    title: "Initial Workload Migration to Proxmox VE",
    body: "VMs from the two freed VMware hosts were migrated using Proxmox VE's built-in VMware migration tool — no third-party utilities. An offline method was chosen: clean shutdown before transfer to guarantee data consistency. Each VM was brought online and performance-validated with application owners before the next was started.",
  },
  {
    num: "03",
    title: "Rolling Node-by-Node Migration",
    body: "For every remaining VMware host: workloads evacuated to other VMware nodes → host removed from vSphere → Proxmox VE installed → host joined the growing PVE cluster → VMs migrated offline → validated with application owners. Repeated until all hosts had been re-provisioned as Proxmox VE nodes. All migrations stayed within their downtime-tier windows.",
  },
  {
    num: "04",
    title: "Recovery of Orphaned VM Workloads",
    body: "VMs existing only in the Veeam backup repository were restored directly from the Veeam backup server following Veeam's standard restore procedure, brought online within the Proxmox VE cluster, and validated — confirming the recovered workloads functioned as expected.",
  },
  {
    num: "05",
    title: "PBS Commissioning & Veeam Decommissioning",
    body: "Both Veeam servers were decommissioned and repurposed as PBS nodes: a primary on-site PBS datastore integrated with the PVE cluster running scheduled backups with encryption at rest, and an off-site PBS node configured for encrypted replication. End-to-end backup and restore workflow validated before sign-off.",
  },
];

const workloadTable = [
  { category: "Critical", share: "40%", window: "Max 1 hour (weekends, off-hours only)" },
  { category: "Medium", share: "30%", window: "Up to 4 hours (weekends, off-hours only)" },
  { category: "Low", share: "30%", window: "Up to 24 hours (weekends, off-hours only)" },
];

const beforeItems = [
  "Multi-node VMware vSphere cluster under subscription licensing",
  "Veeam Backup & Replication adding additional licensing overhead",
  "Dual SAN underutilised — ~40% headroom unused",
  "Orphaned VMs stranded in backup repository only",
  "No data protection encryption at rest",
  "Full vendor lock-in to a proprietary virtualization stack",
];

const afterItems = [
  "Proxmox VE cluster — open-source enterprise hypervisor, zero per-host licensing",
  "Proxmox Backup Server replacing Veeam — integrated, no extra licensing",
  "Existing dual SAN fully leveraged — zero new storage hardware purchased",
  "All orphaned VMs recovered and running in production",
  "Encryption at rest on all backup data, on-site and off-site",
  "Platform independence on open standards — no vendor lock-in",
];

const outcomes = [
  { value: "80%", title: "Licensing Cost Reduction", body: "The most immediate and quantifiable outcome — directly addressing the financial pressure that initiated the project." },
  { value: "0", title: "VMs Lost in Transition", body: "Complete workload migration including successful recovery of orphaned VMs from the Veeam repository." },
  { value: "0", title: "Downtime Threshold Breaches", body: "Every migration scheduled within permissible windows — Critical within 1 hour, no exceptions." },
  { value: "$0", title: "Capital Expenditure", body: "The entire transformation executed within the existing hardware footprint — a purely service-driven engagement." },
];

export default function ForcetenMigrationCaseStudy() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("glance");

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pm-hero-fade", { opacity: 0, y: 20, duration: 0.9, ease: EXPO, stagger: 0.08 });
      gsap.utils.toArray<HTMLElement>(".pm-rise").forEach((el) => {
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
            <div className="lg:col-span-8">
              <div className="pm-hero-fade flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b31c33]/30 bg-[#b31c33]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                  Case Study
                </div>
                <time dateTime="2026-08-08" className="text-xs font-medium text-[#8e706f]">
                  Updated August 8, 2026
                </time>
              </div>
              <h1 className="pm-hero-fade mt-6 font-headline text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Zero-Downtime VMware to Proxmox VE Migration for a <span className="text-[#b31c33]">Financial Software Developer</span>
              </h1>
              <p className="pm-hero-fade mt-6 font-headline text-xl italic text-[#5a4040] lg:text-2xl">
                Force Ten Technologies Pvt. Ltd. — Financial Software Developer
              </p>
              <p className="pm-hero-fade mt-6 max-w-3xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                Facing a virtualisation licensing renewal, Force Ten Technologies — a software developer serving
                Microfinance, NBFC, co-operative societies and rural banks — set out to reduce recurring platform costs.
                ISPL delivered a phased, rolling migration from VMware vSphere and Veeam to Proxmox VE and
                Proxmox Backup Server — zero new hardware, zero VMs lost, every downtime threshold met.
              </p>
              <div className="pm-hero-fade mt-8 flex flex-wrap gap-2">
                {["Proxmox VE", "VMware Migration", "Proxmox Backup Server", "Dual SAN", "Financial Sector", "Silver Partner"].map((b) => (
                  <span key={b} className="rounded-full border border-[#e2bebd]/70 bg-[#fcf9f8] px-3 py-1 text-xs font-medium text-[#5a4040]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="pm-hero-fade lg:col-span-4 flex flex-col items-center gap-8 lg:mt-4">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-[#e2bebd]/60 shadow-lg">
                <Image
                  src={HERO_IMG}
                  alt="Enterprise data center server infrastructure"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Scroll indicator */}
              <style>{`
                @keyframes pm-scroll-dot {
                  0%   { transform: translateY(0);    opacity: 1; }
                  65%  { transform: translateY(10px); opacity: 0; }
                  100% { transform: translateY(0);    opacity: 0; }
                }
                .pm-scroll-dot { animation: pm-scroll-dot 1.8s cubic-bezier(0.45,0,0.55,1) infinite; }
              `}</style>
              <div className="flex flex-col items-center gap-2.5" aria-label="Scroll down to read">
                <span className="select-none font-body text-[9px] font-bold uppercase tracking-[0.35em] text-[#b31c33]/40">Scroll</span>
                <div className="relative flex h-9 w-[22px] items-start justify-center rounded-full border border-[#b31c33]/25 pt-[7px] shadow-[0_0_0_4px_rgba(179,28,51,0.04)]">
                  <div className="pm-scroll-dot h-[7px] w-[3px] rounded-full bg-[#b31c33]/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Image src={SIDEBAR_IMG} alt="Server infrastructure" fill sizes="240px" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">Official Proxmox Partner</div>
                  <p className="mt-2 text-sm text-[#5a4040]">ISPL is an official Proxmox Silver Partner with deep enterprise infrastructure expertise.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-20 lg:col-span-9">

            {/* At a Glance */}
            <section id="glance" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">At A Glance</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">The transformation, in numbers.</h2>
              <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {glance.map((g) => (
                  <div key={g.label} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6 text-center">
                    <div className="font-headline text-3xl font-semibold text-[#b31c33] lg:text-4xl">{g.value}</div>
                    <div className="mt-2 text-sm text-[#5a4040]">{g.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Background */}
            <section id="background" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Background</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A mature enterprise setup under financial pressure.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5a4040]">
                <p>
                  Force Ten Technologies Pvt. Ltd., a software developer providing services to Microfinance, NBFC,
                  co-operative societies, rural banks and other financial institutions, operated a business-critical
                  IT infrastructure built around a multi-node VMware vSphere cluster — hosting everything from
                  mission-critical financial applications to supporting business functions, all demanding high availability.
                </p>
                <p>
                  The storage backbone was a dual SAN setup: two SAN switches connected to two SAN servers, providing
                  centralized high-performance shared storage — a well-established standard in enterprise financial
                  environments where data integrity is non-negotiable. For data protection, FTT ran Veeam Backup &amp;
                  Replication across an on-site primary and an off-site disaster recovery replica.
                </p>
                <p>
                  The environment was technically sound. The driver for change was commercial: a structural
                  reduction in recurring licensing was the objective.
                </p>
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">The Challenges</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Five compounding pressures that made the status quo untenable.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {challenges.map((c, i) => (
                  <article key={c.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-xl font-semibold text-[#b31c33]">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-3 font-headline text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{c.body}</p>
                  </article>
                ))}
              </div>

              {/* Workload downtime table */}
              <div className="mt-8">
                <div className="text-sm font-semibold text-[#1c1b1b] mb-3">Workload Downtime Classification</div>
                <div className="overflow-hidden rounded-2xl border border-[#e2bebd]/70 bg-white">
                  <table className="w-full text-sm">
                    <thead className="border-b border-[#e2bebd]/70 bg-[#fcf9f8]">
                      <tr>
                        <th className="px-5 py-3 text-left font-semibold text-[#1c1b1b]">Category</th>
                        <th className="px-5 py-3 text-left font-semibold text-[#1c1b1b]">Share</th>
                        <th className="px-5 py-3 text-left font-semibold text-[#1c1b1b]">Permissible Downtime Window</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workloadTable.map((row, i) => (
                        <tr key={row.category} className={i < workloadTable.length - 1 ? "border-b border-[#e2bebd]/50" : ""}>
                          <td className="px-5 py-3 font-medium text-[#b31c33]">{row.category}</td>
                          <td className="px-5 py-3 text-[#5a4040]">{row.share}</td>
                          <td className="px-5 py-3 text-[#5a4040]">{row.window}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Solution */}
            <section id="solution" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Solution Proposed</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A structured platform transition — entirely within existing hardware.</h2>
              <ul className="mt-8 space-y-3">
                {solutionItems.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-xl border border-[#e2bebd]/60 bg-[#fcf9f8] p-5">
                    <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#b31c33] font-headline text-sm text-white">{i + 1}</div>
                    <div>
                      <div className="font-headline text-base font-semibold text-[#1c1b1b]">{s.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-[#5a4040]">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Implementation */}
            <section id="implementation" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Implementation</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Five phases. Every workload migrated. Every threshold met.</h2>
              <p className="mt-4 text-base leading-relaxed text-[#5a4040]">
                ISPL executed the migration in carefully sequenced phases — each validated before proceeding, all
                scheduled exclusively within permitted off-hour weekend windows aligned to workload downtime tiers.
              </p>
              <div className="mt-8 space-y-4">
                {phases.map((p) => (
                  <article key={p.num} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="flex items-start gap-5">
                      <div className="flex-none font-headline text-3xl font-semibold text-[#b31c33]/30 leading-none">{p.num}</div>
                      <div>
                        <h3 className="font-headline text-lg">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{p.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Before / After */}
            <section id="before-after" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Before vs. After</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">From vendor dependency to platform independence.</h2>
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

            {/* Outcomes */}
            <section id="outcomes" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Outcomes</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Unambiguous results across every success metric.</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {outcomes.map((o) => (
                  <div key={o.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-4xl font-semibold text-[#b31c33]">{o.value}</div>
                    <h3 className="mt-3 font-headline text-base">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{o.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 rounded-2xl border-l-4 border-[#b31c33] bg-[#fcf9f8] p-6 font-headline text-lg italic text-[#1c1b1b] lg:text-xl">
                This engagement demonstrates that organizations in the financial sector need not choose between cost efficiency
                and operational resilience. Platform independence from high-cost proprietary vendors is both achievable and sustainable.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-[#5a4040]">
                <strong className="text-[#1c1b1b]">About Illumia Solutions —</strong> As an official Proxmox partner with deep enterprise
                infrastructure expertise, ISPL delivers platform transformations that protect operational continuity at every step while
                achieving transformative reductions in infrastructure overhead.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
