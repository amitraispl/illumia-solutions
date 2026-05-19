import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Newsreader } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300','400','500','600','700'],
  variable: '--font-newsreader',
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://illumiasolutions.com/#organization",
  name: "Illumia Solutions",
  alternateName: "Illumia Solutions Pvt. Ltd.",
  url: "https://illumiasolutions.com",
  telephone: "+919332045178",
  email: "sales@illumiasolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "98/9 Gopal Lal Tagore Rd, Baranagar",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700036",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Philippines" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Mozambique" },
  ],
  sameAs: ["https://amitraispl.github.io/illumia-solutions/"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://illumiasolutions.com"),
  title: {
    default: "Illumia Solutions | Enterprise IT Services — Cloud, Cybersecurity & Open Source",
    template: "%s | Illumia Solutions",
  },
  description:
    "Enterprise-grade cybersecurity, cloud infrastructure, and open-source IT services for businesses across India, the USA, Australia, and beyond. Proxmox Silver Partner. CISA, CISSP, CEH, CCIE certified team with 20+ years of collective industry experience.",
  keywords: [
    "IT services India",
    "cybersecurity services",
    "enterprise cloud solutions",
    "open source IT",
    "managed IT services Kolkata",
    "Illumia Solutions",
    "MSSP India",
  ],
  openGraph: {
    type: "website",
    siteName: "Illumia Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", inter.variable, newsreader.variable)}>
      <body className="min-h-full flex flex-col bg-[#fcf9f8] text-[#1c1b1b] selection:bg-primary-container selection:text-on-primary-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
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
