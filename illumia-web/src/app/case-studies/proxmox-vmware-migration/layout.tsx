import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware to Proxmox VE Migration — Lifebank Foundation",
  description:
    "How Illumia Solutions delivered an 80% licensing cost reduction for Lifebank Foundation Inc. by migrating a multi-node VMware vSphere cluster to Proxmox VE — zero new hardware, zero VMs lost.",
  alternates: { canonical: "/case-studies/proxmox-vmware-migration/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
