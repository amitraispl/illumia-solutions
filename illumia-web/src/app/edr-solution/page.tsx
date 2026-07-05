import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "EDR Solution — Endpoint Detection & Response | Illumia Solutions",
  description:
    "Advanced Endpoint Detection and Response solutions powered by OpenEDR — real-time threat detection, behavioral analysis, and automated response for comprehensive endpoint security.",
  alternates: { canonical: "/edr-solution/" },
};

export default function EDRSolutionPage() {
  return (
    <RichServicePageTemplate
      badge="Endpoint Security"
      title="EDR —"
      titleHighlight="Endpoint Detection & Response."
      description="In today's cybersecurity landscape, protecting endpoints is crucial to safeguarding your organization's data and network. Illumia Solutions provides advanced Endpoint Detection and Response (EDR) solutions powered by OpenEDR."
      sectionTitle="Benefits of Our EDR Solutions"
      ctaText="Contact Us"
      heroImage="/edr.png"
      darkHero={true}
      closingText="Illumia Solutions' EDR solutions with OpenEDR provide a comprehensive, scalable, and cost-effective way to enhance your organization's endpoint security. With powerful real-time threat detection, behavioral analysis, and seamless integration features, our solutions ensure that your endpoints are protected and your data is secure. Partner with Illumia Solutions to leverage the full potential of EDR and safeguard your business against cyber threats."
      features={[
        {
          title: "Real-Time Threat Detection",
          items: [
            {
              label: "Instant Alerts",
              text: "Detect and respond to threats in real-time, ensuring rapid action to mitigate potential risks.",
            },
            {
              label: "Minimized Impact",
              text: "Reduce the potential impact of security incidents through immediate detection and response.",
            },
          ],
        },
        {
          title: "Endpoint Detection and Response",
          items: [
            {
              label: "Comprehensive Protection",
              text: "Monitor and protect all endpoints, including desktops, laptops, servers, and mobile devices, against a wide range of cyber threats.",
            },
            {
              label: "Advanced EDR Capabilities",
              text: "Utilize advanced EDR capabilities to detect, investigate, and respond to security incidents effectively.",
            },
          ],
        },
        {
          title: "Behavioral Analysis",
          items: [
            {
              label: "Anomaly Detection",
              text: "Identify unusual patterns and behaviors that may indicate a security threat through advanced behavioral analysis.",
            },
            {
              label: "Predictive Insights",
              text: "Use behavioral analysis to predict and prevent potential security incidents before they escalate.",
            },
          ],
        },
        {
          title: "Forensics and Investigation",
          items: [
            {
              label: "In-Depth Forensics",
              text: "Conduct thorough forensic investigations to understand the root cause of security incidents.",
            },
            {
              label: "Incident Analysis",
              text: "Analyze security incidents to improve future detection and response strategies, enhancing overall security posture.",
            },
          ],
        },
        {
          title: "Scalability",
          items: [
            {
              label: "Adaptable Solutions",
              text: "Easily scale your EDR solution to accommodate the growing needs of your organization, whether you're a small business or a large enterprise.",
            },
            {
              label: "Flexible Infrastructure",
              text: "Support a large number of endpoints and data sources without compromising performance.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Integrate OpenEDR with your existing security tools and IT infrastructure to create a cohesive security ecosystem.",
            },
            {
              label: "APIs and Plugins",
              text: "Utilize APIs and plugins to extend the functionality of your EDR solution, ensuring comprehensive coverage.",
            },
          ],
        },
        {
          title: "Customizable Alerts",
          items: [
            {
              label: "Tailored Notifications",
              text: "Configure custom alerts to notify you of specific security events and thresholds.",
            },
            {
              label: "Real-Time Updates",
              text: "Receive real-time notifications to stay informed of critical security incidents as they occur.",
            },
          ],
        },
        {
          title: "Dashboard and Reporting",
          items: [
            {
              label: "User-Friendly Dashboards",
              text: "Access intuitive dashboards that provide a comprehensive overview of your endpoint security posture.",
            },
            {
              label: "Detailed Reports",
              text: "Generate detailed reports on security events, endpoint activity, and system performance for informed decision-making.",
            },
          ],
        },
        {
          title: "Threat Intelligence",
          items: [
            {
              label: "Proactive Defense",
              text: "Leverage threat intelligence feeds to stay informed of the latest cyber threats and vulnerabilities, enhancing your proactive defense capabilities.",
            },
            {
              label: "Informed Decisions",
              text: "Use threat intelligence to make informed decisions and prioritize response actions based on the current threat landscape.",
            },
          ],
        },
        {
          title: "Automation",
          items: [
            {
              label: "Automated Workflows",
              text: "Automate repetitive security tasks, such as threat detection, incident response, and compliance checks, to improve efficiency and reduce human error.",
            },
            {
              label: "Orchestration",
              text: "Use automation to orchestrate complex security operations, enhancing overall security management and response capabilities.",
            },
          ],
        },
        {
          title: "Advanced Security Features",
          items: [
            {
              label: "Robust Protection",
              text: "Employ advanced security features, including encryption, multi-factor authentication, and endpoint hardening, to protect your sensitive data and systems.",
            },
            {
              label: "Comprehensive Defense",
              text: "Utilize a multi-layered security approach to defend against various cyber threats.",
            },
          ],
        },
        {
          title: "Cost-Effective",
          items: [
            {
              label: "Reduced Costs",
              text: "Lower your total cost of ownership with an open-source solution that eliminates the need for expensive licenses and proprietary software.",
            },
            {
              label: "Affordable Pricing",
              text: "Benefit from competitive pricing plans that suit the budget of any organization, from small businesses to large enterprises.",
            },
          ],
        },
        {
          title: "Cross-Platform Support",
          items: [
            {
              label: "Universal Compatibility",
              text: "Ensure protection across multiple platforms, including Windows, macOS, Linux, and mobile operating systems.",
            },
            {
              label: "Wide Coverage",
              text: "Support and secure a diverse range of devices within your organization.",
            },
          ],
        },
        {
          title: "Continuous Monitoring",
          items: [
            {
              label: "24/7 Surveillance",
              text: "Monitor your endpoints continuously to detect and respond to threats at any time.",
            },
            {
              label: "Proactive Monitoring",
              text: "Stay ahead of potential threats with proactive and continuous endpoint monitoring.",
            },
          ],
        },
      ]}
    />
  );
}
