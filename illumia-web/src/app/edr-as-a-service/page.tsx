import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "EDR as a Service — Comprehensive Protection for Your Business",
  description:
    "Endpoint Detection and Response (EDR) as a Service — real-time threat detection, behavioral analysis, automated responses, and expert-managed endpoint security.",
  alternates: { canonical: "/edr-as-a-service/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/edr-as-a-service/#service",
  name: "EDR as a Service",
  serviceType: "Comprehensive Protection for Your Business",
  description:
    "Endpoint Detection and Response (EDR) as a Service — real-time threat detection, behavioral analysis, automated responses, and expert-managed endpoint security.",
  url: "https://illumiasolutions.com/edr-as-a-service/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function EDRAsAServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Comprehensive Protection for Your Business"
      title="EDR —"
      titleHighlight="as a Service."
      description="Endpoint Detection and Response (EDR) is a cybersecurity solution designed to monitor and respond to potential threats on endpoints such as laptops, desktops, and mobile devices. EDR tools are equipped with advanced capabilities to detect, investigate, and mitigate suspicious activities and attacks in real-time."
      sectionTitle="EDR as a Service Features"
      ctaText="Contact Us"
      heroImage="/images/shared/edr.png"
      darkHero={true}
      closingText="Invest in our EDR as a service to safeguard your business from cyber threats and ensure peace of mind with expert-managed security. Contact us today to learn more about how we can protect your endpoints and enhance your company's defense."
      features={[
        {
          title: "How EDR Can Enhance Company Defense",
          items: [
            {
              label: "Real-Time Threat Detection",
              text: "EDR systems continuously monitor endpoint activities to detect anomalies and potential threats instantly. This proactive approach helps in identifying and neutralizing threats before they cause significant damage.",
            },
            {
              label: "Incident Response",
              text: "With EDR, companies can quickly respond to security incidents by isolating affected endpoints, conducting detailed forensics, and remediating threats. This minimizes the impact of attacks and helps in recovering systems swiftly.",
            },
            {
              label: "Behavioral Analysis",
              text: "EDR tools use machine learning and behavioral analysis to identify unusual patterns and activities, which traditional antivirus solutions might miss. This ensures comprehensive protection against both known and unknown threats.",
            },
            {
              label: "Automated Responses",
              text: "EDR solutions often come with automated response capabilities that can take immediate action to contain and eliminate threats, reducing the need for manual intervention and allowing faster resolution.",
            },
          ],
        },
        {
          title: "Deployment Options for EDR",
          items: [
            {
              label: "Cloud-Based EDR",
              text: "Ideal for businesses seeking scalability and minimal maintenance, cloud-based EDR solutions offer seamless integration, automatic updates, and remote management.",
            },
            {
              label: "On-Premises EDR",
              text: "Suitable for companies with specific compliance requirements or those preferring to keep their security infrastructure in-house. On-premises solutions provide greater control over data and customization.",
            },
            {
              label: "Hybrid EDR",
              text: "Combines the benefits of both cloud and on-premises solutions, allowing businesses to balance flexibility, control, and scalability according to their needs.",
            },
          ],
        },
        {
          title: "Benefits for Offices Without IT Personnel",
          items: [
            {
              label: "Simplified Management",
              text: "EDR as a service is managed by cybersecurity experts, reducing the burden on companies without dedicated IT staff. This ensures robust security without requiring in-house expertise.",
            },
            {
              label: "Cost-Effective",
              text: "Outsourcing EDR services eliminates the need for hiring and training IT personnel, making it a cost-effective solution for small and medium-sized businesses.",
            },
            {
              label: "24/7 Monitoring",
              text: "EDR service providers offer round-the-clock monitoring and support, ensuring continuous protection against threats, even outside of regular business hours.",
            },
            {
              label: "Scalability",
              text: "EDR services can easily scale with the growth of your business, providing consistent security as your needs evolve.",
            },
          ],
        },
        {
          title: "What We Offer",
          items: [
            {
              label: "Comprehensive EDR Solutions",
              text: "Our EDR services include advanced threat detection, real-time monitoring, and automated response capabilities to keep your endpoints secure.",
            },
            {
              label: "Tailored Deployment Options",
              text: "We provide flexible deployment options to suit your business needs, whether you prefer cloud-based, on-premises, or hybrid solutions.",
            },
            {
              label: "Expert Management and Support",
              text: "Our team of cybersecurity professionals manages and monitors your EDR solution, ensuring optimal performance and swift incident response.",
            },
            {
              label: "Cost-Effective Security",
              text: "Our EDR services are designed to offer maximum protection at a competitive price, making it an ideal choice for businesses of all sizes, including those without dedicated IT staff.",
            },
            {
              label: "Continuous Updates and Improvements",
              text: "We ensure your EDR solution is always up-to-date with the latest security features and threat intelligence to protect against evolving cyber threats.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
