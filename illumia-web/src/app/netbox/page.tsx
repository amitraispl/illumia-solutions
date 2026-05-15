import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "NetBox — Network Source of Truth | Illumia Solutions",
  description:
    "Replace spreadsheets and Visio diagrams with NetBox — the open-source network source of truth for IPAM, DCIM, rack elevation, and infrastructure-as-code. Deployment, integration, and managed hosting by Illumia Solutions.",
};

export default function NetBoxPage() {
  return (
    <RichServicePageTemplate
      badge="Network Source of Truth"
      title="NetBox —"
      titleHighlight="Your Network, Documented Precisely."
      description="Spreadsheets, Visio diagrams, and tribal knowledge are not a network strategy — they are a liability. NetBox is the open-source source of truth for IP address management (IPAM), data centre infrastructure (DCIM), circuits, VLANs, and cable plant. It integrates natively with Ansible, Terraform, and Nautobot — so provisioning becomes repeatable, handovers become seamless, and audits become painless."
      sectionTitle="What NetBox Replaces"
      ctaText="Deploy NetBox"
      heroImage="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400&q=85&auto=format&fit=crop"
      darkHero={true}
      closingText="Illumia delivers NetBox as a fully-integrated network operations platform — not just a documentation tool. We import your existing inventory from spreadsheets, IPAM legacy tools, or live device polling; integrate NetBox into your Ansible and Terraform pipelines; and operate it under SLA as a managed service. The result: a single, queryable, API-driven source of truth your NOC, engineering, and audit teams can all trust."
      features={[
        {
          title: "IP Address Management",
          items: [
            {
              label: "Hierarchical IPAM",
              text: "Track aggregates, prefixes, IP ranges, and individual addresses across IPv4 and IPv6. Reserve, allocate, and reclaim addresses through API or web UI.",
            },
            {
              label: "VRF & Tenant Awareness",
              text: "Model overlapping address spaces by VRF, tenant, or customer — essential for MSPs, carriers, and multi-tenant data centres.",
            },
          ],
        },
        {
          title: "Data Centre Infrastructure",
          items: [
            {
              label: "Rack & Elevation",
              text: "Document every rack with front and rear elevations, power utilisation, weight, and cooling — visualised in a browser, not a Visio file.",
            },
            {
              label: "Device Inventory",
              text: "Track make, model, serial, asset tag, location, and lifecycle status for every device — from core router to cable management arm.",
            },
          ],
        },
        {
          title: "Cable & Connection Modelling",
          items: [
            {
              label: "End-to-End Cable Plant",
              text: "Model every patch cable, fibre run, and console connection with type, length, colour, and termination — including cable paths through patch panels.",
            },
            {
              label: "Circuit Tracking",
              text: "Track WAN circuits with provider, contract ID, bandwidth, and termination points. Tie circuits to interfaces and SLA tickets.",
            },
          ],
        },
        {
          title: "VLAN & VRF Management",
          items: [
            {
              label: "VLAN Inventory",
              text: "Catalogue every VLAN by site, group, and role. Prevent VLAN ID collisions across data centres and campus networks.",
            },
            {
              label: "Routing Context",
              text: "Track VRFs, route targets, BGP communities, and route policies — model your routing topology as data, not diagrams.",
            },
          ],
        },
        {
          title: "Automation Integration",
          items: [
            {
              label: "Ansible Dynamic Inventory",
              text: "Native inventory plugin pulls devices, interfaces, and IPs directly into Ansible playbooks — no static inventory files to maintain.",
            },
            {
              label: "Terraform Provider",
              text: "Codify NetBox state in Terraform. Provision IP allocations, prefixes, and VLAN reservations through the same workflow as cloud resources.",
            },
          ],
        },
        {
          title: "REST & GraphQL API",
          items: [
            {
              label: "Full REST API",
              text: "Every NetBox object is API-addressable with token-based auth and granular permissions. Build dashboards, NOC tools, and ticket integrations.",
            },
            {
              label: "GraphQL Endpoint",
              text: "Query exactly the fields you need with GraphQL — ideal for custom portals and high-cardinality reporting.",
            },
          ],
        },
        {
          title: "Webhooks & Event Rules",
          items: [
            {
              label: "Trigger CI/CD on Change",
              text: "Fire webhooks on any object change to drive Ansible Tower, GitHub Actions, or your configuration management pipeline.",
            },
            {
              label: "Custom Validators",
              text: "Enforce naming conventions, IP allocation rules, and lifecycle policies through Python-based custom validators.",
            },
          ],
        },
        {
          title: "Change Management",
          items: [
            {
              label: "Full Audit Log",
              text: "Every create, update, and delete is journaled with user, timestamp, and diff. Satisfy SOC 2, ISO 27001, and PCI-DSS audit requirements.",
            },
            {
              label: "Journal Entries",
              text: "Attach maintenance notes, outage RCAs, and change tickets directly to the devices and circuits they relate to.",
            },
          ],
        },
        {
          title: "Illumia Delivery",
          items: [
            {
              label: "Data Onboarding",
              text: "Import existing inventory from Excel, SolarWinds, Infoblox, or live device polling. Reconcile, deduplicate, and enrich — so day one of NetBox is also day one of clean data.",
            },
            {
              label: "Managed Hosting",
              text: "Run NetBox in Illumia's private cloud with HA Postgres, Redis, automated backups, and version upgrades under SLA — or deploy on your own infrastructure with full handover documentation.",
            },
          ],
        },
      ]}
    />
  );
}
