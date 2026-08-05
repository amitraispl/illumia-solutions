import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Migration Solutions — On-Prem to Cloud, Cloud-to-Cloud & Repatriation",
  description:
    "End-to-end cloud migration services covering on-prem to Azure/AWS/GCP, cloud-to-cloud consolidation, and repatriation to Proxmox or VMware. Automated tooling, zero data loss guarantee, and a staged cutover with rollback capability.",
  alternates: { canonical: "/cloud-migration-solutions/" },
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
      "name": "Cloud Migration Solutions — On-Prem to Cloud, Cloud-to-Cloud & Repatriation",
      "item": "https://illumiasolutions.com/cloud-migration-solutions/"
    }
  ]
};

export default function CloudMigrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
