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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919332045178",
    email: "sales@illumiasolutions.com",
    contactType: "sales",
  },
  knowsAbout: [
    "Cloud Infrastructure",
    "Cybersecurity",
    "Proxmox Virtualization",
    "Open Source IT Solutions",
    "PCI DSS Compliance",
    "SIEM and Endpoint Detection",
  ],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Illumia Solutions Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Services", url: "https://illumiasolutions.com/cloud-services/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cyber Security", url: "https://illumiasolutions.com/cyber-security/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Open Source Solutions", url: "https://illumiasolutions.com/open-source-solutions/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development", url: "https://illumiasolutions.com/software-development/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Proxmox VE Migration", url: "https://illumiasolutions.com/proxmox-migration/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infrastructure Solutions", url: "https://illumiasolutions.com/infrastructure-solutions/" } },
    ],
  },
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
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
        <link rel="alternate" type="text/plain" href="https://illumiasolutions.com/llms.txt" title="LLMs.txt" />
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
        <noscript>
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <a href="/">Home</a> · <a href="/cloud-services/">Cloud Services</a> ·{" "}
            <a href="/cyber-security/">Cyber Security</a> · <a href="/open-source-solutions/">Open Source</a> ·{" "}
            <a href="/software-development/">Software Development</a> · <a href="/about/">About</a> ·{" "}
            <a href="/contact/">Contact</a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
