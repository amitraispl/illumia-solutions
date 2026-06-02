import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp",
  description:
    "How Illumia Solutions migrated Data Consultants Corporation from VMware vSphere with vSAN to Proxmox VE with Ceph — a phased node-liberation strategy on existing hardware, sub-24-hour downtime, and PBS replacing Veeam.",
  alternates: { canonical: "/case-studies/vmware-vsan-proxmox-ceph/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
