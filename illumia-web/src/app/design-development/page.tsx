import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Design & Development — UI/UX Design to Production Code | Illumia Solutions",
  description:
    "End-to-end UI/UX design and software engineering — research, wireframing, interactive prototyping, design systems, and full-stack implementation by one accountable team.",
  alternates: { canonical: "/design-development/" },
};

export default function DesignDevelopmentPage() {
  return (
    <RichServicePageTemplate
      badge="Design & Development"
      title="Design & Development —"
      titleHighlight="From Concept to Code."
      description="We take products from a blank page to production — user research, interaction design, and full-stack engineering handled by one team, so nothing gets lost in translation between design and build."
      sectionTitle="Our Design & Development Process"
      ctaText="Start Your Design Sprint"
      heroImage="/images/design-development/hero.jpg"
      closingText="At Illumia Solutions, our design and development teams work as one — so your product's look, feel, and function are never compromises made in isolation."
      features={[
        {
          title: "User-Centered Design",
          items: [
            {
              label: "UX Research & Discovery",
              text: "We start with your users — interviews, journey mapping, and competitive analysis to ground every decision in real behaviour.",
            },
            {
              label: "Wireframing & Information Architecture",
              text: "Low-fidelity wireframes and site maps that validate structure and flow before a single pixel is polished.",
            },
          ],
        },
        {
          title: "Interactive Prototyping",
          items: [
            {
              label: "Clickable Prototypes",
              text: "High-fidelity, interactive prototypes for stakeholder review and usability testing well before development begins.",
            },
            {
              label: "Rapid Iteration",
              text: "Fast design cycles informed by real feedback, keeping the product aligned with user needs at every stage.",
            },
          ],
        },
        {
          title: "Design Systems",
          items: [
            {
              label: "Component Libraries & UI Kits",
              text: "Reusable, documented component libraries that keep your product visually consistent as it scales.",
            },
            {
              label: "Brand-Aligned Visual Language",
              text: "Typography, colour, and spacing systems built to reflect your brand across every screen.",
            },
          ],
        },
        {
          title: "Full-Stack Implementation",
          items: [
            {
              label: "Production-Ready Engineering",
              text: "Design handoff with zero ambiguity — the same team that designs the interface builds it, pixel-accurate.",
            },
            {
              label: "Modern Frameworks",
              text: "Built on React/Next.js, Node, and other modern, maintainable stacks chosen for your specific requirements.",
            },
          ],
        },
        {
          title: "Quality & Accessibility",
          items: [
            {
              label: "Cross-Browser & Device Testing",
              text: "Rigorous QA across browsers, devices, and screen sizes before anything ships.",
            },
            {
              label: "WCAG-Aligned Accessibility",
              text: "Interfaces built to be usable by everyone, following WCAG guidelines from the ground up.",
            },
          ],
        },
        {
          title: "Ongoing Partnership",
          items: [
            {
              label: "Design & Dev Retainers",
              text: "Continued design and engineering support as your product evolves post-launch.",
            },
            {
              label: "No Vendor Lock-in",
              text: "Full ownership of source files and code — modify, extend, or bring in-house at any time.",
            },
          ],
        },
      ]}
    />
  );
}
