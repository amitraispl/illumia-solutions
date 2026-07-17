import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Physical Server — Dedicated Bare-Metal | Illumia Solutions",
  description:
    "Dedicated bare-metal servers for workloads requiring maximum compute power, complete resource isolation, and hardware-level control.",
  alternates: { canonical: "/physical-server/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/physical-server/#service",
  name: "Physical Server",
  serviceType: "Dedicated Hardware",
  description:
    "Dedicated bare-metal servers for workloads requiring maximum compute power, complete resource isolation, and hardware-level control.",
  url: "https://illumiasolutions.com/physical-server/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function PhysicalServerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Dedicated Hardware"
      title="Physical Server —"
      titleHighlight="Full Metal Control."
      description="We recognize that every business has unique hosting needs, which is why our Physical Server Hosting services are designed to offer unparalleled customization, robust security, and dedicated support. Whether you need brand-new servers, refurbished units, or specialized hosting for network appliances, we tailor every solution to your requirements."
      sectionTitle="Our Physical Server Features"
      ctaText="Configure Your Server"
      heroImage="/images/heroes/cloud-migration_hero.jpg"
      closingText="At Illumia Solutions, our commitment to excellence is reflected in every aspect of our Physical Server Hosting services. Partner with us to experience dedicated infrastructure built to your exact specifications."
      features={[
        {
          title: "Customizable Server Configurations",
          items: [
            {
              label: "Broad Hardware Selection",
              text: "We can provide any server from any brand, including high-quality refurbished options, ensuring you get the right hardware at the right cost.",
            },
            {
              label: "Network Appliance Hosting",
              text: "Host desktops and network appliances beyond traditional servers for a versatile, cost-effective solution tailored to your environment.",
            },
          ],
        },
        {
          title: "Enhanced Accessibility and Control",
          items: [
            {
              label: "Remote Console Access",
              text: "Gain direct control over your servers via KVM or IPMI remote console, allowing you to manage your systems from anywhere in the world.",
            },
            {
              label: "Horizontal Isolation",
              text: "Complete isolation of your server from the rest of the cloud, ensuring enhanced security and performance without interference from other users.",
            },
          ],
        },
        {
          title: "Dedicated Support and Flexibility",
          items: [
            {
              label: "Remote Hands Support",
              text: "Our on-site technical support team is always ready to assist with hardware issues, providing peace of mind and minimizing downtime.",
            },
            {
              label: "Bring Your Own Rack",
              text: "Customers can bring their own rack of servers and avail isolated hosting, allowing for a highly personalized and secure setup within our data center.",
            },
          ],
        },
        {
          title: "Cost Efficiency and Transparency",
          items: [
            {
              label: "No Data Transfer Charges",
              text: "We offer unlimited data transfer in and out of our servers without any additional charges.",
            },
            {
              label: "Straightforward Monthly Billing",
              text: "Our billing process is transparent and straightforward, with no hidden fees or surprise costs.",
            },
            {
              label: "No Vendor Lock-in",
              text: "We earn our clients' business every day through quality, performance, and service — not contractual restrictions.",
            },
          ],
        },
        {
          title: "Unmatched Reliability",
          items: [
            {
              label: "99.9% Uptime Guarantee",
              text: "Our data centers are engineered for high availability and redundancy, ensuring consistent and reliable performance for your workloads.",
            },
          ],
        },
        {
          title: "Enhanced Security Options",
          items: [
            {
              label: "Cybersecurity Add-Ons",
              text: "Elevate your security posture with additional layers including EDR, DLP, SIEM, and PAM — helping you comply with regulatory standards and protect sensitive data.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
