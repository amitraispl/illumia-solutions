import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Illumia Solutions | Enterprise IT Services",
    short_name: "Illumia Solutions",
    description:
      "Enterprise-grade cybersecurity, cloud infrastructure, and open-source IT services.",
    start_url: "/",
    display: "browser",
    background_color: "#fcf9f8",
    theme_color: "#b31c33",
    icons: [
      {
        src: "/images/icons/illumia-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icons/illumia-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
