import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Proxmox VE Migration & Deployment — Illumia Solutions",
  description:
    "End-to-end migration to Proxmox Virtual Environment from VMware, Hyper-V, Nutanix, and other platforms. Enterprise capabilities — VMs, containers, HA clusters, live migration — with predictable open-source economics.",
  alternates: { canonical: "/proxmox-migration/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/proxmox-migration/#service",
  name: "Proxmox VE Migration",
  serviceType: "Virtualisation Migration Services",
  description:
    "End-to-end migration to Proxmox Virtual Environment from VMware, Hyper-V, Nutanix, and other platforms. Enterprise capabilities — VMs, containers, HA clusters, live migration — with predictable open-source economics.",
  url: "https://illumiasolutions.com/proxmox-migration/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function ProxmoxMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Proxmox Silver Partner"
      title="Proxmox VE —"
      titleHighlight="Enterprise Virtualisation, Open Source."
      description="Proxmox Virtual Environment delivers enterprise virtualisation — KVM-based VMs, LXC containers, HA clusters, Ceph storage, live migration — under an open-source AGPL licence. Illumia is a Proxmox Silver Partner and handles the entire migration end-to-end with zero data loss, from VMware, Hyper-V, Nutanix, or bare metal."
      sectionTitle="Why Migrate to Proxmox VE"
      ctaText="Plan Your Proxmox Migration"
      heroImage="/images/heroes/proxmox-migration_hero.jpg"
      darkHero={true}
      closingText="As a certified Proxmox Silver Partner, Illumia Solutions delivers production-grade migrations to Proxmox VE without compromising on enterprise capability. From workload assessment and design to cutover, hardening, and post-migration support, our engineers cover every stage — so your uptime SLAs are never at risk."
      features={[
        {
          title: "Massive Cost Reduction",
          items: [
            {
              label: "Zero Licensing Fees",
              text: "Proxmox VE is fully open-source under AGPL — no per-CPU, per-core, or per-VM licensing fees. Support is purchased separately and only where you need it.",
            },
            {
              label: "Optional Enterprise Support",
              text: "Pay only for the support tier you actually need — published pricing, no bundled add-ons.",
            },
          ],
        },
        {
          title: "Enterprise-Grade Virtualisation",
          items: [
            {
              label: "KVM + LXC in One Platform",
              text: "Run full virtual machines and lightweight Linux containers from the same hypervisor and management console — no extra licensing for either.",
            },
            {
              label: "High Availability Clusters",
              text: "Native HA with automated failover, live migration, and rolling upgrades — designed to meet your existing availability SLAs.",
            },
          ],
        },
        {
          title: "Ceph & ZFS Storage",
          items: [
            {
              label: "Software-Defined Storage",
              text: "Built-in Ceph for hyperconverged, software-defined block and object storage on commodity hardware.",
            },
            {
              label: "ZFS Snapshots & Replication",
              text: "Instant snapshots, async replication, and self-healing storage on local disks — ideal for branch and edge deployments.",
            },
          ],
        },
        {
          title: "Migration Tooling",
          items: [
            {
              label: "VMware Importer",
              text: "Proxmox VE's native vCenter importer pulls VMs directly from your existing ESXi or vSphere environment — preserving disks, MACs, and network configuration.",
            },
            {
              label: "Phased Cutover",
              text: "Migrate workload-by-workload with rollback windows. Our team maps every dependency before any VM is moved.",
            },
          ],
        },
        {
          title: "Backup & DR",
          items: [
            {
              label: "Proxmox Backup Server",
              text: "Deduplicated, incremental, encrypted backups with point-in-time restore — included free with every Proxmox VE deployment.",
            },
            {
              label: "Off-Site Replication",
              text: "Replicate backups to a second site, an S3-compatible object store, or Illumia's managed backup cloud for compliance-grade DR.",
            },
          ],
        },
        {
          title: "Web UI & API",
          items: [
            {
              label: "Modern Web Console",
              text: "Manage the entire cluster from a browser — no thick client and no separate management appliance required.",
            },
            {
              label: "Full REST API",
              text: "Automate provisioning with Terraform, Ansible, or your existing CI/CD pipelines. Every UI action has an equivalent API call.",
            },
          ],
        },
        {
          title: "Hardened Linux Base",
          items: [
            {
              label: "Debian Foundation",
              text: "Built on Debian stable with a curated Linux kernel — predictable, well-understood, and supported by a vast ecosystem.",
            },
            {
              label: "Security Updates",
              text: "Receive security patches the same day they ship upstream — without waiting for a vendor patch cycle.",
            },
          ],
        },
        {
          title: "Network Flexibility",
          items: [
            {
              label: "Linux Bridge & OVS",
              text: "Native VLAN tagging, bonding, and Open vSwitch integration for advanced SDN topologies without proprietary licensing.",
            },
            {
              label: "SDN Stack",
              text: "Built-in SDN controller for VXLAN overlays, EVPN, and zone-based segmentation across geographically distributed clusters.",
            },
          ],
        },
        {
          title: "Illumia Delivery",
          items: [
            {
              label: "Silver Partner Status",
              text: "Direct escalation path to Proxmox engineers. Our team holds production migration experience across BFSI, manufacturing, and government workloads.",
            },
            {
              label: "Zero Data Loss Methodology",
              text: "Every migration includes pre-migration backup, parallel-run validation, and a documented rollback plan — so cutover risk is engineered out, not accepted.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
