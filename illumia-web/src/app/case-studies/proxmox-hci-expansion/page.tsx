"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "/images/case-studies/3-hci-expansion-hero.jpg";
const SIDEBAR_IMG =
  "/images/case-studies/4-hci-expansion-sidebar.jpg";

const navSections = [
  { id: "glance", label: "At A Glance" },
  { id: "environment", label: "Client Environment" },
  { id: "challenge", label: "Business Challenge" },
  { id: "solution", label: "Solution Delivered" },
  { id: "architecture", label: "Architecture Highlights" },
  { id: "managed-services", label: "Managed Services" },
  { id: "outcome", label: "Outcome" },
];

const glance = [
  { value: "2", label: "Production HCI Clusters" },
  { value: "NVMe", label: "High-IOPS Storage Tier" },
  { value: "14 days", label: "On-Site Migration Sprint" },
  { value: "24/7", label: "Managed Services & Helpdesk" },
];

const solutionPhases = [
  {
    tag: "Phase 1",
    title: "Original HCI & Backup Platform",
    items: [
      "Commissioned an open-source HCI cluster with SSD and HDD distributed storage based on Ceph, with 10 Gbps switching.",
      "Migrated existing physical collaboration servers (email, cloud storage, related services) into virtual machines on the cluster — enabling HA, scale-out capacity, and centralized management.",
      "Integrated an on-site backup node and optional off-site backup capability using Proxmox Backup Server.",
    ],
  },
  {
    tag: "Phase 2",
    title: "New NVMe HCI Cluster for High-IOPS Workloads",
    items: [
      "Designed and deployed a NVMe and SSD mixed-storage cluster at the client's central office using modern commodity servers optimized for low-latency storage.",
      "Planned and executed a logical migration of selected high-IOPS virtual machines — including mail, file, and application workloads — from the original HCI to the new cluster over a ~14-day on-site engagement.",
      "Integrated the new cluster with existing backup, logging, and monitoring infrastructure for coherent management across both clusters.",
    ],
  },
  {
    tag: "Phase 3",
    title: "Ongoing AMC & Managed Services",
    items: [
      "Established a comprehensive AMC and managed services contract covering both clusters and key application VMs, including monitoring, maintenance, security assessment, incident response, and reporting under a detailed task matrix.",
      "Provided 24/7 helpdesk support from India, with periodic on-site visits.",
      "Structured capacity planning and failover drills to keep the environment healthy over time.",
    ],
  },
];

const architectureItems = [
  {
    title: "Two-Cluster HCI Landscape",
    body: "An HDD/SSD-based cluster for standard workloads and a three-node NVMe/SSD cluster for high-IOPS VMs — both built on open-source virtualization and distributed storage.",
  },
  {
    title: "High-Speed Networking",
    body: "Dedicated networks for cluster, storage, and backup traffic — with separate management and data planes for isolation and performance.",
  },
  {
    title: "Proxmox Backup Server Architecture",
    body: "PBS-based backup with incremental backups, retention policies, and regular restoration drills. On-site primary with optional off-site replication.",
  },
  {
    title: "Unified Observability",
    body: "Centralised syslog and NMS integration providing unified visibility across both clusters, application VMs, and network infrastructure.",
  },
];

const managedServiceScope = [
  { area: "Infrastructure", items: ["Both HCI clusters", "Hypervisor & storage layer", "Capacity planning & reporting"] },
  { area: "Applications", items: ["Key application VMs", "Mail, collaboration, file services", "Line-of-business apps"] },
  { area: "Security", items: ["Security assessments", "Incident response", "Vulnerability management"] },
  { area: "Operations", items: ["24/7 helpdesk (India)", "Periodic on-site visits", "Failover drills & documentation"] },
];

const beforeItems = [
  "Single SSD/HDD cluster handling all workloads including high-IOPS VMs",
  "Storage bottlenecks emerging as I/O-intensive workloads grew",
  "Limited performance headroom — no room for future growth",
  "Physical servers for collaboration and business apps",
  "No structured AMC or managed services coverage",
];

const afterItems = [
  "Two-cluster HCI landscape — right workload on the right storage tier",
  "NVMe cluster delivering low-latency, high-IOPS performance for demanding VMs",
  "Original cluster preserved and extended — original investment protected",
  "All physical servers virtualized with HA across the estate",
  "Full AMC and 24/7 managed services — structured ops with documented drills",
];

export default function HCIExpansionCaseStudy() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("glance");

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hci-hero-fade", { opacity: 0, y: 20, duration: 0.9, ease: EXPO, stagger: 0.08 });
      gsap.utils.toArray<HTMLElement>(".hci-rise").forEach((el) => {
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
              <div className="hci-hero-fade flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b31c33]/30 bg-[#b31c33]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                  Case Study
                </div>
                <time dateTime="2026-08-08" className="text-xs font-medium text-[#8e706f]">
                  Updated August 8, 2026
                </time>
              </div>
              <h1 className="hci-hero-fade mt-6 font-headline text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Progressive <span className="text-[#b31c33]">HCI Expansion</span> &amp; NVMe Cluster for High&#8209;IOPS Workloads
              </h1>
              <p className="hci-hero-fade mt-6 font-headline text-xl italic text-[#5a4040] lg:text-2xl">
                Large Non-Profit Organisation — Philippines
              </p>
              <p className="hci-hero-fade mt-6 max-w-3xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                As I/O-intensive workloads outgrew the original SSD/HDD HCI cluster, ISPL designed and delivered a new
                NVMe cluster for high-IOPS VMs — preserving the original investment, avoiding a rip-and-replace, and
                wrapping the entire two-cluster estate in structured AMC and 24/7 managed services.
              </p>
              <div className="hci-hero-fade mt-8 flex flex-wrap gap-2">
                {["Proxmox VE", "HCI", "NVMe", "Ceph", "Proxmox Backup Server", "Managed Services", "Philippines"].map((b) => (
                  <span key={b} className="rounded-full border border-[#e2bebd]/70 bg-[#fcf9f8] px-3 py-1 text-xs font-medium text-[#5a4040]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="hci-hero-fade lg:col-span-4 flex flex-col items-center gap-8 lg:mt-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-[#e2bebd]/60 shadow-lg">
                <Image
                  src={HERO_IMG}
                  alt="High-performance NVMe server hardware"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Scroll indicator */}
              <style>{`
                @keyframes hci-scroll-dot {
                  0%   { transform: translateY(0);    opacity: 1; }
                  65%  { transform: translateY(10px); opacity: 0; }
                  100% { transform: translateY(0);    opacity: 0; }
                }
                .hci-scroll-dot { animation: hci-scroll-dot 1.8s cubic-bezier(0.45,0,0.55,1) infinite; }
              `}</style>
              <div className="flex flex-col items-center gap-2.5" aria-label="Scroll down to read">
                <span className="select-none font-body text-[9px] font-bold uppercase tracking-[0.35em] text-[#b31c33]/40">Scroll</span>
                <div className="relative flex h-9 w-[22px] items-start justify-center rounded-full border border-[#b31c33]/25 pt-[7px] shadow-[0_0_0_4px_rgba(179,28,51,0.04)]">
                  <div className="hci-scroll-dot h-[7px] w-[3px] rounded-full bg-[#b31c33]/50" />
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
                  <Image src={SIDEBAR_IMG} alt="Storage and HCI hardware" fill sizes="240px" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">Official Proxmox Partner</div>
                  <p className="mt-2 text-sm text-[#5a4040]">ISPL holds active Proxmox partnership with deep HCI and distributed storage expertise.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-20 lg:col-span-9">

            {/* At a Glance */}
            <section id="glance" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">At A Glance</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">The engagement, in numbers.</h2>
              <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {glance.map((g) => (
                  <div key={g.label} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6 text-center">
                    <div className="font-headline text-3xl font-semibold text-[#b31c33] lg:text-4xl">{g.value}</div>
                    <div className="mt-2 text-sm text-[#5a4040]">{g.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Client Environment */}
            <section id="environment" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Client Environment</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">An open-source HCI estate managing a growing service portfolio.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5a4040]">
                <p>
                  The client is a large non-profit organisation based in the Philippines running collaboration, file sharing,
                  and business applications on an open-source hyperconverged infrastructure. The environment consists of two
                  production HCI clusters — both designed and implemented by ISPL: an earlier SSD and HDD-based HCI cluster,
                  and a newer NVMe and SSD-based HCI cluster.
                </p>
                <p>
                  Over time, the client consolidated more and more services onto the HCI platform — mail and collaboration,
                  cloud storage, web services, and line-of-business applications — all running as virtual machines under a
                  unified management plane.
                </p>
              </div>
            </section>

            {/* Business Challenge */}
            <section id="challenge" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Business Challenge</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Storage performance hitting a ceiling — without replacing what works.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5a4040]">
                <p>
                  As workloads grew and some VMs became highly I/O intensive, the original SSD/HDD cluster alone could not
                  deliver the desired performance headroom and latency for all services while maintaining future growth capacity.
                </p>
                <p>
                  The client&apos;s position was clear: scale out the existing architecture — not replace it. Add a new
                  high-performance cluster and selectively move intensive workloads there, while keeping both clusters in
                  active use. Preserve the original investment. Avoid a disruptive rip-and-replace.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "I/O Intensive Workloads", body: "Mail, file sharing, and business applications demanding low-latency, high-throughput storage that the SSD/HDD cluster could no longer deliver consistently." },
                  { title: "Growth Capacity Headroom", body: "The original cluster needed performance headroom freed up to handle ongoing growth of standard workloads without becoming a bottleneck." },
                  { title: "Scale-Out, Not Replace", body: "Replacing the existing cluster would have wasted the original investment and forced a disruptive full migration — unacceptable for a production environment." },
                  { title: "Unified Operations", body: "Two separate clusters needed coherent management, monitoring, backup, and support coverage — not siloed operations for each environment." },
                ].map((c, i) => (
                  <article key={c.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-xl font-semibold text-[#b31c33]">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-3 font-headline text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{c.body}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section id="solution" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Solution Delivered</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A staged HCI programme — original and new clusters forming one logical estate.</h2>
              <div className="mt-8 space-y-6">
                {solutionPhases.map((phase) => (
                  <div key={phase.tag} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="inline-flex items-center rounded-full bg-[#b31c33]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">
                      {phase.tag}
                    </div>
                    <h3 className="mt-3 font-headline text-xl">{phase.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#5a4040]">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#b31c33]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Architecture Highlights</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Two clusters. One coherent, observable estate.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {architectureItems.map((a, i) => (
                  <article key={a.title} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-6">
                    <div className="font-headline text-xl font-semibold text-[#b31c33]">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-3 font-headline text-lg">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a4040]">{a.body}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Managed Services */}
            <section id="managed-services" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Managed Services & AMC</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Structured operations. Documented drills. Continuous coverage.</h2>
              <p className="mt-4 text-base leading-relaxed text-[#5a4040]">
                ISPL established a comprehensive AMC and managed services engagement covering the full two-cluster estate —
                from hypervisor and storage through applications, security, and distribution network devices.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {managedServiceScope.map((s) => (
                  <div key={s.area} className="rounded-2xl border border-[#e2bebd]/70 bg-white p-5">
                    <div className="font-headline text-sm font-semibold uppercase tracking-[0.18em] text-[#b31c33] mb-3">{s.area}</div>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2 text-xs leading-snug text-[#5a4040]">
                          <span className="mt-1 h-1 w-1 flex-none rounded-full bg-[#b31c33]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Before / After */}
            <section className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Before vs. After</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">From performance ceiling to right-sized, right-tiered infrastructure.</h2>
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

            {/* Outcome */}
            <section id="outcome" className="hci-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Outcome</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Performance, resilience, scalability — without disruption.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5a4040]">
                <p>
                  The client now runs a two-cluster HCI landscape where the original platform continues to host suitable
                  workloads, while high-IOPS virtual machines run on the newer NVMe cluster. This progressive expansion
                  avoided a disruptive rip-and-replace approach and preserved the original investment while delivering
                  substantial gains in performance, resilience, and scalability.
                </p>
                <p>
                  Through the AMC and managed services engagement, the client benefits from structured operations,
                  documented failover drills, and proactive capacity planning — all built on an open-source stack that
                  keeps long-term licensing exposure under control.
                </p>
              </div>
              <p className="mt-8 rounded-2xl border-l-4 border-[#b31c33] bg-[#fcf9f8] p-6 font-headline text-lg italic text-[#1c1b1b] lg:text-xl">
                A living example that infrastructure growth does not require infrastructure replacement — the right
                architecture accommodates new performance tiers while preserving existing ones.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-[#5a4040]">
                <strong className="text-[#1c1b1b]">About Illumia Solutions —</strong> As an official Proxmox partner, ISPL
                designs, deploys, and operates open-source HCI environments for organizations that need enterprise-grade
                infrastructure without enterprise-grade licensing costs.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
