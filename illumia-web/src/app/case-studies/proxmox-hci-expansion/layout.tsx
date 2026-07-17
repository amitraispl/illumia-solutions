import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progressive HCI Expansion & NVMe Cluster — High-IOPS Workloads",
  description:
    "How Illumia Solutions designed and delivered a two-cluster HCI landscape — expanding an existing SSD/HDD Proxmox cluster with a new NVMe cluster for high-IOPS workloads, plus full AMC and managed services.",
  alternates: { canonical: "/case-studies/proxmox-hci-expansion/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/proxmox-hci-expansion/#article",
  headline: "Progressive HCI Expansion & NVMe Cluster — High-IOPS Workloads",
  description:
    "How Illumia Solutions designed and delivered a two-cluster HCI landscape — expanding an existing SSD/HDD Proxmox cluster with a new NVMe cluster for high-IOPS workloads, plus full AMC and managed services.",
  url: "https://illumiasolutions.com/case-studies/proxmox-hci-expansion/",
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/3-hci-expansion-hero.jpg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
