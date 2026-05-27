import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world transformations delivered by Illumia Solutions — from open source cost reduction to PCI DSS compliance and enterprise cybersecurity.",
  alternates: { canonical: "/case-studies/" },
};

const caseStudies = [
  {
    href: "/case-studies/non-profit-open-source",
    tag: "Open Source · Non-Profit",
    title: "Driving 50–65% IT Cost Reduction with Open Source Infrastructure",
    summary:
      "A leading Microfinance Non-Profit in the Philippines transformed its entire IT landscape — cutting costs, improving collaboration, and scaling operations across 1,000+ branches with an integrated open-source stack.",
    body:
      "The organisation was locked into a sprawl of proprietary licences across collaboration, ERP, virtualisation and storage. Annual renewals alone were eating into mission-critical programme budgets. Illumia delivered an end-to-end migration — Nextcloud for collaboration, ERPNext for financial operations, Proxmox for virtualisation, and Ceph for distributed storage — orchestrated across 1,000+ branch sites with zero data loss and no service interruption.",
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/7meetxSGsFNNkYa",
    metrics: [
      { value: "50–65%", label: "IT Cost Reduction" },
      { value: "~1,000", label: "Branches Migrated" },
      { value: "3–5 yrs", label: "Savings Horizon" },
    ],
    highlights: [
      "Full collaboration suite replacement on Nextcloud",
      "ERPNext rollout covering 1,000+ branch operations",
      "Proxmox + Ceph stack for HA virtualisation",
      "Phased migration — zero downtime",
    ],
  },
  {
    href: "/case-studies/cybersecurity-open-source",
    tag: "Cybersecurity · Open Source",
    title: "Strengthening Cybersecurity & Compliance with Open Source Technologies",
    summary:
      "One of the largest nonprofit microfinance institutions in the Philippines implemented a comprehensive open-source security stack — full visibility, threat detection, and compliance readiness.",
    body:
      "Regulatory scrutiny and growing threat exposure demanded a defensible security posture without commercial-tool licensing inflation. Illumia engineered a layered defence: Wazuh for SIEM and XDR, Suricata for network IDS, OpenVAS for vulnerability scanning, and an internal SOC playbook for incident response. The result — full audit trails, 24/7 monitoring, and data sovereignty on the customer's own infrastructure.",
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/FJHofMbWQQKjGW8",
    metrics: [
      { value: "24/7", label: "Monitoring" },
      { value: "Audit", label: "Ready" },
      { value: "On-Prem", label: "Data Sovereignty" },
    ],
    highlights: [
      "Wazuh SIEM/XDR with custom detection rules",
      "Suricata-based network intrusion detection",
      "OpenVAS continuous vulnerability scanning",
      "Internal SOC runbooks and IR workflows",
    ],
  },
  {
    href: "/case-studies/pci-dss-grocery",
    tag: "Compliance · Retail",
    title: "PCI DSS Compliance for a Grocery Store Chain in Illinois",
    summary:
      "During the pandemic surge in credit card transactions, Illumia delivered full PCI DSS Level 2 compliance for a 17-location grocery chain — on time, on budget, and with zero business disruption.",
    body:
      "A regional grocery chain processing rising card volumes faced a hard deadline to achieve PCI DSS SAQ D Level 2 attestation. Illumia owned the entire programme: scoping the cardholder data environment, segmenting payment networks, hardening point-of-sale endpoints, implementing logging and quarterly ASV scans, and authoring the evidence package for the QSA assessment. Compliance achieved on the first attempt.",
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/p7oPQLdGntqDDza",
    metrics: [
      { value: "Level 2", label: "PCI DSS SAQ D" },
      { value: "17", label: "Locations" },
      { value: "Zero", label: "Downtime" },
    ],
    highlights: [
      "Cardholder data environment scoping and segmentation",
      "POS endpoint hardening across 17 sites",
      "Centralised logging + quarterly ASV scans",
      "QSA-ready evidence package and remediation",
    ],
  },
  {
    href: "/case-studies/proxmox-vmware-migration",
    tag: "Infrastructure · Proxmox",
    title: "80% Licensing Cost Reduction via VMware to Proxmox VE Migration",
    summary:
      "Lifebank Foundation Inc. faced unsustainable VMware licensing costs following Broadcom's acquisition. ISPL delivered a phased, rolling migration to Proxmox VE — zero new hardware, zero VMs lost, every downtime threshold met.",
    body:
      "With no new hardware permitted and production workloads classified across three downtime tiers, ISPL executed a node-by-node rolling migration: decommissioning each VMware host, commissioning it as a Proxmox VE node, migrating workloads offline, and validating with application owners before moving to the next. Veeam servers were repurposed as Proxmox Backup Server nodes with encryption at rest on all backup data — on-site and off-site.",
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/w7MtAYxqXsfHgS5",
    metrics: [
      { value: "80%", label: "Licensing Cost Reduction" },
      { value: "Zero", label: "VMs Lost" },
      { value: "$0", label: "New Hardware Capex" },
    ],
    highlights: [
      "Node-by-node rolling migration — VMware cluster live throughout",
      "Proxmox VE built-in migration tooling — no third-party utilities",
      "Orphaned VMs recovered from Veeam repository and re-platformed",
      "Proxmox Backup Server replacing Veeam with encryption at rest",
    ],
  },
  {
    href: "/case-studies/proxmox-hci-expansion",
    tag: "Infrastructure · HCI",
    title: "Progressive HCI Expansion & NVMe Cluster for High-IOPS Workloads",
    summary:
      "As I/O-intensive workloads outgrew an existing SSD/HDD HCI cluster, ISPL designed and delivered a new NVMe cluster for high-IOPS VMs — scaling out without replacing, and wrapping the full estate in 24/7 managed services.",
    body:
      "The client's original Proxmox HCI cluster — hosting mail, collaboration, cloud storage, and business apps — was hitting performance limits as VM workloads grew. Rather than a disruptive rip-and-replace, ISPL commissioned a three-node NVMe/SSD cluster at the central office, migrated high-IOPS VMs over a ~14-day on-site engagement, and integrated both clusters under unified backup, logging, and monitoring. A comprehensive AMC and managed services contract now covers the full two-cluster estate.",
    image:
      "https://nextcloud.illumiasolutions.com/public.php/dav/files/zxZN9QmzGDYq8dB",
    metrics: [
      { value: "2", label: "Production Clusters" },
      { value: "NVMe", label: "High-IOPS Tier" },
      { value: "24/7", label: "Managed Services" },
    ],
    highlights: [
      "Three-node NVMe/SSD cluster for low-latency, high-throughput VMs",
      "~14-day on-site migration sprint for high-IOPS workloads",
      "PBS backup architecture with incremental backups and restore drills",
      "AMC covering both clusters, applications, security, and network devices",
    ],
  },
];

const industries = [
  { label: "Microfinance", count: "1,000+ branches" },
  { label: "Retail", count: "17 locations" },
  { label: "Non-Profit", count: "Pan-APAC" },
  { label: "Compliance", count: "PCI DSS · GDPR" },
  { label: "Infrastructure", count: "VMware · Proxmox · HCI" },
  { label: "Managed Services", count: "AMC · 24/7 support" },
];

const approach = [
  {
    step: "01",
    title: "Discovery & Assessment",
    desc: "We start with a forensic look at the current environment — infrastructure, contracts, compliance gaps, and operational pain points — before recommending a single change.",
  },
  {
    step: "02",
    title: "Architecture & Roadmap",
    desc: "Every engagement is anchored by a written architecture document and a phased roadmap with measurable milestones, risk markers and rollback paths.",
  },
  {
    step: "03",
    title: "Execution & Migration",
    desc: "Phased, low-risk delivery — typically running new and legacy stacks in parallel until cutover is validated. Zero data loss is the baseline expectation.",
  },
  {
    step: "04",
    title: "Operate & Optimise",
    desc: "Post-go-live, our managed services team handles 24/7 monitoring, patching and continuous improvement so the savings keep compounding.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Case Studies"
        title={
          <>
            Real problems.{" "}
            <span className="italic font-normal text-[#b31c33]">Real results.</span>
          </>
        }
        description="From cost transformation to compliance — see how Illumia Solutions has delivered measurable, durable impact for organisations across industries and geographies."
        primaryCta={{ label: "Explore Case Studies", href: "#case-studies" }}
        secondaryCta={{ label: "Start Your Story", href: "/contact#contact-form" }}
        imageSrc="https://nextcloud.illumiasolutions.com/public.php/dav/files/eF248ToaJKbaTZN"
        imageAlt="Illumia Solutions client success — team collaboration"
      >
        <div className="grid grid-cols-3 gap-4 max-w-md">
          <div>
            <div className="font-headline text-2xl md:text-3xl text-[#b31c33] font-semibold">5</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-[#5a4040]">Case Studies</div>
          </div>
          <div>
            <div className="font-headline text-2xl md:text-3xl text-[#b31c33] font-semibold">17+</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-[#5a4040]">Industries</div>
          </div>
          <div>
            <div className="font-headline text-2xl md:text-3xl text-[#b31c33] font-semibold">1k+</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-[#5a4040]">Branches Served</div>
          </div>
        </div>
      </PageHero>

      {/* ─── Impact / Industries ──────────────────────────────────────────── */}
      <section className="bg-[#f6f3f2] py-16 md:py-20 px-6 md:px-12 border-b border-[#e2bebd]/40">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
                Impact at a Glance
              </span>
              <h2 className="font-headline text-3xl md:text-5xl text-stone-900 leading-tight">
                Engagements that move the needle —{" "}
                <span className="italic text-[#b31c33]">not the slide deck.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-[#5a4040] leading-relaxed text-base md:text-lg">
                Every project below was scoped against measurable business outcomes — cost reduction, compliance attainment, or measurable threat reduction — and delivered against a published architecture and a written roadmap.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((i) => (
              <div
                key={i.label}
                className="rounded-2xl bg-white border border-[#e2bebd]/40 p-6 md:p-7"
              >
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#b31c33] font-bold mb-3">
                  Sector
                </p>
                <p className="font-headline text-xl md:text-2xl text-stone-900 mb-2">
                  {i.label}
                </p>
                <p className="font-body text-xs md:text-sm text-[#5a4040]">{i.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case study cards — alternating ──────────────────────────────── */}
      <section
        id="case-studies"
        className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-12 scroll-mt-20"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-14 md:mb-20 max-w-3xl">
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-4">
              Selected Engagements
            </span>
            <h2 className="font-headline text-3xl md:text-5xl text-stone-900 leading-tight">
              Detailed accounts of the work, the architecture, and the outcomes.
            </h2>
          </div>

          <div className="flex flex-col gap-20 md:gap-28">
            {caseStudies.map((cs, idx) => {
              const imageLeft = idx % 2 === 0;
              return (
                <article
                  key={cs.href}
                  className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-6 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="relative aspect-[5/4] md:aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-stone-900/10">
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-x-5 top-5">
                        <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b31c33] backdrop-blur">
                          {cs.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-6 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-[#b31c33] mb-4">
                      Case Study · 0{idx + 1}
                    </p>
                    <h3 className="font-headline text-2xl md:text-4xl text-stone-900 leading-tight tracking-tight mb-5">
                      {cs.title}
                    </h3>
                    <p className="font-body text-base text-[#5a4040] leading-relaxed mb-5">
                      {cs.summary}
                    </p>
                    <p className="font-body text-sm text-[#5a4040] leading-relaxed mb-7">
                      {cs.body}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-8">
                      {cs.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 font-body text-sm text-stone-800"
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#b31c33]/10 text-[#b31c33]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M2.5 6.5L5 9L9.5 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 border-t border-[#e2bebd]/50 pt-6 mb-8">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-headline text-2xl md:text-3xl font-semibold text-[#b31c33] leading-none">
                            {m.value}
                          </div>
                          <div className="mt-2 text-[10px] uppercase tracking-wider text-[#5a4040]">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={cs.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#b31c33] px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-[#920022] active:scale-95"
                    >
                      Read Full Case Study
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Approach ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1c1b1b] py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12 md:mb-16">
            <div className="lg:col-span-7">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#ffb3b3] font-bold block mb-4">
                How We Deliver
              </span>
              <h2 className="font-headline text-3xl md:text-5xl text-white leading-tight">
                A repeatable, evidence-based engagement model.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-white/65 leading-relaxed text-base md:text-lg">
                Every case study on this page followed the same four-phase delivery framework — designed to de-risk transformation and make outcomes measurable from day one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {approach.map((a) => (
              <div
                key={a.step}
                className="bg-[#1c1b1b] p-8 md:p-10 hover:bg-[#252323] transition-colors duration-200"
              >
                <p className="font-headline italic text-3xl text-[#ffb3b3] mb-5">
                  {a.step}
                </p>
                <h3 className="font-headline text-xl md:text-2xl text-white mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="font-body text-sm text-white/65 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#fcf9f8] py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="overflow-hidden rounded-3xl border border-[#e2bebd]/60 bg-white p-10 md:p-14 lg:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b31c33]">
                  Work With Us
                </p>
                <h2 className="mt-4 font-headline text-3xl md:text-5xl text-stone-900 leading-tight">
                  Ready to become our next{" "}
                  <span className="italic text-[#b31c33]">success story?</span>
                </h2>
                <p className="mt-5 max-w-xl font-body text-base text-[#5a4040] leading-relaxed">
                  Tell us what you&apos;re trying to solve. We&apos;ll show you how open source, sound architecture and proven engineering deliver outcomes that last.
                </p>
              </div>
              <div className="flex lg:col-span-4 lg:justify-end">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#b31c33] px-7 py-4 font-body text-sm font-semibold tracking-wide text-white transition hover:bg-[#920022] active:scale-95"
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
    </>
  );
}
