import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Object Storage",
  description:
    "Advanced Object Storage services designed for high performance, scalability, and seamless integration. Fully compatible with Amazon S3.",
};

export default function ObjectStoragePage() {
  return (
    <ServicePageTemplate
      badge="Cloud Storage Solutions"
      title="Object Storage —"
      titleHighlight="Infinitely Scalable"
      description="Advanced Object Storage services designed to offer high performance, scalability, and seamless integration with existing systems. Fully compatible with Amazon S3 API for easy migration and broad ecosystem compatibility."
      ctaText="Start Storing at Scale"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "S3-Compatible API",
          desc: "Fully compatible with the Amazon S3 API. Migrate existing workloads without code changes and use the vast ecosystem of S3-compatible tools.",
        },
        {
          title: "Infinite Scalability",
          desc: "Store petabytes of data without worrying about capacity planning. Object storage scales horizontally to meet any storage demand.",
        },
        {
          title: "High Availability",
          desc: "Built on a distributed architecture with multiple replicas ensuring 99.999% data durability and high availability for your stored objects.",
        },
        {
          title: "Geo-Redundancy",
          desc: "Optionally replicate data across geographically separate locations for disaster recovery and regulatory compliance requirements.",
        },
        {
          title: "Lifecycle Policies",
          desc: "Automate data management with lifecycle policies. Automatically transition objects to lower-cost tiers or delete expired data.",
        },
        {
          title: "Security & Access Control",
          desc: "Fine-grained access control with bucket policies, ACLs, and encryption at rest. Secure your data with enterprise-grade access management.",
        },
      ]}
    />
  );
}
