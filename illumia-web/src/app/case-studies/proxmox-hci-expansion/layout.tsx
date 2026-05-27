import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progressive HCI Expansion & NVMe Cluster — High-IOPS Workloads",
  description:
    "How Illumia Solutions designed and delivered a two-cluster HCI landscape — expanding an existing SSD/HDD Proxmox cluster with a new NVMe cluster for high-IOPS workloads, plus full AMC and managed services.",
  alternates: { canonical: "/case-studies/proxmox-hci-expansion/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
