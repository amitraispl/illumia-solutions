import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Infrastructure Security | Illumia Solutions",
  description:
    "Infrastructure security is the backbone of a secure IT environment. Illumia Solutions offers comprehensive services to secure your network and endpoints, providing real-time threat detection and response.",
};

export default function InfrastructureSecurityPage() {
  return (
    <RichServicePageTemplate
      badge="Infrastructure Security"
      title="Infrastructure"
      titleHighlight="Security."
      description="Infrastructure security is the backbone of a secure IT environment. Illumia Solutions offers comprehensive services to secure your network and endpoints, providing real-time threat detection and response, and ensuring only authorised access to sensitive information."
      sectionTitle="Challenges we address — and how we solve them."
      features={[
        {
          title: "Challenges We Address",
          items: [
            {
              label: "Real-Time Threat Detection",
              text: "Identifying and responding to threats in real-time is essential to minimise damage and prevent data breaches.",
            },
            {
              label: "Access Management",
              text: "Ensuring only authorised users can access critical data is crucial to prevent unauthorised access and data leaks.",
            },
            {
              label: "Vulnerability Mitigation",
              text: "Identifying and addressing infrastructure weaknesses is an ongoing process that requires continuous monitoring and proactive measures.",
            },
          ],
        },
        {
          title: "Our Approach",
          items: [
            {
              label: "SIEM and SOAR",
              text: "Implement solutions for real-time monitoring and automated response to security incidents, ensuring swift detection and mitigation of threats.",
            },
            {
              label: "IAM Solutions",
              text: "Manage and secure user access to sensitive data with advanced identity and access management solutions, ensuring only authorised users can access critical information.",
            },
            {
              label: "Comprehensive Assessments",
              text: "Conduct detailed assessments and penetration testing to identify and mitigate vulnerabilities in your IT infrastructure, enhancing overall security.",
            },
          ],
        },
      ]}
      closingText="A secure infrastructure is the foundation of every resilient business. Illumia's infrastructure security services give you real-time visibility, automated response, and hardened access controls — so threats are stopped before they cause damage."
      ctaText="Request an Infrastructure Security Assessment"
      heroImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=85&auto=format&fit=crop"
    />
  );
}
