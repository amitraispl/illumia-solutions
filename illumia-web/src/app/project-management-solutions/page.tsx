import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Project Management Solutions — Redmine, Zammad & OpenProject | Illumia Solutions",
  description:
    "Flexible open-source project management with Redmine, Zammad, and OpenProject tailored to your team's workflow.",
};

export default function ProjectManagementSolutionsPage() {
  return (
    <RichServicePageTemplate
      badge="Workflow Management"
      title="Project Management"
      titleHighlight="Solutions."
      description="Effective project management is essential for the success and growth of any organization. Illumia Solutions offers comprehensive project management solutions powered by Redmine, Zammad, and OpenProject, designed to streamline your project workflows, issue tracking, and customer support processes."
      sectionTitle="Benefits of Our Project Management Solutions"
      ctaText="Streamline Your Workflow"
      heroImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1400&q=80&auto=format&fit=crop"
      closingText="Illumia Solutions' project management solutions with Redmine, Zammad, and OpenProject provide a comprehensive, scalable, and cost-effective way to enhance your organization's project management and collaboration capabilities."
      features={[
        {
          title: "Multi-Project Support",
          items: [
            {
              label: "Efficient Management",
              text: "Manage multiple projects simultaneously with ease.",
            },
            {
              label: "Centralized Dashboard",
              text: "Utilize a centralized dashboard to view and manage all your projects in one place.",
            },
          ],
        },
        {
          title: "Issue Tracking",
          items: [
            {
              label: "Robust Tracking",
              text: "Track issues, bugs, and tasks efficiently.",
            },
            {
              label: "Prioritization",
              text: "Prioritize issues and tasks based on their importance and urgency.",
            },
          ],
        },
        {
          title: "Customizable Workflow",
          items: [
            {
              label: "Tailored Workflows",
              text: "Customize workflows to match your project management processes.",
            },
            {
              label: "Flexible Configuration",
              text: "Adapt workflows to handle various project types and complexities.",
            },
          ],
        },
        {
          title: "Time Tracking",
          items: [
            {
              label: "Accurate Tracking",
              text: "Monitor time spent on tasks and projects.",
            },
            {
              label: "Productivity Insights",
              text: "Gain insights into team productivity and project progress.",
            },
          ],
        },
        {
          title: "Gantt Charts and Calendars",
          items: [
            {
              label: "Visual Planning",
              text: "Use Gantt charts and calendars to visualize project timelines.",
            },
            {
              label: "Schedule Management",
              text: "Easily manage project schedules.",
            },
          ],
        },
        {
          title: "Role-Based Access Control",
          items: [
            {
              label: "Secure Access",
              text: "Implement role-based access control.",
            },
            {
              label: "Data Protection",
              text: "Protect sensitive project data by controlling user permissions.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Integrate Redmine, Zammad, and OpenProject with existing enterprise applications.",
            },
            {
              label: "APIs and Plugins",
              text: "Utilize APIs and plugins to extend functionality.",
            },
          ],
        },
        {
          title: "Email Notifications",
          items: [
            {
              label: "Stay Informed",
              text: "Receive real-time email notifications about project updates.",
            },
            {
              label: "Automated Alerts",
              text: "Set up automated email alerts to keep team members informed.",
            },
          ],
        },
        {
          title: "Wiki and Forums",
          items: [
            {
              label: "Knowledge Sharing",
              text: "Create and maintain wikis for documentation.",
            },
            {
              label: "Collaboration",
              text: "Use forums for team discussions, brainstorming, and problem-solving.",
            },
          ],
        },
        {
          title: "Plugins and Extensions",
          items: [
            {
              label: "Extend Functionality",
              text: "Enhance your project management solution with plugins.",
            },
            {
              label: "Custom Features",
              text: "Add custom features to meet specific project management needs.",
            },
          ],
        },
        {
          title: "Multilingual Support",
          items: [
            {
              label: "Global Collaboration",
              text: "Support for multiple languages.",
            },
            {
              label: "Localized Interface",
              text: "Provide a localized user interface.",
            },
          ],
        },
        {
          title: "Ticket Management",
          items: [
            {
              label: "Efficient Ticketing",
              text: "Manage customer support tickets efficiently.",
            },
            {
              label: "Prioritize Requests",
              text: "Prioritize and categorize tickets.",
            },
          ],
        },
        {
          title: "Multi-Channel Support",
          items: [
            {
              label: "Versatile Communication",
              text: "Support multiple communication channels.",
            },
            {
              label: "Unified Inbox",
              text: "Manage all customer interactions from a single inbox.",
            },
          ],
        },
        {
          title: "Real-Time Notifications",
          items: [
            {
              label: "Instant Updates",
              text: "Receive real-time notifications for project updates.",
            },
            {
              label: "Stay Connected",
              text: "Ensure team members are informed of important developments.",
            },
          ],
        },
        {
          title: "Knowledge Base",
          items: [
            {
              label: "Central Repository",
              text: "Create and maintain a centralized knowledge base.",
            },
            {
              label: "Self-Service",
              text: "Enable users to find answers independently.",
            },
          ],
        },
        {
          title: "Reporting and Analytics",
          items: [
            {
              label: "Detailed Reports",
              text: "Generate detailed reports on project performance.",
            },
            {
              label: "Data-Driven Insights",
              text: "Use analytics to gain insights into project trends.",
            },
          ],
        },
        {
          title: "Customer Portal",
          items: [
            {
              label: "Client Access",
              text: "Provide clients with access to a dedicated portal.",
            },
            {
              label: "Transparency",
              text: "Enhance transparency and client satisfaction.",
            },
          ],
        },
        {
          title: "Automation Rules",
          items: [
            {
              label: "Streamline Processes",
              text: "Use automation rules to reduce manual tasks.",
            },
            {
              label: "Custom Triggers",
              text: "Set up custom triggers and actions.",
            },
          ],
        },
      ]}
    />
  );
}
