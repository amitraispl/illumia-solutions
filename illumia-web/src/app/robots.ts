import type { MetadataRoute } from "next";

const base = "https://illumiasolutions.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
