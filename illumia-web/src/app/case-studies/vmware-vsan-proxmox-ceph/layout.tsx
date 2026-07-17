import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp",
  description:
    "How Illumia Solutions migrated Data Consultants Corporation from VMware vSphere with vSAN to Proxmox VE with Ceph — a phased node-liberation strategy on existing hardware, sub-24-hour downtime, and PBS replacing Veeam.",
  alternates: { canonical: "/case-studies/vmware-vsan-proxmox-ceph/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://illumiasolutions.com/case-studies/vmware-vsan-proxmox-ceph/#article",
  headline: "VMware vSAN to Proxmox VE Ceph Migration — Data Consultants Corp",
  description:
    "How Illumia Solutions migrated Data Consultants Corporation from VMware vSphere with vSAN to Proxmox VE with Ceph — a phased node-liberation strategy on existing hardware, sub-24-hour downtime, and PBS replacing Veeam.",
  url: "https://illumiasolutions.com/case-studies/vmware-vsan-proxmox-ceph/",
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  publisher: { "@id": "https://illumiasolutions.com/#organization" },
  image: "https://illumiasolutions.com/images/case-studies/dcc-hero.jpg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
