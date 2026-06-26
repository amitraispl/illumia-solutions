import type { Metadata } from "next";
import ProxmoxContent from "../proxmox-migration/ProxmoxContent";

export const metadata: Metadata = {
  title: "On-Premise Private Cloud with Proxmox VE | Illumia Solutions",
  description:
    "Build a production-grade on-premise private cloud with Proxmox Virtual Environment. KVM VMs, LXC containers, Ceph HCI storage, HA clustering — open-source, zero licensing fees. Illumia is a certified Proxmox Silver Partner.",
  alternates: { canonical: "/on-premise-private-cloud-solutions/" },
};

export default function OnPremisePrivateCloudSolutionsPage() {
  return <ProxmoxContent />;
}
