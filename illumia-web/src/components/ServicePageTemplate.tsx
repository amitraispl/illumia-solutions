import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesEcosystem from "@/components/ServicesEcosystem";

interface Feature {
  title: string;
  desc: string;
}

interface ServicePageTemplateProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  features: Feature[];
  ctaText?: string;
  darkHero?: boolean;
  heroImage?: string;
}

export default function ServicePageTemplate({
  badge,
  title,
  titleHighlight,
  description,
  features,
  ctaText = "Get Started",
  heroImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&auto=format&fit=crop",
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge={badge}
        title={
          titleHighlight ? (
            <>
              {title}{" "}
              <span className="italic font-normal text-[#b31c33]">
                {titleHighlight}
              </span>
            </>
          ) : (
            title
          )
        }
        description={description}
        primaryCta={{ label: ctaText, href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/" }}
        imageSrc={heroImage}
        imageAlt={`${title} — Illumia Solutions`}
      />

      {/* Features */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-10 rounded-2xl border flex flex-col gap-4 ${
                  i === 0
                    ? "bg-[#b31c33] text-white border-transparent"
                    : "bg-[#f6f3f2] border-transparent hover:bg-white hover:border-[#e2bebd]/40 hover:shadow-xl transition-all"
                }`}
              >
                <span
                  className={`font-headline text-4xl italic ${
                    i === 0 ? "text-[#ffdad9]" : "text-[#b31c33]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h3
                  className={`font-headline text-2xl ${
                    i === 0 ? "text-white" : "text-stone-900"
                  }`}
                >
                  {f.title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed ${
                    i === 0 ? "text-white/80" : "text-[#5a4040]"
                  }`}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f6f3f2] px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="font-headline text-5xl text-stone-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-[#5a4040] text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Contact our team to learn how this solution can be tailored to your
            specific business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#b31c33] text-white px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#920022] shadow-lg shadow-[#b31c33]/20 active:scale-95"
            >
              Request a Consultation
            </Link>
            <Link
              href="/"
              className="inline-block border border-[#b31c33]/30 text-[#b31c33] px-12 py-4 rounded-xl font-body font-semibold tracking-wide hover:bg-[#ffdad9]/20"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <ServicesEcosystem />
    </>
  );
}
