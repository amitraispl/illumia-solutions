import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Virtual Private Server",
  description:
    "VPS offerings meticulously designed to meet the diverse needs of modern businesses, combining scalability and performance.",
};

export default function VPSPage() {
  return (
    <ServicePageTemplate
      badge="Cloud Infrastructure"
      title="Virtual Private Server —"
      titleHighlight="Performance Meets Control"
      description="VPS offerings meticulously designed to meet the diverse needs of modern businesses, combining scalability, performance, and enterprise-grade isolation. Hosted in our own state-of-the-art data center for maximum reliability and cost-efficiency."
      ctaText="Configure Your VPS"
      heroImage="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Dedicated Resources",
          desc: "Guaranteed CPU, RAM, and storage allocated exclusively to your VPS. No noisy neighbors — consistent performance you can count on.",
        },
        {
          title: "Full Root Access",
          desc: "Complete control over your server environment. Install any software, configure custom kernels, and manage your stack exactly as needed.",
        },
        {
          title: "SSD NVMe Storage",
          desc: "High-performance NVMe SSD storage for lightning-fast read/write speeds. Ideal for databases, web applications, and compute-intensive workloads.",
        },
        {
          title: "Managed Backups",
          desc: "Automated daily backups with point-in-time recovery. Your data is protected with multiple redundant copies stored in geographically separated locations.",
        },
        {
          title: "DDoS Protection",
          desc: "Built-in network-level DDoS mitigation to keep your services online during attack scenarios. Protect your business continuity without extra costs.",
        },
        {
          title: "Flexible OS Choice",
          desc: "Deploy on your preferred Linux distribution — Ubuntu, Debian, CentOS, Rocky Linux, and more. Windows Server available on request.",
        },
      ]}
    />
  );
}
