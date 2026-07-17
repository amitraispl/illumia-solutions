import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware to Proxmox VE Migration — Lifebank Foundation",
  description:
    "How Illumia Solutions delivered an 80% licensing cost reduction for Lifebank Foundation Inc. by migrating a multi-node VMware vSphere cluster to Proxmox VE — zero new hardware, zero VMs lost.",
  alternates: { canonical: "/case-studies/proxmox-vmware-migration/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/proxmox-vmware-migration/#article",
  headline: "VMware to Proxmox VE Migration — Lifebank Foundation",
  description:
    "How Illumia Solutions delivered an 80% licensing cost reduction for Lifebank Foundation Inc. by migrating a multi-node VMware vSphere cluster to Proxmox VE — zero new hardware, zero VMs lost.",
  url: "https://illumiasolutions.com/case-studies/proxmox-vmware-migration/",
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/1-vmware-migration-hero.jpg",
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
