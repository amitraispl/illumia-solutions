import type { Metadata } from "next";
import ERPNextContent from "./ERPNextContent";

export const metadata: Metadata = {
  title: "ERPNext — Open-Source Enterprise ERP",
  description:
    "Deploy ERPNext — accounting, inventory, manufacturing, CRM, procurement, and projects on one open-source platform with zero per-seat licensing. Implementation, data migration, customisation, and managed hosting by Illumia Solutions.",
  alternates: { canonical: "/erpnext/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/erpnext/#service",
  name: "ERPNext",
  description:
    "Deploy ERPNext — accounting, inventory, manufacturing, CRM, procurement, and projects on one open-source platform with zero per-seat licensing. Implementation, data migration, customisation, and managed hosting by Illumia Solutions.",
  url: "https://illumiasolutions.com/erpnext/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function ERPNextPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ERPNextContent />
    </>
  );
}
