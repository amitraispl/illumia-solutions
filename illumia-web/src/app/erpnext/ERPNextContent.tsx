"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, animate, useInView } from "motion/react";
import {
  ArrowRight, ArrowUpRight, CheckCircle2,
  Calculator, Package, Factory, Users, ClipboardList, Store, BadgeCheck, LifeBuoy, ShoppingCart, Wrench,
  Code2, Database, Workflow, Globe2,
  UserPlus, FileText, ClipboardCheck, Truck, Receipt, CreditCard,
  HeartHandshake, GraduationCap,
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
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

// Real visuals — official ERPNext v16 screenshots (erpnext.com / frappe GitHub) + frappe.io
const IMG = {
  logo: "/images/logos/erpnext-logo.jpg",
  hero: "/images/erpnext/hero.png",
  accounting: "/images/erpnext/accounting.png",
  inventory: "/images/erpnext/inventory.png",
  manufacturing: "/images/erpnext/manufacturing.png",
  crm: "/images/erpnext/crm.png",
  procurement: "/images/erpnext/procurement.png",
  projects: "/images/erpnext/projects.png",
  pos: "/images/erpnext/pos.png",
  healthcare: "/images/erpnext/healthcare.png",
  education: "/images/erpnext/education.png",
};

/* Plain figure-caption style attribution — no background, sits below the image */
function SourceCaption({ children }: { children: string }) {
  return (
    <p className="mt-2 font-body text-[11px] text-[#5a4040] italic">
      Source: {children}
    </p>
  );
}

/* Framed screenshot for images without their own window chrome */
function BrowserFrame({ src, alt, source, className = "" }: { src: string; alt: string; source?: string; className?: string }) {
  return (
    <div className={className}>
      <div className="rounded-xl overflow-hidden border border-[#e2bebd]/40 shadow-2xl shadow-[#1c1b1b]/[0.12] bg-white">
        <div className="bg-[#f4ecea] px-4 py-2.5 flex items-center gap-3 border-b border-[#e2bebd]/40">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1c1b1b]/[0.1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1c1b1b]/[0.1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1c1b1b]/[0.1]" />
          </div>
          <div className="flex-1 h-[18px] rounded bg-[#1c1b1b]/[0.05] max-w-[200px]" />
        </div>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" decoding="async" />
      </div>
      {source && <SourceCaption>{source}</SourceCaption>}
    </div>
  );
}

/* v16 screenshots ship their own dark window bezel — render raw */
function RawShot({ src, alt, source, className = "", eager = false }: { src: string; alt: string; source?: string; className?: string; eager?: boolean }) {
  return (
    <div className={className}>
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#1c1b1b]/[0.18]">
        <img src={src} alt={alt} className="w-full h-auto block" loading={eager ? "eager" : "lazy"} decoding="async" />
      </div>
      {source && <SourceCaption>{source}</SourceCaption>}
    </div>
  );
}

/* Count-up number that animates when scrolled into view */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-IN");
      },
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={wrapRef}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

const TICKER = [
  "Accounting", "Inventory", "Manufacturing", "CRM", "Selling", "Buying",
  "Projects", "Point of Sale", "Quality", "Support", "Assets", "HR & Payroll",
];

// The disconnected stack ERPNext consolidates
const SPRAWL = [
  { replaces: "Tally · QuickBooks · Sage", module: "Accounting", note: "Multi-company, multi-currency ledger with GST/TDS built in" },
  { replaces: "Salesforce · Zoho CRM", module: "CRM & Selling", note: "Lead to quotation to sales order in one pipeline" },
  { replaces: "Excel stock registers", module: "Inventory", note: "Serial, batch, and barcode tracking across warehouses" },
  { replaces: "SAP B1 · NetSuite · Dynamics", module: "Full ERP Core", note: "Same coverage, zero per-seat licence" },
  { replaces: "MS Project · Asana", module: "Projects", note: "Costing, timesheets, and billing tied to the ledger" },
  { replaces: "Zendesk · Freshdesk", module: "Support", note: "SLA-driven helpdesk linked to customers and serial numbers" },
];

// Lead-to-cash chain — every step is the same database row lineage
const CHAIN = [
  { icon: UserPlus, label: "Lead", doc: "CRM-LEAD-0091" },
  { icon: FileText, label: "Quotation", doc: "SAL-QTN-0034" },
  { icon: ClipboardCheck, label: "Sales Order", doc: "SAL-ORD-0027" },
  { icon: Truck, label: "Delivery Note", doc: "MAT-DN-0019" },
  { icon: Receipt, label: "Invoice", doc: "ACC-SINV-0042" },
  { icon: CreditCard, label: "Payment", doc: "ACC-PAY-0038" },
];

const MODULE_SPOTLIGHTS = [
  {
    tag: "Accounting",
    icon: Calculator,
    title: "A full double-entry ledger, not an add-on.",
    body: "Multi-company, multi-currency general ledger with accounts payable and receivable, fixed assets, budgeting, and cost centres. Financial statements — P&L, balance sheet, cash flow — render in real time with drill-down from any line item to the source voucher. India GST, TDS, and e-invoicing work out of the box.",
    points: ["Multi-company and multi-currency consolidation", "Real-time P&L, balance sheet, and cash flow", "GST, TDS, and e-invoicing preconfigured", "Bank reconciliation and payment entries"],
    img: IMG.accounting,
    imgAlt: "ERPNext accounting dashboard with financial statements",
    source: "frappe.io",
    framed: true,
    flip: false,
  },
  {
    tag: "Inventory",
    icon: Package,
    title: "Every item, batch, and serial number accounted for.",
    body: "The stock module tracks items across unlimited warehouses with serial number, batch, and barcode support. A perpetual stock ledger keeps inventory valuation — FIFO, moving average, or LIFO — synchronised with the general ledger, so your books and your shelves never disagree.",
    points: ["Multi-warehouse with bin-level tracking", "Serial, batch, and expiry management", "Automated reorder levels and material requests", "Perpetual valuation synced to accounts"],
    img: IMG.inventory,
    imgAlt: "ERPNext stock summary with projected quantities per warehouse",
    source: "erpnext.com",
    framed: false,
    flip: true,
  },
  {
    tag: "Manufacturing",
    icon: Factory,
    title: "From multi-level BOM to finished goods.",
    body: "Production planning built for discrete and process manufacturing — multi-level bills of materials, work orders, job cards, operations, and workstations. Capacity planning schedules against real workstation availability, and subcontracting flows handle sent-out materials with full costing.",
    points: ["Multi-level BOMs with operation costing", "Work orders and shop-floor job cards", "Capacity planning per workstation", "Subcontracting with material tracking"],
    img: IMG.manufacturing,
    imgAlt: "ERPNext job card calendar scheduling work orders",
    source: "erpnext.com",
    framed: false,
    flip: false,
  },
  {
    tag: "CRM & Selling",
    icon: Users,
    title: "Lead to cash in one unbroken workflow.",
    body: "Capture leads, qualify opportunities, issue quotations, convert to sales orders, deliver, and invoice — every step in the same system that runs your stock and your ledger. No connector subscriptions, no sync failures, no integration tax between your CRM and your ERP.",
    points: ["Lead and opportunity pipeline", "Quotations with pricing rules and margins", "Sales orders linked to stock and delivery", "Customer portal for orders and invoices"],
    img: IMG.crm,
    imgAlt: "ERPNext CRM lead and opportunity view",
    source: "frappe.io",
    framed: true,
    flip: true,
  },
  {
    tag: "Healthcare",
    icon: HeartHandshake,
    title: "Patient records and billing, without a separate hospital system.",
    body: "Frappe Health extends the same ERPNext core into outpatient and inpatient care — appointment scheduling, patient records under HL7 FHIR, admission and bed management, and pharmacy stock — with every bill posting straight to the same ledger as the rest of the business.",
    points: ["Patient records and medical history (HL7 FHIR)", "OPD/IPD admission and bed management", "Pharmacy stock synced to inventory", "Billing posts directly to the ledger"],
    img: IMG.healthcare,
    imgAlt: "ERPNext Healthcare patient appointment list by clinic department and status",
    source: "frappe.io",
    framed: false,
    flip: false,
  },
  {
    tag: "Education",
    icon: GraduationCap,
    title: "Admissions, fees, and attendance on the same framework.",
    body: "Frappe Education runs admissions and program enrollment, fee schedules with online payment, course and class scheduling, and attendance — with a student portal reading live from the same DocTypes as accounts and HR.",
    points: ["Admissions and program enrollment", "Fee schedules with online payment", "Course, class, and attendance scheduling", "Student portal for grades and fees"],
    img: IMG.education,
    imgAlt: "ERPNext Education program enrollment and student record",
    source: "frappe.io",
    framed: false,
    flip: true,
  },
  {
    tag: "Procurement",
    icon: ShoppingCart,
    title: "Procure-to-pay with three-way matching.",
    body: "Material requests roll up into RFQs and supplier quotations, then purchase orders, goods receipt, and supplier invoices — with three-way matching between order, receipt, and invoice. Supplier scorecards track delivery and quality performance so negotiations run on data, not anecdotes.",
    points: ["Material requests and multi-level approvals", "RFQs and supplier quotation comparison", "Three-way match on order, receipt, invoice", "Supplier scorecards and portals"],
    img: IMG.procurement,
    imgAlt: "ERPNext procurement purchase order workflow",
    source: "frappe.io",
    framed: true,
    flip: false,
  },
  {
    tag: "Projects",
    icon: ClipboardList,
    title: "Project costing tied straight to the ledger.",
    body: "Tasks, Gantt and Kanban views, timesheets, and expense claims — with planned-versus-actual costing per project. Bill clients on time-and-material, fixed-price, or milestone terms, and let timesheets flow into both invoicing and payroll without re-entry.",
    points: ["Gantt, Kanban, and task dependencies", "Timesheets linked to billing and payroll", "Planned vs actual cost per project", "Milestone and retention billing"],
    img: IMG.projects,
    imgAlt: "ERPNext task Gantt chart with dependencies",
    source: "erpnext.com",
    framed: false,
    flip: true,
  },
];

const REMAINING_MODULES = [
  { icon: Store, title: "Point of Sale", text: "Browser-based POS with offline mode, multi-store profiles, shift management, and direct posting to stock and accounts." },
  { icon: BadgeCheck, title: "Quality Management", text: "Inspection plans, quality checks on incoming and outgoing goods, non-conformance tracking, and quality analytics." },
  { icon: LifeBuoy, title: "Support & Helpdesk", text: "Ticketing with SLA management, auto-assignment, maintenance visits, and a customer knowledge base." },
  { icon: Wrench, title: "Asset Management", text: "Asset lifecycle from purchase to scrap — depreciation schedules, maintenance logs, and movement tracking." },
];

const FRAPPE_POINTS = [
  {
    icon: Database,
    title: "Custom DocTypes, no code",
    text: "Model new business objects — forms, fields, permissions, list views — from the browser. What takes an SAP consultant a quarter takes an analyst an afternoon.",
  },
  {
    icon: Workflow,
    title: "Visual workflow builder",
    text: "Approval chains, state transitions, and conditional routing configured visually. Adapt the system to your process, not the other way around.",
  },
  {
    icon: Code2,
    title: "Python & JavaScript extensibility",
    text: "Server scripts, scheduled jobs, and full custom apps on the Frappe framework. REST API on every DocType, webhooks on every event.",
  },
  {
    icon: Globe2,
    title: "An ecosystem, not a silo",
    text: "Frappe HR, Frappe CRM, Helpdesk, Insights BI, and hundreds of community apps install alongside ERPNext on the same framework.",
  },
];

const PHASES = [
  {
    n: "01", title: "Discover & Map", when: "Weeks 1–2",
    items: ["Business process workshops per department", "Chart of accounts and item master design", "Gap analysis against standard modules", "Customisation and integration register"],
  },
  {
    n: "02", title: "Configure & Customise", when: "Weeks 3–6",
    items: ["Company, tax, and workflow setup", "Custom DocTypes and print formats", "Role-based permission matrix", "Integrations — banks, e-commerce, APIs"],
  },
  {
    n: "03", title: "Migrate & Validate", when: "Weeks 7–10",
    items: ["Master and transaction data migration", "Opening balances reconciled to legacy ERP", "Parallel-run validation period", "UAT sign-off per module"],
  },
  {
    n: "04", title: "Train & Operate", when: "Weeks 11–12 →",
    items: ["Role-based user training and runbooks", "Go-live with hypercare support", "Managed hosting with backups under SLA", "Version upgrades and AMC option"],
  },
];

export default function ERPNextContent() {
  return (
    <div className="overflow-x-hidden">
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#fcf9f8] pt-24 md:pt-36 pb-0 overflow-hidden">

        {/* Dot texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(28,27,27,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient red glow */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,rgba(179,28,51,0.06),transparent_70%)]" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16">

          <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10 md:mb-12">

            {/* ERPNext logo + wordmark */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <img
                src={IMG.logo}
                alt="ERPNext"
                className="h-14 md:h-16 w-auto rounded-lg object-contain"
                loading="eager"
                decoding="async"
              />
              <span className="font-headline text-xl md:text-2xl text-[#1c1b1b] tracking-tight">ERPNext</span>
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">
                100% Open-Source ERP · GPLv3
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
              <motion.h1
                variants={fadeUp}
                className="font-headline text-[3.2rem] sm:text-6xl md:text-7xl xl:text-[5.2rem] text-[#1c1b1b] leading-[0.9] tracking-[-0.03em]"
              >
                One system.<br />
                <span className="italic font-normal text-[#b31c33]">Every business function.</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 shrink-0 pb-2">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-6 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide shadow-lg shadow-[#b31c33]/20 transition-all duration-200 active:scale-[0.97]"
                >
                  Start Implementation
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
              Accounting, inventory, manufacturing, CRM, procurement, and projects — one open-source platform built by Frappe, trusted by 30,000+ companies, with zero per-seat licensing.
            </motion.p>

            {/* Stat ribbon */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-x-10 gap-y-4 mt-9 pt-8 border-t border-[#e2bebd]/50">
              <div>
                <div className="font-headline text-[1.7rem] text-[#1c1b1b] leading-none mb-1">
                  <CountUp to={30000} suffix="+" />
                </div>
                <div className="font-body text-[11px] text-[#8e706f] tracking-wide">Companies running ERPNext</div>
              </div>
              {[
                { v: "$0", l: "Per-seat licence, forever" },
                { v: "GPLv3", l: "Open-source licence" },
                { v: "10+", l: "Integrated modules" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-headline text-[1.7rem] text-[#1c1b1b] leading-none mb-1">{s.v}</div>
                  <div className="font-body text-[11px] text-[#8e706f] tracking-wide">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Module ticker — full-bleed marquee */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="relative border-y border-[#e2bebd]/40 bg-white/40 py-3.5 mb-12 md:mb-16 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fcf9f8] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fcf9f8] to-transparent z-10" />
          <motion.div
            className="flex gap-0 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          >
            {[...TICKER, ...TICKER].map((m, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="font-headline italic text-lg md:text-xl text-[#1c1b1b]/70 px-6 whitespace-nowrap">{m}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b31c33]/50 shrink-0" />
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero screenshot — v16 P&L, floats over the dark section edge */}
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="relative"
          >
            <RawShot
              src={IMG.hero}
              alt="ERPNext v16 profit and loss statement with real-time financial charts"
              eager
            />

            {/* Floating KPI chip — top right */}
            <motion.div
              className="hidden md:flex absolute -top-6 right-8 xl:right-16 z-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-white rounded-xl border border-[#e2bebd]/60 shadow-xl shadow-[#1c1b1b]/[0.08] px-4 py-3"
              >
                <span className="relative flex w-2 h-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                    animate={{ scale: [1, 2.1], opacity: [0.6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.18em] text-[#8e706f] font-bold leading-none mb-1">Net Profit · Live</p>
                  <p className="font-headline text-[1.05rem] text-[#1c1b1b] leading-none">$ 3,80,000.00</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating doc chip — bottom left */}
            <motion.div
              className="hidden md:flex absolute bottom-16 -left-4 xl:-left-8 z-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-[#1c1b1b] rounded-xl border border-white/10 shadow-xl shadow-[#1c1b1b]/25 px-4 py-3"
              >
                <Factory size={15} className="text-[#b31c33] shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-[10px] text-white/40 leading-none mb-1">MFG-WO-2023-00003</p>
                  <p className="font-body text-[12px] text-white font-semibold leading-none">Work Order → In Process</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Gradient bleed into dark section */}
            <div className="absolute inset-x-0 -bottom-1 h-28 bg-gradient-to-t from-[#0d0c0c] to-transparent pointer-events-none" />
          </motion.div>
          <SourceCaption>GitHub — frappe/erpnext</SourceCaption>
        </div>
      </section>

      {/* ━━━ THE SPRAWL PROBLEM + THE CHAIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0d0c0c] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mb-14">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
              The Software Sprawl Problem
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-6">
              Six subscriptions. Six databases. Zero agreement on the numbers.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8]">
              Accounting in Tally, CRM in Zoho, stock in Excel, tickets in Freshdesk — each tool bills per seat, holds its own copy of your customers and items, and disagrees with the others at month-end. ERPNext consolidates the stack into one database where a sales order, a stock movement, and a ledger entry are the same transaction.
            </motion.p>
          </motion.div>

          {/* Consolidation grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] mb-20 md:mb-24"
          >
            {SPRAWL.map((cell) => (
              <motion.div key={cell.module} variants={fadeUp} className="group bg-[#0d0c0c] hover:bg-[#151313] transition-colors duration-200 p-7 md:p-8 flex flex-col gap-3">
                <span className="font-body text-[12px] text-white/30 line-through decoration-[#b31c33]/40 leading-snug">
                  {cell.replaces}
                </span>
                <div className="flex items-center gap-2.5">
                  <ArrowRight size={12} className="text-[#b31c33] shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="font-headline text-[1.15rem] text-white tracking-tight">{cell.module}</span>
                </div>
                <p className="font-body text-[12.5px] text-white/38 leading-[1.7]">{cell.note}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Lead-to-cash animated chain */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <h3 className="font-headline text-3xl md:text-[2.2rem] text-white leading-[1.05] tracking-tight">
                One transaction chain,<br />
                <span className="italic font-normal text-[#b31c33]">zero re-entry.</span>
              </h3>
              <p className="font-body text-[13px] text-white/38 leading-[1.8] max-w-sm">
                Every document links to the one before it. Convert a lead to a quotation, a quotation to an order — stock, ledger, and receivables update themselves.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="relative">
              {/* Connector rail with travelling pulse — desktop */}
              <div className="hidden lg:block absolute top-[26px] left-[8%] right-[8%] h-[1px] bg-white/[0.08] overflow-hidden">
                <motion.div
                  className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-[#b31c33] to-transparent"
                  animate={{ left: ["-10%", "110%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
                {CHAIN.map((step, i) => (
                  <motion.div key={step.label} variants={fadeUp} className="flex flex-col items-center text-center gap-3">
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-2 rounded-full border border-[#b31c33]/25"
                        animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.42, ease: "easeOut" }}
                      />
                      <div className="relative w-[52px] h-[52px] rounded-full bg-[#151313] border border-white/[0.1] flex items-center justify-center">
                        <step.icon size={19} className="text-[#b31c33]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <p className="font-headline text-[1rem] text-white leading-none mb-1.5">{step.label}</p>
                      <p className="font-mono text-[9.5px] text-white/28 tracking-wide">{step.doc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ MODULE SPOTLIGHTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="modules" className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-10">
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
              Core Modules
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-2xl">
              Every department, one database.
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

                <motion.div variants={fadeIn} className={`hidden lg:block ${mod.flip ? "lg:order-1" : ""}`}>
                  {mod.framed
                    ? <BrowserFrame src={mod.img} alt={mod.imgAlt} source={mod.source} />
                    : <RawShot src={mod.img} alt={mod.imgAlt} source={mod.source} />}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Remaining modules — divided grid */}
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

      {/* ━━━ FRAPPE FRAMEWORK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#1a1919] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[45%_1fr] gap-14 lg:gap-20 items-center">

          {/* Left: editorial + DocType mock */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-5">
              Built on the Frappe Framework
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-6">
              An ERP you can actually change.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-[15px] text-white/45 leading-[1.8] mb-8">
              Every screen in ERPNext is a DocType — a metadata-defined model with its own fields, permissions, API endpoint, and audit trail. Extending the platform means composing DocTypes, not decompiling a vendor binary or paying for ABAP consultants.
            </motion.p>

            {/* DocType terminal mock */}
            <motion.div variants={fadeIn} className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d0c0c]">
              <div className="px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-white/[0.12]" />
                <span className="w-2 h-2 rounded-full bg-white/[0.12]" />
                <span className="font-mono text-[10px] text-white/25 ml-2">custom_doctype.json</span>
              </div>
              <pre className="p-5 font-mono text-[11.5px] leading-[1.9] text-white/45 overflow-x-auto">
{`{
  "doctype": "Machine Service Log",
  "fields": [
    { "fieldname": "asset",     "fieldtype": "Link" },
    { "fieldname": "technician","fieldtype": "Link" },
    { "fieldname": "downtime",  "fieldtype": "Duration" }
  ],
  "permissions": ["Maintenance User"],
  "api": "/api/resource/Machine Service Log"
}`}<motion.span
                  aria-hidden
                  className="inline-block w-[7px] h-[13px] bg-[#b31c33]/70 align-middle ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                />
              </pre>
            </motion.div>
          </motion.div>

          {/* Right: extensibility points */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-0">
            {FRAPPE_POINTS.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp} className={`flex gap-6 py-8 ${i < FRAPPE_POINTS.length - 1 ? "border-b border-white/[0.07]" : ""}`}>
                <div className="w-11 h-11 rounded-xl border border-white/[0.09] bg-white/[0.03] flex items-center justify-center shrink-0">
                  <p.icon size={17} className="text-[#b31c33]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-headline text-[1.25rem] text-white tracking-tight mb-2">{p.title}</h3>
                  <p className="font-body text-[13.5px] text-white/42 leading-[1.8]">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ IMPLEMENTATION METHODOLOGY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fcf9f8] py-20 md:py-28 px-6 md:px-10 xl:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <motion.span variants={fadeUp} className="font-body text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-[#b31c33] font-bold block mb-4">
                Illumia Implementation Methodology
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-[2.8rem] text-[#1c1b1b] leading-[1.05] tracking-tight max-w-2xl">
                ERP projects fail on process, not software. Ours don&apos;t.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="font-body text-[13px] text-[#8e706f] leading-[1.8] max-w-xs lg:text-right lg:pb-1">
              Typical mid-market timeline shown. Multi-entity and manufacturing-heavy rollouts are scoped per phase.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e2bebd]/20">
            {PHASES.map((p) => (
              <motion.div key={p.n} variants={fadeUp} className="bg-[#fcf9f8] hover:bg-white transition-colors duration-200 p-8 md:p-10 flex flex-col gap-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-headline italic text-[#b31c33] text-4xl leading-none tabular-nums">{p.n}</span>
                  <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[#8e706f] font-bold">{p.when}</span>
                </div>
                <h3 className="font-headline text-xl text-[#1c1b1b]">{p.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 items-start">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#b31c33] shrink-0 mt-[7px]" />
                      <span className="font-body text-sm text-[#5a4040] leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0d0c0c] overflow-hidden">
        {/* Background screenshot — dimmed */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMG.pos}
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
              <img src={IMG.logo} alt="ERPNext" className="h-12 md:h-14 w-auto rounded-md opacity-70" decoding="async" />
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold">Open-Source ERP</span>
            </div>
            <h2 className="font-headline text-4xl md:text-[2.8rem] text-white leading-[1.05] tracking-tight mb-5">
              Ready to own your ERP outright?
            </h2>
            <p className="font-body text-[15px] text-white/42 leading-[1.8] max-w-xl">
              Illumia delivers ERPNext end-to-end — requirements workshops, configuration, data migration from your legacy ERP, training, and managed hosting under SLA on your infrastructure or our private cloud.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#b31c33] hover:bg-[#9e1829] text-white px-7 py-3.5 rounded-[10px] font-body text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97]"
            >
              Start Implementation
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/application-solutions"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.11] text-white/52 hover:text-white hover:border-white/24 px-7 py-3.5 rounded-[10px] font-body text-sm font-medium transition-all duration-200"
            >
              Application Solutions
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
