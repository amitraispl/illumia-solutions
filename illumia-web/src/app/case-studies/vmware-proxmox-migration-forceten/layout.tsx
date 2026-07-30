import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware to Proxmox VE Migration — Force Ten Technologies",
  description:
    "How Illumia Solutions delivered an 80% licensing cost reduction for Force Ten Technologies Pvt. Ltd. by migrating a multi-node VMware vSphere cluster and Veeam to Proxmox VE and Proxmox Backup Server — zero new hardware, no VM lost.",
  alternates: { canonical: "/case-studies/vmware-proxmox-migration-forceten/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/vmware-proxmox-migration-forceten/#article",
  headline: "VMware to Proxmox VE Migration — Force Ten Technologies",
  description:
    "How Illumia Solutions delivered an 80% licensing cost reduction for Force Ten Technologies Pvt. Ltd. by migrating a multi-node VMware vSphere cluster and Veeam to Proxmox VE and Proxmox Backup Server — zero new hardware, no VM lost.",
  url: "https://illumiasolutions.com/case-studies/vmware-proxmox-migration-forceten/",
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/forceten-hero.jpg",
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
