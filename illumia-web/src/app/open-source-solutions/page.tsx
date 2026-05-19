import type { Metadata } from "next";
import OpenSourceSolutionsContent from "./OpenSourceContent";

export const metadata: Metadata = {
  title: "Open Source IT Solutions — Proxmox, ERPNext, NetBox, Wazuh & More",
  description:
    "Enterprise open-source IT solutions: Proxmox private cloud, ERPNext ERP, NetBox network management, Wazuh SIEM, Nextcloud storage, and SDN/SD-WAN. Eliminate licensing fees without sacrificing enterprise capabilities.",
  alternates: { canonical: "/open-source-solutions/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/open-source-solutions/#service",
  name: "Open Source Integration",
  serviceType: "Open Source Consulting and Integration",
  description:
    "Tailored open-source infrastructure, application, and cybersecurity solutions — including hyperconverged infrastructure (Proxmox), high-performance block storage (Ceph), SIEM (Wazuh), ERP (ERPNext), and private cloud deployment.",
  url: "https://illumiasolutions.com/open-source-solutions/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  category: "Open Source Technology",
};

export default function OpenSourceSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <OpenSourceSolutionsContent />
    </>
  );
}
