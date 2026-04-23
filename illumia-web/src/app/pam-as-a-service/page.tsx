import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "PAM as a Service",
  description:
    "Comprehensive Privileged Access Management as a Service tailored to meet the unique needs of your business.",
};

export default function PAMPage() {
  return (
    <ServicePageTemplate
      badge="Security Solutions"
      title="Privileged Access Management"
      titleHighlight="as a Service"
      description="Comprehensive PAM as a Service solution tailored to the unique needs of your business. Control, monitor, and audit all privileged access across your infrastructure — eliminating the #1 attack vector in enterprise breaches."
      darkHero
      ctaText="Secure Your Privileged Access"
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Credential Vaulting",
          desc: "Centrally store, manage, and rotate privileged credentials. Eliminate hardcoded passwords and shared accounts across your infrastructure.",
        },
        {
          title: "Session Recording & Monitoring",
          desc: "Record and audit all privileged sessions in real-time. Full visibility into what privileged users are doing across your systems.",
        },
        {
          title: "Just-in-Time Access",
          desc: "Grant time-limited, just-in-time privileged access based on business need. Reduce standing privileges and minimize your attack surface.",
        },
        {
          title: "Multi-Factor Authentication",
          desc: "Enforce MFA for all privileged access attempts. Integrate with your existing identity providers for seamless authentication.",
        },
        {
          title: "Audit Trails & Compliance",
          desc: "Comprehensive audit logs for all privileged activities. Meet compliance requirements for PCI-DSS, HIPAA, SOX, and GDPR.",
        },
        {
          title: "Threat Analytics",
          desc: "AI-powered behavioral analytics to detect anomalous privileged user behavior and alert on potential insider threats in real-time.",
        },
      ]}
    />
  );
}
