import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Maintenance & Remote Support Services — 24/7 Managed",
  description:
    "24/7 proactive IT maintenance and remote managed services: round-the-clock monitoring, patch management, performance tuning, and dedicated technical support — keeping your infrastructure secure and available.",
  alternates: { canonical: "/maintenance-services/" },
};

export default function MaintenanceServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
