import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";

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
  { number: "01", title: "Industry-Leading Credentials", desc: "Our team possesses several top-level, industry-leading certifications across cybersecurity, cloud platforms, and open-source ecosystems — ensuring we deliver the highest standards of service and expertise." },
  { number: "02", title: "Experience Meets Innovation", desc: "We combine the fresh perspectives of young minds with the seasoned expertise of professionals who have over 20 years of industry experience. This blend creates unique, tailored solutions for every client." },
  { number: "03", title: "Open-Source Excellence", desc: "We harness the power of open-source technologies to deliver infrastructure, application, and cybersecurity solutions that are transparent, auditable, cost-effective, and enterprise-grade." },
  { number: "04", title: "Global Presence, Local Expertise", desc: "A diverse team with a global presence, supported by strategic partnerships, enabling us to understand and address unique challenges faced by businesses in different regions and industries." },
  { number: "05", title: "24/7 Multi-Timezone Support", desc: "Our team operates across multiple time zones, ensuring prompt and effective service whenever you need it. Your business doesn't stop, and neither do we." },
  { number: "06", title: "Innovative & Cost-Effective", desc: "We are dedicated to empowering businesses to achieve their goals through innovative and cost-effective solutions — making enterprise-grade technology accessible to organizations of every size." },
  { number: "07", title: "Customer-Centric", desc: "We prioritize our clients' needs, working closely with them to understand their goals and deliver solutions that drive success." },
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
        primaryCta={{ label: "Explore Expertise", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/cloud-services" }}
        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Illumia Solutions team collaboration"
        imagePosition="object-top"
      />

      {/* Our Narrative */}
      <section className="py-32 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b31c33] font-bold block mb-6">
                Our Narrative
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-stone-900 leading-[0.95] mb-10">
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
        </div>
      </section>

      {/* Why Choose Illumia Bento */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
              Why Choose Us
            </span>
            <h2 className="font-headline text-5xl text-stone-900">
              Why the World&apos;s Leaders{" "}
              <span className="italic text-[#b31c33]">Choose Illumia.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-[#b31c33] rounded-2xl p-10 flex flex-col gap-4">
              <span className="font-headline text-5xl italic text-[#ffdad9]">{whyUs[0].number}.</span>
              <h3 className="font-headline text-3xl text-white">{whyUs[0].title}</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed">{whyUs[0].desc}</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&auto=format&fit=crop"
                alt="Illumia Solutions technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1c1b1b]/55" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="font-headline text-xl text-white italic leading-tight">
                  &ldquo;Precision applied to every layer.&rdquo;
                </p>
              </div>
            </div>

            {whyUs.slice(1).map((item) => (
              <div
                key={item.number}
                className="bg-[#f6f3f2] rounded-2xl p-10 border border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
              >
                <span className="font-headline text-4xl italic text-[#b31c33]">{item.number}.</span>
                <h3 className="font-headline text-2xl text-stone-900">{item.title}</h3>
                <p className="font-body text-sm text-[#5a4040] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-32 bg-[#1c1b1b] text-white relative overflow-hidden">
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
      <section className="py-24 px-6 md:px-12 bg-[#f6f3f2]">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="text-[#b31c33] font-body text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
            Partner With Us
          </span>
          <h2 className="font-headline text-5xl text-stone-900 mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            At Illumia Solutions, our commitment to innovation, experience, and
            expertise drives us to deliver exceptional solutions that meet your specific
            business needs. Let&apos;s build something precise together.
          </p>
          <Link
            href="/contact"
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
