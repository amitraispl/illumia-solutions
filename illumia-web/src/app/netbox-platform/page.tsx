import type { Metadata } from "next";
import NetBoxContent from "../netbox/NetBoxContent";

export const metadata: Metadata = {
  title: "NetBox Platform — Network Source of Truth",
  description:
    "Deploy NetBox as your network source of truth — IPAM, DCIM, cable plant, VLAN management, and full REST/GraphQL API. Replace spreadsheets and Visio diagrams with a single, queryable, automation-ready platform.",
  alternates: {
    canonical: "/netbox-platform/",
    languages: { "en": "https://illumiasolutions.com/netbox-platform/", "x-default": "https://illumiasolutions.com/netbox-platform/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/netbox-platform/#service",
  name: "NetBox Platform",
  description:
    "Deploy NetBox as your network source of truth — IPAM, DCIM, cable plant, VLAN management, and full REST/GraphQL API. Replace spreadsheets and Visio diagrams with a single, queryable, automation-ready platform.",
  url: "https://illumiasolutions.com/netbox-platform/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
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
      "name": "Open Source",
      "item": "https://illumiasolutions.com/open-source-solutions/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "NetBox Platform — Network Source of Truth",
      "item": "https://illumiasolutions.com/netbox-platform/"
    }
  ]
};

export default function NetBoxPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NetBoxContent />
    </>
  );
}
