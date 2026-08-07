import type { Metadata } from "next";
import ProxmoxContent from "../proxmox-migration/ProxmoxContent";

export const metadata: Metadata = {
  title: "On-Premise Private Cloud with Proxmox VE",
  description:
    "Build a production-grade on-premise private cloud with Proxmox Virtual Environment. KVM VMs, LXC containers, Ceph HCI storage, HA clustering — open-source. Illumia is a certified Proxmox Silver Partner.",
  alternates: { canonical: "/on-premise-private-cloud-solutions/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/on-premise-private-cloud-solutions/#service",
  name: "On-Premise Private Cloud with Proxmox VE",
  description:
    "Build a production-grade on-premise private cloud with Proxmox Virtual Environment. KVM VMs, LXC containers, Ceph HCI storage, HA clustering — open-source, zero licensing fees. Illumia is a certified Proxmox Silver Partner.",
  url: "https://illumiasolutions.com/on-premise-private-cloud-solutions/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://illumiasolutions.com/on-premise-private-cloud-solutions/#howto",
  name: "Proxmox VE Migration Methodology",
  description:
    "Illumia Solutions' 4-phase methodology for migrating workloads to a Proxmox VE private cloud — assessment, design, phased migration, and handover.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Assessment",
      itemListElement: [
        "VM inventory and dependency mapping",
        "Workload criticality and I/O classification",
        "Hardware compatibility audit",
        "Migration risk register",
      ].map((text) => ({ "@type": "HowToDirection", text })),
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Design",
      itemListElement: [
        "Cluster architecture and node sizing",
        "Storage layout — Ceph, ZFS, or NFS",
        "Network topology and VLAN plan",
        "HA policy per workload tier",
      ].map((text) => ({ "@type": "HowToDirection", text })),
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Phased Migration",
      itemListElement: [
        "Non-critical workloads first",
        "Parallel-run validation before cutover",
        "Node-by-node — VMware stays live throughout",
        "Documented rollback per batch",
      ].map((text) => ({ "@type": "HowToDirection", text })),
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Handover",
      itemListElement: [
        "Runbook and architecture documentation",
        "Team training on Proxmox VE and PBS",
        "Monitoring and alerting configured",
        "Optional 90-day post-migration SLA",
      ].map((text) => ({ "@type": "HowToDirection", text })),
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://illumiasolutions.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cloud",
      "item": "https://illumiasolutions.com/cloud-services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "On-Premise Private Cloud with Proxmox VE",
      "item": "https://illumiasolutions.com/on-premise-private-cloud-solutions/"
    }
  ]
};

export default function OnPremisePrivateCloudSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProxmoxContent />
    </>
  );
}
