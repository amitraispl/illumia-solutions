import type { Metadata } from "next";
import CyberSecurityContent from "./CyberContent";

export const metadata: Metadata = {
  title: "Cyber Security Services",
  description:
    "Protect your business with Illumia Solutions' comprehensive cyber security services, ensuring data privacy, regulatory compliance, and robust protection against cyber threats.",
};

export default function CyberSecurityPage() {
  return <CyberSecurityContent />;
}
