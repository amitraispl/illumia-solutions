import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
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
  description:
    "Illumia Solutions is a certified Proxmox Silver Partner based in Kolkata, India, delivering enterprise-grade cybersecurity, cloud infrastructure, and open-source IT services for businesses across India, the USA, Australia, and beyond. CISA, CISSP, CEH, CCIE certified team with 20+ years of collective industry experience.",
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
  logo: "https://illumiasolutions.com/images/logos/illumia-logo.png",
  image: "https://illumiasolutions.com/images/logos/illumia-logo.png",
  sameAs: [
    "https://www.linkedin.com/company/illumia-solutions-pvt-ltd/",
    "https://www.proxmox.com/en/partners/find-partner/all/partner/illumia-solutions",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://illumiasolutions.com/#website",
  url: "https://illumiasolutions.com",
  name: "Illumia Solutions",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://illumiasolutions.com"),
  title: {
    default: "Illumia Solutions | Enterprise IT Services — Cloud, Cybersecurity & Open Source",
    template: "%s | Illumia Solutions",
  },
  description:
    "Enterprise-grade cybersecurity, cloud infrastructure, and open-source IT services for businesses across India, the USA, Australia, and beyond. Proxmox Silver Partner. CISA, CISSP, CEH, CCIE certified team with 20+ years of collective industry experience.",
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    type: "website",
    siteName: "Illumia Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b31c33",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", inter.variable, newsreader.variable)}>
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <SmoothScroll />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
