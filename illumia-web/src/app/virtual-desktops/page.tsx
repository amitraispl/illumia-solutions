import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Virtual Desktops — Secure Remote Work | Illumia Solutions",
  description:
    "Centrally managed virtual desktop infrastructure enabling secure remote work from any device, anywhere. CPU, GPU, sandboxed, and browser-based VDI solutions.",
};

export default function VirtualDesktopsPage() {
  return (
    <RichServicePageTemplate
      badge="Desktop as a Service"
      title="Virtual Desktops —"
      titleHighlight="Work From Anywhere."
      description="Our Virtual Desktop Infrastructure (VDI) delivers robust, secure, and flexible desktop environments that cater to a variety of professional needs — from high-powered CPU and GPU desktops to secure sandboxed environments for software development teams."
      sectionTitle="Our Virtual Desktop Features"
      ctaText="Deploy Virtual Desktops"
      heroImage="https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=1400&q=85&auto=format&fit=crop"
      closingText="Illumia Solutions' Virtual Desktop Infrastructure empowers your workforce to operate securely and productively from any location. Whether you're enabling remote teams, securing developer environments, or scaling desktop access across branches, our VDI solutions are purpose-built for the demands of modern business."
      features={[
        {
          title: "CPU & GPU Configurations",
          items: [
            {
              label: "High-Performance Compute",
              text: "Virtual desktops configured with both CPU and GPU options, providing the necessary power for graphics workloads, CAD, 3D rendering, and data-intensive applications.",
            },
            {
              label: "Scalable Resources",
              text: "Dynamically allocate compute resources to match workload demands — scale up during peak periods and right-size when demand drops.",
            },
          ],
        },
        {
          title: "Multi-OS Support",
          items: [
            {
              label: "Windows & Linux Desktops",
              text: "Deploy Windows or Linux desktop environments on demand. Your virtual desktop is always on, pre-configured, and ready for your team regardless of their physical device.",
            },
            {
              label: "Consistent User Experience",
              text: "Users get the same desktop environment whether they connect from a laptop, thin client, tablet, or any other endpoint device.",
            },
          ],
        },
        {
          title: "Browser-Based Access with MFA",
          items: [
            {
              label: "Zero-Client Access",
              text: "Access your virtual desktop from anywhere using just a web browser — no VPN client or special software required on the endpoint device.",
            },
            {
              label: "Multi-Factor Authentication",
              text: "Access can be locked down to employer-issued devices and enforced with MFA, ensuring only authorised users can reach sensitive desktop environments.",
            },
          ],
        },
        {
          title: "Filtered Internet Access",
          items: [
            {
              label: "Policy-Based Filtering",
              text: "Internet access from virtual desktops can be customised and filtered according to your organisation's policies — blocking malicious sites, restricting categories, and enforcing compliance.",
            },
            {
              label: "Centralised Control",
              text: "Manage all internet access policies centrally without touching individual endpoints, reducing administrative overhead and ensuring consistent enforcement.",
            },
          ],
        },
        {
          title: "Sandboxed Developer Environments",
          items: [
            {
              label: "Secure Code Environments",
              text: "For software development teams, we provide sandboxed VDIs where developers can code securely without the risk of unauthorised data upload, download, or exfiltration.",
            },
            {
              label: "Isolated Workspaces",
              text: "Each sandboxed environment is fully isolated, ensuring that development activity cannot compromise production systems or sensitive corporate data.",
            },
          ],
        },
        {
          title: "VPN & Peripheral Connectivity",
          items: [
            {
              label: "Seamless On-Premises Integration",
              text: "Secure VPN connections can be established from virtual desktops to support peripherals such as printers, scanners, and on-premises resources.",
            },
            {
              label: "Hybrid Environment Support",
              text: "Bridge cloud-hosted virtual desktops with your on-premises infrastructure, enabling a seamless hybrid working model without compromising security.",
            },
          ],
        },
        {
          title: "Centralised Management",
          items: [
            {
              label: "Single Pane of Control",
              text: "Provision, update, patch, and decommission virtual desktops from a single management console — eliminating the complexity of distributed endpoint management.",
            },
            {
              label: "Rapid Onboarding & Offboarding",
              text: "Spin up a fully configured desktop for a new employee in minutes, or instantly revoke access when a user departs — no physical device needed.",
            },
          ],
        },
        {
          title: "Data Security & Compliance",
          items: [
            {
              label: "Data Never Leaves the Cloud",
              text: "All files, applications, and data reside in the cloud — not on the endpoint. This eliminates data loss risk from stolen or lost devices.",
            },
            {
              label: "Audit Trails & Compliance",
              text: "Maintain comprehensive session logs and audit trails to meet regulatory requirements including GDPR, HIPAA, and ISO 27001.",
            },
          ],
        },
      ]}
    />
  );
}
