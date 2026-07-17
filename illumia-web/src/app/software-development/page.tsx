import type { Metadata } from "next";
import SoftwareDevelopmentContent from "./SoftwareDevContent";

export const metadata: Metadata = {
  title: "Software Development — Design, Mobile, Web & Integrations",
  description:
    "Custom software development services: UI/UX design & development, native mobile applications, custom web applications, and third-party API integrations for enterprise and mid-market businesses.",
  alternates: { canonical: "/software-development/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/software-development/#service",
  name: "Custom Software Development",
  serviceType: "Software Development Services",
  description:
    "End-to-end custom software development — UI/UX design and development, native and cross-platform mobile applications, custom web applications, and third-party system integrations.",
  url: "https://illumiasolutions.com/software-development/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  category: "Software Development",
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SoftwareDevelopmentContent />
    </>
  );
}
