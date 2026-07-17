import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Specialized Services | Illumia Solutions",
  description:
    "Our specialised cybersecurity services are tailored to address specific industry and business needs — including security gap analysis, custom security frameworks, secure payment implementation, continuous monitoring, and vulnerability management.",
  alternates: { canonical: "/specialized-services/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/specialized-services/#service",
  name: "Specialized Services",
  serviceType: "Specialized Services",
  description:
    "Our specialised cybersecurity services are tailored to address specific industry and business needs — including security gap analysis, custom security frameworks, secure payment implementation, continuous monitoring, and vulnerability management.",
  url: "https://illumiasolutions.com/specialized-services/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function SpecializedServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Specialized Services"
      title="Specialized"
      titleHighlight="Services."
      description="Our specialised cybersecurity services are tailored to address specific industry and business needs, including security gap analysis, custom security frameworks, secure payment implementation, continuous monitoring, and vulnerability management."
      sectionTitle="Challenges we address — and how we solve them."
      features={[
        {
          title: "Challenges We Address",
          items: [
            {
              label: "Security Gaps",
              text: "Identifying and remediating security gaps is crucial to prevent potential breaches and ensure robust protection across your environment.",
            },
            {
              label: "Ongoing Security",
              text: "Continuously monitoring and updating security measures to stay ahead of evolving threats is essential for sustained protection.",
            },
            {
              label: "Operational Efficiency",
              text: "Implementing security measures without disrupting operations requires a balanced and carefully considered approach.",
            },
          ],
        },
        {
          title: "Our Approach",
          items: [
            {
              label: "Gap Analysis",
              text: "Identify and address security gaps in your environment through comprehensive assessments and remediation plans.",
            },
            {
              label: "Continuous Monitoring",
              text: "Ensure ongoing security and compliance with continuous monitoring and regular assessments tailored to your environment.",
            },
            {
              label: "Balanced Security",
              text: "Provide solutions that enhance security without affecting operations — purpose-built for your industry and business model.",
            },
          ],
        },
      ]}
      closingText="Every business has unique security requirements. Illumia's specialised services are custom-scoped to fill the gaps your standard programmes leave behind — delivering targeted protection without operational disruption."
      ctaText="Request a Security Consultation"
      heroImage="/images/specialized-services/hero.jpg"
      />
    </>
  );
}
