import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity with Open Source Stack",
  description: "How Illumia Solutions strengthened cybersecurity and compliance for a major Philippine microfinance institution using an integrated open-source security stack.",
  alternates: {
    canonical: "/case-studies/cybersecurity-open-source/",
    languages: { "en": "https://illumiasolutions.com/case-studies/cybersecurity-open-source/", "x-default": "https://illumiasolutions.com/case-studies/cybersecurity-open-source/" },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/cybersecurity-open-source/#article",
  headline: "Cybersecurity with Open Source Stack",
  description: "How Illumia Solutions strengthened cybersecurity and compliance for a major Philippine microfinance institution using an integrated open-source security stack.",
  url: "https://illumiasolutions.com/case-studies/cybersecurity-open-source/",
  datePublished: "2026-05-14",
  dateModified: "2026-08-08",
  author: { "@id": "https://illumiasolutions.com/#organization" },
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/case-study-cybersecurity_hero.jpg",
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
      "name": "Case Studies",
      "item": "https://illumiasolutions.com/case-studies/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cybersecurity with Open Source Stack",
      "item": "https://illumiasolutions.com/case-studies/cybersecurity-open-source/"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
