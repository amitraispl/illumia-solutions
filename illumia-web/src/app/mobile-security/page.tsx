import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Mobile Security",
  description:
    "Specialized mobile security services including Mobile Application Assessment, BYOD Strategy, Mobile Security Framework Maturity Assessment, and Mobile Device Forensics.",
};

export default function MobileSecurityPage() {
  return (
    <ServicePageTemplate
      badge="Cyber Security Services"
      title="Mobile Security —"
      titleHighlight="Protecting the Edge"
      description="Securing the mobile ecosystem against advanced persistent threats through rigorous endpoint and application analysis. Specialized services for enterprise mobile fleets and BYOD environments."
      darkHero
      ctaText="Secure Your Mobile Fleet"
      heroImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Mobile Application Assessment",
          desc: "Comprehensive security assessment of iOS and Android applications. Static and dynamic analysis to identify vulnerabilities before they reach users.",
        },
        {
          title: "BYOD Strategy & Policy",
          desc: "Develop comprehensive Bring Your Own Device policies that balance employee productivity with corporate security requirements and data protection.",
        },
        {
          title: "Mobile Security Framework",
          desc: "Maturity assessment of your current mobile security posture against OWASP Mobile Security Testing Guide and industry best practices.",
        },
        {
          title: "Mobile Device Management",
          desc: "Implement and manage MDM solutions to enforce security policies, remote wipe capabilities, and application whitelisting across your device fleet.",
        },
        {
          title: "Mobile Device Forensics",
          desc: "Professional mobile forensics services for incident response, legal investigations, and evidence collection from iOS and Android devices.",
        },
        {
          title: "App Security Testing",
          desc: "Penetration testing of mobile applications including API security, authentication bypass, data storage analysis, and network communication security.",
        },
      ]}
    />
  );
}
