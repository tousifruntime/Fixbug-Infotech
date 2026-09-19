"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Mail,MapPin,Phone,CheckCircle2,AlertCircle,Send,ArrowUpRight,Clock,ChevronDown,} from "lucide-react";

    // 1. BUSINESS DETAILS (same on every page and on Google Business Profile) 

const SITE_URL = "https://fixbuginfotech.online";

const BUSINESS = {
  name: "Fixbug Infotech",
  phone: "+91 7776069948",
  phoneHref: "+917776069948",
  email: "fixbuginfotech@gmail.com",
  street: "Sharifa Residency, B-FF4, Nagamasjid",
  locality: "Ponda",
  region: "Goa",
  postalCode: "403401",
};

const FULL_ADDRESS = `${BUSINESS.street}, ${BUSINESS.locality}, ${BUSINESS.region} ${BUSINESS.postalCode}, India`;
const MAP_QUERY = encodeURIComponent(FULL_ADDRESS);
// TIP: once your Google Business Profile is live, replace this with the URL from
// Google Maps > Share > Embed a map, so the pin lands exactly on your office.
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

// TODO: add your real profiles, e.g. { name: "LinkedIn", url: "https://www.linkedin.com/company/your-page" }
// The section stays hidden while this list is empty.
const SOCIALS = [];

const INTERESTS = [
  "Website development",
  "Custom software",
  "Mobile app development",
  "AI & automation",
  "Cloud & DevOps",
  "IT support & maintenance",
  "Software training course",
  "Internship",
  "Job application",
  "Something else",
];

const QUICK_ENQUIRIES = [
  { label: "Get a software quote", subject: "Software project quote" },
  { label: "Website or app enquiry", subject: "Website or app development enquiry" },
  { label: "Training course enquiry", subject: "Software training enquiry" },
  { label: "Internship application", subject: "Internship application" },
];

const FAQS = [
  {
    q: "How do I get a quote for a website, app or custom software?",
    a: "Fill in the form with a short description of what you need, or call or email us. We will discuss your requirements and reply with a clear scope, timeline and quote.",
  },
  {
    q: "How soon will I get a reply?",
    a: `We aim to respond to every message within 1 business day. For urgent enquiries, call us on ${BUSINESS.phone}.`,
  },
  {
    q: "How can I join a software training course or apply for an internship?",
    a: "Send us a message with the course or role you are interested in, or use the Enquire Now and Apply Now buttons on our careers page, which fill in the subject for you. We will share the syllabus, batch details and next steps.",
  },
  {
    q: "Where is Fixbug Infotech located?",
    a: `Our office is at ${BUSINESS.street}, ${BUSINESS.locality}, ${BUSINESS.region} ${BUSINESS.postalCode}, India. We serve businesses and students across Goa, including Margao, Panaji, Vasco and Mapusa.`,
  },
  {
    q: "Do you work with businesses outside Ponda and Goa?",
    a: "Yes. We work with clients across India through calls and video meetings, and we are happy to meet in person if you are in or near Ponda.",
  },
  {
    q: "Who owns the code and content built for my project?",
    a: "Ownership terms are agreed in writing before the project starts, so you know exactly what you will receive when the work is complete.",
  },
];

const inputClass = (hasError) =>
  `w-full bg-cream px-4 py-3 rounded-xl border ${
    hasError
      ? "border-red-500 focus:border-red-500 ring-1 ring-red-500/20"
      : "border-cream-border focus:border-accent"
  } text-charcoal text-sm focus:outline-none transition-colors placeholder:text-muted/50`;

const labelClass =
  "block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2";

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p
      id={id}
      className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium"
    >
      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

/*   2. FORM   */
function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    subject: initialSubject,
    message: "",
    company: "", // honeypot
  });

  // Keeps the subject in sync when a quick-enquiry / Apply link changes the URL
  useEffect(() => {
    const subj = searchParams.get("subject");
    if (subj) {
      setFormData((prev) => ({ ...prev, subject: subj }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com)";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(
        formData.phone.replace(/\s+/g, "")
      )
    ) {
      errs.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (toastMessage) {
      setToastMessage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: real visitors never fill this. Pretend success and stop.
    if (formData.company) {
      setIsSubmitted(true);
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setToastMessage(null);

    try {
      // The API keeps receiving the same fields as before. The selected
      // interest is added to the top of the message so it reaches your inbox
      // without any backend change.
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.interest
          ? `Interested in: ${formData.interest}\n\n${formData.message}`
          : formData.message,
        company: formData.company,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Keep formData: the success screen shows the submitted name and subject.
      setIsSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);
      setToastMessage({
        text:
          error.message ||
          `Failed to send your message. Please try again or call us on ${BUSINESS.phone}.`,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interest: "",
      subject: "",
      message: "",
      company: "",
    });
    setErrors({});
    setToastMessage(null);
  };

  return (
    <div className="bg-cream-soft p-8 sm:p-10 md:p-12 rounded-3xl border border-cream-border shadow-xs relative">
      {toastMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 p-4 rounded-2xl flex items-center gap-3 bg-red-50 text-red-900 border border-red-200"
        >
          <AlertCircle
            className="w-5 h-5 text-red-600 shrink-0"
            aria-hidden="true"
          />
          <span className="text-xs sm:text-sm font-medium">
            {toastMessage.text}
          </span>
        </div>
      )}

      {isSubmitted ? (
        <div className="text-center py-10 space-y-6" role="status">
          <div className="w-16 h-16 bg-accent/15 text-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tight text-charcoal">
              Message received!
            </h3>
            <p className="text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Thank you,{" "}
              <span className="font-semibold text-charcoal">
                {formData.fullName}
              </span>
              . We have received your enquiry about{" "}
              <span className="font-semibold text-charcoal">
                &ldquo;{formData.subject}&rdquo;
              </span>{" "}
              and will get back to you shortly.
            </p>
            <p className="text-muted text-sm">
              In a hurry? Call us on{" "}
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="font-semibold text-charcoal hover:text-accent transition-colors"
              >
                {BUSINESS.phone}
              </a>
              .
            </p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-7 py-3 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream-soft transition-all duration-300"
            >
              <span>Send another message</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
          aria-label="Contact form"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal mb-1.5">
              Send us a message
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Project enquiry, training course, internship or job application -
              tell us what you need and we will get back to you.
            </p>
          </div>

          {/* Honeypot field */}
          <div
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            aria-hidden="true"
          >
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          {/* Full name */}
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={inputClass(errors.fullName)}
            />
            <FieldError id="fullName-error" message={errors.fullName} />
          </div>

          {/* Email & phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass(errors.email)}
              />
              <FieldError id="email-error" message={errors.email} />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 90000 00000"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={inputClass(errors.phone)}
              />
              <FieldError id="phone-error" message={errors.phone} />
            </div>
          </div>

          {/* Interest */}
          <div>
            <label htmlFor="interest" className={labelClass}>
              I am interested in
            </label>
            <div className="relative">
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`${inputClass(false)} appearance-none pr-10 cursor-pointer`}
              >
                <option value="">Select an option (optional)</option>
                {INTERESTS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="w-4 h-4 text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className={labelClass}>
              Subject <span className="text-accent">*</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Website quote / MERN training enquiry"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={inputClass(errors.subject)}
            />
            <FieldError id="subject-error" message={errors.subject} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, or the course or role you are interested in..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${inputClass(errors.message)} resize-none`}
            />
            <FieldError id="message-error" message={errors.message} />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-charcoal text-cream-soft hover:bg-accent py-4 px-8 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-md disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div
                    className="w-4 h-4 border-2 border-cream-soft/30 border-t-cream-soft rounded-full motion-safe:animate-spin"
                    aria-hidden="true"
                  />
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <span>Send message</span>
                  <Send
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-muted pt-1">
            We use your details only to respond to your enquiry.
          </p>
        </form>
      )}
    </div>
  );
}

/* ==========================================================================
   3. PAGE
   ========================================================================== */
export default function ContactPageClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact Fixbug Infotech - Software Company in Ponda, Goa",
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": ["ProfessionalService", "EducationalOrganization"],
        "@id": `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        url: SITE_URL,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.street,
          addressLocality: BUSINESS.locality,
          addressRegion: BUSINESS.region,
          postalCode: BUSINESS.postalCode,
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Ponda" },
          { "@type": "AdministrativeArea", name: "Goa" },
          { "@type": "Country", name: "India" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          areaServed: "IN",
        },
        // TODO: add openingHoursSpecification once your working hours are final
        ...(SOCIALS.length > 0 && { sameAs: SOCIALS.map((s) => s.url) }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: `${SITE_URL}/contact`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent selection:text-cream-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar variant="solid" />

      <main className="grow">
        {/* ================= HERO ================= */}
        <section
          aria-labelledby="contact-hero-heading"
          className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-cream-border/60"
        >
          <div className="absolute inset-0 bg-linear-to-b from-cream-soft via-cream to-cream pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-charcoal font-medium">
                    Contact
                  </li>
                </ol>
              </nav>

              <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
                • Get in touch • Ponda, Goa
              </span>

              <h1
                id="contact-hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6"
              >
                Contact a Software Company in{" "}
                <span className="font-display italic text-accent font-normal block sm:inline">
                  Ponda, Goa.
                </span>
              </h1>

              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
                Need a website, custom software or AI automation - or want to
                join our software training in Ponda? Send us a message, call us
                or visit our office.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT INFO + FORM ================= */}
        <section
          className="py-20 md:py-28"
          aria-label="Contact information and form"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left column */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                    Direct contact
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Talk to our{" "}
                    <span className="font-display italic text-accent font-normal">
                      team in Ponda
                    </span>
                  </h2>
                  <p className="text-muted text-base leading-relaxed">
                    Call, email or drop by. Whether it is a project, a training
                    course or a career question, a real person from our team
                    will read your message and reply.
                  </p>
                </div>

                <div className="inline-flex items-center gap-3 bg-cream-soft border border-cream-border px-4 py-3 rounded-2xl text-sm font-medium text-charcoal">
                  <Clock className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  <span>
                    We aim to reply within{" "}
                    <strong className="font-semibold">1 business day</strong>
                  </span>
                </div>

                {/* Quick enquiries (pre-fill the subject) */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted block mb-3">
                    What can we help with?
                  </span>
                  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {QUICK_ENQUIRIES.map((q) => (
                      <li key={q.label}>
                        <Link
                          href={`/contact?subject=${encodeURIComponent(q.subject)}`}
                          scroll={false}
                          className="inline-block text-xs font-medium bg-cream-soft px-4 py-2 rounded-full border border-cream-border text-charcoal hover:border-accent hover:text-accent transition-colors"
                        >
                          {q.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Info cards */}
                <address className="space-y-4 not-italic">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-cream-border">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-accent shrink-0 border border-cream-border">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal mb-1">
                        Our office in Ponda
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {BUSINESS.name}
                        <br />
                        {BUSINESS.street},
                        <br />
                        {BUSINESS.locality}, {BUSINESS.region}{" "}
                        {BUSINESS.postalCode}, India
                      </p>
                      <a
                        href={MAP_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline mt-2"
                      >
                        Get directions
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-cream-border">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-accent shrink-0 border border-cream-border">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal mb-1">
                        Call us
                      </h3>
                      <a
                        href={`tel:${BUSINESS.phoneHref}`}
                        className="text-sm text-charcoal font-medium hover:text-accent transition-colors block"
                      >
                        {BUSINESS.phone}
                      </a>
                      <span className="text-xs text-muted">
                        For quick questions about projects and courses
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-cream-border">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-accent shrink-0 border border-cream-border">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal mb-1">
                        Email us
                      </h3>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-sm text-charcoal font-medium hover:text-accent transition-colors break-all"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                </address>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-cream-border bg-cream-soft">
                  <iframe
                    title="Fixbug Infotech office location on Google Maps, Ponda, Goa"
                    src={MAP_EMBED_SRC}
                    width="100%"
                    height="260"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block border-0"
                  />
                </div>

                {/* Social links - hidden until you add real profiles */}
                {SOCIALS.length > 0 && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted block mb-3">
                      Follow us
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {SOCIALS.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Fixbug Infotech on ${social.name} (opens in new tab)`}
                          className="text-xs font-medium bg-cream-soft px-4 py-2 rounded-full border border-cream-border text-charcoal hover:border-accent hover:text-accent transition-colors"
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right column */}
              <div className="lg:col-span-7">
                <Suspense
                  fallback={
                    <div className="bg-cream-soft p-12 rounded-3xl border border-cream-border motion-safe:animate-pulse h-96 flex items-center justify-center text-muted">
                      Loading contact form...
                    </div>
                  }
                >
                  <ContactFormContent />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section
          className="py-20 md:py-28 bg-cream-soft border-t border-cream-border"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                Frequently asked questions
              </span>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Before you{" "}
                <span className="font-display italic text-accent font-normal">
                  get in touch
                </span>
              </h2>
              <p className="text-muted text-base max-w-xl mx-auto">
                Quick answers about quotes, training, our Ponda office and how
                we work with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-cream border border-cream-border p-6 sm:p-8 rounded-2xl"
                >
                  <h3 className="text-lg font-bold text-charcoal mb-3 flex items-start gap-2">
                    <span
                      className="text-accent font-display italic text-xl"
                      aria-hidden="true"
                    >
                      Q.
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}