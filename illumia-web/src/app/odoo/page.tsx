import type { Metadata } from "next";
import OdooContent from "./OdooContent";

export const metadata: Metadata = {
  title: "Odoo — Open-Source Business Apps, Implemented Right | Illumia Solutions",
  description:
    "Deploy Odoo Community or Enterprise with Illumia — CRM, accounting, inventory, manufacturing, POS, and 80+ integrated apps on one platform. Implementation, custom module development, version upgrades, and managed hosting under SLA.",
  alternates: { canonical: "/odoo/" },
};

export default function OdooPage() {
  return <OdooContent />;
}
