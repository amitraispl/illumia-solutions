import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Profit Open Source Transformation",
  description: "How Illumia Solutions helped a leading Philippine microfinance non-profit achieve 50–65% IT cost reduction through a comprehensive open-source infrastructure transformation.",
  alternates: { canonical: "/case-studies/non-profit-open-source/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
