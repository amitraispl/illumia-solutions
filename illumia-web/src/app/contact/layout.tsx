import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Illumia Solutions for enterprise IT services, cybersecurity, cloud infrastructure, and open-source solutions. Reach our team in Kolkata, India.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
