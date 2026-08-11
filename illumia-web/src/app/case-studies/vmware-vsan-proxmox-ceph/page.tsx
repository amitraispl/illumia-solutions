"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXPO: any = [0.16, 1, 0.3, 1];

const HERO_IMG =
  "/images/case-studies/dcc-hero.jpg";
const SIDEBAR_IMG =
  "/images/case-studies/dcc-sidebar.jpg";

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
  { value: "vSAN→Ceph", label: "Storage Re-Platformed" },
  { value: "< 24 hrs", label: "Downtime Ceiling Per Workload" },
  { value: "$0", label: "New Hardware Capex" },
  { value: "7", label: "Migration Phases" },
];

const challenges = [
  {
    title: "Licensing Cost Review",
    body: "As an IT services organization operating on defined margins, DCC targeted a structural reduction in recurring infrastructure licensing to protect profitability at its next renewal cycle.",
  },
  {
    title: "Vendor Lock-In & Strategic Risk",
    body: "Beyond immediate cost, leadership recognized a deeper risk — continued dependence on a single vendor whose pricing and licensing policies were now subject to change without predictable roadmaps, exposing DCC to further escalations outside its control.",
  },
  {
    title: "Operational Continuity Constraints",
    body: "Hosted applications actively served business functions. Any approach had to respect a maximum tolerable downtime of 24 hours per workload. A big-bang cutover — shutting everything down and rebuilding — was technically possible but carried unacceptable operational risk.",
  },
  {
    title: "Hardware Investment Constraint",
    body: "Leadership made a clear commercial decision: the migration had to execute entirely on existing hardware. Procuring new servers or storage was off the table — requiring a phased, surgical approach with no parallel hardware environment to fall back on.",
  },
  {
    title: "Backup Infrastructure Dependency",
    body: "The existing Veeam Backup & Replication setup was tied to the VMware ecosystem. Retaining it post-migration meant carrying forward a licensing cost with limited justification — a replacement natively integrated with the new platform was required.",
  },
];

const solutionItems = [
  {
    title: "Proxmox VE with Ceph as the Platform",
    body: "Proxmox VE — open-source, built on KVM and LXC with a mature web UI and commercial support — was paired with Ceph as the distributed storage backend for its functional equivalence to vSAN: redundant, self-healing, hyper-converged storage with no proprietary array dependency.",
  },
  {
    title: "Purposeful Drive Repurposing",
    body: "Existing drives within each host were re-tasked deliberately: SSDs designated as Ceph OSDs (the primary storage tier), while NVMe drives were allocated to Ceph's DB and WAL functions — accelerating metadata operations and write throughput from hardware already in place.",
  },
  {
    title: "Phased Node Liberation Strategy",
    body: "With no spare hardware, the core challenge was bootstrapping a PVE cluster from nodes still active in the vSAN cluster. Spare drives created temporary local datastores; VMs were shifted off the vSAN pool to free nodes, which were withdrawn one set at a time and re-provisioned as Proxmox VE — repeated iteratively.",
  },
  {
    title: "Minimum-Downtime VM Migration",
    body: "Rather than treating the 24-hour window as a target, ISPL treated it as a ceiling. Proxmox VE's built-in ESXi-to-PVE migration tool converted and transferred VMs with disruption kept as brief as technically feasible — far below the agreed threshold.",
  },
  {
    title: "Proxmox Backup Server Replaces Veeam",
    body: "PBS — integrating natively with Proxmox VE, supporting incremental backups, deduplication and integrity verification — replaced Veeam. Storage drives from the decommissioned Veeam infrastructure were repurposed as the PBS datastore, with encryption at rest and a defined retention policy.",
  },
];

const phases = [
  {
    num: "01",
    title: "Assessment & Pre-Migration Preparation",
    body: "ISPL inventoried all hosted VMs, mapped resource profiles and application dependencies, and identified workload criticality with DCC's stakeholders. ESXi hosts carrying a lighter VM load were flagged as first-wave liberation candidates; spare drives in other hosts were mapped as local datastore capacity.",
  },
  {
    num: "02",
    title: "Freeing the Initial Three Nodes",
    body: "Three ESXi hosts running comparatively fewer VMs were selected. Their VMs were migrated to other ESXi hosts, which used spare NVMe/SSD drives to provision local datastores outside the vSAN pool. Once relocated, the three target hosts were fully free of workloads and ready for controlled evacuation.",
  },
  {
    num: "03",
    title: "Controlled Node Evacuation from VMware",
    body: "For each emptied host: placed into maintenance mode with vSAN data migration policy set to 'Full Data Migration' — redistributing all hosted data across remaining cluster members. The cluster was monitored until all vSAN objects resynced and health returned to fully healthy, then the node was formally removed from vCenter (VCSA).",
  },
  {
    num: "04",
    title: "Proxmox VE Cluster Formation & Ceph Configuration",
    body: "The three evacuated nodes were provisioned as a Proxmox VE cluster. Ceph was configured: SSDs as OSDs forming the primary storage tier, NVMe drives hosting Ceph's DB and WAL components to accelerate OSD performance. The Ceph cluster was validated for health, redundancy and performance before any production workloads.",
  },
  {
    num: "05",
    title: "Iterative VM Migration & Cluster Expansion",
    body: "Using the built-in ESXi-to-PVE tool, VMs on local datastores (no vSAN dependency) were migrated first. The hosts freed by that became the next liberation candidates — their vSAN-backed VMs redistributed, then evacuated and joined to the growing PVE + Ceph cluster. This migrate → evacuate → expand cycle repeated until all nodes were absorbed.",
  },
  {
    num: "06",
    title: "Workload Verification & VMware Decommissioning",
    body: "With all nodes evacuated and all VMs migrated, a comprehensive verification confirmed each workload's operational status with application stakeholders. Only after sign-off were vCenter Server (VCSA) and all ESXi host licenses formally decommissioned.",
  },
  {
    num: "07",
    title: "PBS Deployment & Veeam Decommissioning",
    body: "Proxmox Backup Server was deployed on storage drives repurposed from the Veeam environment: encryption at rest for all backup data, a defined retention policy, and integration with the PVE cluster for scheduled incremental backups with deduplication. After backup/restore validation, Veeam was decommissioned.",
  },
];

const beforeItems = [
  "VMware vSphere with vSAN under subscription licensing",
  "Veeam Backup & Replication tied to the VMware ecosystem",
  "Single-vendor lock-in with unpredictable pricing roadmaps",
  "Proprietary hyper-converged storage array dependency",
  "Renewal costs disproportionate to business value",
];

const afterItems = [
  "Proxmox VE with Ceph — open-source, self-healing hyper-converged storage",
  "Proxmox Backup Server with encryption at rest and defined retention",
  "Zero vendor lock-in and predictable, transparent licensing",
  "Existing NVMe/SSD drives repurposed as Ceph OSDs, DB and WAL tiers",
  "VMware fully decommissioned — vCenter and all ESXi licenses retired",
];

const outcomes = [
  { value: "Drastic", title: "Licensing Cost Reduction", body: "Recurring hypervisor licensing spend structurally reduced — an ongoing financial gain, not a one-time saving." },
  { value: "< 24 hrs", title: "Downtime Per Workload", body: "Individual workloads experienced only minimal disruption, far below the agreed 24-hour ceiling." },
  { value: "$0", title: "New Hardware Investment", body: "Executed on DCC's existing server and storage fleet; spare and Veeam drives repurposed as Ceph and PBS tiers." },
  { value: "100%", title: "VMware Decommissioned", body: "Every ESXi node re-provisioned as Proxmox VE; all VMs migrated to the new PVE + Ceph cluster." },
];

export default function DccVsanCephCaseStudy() {
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
                Migrating <span className="text-[#b31c33]">VMware vSAN to Proxmox VE Ceph</span> — Zero New Hardware
              </h1>
              <p className="pm-hero-fade mt-6 font-headline text-xl italic text-[#5a4040] lg:text-2xl">
                Data Consultants Corporation — US-Based IT Services Organization
              </p>
              <p className="pm-hero-fade mt-6 max-w-3xl text-base leading-relaxed text-[#5a4040] lg:text-lg">
                To protect its operational margins ahead of a licensing renewal, DCC elected to consolidate onto
                Proxmox VE. ISPL — a Proxmox Silver Partner — re-platformed a live hyper-converged cluster from
                vSphere with vSAN to Proxmox VE with Ceph using a phased node-liberation strategy, on existing
                hardware, with downtime kept well below the 24-hour ceiling.
              </p>
              <div className="pm-hero-fade mt-8 flex flex-wrap gap-2">
                {["Proxmox VE", "Ceph", "vSAN Migration", "Proxmox Backup Server", "IT Services", "Silver Partner"].map((b) => (
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
                  alt="Hyper-converged data center infrastructure"
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
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b31c33]">Proxmox Silver Partner</div>
                  <p className="mt-2 text-sm text-[#5a4040]">ISPL brings certified, vendor-backed expertise across both the VMware and Proxmox ecosystems.</p>
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
                    <div className="font-headline text-2xl font-semibold text-[#b31c33] lg:text-3xl">{g.value}</div>
                    <div className="mt-2 text-sm text-[#5a4040]">{g.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Background */}
            <section id="background" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">Background</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A production hyper-converged cluster on the operational front line.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5a4040]">
                <p>
                  Data Consultants Corporation (DCC), a US-based IT services organization, had built its virtualization
                  infrastructure on VMware vSphere with vSAN — multiple physical host nodes interconnected through a pair
                  of high-throughput 25G storage switches, forming a robust hyper-converged cluster. VM backups were
                  managed through Veeam Backup &amp; Replication for reliable on-site data protection.
                </p>
                <p>
                  As an IT services company, DCC&apos;s infrastructure is not just an internal support function — it is the
                  operational backbone on which client-facing services and internal workloads run. Performance,
                  availability and data integrity were business-critical requirements, not merely IT concerns.
                </p>
                <p>
                  In 2024, DCC&apos;s VMware licensing model moved to a subscription basis, prompting a review of its
                  virtualization platform strategy. DCC&apos;s leadership decided to consolidate onto Proxmox VE — without
                  new hardware, and without exceeding a 24-hour downtime threshold per application.
                </p>
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="pm-rise scroll-mt-32">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b31c33]">The Challenges</div>
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Financial, operational and strategic pressure converging at once.</h2>
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">A non-disruptive re-platforming — entirely on existing hardware.</h2>
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Seven phases. A live cluster degraded gracefully, never offline.</h2>
              <p className="mt-4 text-base leading-relaxed text-[#5a4040]">
                ISPL executed the migration as a structured sequence — each phase designed to maintain cluster stability,
                protect live workloads, and progressively transfer the infrastructure from VMware to Proxmox VE, all on
                DCC&apos;s existing hardware.
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">From proprietary hyper-convergence to open standards.</h2>
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
              <h2 className="mt-3 font-headline text-3xl lg:text-4xl">Delivered on every dimension that mattered to leadership.</h2>
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
                The phased node-liberation strategy, the disciplined vSAN evacuation, and the iterative migrate-evacuate-expand
                approach were all products of deep familiarity with both the VMware and Proxmox ecosystems — enabling a migration
                that was safe, efficient, and commercially sound.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-[#5a4040]">
                <strong className="text-[#1c1b1b]">About Illumia Solutions —</strong> As a Proxmox Silver Partner, ISPL pairs
                hands-on execution capability with platform-specific expertise, delivering vendor-independent infrastructure
                foundations that scale with the business — without proprietary licensing surprises.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
