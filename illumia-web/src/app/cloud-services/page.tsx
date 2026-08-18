import type { Metadata } from "next";
import CloudServicesContent from "./CloudContent";

export const metadata: Metadata = {
  title: "Enterprise Cloud Services — Hosting, Migration, Storage & SD-WAN",
  description:
    "Comprehensive cloud infrastructure services: VPS, bare-metal hosting, cloud migration (Azure/AWS/GCP), Nextcloud storage, SD-WAN, disaster recovery, and 99.9% uptime SLA. Tailored for enterprise and mid-market businesses.",
  alternates: {
    canonical: "/cloud-services/",
    languages: { "en": "https://illumiasolutions.com/cloud-services/", "x-default": "https://illumiasolutions.com/cloud-services/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/cloud-services/#service",
  name: "Enterprise Cloud Solutions",
  serviceType: "Cloud Infrastructure Services",
  description:
    "Comprehensive cloud services including hosted infrastructure, SD-WAN, cloud migration, hosted storage, disaster recovery, and load balancing — designed to optimise operations, enhance security, and ensure seamless scalability.",
  url: "https://illumiasolutions.com/cloud-services/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  category: "Cloud Computing",
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
      "name": "Enterprise Cloud Services — Hosting, Migration, Storage & SD-WAN",
      "item": "https://illumiasolutions.com/cloud-services/"
    }
  ]
};

export default function CloudServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CloudServicesContent />
    </>
  );
}
