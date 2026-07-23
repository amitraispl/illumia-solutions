import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Mobile Application Development — iOS, Android & Cross-Platform",
  description:
    "Native iOS and Android apps or cross-platform builds engineered for performance, offline resilience, and App Store-ready polish, with full post-launch support.",
  alternates: { canonical: "/custom-mobile-application/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/custom-mobile-application/#service",
  name: "Custom Mobile Application Development",
  serviceType: "Mobile Applications",
  description:
    "Native iOS and Android apps or cross-platform builds engineered for performance, offline resilience, and App Store-ready polish, with full post-launch support.",
  url: "https://illumiasolutions.com/custom-mobile-application/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function CustomMobileApplicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Mobile Applications"
      title="Custom Mobile Applications —"
      titleHighlight="Native Performance, Any Platform."
      description="Native iOS and Android apps, or a single cross-platform codebase — built in short sprints with a staging build you can test every cycle, engineered for performance, offline resilience, and a polish that feels at home on the platform it runs on."
      sectionTitle="Our Mobile Development Capabilities"
      ctaText="Scope Your Mobile App"
      heroImage="/images/custom-mobile-application/hero.jpg"
      closingText="Whether it's a customer-facing app or an internal field tool, we build mobile software that performs — and that your team can maintain long after launch."
      features={[
        {
          title: "Native & Cross-Platform",
          items: [
            {
              label: "iOS & Android Native",
              text: "Swift and Kotlin development for apps that demand maximum platform performance and deep OS integration.",
            },
            {
              label: "Cross-Platform Delivery",
              text: "React Native and Flutter builds that ship to both app stores from a single, maintainable codebase.",
            },
          ],
        },
        {
          title: "Offline-First Architecture",
          items: [
            {
              label: "Local Data Sync",
              text: "Robust offline storage and background sync so your app stays usable with unreliable connectivity.",
            },
            {
              label: "Conflict Resolution",
              text: "Reliable merge strategies for data captured offline and synced later.",
            },
          ],
        },
        {
          title: "Platform Integration",
          items: [
            {
              label: "Push Notifications & Deep Linking",
              text: "Native notification pipelines and deep-linking for re-engagement and seamless navigation.",
            },
            {
              label: "Device Hardware Access",
              text: "Camera, GPS, biometrics, and sensor integrations built to platform-specific best practices.",
            },
          ],
        },
        {
          title: "App Store Readiness",
          items: [
            {
              label: "Submission & Compliance",
              text: "Full App Store and Play Store submission handling, including compliance and review-readiness.",
            },
            {
              label: "Performance Profiling",
              text: "Startup time, memory, and battery profiling so your app meets store-quality bars, not just feature checklists.",
            },
          ],
        },
        {
          title: "Secure by Design",
          items: [
            {
              label: "Encrypted Local Storage",
              text: "Sensitive data encrypted at rest on-device, with secure token handling for authenticated sessions.",
            },
            {
              label: "API Hardening",
              text: "Certificate pinning and hardened API communication between app and backend.",
            },
          ],
        },
        {
          title: "Post-Launch Support",
          items: [
            {
              label: "Monitoring & Crash Reporting",
              text: "Real-time crash reporting and analytics wired in from day one.",
            },
            {
              label: "Version & Release Management",
              text: "Managed release cadences, phased rollouts, and rapid hotfix turnaround.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
