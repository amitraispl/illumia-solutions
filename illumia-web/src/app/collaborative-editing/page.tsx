import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Collaborative Editing — OnlyOffice Solutions",
  description:
    "Collaborative editing solutions using OnlyOffice — delivering document editing, real-time collaboration, and security for your organisation.",
  alternates: {
    canonical: "/collaborative-editing/",
    languages: { "en": "https://illumiasolutions.com/collaborative-editing/", "x-default": "https://illumiasolutions.com/collaborative-editing/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/collaborative-editing/#service",
  name: "Collaborative Editing",
  serviceType: "Application Solutions",
  description:
    "Collaborative editing solutions using OnlyOffice — delivering document editing, real-time collaboration, and security for your organisation.",
  url: "https://illumiasolutions.com/collaborative-editing/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function CollaborativeEditingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Application Solutions"
      title="Collaborative Editing —"
      titleHighlight="Comprehensive & Secure."
      description="In today's fast-paced business environment, efficient document collaboration is essential for productivity and success. Illumia Solutions provides collaborative editing solutions using OnlyOffice, delivering document editing, real-time collaboration, and security."
      sectionTitle="Benefits of Our Collaborative Editing Solutions"
      ctaText="Deploy Collaborative Editing"
      heroImage="/images/heroes/homepage-about_team-at-work.jpg"
      closingText="Illumia Solutions' collaborative editing solutions with OnlyOffice provide a comprehensive, secure, and cost-effective way to enhance your organization's document management and collaboration capabilities."
      features={[
        {
          title: "Comprehensive Document Editing",
          items: [
            {
              label: "Powerful Editing Tools",
              text: "Access a wide range of tools for creating and editing documents, spreadsheets, and presentations with professional precision.",
            },
            {
              label: "User-Friendly Interface",
              text: "Enjoy a straightforward and intuitive interface that minimises the learning curve for all team members.",
            },
          ],
        },
        {
          title: "Real-Time Collaboration",
          items: [
            {
              label: "Simultaneous Editing",
              text: "Multiple users can work on the same document simultaneously, eliminating version conflicts and streamlining teamwork.",
            },
            {
              label: "Instant Feedback",
              text: "Provide and receive immediate feedback within documents, keeping collaboration fast and contextual.",
            },
          ],
        },
        {
          title: "Advanced Formatting Options",
          items: [
            {
              label: "Professional Document Creation",
              text: "Leverage advanced styles, fonts, tables, and image embedding to produce polished, professional documents.",
            },
            {
              label: "Customizable Templates",
              text: "Streamline document creation and ensure consistency across your organisation with customisable templates.",
            },
          ],
        },
        {
          title: "Integration Capabilities",
          items: [
            {
              label: "Seamless Integration",
              text: "Integrate with your existing CRM, ERP, and project management tools for a cohesive digital workplace experience.",
            },
            {
              label: "Nextcloud Integration",
              text: "Benefit from seamless integration with Nextcloud for enhanced file sharing and storage alongside collaborative editing.",
            },
          ],
        },
        {
          title: "Security Features",
          items: [
            {
              label: "Robust Data Protection",
              text: "Protect your documents with encryption and granular access controls, ensuring sensitive content remains secure.",
            },
            {
              label: "User Authentication",
              text: "Enforce multi-factor authentication (MFA) to prevent unauthorised access to your collaborative editing environment.",
            },
          ],
        },
        {
          title: "Cross-Platform Access",
          items: [
            {
              label: "Universal Accessibility",
              text: "Access and edit documents from any device — desktops, laptops, tablets, and smartphones — without restriction.",
            },
            {
              label: "Platform Compatibility",
              text: "Compatible with Windows, macOS, Linux, iOS, and Android for seamless access across all platforms.",
            },
          ],
        },
        {
          title: "Extensive Spreadsheet Capabilities",
          items: [
            {
              label: "Data Analysis Tools",
              text: "Utilise powerful formulas, pivot tables, and charts to analyse and visualise data directly within your spreadsheets.",
            },
            {
              label: "Collaboration in Spreadsheets",
              text: "Enable real-time collaborative analysis so multiple team members can work on data simultaneously.",
            },
          ],
        },
        {
          title: "Presentation Tools",
          items: [
            {
              label: "Create Engaging Presentations",
              text: "Build compelling presentations with animations, transitions, and multimedia support to captivate your audience.",
            },
            {
              label: "Collaborative Editing",
              text: "Allow your team to refine presentations together in real time, improving quality and reducing turnaround time.",
            },
          ],
        },
        {
          title: "Form Creation and Filling",
          items: [
            {
              label: "Custom Forms",
              text: "Create custom forms for data collection, surveys, and feedback gathering tailored to your business needs.",
            },
            {
              label: "Interactive Filling",
              text: "Enable interactive form filling that improves data accuracy and streamlines information capture.",
            },
          ],
        },
        {
          title: "API Access",
          items: [
            {
              label: "Custom Integrations",
              text: "Extend OnlyOffice functionality through its API to build custom integrations with your internal systems.",
            },
            {
              label: "Automation",
              text: "Automate document workflows and business processes to reduce manual effort and increase efficiency.",
            },
          ],
        },
        {
          title: "Cost-Effective",
          items: [
            {
              label: "Reduced Costs",
              text: "Open-source licensing eliminates the need for expensive proprietary document suite licences, lowering your total cost of ownership.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
