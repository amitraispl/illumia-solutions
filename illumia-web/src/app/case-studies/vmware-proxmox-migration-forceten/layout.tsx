import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware to Proxmox VE Migration — Forceten Technologies",
  description:
    "How Illumia Solutions delivered an 80% licensing cost reduction for Forceten Technologies Pvt. Ltd. by migrating a multi-node VMware vSphere cluster and Veeam to Proxmox VE and Proxmox Backup Server — zero new hardware, no VM lost.",
  alternates: { canonical: "/case-studies/vmware-proxmox-migration-forceten/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
