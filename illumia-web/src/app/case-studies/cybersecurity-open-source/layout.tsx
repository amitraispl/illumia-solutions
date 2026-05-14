import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity with Open Source Stack",
  description: "How Illumia Solutions strengthened cybersecurity and compliance for a major Philippine microfinance institution using an integrated open-source security stack.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
