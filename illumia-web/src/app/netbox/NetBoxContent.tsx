"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Network, MapPin, Cable, Tag, Code2, FileCheck, Server, Users, Puzzle, Shield, GitBranch, FileCode, LayoutGrid } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

/* Plain figure-caption style attribution — no background, sits below the image.
   `dark` = caption sits on a dark section bg, so use light text; otherwise dark text. */
function SourceCaption({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p className={`mt-2 font-body text-[11px] italic ${dark ? "text-white/45" : "text-[#5a4040]"}`}>
      Source: {children}
    </p>
  );
}

// Real visuals — official NetBox / NetBox Labs assets
const IMG = {
  hero: "/images/netbox/hero.png",
  dcim: "/images/netbox/dcim.png",
  ipam: "/images/netbox/ipam.svg",
  automation: "/images/netbox/automation.png",
  infrastructure: "/images/netbox/infrastructure.png",
  logo: "/images/logos/netbox-labs.png",
  rackElevations: "/images/netbox/rack-elevations.png",
  vlans: "/images/netbox/vlans.png",
};

const REPLACES = [
  "Excel and Google Sheets for IP allocation",
  "Visio or draw.io for rack diagrams",
  "Confluence pages for device inventory",
  "Email threads for circuit and VLAN requests",
  "Handwritten patch panel schedules",
  "Tribal knowledge for routing topology",
  "SolarWinds IPAM — costly annual licence",
  "Infoblox DDI — proprietary appliance lock-in",
];

const SPOTLIGHT_MODULES = [
  {
    tag: "IPAM",
    icon: Network,
    title: "IP Address Management",
    body: "Hierarchical prefix and IP management across IPv4 and IPv6. Track aggregates, prefixes, IP ranges, and individual addresses with VRF and tenant awareness for overlapping address spaces across multi-tenant environments.",
    points: ["Prefix allocation and utilisation tracking", "VRF and tenant isolation", "IPv4 and IPv6 dual-stack", "Import from Infoblox and SolarWinds"],
    img: IMG.ipam,
    imgAlt: "NetBox IPAM Visual",
    source: "netboxlabs.com",
    flip: false,
  },
  {
    tag: "DCIM",
    icon: MapPin,
    title: "Data Centre Infrastructure",
    body: "Rack elevation visualisation, device inventory, power and cooling tracking. Document every device from core router to cable management arm — make, model, serial, asset tag, location, and lifecycle status in one place.",
    points: ["Rack front and rear elevation diagrams", "Device and component inventory", "Power draw and cooling tracking", "Site and location hierarchy"],
    img: IMG.dcim,
    imgAlt: "NetBox DCIM Visual",
    source: "netboxlabs.com",
    flip: true,
  },
  {
    tag: "Automation",
    icon: Code2,
    title: "Ansible, Terraform, and CI/CD",
    body: "NetBox is not a passive documentation tool — it is the authoritative data source for your automation pipeline. Ansible reads dynamic inventory directly. Terraform manages NetBox state as infrastructure code. Webhooks fire on every change.",
    points: ["Native Ansible dynamic inventory plugin", "Official Terraform provider", "REST API and GraphQL endpoint", "Webhook triggers for CI/CD"],
    img: IMG.automation,
    imgAlt: "NetBox Network Automation Visual",
    source: "netboxlabs.com",
    flip: false,
  },
  {
    tag: "Visualization",
    icon: LayoutGrid,
    title: "See your infrastructure, not just query it.",
    body: "Rack elevations render every device, patch panel, and PDU as a to-scale diagram — front and rear — generated live from inventory data. No Visio file to keep in sync; the picture is the database, so it's never out of date.",
    points: ["Front and rear rack elevation diagrams", "Auto-generated from live device data", "SVG export for change requests and audits", "Device utilisation and space at a glance"],
    img: IMG.rackElevations,
    imgAlt: "NetBox rack elevation diagrams showing patch panels, switches, and PDUs across multiple racks",
    source: "netboxlabs.com",
    flip: true,
  },
];

const ADDITIONAL_MODULES = [
  {
    tag: "Virtualization",
    icon: Server,
    title: "Virtual Machines & Clusters",
    body: "Manage VMs, clusters, and hypervisors alongside physical infrastructure. Track vCPU, memory, and storage allocation with full VM-to-host mapping and cluster utilisation metrics.",
    points: ["VM cluster management and host assignment", "VM-to-host mapping with resource utilisation", "Seamless physical and virtual inventory in one view"],
    img: "/images/netbox/virtualization.png",
    imgAlt: "NetBox dashboard showing virtualization clusters and virtual machines",
    source: "GitHub — netbox-community/netbox",
    flip: false,
  },
  {
    tag: "Multi-Tenancy",
    icon: Users,
    title: "Tenant Isolation Across All Objects",
    body: "Enforce tenant awareness across every infrastructure object. Separate IP spaces, VLANs, and device groups per tenant — built for managed service providers and multi-department enterprises.",
    points: ["Tenant-scoped views and filtering", "Cross-tenant security boundaries", "Overlapping address spaces per tenant via VRF"],
    img: "/images/netbox/multi-tenancy.png",
    imgAlt: "NetBox prefixes list showing per-tenant IP address management",
    source: "GitHub — netbox-community/netbox",
    flip: true,
  },
  {
    tag: "Extensibility",
    icon: Puzzle,
    title: "Extend NetBox Without Code",
    body: "Add organisation-specific attributes via custom fields and model entirely new infrastructure types with Custom Objects — no code required. Plugin architecture handles anything beyond that.",
    points: ["Custom fields on any object type", "No-code Custom Objects for new data models", "Plugin architecture for advanced extensions"],
    img: "/images/netbox/extensibility.png",
    imgAlt: "NetBox cable trace interface showing extensible device component model",
    source: "GitHub — netbox-community/netbox",
    flip: false,
  },
  {
    tag: "RBAC",
    icon: Shield,
    title: "Role-Based Access Control",
    body: "Fine-grained permissions down to individual objects. Restrict users and groups to specific sites, tenants, or object types with full JSON constraint-based access rules.",
    points: ["Object-level permissions with JSON constraints", "User and group role management", "SOC 2 and ISO 27001 compliant audit trail"],
    img: "/images/netbox/rbac.png",
    imgAlt: "NetBox permissions management interface showing object-level RBAC controls",
    source: "NetBox Labs blog",
    flip: true,
  },
  {
    tag: "Topology",
    icon: GitBranch,
    title: "Advanced Network Topology",
    body: "Model BGP sessions, peering relationships, and full device role hierarchies. Visual Explorer renders interactive cable topology, floorplans, and WAN connectivity from your existing NetBox data.",
    points: ["BGP communities, route targets, and AS routes", "Device type templates and role hierarchies", "Interactive Visual Explorer for topology and racks"],
    img: "/images/netbox/topology.png",
    imgAlt: "NetBox Visual Explorer cable topology diagram showing interconnected network devices",
    source: "netboxlabs.com",
    flip: false,
  },
  {
    tag: "Config Templates",
    icon: FileCode,
    title: "Configuration Management & Templates",
    body: "Render device configurations from Jinja2 templates using NetBox as the authoritative data source. Config contexts deliver device-specific variables to Ansible, Terraform, and custom pipelines.",
    points: ["Dynamic Jinja2 config generation per device", "Config contexts for site and role variants", "Direct export to Ansible inventory and Terraform"],
    img: "/images/netbox/config-templates.png",
    imgAlt: "NetBox Jinja2 configuration template editing interface",
    source: "netboxlabs.com",
    flip: true,
  },
  {
    tag: "VLAN & VRF",
    icon: Tag,
    title: "Every VLAN and VRF, queryable as data.",
    body: "Catalogue every VLAN by site, group, and functional role, with ID-collision prevention built into the model. VRFs, route targets, and BGP communities exist as first-class objects your automation can query instead of reverse-engineering from device configs.",
    points: ["VLANs scoped by site, group, and role", "Collision prevention across the numbering plan", "VRFs, route targets, and BGP communities as data", "Direct read access for Ansible and Terraform"],
    img: IMG.vlans,
    imgAlt: "NetBox VLAN list showing VID, site, prefixes, tenant, and status",
    source: "GitHub — netbox-community/netbox",
    flip: false,
  },
];

const REMAINING_MODULES = [
  { icon: Cable, title: "Cable and Circuit Tracking", text: "End-to-end cable plant — type, length, colour, termination, and path tracing through patch panels. WAN circuits tied to interfaces and SLA tickets." },
  { icon: FileCheck, title: "Audit and Change Management", text: "Every create, update, and delete is journaled with user, timestamp, and diff. SOC 2, ISO 27001, and PCI-DSS compliant audit trail." },
];

export default function NetBoxContent() {
  return (
    <div className="overflow-x-hidden">
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fcf9f8] pt-24 md:pt-36 pb-0 overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16">

          {/* Headline + CTA row */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10 md:mb-14">

            {/* NetBox Labs logo — big */}
            <motion.div variants={fadeUp} className="mb-5">
              <img
                src={IMG.logo}
                alt="NetBox Labs"
                className="h-8 md:h-10 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">
                Network Source of Truth
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
              <motion.h1
                variants={fadeUp}
                className="font-headline text-[3.2rem] sm:text-6xl md:text-7xl xl:text-[5.5rem] text-[#1c1b1b] leading-[0.88] tracking-[-0.03em]"
              >
                Your network,<br />
                <span className="italic font-normal text-[#b31c33]">documented.</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 shrink-0 pb-2">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center gap-2.5 bg-[#b31c33] hover:bg-[#920022] text-white px-6 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide shadow-lg shadow-[#b31c33]/20 transition-all duration-200 active:scale-[0.97]"
                >
                  Deploy NetBox
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="#modules"
                  className="inline-flex items-center justify-center gap-2 border border-[#b31c33]/25 text-[#b31c33] px-6 py-3.5 rounded-[10px] font-body text-sm font-medium hover:bg-[#b31c33] hover:text-white transition-all duration-200"
                >
                  Explore Modules
                </Link>
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp}
              className="font-body text-lg md:text-xl text-[#5a4040] leading-relaxed max-w-2xl mt-6"
            >
              Replace spreadsheets, Visio diagrams, and tribal knowledge with a single, API-driven source of truth for IPAM, DCIM, cable plant, and network topology.
            </motion.p>
          </motion.div>

          {/* Hero image — breaks out of text column, bleeds to bottom */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="relative w-full rounded-t-2xl overflow-hidden border-t border-x border-[#e2bebd]/40 shadow-2xl shadow-[#1c1b1b]/10"
            style={{ height: "520px" }}
          >
            <img
              src={IMG.hero}
              alt="NetBox — Network Source of Truth platform interface"
              className="w-full h-full block object-cover object-top"
              loading="eager"
              decoding="async"
            />
            {/* Bottom gradient into dark section */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1919] to-transparent pointer-events-none" />
          </motion.div>
          <SourceCaption>GitHub — netbox-community/netbox</SourceCaption>
        </div>
      </section>

      {/* ━━━ THE DOCUMENTATION PROBLEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#1a1919] pt-20 md:pt-28 pb-0 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[48%_52%] gap-14 lg:gap-40 items-center">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
              The Documentation Problem
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-6">
              Spreadsheets are not infrastructure documentation.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8] mb-4">
              IP address sheets drift from reality the moment they are created. Rack diagrams in Visio are one migration behind. Network topology in a shared wiki is nobody&apos;s responsibility.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8]">
              NetBox makes infrastructure documentation a first-class engineering discipline — API-driven, version-controlled, and integrated directly into your provisioning pipeline.
            </motion.p>

            {/* Infrastructure illustration */}
            <motion.div variants={fadeIn} className="mt-6 max-w-[95%] rounded-2xl overflow-hidden" style={{ maxHeight: "500px" }}>
              <img
                src={IMG.infrastructure}
                alt="NetBox infrastructure illustration"
                className="w-full h-auto block object-cover object-top"
                loading="lazy"
                decoding="async"
                style={{ maxHeight: "500px" }}
              />
            </motion.div>
          </motion.div>

          {/* Strikethrough replacement list */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="pr-8 md:pr-40">
            <motion.p variants={fadeUp} className="font-headline text-lg text-white/45 italic font-normal mb-6">
              What organisations replace with NetBox:
            </motion.p>
            {REPLACES.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 items-center py-3.5 border-b border-white/[0.07]">
                <span className="font-body text-[10px] text-white/18 tabular-nums shrink-0 w-5">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-[13px] text-white/40 line-through decoration-[#b31c33]/30 leading-snug">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ MODULE SPOTLIGHTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="modules" className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-16">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Core Modules
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-2xl">
              Every layer of network infrastructure, documented.
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-0">
            {SPOTLIGHT_MODULES.map((mod, idx) => (
              <motion.div
                key={mod.tag}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14 ${idx < SPOTLIGHT_MODULES.length - 1 ? "border-b border-[#e2bebd]/40" : ""}`}
              >
                {/* Text — flip order on even rows on desktop */}
                <motion.div
                  variants={fadeUp}
                  className={`flex flex-col gap-5 ${mod.flip ? "lg:order-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-2.5 self-start">
                    <mod.icon size={14} className="text-[#b31c33]" strokeWidth={1.5} />
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-bold">{mod.tag}</span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-[2rem] text-[#1c1b1b] leading-[1.1] tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#5a4040] leading-[1.8]">{mod.body}</p>
                  <ul className="flex flex-col gap-2">
                    {mod.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                        <span className="font-body text-sm text-[#8e706f]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={fadeIn}
                  className={`hidden lg:block ${mod.flip ? "lg:order-1" : ""}`}
                >
                  <div className="rounded-xl overflow-hidden border border-[#e2bebd]/30 shadow-xl shadow-[#1c1b1b]/[0.06] bg-white">
                    <img
                      src={mod.img}
                      alt={mod.imgAlt}
                      className="w-full h-auto block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {mod.source && <SourceCaption>{mod.source}</SourceCaption>}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional modules — alternating image + text */}
          <div className="flex flex-col gap-0">
            {ADDITIONAL_MODULES.map((mod) => (
              <motion.div
                key={mod.tag}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14 border-t border-[#e2bebd]/40"
              >
                <motion.div
                  variants={fadeUp}
                  className={`flex flex-col gap-5 ${mod.flip ? "lg:order-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-2.5 self-start">
                    <mod.icon size={14} className="text-[#b31c33]" strokeWidth={1.5} />
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b31c33] font-bold">{mod.tag}</span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-[2rem] text-[#1c1b1b] leading-[1.1] tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#5a4040] leading-[1.8]">{mod.body}</p>
                  <ul className="flex flex-col gap-2">
                    {mod.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                        <span className="font-body text-sm text-[#8e706f]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className={`hidden lg:block ${mod.flip ? "lg:order-1" : ""}`}
                >
                  <div className="rounded-xl overflow-hidden border border-[#e2bebd]/30 shadow-xl shadow-[#1c1b1b]/[0.06] bg-white">
                    <img
                      src={mod.img}
                      alt={mod.imgAlt}
                      className="w-full h-auto block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {mod.source && <SourceCaption>{mod.source}</SourceCaption>}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Remaining modules — horizontal divider list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid sm:grid-cols-2 gap-0 border-t border-[#e2bebd]/40"
          >
            {REMAINING_MODULES.map((mod, i) => (
              <motion.div
                key={mod.title}
                variants={fadeUp}
                className={`flex flex-col gap-3 py-8 ${i < REMAINING_MODULES.length - 1 ? "sm:border-r border-[#e2bebd]/40 sm:pr-8" : ""} ${i > 0 ? "sm:pl-8" : ""}`}
              >
                <mod.icon size={16} className="text-[#b31c33]" strokeWidth={1.5} />
                <h4 className="font-headline text-[1.05rem] text-[#1c1b1b]">{mod.title}</h4>
                <p className="font-body text-sm text-[#8e706f] leading-[1.7]">{mod.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ ILLUMIA DELIVERY + CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0d0c0c] overflow-hidden px-6 md:px-10 xl:px-16 py-20 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_80%_at_100%_50%,rgba(179,28,51,0.06),transparent)]" />

        <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="max-w-2xl">
            <span className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
              Illumia Delivery
            </span>
            <h2 className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-5">
              Clean data from day one.
            </h2>
            <p className="font-body text-[15px] text-white/42 leading-[1.8]">
              Illumia imports your existing inventory from spreadsheets, SolarWinds IPAM, Infoblox, or live device polling; integrates NetBox into your Ansible and Terraform pipelines; and operates it under SLA as a managed service. A single, queryable, API-driven source of truth your NOC, engineering, and audit teams can all trust.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97]"
            >
              Deploy NetBox
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/open-source-solutions"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.11] text-white/52 hover:text-white hover:border-white/24 px-7 py-3.5 rounded-[10px] font-body text-sm font-medium transition-all duration-200"
            >
              Open Source Solutions
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
