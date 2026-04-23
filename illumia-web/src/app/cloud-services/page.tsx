import type { Metadata } from "next";
import CloudServicesContent from "./CloudContent";

export const metadata: Metadata = {
  title: "Cloud Services",
  description:
    "At Illumia, we specialize in providing comprehensive cloud solutions tailored to meet the dynamic needs of businesses across various industries.",
};

export default function CloudServicesPage() {
  return <CloudServicesContent />;
}
