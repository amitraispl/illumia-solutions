import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions — SIEM, SOAR, EDR, PAM & Honeypot",
  description:
    "Open-source-powered cybersecurity solutions: SIEM (Wazuh/OSSIM), SOAR (Shuffle), EDR (OpenEDR), PAM (Apache Guacamole), vulnerability management (OpenVAS), and honeypot systems. Managed by CISA, CISSP, and CEH certified engineers.",
  alternates: {
    canonical: "/cybersecurity-solutions/",
    languages: { "en": "https://illumiasolutions.com/cybersecurity-solutions/", "x-default": "https://illumiasolutions.com/cybersecurity-solutions/" },
  },
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
      "name": "Cyber Security",
      "item": "https://illumiasolutions.com/cyber-security/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cybersecurity Solutions — SIEM, SOAR, EDR, PAM & Honeypot",
      "item": "https://illumiasolutions.com/cybersecurity-solutions/"
    }
  ]
};

export default function CybersecuritySolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
