import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Infrastructure Solutions — Private Cloud, Storage & Network",
  description:
    "Enterprise IT infrastructure services: hyperconverged private cloud on Proxmox, high-performance Ceph block storage, SDN/SD-WAN deployment, bare-metal and VPS hosting, and 24/7 proactive infrastructure monitoring.",
  alternates: { canonical: "/infrastructure-solutions/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://illumiasolutions.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cloud",
      "item": "https://illumiasolutions.com/cloud-services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "IT Infrastructure Solutions — Private Cloud, Storage & Network",
      "item": "https://illumiasolutions.com/infrastructure-solutions/"
    }
  ]
};

export default function InfrastructureSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
