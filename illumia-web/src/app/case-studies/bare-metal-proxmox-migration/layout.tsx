import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bare Metal to Proxmox VE Migration — Lifebank Foundation",
  description:
    "How Illumia Solutions modernised Lifebank Foundation Inc. from fragmented bare-metal servers to a two-cluster Proxmox HCI estate with a dedicated NVMe tier — 50+ VMs, high-IOPS interruptions cut to zero, and full managed services.",
  alternates: { canonical: "/case-studies/bare-metal-proxmox-migration/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/bare-metal-proxmox-migration/#article",
  headline: "Bare Metal to Proxmox VE Migration — Lifebank Foundation",
  description:
    "How Illumia Solutions modernised Lifebank Foundation Inc. from fragmented bare-metal servers to a two-cluster Proxmox HCI estate with a dedicated NVMe tier — 50+ VMs, high-IOPS interruptions cut to zero, and full managed services.",
  url: "https://illumiasolutions.com/case-studies/bare-metal-proxmox-migration/",
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  author: { "@id": "https://illumiasolutions.com/#organization" },
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/lbf-hero.jpg",
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
      "name": "Bare Metal to Proxmox VE Migration — Lifebank Foundation",
      "item": "https://illumiasolutions.com/case-studies/bare-metal-proxmox-migration/"
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
