import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation & Application Solutions",
  description:
    "Modernise legacy systems with DevSecOps, Kubernetes orchestration, and cloud-native application development. Includes collaboration tools, email, cloud storage, project management, and web conferencing — all on open-source infrastructure.",
  alternates: { canonical: "/application-solutions/" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/application-solutions/#service",
  name: "Digital Transformation",
  serviceType: "Digital Transformation and Application Development",
  description:
    "Streamlining legacy systems through automated innovations, DevSecOps practices, Kubernetes orchestration, and cloud-native application development for the modern enterprise.",
  url: "https://illumiasolutions.com/application-solutions/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  category: "Software Development",
};

export default function ApplicationSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
