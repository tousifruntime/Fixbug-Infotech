"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: initialSubject,
    message: "",
  });

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
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setToastMessage({
        type: "error",
        text: "Please fix the highlighted errors before submitting.",
      });
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }

    setIsSubmitting(true);
    // Simulate reliable async request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setToastMessage({
        type: "success",
        text: "Your message has been dispatched successfully! We'll reply within 24 hours.",
      });
      setTimeout(() => setToastMessage(null), 5000);
    }, 900);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-cream-soft p-8 sm:p-10 md:p-12 rounded-3xl border border-cream-border shadow-xs relative">
      {/* Interactive Toast Banner */}
      {toastMessage && (
        <div
          className={`mb-6 p-4 rounded-2xl flex items-center gap-3 transition-all duration-300 ${
            toastMessage.type === "success"
              ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
              : "bg-red-50 text-red-900 border border-red-200"
          }`}
        >
          {toastMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          )}
          <span className="text-xs sm:text-sm font-medium">
            {toastMessage.text}
          </span>
        </div>
      )}

      {isSubmitted ? (
        <div className="text-center py-10 space-y-6">
          <div className="w-16 h-16 bg-accent/15 text-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tight text-charcoal">
              Message Received!
            </h3>
            <p className="text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-charcoal">{formData.fullName}</span>. Our technical leads have received your inquiry regarding{" "}
              <span className="font-semibold text-charcoal">&ldquo;{formData.subject}&rdquo;</span> and will connect with you shortly.
            </p>
          </div>
          <div className="pt-4">
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-7 py-3 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream-soft transition-all duration-300"
            >
              <span>Send Another Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal mb-1.5">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Whether you have a project inquiry, partnership proposal, or job application — we respond to every message within 1 business day.
            </p>
          </div>

          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              className={`w-full bg-cream px-4 py-3 rounded-xl border ${
                errors.fullName
                  ? "border-red-500 focus:border-red-500 ring-1 ring-red-500/20"
                  : "border-cream-border focus:border-accent"
              } text-charcoal text-sm focus:outline-none transition-colors placeholder:text-muted/50`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
              >
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className={`w-full bg-cream px-4 py-3 rounded-xl border ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 ring-1 ring-red-500/20"
                    : "border-cream-border focus:border-accent"
                } text-charcoal text-sm focus:outline-none transition-colors placeholder:text-muted/50`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
              >
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full bg-cream px-4 py-3 rounded-xl border ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 ring-1 ring-red-500/20"
                    : "border-cream-border focus:border-accent"
                } text-charcoal text-sm focus:outline-none transition-colors placeholder:text-muted/50`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Subject <span className="text-accent">*</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Project Consultation / AI Engineering Inquiry"
              className={`w-full bg-cream px-4 py-3 rounded-xl border ${
                errors.subject
                  ? "border-red-500 focus:border-red-500 ring-1 ring-red-500/20"
                  : "border-cream-border focus:border-accent"
              } text-charcoal text-sm focus:outline-none transition-colors placeholder:text-muted/50`}
            />
            {errors.subject && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals, technical requirements, timeline, or relevant experience..."
              className={`w-full bg-cream p-4 rounded-xl border ${
                errors.message
                  ? "border-red-500 focus:border-red-500 ring-1 ring-red-500/20"
                  : "border-cream-border focus:border-accent"
              } text-charcoal text-sm focus:outline-none transition-colors resize-none placeholder:text-muted/50`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-charcoal text-cream-soft hover:bg-accent py-4 px-8 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-md disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-cream-soft/30 border-t-cream-soft rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-muted pt-1">
            🔒 Your contact information is never shared with third parties.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const faqs = [
    {
      q: "What does your typical engagement model look like?",
      a: "We offer dedicated engineering squads, milestone-based turnkey project delivery, and specialized AI advisory sprints depending on your team's velocity and requirements.",
    },
    {
      q: "How quickly can we see a functioning prototype?",
      a: "For most AI products and custom web platforms, our architecture sprints deliver an interactive, functioning proof-of-concept within 10 to 14 business days.",
    },
    {
      q: "Who retains Intellectual Property (IP) ownership?",
      a: "You retain 100% of the IP, codebases, custom fine-tuned model weights, and proprietary data artifacts from the moment of inception.",
    },
    {
      q: "How do you handle enterprise data privacy and AI security?",
      a: "We operate with strict zero-retention data policies, zero-trust cloud isolation, and ensure no client proprietary data is ever used to train public foundation models.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent selection:text-cream-soft">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-cream-border/60">
        <div className="absolute inset-0 bg-linear-to-b from-cream-soft via-cream to-cream pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              • GET IN TOUCH • START A CONVERSATION
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6">
              Let&apos;s Build Something{" "}
              <span className="font-display italic text-accent font-normal block sm:inline">
                Extraordinary.
              </span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              Have questions about building an AI product, modernizing your web architecture, or joining our engineering collective? Reach out below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Company Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                  DIRECT CONTACT
                </span>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Connect with our{" "}
                  <span className="font-display italic text-accent font-normal">
                    team
                  </span>
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  Direct channels to our technical leads and architecture directors. We review and respond to every message personally.
                </p>
              </div>

              {/* Response SLA Badge */}
              <div className="inline-flex items-center gap-3 bg-cream-soft border border-cream-border px-4 py-3 rounded-2xl text-sm font-medium text-charcoal">
                <span className="text-accent text-base">⚡</span>
                <span>
                  Guaranteed technical response within{" "}
                  <strong className="font-semibold text-charcoal">
                    1 business day
                  </strong>
                </span>
              </div>

              {/* Info Cards */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-cream-border">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-accent shrink-0 border border-cream-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal mb-1">
                      Headquarters
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Fixbug Infotech Headquarters
                      <br />
                      Tech Hub Park, Bandra Kurla Complex,
                      <br />
                      Mumbai, Maharashtra 400051, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-cream-border">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-accent shrink-0 border border-cream-border">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal mb-1">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:hello@fixbuginfotech.com"
                      className="text-sm text-charcoal font-medium hover:text-accent transition-colors block"
                    >
                      hello@fixbuginfotech.com
                    </a>
                    <a
                      href="mailto:careers@fixbuginfotech.com"
                      className="text-xs text-muted hover:text-accent transition-colors"
                    >
                      careers@fixbuginfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-cream-border">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-accent shrink-0 border border-cream-border">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal mb-1">
                      Telephone
                    </h4>
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-charcoal font-medium hover:text-accent transition-colors block"
                    >
                      +91 98765 43210
                    </a>
                    <span className="text-xs text-muted">
                      Mon — Fri, 9:00 AM — 7:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted block mb-3">
                  Follow Our Research & Updates
                </span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com" },
                    { name: "Twitter / X", url: "https://twitter.com" },
                    { name: "GitHub", url: "https://github.com" },
                    { name: "Dribbble", url: "https://dribbble.com" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium bg-cream-soft px-4 py-2 rounded-full border border-cream-border text-charcoal hover:border-accent hover:text-accent transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form with Suspense for useSearchParams */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-cream-soft p-12 rounded-3xl border border-cream-border animate-pulse h-96 flex items-center justify-center text-muted">
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

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-cream-soft border-t border-cream-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to{" "}
              <span className="font-display italic text-accent font-normal">
                Know
              </span>
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto">
              Clear answers to how we engage, protect your intellectual property, and deliver high-velocity engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-cream border border-cream-border p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-charcoal mb-3 flex items-start gap-2">
                    <span className="text-accent font-display italic text-xl">
                      Q.
                    </span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
