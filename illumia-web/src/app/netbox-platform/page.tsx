import type { Metadata } from "next";
import NetBoxContent from "../netbox/NetBoxContent";

export const metadata: Metadata = {
  title: "NetBox Platform — Network Source of Truth",
  description:
    "Deploy NetBox as your network source of truth — IPAM, DCIM, cable plant, VLAN management, and full REST/GraphQL API. Replace spreadsheets and Visio diagrams with a single, queryable, automation-ready platform.",
  alternates: { canonical: "/netbox-platform/" },
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

export default function NetBoxPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NetBoxContent />
    </>
  );
}
