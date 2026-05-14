import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCI DSS Compliance for Grocery Chain",
  description: "How Illumia Solutions delivered full PCI DSS Level 2 compliance for a 17-location grocery chain in Illinois — on time, on budget, with zero downtime.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
