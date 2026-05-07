"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type CategoryId = "cloud" | "security" | "open-source";

const categories: { id: CategoryId; label: string }[] = [
  { id: "cloud", label: "Cloud Services" },
  { id: "security", label: "Cybersecurity" },
  { id: "open-source", label: "Open Source" },
];

const faqData: Record<CategoryId, { q: string; a: string }[]> = {
  cloud: [
    {
      q: "What industries does Illumia Solutions cater to?",
      a: "Illumia Solutions provides cloud services to a wide range of industries, including healthcare, finance, retail, education, and more. Our solutions are tailored to meet the specific needs and regulatory requirements of each sector.",
    },
    {
      q: "Can Illumia Solutions support hybrid cloud environments?",
      a: "Yes, Illumia Solutions offers hybrid cloud solutions that integrate public cloud and on-premises environments. This approach provides flexibility, allowing businesses to leverage the benefits of both setups.",
    },
    {
      q: "What kind of customer support does Illumia Solutions provide?",
      a: "Illumia Solutions offers 24/7 customer support, including technical assistance, troubleshooting, and proactive monitoring. Our team of experts is always available to help resolve any issues and ensure smooth operations.",
    },
    {
      q: "How does Illumia Solutions ensure high availability and uptime?",
      a: "Illumia Solutions guarantees a 99.9% uptime for our services. We achieve this through advanced redundancy protocols, proactive monitoring, and a robust infrastructure designed for high availability.",
    },
    {
      q: "Can I customize my cloud services with Illumia Solutions?",
      a: "Yes, Illumia Solutions offers customizable cloud services. Clients can choose specific configurations for VPS, physical servers, containers, and virtual desktops to match their unique business requirements.",
    },
    {
      q: "What are the cost management features offered by Illumia Solutions?",
      a: "Illumia Solutions provides cost-efficient cloud services with features like no data transfer charges, straightforward monthly billing, and resource allocation optimization. This transparency helps businesses manage their budgets effectively.",
    },
    {
      q: "Does Illumia Solutions offer training for cloud services?",
      a: "Yes, Illumia Solutions provides training sessions for clients internal IT staff to enhance their skills and knowledge. This ensures that businesses can effectively manage and maintain their cloud infrastructure.",
    },
    {
      q: "How can Illumia Solutions assist with cybersecurity threats?",
      a: "Illumia Solutions offers comprehensive cybersecurity services, including EDR, DLP, SIEM, PAM, and honeypot systems. These solutions help detect, prevent, and respond to cyber threats, ensuring robust protection for your data.",
    },
    {
      q: "What makes Illumia Solutions migration services seamless?",
      a: "Illumia Solutions uses automated tools and best practices to ensure efficient migration processes. Our services include thorough assessments, customized migration strategies, and minimal disruption to business operations during the transition.",
    },
    {
      q: "What disaster recovery options does Illumia Solutions provide?",
      a: "Illumia Solutions offers flexible and scalable disaster recovery (DR) solutions. These include secured remote access, VPN connectivity, comprehensive monitoring, failover orchestration, and regular disaster recovery drills to ensure business continuity.",
    },
  ],
  security: [
    {
      q: "How does Illumia Solutions handle IT risk and security strategy development for a diverse range of industries?",
      a: "Illumia Solutions customizes IT risk and security strategies to fit the unique needs of various industries by leveraging industry-specific frameworks and conducting thorough program assessments. This ensures that all potential vulnerabilities and compliance requirements are addressed effectively.",
    },
    {
      q: "What steps are involved in a comprehensive vulnerability management process?",
      a: "Our vulnerability management process includes identifying potential threats through continuous monitoring, evaluating the severity and impact of each vulnerability, prioritizing remediation efforts, and implementing security patches or controls to mitigate risks.",
    },
    {
      q: "Can Illumia Solutions help in developing a BYOD (Bring Your Own Device) policy for my company?",
      a: "Yes, we assist in developing comprehensive BYOD strategies and policies that ensure personal devices used for work meet corporate security standards. This includes implementing device encryption, remote wipe capabilities, and secure access controls to protect corporate data.",
    },
    {
      q: "What measures does Illumia Solutions take to ensure data compliance in cloud environments?",
      a: "To ensure data compliance in cloud environments, we perform thorough cloud application assessments, implement robust encryption methods, establish secure data transfer protocols, and continuously monitor cloud data management practices to adhere to regulations such as GDPR, HIPAA, and PCI-DSS.",
    },
    {
      q: "How can Illumia Solutions help mitigate the risks associated with remote work?",
      a: "Illumia Solutions can help mitigate the risks associated with remote work by implementing secure remote access solutions, conducting security awareness training for employees, and establishing strong authentication methods. We also provide continuous monitoring and incident response to detect and address any security breaches quickly.",
    },
    {
      q: "What are the key components of Illumia Solutions mobile security services?",
      a: "Our mobile security services include comprehensive assessments of mobile applications to identify vulnerabilities, developing and implementing BYOD strategies and policies, enhancing the maturity of mobile security frameworks, and performing mobile device forensics to investigate and address security incidents effectively.",
    },
    {
      q: "What kind of support does Illumia Solutions offer for continuous security monitoring?",
      a: "We offer continuous security monitoring services that include real-time threat detection, incident response, and regular security assessments. Our team provides ongoing maintenance and support to ensure that your security measures are up-to-date and effective against emerging threats.",
    },
    {
      q: "How does Illumia Solutions help businesses achieve and maintain PCI-DSS compliance?",
      a: "We assist businesses in achieving PCI-DSS compliance by conducting gap analyses, developing and implementing security policies, and providing continuous monitoring and support. Our services ensure that cardholder data is protected, and all compliance requirements are met.",
    },
    {
      q: "What are the benefits of conducting a mobile device forensics investigation?",
      a: "Mobile device forensics investigations help identify and analyze security incidents on mobile devices. This includes uncovering data breaches, tracing unauthorized access, and gathering evidence for legal or internal investigations, ensuring a comprehensive response to mobile security threats.",
    },
    {
      q: "How does Illumia Solutions address the challenge of balancing security and usability in application security?",
      a: "We address this challenge by implementing security measures that do not compromise user experience. This includes designing secure application architectures, conducting usability testing, and ensuring that security controls are user-friendly and do not hinder the application functionality.",
    },
  ],
  "open-source": [
    {
      q: "Why should I choose open-source solutions over proprietary software?",
      a: "Open-source solutions offer several advantages including cost-effectiveness, flexibility, and transparency. They eliminate licensing fees, provide the ability to customize and adapt the software to your specific needs, and benefit from community-driven improvements and security updates. Illumia Solutions leverages the best open-source technologies to deliver tailored and innovative IT solutions for your business.",
    },
    {
      q: "Can Illumia Solutions integrate with my existing IT infrastructure?",
      a: "Yes, Illumia Solutions services are designed to seamlessly integrate with your existing IT infrastructure. Whether it is our SIEM solutions, SOAR capabilities, or cloud storage options, we ensure that our solutions work cohesively with your current systems to enhance overall efficiency and security.",
    },
    {
      q: "How does Illumia Solutions ensure data security in cloud storage?",
      a: "We implement robust security measures such as end-to-end encryption, two-factor authentication, and regular security updates. Additionally, our cloud storage solutions with Nextcloud ensure that data is stored securely and accessed only by authorized users.",
    },
    {
      q: "How does Illumia Solutions SDN and SD-WAN enhance network performance?",
      a: "Our SDN and SD-WAN solutions utilize advanced networking technologies to eliminate the need for traditional central controllers. This approach enhances network resilience, reduces latency, and simplifies network management, ensuring high performance and reliable connectivity.",
    },
    {
      q: "What are the benefits of using honeypots in cybersecurity?",
      a: "Honeypots help detect and analyze unauthorized access attempts, providing valuable insights into potential threats. By deploying honeypots, Illumia Solutions can identify attack patterns, understand the tactics used by attackers, and enhance overall cybersecurity measures.",
    },
    {
      q: "How does Illumia Solutions support collaboration within organizations?",
      a: "We offer comprehensive collaboration solutions including secure email services, real-time collaborative editing tools, high-quality web-meeting solutions, and scalable cloud storage. These tools facilitate seamless communication and teamwork, improving productivity and efficiency.",
    },
    {
      q: "What makes Illumia Solutions EDR solutions effective?",
      a: "Our Endpoint Detection and Response (EDR) solutions powered by OpenEDR offer real-time threat detection, behavioral analysis, and comprehensive endpoint protection. This ensures that all devices within your organization are continuously monitored and protected against cyber threats.",
    },
    {
      q: "How do Illumia Solutions project management tools improve efficiency?",
      a: "Our project management solutions with Redmine, Zammad, and OpenProject provide features like multi-project support, customizable workflows, time tracking, Gantt charts, and role-based access control. These tools help streamline project execution, enhance collaboration, and ensure timely delivery of project milestones.",
    },
    {
      q: "What is the role of vulnerability management in cybersecurity?",
      a: "Vulnerability management involves identifying, evaluating, and mitigating security weaknesses within your IT infrastructure. Illumia Solutions uses OpenVAS to perform thorough scans, provide detailed reports, and implement risk management strategies to protect your systems from potential threats.",
    },
    {
      q: "What kind of support does Illumia Solutions provide after implementation?",
      a: "Illumia Solutions offers ongoing support and maintenance to ensure your systems operate smoothly and securely. Our expert team is available to assist with troubleshooting, updates, and any other needs that arise, ensuring continuous performance and security for your IT infrastructure.",
    },
  ],
};

const categoryImages: Record<CategoryId, { src: string; alt: string; caption: string }> = {
  cloud: {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80",
    alt: "Illuminated data centre corridor",
    caption: "Cloud infrastructure — built for availability and scale.",
  },
  security: {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    alt: "Security operations centre dashboards",
    caption: "Cybersecurity — detecting, preventing, responding.",
  },
  "open-source": {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
    alt: "Open-source code on screen",
    caption: "Open source — freedom, transparency, control.",
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e2bebd]/40">
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-headline text-lg text-stone-900 leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="shrink-0 w-6 h-6 rounded-full border-2 border-[#b31c33] flex items-center justify-center"
          aria-hidden="true"
        >
          <svg className="w-3 h-3 text-[#b31c33]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", transition: { duration: 0.35, ease: EASE } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.22, ease: EASE } }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#5a4040] font-body leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("cloud");

  return (
    <>
      {/* Hero — split text/image layout */}
      <PageHero
        badge="Knowledge Base"
        title={
          <>
            Frequently Asked{" "}
            <span className="italic text-[#b31c33]">Questions</span>
          </>
        }
        description="Answers to the questions our clients ask most often — covering our cloud services, cybersecurity portfolio, and open-source solutions."
        primaryCta={{ label: "Browse Topics", href: "#topics" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Illumia Solutions knowledge base — connected systems"
      />

      {/* FAQ Body */}
      <section id="topics" className="bg-white py-24 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Sidebar: Categories + image */}
            <div className="lg:col-span-3">
              <div className="mb-7">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#b31c33] font-bold">Browse by</span>
                <h2 className="font-headline text-3xl font-bold text-stone-900 mt-0.5">Categories</h2>
              </div>
              <nav aria-label="FAQ categories" className="flex flex-row lg:flex-col gap-2 lg:gap-1.5 flex-wrap mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                    className={`text-left font-body text-base font-semibold py-3.5 px-5 rounded-xl transition-all duration-200 w-full ${
                      activeCategory === cat.id
                        ? "bg-[#b31c33] text-white shadow-md shadow-[#b31c33]/20"
                        : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </nav>

              {/* Category image */}
              <AnimatePresence mode="wait">
                <motion.figure
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="hidden lg:block"
                >
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src={categoryImages[activeCategory].src}
                      alt={categoryImages[activeCategory].alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <figcaption className="absolute bottom-5 left-5 right-5 text-white font-body text-sm leading-snug">
                      {categoryImages[activeCategory].caption}
                    </figcaption>
                  </div>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.22, ease: EASE } }}
                >
                  {faqData[activeCategory].map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}

                  {/* Guidance card */}
                  <div className="mt-12 rounded-2xl bg-[#f6f3f2] border border-[#e2bebd]/40 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block opacity-20">
                      <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative">
                      <h3 className="font-headline text-2xl text-stone-900 mb-2">
                        Need specific guidance?
                      </h3>
                      <p className="font-body text-sm text-[#5a4040] leading-relaxed max-w-md">
                        If your question is not listed here, our consultants are
                        available for direct technical consultations.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="relative shrink-0 inline-block bg-[#b31c33] text-white px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 transition-colors duration-200 active:scale-95"
                    >
                      Contact Expertise
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
