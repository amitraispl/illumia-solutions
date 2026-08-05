import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Web Application Development — Scalable, Secure & Maintainable",
  description:
    "Custom web applications built on modern frameworks — from internal operations tools to customer-facing SaaS platforms — engineered for security, performance, and scale.",
  alternates: { canonical: "/custom-web-application/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/custom-web-application/#service",
  name: "Custom Web Application Development",
  serviceType: "Web Applications",
  description:
    "Custom web applications built on modern frameworks — from internal operations tools to customer-facing SaaS platforms — engineered for security, performance, and scale.",
  url: "https://illumiasolutions.com/custom-web-application/",
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
      "name": "Software Development",
      "item": "https://illumiasolutions.com/software-development/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Custom Web Application Development — Scalable, Secure & Maintainable",
      "item": "https://illumiasolutions.com/custom-web-application/"
    }
  ]
};

export default function CustomWebApplicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Web Applications"
      title="Custom Web Applications —"
      titleHighlight="Built to Scale With You."
      description="From internal operations tools to customer-facing platforms, we build web applications in iterative sprints on modern, maintainable stacks — engineered for the load, security, and workflows your business actually has."
      sectionTitle="Our Web Application Capabilities"
      ctaText="Scope Your Web App"
      heroImage="/images/custom-web-application/hero.jpg"
      closingText="We build web applications the way we'd want to inherit them — clean architecture, sane defaults, and documentation that actually helps."
      features={[
        {
          title: "Modern Front-End Engineering",
          items: [
            {
              label: "React / Next.js Development",
              text: "Fast, SEO-friendly interfaces built on modern component frameworks with server-side rendering where it matters.",
            },
            {
              label: "Responsive by Default",
              text: "Every screen built mobile-first and tested across breakpoints, not patched afterward.",
            },
          ],
        },
        {
          title: "Robust Back-End Systems",
          items: [
            {
              label: "API & Service Architecture",
              text: "RESTful and GraphQL APIs designed around your actual data model and access patterns.",
            },
            {
              label: "Database Design",
              text: "Schema design and query optimisation for both relational and document-based data stores.",
            },
          ],
        },
        {
          title: "Authentication & Access Control",
          items: [
            {
              label: "SSO & Role-Based Access",
              text: "SAML/OAuth single sign-on and granular role-based permissions for internal and customer-facing apps alike.",
            },
            {
              label: "Multi-Tenant Architecture",
              text: "Secure tenant isolation for SaaS products serving multiple customer organisations.",
            },
          ],
        },
        {
          title: "Performance & Scalability",
          items: [
            {
              label: "Caching & Load Optimisation",
              text: "Application and edge caching strategies that keep response times low as traffic grows.",
            },
            {
              label: "Horizontal Scaling",
              text: "Stateless service design ready to scale out on your infrastructure of choice.",
            },
          ],
        },
        {
          title: "DevOps & Deployment",
          items: [
            {
              label: "CI/CD Pipelines",
              text: "Automated build, test, and deployment pipelines from day one — no manual release nights.",
            },
            {
              label: "Containerised Delivery",
              text: "Docker and Kubernetes-ready packaging for consistent environments across dev, staging, and production.",
            },
          ],
        },
        {
          title: "Maintenance & Evolution",
          items: [
            {
              label: "Ongoing Feature Development",
              text: "Continued engineering support as requirements evolve — not a one-and-done handoff.",
            },
            {
              label: "Full Source Ownership",
              text: "Clean, documented codebases with no proprietary lock-in.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
