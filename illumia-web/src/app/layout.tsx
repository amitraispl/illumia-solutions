import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Illumia Solutions | Illuminating the Path to Success",
    template: "%s | Illumia Solutions",
  },
  description:
    "At Illumia Solutions, we are dedicated to empowering businesses to achieve their goals through innovative and cost-effective IT solutions in cybersecurity, cloud infrastructure, and open-source technologies.",
  keywords: [
    "IT solutions",
    "cybersecurity",
    "cloud services",
    "infrastructure",
    "Illumia Solutions",
    "Kolkata",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col bg-[#fcf9f8] text-[#1c1b1b]">
        {/* Skip link for keyboard / screen-reader users — WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
