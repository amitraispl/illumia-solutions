import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Illumia Solutions",
  description:
    "Terms of Service for Illumia Solutions — the conditions governing use of our website and services.",
};

const EFFECTIVE_DATE = "1 January 2025";
const CONTACT_EMAIL = "sales@illumiasolutions.com";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing or using the Illumia Solutions website (illumiasolutions.com) or engaging our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.

These Terms apply to all visitors, clients, and others who access or use our services. We reserve the right to update these Terms at any time. Continued use of our website after changes constitutes acceptance of the revised Terms.`,
  },
  {
    id: "services",
    title: "Services",
    content: `Illumia Solutions provides IT services including, but not limited to, cybersecurity consulting, cloud infrastructure, open-source solutions, managed services, and related professional services.

The specific scope, deliverables, timelines, and pricing for any engagement are defined in a separate Statement of Work (SOW) or Service Agreement executed between Illumia Solutions and the client. In the event of any conflict between these Terms and a signed SOW or Service Agreement, the SOW or Service Agreement shall take precedence.`,
  },
  {
    id: "use-of-website",
    title: "Use of Website",
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use of the website. Prohibited conduct includes:

• Transmitting any unlawful, harmful, or offensive content
• Attempting to gain unauthorised access to any part of our systems
• Uploading or transmitting viruses, malware, or any other malicious code
• Engaging in any conduct that could damage, disable, or impair our website or servers
• Scraping, crawling, or data mining our website without prior written permission

We reserve the right to terminate access to any user who violates these terms.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `All content on the Illumia Solutions website — including text, graphics, logos, icons, images, and software — is the property of Illumia Solutions or its content suppliers and is protected by applicable intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission. Nothing in these Terms grants you any right or licence to use our trademarks, service marks, or trade names.

Deliverables created under a specific client engagement are subject to the intellectual property provisions of the applicable SOW or Service Agreement.`,
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: `In the course of delivering services, both parties may disclose confidential information to the other. Each party agrees to:

• Keep the other party's confidential information strictly confidential
• Not disclose confidential information to third parties without prior written consent
• Use confidential information only for the purposes of the engagement
• Apply at least the same degree of protection as it uses for its own confidential information

This obligation survives the termination of any engagement for a period of three (3) years.`,
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: `Payment terms for services are specified in the applicable SOW or Service Agreement. Unless otherwise agreed in writing:

• Invoices are due within 30 days of the invoice date.
• Late payments may be subject to interest at 1.5% per month on the outstanding balance.
• Illumia Solutions reserves the right to suspend services for accounts overdue by more than 30 days.
• All fees are exclusive of applicable taxes, which shall be borne by the client.`,
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: `Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or timeliness of any content on our website.`,
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, Illumia Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services — even if we have been advised of the possibility of such damages.

Our total liability to you for any claims arising from these Terms or the use of our services shall not exceed the amount paid by you to Illumia Solutions in the twelve (12) months preceding the claim.`,
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Illumia Solutions, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or related to:

• Your use of our website or services in violation of these Terms
• Your violation of any applicable law or regulation
• Your infringement of any third-party rights`,
  },
  {
    id: "governing-law",
    title: "Governing Law and Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.

Any disputes arising from or related to these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in Kolkata, West Bengal, India. Prior to initiating legal proceedings, the parties agree to attempt resolution through good-faith negotiation for a period of 30 days.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We reserve the right to terminate or suspend your access to our website at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.

Provisions of these Terms that by their nature should survive termination — including intellectual property, confidentiality, disclaimer of warranties, limitation of liability, and governing law — shall survive any termination.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have questions about these Terms of Service, please contact us:

Illumia Solutions
2nd-FR, FL-C, 98/9, Gopal Lal Tagore Rd,
Baranagar, Kolkata — 700036, India

Email: ${CONTACT_EMAIL}`,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#f6f3f2] min-h-screen">

      {/* Header */}
      <div className="bg-[#1c1b1b] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(179,28,51,0.08) 0%, transparent 100%)",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 py-20">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#b31c33] font-bold block mb-5">
            Legal
          </span>
          <h1 className="font-headline text-5xl md:text-6xl text-white mb-5">
            Terms of <span className="italic font-normal text-white/50">Service.</span>
          </h1>
          <p className="font-body text-stone-400 text-sm leading-relaxed max-w-xl">
            Effective date: {EFFECTIVE_DATE}. These Terms govern your use of the Illumia Solutions website and services. Please read them carefully.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Sidebar ToC */}
        <nav className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-8 flex flex-col gap-1">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#b31c33] font-bold mb-4">
              Contents
            </p>
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-2.5 font-body text-[12px] text-stone-500 hover:text-[#b31c33] transition-colors duration-150 py-1"
              >
                <span className="font-headline italic text-[#b31c33]/40 group-hover:text-[#b31c33] text-xs tabular-nums transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Body */}
        <article className="lg:col-span-9 flex flex-col gap-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-headline italic text-[#b31c33] text-xl leading-none tabular-nums shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h2 className="font-headline text-2xl text-stone-900">{s.title}</h2>
              </div>
              <div className="pl-9 border-l-2 border-[#e2bebd]/60 ml-[10px]">
                <p className="font-body text-[14px] text-[#5a4040] leading-[1.85] whitespace-pre-line">
                  {s.content}
                </p>
              </div>
            </section>
          ))}

          {/* Back link */}
          <div className="pt-6 border-t border-[#e2bebd]/40">
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
