import type { Metadata } from "next";
import RichServicePageTemplate from "@/components/RichServicePageTemplate";

export const metadata: Metadata = {
  title: "Honeypot as a Service — Your Last Line of Defense | Illumia Solutions",
  description:
    "Honeypot as a Service by Illumia Solutions — deceptive security systems that detect, analyze, and respond to threats that bypass your primary defenses. Expert-managed, 24/7.",
};

export default function HoneypotAsAServicePage() {
  return (
    <RichServicePageTemplate
      badge="Cyber Security Services"
      title="Honeypot as a Service —"
      titleHighlight="Your Last Line of Defense."
      description="As cybersecurity threats continue to evolve, businesses must implement advanced strategies to safeguard their data and assets. Illumia Solutions' Honeypot as a Service deploys deceptive systems that mimic legitimate targets — attracting attackers, gathering intelligence on their methods, and catching threats that bypass your primary defenses."
      sectionTitle="What We Offer"
      ctaText="Secure Your Business"
      heroImage="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1400&q=85&auto=format&fit=crop"
      darkHero={true}
      closingText="Protect your business with our Honeypot as a Service and gain peace of mind knowing that your cybersecurity is in expert hands. Contact us today to learn more about how we can help secure your digital assets."
      features={[
        {
          title: "What is a Honeypot?",
          items: [
            {
              label: "Deceptive by Design",
              text: "A honeypot is a decoy system that mimics a legitimate target to lure attackers. It records everything the attacker does — revealing their tools, techniques, and intentions.",
            },
            {
              label: "Intelligence at the Source",
              text: "Rather than simply blocking attacks, honeypots let you observe them in a controlled environment, turning threat actors' actions into actionable intelligence for your security team.",
            },
          ],
        },
        {
          title: "Your Last Line of Defense",
          items: [
            {
              label: "Beyond Firewalls & Antivirus",
              text: "Honeypots complement your primary defenses — firewalls, antivirus, and intrusion detection — by catching sophisticated threats that slip through initial protections.",
            },
            {
              label: "Detect the Undetectable",
              text: "Advanced attackers often evade conventional tools. Honeypots are purpose-built to detect these actors, understand their behavior, and reduce the risk of a successful breach.",
            },
          ],
        },
        {
          title: "Low-Interaction Honeypots",
          items: [
            {
              label: "Lightweight & Fast",
              text: "Low-interaction honeypots simulate basic services with minimal resource overhead — ideal for rapid deployment and broad network coverage without significant infrastructure investment.",
            },
            {
              label: "Early Warning System",
              text: "Capture reconnaissance and automated scanning activity early, giving your team early warning of potential intrusions before attackers reach critical assets.",
            },
          ],
        },
        {
          title: "High-Interaction Honeypots",
          items: [
            {
              label: "Deep Attacker Engagement",
              text: "High-interaction honeypots fully simulate production systems, drawing attackers in for extended sessions and capturing detailed intelligence on their tactics and techniques.",
            },
            {
              label: "Rich Threat Intelligence",
              text: "The depth of engagement yields rich, actionable data — from exploit chains to lateral movement patterns — that informs your broader security strategy.",
            },
          ],
        },
        {
          title: "Distributed Honeypot Networks",
          items: [
            {
              label: "Multi-Location Coverage",
              text: "Deploy honeypots across multiple network segments and geographic locations to detect threats across your entire infrastructure simultaneously.",
            },
            {
              label: "Correlated Threat Detection",
              text: "Correlate activity across distributed honeypots to identify coordinated attacks and campaign-level threats that single-point solutions miss.",
            },
          ],
        },
        {
          title: "Managed for Offices Without IT",
          items: [
            {
              label: "Designed for SMBs",
              text: "Our service is specifically designed for small and medium businesses that lack dedicated internal IT security staff — we handle everything on your behalf.",
            },
            {
              label: "Cost-Effective Expert Management",
              text: "Get enterprise-grade honeypot protection at a fraction of the cost of in-house deployment, with proactive threat detection managed by our security experts.",
            },
          ],
        },
        {
          title: "24/7 Expert Monitoring",
          items: [
            {
              label: "Always-On Surveillance",
              text: "Our security team monitors your honeypot environment around the clock, ensuring that any detected threat triggers an immediate response.",
            },
            {
              label: "Rapid Incident Response",
              text: "When a honeypot flags suspicious activity, our experts analyse the threat and provide actionable guidance to contain and remediate it swiftly.",
            },
          ],
        },
        {
          title: "Comprehensive Threat Reporting",
          items: [
            {
              label: "Detailed Attack Reports",
              text: "Receive comprehensive reports detailing attacker behavior, attack vectors used, and the intelligence gathered — presented clearly for both technical and executive audiences.",
            },
            {
              label: "Routine Updates & Improvements",
              text: "We continuously update your honeypot configurations to reflect the latest threat landscape, ensuring your deception environment remains effective against emerging attack methods.",
            },
          ],
        },
      ]}
    />
  );
}
