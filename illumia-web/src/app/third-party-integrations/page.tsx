import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";
import IntegrationNetworkGraphic from "@/components/IntegrationNetworkGraphic";

export const metadata: Metadata = {
  title: "Third-Party Integrations — API, CRM, ERP & Payment Gateway Integration",
  description:
    "Reliable, secure third-party integrations connecting your applications to CRMs, ERPs, payment gateways, and the platforms your business already runs on.",
  alternates: { canonical: "/third-party-integrations/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/third-party-integrations/#service",
  name: "Third-Party Integrations",
  serviceType: "Third-Party Integrations",
  description:
    "Reliable, secure third-party integrations connecting your applications to CRMs, ERPs, payment gateways, and the platforms your business already runs on.",
  url: "https://illumiasolutions.com/third-party-integrations/",
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
      "name": "Software Development",
      "item": "https://illumiasolutions.com/software-development/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Third-Party Integrations — API, CRM, ERP & Payment Gateway Integration",
      "item": "https://illumiasolutions.com/third-party-integrations/"
    }
  ]
};

export default function ThirdPartyIntegrationsPage() {
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
      badge="Third-Party Integrations"
      title="Third-Party Integrations —"
      titleHighlight="Connect Everything You Run."
      description="Your software doesn't operate in isolation. Sprint by sprint, we build reliable, secure integrations connecting your applications to the CRMs, payment gateways, ERPs, and platforms your business already depends on."
      sectionTitle="Our Integration Capabilities"
      ctaText="Discuss Your Integration"
      heroImageNode={
        <div className="absolute inset-0 bg-[#f6f3f2]">
          <IntegrationNetworkGraphic variant="onLight" />
        </div>
      }
      closingText="Good integrations are invisible — data flows where it needs to, on time, without anyone thinking about it. That's the standard we build to."
      features={[
        {
          title: "Business System Integrations",
          items: [
            {
              label: "CRM & ERP Connectivity",
              text: "Two-way sync with Salesforce, HubSpot, ERPNext, Odoo, and other systems your teams already rely on.",
            },
            {
              label: "Payment Gateway Integration",
              text: "Stripe, PayPal, Razorpay, and other payment processors integrated with proper reconciliation and error handling.",
            },
          ],
        },
        {
          title: "API Development & Management",
          items: [
            {
              label: "Custom API Design",
              text: "Well-documented, versioned APIs built for the partners and internal teams that will consume them.",
            },
            {
              label: "Third-Party API Consumption",
              text: "Robust client integrations against external APIs, with retry logic and graceful degradation built in.",
            },
          ],
        },
        {
          title: "Data Synchronisation",
          items: [
            {
              label: "Real-Time & Batch Sync",
              text: "Webhook-driven real-time updates or scheduled batch sync, chosen to match the data's actual freshness requirements.",
            },
            {
              label: "Data Transformation & Mapping",
              text: "ETL pipelines that reconcile mismatched schemas between systems without losing data integrity.",
            },
          ],
        },
        {
          title: "Authentication & Security",
          items: [
            {
              label: "OAuth & API Key Management",
              text: "Secure credential storage and token refresh flows for every connected service.",
            },
            {
              label: "Audit Logging",
              text: "Full traceability of what data moved where, and when — critical for compliance-sensitive integrations.",
            },
          ],
        },
        {
          title: "Middleware & Orchestration",
          items: [
            {
              label: "Integration Platforms",
              text: "Custom middleware or platforms like n8n and Zapier-class tooling, selected based on complexity and volume.",
            },
            {
              label: "Event-Driven Architecture",
              text: "Message queues and event buses for integrations that need to scale beyond simple point-to-point calls.",
            },
          ],
        },
        {
          title: "Monitoring & Reliability",
          items: [
            {
              label: "Failure Alerting",
              text: "Proactive alerting when an integration fails or data drifts out of sync — not a silent failure discovered weeks later.",
            },
            {
              label: "Ongoing Maintenance",
              text: "Third-party APIs change; we keep your integrations working as they do.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
