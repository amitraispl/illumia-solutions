import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Container Solutions — LXC, LXD, Docker & Kubernetes | Illumia Solutions",
  description:
    "Container hosting with LXC, LXD, Docker, and Kubernetes orchestration — horizontal isolation, managed support, and flexible deployment for modern workloads.",
  alternates: { canonical: "/containers/" },
};

export default function ContainersPage() {
  return (
    <RichServicePageTemplate
      badge="Infrastructure Solutions"
      title="Container Solutions —"
      titleHighlight="Modern Workload Management."
      description="Our Containers Hosting services are meticulously designed to meet the evolving needs of businesses seeking efficiency, scalability, and robust security in their application deployment strategies."
      sectionTitle="Our Container Hosting Features"
      ctaText="Containerize Your Workloads"
      heroImage="/contain.png"
      closingText="At Illumia Solutions, we are committed to providing advanced, secure, and scalable Containers Hosting solutions that support the dynamic needs of modern enterprises."
      features={[
        {
          title: "Versatile Container Solutions",
          items: [
            {
              label: "Diverse Technologies",
              text: "Choose from LXC, LXD, or Docker containers to match your specific application requirements, ensuring optimal compatibility and performance.",
            },
            {
              label: "Kubernetes Orchestration",
              text: "We provide Kubernetes as an orchestration platform to manage your containers effectively, simplifying deployments, scaling, and lifecycle management of containerized applications.",
            },
          ],
        },
        {
          title: "Enhanced Control and Isolation",
          items: [
            {
              label: "Horizontal Isolation",
              text: "Complete horizontal isolation of your containers from the rest of the cloud, ensuring dedicated resources and enhanced security for your applications.",
            },
            {
              label: "Container-Specific Server Hosting",
              text: "Deploy container environments on dedicated servers or bring your own setup for tailored, isolated hosting that meets specific performance needs.",
            },
          ],
        },
        {
          title: "Comprehensive Support Services",
          items: [
            {
              label: "Setup, Maintenance & Monitoring",
              text: "As an add-on service, we offer comprehensive setup, ongoing maintenance, and proactive monitoring to ensure your container environments are always optimized and running smoothly.",
            },
          ],
        },
        {
          title: "Connectivity and Security",
          items: [
            {
              label: "VPN Connectivity",
              text: "Secure VPN connectivity back to your customer environment, facilitating safe and seamless integration between your on-premise systems and our hosted containers.",
            },
            {
              label: "Cybersecurity Add-ons",
              text: "Security options including firewalls, intrusion detection, and compliance monitoring available as add-ons to strengthen your container environment.",
            },
          ],
        },
        {
          title: "Cost Efficiency and Transparency",
          items: [
            {
              label: "No Data Transfer Charges",
              text: "Enjoy unlimited data transfer in and out of our services without any additional charges.",
            },
            {
              label: "Straightforward Monthly Billing",
              text: "Simple, transparent billing with no hidden costs or surprise charges.",
            },
            {
              label: "No Vendor Lock-in",
              text: "Free to modify, scale, or discontinue your services at any time without contractual restrictions.",
            },
          ],
        },
        {
          title: "Unmatched Reliability",
          items: [
            {
              label: "99.9% Uptime Guarantee",
              text: "Our data centers are engineered for high availability and redundancy, ensuring consistent performance for your container workloads.",
            },
          ],
        },
      ]}
    />
  );
}
