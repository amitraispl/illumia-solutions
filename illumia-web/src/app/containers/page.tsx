import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Container Solutions",
  description:
    "Container technologies including LXC, LXD, and Docker, complemented by comprehensive Kubernetes orchestration solutions.",
};

export default function ContainersPage() {
  return (
    <ServicePageTemplate
      badge="Infrastructure Solutions"
      title="Container Solutions —"
      titleHighlight="Modern Workload Management"
      description="Container technologies including LXC, LXD, and Docker, complemented by comprehensive orchestration solutions like Kubernetes. Deploy, scale, and manage containerized workloads with enterprise-grade reliability."
      ctaText="Containerize Your Workloads"
      heroImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Docker & OCI Containers",
          desc: "Standard container runtime solutions for packaging and deploying applications. Consistent environments from development to production.",
        },
        {
          title: "LXC/LXD System Containers",
          desc: "Lightweight system containers providing near-bare-metal performance. Ideal for running full OS environments with minimal overhead.",
        },
        {
          title: "Kubernetes Orchestration",
          desc: "Managed Kubernetes clusters for automated deployment, scaling, and management of containerized applications. Full lifecycle management.",
        },
        {
          title: "Service Mesh",
          desc: "Implement service mesh solutions for inter-service communication, traffic management, and zero-trust network policies between microservices.",
        },
        {
          title: "CI/CD Integration",
          desc: "Integrate container deployments with your CI/CD pipeline for automated testing, building, and deployment of containerized applications.",
        },
        {
          title: "Container Security",
          desc: "Image scanning, runtime security, and network policy enforcement to ensure your containers are hardened against known vulnerabilities.",
        },
      ]}
    />
  );
}
