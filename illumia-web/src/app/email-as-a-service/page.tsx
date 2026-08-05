import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Email as a Service — Enterprise Mail",
  description:
    "Enterprise-grade email infrastructure built on Zimbra/Carbonio with Proxmox Mail Gateway for secure, reliable communications.",
  alternates: { canonical: "/email-as-a-service/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/email-as-a-service/#service",
  name: "Email as a Service",
  serviceType: "Secure Communications",
  description:
    "Enterprise-grade email infrastructure built on Zimbra/Carbonio with Proxmox Mail Gateway for secure, reliable communications.",
  url: "https://illumiasolutions.com/email-as-a-service/",
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
      "name": "Open Source",
      "item": "https://illumiasolutions.com/open-source-solutions/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Email as a Service — Enterprise Mail",
      "item": "https://illumiasolutions.com/email-as-a-service/"
    }
  ]
};

export default function EmailAsAServicePage() {
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
      badge="Secure Communications"
      title="Email —"
      titleHighlight="as a Service."
      description="Email as a Service (EaaS) provides businesses with a reliable and efficient email solution without the need to manage servers, updates, and security protocols. Our EaaS leverages open-source mail solutions — Zimbra and Carbonio — to deliver unique advantages including customization, transparency, and zero licensing fees."
      sectionTitle="Email as a Service Features"
      ctaText="Migrate Your Email"
      heroImage="/images/heroes/email-as-a-service_hero.jpg"
      closingText="Experience the benefits of a reliable, secure, and cost-effective email service with our Email as a Service offering. Contact us today to learn more and get started."
      features={[
        {
          title: "How Email as a Service Helps Companies",
          items: [
            {
              label: "Scalability",
              text: "Easily scale your email infrastructure to match your business growth, supporting multiple domains and an increasing number of users without disruption.",
            },
            {
              label: "Cost Efficiency",
              text: "Reduce the costs associated with maintaining on-premises email servers and hiring specialized IT staff.",
            },
            {
              label: "Accessibility",
              text: "Access your email from anywhere, at any time, using any device.",
            },
            {
              label: "Security",
              text: "Benefit from advanced security features and regular updates to protect your email communications from threats.",
            },
          ],
        },
        {
          title: "Benefits of Using Open-Source Mail Solutions",
          items: [
            {
              label: "Customization",
              text: "Tailor the email service to meet specific business needs with the flexibility of open-source software.",
            },
            {
              label: "Transparency",
              text: "Open-source solutions offer complete transparency, allowing companies to audit the code for security and privacy concerns.",
            },
            {
              label: "Community Support",
              text: "Benefit from a vibrant community of developers and users who contribute to continuous improvement and support.",
            },
            {
              label: "Cost Savings",
              text: "Avoid licensing fees associated with proprietary email solutions, reducing overall costs.",
            },
          ],
        },
        {
          title: "Deployment Options",
          items: [
            {
              label: "Cloud-Based Deployment",
              text: "Fully managed cloud deployment offering scalability, accessibility, and minimal infrastructure overhead.",
            },
            {
              label: "On-Premises Deployment",
              text: "Deploy on your own infrastructure for complete data sovereignty and compliance with internal or regulatory requirements.",
            },
            {
              label: "Hybrid Deployment",
              text: "A hybrid approach combining cloud and on-premises deployment to leverage the benefits of both models.",
            },
          ],
        },
        {
          title: "How Email Can Save Your Company",
          items: [
            {
              label: "Reduce IT Overhead",
              text: "Minimize the need for in-house IT personnel to manage and maintain email servers, improving productivity and reducing operational costs.",
            },
            {
              label: "Improve Productivity",
              text: "Streamline communication workflows and reduce email-related downtime with a reliable, professionally managed service.",
            },
            {
              label: "Enhance Security",
              text: "Leverage enterprise-grade security measures to protect your organization from phishing, spam, and email-borne threats.",
            },
            {
              label: "Boost Collaboration",
              text: "Facilitate seamless communication and collaboration among team members with integrated calendar, tasks, and contacts.",
            },
          ],
        },
        {
          title: "What We Offer",
          items: [
            {
              label: "Comprehensive Email Solutions",
              text: "End-to-end email infrastructure built on Zimbra and Carbonio, covering setup, configuration, and ongoing management.",
            },
            {
              label: "24/7 Support",
              text: "Round-the-clock expert support to ensure your email service remains operational and secure at all times.",
            },
            {
              label: "Customizable Plans",
              text: "Flexible plans tailored to your organization's size, requirements, and budget — no one-size-fits-all approach.",
            },
            {
              label: "Security and Compliance",
              text: "Advanced security features and compliance-focused architecture to protect communications and meet regulatory requirements.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
