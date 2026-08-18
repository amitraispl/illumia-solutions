import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progressive HCI Expansion & NVMe Cluster — High-IOPS Workloads",
  description:
    "How Illumia Solutions designed and delivered a two-cluster HCI landscape — expanding an existing SSD/HDD Proxmox cluster with a new NVMe cluster for high-IOPS workloads, plus full AMC and managed services.",
  alternates: {
    canonical: "/case-studies/proxmox-hci-expansion/",
    languages: { "en": "https://illumiasolutions.com/case-studies/proxmox-hci-expansion/", "x-default": "https://illumiasolutions.com/case-studies/proxmox-hci-expansion/" },
  },
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
  dateModified: "2026-08-08",
  author: { "@id": "https://illumiasolutions.com/#organization" },
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/3-hci-expansion-hero.jpg",
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
      "name": "Case Studies",
      "item": "https://illumiasolutions.com/case-studies/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Progressive HCI Expansion & NVMe Cluster — High-IOPS Workloads",
      "item": "https://illumiasolutions.com/case-studies/proxmox-hci-expansion/"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
