import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "PAM as a Service — Privileged Access Management | Illumia Solutions",
  description:
    "Privileged Access Management (PAM) as a Service — robust security features through a cloud-based solution, providing essential management and monitoring of privileged accounts.",
};

export default function PAMPage() {
  return (
    <RichServicePageTemplate
      badge="Cyber Security Services"
      title="PAM —"
      titleHighlight="as a Service."
      description="Privileged Access Management (PAM) as a Service offers robust security features through a cloud-based solution, providing essential management and monitoring of privileged accounts to prevent unauthorized access and potential security breaches."
      sectionTitle="PAM as a Service Features"
      ctaText="Secure Your Business"
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85&auto=format&fit=crop"
      darkHero={true}
      closingText="With our expertise in Apache Guacamole, we offer seamless, secure remote access solutions tailored to your organization's needs, ensuring trusted connectivity and maintaining the highest levels of security and control."
      features={[
        {
          title: "How PAM as a Service Helps Companies",
          items: [
            {
              label: "Enhanced Security",
              text: "Secures privileged accounts, ensuring only authorized users access sensitive information, thereby reducing the risk of insider threats and external cyber-attacks.",
            },
            {
              label: "Compliance and Audit Readiness",
              text: "Helps organizations maintain compliance with industry standards like PCI DSS, HIPAA, and GDPR by providing detailed audit logs and reports.",
            },
            {
              label: "Cost-Effective",
              text: "Offers a scalable, open-source solution, reducing capital expenditure and operational costs.",
            },
            {
              label: "Simplified Management",
              text: "Service provider handles updates, patches, and maintenance, allowing IT teams to focus on core business activities.",
            },
          ],
        },
        {
          title: "How PAM as a Service is Used",
          items: [
            {
              label: "Credential Management",
              text: "Automates the management of privileged credentials, including regular password rotations and secure storage.",
            },
            {
              label: "Session Monitoring and Recording",
              text: "Monitors and records all privileged sessions, providing visibility into user activities and ensuring accountability.",
            },
            {
              label: "Access Control",
              text: "Enforces strict access controls, granting privileged access based on roles and ensuring users have the minimum necessary permissions.",
            },
            {
              label: "Incident Response",
              text: "Provides tools for quick response and mitigation in the event of a security incident, such as session termination and account lockdown.",
            },
          ],
        },
        {
          title: "Apache Guacamole Based Solution",
          items: [
            {
              label: "Remote Access Gateway",
              text: "We utilize Apache Guacamole as a Remote Access Gateway to provide secure, clientless access to your critical IT systems. Apache Guacamole supports multiple protocols like RDP, VNC, and SSH, allowing users to connect to their systems remotely via a web browser, without the need for any client-side software.",
            },
            {
              label: "Device Authorization",
              text: "Our solution can also be configured to ensure that only authorized devices can access the system, adding an extra layer of security. This ensures that even if unauthorized users attempt to connect, access will be denied, further protecting your sensitive systems.",
            },
            {
              label: "Setup & Maintenance",
              text: "We can set up and provide ongoing maintenance for Apache Guacamole solutions tailored to organizations of any scale—whether you're a small business, a mid-sized enterprise, or a large corporation. Our team ensures that your remote access infrastructure is fully optimized, secure, and scalable to meet your specific requirements.",
            },
          ],
        },
        {
          title: "Key Features",
          items: [
            {
              label: "Clientless Access",
              text: "No client software required, access is browser-based.",
            },
            {
              label: "Device Authorization",
              text: "Configured to allow access only from authorized devices.",
            },
            {
              label: "Multiple Protocols Supported",
              text: "Manage systems via RDP, VNC, SSH, and more.",
            },
            {
              label: "Enhanced Security",
              text: "Centralized access control and monitoring for your systems.",
            },
            {
              label: "Scalable Solutions",
              text: "We set up and maintain Guacamole for businesses of all sizes, from small teams to large enterprises.",
            },
            {
              label: "Session Recording",
              text: "Monitor and record remote access sessions for audit, compliance, and security purposes.",
            },
          ],
        },
        {
          title: "Benefits of PAM as a Service for Your Company",
          items: [
            {
              label: "Mitigating Insider Threats",
              text: "Closely monitors and controls privileged access, preventing insider threats from employees or contractors with elevated permissions.",
            },
            {
              label: "Reducing Cyber Attack Surface",
              text: "Limits access to critical systems and data, reducing potential entry points for cyber attackers.",
            },
            {
              label: "Ensuring Business Continuity",
              text: "Maintains business continuity by preventing disruptions caused by security breaches with robust security measures.",
            },
            {
              label: "Streamlining IT Operations",
              text: "Offloads the management of privileged access to a service provider, allowing IT departments to operate more efficiently and focus on strategic initiative.",
            },
          ],
        },
        {
          title: "What We Offer",
          items: [
            {
              label: "Advanced Authentication Methods",
              text: "Incorporates multi-factor authentication (MFA) and device authentication to enhance security.",
            },
            {
              label: "Seamless Integration",
              text: "Integrates smoothly with your existing IT infrastructure, supporting a wide range of applications and systems.",
            },
            {
              label: "24/7 Monitoring and Support",
              text: "Our team of experts provides round-the-clock monitoring and support to ensure the security and availability of your privileged accounts.",
            },
            {
              label: "Customizable Policies",
              text: "We offer customizable access control policies that align with your organization's security requirements and compliance needs.",
            },
            {
              label: "Regular Security Updates",
              text: "Stay protected with the latest security updates and patches applied by our dedicated team.",
            },
          ],
        },
      ]}
    />
  );
}
