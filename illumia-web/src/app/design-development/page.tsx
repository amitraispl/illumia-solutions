import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Design & Development — UI/UX Design to Production Code",
  description:
    "End-to-end UI/UX design and software engineering — research, wireframing, interactive prototyping, design systems, and full-stack implementation by one accountable team.",
  alternates: { canonical: "/design-development/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/design-development/#service",
  name: "Design & Development",
  serviceType: "Design & Development",
  description:
    "End-to-end UI/UX design and software engineering — research, wireframing, interactive prototyping, design systems, and full-stack implementation by one accountable team.",
  url: "https://illumiasolutions.com/design-development/",
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
      "name": "Design & Development — UI/UX Design to Production Code",
      "item": "https://illumiasolutions.com/design-development/"
    }
  ]
};

export default function DesignDevelopmentPage() {
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
      badge="Design & Development"
      title="Design & Development —"
      titleHighlight="From Concept to Code."
      description="We take products from a blank page to production — user research, interaction design, and full-stack engineering handled by one team, in the same sprints, so nothing gets lost in translation between design and build."
      sectionTitle="Our Design & Development Process"
      ctaText="Start Your Design Sprint"
      heroImage="/images/design-development/hero.jpg"
      heroPortrait
      closingText="At Illumia Solutions, our design and development teams work as one — so your product's look, feel, and function are never compromises made in isolation."
      features={[
        {
          title: "User-Centered Design",
          items: [
            {
              label: "UX Research & Discovery",
              text: "Interviews, journey mapping, and competitive analysis that don't stop at kickoff — we go back to users mid-sprint whenever a build reveals something the original research didn't.",
            },
            {
              label: "Wireframing & Information Architecture",
              text: "Wireframes and site maps validated early, then revisited whenever engineering surfaces a constraint the flow didn't account for. Nothing's locked once the build starts.",
            },
          ],
        },
        {
          title: "Interactive Prototyping",
          items: [
            {
              label: "Clickable Prototypes",
              text: "Reviewed sprint by sprint alongside early engineering, not gated behind a separate design phase — each round of feedback loops straight back into the next iteration.",
            },
            {
              label: "Rapid Iteration",
              text: "Design and engineering trade findings sprint over sprint: a build constraint sends us back to the wireframe, real user feedback sends us back to the prototype.",
            },
          ],
        },
        {
          title: "Design Systems",
          items: [
            {
              label: "Component Libraries & UI Kits",
              text: "Built alongside the first features that need them, then extended sprint by sprint — not designed upfront in isolation from the code that uses them.",
            },
            {
              label: "Brand-Aligned Visual Language",
              text: "Typography, colour, and spacing systems refined as real screens get built, not signed off before a line of code exists.",
            },
          ],
        },
        {
          title: "Full-Stack Implementation",
          items: [
            {
              label: "Production-Ready Engineering",
              text: "No handoff, no waiting room — the same team designing the interface is building it in the same sprint, catching mismatches immediately instead of weeks later.",
            },
            {
              label: "Modern Frameworks",
              text: "React/Next.js, Node, and other modern, maintainable stacks — chosen early and revisited as the design work clarifies what your product actually needs.",
            },
          ],
        },
        {
          title: "Iterative Workflow",
          items: [
            {
              label: "Agile Sprint Cycles",
              text: "Work broken into short, fixed sprints — each one ending in a reviewable build, not a black box you wait weeks to see.",
            },
            {
              label: "Continuous Feedback Loops",
              text: "Every stage stays open to what the next one learns — testing, review, and real usage loop straight back into design and development, sprint after sprint.",
            },
          ],
        },
        {
          title: "Ongoing Partnership",
          items: [
            {
              label: "Design & Dev Retainers",
              text: "The same sprint cadence continues post-launch — design and engineering still looping on real usage data, not handed off to a different team.",
            },
            {
              label: "No Vendor Lock-in",
              text: "Full ownership of source files and code — modify, extend, or bring in-house at any time.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
