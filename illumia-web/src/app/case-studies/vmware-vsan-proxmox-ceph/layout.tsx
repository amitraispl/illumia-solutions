import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp",
  description:
    "How Illumia Solutions migrated Data Consultants Corporation from VMware vSphere with vSAN to Proxmox VE with Ceph — a phased node-liberation strategy on existing hardware, sub-24-hour downtime, and PBS replacing Veeam.",
  alternates: { canonical: "/case-studies/vmware-vsan-proxmox-ceph/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/vmware-vsan-proxmox-ceph/#article",
  headline: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp",
  description:
    "How Illumia Solutions migrated Data Consultants Corporation from VMware vSphere with vSAN to Proxmox VE with Ceph — a phased node-liberation strategy on existing hardware, sub-24-hour downtime, and PBS replacing Veeam.",
  url: "https://illumiasolutions.com/case-studies/vmware-vsan-proxmox-ceph/",
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  author: { "@id": "https://illumiasolutions.com/#organization" },
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/dcc-hero.jpg",
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
      "name": "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp",
      "item": "https://illumiasolutions.com/case-studies/vmware-vsan-proxmox-ceph/"
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
