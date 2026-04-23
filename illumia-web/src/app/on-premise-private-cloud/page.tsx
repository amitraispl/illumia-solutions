import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "On-Premise Private Cloud Solutions",
  description:
    "Built on Hyperconverged Infrastructure (HCI), integrating compute, storage, and networking into a single cohesive system.",
};

export default function OnPremiseCloudPage() {
  return (
    <ServicePageTemplate
      badge="Infrastructure Solutions"
      title="On-Premise Private"
      titleHighlight="Cloud Solutions"
      description="Built on Hyperconverged Infrastructure (HCI), which integrates compute, storage, and networking into a single cohesive system. Achieve the flexibility of public cloud while maintaining full data sovereignty and control."
      ctaText="Design Your Private Cloud"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&auto=format&fit=crop"
      features={[
        {
          title: "Hyperconverged Infrastructure",
          desc: "Integrate compute, storage, and networking into a unified system. Eliminate traditional 3-tier infrastructure complexity and dramatically simplify management.",
        },
        {
          title: "Full Data Sovereignty",
          desc: "Your data never leaves your premises. Meet the strictest regulatory requirements for data residency while enjoying cloud-like agility.",
        },
        {
          title: "Software-Defined Everything",
          desc: "Software-defined compute, storage, and networking provide flexibility to adapt your infrastructure to changing business needs without hardware changes.",
        },
        {
          title: "Automated Scaling",
          desc: "Scale linearly by adding nodes to your HCI cluster. Compute and storage scale independently to match your exact workload requirements.",
        },
        {
          title: "High Availability & DR",
          desc: "Built-in redundancy with automatic failover. Configure replication to a secondary site for disaster recovery and business continuity.",
        },
        {
          title: "Private Cloud Management",
          desc: "Intuitive management platform providing a unified view of all resources. Self-service provisioning for development teams with governance controls.",
        },
      ]}
    />
  );
}
