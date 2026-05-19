import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions — SIEM, SOAR, EDR, PAM & Honeypot",
  description:
    "Open-source-powered cybersecurity solutions: SIEM (Wazuh/OSSIM), SOAR (Shuffle), EDR (OpenEDR), PAM (Apache Guacamole), vulnerability management (OpenVAS), and honeypot systems. Managed by CISA, CISSP, and CEH certified engineers.",
  alternates: { canonical: "/cybersecurity-solutions/" },
};

export default function CybersecuritySolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
