import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Cloud Security",
  description:
    "Illumia Solutions offers advanced cloud security services, from secure application deployment to ensuring data compliance and secure migration. Your cloud data and regulatory compliance are protected.",
  alternates: { canonical: "/cloud-security/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/cloud-security/#service",
  name: "Cloud Security",
  serviceType: "Cloud Security",
  description:
    "Illumia Solutions offers advanced cloud security services, from secure application deployment to ensuring data compliance and secure migration. Your cloud data and regulatory compliance are protected.",
  url: "https://illumiasolutions.com/cloud-security/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
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
      "name": "Cloud Security",
      "item": "https://illumiasolutions.com/cloud-security/"
    }
  ]
};

export default function CloudSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RichServicePageTemplate
      badge="Cloud Security"
      title="Cloud"
      titleHighlight="Security."
      description="As businesses move to the cloud, securing these environments is crucial. Illumia Solutions offers advanced cloud security services, from secure application deployment to ensuring data compliance and secure migration. Your cloud data and regulatory compliance are protected."
      sectionTitle="Challenges we address — and how we solve them."
      features={[
        {
          title: "Challenges We Address",
          items: [
            {
              label: "Data Security",
              text: "Protecting data during and after cloud migration is crucial to prevent data breaches and ensure data integrity.",
            },
            {
              label: "Regulatory Compliance",
              text: "Ensuring cloud data management practices comply with regulations such as GDPR, HIPAA, and PCI-DSS is essential to avoid penalties and maintain trust.",
            },
            {
              label: "Complex Security Needs",
              text: "Managing access control, data encryption, and threat monitoring in a cloud environment can be complex and requires specialised knowledge and tools.",
            },
          ],
        },
        {
          title: "Our Approach",
          items: [
            {
              label: "Secure Migration",
              text: "Protect your data during the transition to the cloud with robust encryption and secure transfer protocols, ensuring data integrity and confidentiality.",
            },
            {
              label: "Compliance Assurance",
              text: "Ensure your cloud data management practices meet all regulatory standards, including GDPR, HIPAA, and PCI-DSS, through comprehensive assessments and continuous monitoring.",
            },
            {
              label: "Comprehensive Security",
              text: "Implement robust measures to protect your cloud environments, including advanced threat detection, access control, and data encryption, to safeguard against cyber threats.",
            },
          ],
        },
      ]}
      closingText="Cloud adoption shouldn't come at the cost of security. Illumia's cloud security practice ensures your cloud environments are protected, compliant, and continuously monitored — from first migration to full operation."
      ctaText="Request a Cloud Security Assessment"
      heroImage="/images/cloud-security/hero.png"
      />
    </>
  );
}
