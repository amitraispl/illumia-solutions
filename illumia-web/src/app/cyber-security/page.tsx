import type { Metadata } from "next";
import CyberSecurityContent from "./CyberContent";

export const metadata: Metadata = {
  title: "Cyber Security Services — MSSP India | PCI-DSS, ISO 27001, HIPAA",
  description:
    "Managed cybersecurity services: IT risk strategy, application and mobile security, cloud security, PCI-DSS, ISO 27001, HIPAA, and GDPR compliance. CISA, CISSP, CEH, CCIE certified security engineers.",
  alternates: { canonical: "/cyber-security/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/cyber-security/#service",
  name: "Cyber Security Services",
  serviceType: "Managed Cybersecurity",
  description:
    "Precision cybersecurity services covering IT risk management, application security, mobile and cloud security. Compliance with PCI-DSS, ISO 27001, HIPAA, and GDPR. CISA, CISSP, CEH, and CCIE certified team.",
  url: "https://illumiasolutions.com/cyber-security/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  category: "Information Security",
};

export default function CyberSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CyberSecurityContent />
    </>
  );
}
