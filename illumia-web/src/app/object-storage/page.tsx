import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Storage Solutions | Illumia Solutions",
  description:
    "Illumia Solutions provides cutting-edge storage solutions — high-performance block storage, scalable object storage, and cost-efficient cold storage — each designed to meet specific data storage requirements.",
};

export default function ObjectStoragePage() {
  return (
    <RichServicePageTemplate
      badge="Storage Solutions"
      title="Storage"
      titleHighlight="Solutions."
      description="In today's data-centric world, businesses need robust and scalable storage solutions to manage their ever-growing volumes of data efficiently. Illumia Solutions provides cutting-edge storage solutions that cater to diverse business needs, ensuring high performance, scalability, and cost-effectiveness."
      sectionTitle="Our storage offerings."
      ctaText="Start Storing at Scale"
      heroImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=85&auto=format&fit=crop"
      closingText="At Illumia Solutions, we are committed to providing you with a powerful, secure, and scalable storage solution that fits seamlessly into your existing IT infrastructure — whether you are looking to enhance data accessibility, increase storage capacity, or improve data management."
      features={[
        {
          title: "High-Performance Block Storage",
          items: [
            {
              label: "NVMe SSD-Based",
              text: "Our high-performance block storage solutions are powered by NVMe SSD technology, delivering exceptional speed and efficiency — high throughput, low latency, and consistent performance for critical applications.",
            },
            {
              label: "Optimised for High Load",
              text: "NVMe SSD storage supports highly loaded database servers, application servers, and audio/video streaming servers, ensuring seamless performance under heavy workloads.",
            },
            {
              label: "Enhanced Reliability",
              text: "NVMe SSDs are built for durability and reliability, providing consistent performance and long-term data integrity.",
            },
          ],
        },
        {
          title: "Snapshot Management",
          items: [
            {
              label: "Space Efficiency",
              text: "Incremental snapshots store only the changes made since the last snapshot, optimising storage space usage without duplicating entire disks.",
            },
            {
              label: "Rapid Recovery",
              text: "Snapshots enable quick data recovery, minimising downtime and ensuring business continuity.",
            },
            {
              label: "Data Protection",
              text: "Regular snapshots provide an additional layer of data protection, allowing system restoration to previous states in case of data loss or corruption.",
            },
          ],
        },
        {
          title: "Hyperconverged, Fault-Tolerant Architecture",
          items: [
            {
              label: "Scalability",
              text: "Capable of scaling up to Exabyte and beyond — our solutions accommodate growing data needs seamlessly.",
            },
            {
              label: "Fault Tolerance",
              text: "Redundant and failover mechanisms ensure continuous operation and data availability even in the event of hardware failures.",
            },
            {
              label: "Integrated Management",
              text: "Hyperconverged architecture integrates compute, storage, and networking into a single platform, simplifying management and enhancing operational efficiency.",
            },
          ],
        },
        {
          title: "Scalable Object Storage",
          items: [
            {
              label: "Ideal for Unstructured Data",
              text: "Object storage systems are designed to scale out, allowing for virtually unlimited storage capacity — ideal for big data analytics, media repositories, and cloud-native applications.",
            },
            {
              label: "Durability and Cost-Effectiveness",
              text: "A highly durable and cost-effective solution for storing large volumes of data. The distributed architecture ensures data redundancy and high availability.",
            },
            {
              label: "Amazon S3 Compatible",
              text: "Fully identical to Amazon S3 at the API level, ensuring a smooth transition and interoperability for current Amazon S3 users — migrate without code changes.",
            },
            {
              label: "Easy Management",
              text: "Object storage simplifies data management with metadata tagging, making data retrieval more efficient. Supports various data formats and integrates easily with cloud services and big data platforms.",
            },
          ],
        },
        {
          title: "Cold Storage for Archival",
          items: [
            {
              label: "Long-Term Data Retention",
              text: "Cold storage is optimised for storing data that is infrequently accessed, providing a cost-effective solution for archival needs — easily scalable to accommodate growing volumes without significant cost increases.",
            },
            {
              label: "Durability and Compliance",
              text: "Ensures data integrity over extended periods, making it suitable for compliance and regulatory requirements.",
            },
            {
              label: "Secure Archival",
              text: "Provides robust security features to protect archival data from unauthorised access and data breaches, while ensuring data is available when needed to support business continuity.",
            },
          ],
        },
        {
          title: "Cost Efficiency and Enhanced Features",
          items: [
            {
              label: "No Data Transfer Charges",
              text: "Enjoy unlimited data transfer without any additional charges, making it easier to manage costs and data volume.",
            },
            {
              label: "Multi-Cloud Orchestration",
              text: "Leverage Software-Defined Networking (SDN) technology as an add-on for efficient multi-cloud orchestration, enhancing your ability to manage and synchronise data across various cloud environments.",
            },
            {
              label: "CDN Integration",
              text: "Improve global access speed and reduce latency by integrating storage with Content Delivery Network (CDN) services, available as an add-on.",
            },
            {
              label: "VPN Connectivity and Security",
              text: "Secure VPN connectivity back to your customer environment, plus comprehensive cybersecurity add-ons including EDR, SIEM, DLP, and honeypot technologies.",
            },
          ],
        },
      ]}
    />
  );
}
