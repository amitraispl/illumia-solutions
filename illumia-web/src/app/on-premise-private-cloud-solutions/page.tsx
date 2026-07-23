import type { Metadata } from "next";
import ProxmoxContent from "../proxmox-migration/ProxmoxContent";

export const metadata: Metadata = {
  title: "On-Premise Private Cloud with Proxmox VE",
  description:
    "Build a production-grade on-premise private cloud with Proxmox Virtual Environment. KVM VMs, LXC containers, Ceph HCI storage, HA clustering — open-source, zero licensing fees. Illumia is a certified Proxmox Silver Partner.",
  alternates: { canonical: "/on-premise-private-cloud-solutions/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/on-premise-private-cloud-solutions/#service",
  name: "On-Premise Private Cloud with Proxmox VE",
  description:
    "Build a production-grade on-premise private cloud with Proxmox Virtual Environment. KVM VMs, LXC containers, Ceph HCI storage, HA clustering — open-source, zero licensing fees. Illumia is a certified Proxmox Silver Partner.",
  url: "https://illumiasolutions.com/on-premise-private-cloud-solutions/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function OnPremisePrivateCloudSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ProxmoxContent />
    </>
  );
}
