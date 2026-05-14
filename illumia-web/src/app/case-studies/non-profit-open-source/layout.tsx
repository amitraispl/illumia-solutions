import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Profit Open Source Transformation",
  description: "How Illumia Solutions helped a leading Philippine microfinance non-profit achieve 50–65% IT cost reduction through a comprehensive open-source infrastructure transformation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
