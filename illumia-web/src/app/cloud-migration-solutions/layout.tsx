import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Migration Solutions — On-Prem to Cloud, Cloud-to-Cloud & Repatriation",
  description:
    "End-to-end cloud migration services covering on-prem to Azure/AWS/GCP, cloud-to-cloud consolidation, and repatriation to Proxmox or VMware. Automated tooling, zero data loss guarantee, and a staged cutover with rollback capability.",
  alternates: { canonical: "/cloud-migration-solutions/" },
};

export default function CloudMigrationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
