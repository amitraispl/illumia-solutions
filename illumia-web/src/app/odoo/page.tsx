import type { Metadata } from "next";
import OdooContent from "./OdooContent";

export const metadata: Metadata = {
  title: "Odoo — Open-Source Business Apps, Implemented Right | Illumia Solutions",
  description:
    "Deploy Odoo Community or Enterprise with Illumia — CRM, accounting, inventory, manufacturing, POS, and 80+ integrated apps on one platform. Implementation, custom module development, version upgrades, and managed hosting under SLA.",
  alternates: { canonical: "/odoo/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/odoo/#service",
  name: "Odoo",
  description:
    "Deploy Odoo Community or Enterprise with Illumia — CRM, accounting, inventory, manufacturing, POS, and 80+ integrated apps on one platform. Implementation, custom module development, version upgrades, and managed hosting under SLA.",
  url: "https://illumiasolutions.com/odoo/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function OdooPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <OdooContent />
    </>
  );
}
