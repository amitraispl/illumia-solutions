import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Software-Defined Network — SDN & SD-WAN",
  description:
    "Modern SDN and SD-WAN solutions featuring easy setup, high performance, end-to-end encryption, and a decentralized architecture.",
  alternates: { canonical: "/software-defined-network/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/software-defined-network/#service",
  name: "Software-Defined Network",
  serviceType: "Network Infrastructure",
  description:
    "Modern SDN and SD-WAN solutions featuring easy setup, high performance, end-to-end encryption, and a decentralized architecture.",
  url: "https://illumiasolutions.com/software-defined-network/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://illumiasolutions.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cloud",
      "item": "https://illumiasolutions.com/cloud-services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Software-Defined Network — SDN & SD-WAN",
      "item": "https://illumiasolutions.com/software-defined-network/"
    }
  ]
};

export default function SoftwareDefinedNetworkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RichServicePageTemplate
      badge="Network Infrastructure"
      title="Software-Defined"
      titleHighlight="Networking."
      description="In a world where connectivity and performance are critical, Illumia Solutions offers cutting-edge SDN solutions that redefine network architecture — eliminating the need for traditional central controllers and enhancing network resilience, performance, and simplicity."
      sectionTitle="Key Features and Benefits"
      ctaText="Modernise Your Network"
      heroImage="/images/software-defined-network/hero.png"
      closingText="At Illumia Solutions, we are dedicated to empowering businesses to achieve their goals through innovative and cost-effective solutions."
      features={[
        {
          title: "Easy Setup and Management",
          items: [
            {
              label: "Simplified Installation",
              text: "Quick and straightforward setup processes ensure that you can deploy your network without the need for extensive technical expertise.",
            },
            {
              label: "User-Friendly Management Tools",
              text: "Intuitive management interfaces allow for easy monitoring and configuration of network settings across your entire infrastructure.",
            },
          ],
        },
        {
          title: "Cross-Platform Compatibility",
          items: [
            {
              label: "Broad Device Support",
              text: "Compatible with a wide range of devices and operating systems, including Windows, macOS, Linux, and mobile platforms.",
            },
            {
              label: "Interoperability",
              text: "Easily integrates with various hardware and software components across your existing network infrastructure.",
            },
          ],
        },
        {
          title: "High Performance and Low Latency",
          items: [
            {
              label: "Efficient Data Routing",
              text: "Advanced algorithms to optimize data paths, minimizing latency and ensuring high-speed data transfer across all network nodes.",
            },
            {
              label: "Scalability",
              text: "Architecture supports a large number of nodes, ensuring consistent performance even as the network grows.",
            },
          ],
        },
        {
          title: "Secure and Encrypted Connections",
          items: [
            {
              label: "End-to-End Encryption",
              text: "Ensures that data transmitted across the network is secure and protected from unauthorized access.",
            },
            {
              label: "Robust Security Protocols",
              text: "Industry-leading security protocols safeguard your network against threats and unauthorized interception.",
            },
          ],
        },
        {
          title: "Scalability and Flexibility",
          items: [
            {
              label: "Elastic Scalability",
              text: "Easily add or remove nodes without disrupting the network, scaling seamlessly with your organizational needs.",
            },
            {
              label: "Flexible Deployment",
              text: "Suitable for various environments, from small office networks to large-scale enterprise deployments.",
            },
          ],
        },
        {
          title: "Decentralized Network Architecture",
          items: [
            {
              label: "Increased Resilience",
              text: "Eliminates single points of failure, enhancing network reliability and uptime by having each node operate independently.",
            },
            {
              label: "Autonomous Operation",
              text: "Each node operates independently, ensuring continuous operation even if some nodes experience issues.",
            },
          ],
        },
        {
          title: "Global Network Reach",
          items: [
            {
              label: "Wide Coverage",
              text: "Enable global connectivity providing reliable and fast communication across long distances.",
            },
            {
              label: "Remote Access",
              text: "Connect dispersed teams and remote offices with secure, high-performance network connectivity.",
            },
          ],
        },
        {
          title: "Integration with Existing Infrastructure",
          items: [
            {
              label: "Compatibility",
              text: "Works alongside your existing network infrastructure to extend capabilities without requiring complete replacement.",
            },
            {
              label: "Smooth Transition",
              text: "Gradual migration capability ensures business continuity throughout the transition to SDN architecture.",
            },
          ],
        },
        {
          title: "Cost-Effective Solution",
          items: [
            {
              label: "Reduced Infrastructure Costs",
              text: "Minimize the need for expensive central controllers and proprietary hardware, reducing overall network infrastructure costs.",
            },
            {
              label: "Lower Operational Expenses",
              text: "Simplified management and reduced downtime lead to lower operational costs and improved ROI.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
