import type { Metadata } from "next";
import NetBoxContent from "../netbox/NetBoxContent";

export const metadata: Metadata = {
  title: "NetBox Platform — Network Source of Truth | Illumia Solutions",
  description:
    "Deploy NetBox as your network source of truth — IPAM, DCIM, cable plant, VLAN management, and full REST/GraphQL API. Replace spreadsheets and Visio diagrams with a single, queryable, automation-ready platform.",
  alternates: { canonical: "/netbox-platform/" },
};

export default function NetBoxPlatformPage() {
  return <NetBoxContent />;
}
