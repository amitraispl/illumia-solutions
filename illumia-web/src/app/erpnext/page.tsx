import type { Metadata } from "next";
import ERPNextContent from "./ERPNextContent";

export const metadata: Metadata = {
  title: "ERPNext — Open-Source Enterprise ERP | Illumia Solutions",
  description:
    "Deploy ERPNext — accounting, inventory, manufacturing, CRM, procurement, and projects on one open-source platform with zero per-seat licensing. Implementation, data migration, customisation, and managed hosting by Illumia Solutions.",
  alternates: { canonical: "/erpnext/" },
};

export default function ERPNextPage() {
  return <ERPNextContent />;
}
