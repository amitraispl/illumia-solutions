import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Virtual Private Server — Flexible, Secure, No Lock-in | Illumia Solutions",
  description:
    "VPS offerings meticulously designed to meet the diverse needs of modern businesses, combining scalability, performance, and cost-efficiency with enhanced cybersecurity options.",
};

export default function VPSPage() {
  return (
    <RichServicePageTemplate
      badge="Cloud Infrastructure"
      title="Virtual Private Server —"
      titleHighlight="Flexible, Secure, No Lock-in."
      description="At Illumia Solutions, we understand that flexibility, security, and reliability are paramount when it comes to hosting solutions. Our Virtual Private Server (VPS) offerings are meticulously designed to meet the diverse needs of modern businesses, combining scalability, performance, and cost-efficiency with enhanced cybersecurity options."
      sectionTitle="Our VPS Features"
      ctaText="Configure Your VPS"
      heroImage="https://nextcloud.illumiasolutions.com/public.php/dav/files/pX3k8T7akXN5pqp"
      closingText="Whether you're running high-traffic websites, complex databases, or critical applications, our VPS solutions offer the power, performance, and peace of mind you need. With Illumia Solutions, you're not just choosing a service provider; you're partnering with a team of experts dedicated to supporting your growth and success."
      features={[
        {
          title: "Tailored Configuration",
          items: [
            {
              label: "Customizable Resources",
              text: "Choose any combination of CPU, RAM, and storage to precisely match your specific needs. Our VPS solutions are entirely flexible, allowing you to scale resources up or down as your business requirements evolve.",
            },
          ],
        },
        {
          title: "Enhanced Security Options",
          items: [
            {
              label: "Cybersecurity Add-Ons",
              text: "Strengthen your security posture with additional layers such as Endpoint Detection and Response (EDR), Data Loss Prevention (DLP), Security Information and Event Management (SIEM), Privileged Access Management (PAM), and Warm Disaster Recovery (DR) — available at fractional costs and supporting regulatory compliance.",
            },
          ],
        },
        {
          title: "Cost Efficiency",
          items: [
            {
              label: "No Data Transfer Charges",
              text: "We offer unrestricted data transfer, both in and out, without any additional charges.",
            },
            {
              label: "No Charges on CPU Max-out",
              text: "Experience uninterrupted service without any additional cost, even during periods of maximum CPU usage.",
            },
            {
              label: "Straightforward Monthly Billing",
              text: "Our billing is simple and transparent, with a flat monthly fee that makes financial planning easier.",
            },
          ],
        },
        {
          title: "Freedom and Flexibility",
          items: [
            {
              label: "No Vendor Lock-in",
              text: "We believe in providing services that retain our customers through quality and performance, not contractual restrictions. You are free to modify, scale, or discontinue services according to your business needs.",
            },
          ],
        },
        {
          title: "Unmatched Reliability",
          items: [
            {
              label: "99.9% Uptime Guarantee",
              text: "Our VPS hosting is built on a robust infrastructure that ensures high availability and consistent performance, backed by 24/7 expert support.",
            },
          ],
        },
      ]}
    />
  );
}
