import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Infrastructure Solutions — Private Cloud, Storage & Network",
  description:
    "Enterprise IT infrastructure services: hyperconverged private cloud on Proxmox, high-performance Ceph block storage, SDN/SD-WAN deployment, bare-metal and VPS hosting, and 24/7 proactive infrastructure monitoring.",
  alternates: { canonical: "/infrastructure-solutions/" },
};

export default function InfrastructureSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
