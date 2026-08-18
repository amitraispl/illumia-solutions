import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "SOAR — Security Orchestration Automation and Response",
  description:
    "Advanced SOAR solutions with Shuffle — offering security orchestration, automated workflows, and rapid incident response for efficient cybersecurity management.",
  alternates: {
    canonical: "/soar/",
    languages: { "en": "https://illumiasolutions.com/soar/", "x-default": "https://illumiasolutions.com/soar/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/soar/#service",
  name: "SOAR — Security Orchestration Automation and Response",
  serviceType: "Security Operations",
  description:
    "Advanced SOAR solutions with Shuffle — offering security orchestration, automated workflows, and rapid incident response for efficient cybersecurity management.",
  url: "https://illumiasolutions.com/soar/",
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
      "name": "SOAR — Security Orchestration Automation and Response",
      "item": "https://illumiasolutions.com/soar/"
    }
  ]
};

export default function SOARPage() {
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
      badge="Security Operations"
      title="SOAR —"
      titleHighlight="Security Automation & Response."
      description="In today's rapidly evolving cybersecurity landscape, organizations need advanced tools to effectively manage and respond to security incidents. Illumia Solutions provides top-tier Security Orchestration, Automation, and Response (SOAR) solutions using Shuffle."
      sectionTitle="Benefits of Our SOAR Solution"
      ctaText="Automate Your Security Operations"
      heroImage="/images/soar/hero.png"
      darkHero={true}
      closingText="Illumia Solutions' SOAR solutions with Shuffle provide a comprehensive, scalable, and cost-effective way to enhance your organization's cybersecurity capabilities. With advanced security orchestration, automation, and response features, our solutions ensure that your security operations are efficient, effective, and aligned with your organizational goals. Partner with Illumia Solutions to leverage the full potential of SOAR and protect your business against cyber threats with confidence."
      features={[
        {
          title: "Security Orchestration",
          items: [
            {
              label: "Unified Management",
              text: "Coordinate and streamline security operations across multiple tools and platforms, creating a unified and efficient security infrastructure.",
            },
            {
              label: "Enhanced Efficiency",
              text: "Reduce the complexity of security processes by orchestrating tasks and workflows, allowing your team to focus on strategic initiatives.",
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
              label: "Speed and Accuracy",
              text: "Accelerate response times and enhance the accuracy of security operations through automation.",
            },
          ],
        },
        {
          title: "Incident Response",
          items: [
            {
              label: "Swift Resolution",
              text: "Ensure rapid identification and resolution of security incidents, minimizing the potential impact on your organization.",
            },
            {
              label: "Standardized Processes",
              text: "Implement standardized incident response procedures to ensure consistent and effective handling of security events.",
            },
          ],
        },
        {
          title: "Scalability",
          items: [
            {
              label: "Adaptable Solutions",
              text: "Easily scale your SOAR solution to accommodate the growing needs of your organization, from small businesses to large enterprises.",
            },
            {
              label: "Flexible Infrastructure",
              text: "Support a large number of security tools and data sources without compromising performance.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Integrate Shuffle with your existing security tools and IT infrastructure to create a cohesive security ecosystem.",
            },
            {
              label: "APIs and Plugins",
              text: "Utilize APIs and plugins to extend the functionality of your SOAR solution, ensuring comprehensive coverage.",
            },
          ],
        },
        {
          title: "Customizable Workflows",
          items: [
            {
              label: "Tailored Processes",
              text: "Customize workflows to match your specific security operations and requirements, ensuring optimal performance and alignment with your organizational needs.",
            },
            {
              label: "Flexible Configuration",
              text: "Adapt workflows to handle various types of security incidents and operational scenarios.",
            },
          ],
        },
        {
          title: "Real-Time Monitoring and Alerts",
          items: [
            {
              label: "Continuous Surveillance",
              text: "Monitor your security environment in real-time to detect and respond to threats as they occur.",
            },
            {
              label: "Instant Notifications",
              text: "Receive real-time alerts and notifications for critical security events, ensuring timely response and mitigation.",
            },
          ],
        },
        {
          title: "Improved Collaboration",
          items: [
            {
              label: "Team Coordination",
              text: "Enhance collaboration among security team members through integrated communication and coordination tools.",
            },
            {
              label: "Shared Insights",
              text: "Facilitate the sharing of threat intelligence and incident details to improve collective understanding and response strategies.",
            },
          ],
        },
        {
          title: "Detailed Reporting and Analytics",
          items: [
            {
              label: "Comprehensive Reports",
              text: "Generate detailed reports on security incidents, response actions, and overall security posture.",
            },
            {
              label: "Data-Driven Insights",
              text: "Use analytics to gain insights into security trends and performance, informing strategic decision-making.",
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
              text: "Use threat intelligence to make informed decisions and prioritize response actions based on current threat landscape.",
            },
          ],
        },
        {
          title: "Cost-Effective",
          items: [
            {
              label: "Reduced Costs",
              text: "Lower your total cost of ownership with a solution that automates and streamlines security operations, reducing the need for extensive manual intervention.",
            },
            {
              label: "Affordable Pricing",
              text: "Benefit from competitive pricing plans that suit the budget of any organization, from small businesses to large enterprises.",
            },
          ],
        },
        {
          title: "User-Friendly Interface",
          items: [
            {
              label: "Intuitive Design",
              text: "Enjoy a user-friendly interface that simplifies the management and configuration of your SOAR solution.",
            },
            {
              label: "Easy Navigation",
              text: "Ensure quick and easy navigation, reducing the learning curve and increasing user adoption.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
