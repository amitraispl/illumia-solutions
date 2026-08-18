import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Governance — EU AI Act Compliance & Responsible AI",
  description:
    "Structured AI governance programs covering risk classification, bias and fairness auditing, EU AI Act alignment, model accountability, AI incident response, and regulatory reporting. Deploy AI with confidence, not liability.",
  alternates: {
    canonical: "/ai-governance/",
    languages: { "en": "https://illumiasolutions.com/ai-governance/", "x-default": "https://illumiasolutions.com/ai-governance/" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://illumiasolutions.com/ai-governance/#service",
  name: "AI Governance",
  serviceType: "Responsible AI",
  description:
    "Structured AI governance programs covering risk classification, bias and fairness auditing, EU AI Act alignment, model accountability, AI incident response, and regulatory reporting. Deploy AI with confidence, not liability.",
  url: "https://illumiasolutions.com/ai-governance/",
  provider: { "@id": "https://illumiasolutions.com/#organization" },
};

export default function AIGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RichServicePageTemplate
      badge="Responsible AI"
      title="Govern AI Before It"
      titleHighlight="Governs You."
      description="The EU AI Act is live. AI systems are proliferating across enterprises at a pace regulators are scrambling to match. Most organisations have no governance framework — no risk classification, no model inventory, no audit trail, no accountability layer. Illumia builds structured AI governance programs aligned with the EU AI Act, NIST AI RMF, and ISO/IEC 42001 — so you can deploy AI with confidence, not liability."
      sectionTitle="What the Program Covers"
      ctaText="Build Your AI Governance"
      heroImage="/images/ai-governance/hero.jpg"
      darkHero={true}
      closingText="The window to operate AI without a governance framework has closed. The EU AI Act applies extraterritorially — any organisation placing AI systems on the EU market or whose outputs are used in the EU is in scope. Illumia's program gives you a defensible position: classified risk, documented controls, auditable decisions. Whether you are deploying generative AI internally, embedding ML in customer products, or procuring AI from third-party vendors, the same governance layer applies."
      features={[
        {
          title: "Risk Classification",
          items: [
            {
              label: "EU AI Act Tiering",
              text: "Classify every AI system against the EU AI Act's four-tier model — unacceptable, high-risk, limited-risk, and minimal-risk — with documented rationale and evidence.",
            },
            {
              label: "Use-Case Inventory",
              text: "Maintain a living register of every AI system in use, including third-party SaaS, embedded ML, and shadow-IT models — the foundation of every other control.",
            },
          ],
        },
        {
          title: "Bias & Fairness Auditing",
          items: [
            {
              label: "Disparate Impact Testing",
              text: "Quantitative testing of model outputs across protected attributes — age, gender, ethnicity, geography — using statistical fairness metrics.",
            },
            {
              label: "Mitigation Playbooks",
              text: "Pre-processing, in-processing, and post-processing remediation strategies, with documented trade-offs and sign-off from product and legal.",
            },
          ],
        },
        {
          title: "EU AI Act Alignment",
          items: [
            {
              label: "Article-Level Mapping",
              text: "Map your AI systems against the Act's obligations — risk management (Art. 9), data governance (Art. 10), transparency (Art. 13), human oversight (Art. 14), and post-market monitoring (Art. 72).",
            },
            {
              label: "Technical Documentation",
              text: "Produce the technical documentation package required by Annex IV for high-risk systems, with version control and audit trail.",
            },
          ],
        },
        {
          title: "Model Accountability",
          items: [
            {
              label: "Model Cards & Datasheets",
              text: "Standardised model cards (Mitchell et al.) and dataset datasheets (Gebru et al.) for every production model — disclosing training data, intended use, and known limitations.",
            },
            {
              label: "Approval Workflows",
              text: "Formal model approval gates with sign-off from data science, security, legal, and business owner — captured in a tamper-evident log.",
            },
          ],
        },
        {
          title: "AI Incident Response",
          items: [
            {
              label: "Incident Playbooks",
              text: "Detection, triage, containment, and remediation procedures for model drift, harmful outputs, prompt injection, and data leakage incidents.",
            },
            {
              label: "Regulator Notification",
              text: "Pre-built notification templates for Article 73 serious incident reporting to national competent authorities within the 15-day window.",
            },
          ],
        },
        {
          title: "Data Governance for AI",
          items: [
            {
              label: "Training Data Provenance",
              text: "Track lineage of every dataset used in training — source, licence, consent basis, retention, and deletion. Aligns with GDPR Article 5 and EU AI Act Article 10.",
            },
            {
              label: "Synthetic Data Controls",
              text: "Policies for synthetic data generation, including disclosure obligations, evaluation against original distributions, and risk of memorisation.",
            },
          ],
        },
        {
          title: "Human Oversight",
          items: [
            {
              label: "Oversight Design",
              text: "Define meaningful human-in-the-loop, human-on-the-loop, and human-in-command roles per use case — with override authority and competence requirements.",
            },
            {
              label: "Operator Training",
              text: "Targeted training for staff exercising oversight — covering automation bias, interpretation of model confidence, and escalation paths.",
            },
          ],
        },
        {
          title: "Vendor & Procurement",
          items: [
            {
              label: "AI Supplier Due Diligence",
              text: "Questionnaires and contract clauses for AI vendors — model provenance, indemnities, audit rights, and EU AI Act obligation flow-down.",
            },
            {
              label: "GPAI Provider Obligations",
              text: "If you fine-tune or substantially modify a general-purpose AI model, you inherit provider obligations. We map where that line falls for your deployments.",
            },
          ],
        },
        {
          title: "Regulatory Reporting",
          items: [
            {
              label: "EU AI Database Registration",
              text: "Prepare and submit the registration package for high-risk AI systems to the EU AI database under Article 49.",
            },
            {
              label: "Ongoing Compliance",
              text: "Post-market monitoring plan, conformity assessment refresh cycle, and reporting cadence to align with both EU AI Act and ISO/IEC 42001 management system requirements.",
            },
          ],
        },
      ]}
      />
    </>
  );
}
