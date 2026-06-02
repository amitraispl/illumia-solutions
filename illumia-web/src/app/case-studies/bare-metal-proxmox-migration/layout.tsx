import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bare Metal to Proxmox VE Migration — Lifebank Foundation",
  description:
    "How Illumia Solutions modernised Lifebank Foundation Inc. from fragmented bare-metal servers to a two-cluster Proxmox HCI estate with a dedicated NVMe tier — 50+ VMs, high-IOPS interruptions cut to zero, and full managed services.",
  alternates: { canonical: "/case-studies/bare-metal-proxmox-migration/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
