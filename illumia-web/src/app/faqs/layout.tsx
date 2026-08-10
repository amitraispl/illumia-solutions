import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Cloud Services, Cybersecurity & Open Source",
  description:
    "Answers to 30 common questions about Illumia Solutions' cloud services, cybersecurity portfolio, and open-source solutions — covering hybrid cloud, PCI-DSS compliance, EDR, BYOD security, Nextcloud, and more.",
  alternates: { canonical: "/faqs/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does Illumia Solutions cater to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions provides cloud services to a wide range of industries, including healthcare, finance, retail, education, and more. Our solutions are tailored to meet the specific needs and regulatory requirements of each sector.",
      },
    },
    {
      "@type": "Question",
      name: "Can Illumia Solutions support hybrid cloud environments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Illumia Solutions offers hybrid cloud solutions that integrate public cloud and on-premises environments. This approach provides flexibility, allowing businesses to leverage the benefits of both setups.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of customer support does Illumia Solutions provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions offers 24/7 customer support, including technical assistance, troubleshooting, and proactive monitoring. Our team of experts is always available to help resolve any issues and ensure smooth operations.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions ensure high availability and uptime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions guarantees a 99.9% uptime for our services. We achieve this through advanced redundancy protocols, proactive monitoring, and a robust infrastructure designed for high availability.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize my cloud services with Illumia Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Illumia Solutions offers customizable cloud services. Clients can choose specific configurations for VPS, physical servers, containers, and virtual desktops to match their unique business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What are the cost management features offered by Illumia Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions provides cost-efficient cloud services with features like no data transfer charges, straightforward monthly billing, and resource allocation optimization. This transparency helps businesses manage their budgets effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Does Illumia Solutions offer training for cloud services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Illumia Solutions provides training sessions for clients' internal IT staff to enhance their skills and knowledge. This ensures that businesses can effectively manage and maintain their cloud infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How can Illumia Solutions assist with cybersecurity threats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions offers comprehensive cybersecurity services, including EDR, DLP, SIEM, PAM, and honeypot systems. These solutions help detect, prevent, and respond to cyber threats, ensuring robust protection for your data.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Illumia Solutions migration services seamless?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions uses automated tools and best practices to ensure efficient migration processes. Our services include thorough assessments, customized migration strategies, and minimal disruption to business operations during the transition.",
      },
    },
    {
      "@type": "Question",
      name: "What disaster recovery options does Illumia Solutions provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions offers flexible and scalable disaster recovery solutions. These include secured remote access, VPN connectivity, comprehensive monitoring, failover orchestration, and regular disaster recovery drills to ensure business continuity.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions handle IT risk and security strategy development for a diverse range of industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions customizes IT risk and security strategies to fit the unique needs of various industries by leveraging industry-specific frameworks and conducting thorough program assessments. This ensures that all potential vulnerabilities and compliance requirements are addressed effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What steps are involved in a comprehensive vulnerability management process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our vulnerability management process includes identifying potential threats through continuous monitoring, evaluating the severity and impact of each vulnerability, prioritizing remediation efforts, and implementing security patches or controls to mitigate risks.",
      },
    },
    {
      "@type": "Question",
      name: "Can Illumia Solutions help in developing a BYOD (Bring Your Own Device) policy for my company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we assist in developing comprehensive BYOD strategies and policies that ensure personal devices used for work meet corporate security standards. This includes implementing device encryption, remote wipe capabilities, and secure access controls to protect corporate data.",
      },
    },
    {
      "@type": "Question",
      name: "What measures does Illumia Solutions take to ensure data compliance in cloud environments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To ensure data compliance in cloud environments, we perform thorough cloud application assessments, implement robust encryption methods, establish secure data transfer protocols, and continuously monitor cloud data management practices to adhere to regulations such as GDPR, HIPAA, and PCI-DSS.",
      },
    },
    {
      "@type": "Question",
      name: "How can Illumia Solutions help mitigate the risks associated with remote work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions can help mitigate the risks associated with remote work by implementing secure remote access solutions, conducting security awareness training for employees, and establishing strong authentication methods. We also provide continuous monitoring and incident response to detect and address any security breaches quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key components of Illumia Solutions mobile security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our mobile security services include comprehensive assessments of mobile applications to identify vulnerabilities, developing and implementing BYOD strategies and policies, enhancing the maturity of mobile security frameworks, and performing mobile device forensics to investigate and address security incidents effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of support does Illumia Solutions offer for continuous security monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer continuous security monitoring services that include real-time threat detection, incident response, and regular security assessments. Our team provides ongoing maintenance and support to ensure that your security measures are up-to-date and effective against emerging threats.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions help businesses achieve and maintain PCI-DSS compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We assist businesses in achieving PCI-DSS compliance by conducting gap analyses, developing and implementing security policies, and providing continuous monitoring and support. Our services ensure that cardholder data is protected, and all compliance requirements are met.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of conducting a mobile device forensics investigation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile device forensics investigations help identify and analyze security incidents on mobile devices. This includes uncovering data breaches, tracing unauthorized access, and gathering evidence for legal or internal investigations, ensuring a comprehensive response to mobile security threats.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions address the challenge of balancing security and usability in application security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We address this challenge by implementing security measures that do not compromise user experience. This includes designing secure application architectures, conducting usability testing, and ensuring that security controls are user-friendly and do not hinder the application functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose open-source solutions over proprietary software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open-source solutions offer several advantages including cost-effectiveness, flexibility, and transparency. They eliminate licensing fees, provide the ability to customize and adapt the software to your specific needs, and benefit from community-driven improvements and security updates. Illumia Solutions leverages the best open-source technologies to deliver tailored and innovative IT solutions for your business.",
      },
    },
    {
      "@type": "Question",
      name: "Can Illumia Solutions integrate with my existing IT infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Illumia Solutions services are designed to seamlessly integrate with your existing IT infrastructure. Whether it is our SIEM solutions, SOAR capabilities, or cloud storage options, we ensure that our solutions work cohesively with your current systems to enhance overall efficiency and security.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions ensure data security in cloud storage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement robust security measures such as end-to-end encryption, two-factor authentication, and regular security updates. Additionally, our cloud storage solutions with Nextcloud ensure that data is stored securely and accessed only by authorized users.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions SDN and SD-WAN enhance network performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our SDN and SD-WAN solutions utilize advanced networking technologies to eliminate the need for traditional central controllers. This approach enhances network resilience, reduces latency, and simplifies network management, ensuring high performance and reliable connectivity.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using honeypots in cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Honeypots help detect and analyze unauthorized access attempts, providing valuable insights into potential threats. By deploying honeypots, Illumia Solutions can identify attack patterns, understand the tactics used by attackers, and enhance overall cybersecurity measures.",
      },
    },
    {
      "@type": "Question",
      name: "How does Illumia Solutions support collaboration within organizations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive collaboration solutions including secure email services, real-time collaborative editing tools, high-quality web-meeting solutions, and scalable cloud storage. These tools facilitate seamless communication and teamwork, improving productivity and efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Illumia Solutions EDR solutions effective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Endpoint Detection and Response (EDR) solutions powered by OpenEDR offer real-time threat detection, behavioral analysis, and comprehensive endpoint protection. This ensures that all devices within your organization are continuously monitored and protected against cyber threats.",
      },
    },
    {
      "@type": "Question",
      name: "How do Illumia Solutions project management tools improve efficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our project management solutions with Redmine, Zammad, and OpenProject provide features like multi-project support, customizable workflows, time tracking, Gantt charts, and role-based access control. These tools help streamline project execution, enhance collaboration, and ensure timely delivery of project milestones.",
      },
    },
    {
      "@type": "Question",
      name: "What is the role of vulnerability management in cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vulnerability management involves identifying, evaluating, and mitigating security weaknesses within your IT infrastructure. Illumia Solutions uses OpenVAS to perform thorough scans, provide detailed reports, and implement risk management strategies to protect your systems from potential threats.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of support does Illumia Solutions provide after implementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illumia Solutions offers ongoing support and maintenance to ensure your systems operate smoothly and securely. Our expert team is available to assist with troubleshooting, updates, and any other needs that arise, ensuring continuous performance and security for your IT infrastructure.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illumiasolutions.com/" },
    { "@type": "ListItem", position: 2, name: "FAQs", item: "https://illumiasolutions.com/faqs/" },
  ],
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
