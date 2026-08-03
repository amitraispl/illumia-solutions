"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, CheckCircle2,
  Users, Calculator, Package, Factory, Store,
  Globe2, Megaphone, UserSquare2, MapPin,
  Landmark, ShoppingBag, PanelsTopLeft, Boxes, HeartHandshake, Wand2, Sparkles,
  Code2,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.55 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.045 } } };

/* Plain figure-caption style attribution — no background, sits below the image */
function SourceCaption({ children }: { children: string }) {
  return (
    <p className="mt-2 font-body text-[11px] text-[#5a4040] italic">
      Source: {children}
    </p>
  );
}

// Real visuals — official Odoo assets (odoocdn.com)
const IMG = {
  logo: "/images/logos/odoo-logo.png",
  crm: "/images/odoo/crm.webp",
  accounting: "/images/odoo/accounting.webp",
  inventory: "/images/odoo/inventory.webp",
  manufacturing: "/images/odoo/manufacturing.webp",
  pos: "/images/odoo/pos.webp",
  reporting: "/images/odoo/reporting.webp",
  hospitalDashboard: "/images/odoo/hospital-dashboard.png",
  educationDashboard: "/images/odoo/education-dashboard.png",
};

// Official Odoo app icons
const appIcon = (slug: string) => `/images/odoo/icons/${slug}.png`;

const APP_WALL = [
  { name: "CRM", slug: "crm" },
  { name: "Sales", slug: "sale" },
  { name: "Accounting", slug: "account" },
  { name: "Inventory", slug: "stock" },
  { name: "Manufacturing", slug: "mrp" },
  { name: "Website", slug: "website" },
  { name: "eCommerce", slug: "website_sale" },
  { name: "Point of Sale", slug: "point_of_sale" },
  { name: "Employees", slug: "hr" },
  { name: "Project", slug: "project" },
  { name: "Helpdesk", slug: "helpdesk" },
  { name: "Purchase", slug: "purchase" },
  { name: "Email Marketing", slug: "mass_mailing" },
  { name: "Sign", slug: "sign" },
  { name: "Knowledge", slug: "knowledge" },
  { name: "Live Chat", slug: "im_livechat" },
  { name: "Fleet", slug: "fleet" },
  { name: "Events", slug: "event" },
  { name: "Surveys", slug: "survey" },
  { name: "Documents", slug: "documents" },
];

const CATEGORIES = [
  { icon: Landmark, name: "Finance", apps: ["Accounting", "Invoicing", "Expenses", "Spreadsheet (BI)", "Documents", "Sign"] },
  { icon: ShoppingBag, name: "Sales", apps: ["CRM", "Sales", "POS Shop", "POS Restaurant", "Subscriptions", "Rental"] },
  { icon: PanelsTopLeft, name: "Websites", apps: ["Website Builder", "eCommerce", "Blog", "Forum", "Live Chat", "eLearning"] },
  { icon: Boxes, name: "Supply Chain", apps: ["Inventory", "Manufacturing", "PLM", "Purchase", "Maintenance", "Quality"] },
  { icon: UserSquare2, name: "Human Resources", apps: ["Employees", "Recruitment", "Time Off", "Appraisals", "Referrals", "Fleet"] },
  { icon: Megaphone, name: "Marketing", apps: ["Email Marketing", "SMS Marketing", "Social", "Events", "Automation", "Surveys"] },
  { icon: HeartHandshake, name: "Services", apps: ["Project", "Timesheets", "Field Service", "Helpdesk", "Planning", "Appointments"] },
  { icon: Wand2, name: "Productivity", apps: ["Discuss", "AI", "IoT", "VoIP", "Knowledge", "WhatsApp"] },
];

const MODULE_SPOTLIGHTS = [
  {
    tag: "CRM & Sales",
    icon: Users,
    title: "A pipeline your sales team will actually use.",
    body: "Drag-and-drop kanban pipeline with expected revenue per stage, activity scheduling, and built-in email and VoIP. Quotations generate from opportunities in two clicks, with e-signature and online payment on the quote itself — so closing a deal and booking the revenue are the same motion.",
    points: ["Kanban pipeline with stage revenue forecasts", "Quotations with e-sign and online payment", "Built-in email, VoIP, and activity scheduling", "Lead scoring and automated assignment"],
    img: IMG.crm,
    imgAlt: "Odoo CRM kanban pipeline with opportunity stages",
    source: "odoocdn.com",
    flip: false,
  },
  {
    tag: "Healthcare",
    icon: HeartHandshake,
    title: "Patient records, billing, and inventory on one database.",
    body: "Odoo runs hospital and clinic operations end to end — appointment scheduling, patient records, pharmacy and medical-supply inventory with lot/expiry tracking, and insurance billing — without stitching together separate systems for each department.",
    points: ["Appointment and patient record management", "Pharmacy & medical inventory with expiry tracking", "Insurance claims and patient billing", "HR and payroll for clinical staff"],
    img: IMG.hospitalDashboard,
    imgAlt: "Odoo hospital management pharmacy screen showing medicine stock, brand, and pricing",
    source: "apps.odoocdn.com",
    flip: true,
  },
  {
    tag: "Education",
    icon: UserSquare2,
    title: "Admissions to alumni, run from a single platform.",
    body: "Institutions use Odoo for admissions pipelines in CRM, fee invoicing and online payment, eLearning course delivery, and campus HR — with a parent/student portal reading live from the same records as the back office.",
    points: ["Admissions pipeline via CRM", "Fee invoicing and online payment", "eLearning app for course delivery", "Student/parent self-service portal"],
    img: IMG.educationDashboard,
    imgAlt: "Odoo education dashboard with student, faculty, attendance, and exam-result charts",
    source: "apps.odoocdn.com",
    flip: false,
  },
  {
    tag: "Accounting",
    icon: Calculator,
    title: "Accounting that keeps up with the rest of the suite.",
    body: "Customer invoices, vendor bills, and bank feeds reconcile on one dashboard. AI-assisted bill digitisation reads PDFs into draft entries, and localisation packages cover 80+ countries' tax and reporting rules — including India GST. Every sale, stock move, and manufacturing order posts to the ledger automatically.",
    points: ["Bank feeds with smart reconciliation", "AI bill digitisation from PDF and scan", "80+ country localisations, GST included", "Real-time P&L, balance sheet, and aged reports"],
    img: IMG.accounting,
    imgAlt: "Odoo accounting dashboard with invoices, bills, bank and cash",
    source: "odoocdn.com",
    flip: true,
  },
  {
    tag: "Inventory",
    icon: Package,
    title: "Warehouse logic that mirrors your floor.",
    body: "Double-entry inventory — every stock move has a source and destination, so nothing vanishes. Multi-warehouse routes, push and pull rules, dropshipping, cross-docking, and barcode operations on any device. Replenishment fires automatically from reordering rules or make-to-order flows.",
    points: ["Double-entry stock moves, full traceability", "Routes: dropship, cross-dock, multi-step", "Barcode app for receipts, picks, and counts", "Lot, serial, and expiry tracking"],
    img: IMG.inventory,
    imgAlt: "Odoo inventory warehouse operations view",
    source: "odoocdn.com",
    flip: false,
  },
  {
    tag: "Manufacturing",
    icon: Factory,
    title: "MRP, work centres, and a paperless shop floor.",
    body: "Bills of materials with routings and work-centre capacity, master production scheduling, and a tablet-first shop-floor terminal that shows operators worksheets, quality checks, and time tracking. Maintenance, PLM, and Quality apps snap in when you need them.",
    points: ["Multi-level BOMs with routings and versions", "Shop-floor tablet view with worksheets", "Work-centre load and capacity planning", "Integrated Maintenance, Quality, and PLM"],
    img: IMG.manufacturing,
    imgAlt: "Odoo manufacturing work order scheduling",
    source: "odoocdn.com",
    flip: true,
  },
  {
    tag: "Point of Sale",
    icon: Store,
    title: "Retail and restaurant POS that survives the network.",
    body: "Browser-based POS that keeps selling offline and syncs when the connection returns. Shops, restaurants with floor plans and kitchen displays, self-order kiosks, and payment-terminal integrations — all posting straight into the same inventory and accounting as everything else.",
    points: ["Offline-first — sales continue without internet", "Restaurant floor plans and kitchen display", "Self-service kiosk and mobile ordering", "Direct posting to stock and ledger"],
    img: IMG.pos,
    imgAlt: "Odoo point of sale interface with product grid",
    source: "odoocdn.com",
    flip: false,
  },
];

const REMAINING_MODULES = [
  { icon: Globe2, title: "Website & eCommerce", text: "Drag-and-drop website builder, product pages, payment providers, and shipping connectors — the storefront reads stock and pricing live from the same database." },
  { icon: Megaphone, title: "Marketing Suite", text: "Email, SMS, and social campaigns with marketing automation flows triggered by CRM stages, cart abandonment, or any field in the system." },
  { icon: UserSquare2, title: "HR & People", text: "Employees, recruitment pipeline, time off, appraisals, expenses, and fleet — employee self-service through the same portal." },
  { icon: MapPin, title: "Field Service & Helpdesk", text: "SLA-driven tickets, on-site interventions with worksheets, planning Gantt for crews, and timesheets that flow into invoicing." },
];

// Engineered facts — sourced from odoo.com
const ENGINEERING_STATS = [
  { v: "28M+", l: "Active users worldwide" },
  { v: "100k+", l: "Developers in the OSS community" },
  { v: "40k+", l: "Apps in the community store" },
  { v: "<90ms", l: "Average operation response time" },
];

const ENGINEERING_POINTS = [
  {
    icon: Sparkles,
    title: "AI Native, Not Bolted On",
    text: "AI is wired into every app — CRM lead scoring, invoice OCR, inventory forecasting, support triage — not a separate add-on module billed and configured apart from the rest.",
  },
  {
    icon: Wand2,
    title: "Studio + Full Source Access",
    text: "No-code Studio for field, view, and automation changes your team can own; the complete Python/XML source on GitHub for the changes Studio can't reach.",
  },
  {
    icon: Code2,
    title: "No Vendor Lock-In",
    text: "Every record you create is yours — export it, self-host it, or move it. Odoo.sh, on-premise, or Illumia's private cloud all run the same open codebase.",
  },
];

const ADOPTION = [
  {
    n: "01",
    title: "Prove it",
    span: "Weeks 1–3",
    apps: ["CRM", "Sales", "Invoicing"],
    text: "Start with the revenue engine. Pipeline, quotations, and invoicing live within weeks — one team, one workflow, visible ROI before any deep process change.",
  },
  {
    n: "02",
    title: "Run operations",
    span: "Months 2–4",
    apps: ["Inventory", "Purchase", "Accounting"],
    text: "Extend to stock, procurement, and the full ledger. Data model is already shared — customers, products, and pricing carry over with zero re-entry.",
  },
  {
    n: "03",
    title: "Scale everything",
    span: "Month 5 →",
    apps: ["Manufacturing", "HR", "Website", "Custom modules"],
    text: "Bring manufacturing, people, and the storefront onto the platform. Illumia builds custom modules in Python/XML where the standard apps stop.",
  },
];

export default function OdooContent() {
  return (
    <div className="overflow-x-hidden">
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[92dvh] bg-[#fcf9f8] overflow-hidden flex items-center">

        {/* Dot texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(28,27,27,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 w-[50vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_left,rgba(179,28,51,0.06),transparent_70%)]" />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 pt-28 md:pt-36 pb-16">
          <div className="grid lg:grid-cols-[54%_46%] gap-12 xl:gap-16 items-center">

            {/* ── Left: text ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col">

              <motion.div variants={fadeUp} className="mb-5">
                <img
                  src={IMG.logo}
                  alt="Odoo"
                  className="h-14 md:h-16 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
                <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">
                  Open-Source Business Apps · Community & Enterprise
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-headline text-[3.2rem] sm:text-6xl md:text-7xl xl:text-[4.8rem] text-[#1c1b1b] leading-[0.9] tracking-[-0.03em] mb-7"
              >
                The whole company,<br />
                <span className="italic font-normal text-[#b31c33]">one app at a time.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="font-body text-[15px] text-[#5a4040] leading-[1.8] max-w-[540px] mb-9">
                Odoo is a modular suite of 80+ integrated business apps — CRM, accounting, inventory, manufacturing, website, POS — sharing one database. Install the app you need today; the next one is a click away, not a new vendor.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeIn} className="flex flex-wrap gap-x-8 gap-y-4 pb-9 mb-9 border-b border-[#e2bebd]/60">
                {[
                  { v: "28M+", l: "Users worldwide" },
                  { v: "80+", l: "Official apps" },
                  { v: "40k+", l: "Community modules" },
                  { v: "LGPLv3", l: "Community edition" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-headline text-[1.6rem] text-[#1c1b1b] leading-none mb-1">{s.v}</div>
                    <div className="font-body text-[11px] text-[#8e706f] tracking-wide">{s.l}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-6 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide shadow-lg shadow-[#b31c33]/20 transition-all duration-200 active:scale-[0.97]"
                >
                  Plan Your Rollout
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="#apps"
                  className="inline-flex items-center gap-2 border border-[#b31c33]/25 text-[#b31c33] px-6 py-3.5 rounded-[10px] font-body text-sm font-medium hover:bg-[#b31c33] hover:text-white transition-all duration-200"
                >
                  Explore the Apps
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Right: app icon wall ── */}
            <div className="hidden lg:block">
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="relative grid grid-cols-4 gap-4"
            >
              <div aria-hidden className="absolute -inset-8 bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(179,28,51,0.05),transparent)] pointer-events-none" />
              {APP_WALL.map((app, i) => (
                <motion.div key={app.slug} variants={popIn} className="relative">
                  <motion.div
                    animate={i % 5 === 2 ? { y: [0, -7, 0] } : i % 7 === 3 ? { y: [0, 6, 0] } : undefined}
                    transition={{ duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: (i % 4) * 0.7 }}
                    className="group flex flex-col items-center gap-2.5 bg-white rounded-2xl border border-[#e2bebd]/50 px-3 py-5 shadow-sm hover:shadow-xl hover:shadow-[#b31c33]/[0.08] hover:border-[#b31c33]/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={appIcon(app.slug)}
                      alt={`Odoo ${app.name}`}
                      className="w-11 h-11 object-contain"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="font-body text-[10px] text-[#5a4040] font-semibold tracking-wide text-center leading-tight">
                      {app.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <SourceCaption>odoo.com</SourceCaption>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CATEGORY MAP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0d0c0c] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mb-14">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
              The App Map
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-6">
              A suite, not a patchwork.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8]">
              Every Odoo app writes to the same PostgreSQL database and shares the same customers, products, and permissions. Installing the next app adds capability — never another integration project.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]"
          >
            {CATEGORIES.map((cat) => (
              <motion.div key={cat.name} variants={fadeUp} className="bg-[#0d0c0c] hover:bg-[#151313] transition-colors duration-200 p-7 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <cat.icon size={15} className="text-[#b31c33]" strokeWidth={1.5} />
                  <h3 className="font-headline text-[1.05rem] text-white tracking-tight">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.apps.map((a) => (
                    <span key={a} className="font-body text-[10.5px] font-semibold text-white/40 border border-white/[0.08] rounded-md px-2 py-1 tracking-wide">
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ APP SPOTLIGHTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="apps" className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-10">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Flagship Apps
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-2xl">
              The apps that carry a business.
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-0">
            {MODULE_SPOTLIGHTS.map((mod, idx) => (
              <motion.div
                key={mod.tag}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-14 ${idx < MODULE_SPOTLIGHTS.length - 1 ? "border-b border-[#e2bebd]/40" : ""}`}
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

          {/* Remaining app families */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#e2bebd]/40"
          >
            {REMAINING_MODULES.map((mod, i) => (
              <motion.div
                key={mod.title}
                variants={fadeUp}
                className={`flex flex-col gap-3 py-8 ${i < REMAINING_MODULES.length - 1 ? "lg:border-r border-[#e2bebd]/40 lg:pr-8" : ""} ${i > 0 ? "lg:pl-8" : ""}`}
              >
                <mod.icon size={16} className="text-[#b31c33]" strokeWidth={1.5} />
                <h4 className="font-headline text-[1.05rem] text-[#1c1b1b]">{mod.title}</h4>
                <p className="font-body text-sm text-[#8e706f] leading-[1.7]">{mod.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ ENGINEERED, NOT JUST LICENSED ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#1a1919] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mb-14">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
              Engineered, Not Just Licensed
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-6">
              Open source doesn&apos;t mean slow, and AI isn&apos;t a bolt-on module.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8]">
              28 million people run their business on Odoo today. Illumia deploys the same platform — full source access, native AI, and an ecosystem too large for any single vendor to lock down.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-5"
          >
            {ENGINEERING_STATS.map((s) => (
              <motion.div
                key={s.l}
                variants={fadeUp}
                className="rounded-2xl p-6 md:p-8 bg-white/[0.03] border border-white/[0.08]"
              >
                <div className="font-headline text-3xl md:text-[2.4rem] text-[#b31c33] leading-none mb-2">{s.v}</div>
                <div className="font-body text-[11px] text-white/40 tracking-wide leading-snug">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid lg:grid-cols-3 gap-4 md:gap-5"
          >
            {ENGINEERING_POINTS.map((pt) => (
              <motion.div
                key={pt.title}
                variants={fadeUp}
                className="rounded-2xl p-8 md:p-10 flex flex-col gap-4 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
              >
                <pt.icon size={18} className="text-[#b31c33]" strokeWidth={1.5} />
                <h3 className="font-headline text-[1.3rem] text-white tracking-tight">{pt.title}</h3>
                <p className="font-body text-[13.5px] text-white/55 leading-[1.7]">{pt.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ ADOPTION PATH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fcf9f8] pb-20 md:pb-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto pt-4 border-t border-[#e2bebd]/40">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-14 pt-16">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Illumia Adoption Path
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-2xl">
              Nobody should &ldquo;big-bang&rdquo; an ERP. Roll it out in waves.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative grid md:grid-cols-3 gap-5"
          >
            {/* Connector rail */}
            <div className="hidden md:block absolute top-[38px] left-[16%] right-[16%] h-[1px] bg-[#e2bebd]/60 overflow-hidden">
              <motion.div
                className="absolute top-0 h-full w-28 bg-gradient-to-r from-transparent via-[#b31c33] to-transparent"
                animate={{ left: ["-15%", "115%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {ADOPTION.map((ph) => (
              <motion.div key={ph.n} variants={fadeUp} className="relative bg-white border border-[#e2bebd]/40 rounded-2xl p-8 flex flex-col gap-5 hover:border-[#b31c33]/25 hover:shadow-xl hover:shadow-[#b31c33]/[0.05] transition-all duration-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums">{ph.n}</span>
                  <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[#8e706f] font-bold">{ph.span}</span>
                </div>
                <h3 className="font-headline text-xl text-[#1c1b1b]">{ph.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {ph.apps.map((a) => (
                    <span key={a} className="font-body text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1.5 border border-[#e2bebd]/60 bg-[#fcf9f8] text-[#5a4040]">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="font-body text-[13px] text-[#5a4040] leading-[1.8]">{ph.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0d0c0c] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMG.reporting}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-[0.05] scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0c] via-[#0d0c0c]/90 to-[#0d0c0c]/70" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_50%,rgba(179,28,51,0.07),transparent)]" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start gap-3 mb-5">
              <img src={IMG.logo} alt="Odoo" className="h-9 md:h-10 w-auto brightness-0 invert opacity-60" decoding="async" />
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">Community & Enterprise</span>
            </div>
            <h2 className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-5">
              Start with one app. We&apos;ll handle the rest.
            </h2>
            <p className="font-body text-[15px] text-white/42 leading-[1.8] max-w-xl">
              Illumia delivers Odoo end-to-end — edition and app scoping, implementation, custom module development, version upgrades, data migration, and managed hosting under SLA on your infrastructure or our private cloud.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97]"
            >
              Plan Your Rollout
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/erpnext"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.11] text-white/52 hover:text-white hover:border-white/24 px-7 py-3.5 rounded-[10px] font-body text-sm font-medium transition-all duration-200"
            >
              Compare with ERPNext
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
