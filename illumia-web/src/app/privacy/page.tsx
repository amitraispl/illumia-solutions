import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Illumia Solutions",
  description:
    "Privacy Policy for Illumia Solutions — how we collect, use, and protect your personal information.",
};

const EFFECTIVE_DATE = "1 January 2025";
const CONTACT_EMAIL = "sales@illumiasolutions.com";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you contact us through our website, request a quote, or engage our services. This may include:

• Full name and job title
• Company name and industry
• Email address and phone number
• Messages and inquiry details you submit

We also collect certain information automatically when you visit our website, including IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected through standard server logs and analytics tools and is used solely to improve our website and services.`,
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and provide the services you request
• Send service-related communications, including proposals, invoices, and updates
• Improve and optimise our website and service offerings
• Comply with legal obligations and enforce our agreements
• Protect the security and integrity of our systems

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    content: `We may share your information in the following limited circumstances:

• Service providers: We engage trusted third-party vendors (e.g., cloud hosting, email delivery) who process data on our behalf under strict confidentiality agreements.
• Legal requirements: We may disclose information when required by law, court order, or governmental authority.
• Business transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

All third parties with whom we share data are contractually obligated to handle it in accordance with applicable data protection laws.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `As a cybersecurity company, we apply rigorous security practices to protect your data. We implement industry-standard safeguards including encryption in transit (TLS), access controls, and regular security reviews.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.

Contact and inquiry data is typically retained for up to 3 years from the date of last interaction. Client engagement records are retained for the duration of the engagement plus 7 years to comply with applicable legal and financial obligations.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you.
• Correction: Request correction of inaccurate or incomplete data.
• Erasure: Request deletion of your personal data, subject to legal obligations.
• Restriction: Request that we limit processing of your data.
• Portability: Request transfer of your data in a structured, machine-readable format.
• Objection: Object to processing of your data for certain purposes.

To exercise any of these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. These include:

• Essential cookies: Required for the website to function correctly.
• Analytics cookies: Help us understand how visitors interact with our site (e.g., page views, session duration).

You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.`,
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: `Illumia Solutions is headquartered in Kolkata, India. If you are accessing our website from outside India, your information may be transferred to and processed in India or other countries where our service providers operate. By using our website and services, you consent to such transfers in accordance with this policy.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Illumia Solutions
2nd-FR, FL-C, 98/9, Gopal Lal Tagore Rd,
Baranagar, Kolkata — 700036, India

Email: ${CONTACT_EMAIL}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-[#f6f3f2] border-b border-[#e2bebd]/50 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 100% at 100% 50%, rgba(179,28,51,0.05) 0%, transparent 100%)",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 pt-16 pb-14">
          <div className="w-10 h-[3px] bg-[#b31c33] rounded-full mb-7" />
          <span className="font-body pt-6 text-[10px] tracking-[0.32em] uppercase text-[#b31c33] font-bold block mb-4">
            Legal Document
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl text-stone-900 mb-5 leading-tight">
            Privacy{" "}
            <span className="italic font-normal text-stone-400">Policy.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-xs text-stone-400 uppercase tracking-widest">
            <span>Effective {EFFECTIVE_DATE}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300 shrink-0" />
            <span>Illumia Solutions Pvt. Ltd.</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Sidebar ToC */}
        <nav className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-0.5">
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b31c33] font-bold mb-5">
              Contents
            </p>
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-3 font-body text-[12px] text-stone-400 hover:text-stone-800 transition-colors duration-150 py-1.5 px-2 -mx-2 rounded-md hover:bg-stone-50"
              >
                <span className="font-headline italic text-[#b31c33]/40 group-hover:text-[#b31c33] text-[11px] tabular-nums transition-colors shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Body */}
        <article className="lg:col-span-9 divide-y divide-[#e2bebd]/40">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 py-10 first:pt-0">
              <div className="flex items-baseline gap-3.5 mb-4">
                <span className="font-headline italic text-[#b31c33] text-lg leading-none tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h2 className="font-headline text-xl sm:text-2xl text-stone-900 leading-snug">
                  {s.title}
                </h2>
              </div>
              <div className="pl-10">
                <p className="font-body text-[14px] text-[#5a4040] leading-[1.85] whitespace-pre-line">
                  {s.content}
                </p>
              </div>
            </section>
          ))}

          {/* Back link */}
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm text-[#b31c33] hover:text-[#920022] transition-colors font-semibold"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
