import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "NMS as a Service",
  description:
    "Network Management System as a Service — comprehensive tools and services to monitor, manage, and optimize your network infrastructure.",
};

export default function NMSPage() {
  return (
    <ServicePageTemplate
      badge="Infrastructure Solutions"
      title="NMS as a Service —"
      titleHighlight="Total Network Visibility"
      description="Network Management System as a Service is a comprehensive solution providing businesses with the tools and services to monitor, manage, and optimize their network infrastructure. Real-time visibility across your entire network fabric."
      ctaText="Monitor Your Network"
      heroImage="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Real-Time Monitoring",
          desc: "Continuous monitoring of all network devices — routers, switches, firewalls, and endpoints — with real-time status dashboards and alerts.",
        },
        {
          title: "Topology Discovery",
          desc: "Automatic discovery and mapping of your network topology. Always have an accurate, up-to-date view of your infrastructure.",
        },
        {
          title: "Performance Analytics",
          desc: "Detailed bandwidth utilization, latency, packet loss, and QoS metrics. Identify bottlenecks before they impact business operations.",
        },
        {
          title: "Alerting & Escalation",
          desc: "Customizable alerting with multi-channel notifications via email, SMS, and integrations. Define escalation policies for critical issues.",
        },
        {
          title: "Configuration Management",
          desc: "Centralized network device configuration management with version control, compliance checking, and automated configuration backup.",
        },
        {
          title: "Compliance & Reporting",
          desc: "Automated reporting for SLA compliance, availability metrics, and capacity planning. Export reports for management and audit purposes.",
        },
      ]}
    />
  );
}
