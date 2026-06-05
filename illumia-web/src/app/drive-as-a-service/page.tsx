import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Drive as a Service — Secure Cloud Storage | Illumia Solutions",
  description:
    "Secure self-hosted cloud storage powered by Nextcloud — seamless file access with complete data sovereignty.",
  alternates: { canonical: "/drive-as-a-service/" },
};

export default function DriveAsAServicePage() {
  return (
    <RichServicePageTemplate
      badge="Cloud Storage"
      title="Drive —"
      titleHighlight="as a Service."
      description="In the era of digital transformation, efficient and secure data management is crucial for business success. Illumia Solutions provides cloud storage powered by Nextcloud — delivering unparalleled data privacy, secure file sharing, and robust collaboration capabilities to keep your data accessible, secure, and under your complete control."
      sectionTitle="Benefits of Our Cloud Storage Solutions"
      ctaText="Deploy Secure Drive"
      heroImage="https://nextcloud.illumiasolutions.com/public.php/dav/files/yT6oorESzr75wQn"
      closingText="Illumia Solutions' cloud storage solutions with Nextcloud provide a secure, scalable, and cost-effective way to manage your organization's data. With advanced security features, seamless integration, and robust collaboration tools, our solutions ensure that your data is always protected, accessible, and under your control."
      features={[
        {
          title: "Data Privacy and Control",
          items: [
            {
              label: "Complete Data Ownership",
              text: "Retain full control over your data with our Nextcloud-powered cloud storage solution — stored securely and accessed only by authorized users.",
            },
            {
              label: "Compliance",
              text: "Our solutions help meet data protection regulations, ensuring your data management practices align with GDPR and other applicable standards.",
            },
          ],
        },
        {
          title: "Secure File Sharing",
          items: [
            {
              label: "Protected Sharing",
              text: "Share files securely with colleagues, clients, and partners using encrypted connections and robust access controls.",
            },
            {
              label: "Granular Permissions",
              text: "Manage access levels for user-specific data visibility, ensuring the right people have access to the right files.",
            },
          ],
        },
        {
          title: "Collaboration Tools",
          items: [
            {
              label: "Integrated Collaboration",
              text: "Enhance productivity with integrated collaboration tools, including document editing, calendar sharing, and task management within the Nextcloud environment.",
            },
            {
              label: "Real-Time Editing",
              text: "Enable simultaneous document editing by multiple team members for streamlined collaborative workflows.",
            },
          ],
        },
        {
          title: "Scalability",
          items: [
            {
              label: "Elastic Storage",
              text: "Easily scale your storage capacity to meet the growing needs of your organization without disruption.",
            },
            {
              label: "Flexible Deployment",
              text: "Scale your cloud storage infrastructure alongside business growth with flexible deployment options.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Connect Nextcloud with your existing CRM, ERP, and business tools for a cohesive digital workplace.",
            },
            {
              label: "APIs and Plugins",
              text: "Leverage a wide range of APIs and plugins to extend functionality and tailor the platform to your specific needs.",
            },
          ],
        },
        {
          title: "Cost-Effective",
          items: [
            {
              label: "Reduced Costs",
              text: "Eliminate expensive on-premises hardware and reduce storage infrastructure costs with a managed cloud solution.",
            },
            {
              label: "Open Source Savings",
              text: "Benefit from the cost-effectiveness of Nextcloud as an open-source solution, avoiding proprietary licensing fees.",
            },
          ],
        },
        {
          title: "Cross-Platform Access",
          items: [
            {
              label: "Universal Access",
              text: "Access your files and collaboration tools from any device, whether desktop, laptop, tablet, or smartphone.",
            },
            {
              label: "Platform Compatibility",
              text: "Full support for Windows, macOS, Linux, iOS, and Android ensures seamless access across all your devices.",
            },
          ],
        },
        {
          title: "Customizable User Interface",
          items: [
            {
              label: "Tailored Experience",
              text: "Customize the Nextcloud interface to match your organizational branding and workflow preferences.",
            },
            {
              label: "Flexible Configuration",
              text: "Adapt features and settings for different user groups within your organization.",
            },
          ],
        },
        {
          title: "Advanced Security Features",
          items: [
            {
              label: "Two-Factor Authentication",
              text: "Enhance security with 2FA, ensuring only authorized users can access your cloud storage environment.",
            },
            {
              label: "End-to-End Encryption",
              text: "Protect your data with robust end-to-end encryption methods for both stored and transmitted information.",
            },
          ],
        },
        {
          title: "Offline Access",
          items: [
            {
              label: "Data Availability",
              text: "Access your files even without internet connectivity, ensuring productivity is never disrupted.",
            },
            {
              label: "Automatic Sync",
              text: "Automatically synchronize files when the connection is restored, keeping all devices up to date.",
            },
          ],
        },
        {
          title: "File Versioning",
          items: [
            {
              label: "Version Control",
              text: "Track changes and revert to previous file versions, ensuring no work is ever permanently lost.",
            },
          ],
        },
        {
          title: "Activity Monitoring",
          items: [
            {
              label: "Audit Trails",
              text: "Monitor user activities with detailed audit logs, providing full accountability and compliance support.",
            },
            {
              label: "Alerts and Notifications",
              text: "Receive real-time alerts for important file events, access attempts, and sharing activities.",
            },
          ],
        },
        {
          title: "High Availability",
          items: [
            {
              label: "Reliable Access",
              text: "Ensure high availability of your data with redundant infrastructure designed for continuous uptime.",
            },
            {
              label: "Disaster Recovery",
              text: "Protect your data against unforeseen events with built-in disaster recovery capabilities.",
            },
          ],
        },
        {
          title: "Community and Professional Support",
          items: [
            {
              label: "Vibrant Community",
              text: "Access a wealth of resources, plugins, and support from the extensive Nextcloud open-source community.",
            },
            {
              label: "Professional Assistance",
              text: "Receive dedicated professional support from Illumia Solutions, ensuring timely assistance and expert guidance.",
            },
          ],
        },
      ]}
    />
  );
}
