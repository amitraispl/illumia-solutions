import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Illumia Solutions for enterprise IT services, cybersecurity, cloud infrastructure, and open-source solutions. Reach our team in Kolkata, India.",
  alternates: { canonical: "/contact/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illumiasolutions.com/" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://illumiasolutions.com/contact/" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
