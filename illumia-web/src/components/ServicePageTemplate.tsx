import Link from "next/link";
import PageHero from "@/components/PageHero";
// import ServicesEcosystem from "@/components/ServicesEcosystem";

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
  heroImage = "/images/heroes/cloud-migration_hero.jpg",
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
              <span className="italic font-normal text-primary">
                {titleHighlight}
              </span>
            </>
          ) : (
            title
          )
        }
        description={description}
        primaryCta={{ label: ctaText, href: "/contact#contact-form" }}
        secondaryCta={{ label: "All Services", href: "/" }}
        imageSrc={heroImage}
        imageAlt={`${title} — Illumia Solutions`}
      />

      {/* Features */}
      <section className="py-12 md:py-20 bg-white px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => {
              const isRed = i === 0;
              const isDark = i === 5;
              const isWide = i === 0 || i === 3 || i === 5;
              return (
                <div
                  key={f.title}
                  className={`${isWide ? "md:col-span-2 lg:col-span-2" : ""} p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col gap-4 ${
                    isRed
                      ? "bg-primary"
                      : isDark
                      ? "bg-on-surface"
                      : i === 2
                      ? "bg-white border border-outline-variant/30 hover:shadow-xl transition-[box-shadow]"
                      : "bg-surface-low border border-transparent hover:bg-white hover:border-outline-variant/40 hover:shadow-xl transition-[background-color,border-color,box-shadow]"
                  }`}
                >
                  <span className={`font-headline text-4xl italic ${
                    isRed ? "text-primary-light" : isDark ? "text-primary-subdued" : "text-primary"
                  }`}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <h3 className={`font-headline text-xl sm:text-2xl ${
                    isRed || isDark ? "text-white" : "text-stone-900"
                  }`}>
                    {f.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed ${
                    isRed ? "text-white/80" : isDark ? "text-stone-400" : "text-on-surface-variant"
                  }`}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-24 bg-surface-low px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Contact our team to learn how this solution can be tailored to your
            specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/contact#contact-form"
              className="bg-primary text-white px-8 py-3.5 rounded-xl font-body font-semibold tracking-wide hover:bg-primary-dark shadow-lg shadow-primary/20 active:scale-[0.98] text-center"
            >
              Request a Consultation
            </Link>
            <Link
              href="/"
              className="border border-primary/30 text-primary px-8 py-3.5 rounded-xl font-body font-semibold tracking-wide hover:bg-primary-light/20 text-center"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* <ServicesEcosystem /> */}
    </>
  );
}
