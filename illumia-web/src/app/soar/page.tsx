import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SOAR — Security Orchestration Automation and Response",
  description:
    "Explore Illumia Solutions' SOAR solutions with Shuffle, offering advanced security orchestration, automation, and response capabilities.",
};

export default function SOARPage() {
  return (
    <ServicePageTemplate
      badge="Advanced Security Operations"
      title="SOAR — Security"
      titleHighlight="Automation & Response"
      description="Advanced Security Orchestration, Automation and Response powered by Shuffle SOAR. Streamline your security operations with automated playbooks, intelligent incident response, and threat intelligence integration for efficient, scalable cybersecurity management."
      darkHero
      ctaText="Automate Your Security Operations"
      heroImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Shuffle SOAR Platform",
          desc: "Open-source SOAR platform with a no-code workflow builder. Create powerful automation playbooks without extensive programming knowledge.",
        },
        {
          title: "Automated Playbooks",
          desc: "Define automated response procedures for common security incidents. Reduce mean time to response (MTTR) from hours to seconds.",
        },
        {
          title: "Multi-Tool Integration",
          desc: "Integrate with your existing security tools — SIEMs, firewalls, EDR, threat intelligence feeds, and ticketing systems in a unified workflow.",
        },
        {
          title: "Incident Management",
          desc: "Centralized incident tracking with automated case creation, enrichment, and collaboration tools for your security operations team.",
        },
        {
          title: "Threat Intelligence",
          desc: "Automatically enrich alerts with threat intelligence from multiple feeds. Correlate IOCs and TTPs to accelerate threat hunting and response.",
        },
        {
          title: "Metrics & Reporting",
          desc: "Track SOC performance metrics, playbook execution statistics, and incident trends. Demonstrate security ROI with data-driven reporting.",
        },
      ]}
    />
  );
}
