import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Meeting Solution",
  description:
    "Top-tier web-meeting solutions using Carbonio, Jitsi Meet, and Nextcloud Talk — secure, private, self-hosted video conferencing.",
};

export default function WebMeetingSolutionPage() {
  return (
    <ServicePageTemplate
      badge="Application Solutions"
      title="Web Meeting Solutions —"
      titleHighlight="Secure & Private"
      description="Top-tier web-meeting solutions using Carbonio, Jitsi Meet, and Nextcloud Talk. Enterprise-grade video conferencing that keeps your communications private, compliant, and fully under your control."
      ctaText="Deploy Your Meeting Solution"
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Jitsi Meet",
          desc: "Open-source, end-to-end encrypted video conferencing. Self-hosted for maximum privacy and compliance. No external data sharing, fully customizable branding and access controls.",
        },
        {
          title: "Nextcloud Talk",
          desc: "Integrated into the Nextcloud ecosystem — combine video calls, chat, and file sharing in one unified, self-hosted collaboration platform. Perfect for distributed teams.",
        },
        {
          title: "Carbonio Integration",
          desc: "Enterprise communications suite with built-in video meetings, email, calendar, and contacts. A complete Zimbra/Exchange alternative powered by open-source technology.",
        },
        {
          title: "End-to-End Encryption",
          desc: "All meeting data is encrypted in transit and at rest. Your meetings stay within your infrastructure — never routed through third-party servers.",
        },
        {
          title: "Custom Branding",
          desc: "White-label the meeting experience with your corporate identity. Custom domains, logos, and interface themes to maintain brand consistency.",
        },
        {
          title: "Admin & Compliance Controls",
          desc: "Granular access controls, meeting recording, audit logs, and user management. Meet compliance requirements for regulated industries.",
        },
      ]}
    />
  );
}
