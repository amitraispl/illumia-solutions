import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "SIEM as a Service — Security Intelligence | Illumia Solutions",
  description:
    "Continuous security event correlation and threat intelligence powered by Wazuh and OSSIM for complete environment visibility.",
};

export default function SiemAsAServicePage() {
  return (
    <RichServicePageTemplate
      badge="Security Intelligence"
      title="SIEM —"
      titleHighlight="as a Service."
      description="Security Information and Event Management (SIEM) is essential for modern cybersecurity, aggregating and analyzing activity from multiple IT resources to provide real-time security alerts. SIEM tools offer comprehensive visibility and management of security events within an organization's IT environment."
      sectionTitle="SIEM as a Service Features"
      ctaText="Activate SIEM"
      heroImage="https://images.unsplash.com/photo-1614064548016-0b5e35a7082d?w=1400&q=85&auto=format&fit=crop"
      darkHero={true}
      closingText="Embracing SIEM as a Service with Illumia Solutions enhances your security and provides peace of mind with continuous expert monitoring. Partner with us to protect your business from evolving threats and ensure regulatory compliance."
      features={[
        {
          title: "How SIEM as a Service Helps Companies",
          items: [
            {
              label: "Proactive Threat Detection",
              text: "Continuously monitors and analyzes network data to detect security threats early, preventing significant harm before incidents escalate.",
            },
            {
              label: "Compliance and Reporting",
              text: "Automates data collection and reporting, ensuring easy compliance with regulatory standards and providing detailed audit trails for PCI-DSS, HIPAA, and GDPR.",
            },
            {
              label: "Centralized Log Management",
              text: "Consolidates logs from various sources — servers, endpoints, firewalls, and applications — into a single system, providing a unified security view.",
            },
            {
              label: "Reduced Operational Costs",
              text: "More cost-effective than in-house SIEM solutions — eliminates the need for specialized personnel and reduces maintenance costs while delivering enterprise-grade protection.",
            },
            {
              label: "Scalability",
              text: "Easily scales with business needs, handling increased data loads and adapting to evolving threats without additional infrastructure investment.",
            },
          ],
        },
        {
          title: "How SIEM as a Service is Used",
          items: [
            {
              label: "Real-Time Monitoring",
              text: "Continuous monitoring of network traffic, user activities, and system events to detect suspicious activities as they occur.",
            },
            {
              label: "Incident Response",
              text: "Automated alerts and predefined response protocols help in quickly mitigating identified threats and minimizing their impact.",
            },
            {
              label: "Behavioral Analysis",
              text: "Advanced analytics identify normal behavior patterns within your network and detect deviations that may indicate security incidents or insider threats.",
            },
            {
              label: "Threat Intelligence Integration",
              text: "Incorporates global threat intelligence feeds to enhance detection of emerging threats and keep your defenses informed by the latest attack data.",
            },
            {
              label: "Customizable Dashboards and Reports",
              text: "Tailored views and reports to provide insights into the security posture of your organization, helping in strategic decision-making.",
            },
          ],
        },
        {
          title: "Benefits of SIEM as a Service",
          items: [
            {
              label: "Improved Security Posture",
              text: "By leveraging advanced analytics and real-time monitoring, your organization can strengthen its defenses against cyber threats.",
            },
            {
              label: "Resource Optimization",
              text: "Allows your internal IT team to focus on strategic initiatives rather than the day-to-day management of security events.",
            },
            {
              label: "Expertise and Support",
              text: "Access to a team of security experts who provide guidance and support, ensuring your SIEM solution is optimized and effective.",
            },
            {
              label: "Cost Efficiency",
              text: "Reduces the financial burden of implementing and maintaining an on-premises SIEM solution.",
            },
            {
              label: "Enhanced Compliance",
              text: "Facilitates compliance with industry standards and regulations through automated reporting and audit trails.",
            },
          ],
        },
        {
          title: "What We Offer",
          items: [
            {
              label: "24/7 Monitoring and Support",
              text: "Around-the-clock monitoring of your IT environment with expert support to address any security incidents.",
            },
            {
              label: "Advanced Threat Detection",
              text: "Utilizing the latest threat intelligence and behavioral analytics to detect and respond to threats in real-time.",
            },
            {
              label: "Customizable Solutions",
              text: "Tailored SIEM solutions that align with your specific business needs and compliance requirements.",
            },
            {
              label: "Scalable Infrastructure",
              text: "Cloud-based SIEM service ensuring security solutions grow with business expansion.",
            },
            {
              label: "Proactive Security Posture Management",
              text: "Regular assessments and optimizations to keep your security measures up-to-date and effective.",
            },
            {
              label: "Training and Awareness Programs",
              text: "Staff training to better understand and utilize SIEM tools and respond to security incidents effectively.",
            },
          ],
        },
      ]}
    />
  );
}
