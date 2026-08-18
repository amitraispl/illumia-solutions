import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "IT Risk and Security Strategy",
  description:
    "In today's fast-paced digital world, staying ahead of evolving threats is critical. Illumia Solutions provides a thorough IT risk and security strategy that continuously assesses and integrates the latest security frameworks.",
  alternates: {
    canonical: "/it-risk-and-security-strategy/",
    languages: { "en": "https://illumiasolutions.com/it-risk-and-security-strategy/", "x-default": "https://illumiasolutions.com/it-risk-and-security-strategy/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/it-risk-and-security-strategy/#service",
  name: "IT Risk and Security Strategy",
  serviceType: "Risk & Governance",
  description:
    "In today's fast-paced digital world, staying ahead of evolving threats is critical. Illumia Solutions provides a thorough IT risk and security strategy that continuously assesses and integrates the latest security frameworks.",
  url: "https://illumiasolutions.com/it-risk-and-security-strategy/",
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
      "name": "IT Risk and Security Strategy",
      "item": "https://illumiasolutions.com/it-risk-and-security-strategy/"
    }
  ]
};

export default function ITRiskSecurityStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Risk & Governance"
      title="IT Risk and"
      titleHighlight="Security Strategy."
      description="In today's fast-paced digital world, staying ahead of evolving threats is critical. Illumia Solutions provides a thorough IT risk and security strategy that continuously assesses and integrates the latest security frameworks."
      sectionTitle="Challenges we address — and how we solve them."
      features={[
        {
          title: "Challenges We Address",
          items: [
            {
              label: "Evolving Threats",
              text: "Keeping up with the latest threats as the digital landscape continuously shifts and new attack vectors emerge.",
            },
            {
              label: "Regulatory Complexity",
              text: "Navigating and complying with various regulations across jurisdictions is complex and time-consuming.",
            },
            {
              label: "Resource Limitations",
              text: "Developing a robust security strategy with limited internal resources requires expert guidance and prioritisation.",
            },
          ],
        },
        {
          title: "Our Approach",
          items: [
            {
              label: "Continuous Assessment",
              text: "Regularly evaluate your security posture to identify and address emerging threats and vulnerabilities.",
            },
            {
              label: "Framework Integration",
              text: "Implement industry-standard frameworks like NIST, ISO, and COBIT to ensure comprehensive protection and regulatory compliance.",
            },
            {
              label: "Policy Development",
              text: "Develop, update, and maintain security policies that align with current threats and regulatory requirements, ensuring your organisation is always protected and compliant.",
            },
          ],
        },
      ]}
      closingText="Staying ahead of evolving threats requires more than reactive tools — it demands a continuously refined strategy. Illumia partners with your team to build, assess, and evolve a security programme that grows with your organisation."
      ctaText="Request a Risk Assessment"
      heroImage="/images/it-risk-and-security-strategy/secondary.png"
      />
    </>
  );
}
