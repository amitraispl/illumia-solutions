"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your full name so we know who to reach.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "An email address is required so we can respond to you.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "That doesn't look right — try name@company.com.";
  }

  if (!form.message.trim()) {
    errors.message =
      "Tell us about your goals — even a sentence or two helps us prepare.";
  } else if (form.message.trim().length < 20) {
    errors.message =
      "A bit more detail helps us give you a more meaningful response.";
  }

  return errors;
}

function ErrorMsg({ id, text }: { id: string; text: string }) {
  return (
    <p id={id} role="alert" className="text-[#b31c33] text-sm font-body flex items-center gap-1.5 mt-1">
      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      {text}
    </p>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fieldClass = (field: keyof FormData) => {
    const base =
      "w-full bg-[#f6f3f2] border rounded-xl px-4 py-3.5 text-stone-900 font-body transition-all outline-none focus:bg-white placeholder:text-stone-400";
    if (touched[field] && errors[field])
      return `${base} border-[#b31c33] ring-2 ring-[#b31c33]/10 bg-[#ffdad9]/10`;
    return `${base} border-[#e2bebd]/70 focus:border-[#b31c33]/70 focus:ring-2 focus:ring-[#b31c33]/10`;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const ve = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: ve[field] }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const ve = validate(form);
    setErrors((prev) => ({ ...prev, [field]: ve[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    ) as Record<keyof FormData, boolean>;
    setTouched(allTouched);

    const ve = validate(form);
    setErrors(ve);

    if (Object.keys(ve).length > 0) {
      const firstKey = Object.keys(ve)[0] as keyof FormData;
      document.getElementById(firstKey)?.focus();
      return;
    }

    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 900));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Get in Touch"
        title={
          <>
            Let&apos;s Build Something{" "}
            <span className="italic text-[#b31c33]">Brilliant Together</span>
          </>
        }
        description="Share your challenge and we'll map a path forward. Our team spans time zones and disciplines — someone is always ready to help."
        primaryCta={{ label: "Jump to the Form", href: "#contact-form" }}
        secondaryCta={{ label: "Our Story", href: "/about" }}
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Modern collaborative office workspace"
      />

      {/* ─── Contact Form + Info ──────────────────────────────────────────── */}
      <section id="contact-form" className="bg-[#f6f3f2] py-24 overflow-hidden">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* ── Form ── */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 lg:p-16 rounded-2xl shadow-sm border border-[#e2bebd]/20 border-t-2 border-t-[#b31c33]">
                <span className="font-body text-xs uppercase tracking-widest text-[#b31c33] font-bold block mb-3">
                  Let&apos;s Talk
                </span>
                <h2 className="font-headline text-4xl text-stone-900 mb-2">Send an Inquiry</h2>
                <p className="text-[#5a4040] font-body text-sm mb-12">
                  Fields marked{" "}
                  <span className="text-[#b31c33] font-semibold" aria-hidden="true">*</span>{" "}
                  are required.
                </p>

                {submitted ? (
                  /* ── Success state ── */
                  <div
                    className="text-center py-16"
                    role="status"
                    aria-live="polite"
                    aria-label="Inquiry submitted successfully"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#ffdad9] flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-[#b31c33]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-headline text-3xl text-stone-900 mb-4">
                      You&apos;re on our radar.
                    </h3>
                    <p className="text-[#5a4040] font-body leading-relaxed max-w-sm mx-auto">
                      Your inquiry landed safely. We&apos;ll reach out within{" "}
                      <strong>one business day</strong> — usually much sooner. In the
                      meantime, explore our{" "}
                      <a href="/about" className="text-[#b31c33] underline underline-offset-2 hover:text-[#920022]">
                        story
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form
                    className="space-y-8"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact inquiry form"
                  >
                    {/* Row 1 — Name + Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="name"
                          className="font-body text-xs uppercase tracking-wider text-[#5c5c5c]"
                        >
                          Full Name{" "}
                          <span className="text-[#b31c33]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          aria-required="true"
                          aria-invalid={touched.name && !!errors.name ? true : undefined}
                          aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                          className={fieldClass("name")}
                        />
                        {touched.name && errors.name && (
                          <ErrorMsg id="name-error" text={errors.name} />
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="company"
                          className="font-body text-xs uppercase tracking-wider text-[#5c5c5c]"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className={fieldClass("company")}
                        />
                      </div>
                    </div>

                    {/* Row 2 — Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="font-body text-xs uppercase tracking-wider text-[#5c5c5c]"
                        >
                          Email Address{" "}
                          <span className="text-[#b31c33]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          aria-required="true"
                          aria-invalid={touched.email && !!errors.email ? true : undefined}
                          aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                          className={fieldClass("email")}
                        />
                        {touched.email && errors.email && (
                          <ErrorMsg id="email-error" text={errors.email} />
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="phone"
                          className="font-body text-xs uppercase tracking-wider text-[#5c5c5c]"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={fieldClass("phone")}
                        />
                      </div>
                    </div>

                    {/* Service selector */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="service"
                        className="font-body text-xs uppercase tracking-wider text-[#5c5c5c]"
                      >
                        How Can We Help?
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => handleChange("service", e.target.value)}
                          className={`${fieldClass("service")} appearance-none cursor-pointer pr-10`}
                        >
                          <option value="">Pick the closest match…</option>
                          <option>Cloud Services</option>
                          <option>Cyber Security Services</option>
                          <option>Application Solutions</option>
                          <option>Infrastructure Solutions</option>
                          <option>PAM as a Service</option>
                          <option>Virtual Private Server</option>
                          <option>Mobile Security</option>
                          <option>On-Premise Private Cloud</option>
                          <option>Object Storage</option>
                          <option>Container Solutions</option>
                          <option>Vulnerability Management</option>
                          <option>NMS as a Service</option>
                          <option>SOAR</option>
                          <option>EDR Solution</option>
                          <option>Not sure yet — let&apos;s talk</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#b31c33]">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="font-body text-xs uppercase tracking-wider text-[#5c5c5c]"
                      >
                        Your Message{" "}
                        <span className="text-[#b31c33]" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="What are you trying to accomplish? What's getting in the way? The more context, the better."
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        aria-required="true"
                        aria-invalid={touched.message && !!errors.message ? true : undefined}
                        aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                        className={`${fieldClass("message")} resize-none`}
                      />
                      {touched.message && errors.message && (
                        <ErrorMsg id="message-error" text={errors.message} />
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-br from-[#b31c33] to-[#d63849] text-white px-10 py-4 rounded-xl font-body font-bold tracking-widest uppercase text-xs hover:shadow-lg shadow-md shadow-[#b31c33]/20 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 inline-flex items-center gap-3"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Side Info ── */}
            <div className="lg:col-span-5 flex flex-col gap-12 justify-between">

              {/* Office image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1742325646212-f917ba1feeaa?w=1200&q=85&auto=format&fit=crop"
                  alt="Howrah Bridge at dusk, Kolkata — our home base"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/80 via-[#1c1b1b]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-[#ffb3b3] font-bold block mb-2">
                    Headquarters
                  </span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className="font-headline text-2xl text-white italic leading-snug">
                      Kolkata &middot; India
                    </p>
                  </div>
                </div>
              </div>

              {/* Office address */}
              <div className="space-y-4">
                <span className="font-body text-xs uppercase tracking-widest text-[#b31c33] font-bold">
                  Our Office
                </span>
                <div>
                  <h3 className="font-headline text-3xl text-stone-900 mb-3">Kolkata, India</h3>
                  <address className="font-body text-[#5a4040] leading-relaxed not-italic">
                    2nd-FR, FL-C, 98/9, Gopal Lal Tagore Rd,<br />
                    Baranagar, Kolkata,<br />
                    West Bengal — 700036, India
                  </address>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-4">
                <span className="font-body text-xs uppercase tracking-widest text-[#b31c33] font-bold">
                  Direct Channels
                </span>
                <div className="space-y-4">
                  <a
                    href="mailto:sales@illumiasolutions.com"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-[#e5e2e1] flex items-center justify-center text-[#b31c33] group-hover:bg-[#b31c33] group-hover:text-white transition-all"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <span className="font-body text-stone-700 group-hover:text-[#b31c33] transition-colors">
                      sales@illumiasolutions.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/illumia-solutions-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-[#e5e2e1] flex items-center justify-center text-[#b31c33] group-hover:bg-[#b31c33] group-hover:text-white transition-all"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="font-body text-stone-700 group-hover:text-[#b31c33] transition-colors">
                      LinkedIn — Illumia Solutions
                    </span>
                  </a>
                </div>
              </div>

              {/* Support Hours */}
              <div className="space-y-4">
                <span className="font-body text-xs uppercase tracking-widest text-[#b31c33] font-bold">
                  Support Hours
                </span>
                <div className="bg-white rounded-2xl p-6 border border-[#e2bebd]/30">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 text-[#b31c33] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-body text-sm text-stone-900 font-semibold mb-1">
                        24/7 Multi-Timezone Support
                      </p>
                      <p className="font-body text-xs text-[#5a4040] leading-relaxed">
                        Our teams operate around the clock across time zones —
                        someone is always ready to help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
