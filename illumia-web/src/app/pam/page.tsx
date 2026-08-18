import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Privileged Access Management Solution",
  description:
    "Advanced PAM solutions powered by Apache Guacamole — web-based, centralized, and scalable privileged access management for modern enterprises.",
  alternates: {
    canonical: "/pam/",
    languages: { "en": "https://illumiasolutions.com/pam/", "x-default": "https://illumiasolutions.com/pam/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/pam/#service",
  name: "Privileged Access Management Solution",
  serviceType: "Cybersecurity",
  description:
    "Advanced PAM solutions powered by Apache Guacamole — web-based, centralized, and scalable privileged access management for modern enterprises.",
  url: "https://illumiasolutions.com/pam/",
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
      "name": "Privileged Access Management Solution",
      "item": "https://illumiasolutions.com/pam/"
    }
  ]
};

export default function PamPage() {
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
      badge="Cybersecurity"
      title="Privileged Access"
      titleHighlight="Management (PAM) Solution."
      description="In the modern cybersecurity landscape, managing privileged access is critical to protecting your organization's sensitive data and systems. Illumia Solutions offers advanced Privileged Access Management (PAM) solutions powered by Apache Guacamole."
      sectionTitle="Benefits of Our PAM Solutions"
      ctaText="Secure Privileged Access"
      heroImage="/images/shared/pam.png"
      closingText="Illumia Solutions' Privileged Access Management (PAM) solutions with Apache Guacamole provide a comprehensive, scalable, and cost-effective way to enhance your organization's security."
      features={[
        {
          title: "Web-Based Access",
          items: [
            {
              label: "Anywhere Access",
              text: "Access privileged sessions securely from any location using a web browser.",
            },
            {
              label: "Convenient Management",
              text: "Simplify access management with a centralized web-based interface.",
            },
          ],
        },
        {
          title: "Centralized Management",
          items: [
            {
              label: "Unified Control",
              text: "Manage all privileged access from a single, centralized platform.",
            },
            {
              label: "Centralized Policies",
              text: "Implement and enforce security policies consistently.",
            },
          ],
        },
        {
          title: "Cross-Platform Support",
          items: [
            {
              label: "Versatile Compatibility",
              text: "Support a wide range of operating systems and devices.",
            },
            {
              label: "Universal Access",
              text: "Ensure seamless access to resources across diverse IT environments.",
            },
          ],
        },
        {
          title: "Security",
          items: [
            {
              label: "Robust Protection",
              text: "Secure privileged access with advanced security features.",
            },
            {
              label: "End-to-End Encryption",
              text: "Ensure that all sessions are encrypted.",
            },
          ],
        },
        {
          title: "Multi-Factor Authentication",
          items: [
            {
              label: "Enhanced Security",
              text: "Implement MFA to add an extra layer of security.",
            },
          ],
        },
        {
          title: "Device Binding",
          items: [
            {
              label: "Secure Access",
              text: "Bind user sessions to specific devices.",
            },
            {
              label: "Enhanced Control",
              text: "Ensure that only trusted devices can access privileged accounts.",
            },
          ],
        },
        {
          title: "Scalability",
          items: [
            {
              label: "Adaptable Solutions",
              text: "Easily scale your PAM solution to accommodate growing needs.",
            },
            {
              label: "Flexible Capacity",
              text: "Support an increasing number of users and devices.",
            },
          ],
        },
        {
          title: "Session Recording",
          items: [
            {
              label: "Comprehensive Monitoring",
              text: "Record all privileged sessions for auditing and compliance.",
            },
            {
              label: "Efficient Storage",
              text: "Utilize efficient storage solutions.",
            },
          ],
        },
        {
          title: "User Access Control",
          items: [
            {
              label: "Granular Permissions",
              text: "Implement granular access controls based on roles.",
            },
            {
              label: "Least Privilege",
              text: "Apply the principle of least privilege to minimize unauthorized access risk.",
            },
          ],
        },
        {
          title: "Ease of Use",
          items: [
            {
              label: "Intuitive Interface",
              text: "Enjoy a user-friendly interface that simplifies management.",
            },
            {
              label: "Quick Deployment",
              text: "Deploy the PAM solution quickly and efficiently.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Integrate Apache Guacamole with existing security tools.",
            },
            {
              label: "APIs and Plugins",
              text: "Utilize APIs and plugins to extend functionality.",
            },
          ],
        },
        {
          title: "No Client Software Required",
          items: [
            {
              label: "Zero Footprint",
              text: "Access privileged sessions without client software installations.",
            },
            {
              label: "Browser-Based Access",
              text: "Provide secure access through any modern web browser.",
            },
          ],
        },
        {
          title: "Cost-Effective",
          items: [
            {
              label: "Reduced Costs",
              text: "Lower total cost of ownership with an open-source solution.",
            },
            {
              label: "No Licensing Costs",
              text: "Benefit from cost-effectiveness with no licensing fees.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
