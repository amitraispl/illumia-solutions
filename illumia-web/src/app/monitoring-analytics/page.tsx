import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Monitoring & Analytics — Infrastructure Intelligence | Illumia Solutions",
  description:
    "Full-stack observability powered by CheckMK and Elastiflow — real-time metrics, network flow analysis, and intelligent alerting.",
};

export default function MonitoringAnalyticsPage() {
  return (
    <RichServicePageTemplate
      badge="Infrastructure Intelligence"
      title="Monitoring &"
      titleHighlight="Analytics."
      description="Illumia Solutions offers advanced monitoring and analytical system solutions powered by CheckMK and Elastiflow — providing real-time monitoring, network flow analysis, and detailed reporting to ensure your organization has the tools needed for efficient IT management."
      sectionTitle="Benefits of Our Monitoring and Analytical System Solutions"
      ctaText="Gain Full Visibility"
      heroImage="https://nextcloud.illumiasolutions.com/public.php/dav/files/aNxHyHwJoLJ4G9e"
      darkHero={true}
      closingText="Illumia Solutions' monitoring and analytical system solutions with CheckMK and Elastiflow provide a comprehensive, scalable, and cost-effective way to enhance your organization's IT management capabilities. With powerful monitoring, detailed reporting, and anomaly detection features, ensure your IT infrastructure is always performing at its best."
      features={[
        {
          title: "Comprehensive Monitoring",
          items: [
            {
              label: "Extensive Coverage",
              text: "Monitor networks, servers, applications, and services across your entire IT infrastructure, ensuring no critical component is overlooked.",
            },
            {
              label: "Holistic View",
              text: "Obtain complete oversight of your IT environment for proactive issue management and informed decision-making.",
            },
          ],
        },
        {
          title: "Network Flow Analysis",
          items: [
            {
              label: "In-Depth Insights",
              text: "Analyze network flow data with Elastiflow to understand traffic patterns, identify bottlenecks, and detect anomalies across your network.",
            },
            {
              label: "Performance Optimization",
              text: "Enhance overall network efficiency by optimizing data paths and addressing performance bottlenecks proactively.",
            },
          ],
        },
        {
          title: "Scalability",
          items: [
            {
              label: "Adaptable Solutions",
              text: "Scale monitoring solutions from small businesses to large enterprises without compromising performance or coverage.",
            },
            {
              label: "Flexible Infrastructure",
              text: "Support numerous devices and data sources as your IT environment grows and evolves.",
            },
          ],
        },
        {
          title: "Real-Time Monitoring and Data Processing",
          items: [
            {
              label: "Instant Alerts",
              text: "Detect and respond to issues immediately through real-time monitoring and automated alerting for critical events.",
            },
            {
              label: "Continuous Processing",
              text: "Maintain current insights through ongoing data processing to ensure your monitoring data is always up to date.",
            },
          ],
        },
        {
          title: "Customizable Dashboards",
          items: [
            {
              label: "Tailored Views",
              text: "Display relevant monitoring information for different users and teams with fully customizable dashboard layouts.",
            },
            {
              label: "Intuitive Interface",
              text: "Simplify monitoring and data analysis with an intuitive, user-friendly interface that reduces complexity.",
            },
          ],
        },
        {
          title: "Detailed Reporting and Analytics",
          items: [
            {
              label: "Comprehensive Reports",
              text: "Generate performance, network, and security event reports to support data-driven decision-making.",
            },
            {
              label: "In-Depth Analytics",
              text: "Gain insights into IT trends, patterns, and anomalies to guide strategic infrastructure decisions.",
            },
          ],
        },
        {
          title: "Ease of Use",
          items: [
            {
              label: "User-Friendly Design",
              text: "Simplify setup, configuration, and management with an intuitive interface designed for operational efficiency.",
            },
            {
              label: "Quick Deployment",
              text: "Reduce implementation time and complexity with streamlined deployment processes.",
            },
          ],
        },
        {
          title: "Automated Discovery",
          items: [
            {
              label: "Efficient Setup",
              text: "Quickly identify and monitor all devices and services within your network through automated discovery.",
            },
            {
              label: "Reduced Manual Effort",
              text: "Minimize manual configuration requirements, allowing your team to focus on higher-value activities.",
            },
          ],
        },
        {
          title: "Multi-Site Monitoring",
          items: [
            {
              label: "Centralized Management",
              text: "Monitor multiple sites and locations from a single centralized platform for consistent management.",
            },
            {
              label: "Unified View",
              text: "Gain geographic oversight of your entire IT environment across all locations from one dashboard.",
            },
          ],
        },
        {
          title: "Anomaly Detection",
          items: [
            {
              label: "Proactive Identification",
              text: "Address potential issues before they escalate by identifying unusual patterns through advanced anomaly detection.",
            },
            {
              label: "Enhanced Security",
              text: "Identify unusual patterns that may indicate security threats or performance degradation in real time.",
            },
          ],
        },
        {
          title: "Historical Data Analysis",
          items: [
            {
              label: "Long-Term Insights",
              text: "Understand IT trends over time for strategic planning and capacity management decisions.",
            },
            {
              label: "Performance Benchmarking",
              text: "Identify areas for improvement by comparing current performance against historical baselines.",
            },
          ],
        },
      ]}
    />
  );
}
