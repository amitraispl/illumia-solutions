import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Application Security | Illumia Solutions",
  description:
    "Illumia Solutions provides comprehensive application security services, from identifying vulnerabilities to enhancing security architecture and integrating secure development practices.",
  alternates: { canonical: "/application-security/" },
};

export default function ApplicationSecurityPage() {
  return (
    <RichServicePageTemplate
      badge="Application Security"
      title="Application"
      titleHighlight="Security."
      description="Protecting your applications is essential to safeguarding your business. Illumia Solutions provides comprehensive application security services, from identifying vulnerabilities to enhancing security architecture and integrating secure development practices. We ensure your applications are secure without compromising usability."
      sectionTitle="Challenges we address — and how we solve them."
      features={[
        {
          title: "Challenges We Address",
          items: [
            {
              label: "Vulnerability Detection",
              text: "Identifying weaknesses in applications is challenging due to the complexity and variety of modern software systems.",
            },
            {
              label: "Secure Development",
              text: "Applying secure practices throughout the SDLC can be difficult, especially in fast-paced development environments.",
            },
            {
              label: "Balancing Security and Usability",
              text: "Implementing robust security measures without affecting the user experience is crucial and requires careful design.",
            },
          ],
        },
        {
          title: "Our Approach",
          items: [
            {
              label: "Detailed Assessments",
              text: "Thorough evaluations identifying security weaknesses via code reviews, penetration testing, and configuration analysis.",
            },
            {
              label: "Secure Architecture",
              text: "Enhancement of application security design to prevent unauthorised access and data breaches.",
            },
            {
              label: "Best Practices Integration",
              text: "Incorporation of security standards into the development lifecycle — from design through to maintenance.",
            },
          ],
        },
      ]}
      closingText="Illumia ensures your applications are built and maintained securely — without slowing down your development teams or compromising the user experience your customers rely on."
      ctaText="Request an Application Security Assessment"
      heroImage="/images/application-security/hero.png"
    />
  );
}
