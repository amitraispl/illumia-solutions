import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Compliance Services",
  description:
    "Illumia Solutions offers comprehensive compliance services to help you navigate complex regulatory requirements, ensuring your practices meet all necessary standards while managing costs effectively.",
  alternates: { canonical: "/compliance-services/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/compliance-services/#service",
  name: "Compliance Services",
  serviceType: "Compliance",
  description:
    "Illumia Solutions offers comprehensive compliance services to help you navigate complex regulatory requirements, ensuring your practices meet all necessary standards while managing costs effectively.",
  url: "https://illumiasolutions.com/compliance-services/",
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
      "name": "Compliance Services",
      "item": "https://illumiasolutions.com/compliance-services/"
    }
  ]
};

export default function ComplianceServicesPage() {
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
      badge="Compliance"
      title="Compliance"
      titleHighlight="Services."
      description="Meeting industry standards and regulations is vital for businesses today. Illumia Solutions offers comprehensive compliance services to help you navigate complex regulatory requirements, ensuring your practices meet all necessary standards while managing costs effectively."
      sectionTitle="Challenges we address — and how we solve them."
      features={[
        {
          title: "Challenges We Address",
          items: [
            {
              label: "Regulatory Navigation",
              text: "Understanding and complying with various standards can be complex and time-consuming without the right expertise.",
            },
            {
              label: "Compliance Maintenance",
              text: "Implementing and maintaining effective compliance measures requires continuous effort and specialist knowledge.",
            },
            {
              label: "Cost Management",
              text: "Balancing the costs of achieving and maintaining compliance with budget constraints is essential to ensure financial viability.",
            },
          ],
        },
        {
          title: "Our Approach",
          items: [
            {
              label: "Expert Guidance",
              text: "Simplify compliance with expert advice from our experienced team, ensuring your practices meet all necessary standards and regulations.",
            },
            {
              label: "Continuous Support",
              text: "Maintain compliance with ongoing assistance and support, helping you implement and maintain effective measures.",
            },
            {
              label: "Cost-Effective Solutions",
              text: "Provide comprehensive, cost-effective compliance services that balance the need for compliance with budget constraints, ensuring financial viability.",
            },
          ],
        },
      ]}
      closingText="Compliance doesn't have to be a burden. Illumia's dedicated compliance practice simplifies the regulatory landscape — giving your team expert guidance, ongoing support, and cost-effective solutions that keep your organisation compliant."
      ctaText="Request a Compliance Consultation"
      heroImage="/images/compliance-services/hero.png"
      />
    </>
  );
}
