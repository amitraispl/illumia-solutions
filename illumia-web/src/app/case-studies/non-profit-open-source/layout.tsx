import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Profit Open Source Transformation",
  description: "How Illumia Solutions helped a leading Philippine microfinance non-profit achieve 50–65% IT cost reduction through a comprehensive open-source infrastructure transformation.",
  alternates: { canonical: "/case-studies/non-profit-open-source/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/non-profit-open-source/#article",
  headline: "Non-Profit Open Source Transformation",
  description: "How Illumia Solutions helped a leading Philippine microfinance non-profit achieve 50–65% IT cost reduction through a comprehensive open-source infrastructure transformation.",
  url: "https://illumiasolutions.com/case-studies/non-profit-open-source/",
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/case-study-nonprofit_hero.jpg",
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
