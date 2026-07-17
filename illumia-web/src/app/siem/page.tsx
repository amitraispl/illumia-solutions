import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Security Information and Event Management | Illumia Solutions",
  description:
    "Robust SIEM solutions powered by Wazuh and OSSIM — comprehensive security monitoring, intrusion detection, and compliance management.",
  alternates: { canonical: "/siem/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/siem/#service",
  name: "Security Information and Event Management",
  serviceType: "Cybersecurity",
  description:
    "Robust SIEM solutions powered by Wazuh and OSSIM — comprehensive security monitoring, intrusion detection, and compliance management.",
  url: "https://illumiasolutions.com/siem/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function SiemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Cybersecurity"
      title="Security Information and"
      titleHighlight="Event Management (SIEM)."
      description="In today's dynamic cybersecurity landscape, organizations need advanced tools to detect, analyze, and respond to security threats effectively. Illumia Solutions provides robust Security Incident and Event Management (SIEM) solutions powered by Wazuh and OSSIM."
      sectionTitle="Benefits of Our SIEM Solutions"
      ctaText="Secure Your Organization"
      heroImage="/images/shared/siem.png"
      closingText="Illumia Solutions' SIEM solutions with Wazuh and OSSIM provide a comprehensive, scalable, and cost-effective way to enhance your organization's cybersecurity capabilities."
      features={[
        {
          title: "Comprehensive Security Monitoring",
          items: [
            {
              label: "Full Environment Coverage",
              text: "Monitor your entire IT environment, including networks, servers, endpoints, and applications.",
            },
            {
              label: "Proactive Threat Response",
              text: "Identify and address security threats before they can cause significant damage.",
            },
          ],
        },
        {
          title: "Intrusion Detection",
          items: [
            {
              label: "Real-Time Detection",
              text: "Utilize powerful intrusion detection systems to identify malicious activities and potential breaches in real-time.",
            },
            {
              label: "Swift Mitigation",
              text: "Respond swiftly to intrusions to mitigate risks.",
            },
          ],
        },
        {
          title: "Log Data Analysis",
          items: [
            {
              label: "Anomaly Detection",
              text: "Collect and analyze log data from various sources to detect anomalies.",
            },
            {
              label: "Centralized Collection",
              text: "Centralize log collection and analysis for efficient monitoring.",
            },
          ],
        },
        {
          title: "Compliance Management",
          items: [
            {
              label: "Regulatory Compliance",
              text: "Ensure compliance with various regulations such as PCI DSS, GDPR, and HIPAA.",
            },
            {
              label: "Audit-Ready Records",
              text: "Maintain detailed logs and records to facilitate audits.",
            },
          ],
        },
        {
          title: "Endpoint Security",
          items: [
            {
              label: "Threat Protection",
              text: "Secure endpoints against malware, ransomware, and other cyber threats.",
            },
            {
              label: "Behavior Monitoring",
              text: "Monitor endpoint activities to detect suspicious behavior.",
            },
          ],
        },
        {
          title: "Scalability",
          items: [
            {
              label: "Grow With Demand",
              text: "Easily scale your SIEM solution to accommodate growing organizational needs.",
            },
            {
              label: "High Performance",
              text: "Support large numbers of devices without compromising performance.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Integrate Wazuh and OSSIM with existing security tools.",
            },
            {
              label: "APIs and Plugins",
              text: "Utilize APIs and plugins to extend functionality.",
            },
          ],
        },
        {
          title: "Customizable Alerts",
          items: [
            {
              label: "Custom Alert Rules",
              text: "Configure custom alerts for specific security events.",
            },
            {
              label: "Real-Time Notifications",
              text: "Receive real-time notifications of critical incidents.",
            },
          ],
        },
        {
          title: "Dashboard and Reporting",
          items: [
            {
              label: "Intuitive Dashboards",
              text: "Access intuitive dashboards providing comprehensive security overview.",
            },
            {
              label: "Detailed Reports",
              text: "Generate detailed reports on security events and compliance.",
            },
          ],
        },
        {
          title: "Community Support",
          items: [
            {
              label: "Community Resources",
              text: "Access resources, plugins, and support from Wazuh and OSSIM communities.",
            },
            {
              label: "Professional Support",
              text: "Receive dedicated professional support from Illumia Solutions.",
            },
          ],
        },
        {
          title: "Threat Intelligence",
          items: [
            {
              label: "Intelligence Feeds",
              text: "Leverage threat intelligence feeds for latest cyber threats.",
            },
            {
              label: "Proactive Defense",
              text: "Proactively defend against emerging threats.",
            },
          ],
        },
        {
          title: "Real-Time Threat Detection",
          items: [
            {
              label: "Instant Detection",
              text: "Detect threats instantly for rapid response.",
            },
            {
              label: "Reduced Impact",
              text: "Reduce potential impact of security incidents.",
            },
          ],
        },
        {
          title: "Behavioral Analysis",
          items: [
            {
              label: "Pattern Recognition",
              text: "Identify unusual patterns through advanced behavioral analysis.",
            },
            {
              label: "Predictive Insights",
              text: "Use insights to predict and prevent potential incidents.",
            },
          ],
        },
        {
          title: "Forensics and Investigation",
          items: [
            {
              label: "Deep Investigation",
              text: "Conduct thorough forensic investigations.",
            },
            {
              label: "Improved Detection",
              text: "Analyze incidents to improve future detection strategies.",
            },
          ],
        },
        {
          title: "Automation",
          items: [
            {
              label: "Task Automation",
              text: "Automate repetitive security tasks.",
            },
            {
              label: "Security Orchestration",
              text: "Orchestrate complex security operations.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
