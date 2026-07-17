import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "On-Premise Private Cloud Solutions with Proxmox | Illumia Solutions",
  description:
    "Our On-Premise Private Cloud Solutions are built on Hyperconverged Infrastructure (HCI), which integrates compute, storage, and networking into a single cohesive system.",
  alternates: { canonical: "/on-premise-private-cloud/" },
};

export default function OnPremiseCloudPage() {
  return (
    <RichServicePageTemplate
      badge="Infrastructure Solutions"
      title="On-Premise Private Cloud"
      titleHighlight="Solutions with Proxmox."
      description="Our On-Premise Private Cloud Solutions are built on Hyperconverged Infrastructure (HCI), which integrates compute, storage, and networking into a single cohesive system. This integration simplifies management, enhances performance, and ensures seamless scalability, making it an ideal choice for modern business environments."
      sectionTitle="The infrastructure we build."
      features={[
        {
          title: "Hyperconverged Infrastructure (HCI)",
          items: [
            {
              label: "Architecture",
              text: "Built on Hyperconverged Infrastructure (HCI), integrating compute, storage, and networking into a single cohesive system — simplifying management, enhancing performance, and ensuring seamless scalability.",
            },
            {
              label: "Scalability",
              text: "Highly scalable — can host an unlimited number of Virtual Machines (VMs) and containers, ensuring your growing needs are met without compromise.",
            },
            {
              label: "Fault Tolerance",
              text: "Fault-tolerant by design, helping to maintain an uptime of 99.9% — ensuring your business operations are continuously running.",
            },
          ],
        },
        {
          title: "Proxmox: The Backbone of Our Cloud Solutions",
          items: [
            {
              label: "Ease of Use",
              text: "Proxmox provides a user-friendly web interface that simplifies the management of virtual machines (VMs) and containers.",
            },
            {
              label: "Comprehensive Features",
              text: "Supports a wide array of features including VM live migration, high availability, backup and restore, and more.",
            },
            {
              label: "Cost-Effectiveness",
              text: "As an open-source solution, Proxmox eliminates the need for expensive licensing fees, reducing your overall IT costs.",
            },
            {
              label: "Security",
              text: "Proxmox is regularly updated and maintained, ensuring that your systems are protected against the latest security threats.",
            },
            {
              label: "Flexibility",
              text: "Supports both KVM for VMs and LXC for containers, offering flexibility in deploying various workloads.",
            },
          ],
        },
        {
          title: "Ceph: Distributed Storage Solution",
          items: [
            {
              label: "Scalability",
              text: "Ceph can scale out to support massive amounts of data, making it ideal for growing businesses.",
            },
            {
              label: "Fault Tolerance",
              text: "With its distributed architecture, Ceph ensures high availability and resilience against hardware failures.",
            },
            {
              label: "High Performance",
              text: "Ceph provides high Input/Output Operations Per Second (IOPS) and throughput, ensuring fast and efficient data access.",
            },
            {
              label: "Data Integrity",
              text: "Ceph ensures data consistency and integrity, making it a reliable choice for critical applications.",
            },
          ],
        },
        {
          title: "Performance and Scalability",
          items: [
            {
              label: "High IOPS and Throughput",
              text: "Our solutions are optimised to deliver high IOPS and throughput, ensuring fast and efficient processing of data-intensive applications.",
            },
            {
              label: "Extensive Node Support",
              text: "We support numerous nodes in a cluster, allowing for seamless expansion as your business grows.",
            },
            {
              label: "Large VM Support",
              text: "Our solutions can support a huge number of VMs, ensuring that your virtualisation needs are met without compromising performance.",
            },
            {
              label: "Built-In Backup with Deduplication",
              text: "Our private cloud solutions include a robust backup solution with deduplication enabled, ensuring efficient storage utilisation and data protection.",
            },
            {
              label: "VM Live Migration",
              text: "Support for VM live migration with no interruption, ensuring continuous availability and minimising downtime during maintenance or upgrades.",
            },
          ],
        },
        {
          title: "Case Study: Real-World Infrastructure",
          items: [
            {
              label: "Cluster Resources",
              text: "248 vCPUs · 1.11 TB RAM · 102.25 TiB Storage · 40+ mission-critical VMs hosting diverse workloads including database servers and application servers.",
            },
            {
              label: "Storage Architecture",
              text: "Ceph pool-HDD: 35.66 TiB for archival storage. Ceph pool-SSD: 32.17 TiB for normal computing. Ceph pool-NVMe: 31.17 TiB for high IOPS — suited for database servers, transaction-heavy systems, and real-time analytics. GlusterFS for ISO storage enabling seamless VM live migration.",
            },
            {
              label: "Backup and Disaster Recovery",
              text: "Proxmox Backup Servers integrated with NAS. Automated DC-DR Backup Sync. Instant Recovery Mechanism — if primary DC is lost, backups are available at DR and vice versa.",
            },
          ],
        },
        {
          title: "Key Achievements",
          items: [
            {
              label: "Full Redundancy",
              text: "Implemented a fully redundant, scalable, and resilient virtualisation solution spanning two data centres — a 6-node Primary DC with fault tolerance for up to 4 nodes, and a fully functional DR site.",
            },
            {
              label: "Zero Downtime Migration",
              text: "Ensured zero downtime live migration of VMs between Proxmox nodes with mounted ISOs.",
            },
            {
              label: "Automated Disaster Recovery",
              text: "Designed an automated DR strategy to maintain continuous data integrity at the application level.",
            },
            {
              label: "Cost-Effective Enterprise Solution",
              text: "Delivered a cost-effective, open-source solution for an enterprise-grade virtualisation environment.",
            },
          ],
        },
      ]}
      closingText="A highly available, Proxmox-based virtualisation infrastructure spanning two data centres with full DR capability — designed for fault tolerance, scalability, and seamless failover, supporting multiple mission-critical VMs powered by Ceph-backed storage and automated disaster recovery."
      ctaText="Design Your Private Cloud"
      heroImage="/images/heroes/on-premise-private-cloud_hero.jpg"
    />
  );
}
