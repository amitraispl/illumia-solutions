import type { Metadata } from "next";
import OpenSourceSolutionsContent from "./OpenSourceContent";

export const metadata: Metadata = {
  title: "Open Source Solutions",
  description:
    "Illumia Solutions harnesses the power of open-source technologies to deliver tailored infrastructure, application, and cybersecurity solutions.",
};

export default function OpenSourceSolutionsPage() {
  return <OpenSourceSolutionsContent />;
}
