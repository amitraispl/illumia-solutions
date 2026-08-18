import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Disaster Recovery — Business Continuity",
  description:
    "Comprehensive disaster recovery solutions ensuring rapid restoration of critical systems with minimal data loss and downtime.",
  alternates: {
    canonical: "/disaster-recovery/",
    languages: { "en": "https://illumiasolutions.com/disaster-recovery/", "x-default": "https://illumiasolutions.com/disaster-recovery/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/disaster-recovery/#service",
  name: "Disaster Recovery",
  serviceType: "Business Continuity",
  description:
    "Comprehensive disaster recovery solutions ensuring rapid restoration of critical systems with minimal data loss and downtime.",
  url: "https://illumiasolutions.com/disaster-recovery/",
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
      "name": "Cloud",
      "item": "https://illumiasolutions.com/cloud-services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Disaster Recovery — Business Continuity",
      "item": "https://illumiasolutions.com/disaster-recovery/"
    }
  ]
};

export default function DisasterRecoveryPage() {
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
      badge="Business Continuity"
      title="Disaster Recovery —"
      titleHighlight="Always Back Online."
      description="At Illumia Solutions, we understand the critical importance of maintaining business continuity under any circumstances. Our Disaster Recovery solutions provide robust, scalable, and secure recovery processes that ensure your business can continue operations with minimal disruption."
      sectionTitle="Our Disaster Recovery Solutions"
      ctaText="Protect Your Business"
      heroImage="/images/disaster-recovery/hero.png"
      darkHero={true}
      closingText="At Illumia Solutions, we are dedicated to providing Disaster Recovery solutions that not only secure your data but also ensure your operations can quickly resume after any disruption. Our DR solutions are designed to give you peace of mind, knowing that your business is always prepared for the unexpected. Contact us today to discuss how we can customize a DR solution that fits your business needs."
      features={[
        {
          title: "Flexible and Customizable DR Solutions",
          items: [
            {
              label: "Versatile DR Configuration",
              text: "We offer DR solutions for your existing on-premises or cloud servers, as well as for servers hosted within our infrastructure — fully tailored to your specific requirements.",
            },
            {
              label: "Bring Your Own DR Infrastructure",
              text: "You can bring your own DR infrastructure and host it with us, or we design and build a DR solution that meets your exact specifications.",
            },
          ],
        },
        {
          title: "Enhanced Security and Accessibility",
          items: [
            {
              label: "Secured Remote Access",
              text: "All remote access to the DR components is secured through an interface that supports Multi-Factor Authentication (MFA) and restricts access to pre-approved endpoint devices.",
            },
            {
              label: "VPN Connectivity",
              text: "Secure VPN access is available for managing DR solutions and ensuring protected connectivity back to your environment.",
            },
          ],
        },
        {
          title: "Connectivity and Support",
          items: [
            {
              label: "Leased Lines and Dark Fibers",
              text: "We arrange the necessary leased lines or dark fibers connecting your cloud provider or premises, ensuring robust and reliable connectivity for your DR environment.",
            },
            {
              label: "Remote Hands Support",
              text: "Our on-site support team manages and troubleshoots DR infrastructure, providing peace of mind and minimizing recovery time.",
            },
          ],
        },
        {
          title: "Integrated Monitoring, Orchestration, and Drills",
          items: [
            {
              label: "Comprehensive Monitoring and Alerting",
              text: "Infrastructure, traffic, and application monitoring with integrated alerting to detect issues before they become disruptions.",
            },
            {
              label: "Failover Orchestration",
              text: "Utilize our failover orchestration solutions using smart DNS and reverse proxy technologies to ensure seamless switching in the event of a disaster.",
            },
            {
              label: "DR Drills Coordination",
              text: "We provide necessary assistance and coordination for conducting periodic DR drills, helping ensure your team is prepared and systems are fully functional when needed.",
            },
          ],
        },
        {
          title: "Transparent and Predictable Costing",
          items: [
            {
              label: "Reasonable Data Transfer Charges",
              text: "Transparent data transfer charges with fixed slab limits, ensuring clear and predictable financial planning.",
            },
            {
              label: "Straightforward Monthly Billing",
              text: "Simple, transparent monthly billing with no hidden costs or surprise fees.",
            },
          ],
        },
        {
          title: "Reliability and Cybersecurity",
          items: [
            {
              label: "Unmatched Reliability",
              text: "Our DR infrastructure is built on high availability and redundancy principles, ensuring your recovery environment is ready when you need it most.",
            },
            {
              label: "Advanced Cybersecurity Add-ons",
              text: "EDR, SIEM, DLP, and honeypot systems available as security add-ons to further protect your disaster recovery environment.",
            },
          ],
        },
        {
          title: "No Vendor Lock-in",
          items: [
            {
              label: "Freedom to Change",
              text: "We believe in providing superior service that keeps our customers returning — not contractual obligations. Modify or discontinue services according to your business needs.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
