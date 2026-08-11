"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "/images/case-studies/lbf-hero.jpg";
const SIDEBAR_IMG =
  "/images/case-studies/lbf-sidebar.jpg";

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
  { value: "50+", label: "VMs Across Two HCI Clusters" },
  { value: "Zero", label: "IOPS-Driven Interruptions" },
  { value: "5,000+", label: "Employees Served" },
  { value: "24/7", label: "AMC & Managed Services" },
];

const challenges = [
  {
    title: "Fragmented Bare-Metal Servers",
    body: "Each major application — email, cloud storage, web meetings — ran on its own dedicated physical server with limited CPU, memory and HDD resources and no virtualization layer. Capacity could not be shared, and recovery from hardware failure was slow.",
  },
  {
    title: "No High Availability or Consolidation",
    body: "With siloed servers, there was no built-in HA across workloads and no way to pool compute and storage — leaving stranded capacity and isolated bottlenecks as operational complexity grew with every new service.",
  },
  {
    title: "Inconsistent Backup & Recovery",
    body: "A standardised backup and recovery approach was needed to protect all virtualised workloads — not just a subset — as Lifebank scaled to support its 5,000+ employees and internal users across email, collaboration and learning.",
  },
  {
    title: "Emerging High-IOPS Demand",
    body: "After the first HCI migration, ERP, LMS, data science and expanded security tooling were onboarded. Over years, mail, file and analytical workloads turned increasingly I/O-intensive, pushing the limits of the original HDD/SSD cluster's storage performance.",
  },
  {
    title: "User Experience & Continuity Risk",
    body: "IOPS-hungry workloads experienced latency and throughput constraints during peak usage, with occasional performance-related interruptions — even as the broader estate stayed stable. Productivity for critical services had to be protected.",
  },
  {
    title: "Growth Without Rip-and-Replace",
    body: "Lifebank wanted to add capacity, not discard the original HCI investment. The HDD/SSD cluster still had an important role; a high-performance tier was needed alongside it, with weekend cutovers and a continued open-source, no-lock-in strategy.",
  },
];

const solutionItems = [
  {
    title: "Open-Source HCI as the Core Platform",
    body: "A Proxmox-based hyperconverged infrastructure standardised compute, storage and backup on open source: Proxmox VE for clustering and HA, Ceph distributed storage on HDD/SSD drives, and an end-to-end open stack (mail, cloud, web meeting, NMS, SIEM) keeping licensing exposure under control.",
  },
  {
    title: "Bare-Metal to HCI Consolidation",
    body: "The first stage migrated Lifebank's core services off dedicated bare-metal servers and onto the Proxmox HCI platform — centralising workloads, enabling scale-out capacity and HA, and establishing a single resilient virtualised foundation.",
  },
  {
    title: "Progressive HCI Expansion, Not Rip-and-Replace",
    body: "Rather than replacing the original cluster, ISPL designed a progressive expansion: the HDD/SSD cluster stays in production for suitable workloads, while a new NVMe/SSD cluster handles high-IOPS demand — both integrated under shared backup, monitoring and logging as one logical estate.",
  },
  {
    title: "Dedicated NVMe/SSD Cluster for High-IOPS",
    body: "A new NVMe and SSD-based HCI cluster at the central office delivered substantially higher IOPS and lower latency — increasing high-IOPS capacity by several times. Critical applications were selected from monitoring data and user experience, then migrated to free resources on the original platform.",
  },
  {
    title: "Unified Backup & Data Protection with PBS",
    body: "Proxmox Backup Server protected both clusters: daily image-level VM backups to an on-site PBS node, replication to an off-site PBS node for DR, quarterly restore drills to validate recoverability, and backup monitoring folded into the broader operations stack.",
  },
  {
    title: "Comprehensive AMC & Managed Services",
    body: "From commissioning onward, ISPL ran operations and maintenance of both clusters and HCI networking, VM lifecycle management, monitoring and security, administration of key apps, and regular VAPT/WAPT assessments — translating the design into sustained performance and reliability.",
  },
];

const phases = [
  {
    num: "01",
    title: "Transition from Bare Metal to HCI",
    body: "ISPL assessed the existing bare-metal servers hosting email, cloud and web meeting services, designed and commissioned the initial Proxmox VE + Ceph HDD/SSD cluster, migrated services from dedicated physical servers into VMs, and validated performance, availability and functionality with application owners.",
  },
  {
    num: "02",
    title: "Unified Backup & Operations",
    body: "With the bare-metal to HCI migration complete and stable, ISPL deployed Proxmox Backup Server as the backbone of VM protection — daily on-site backups with off-site replication — and set up monitoring, logging and security tooling, onboarding AMC and managed services across the stack.",
  },
  {
    num: "03",
    title: "Performance Monitoring & High-IOPS Identification",
    body: "Over several years of growth, ISPL continuously analysed resource usage and I/O patterns across VMs, identified IOPS-intensive and latency-sensitive workloads — specific mail, file and analytical applications — and correlated monitoring data with user feedback to confirm which services were most impacted.",
  },
  {
    num: "04",
    title: "Deployment of the NVMe/SSD High-Performance Cluster",
    body: "In response to observed IOPS starvation and growth, ISPL designed and commissioned a new NVMe/SSD HCI cluster at the central office, integrated it with existing backup, logging and monitoring so both clusters run as one estate, and configured high-speed dedicated storage networking. The cluster was validated before any production workloads moved.",
  },
  {
    num: "05",
    title: "Migration of Selected High-IOPS Workloads",
    body: "ISPL selected target VMs from monitoring data and user-experience impact, then executed controlled cutovers during weekend windows to avoid business-hours downtime — migrating selected VMs from the original cluster to the NVMe/SSD cluster and validating performance improvements with application owners.",
  },
  {
    num: "06",
    title: "Continuous Operations, Optimisation & Assurance",
    body: "Under ongoing AMC, ISPL monitors both clusters and key applications, runs regular capacity reviews, performs quarterly backup/restore drills and periodic VAPT/WAPT assessments, and continuously tunes workloads across the two clusters to balance performance, resilience and resource utilisation.",
  },
];

const beforeItems = [
  "Siloed bare-metal servers — one application per physical host",
  "Limited ability to pool compute and storage resources",
  "No built-in high availability across workloads",
  "Inconsistent backup, protecting only a subset of services",
  "High-IOPS workloads hitting storage performance limits",
  "Occasional performance-related interruptions at peak usage",
];

const afterItems = [
  "Two-cluster Proxmox HCI estate hosting 50+ VMs",
  "Core services consolidated from bare metal into virtual machines",
  "Dedicated NVMe/SSD tier — high-IOPS capacity up several times",
  "IOPS-driven interruptions dropped from frequent to zero",
  "Daily on-site PBS backups with off-site replication and restore drills",
  "Fully open-source stack — no proprietary licensing lock-in",
];

const outcomes = [
  { value: "50+", title: "VMs Consolidated", body: "A unified, virtualised infrastructure across two production HCI clusters, replacing fragmented bare-metal servers." },
  { value: "Several×", title: "High-IOPS Capacity", body: "High-IOPS capacity increased several times over the original cluster after the NVMe deployment." },
  { value: "0", title: "IOPS Interruptions", body: "Unplanned interruptions for IOPS-hungry applications dropped from frequent incidents to zero." },
  { value: "On/Off-site", title: "Data Protection", body: "Daily PBS backups with off-site replication, validated by quarterly restore drills and periodic VAPT/WAPT." },
];

export default function BareMetalProxmoxCaseStudy() {
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
                From <span className="text-[#b31c33]">Bare Metal to a Two-Cluster Proxmox HCI</span> Estate
              </h1>
              <p className="pm-hero-fade mt-6 font-headline text-xl italic text-[#5a4040] lg:text-2xl">
                Lifebank Foundation Inc. — Non-Profit Microfinance, Philippines
              </p>
              <p className="pm-hero-fade mt-6 max-w-3xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                ISPL led a progressive, open-source modernisation for Lifebank&apos;s 5,000+ employees — first consolidating
                fragmented bare-metal servers onto a Proxmox HCI cluster with Ceph storage and PBS, then adding a
                dedicated NVMe/SSD cluster for high-IOPS workloads. The result: 50+ VMs across two clusters, IOPS-driven
                interruptions cut to zero, and a fully managed open-source stack.
              </p>
              <div className="pm-hero-fade mt-8 flex flex-wrap gap-2">
                {["Proxmox VE", "Ceph HCI", "NVMe Cluster", "Proxmox Backup Server", "Managed Services", "Non-Profit"].map((b) => (
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
                  alt="Hyper-converged data center server racks"
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
                  <p className="mt-2 text-sm text-[#5a4040]">ISPL pairs open-source HCI expertise with end-to-end AMC and managed services.</p>
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A two-stage evolution toward a modern open-source platform.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5a4040]">
                <p>
                  Lifebank Foundation Inc., a large non-profit microfinance organisation in the Philippines, employs more
                  than 5,000 staff and serves a far larger beneficiary base. Its digital portfolio spans email, cloud
                  storage, ERP, LMS, data science workloads, web meeting services and a full security and monitoring stack
                  — NMS, SIEM, antivirus, log analysis and configuration backup.
                </p>
                <p>
                  Before engaging ISPL, those core services ran on a set of dedicated bare-metal servers — each major
                  application hosted on its own physical box with limited resources and no virtualization layer. As more
                  services were added, operational complexity climbed and high availability and consistent backup grew
                  hard to maintain.
                </p>
                <p>
                  ISPL designed a progressive, open-source modernisation in two stages: first, consolidating fragmented
                  bare-metal servers onto a Proxmox HCI cluster with Ceph storage and Proxmox Backup Server; then, as
                  workloads grew increasingly I/O-intensive over four years, adding a dedicated NVMe/SSD high-performance
                  cluster and selectively migrating critical high-IOPS workloads — with weekend cutovers to avoid
                  business-hours downtime.
                </p>
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">The Challenges</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Two successive sets of pressures across the journey.</h2>
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

            {/* Solution */}
            <section id="solution" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Solution Proposed</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A progressive, open-source operating model — built to scale.</h2>
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Six phases, staged for stability and continuity.</h2>
              <p className="mt-4 text-base leading-relaxed text-[#5a4040]">
                ISPL executed the modernisation through a staged implementation — each step validated before the next, and
                all high-IOPS cutovers scheduled within weekend windows to avoid business-hours downtime.
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">From siloed servers to a resilient two-cluster estate.</h2>
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Measurable gains across performance, resilience and cost.</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {outcomes.map((o) => (
                  <div key={o.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-3xl font-semibold text-[#b31c33] lg:text-4xl">{o.value}</div>
                    <h3 className="mt-3 font-headline text-base">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{o.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 rounded-2xl border-l-4 border-[#b31c33] bg-[#fcf9f8] p-6 font-headline text-lg italic text-[#1c1b1b] lg:text-xl">
                A reference model for non-profit and microfinance organisations: start by consolidating onto an open-source HCI core,
                then progressively add high-performance capacity and operational maturity as workloads grow — rather than attempting
                disruptive rip-and-replace projects.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-[#5a4040]">
                <strong className="text-[#1c1b1b]">About Illumia Solutions —</strong> ISPL combines open-source HCI engineering with
                end-to-end managed services — HCI operations and networking, VM lifecycle, monitoring, security and key application
                administration — so the savings and performance keep compounding over time.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
