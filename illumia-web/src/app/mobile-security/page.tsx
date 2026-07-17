import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Mobile Security | Illumia Solutions",
  description:
    "Illumia Solutions offers specialised mobile security services to protect your mobile infrastructure, ensuring quick identification and response to incidents and safeguarding your applications from vulnerabilities.",
  alternates: { canonical: "/mobile-security/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/mobile-security/#service",
  name: "Mobile Security",
  serviceType: "Mobile Security",
  description:
    "Illumia Solutions offers specialised mobile security services to protect your mobile infrastructure, ensuring quick identification and response to incidents and safeguarding your applications from vulnerabilities.",
  url: "https://illumiasolutions.com/mobile-security/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function MobileSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
        badge="Mobile Security"
        title="Mobile"
        titleHighlight="Security."
        description="With the rise of mobile devices in the workplace, mobile security is more important than ever. Illumia Solutions offers specialised mobile security services to protect your mobile infrastructure, ensuring quick identification and response to incidents and safeguarding your applications from vulnerabilities."
        sectionTitle="Challenges we address — and how we solve them."
        features={[
          {
            title: "Challenges We Address",
            items: [
              {
                label: "BYOD Management",
                text: "Securing personal devices used for work can be complex due to varied device types and operating systems.",
              },
              {
                label: "Incident Response",
                text: "Quickly identifying and responding to mobile security incidents is essential to minimise potential damage.",
              },
              {
                label: "Application Security",
                text: "Protecting mobile applications from vulnerabilities and attacks requires continuous monitoring and proactive measures.",
              },
            ],
          },
          {
            title: "Our Approach",
            items: [
              {
                label: "BYOD Strategies",
                text: "Develop policies to ensure personal devices meet corporate security standards, including device encryption, remote wipe capabilities, and secure access controls.",
              },
              {
                label: "Forensic Analysis",
                text: "Provide detailed insights into mobile security incidents, enabling swift and effective response to mitigate potential damage.",
              },
              {
                label: "Application Assessments",
                text: "Evaluate and address security risks in mobile applications through comprehensive assessments, including static and dynamic analysis, to ensure they are secure against threats.",
              },
            ],
          },
        ]}
        closingText="As mobile devices become central to every business workflow, Illumia delivers the policies, tooling, and expertise needed to keep your mobile estate secure — without hampering productivity."
        ctaText="Request a Mobile Security Assessment"
        heroImage="/images/mobile-security/hero.png"
      />
    </>
  );
}
