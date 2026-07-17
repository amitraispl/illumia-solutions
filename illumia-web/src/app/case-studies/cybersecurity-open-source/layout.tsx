import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity with Open Source Stack",
  description: "How Illumia Solutions strengthened cybersecurity and compliance for a major Philippine microfinance institution using an integrated open-source security stack.",
  alternates: { canonical: "/case-studies/cybersecurity-open-source/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/cybersecurity-open-source/#article",
  headline: "Cybersecurity with Open Source Stack",
  description: "How Illumia Solutions strengthened cybersecurity and compliance for a major Philippine microfinance institution using an integrated open-source security stack.",
  url: "https://illumiasolutions.com/case-studies/cybersecurity-open-source/",
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/case-study-cybersecurity_hero.jpg",
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
