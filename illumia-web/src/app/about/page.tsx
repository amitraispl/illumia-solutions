import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";
import AboutFlipCard from "@/components/AboutFlipCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Providing clients with the tools and guidance they need to excel in an ever-changing business landscape, Illumia Solutions envisions itself as the beacon of innovation.",
};

const values = [
  {
    title: "Mission",
    content: "Illuminate the path to success for businesses with innovative and cost-effective solutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Vision",
    content: "To be the beacon of innovation for businesses navigating through challenges.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Values",
    content: "Enlightening businesses with unique solutions, guiding them to thrive amidst adversity.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const whyUs = [
  { number: "01", title: "Expertise Across Domains", desc: "Illumia Solutions brings together a wealth of experience and expertise in cybersecurity, cloud solutions, and open-source technologies. Our team of certified professionals, including CISA, CISSP, CEH, and CCIE, boasts over 20 years of industry-relevant experience, ensuring that your business receives top-tier protection and service tailored to your unique needs.", bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop" },
  { number: "02", title: "Comprehensive Cybersecurity Services", desc: "In the face of increasing cyber threats, Illumia Solutions offers robust cybersecurity services that cover everything from IT risk management and application security to mobile and cloud security. We help you navigate complex regulatory landscapes, ensure data privacy, and protect your digital assets with cutting-edge security strategies and technologies.", bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop" },
  { number: "03", title: "Advanced Cloud Solutions", desc: "Harness the power of cloud technology with Illumia Solutions. Our cloud services are designed to optimise your operations, enhance security, and ensure seamless scalability. Whether you need hosting, application services, migration, or maintenance, we provide comprehensive solutions that meet today's needs and scale for tomorrow's challenges.", bg: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop" },
  { number: "04", title: "Innovative Open-Source Solutions", desc: "We leverage the flexibility and cost-effectiveness of open-source technologies to deliver tailored infrastructure, application, and cybersecurity solutions. Our services include hyperconverged infrastructure, high-performance block storage, and private cloud solutions that ensure your IT environment is robust, scalable, and future-proof.", bg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop" },
  { number: "05", title: "Customer-Centric Approach", desc: "Illumia Solutions places a strong emphasis on understanding and meeting the specific needs of our clients. Our customer-centric approach ensures that solutions are not only effective but also seamlessly integrated into your existing operations. We offer ongoing support and maintenance to ensure your systems remain secure and efficient.", bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop" },
  { number: "06", title: "Global Reach, Local Touch", desc: "With a global presence, Illumia Solutions is well-equipped to meet your cybersecurity and IT needs regardless of location. Our team operates across multiple time zones, ensuring prompt and effective service whenever you need it.", bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop" },
  { number: "07", title: "Partnerships and Collaboration", desc: "Our strong partnerships with leading global auditor companies and certified professionals allow us to deliver high-quality services and achieve compliance swiftly. These collaborations enhance our ability to provide comprehensive and efficient solutions to our clients.", bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop" },
  { number: "08", title: "Innovative and Cost-Effective Solutions", desc: "By leveraging the latest technologies and open-source solutions, we provide innovative services that keep your business ahead of emerging threats while ensuring cost efficiency. Our transparent billing practices and no hidden charges policy ensure that you get the best value for your investment.", bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop" },
  { number: "09", title: "Continuous Support and Maintenance", desc: "Our dedicated support team provides continuous monitoring, management, and maintenance services to ensure your IT infrastructure operates smoothly and securely. We offer 24/7 support to address any issues promptly and minimise disruption to your operations.", bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop" },
  { number: "10", title: "Tailored Solutions for Diverse Needs", desc: "From high-security measures and regulatory compliance to scalable cloud solutions and efficient open-source technologies, Illumia Solutions provides a full stack of services designed to address the diverse needs of modern businesses. We customise our solutions to fit your specific requirements, ensuring maximum protection and operational efficiency.", bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Our Story"
        title={
          <>
            Precision Engineering for the{" "}
            <span className="italic text-[#b31c33]">Global Enterprise.</span>
          </>
        }
        description="Illumia Solutions is built on the philosophy of precision applied to technical infrastructure. We don't just solve problems; we engineer narratives of success through technological excellence and meticulous strategic planning."
        primaryCta={{ label: "Explore Expertise", href: "/contact#contact-form" }}
        secondaryCta={{ label: "View Our Work", href: "/cloud-services" }}
        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Illumia Solutions team collaboration"
        imagePosition="object-top"
      />

      {/* Stats Bar */}
      <section className="bg-[#b31c33] py-12">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: "20+", label: "Years of Collective Industry Experience" },
              { value: "100%", label: "Open-Source Powered" },
              { value: "47+", label: "Specialised Modules" },
              { value: "24/7", label: "Support Coverage" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-headline text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="font-body text-xs uppercase tracking-widest text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Narrative */}
      <section className="py-16 lg:py-32 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-6">
                Our Narrative
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[0.95] mb-10">
                Born from a need for{" "}
                <em className="not-italic font-bold text-stone-900">absolute certainty</em>{" "}
                in a landscape of digital volatility.
              </h2>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85&auto=format&fit=crop"
                  alt="Illumia Solutions team meeting"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8 justify-center">
              <p className="text-[#5a4040] text-lg leading-relaxed font-body">
                At Illumia Solutions, we are dedicated to empowering businesses to achieve
                their goals through innovative and cost-effective solutions. Our mission is
                to illuminate the path to success, providing our clients with the tools and
                guidance they need to excel in an ever-changing business landscape. We
                envision ourselves as the beacon of innovation, helping businesses navigate
                through challenges with confidence and resilience.
              </p>
              <p className="text-[#5a4040] leading-relaxed font-body">
                We pride ourselves on our dynamic approach, combining the fresh perspectives
                of young minds with the seasoned expertise of professionals who have over 20
                years of industry experience. Our team possesses several top-level
                industry-leading credentials, ensuring that we deliver the highest standards
                of service and expertise.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                {values.map((v) => (
                  <div key={v.title} className="bg-white rounded-2xl p-6 border border-[#e2bebd]/30 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#b31c33]/10 flex items-center justify-center text-[#b31c33]">
                      {v.icon}
                    </div>
                    <h4 className="font-headline text-xl text-stone-900 italic">{v.title}</h4>
                    <p className="text-[#5a4040] text-sm leading-relaxed font-body">{v.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Our Approach wide card ───────────────────────────────────── */}
          <div className="mt-8 bg-white rounded-2xl border border-[#e2bebd]/30 overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 p-10 lg:p-14 flex flex-col gap-6 justify-center">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold">
                Our Approach
              </span>
              <h3 className="font-headline text-3xl md:text-4xl text-stone-900 leading-tight">
                Dynamic expertise,{" "}
                <span className="italic text-[#b31c33]">precision delivery.</span>
              </h3>
              <p className="text-[#5a4040] text-base leading-relaxed font-body">
                We pride ourselves on our dynamic approach, combining the fresh perspectives
                of young minds with the seasoned expertise of professionals who have over 20
                years of industry experience. Our team possesses several top level
                industry-leading credentials, ensuring that we deliver the highest standards
                of service and expertise. This blend of innovation and experience allows us
                to create unique, tailored solutions that address the specific needs of each
                client. Our team works collaboratively to understand your challenges and
                deliver effective, cutting-edge solutions that drive success.
              </p>
            </div>
            <div className="relative lg:w-[44%] min-h-[300px] shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&auto=format&fit=crop"
                alt="Illumia Solutions team collaborating"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Illumia — Flip Cards */}
      <section className="py-16 lg:py-32 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
              Why Choose Us
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900">
              Why the World&apos;s Leaders{" "}
              <span className="italic text-[#b31c33]">Choose Illumia.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.map((item, i) => (
              <AboutFlipCard
                key={item.number}
                {...item}
                reverse={i % 2 === 1}
                dark={Math.floor(i / 2) % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 lg:py-32 bg-[#1c1b1b] text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <p className="font-headline text-4xl md:text-5xl lg:text-6xl italic text-white leading-tight max-w-4xl mx-auto mb-10">
            &ldquo;We are the{" "}
            <span className="text-[#ffb3b3]">beacon of innovation</span>,
            illuminating the path through technical complexity with clinical accuracy.&rdquo;
          </p>
          <div className="w-16 h-px bg-[#b31c33] mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone-500">
            — The Illumia Manifesto
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-24 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
            Partner With Us
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            At Illumia Solutions, our commitment to innovation, experience, and
            expertise drives us to deliver exceptional solutions that meet your specific
            business needs. Let&apos;s build something precise together.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 bg-[#b31c33] hover:bg-[#920022] text-white px-10 py-5 rounded-xl font-body font-semibold text-sm tracking-wide shadow-lg shadow-[#b31c33]/30 transition-all duration-200 active:scale-95"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
