import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCI DSS Compliance for Grocery Chain",
  description: "How Illumia Solutions delivered full PCI DSS Level 2 compliance for a 17-location grocery chain in Illinois — on time, on budget, with zero downtime.",
  alternates: { canonical: "/case-studies/pci-dss-grocery/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/pci-dss-grocery/#article",
  headline: "PCI DSS Compliance for Grocery Chain",
  description: "How Illumia Solutions delivered full PCI DSS Level 2 compliance for a 17-location grocery chain in Illinois — on time, on budget, with zero downtime.",
  url: "https://illumiasolutions.com/case-studies/pci-dss-grocery/",
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/case-study-pci-dss_hero.jpg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
