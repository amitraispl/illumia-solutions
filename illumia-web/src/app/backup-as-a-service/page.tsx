import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Backup as a Service — Data Protection | Illumia Solutions",
  description:
    "Automated, encrypted backup and recovery services ensuring your critical data is always protected and recoverable.",
  alternates: { canonical: "/backup-as-a-service/" },
};

export default function BackupAsAServicePage() {
  return (
    <RichServicePageTemplate
      badge="Data Protection"
      title="Backup —"
      titleHighlight="as a Service."
      description="Backup as a Service provides a crucial safety net for businesses — ensuring data is continuously protected and readily recoverable from accidental deletions, hardware failures, and cyberattacks, with automated scheduling and fast recovery times."
      sectionTitle="Backup as a Service Features"
      ctaText="Protect Your Data"
      heroImage="/images/shared/backup.png"
      darkHero={true}
      closingText="Partner with us to secure your business's most valuable asset — its data."
      features={[
        {
          title: "How Backup as a Service Helps Companies",
          items: [
            {
              label: "Data Security",
              text: "Regular backups ensure that your data is safe from accidental deletions, hardware failures, or cyberattacks.",
            },
            {
              label: "Business Continuity",
              text: "By having reliable backups, businesses can minimize downtime and maintain operations even after data loss incidents.",
            },
            {
              label: "Regulatory Compliance",
              text: "Many industries have strict data retention and protection regulations. BaaS helps companies comply with these laws by providing automated and secure backup solutions.",
            },
            {
              label: "Cost-Effective",
              text: "Outsourcing backup management to a service provider can be more cost-effective than maintaining in-house backup infrastructure.",
            },
          ],
        },
        {
          title: "Deployment Options",
          items: [
            {
              label: "Cloud-Based Backups",
              text: "Data is stored in remote cloud servers, offering high scalability and accessibility from anywhere with an internet connection.",
            },
            {
              label: "On-Premises Backups",
              text: "Data is backed up to local storage devices within the company's premises, providing faster recovery times and better control over data security.",
            },
            {
              label: "Hybrid Backups",
              text: "Combines both cloud and on-premises backups, providing the benefits of both methods for maximum protection and flexibility.",
            },
            {
              label: "Managed Backups",
              text: "A fully managed service where the provider handles all aspects of the backup process, including monitoring, maintenance, and restoration.",
            },
          ],
        },
        {
          title: "Benefits for Offices Without IT Personnel",
          items: [
            {
              label: "Simplified Management",
              text: "No technical expertise required — our team manages the entire backup process on your behalf, from scheduling to restoration.",
            },
            {
              label: "Expert Support",
              text: "24/7 access to backup specialists who ensure your data is always protected and recoverable when needed.",
            },
            {
              label: "Automated Processes",
              text: "Set-and-forget automated backup scheduling that consistently protects your data without manual intervention.",
            },
            {
              label: "Scalability",
              text: "Easily scale backup capacity as your data grows — no need to invest in additional hardware or infrastructure.",
            },
          ],
        },
        {
          title: "What We Offer",
          items: [
            {
              label: "Customizable Plans",
              text: "Backup plans tailored to your organization's data volume, recovery objectives, and compliance requirements.",
            },
            {
              label: "Advanced Security",
              text: "Encryption, access controls, and regular security audits to ensure your backup data is protected from unauthorized access.",
            },
            {
              label: "24/7 Monitoring and Support",
              text: "Around-the-clock monitoring of your backup environment with expert support to address any issues promptly.",
            },
            {
              label: "Fast Recovery Times",
              text: "Guaranteed quick recovery times to minimize downtime and disruption, restoring your business operations as rapidly as possible.",
            },
          ],
        },
      ]}
    />
  );
}
