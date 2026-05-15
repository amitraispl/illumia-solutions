import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "ERPNext — Open-Source Enterprise ERP | Illumia Solutions",
  description:
    "Deploy ERPNext on your own infrastructure — full accounting, manufacturing, HR, CRM, inventory, and project management. No per-seat licensing, no vendor lock-in. Implementation, migration, and managed hosting by Illumia.",
};

export default function ERPNextPage() {
  return (
    <RichServicePageTemplate
      badge="Open-Source ERP"
      title="ERPNext —"
      titleHighlight="Enterprise ERP, No Enterprise Price Tag."
      description="SAP, Oracle, and Microsoft Dynamics are priced for Fortune 500 budgets. ERPNext — built by Frappe Technologies — is a 100% open-source ERP platform under the GNU GPLv3, covering accounting, manufacturing, HR, CRM, inventory, projects, and asset management. Deploy on your own servers or in Illumia's private cloud with no per-seat licensing, no concurrent-user limits, and no vendor lock-in."
      sectionTitle="What ERPNext Covers"
      ctaText="Start ERPNext Implementation"
      heroImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=85&auto=format&fit=crop"
      darkHero={true}
      closingText="Illumia delivers ERPNext as a complete business platform — not just a software install. Our team handles requirements gathering, chart-of-accounts design, custom DocType development, data migration from legacy ERPs, user training, and post-go-live support. Whether you're a 30-person manufacturer or a multi-entity group, the same platform scales with you — without renegotiating a licence agreement every year."
      features={[
        {
          title: "Accounting & Finance",
          items: [
            {
              label: "Full Double-Entry Ledger",
              text: "Multi-currency, multi-company general ledger with full audit trail, journal entries, and India-ready GST/TDS reporting out of the box.",
            },
            {
              label: "Financial Statements",
              text: "Generate P&L, balance sheet, cash flow, and trial balance in real time. Drill-down from any line item to the source transaction.",
            },
          ],
        },
        {
          title: "Manufacturing & MRP",
          items: [
            {
              label: "Production Planning",
              text: "Multi-level BOMs, work orders, job cards, capacity planning, and subcontracting — ideal for discrete and process manufacturing.",
            },
            {
              label: "Shop Floor Control",
              text: "Real-time tracking of work order progress, material consumption, and operator productivity through web and mobile interfaces.",
            },
          ],
        },
        {
          title: "Inventory & Warehouse",
          items: [
            {
              label: "Multi-Warehouse Stock",
              text: "Serial number, batch, and barcode tracking across unlimited warehouses with automated reorder levels and stock reconciliation.",
            },
            {
              label: "Stock Valuation",
              text: "FIFO, moving average, or standard costing — switch valuation methods per item group without rewriting your data.",
            },
          ],
        },
        {
          title: "HR & Payroll",
          items: [
            {
              label: "Employee Lifecycle",
              text: "Onboarding, attendance, leave, expense claims, appraisals, and exit — managed through a single employee portal.",
            },
            {
              label: "India Payroll",
              text: "Statutory PF, ESI, PT, TDS, and gratuity calculations preconfigured. Generate Form 16, Form 24Q, and salary slips in one click.",
            },
          ],
        },
        {
          title: "CRM & Sales",
          items: [
            {
              label: "Lead to Cash",
              text: "Capture leads, qualify opportunities, build quotations, convert to sales orders, and bill — all in one workflow with no integration tax.",
            },
            {
              label: "Customer Portal",
              text: "Self-service portal where customers can view orders, invoices, support tickets, and payment status in real time.",
            },
          ],
        },
        {
          title: "Projects & Timesheets",
          items: [
            {
              label: "Project Costing",
              text: "Track planned vs actual cost across tasks, materials, and labour. Bill clients on time-and-material, fixed-price, or milestone basis.",
            },
            {
              label: "Gantt & Kanban",
              text: "Visualise project schedules and task pipelines. Connect timesheets directly to payroll and customer invoicing.",
            },
          ],
        },
        {
          title: "Purchasing & Vendors",
          items: [
            {
              label: "Procure-to-Pay",
              text: "Material requests, RFQs, supplier quotations, purchase orders, GRN, and supplier invoicing with three-way matching.",
            },
            {
              label: "Supplier Scorecards",
              text: "Track on-time delivery, quality, and pricing to negotiate better terms with data, not anecdotes.",
            },
          ],
        },
        {
          title: "Customisation & Extensibility",
          items: [
            {
              label: "Custom DocTypes",
              text: "Build new modules with the Frappe framework — no Java, no SAP ABAP, no consultant lock-in. Python and JavaScript developers ship features in days, not quarters.",
            },
            {
              label: "Workflow Builder",
              text: "Visual workflow designer for approval chains, SLAs, and conditional routing. Adapt the platform to your processes instead of the other way around.",
            },
          ],
        },
        {
          title: "Hosting & Operations",
          items: [
            {
              label: "On-Premise or Cloud",
              text: "Deploy on your data centre, on Illumia's private cloud, or in a hyperscaler. Migrate between environments without re-licensing.",
            },
            {
              label: "Managed Service Option",
              text: "Illumia offers fully-managed ERPNext hosting with patching, backups, monitoring, version upgrades, and 24/7 support under SLA.",
            },
          ],
        },
      ]}
    />
  );
}
