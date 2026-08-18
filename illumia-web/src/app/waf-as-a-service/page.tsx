import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "WAF as a Service — Web Application Firewall",
  description:
    "A Web Application Firewall (WAF) is an essential security measure that provides comprehensive protection against a range of cyber threats.",
  alternates: {
    canonical: "/waf-as-a-service/",
    languages: { "en": "https://illumiasolutions.com/waf-as-a-service/", "x-default": "https://illumiasolutions.com/waf-as-a-service/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/waf-as-a-service/#service",
  name: "WAF as a Service",
  serviceType: "Cyber Security Services",
  description:
    "A Web Application Firewall (WAF) is an essential security measure that provides comprehensive protection against a range of cyber threats.",
  url: "https://illumiasolutions.com/waf-as-a-service/",
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
      "name": "WAF as a Service — Web Application Firewall",
      "item": "https://illumiasolutions.com/waf-as-a-service/"
    }
  ]
};

export default function WafAsAServicePage() {
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
      badge="Cyber Security Services"
      title="WAF —"
      titleHighlight="as a Service."
      description="A Web Application Firewall (WAF) is an essential security measure that provides comprehensive protection against a range of cyber threats. Our WAF as a Service offers robust security, easy deployment, and significant benefits, especially for companies without dedicated IT personnel."
      sectionTitle="WAF as a Service Features"
      ctaText="Contact Us"
      heroImage="/images/waf-as-a-service/hero.png"
      darkHero={true}
      closingText="Investing in our WAF as a Service ensures your web applications are protected against evolving threats, allowing you to focus on your core business operations without worrying about security. Contact us today to learn more about how our WAF solutions can benefit your company."
      features={[
        {
          title: "How WAF Helps in Company Defense",
          items: [
            {
              label: "Protection Against Common Web Attacks",
              text: "WAFs defend against common threats such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
            },
            {
              label: "Zero-Day Attack Mitigation",
              text: "WAFs can detect and block unknown threats using heuristic and signature-based techniques.",
            },
            {
              label: "DDoS Attack Prevention",
              text: "WAFs can absorb and mitigate Distributed Denial of Service (DDoS) attacks, ensuring your web applications remain accessible.",
            },
            {
              label: "Compliance",
              text: "WAFs help businesses comply with industry standards and regulations such as PCI-DSS by providing necessary security controls.",
            },
          ],
        },
        {
          title: "Deployment Options for WAF",
          items: [
            {
              label: "Cloud-Based WAF",
              text: "Hosted by a third-party provider, offering easy scalability and reduced maintenance costs.",
            },
            {
              label: "On-Premises WAF",
              text: "Deployed within the company's data center, providing full control over security policies.",
            },
            {
              label: "Hybrid WAF",
              text: "Combines both cloud-based and on-premises solutions for a balanced approach, leveraging the benefits of both models.",
            },
          ],
        },
        {
          title: "Benefits for Offices Without IT Personnel",
          items: [
            {
              label: "Managed Security",
              text: "We handle the deployment, configuration, and ongoing management of the WAF, reducing the burden on your internal resources.",
            },
            {
              label: "24/7 Monitoring and Support",
              text: "Our team monitors your web applications around the clock, ready to respond to any incidents promptly.",
            },
            {
              label: "Automatic Updates",
              text: "Our WAF solution is continuously updated to protect against the latest threats, ensuring your defenses are always current.",
            },
            {
              label: "User-Friendly Interface",
              text: "An intuitive dashboard allows non-technical users to understand and manage security alerts and reports easily.",
            },
          ],
        },
        {
          title: "What We Offer",
          items: [
            {
              label: "Customizable Security Policies",
              text: "Tailored to your specific needs, ensuring maximum protection.",
            },
            {
              label: "Comprehensive Reporting",
              text: "Detailed insights into traffic patterns, blocked threats, and compliance status.",
            },
            {
              label: "Seamless Integration",
              text: "Compatible with various web platforms and easy to integrate into your existing infrastructure.",
            },
            {
              label: "Scalable Solutions",
              text: "Whether you are a small business or a large enterprise, our WAF solution scales to meet your requirements.",
            },
            {
              label: "Expert Support",
              text: "Our team of security experts is always available to assist you with any issues or queries.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
