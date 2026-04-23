import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "EDR Solution — Endpoint Detection & Response",
  description:
    "Advanced Endpoint Detection and Response solution providing real-time visibility, threat detection, and automated response capabilities.",
};

export default function EDRPage() {
  return (
    <ServicePageTemplate
      badge="Advanced Endpoint Security"
      title="EDR — Endpoint Detection"
      titleHighlight="& Response"
      description="Advanced Endpoint Detection and Response solution providing real-time visibility into endpoint activity. Rapidly detect, investigate, and respond to sophisticated threats across your entire endpoint fleet — from servers to workstations."
      darkHero
      ctaText="Protect Your Endpoints"
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Real-Time Threat Detection",
          desc: "Continuous endpoint monitoring with behavioral analytics and signature-based detection. Identify threats the moment they appear, not hours later.",
        },
        {
          title: "Automated Response",
          desc: "Automatically isolate compromised endpoints, kill malicious processes, and block malicious network connections — all without human intervention.",
        },
        {
          title: "Behavioral Analysis",
          desc: "Machine learning-powered behavioral analytics detect anomalous activities and unknown malware that evade traditional signature-based detection.",
        },
        {
          title: "Threat Hunting",
          desc: "Proactively hunt for hidden threats across your environment using powerful query capabilities and pre-built hunting playbooks.",
        },
        {
          title: "Forensic Investigation",
          desc: "Deep forensic capabilities for incident investigation — process trees, file system changes, registry modifications, and network connections.",
        },
        {
          title: "MITRE ATT&CK Mapping",
          desc: "Automatically map detected behaviors to the MITRE ATT&CK framework for context-aware threat understanding and response prioritization.",
        },
      ]}
    />
  );
}
