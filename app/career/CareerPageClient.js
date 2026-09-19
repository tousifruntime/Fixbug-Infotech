"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  BookOpen,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  Rocket,
  Users,
  Cpu,
  Phone,
  Mail,
} from "lucide-react";

/* ==========================================================================
   1. BUSINESS DETAILS (same on every page and on Google Business Profile)
   ========================================================================== */
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

// TODO: update these whenever you publish or renew a listing
const DATE_POSTED = "2026-08-01";
const VALID_THROUGH = "2026-12-31";

/* ==========================================================================
   2. OPPORTUNITIES
   type: "job" | "internship" | "training"
   IMPORTANT: only keep jobs / internships you are genuinely hiring for.
   Job listings are sent to Google as JobPosting data, and fake listings
   break Google's guidelines. Training programs are sent as Course data.
   ========================================================================== */
const OPPORTUNITIES = [
  {
    id: "job-full-stack-developer",
    type: "job",
    typeLabel: "Full-Time Role",
    title: "Full Stack Developer (MERN & Next.js)",
    department: "Web & Software Development",
    location: "Ponda, Goa",
    workType: "On-site / Hybrid",
    employmentType: "FULL_TIME",
    experience: "1+ years",
    description:
      "Build websites, web applications and business software for our clients using React, Next.js, Node.js and MongoDB. You will work closely with our team in Ponda, from planning features to deploying and maintaining live projects.",
    requiredSkills: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Tailwind CSS",
    ],
    highlights: [
      "Work on real client websites and software",
      "Learn directly from experienced developers",
      "Small, focused team based in Ponda, Goa",
    ],
  },
  {
    id: "job-python-ai-developer",
    type: "job",
    typeLabel: "Full-Time Role",
    title: "Python & AI Automation Developer",
    department: "AI & Automation",
    location: "Ponda, Goa",
    workType: "On-site / Hybrid",
    employmentType: "FULL_TIME",
    experience: "1+ years",
    description:
      "Design and build automation tools, chatbots and AI-powered features for business clients, using Python and modern AI APIs. You will turn manual, repetitive workflows into reliable automated systems.",
    requiredSkills: [
      "Python",
      "REST API development",
      "LLM APIs (OpenAI / Claude)",
      "Basics of RAG & vector search",
      "Docker basics",
      "Git & GitHub",
    ],
    highlights: [
      "Build practical AI solutions for real businesses",
      "Work across backend, automation and integrations",
      "Room to grow into technical leadership",
    ],
  },
  {
    id: "internship-software-engineering",
    type: "internship",
    typeLabel: "Internship",
    title: "Software Engineering Intern",
    department: "Software Development",
    location: "Ponda, Goa",
    workType: "Hybrid · 2 months",
    employmentType: "INTERN",
    experience: "Freshers / Final-year students",
    description:
      "Work alongside our developers on real website and software projects. You will build features, fix bugs and learn how professional teams plan, code, review and deploy software.",
    requiredSkills: [
      "Basic Python or JavaScript",
      "HTML, CSS & web fundamentals",
      "Familiarity with Git (a plus)",
      "Problem-solving mindset",
      "Eagerness to learn",
    ],
    highlights: [
      "Guidance from experienced developers",
      "Work on real project code, not only exercises",
      "Top performers may be considered for full-time roles",
    ],
  },
  {
    id: "training-mern-nextjs",
    type: "training",
    typeLabel: "Training Program",
    title: "MERN Stack + Next.js Training Program",
    department: "Software Training",
    location: "Ponda, Goa",
    workType: "Hybrid · 3 months",
    experience: "Freshers & final-year students welcome",
    description:
      "A hands-on program that takes you from web fundamentals to building and deploying full-stack applications with MongoDB, Express, React, Node.js and Next.js.",
    requiredSkills: [
      "HTML, CSS & JavaScript fundamentals",
      "React & Next.js",
      "Node.js & Express APIs",
      "MongoDB & database design",
      "Git, GitHub & deployment",
      "Live project & portfolio",
    ],
    highlights: [
      "Build real, portfolio-ready projects",
      "Learn from working developers",
      "Resume and interview preparation",
    ],
  },
  {
    id: "training-python",
    type: "training",
    typeLabel: "Training Program",
    title: "Python Programming & Automation",
    department: "Software Training",
    location: "Ponda, Goa",
    workType: "Batch details on request",
    experience: "Beginners welcome",
    description:
      "Start from zero with Python fundamentals, then move on to scripting, automation and backend basics through hands-on exercises and small projects.",
    requiredSkills: [
      "Python fundamentals",
      "OOP & problem solving",
      "Working with files & APIs",
      "Automation scripts",
      "Introduction to backend development",
    ],
    highlights: [
      "Beginner-friendly, step-by-step teaching",
      "Practice with real-world mini projects",
      "Guidance on next steps in your career",
    ],
  },
  {
    id: "training-cloud-devops",
    type: "training",
    typeLabel: "Training Program",
    title: "Cloud Computing & DevOps (AWS / Azure)",
    department: "Software Training",
    location: "Ponda, Goa",
    workType: "Batch details on request",
    experience: "Basic programming knowledge recommended",
    description:
      "Understand cloud services, Linux, Docker, CI/CD and deployment the way modern software teams work, with hands-on practice.",
    requiredSkills: [
      "Cloud fundamentals (AWS & Azure)",
      "Linux command line",
      "Docker & containers",
      "CI/CD basics",
      "Deploying real applications",
    ],
    highlights: [
      "Learn the tools used in real deployments",
      "Hands-on labs instead of slides only",
      "Useful for developers and IT freshers",
    ],
  },
];

const FILTERS = [
  { key: "all", label: "All", icon: null },
  { key: "job", label: "Jobs", icon: Briefcase },
  { key: "internship", label: "Internships", icon: GraduationCap },
  { key: "training", label: "Training", icon: BookOpen },
];

const COUNTS = {
  all: OPPORTUNITIES.length,
  job: OPPORTUNITIES.filter((o) => o.type === "job").length,
  internship: OPPORTUNITIES.filter((o) => o.type === "internship").length,
  training: OPPORTUNITIES.filter((o) => o.type === "training").length,
};

// Visual + wording differences per opportunity type
const TYPE_CONFIG = {
  job: {
    icon: Briefcase,
    badge: "bg-charcoal text-cream-soft",
    card: "bg-cream-soft border-cream-border hover:border-charcoal/40 hover:shadow-md",
    cta: "bg-charcoal text-cream-soft hover:bg-accent",
    ctaLabel: "Apply Now",
    ctaVerb: "Apply for",
    status: "Actively Hiring",
    skillsLabel: "Required skills & technologies",
    ribbon: null,
  },
  internship: {
    icon: GraduationCap,
    badge: "bg-accent/15 text-accent border border-accent/30",
    card: "bg-cream-soft/90 border-accent/40 shadow-sm hover:shadow-md hover:border-accent",
    cta: "bg-accent text-cream-soft hover:bg-accent/90",
    ctaLabel: "Apply Now",
    ctaVerb: "Apply for",
    status: "Applications Open",
    skillsLabel: "Skills we look for",
    ribbon: "Early Career Program",
  },
  training: {
    icon: BookOpen,
    badge: "bg-accent text-cream-soft",
    card: "bg-cream border-accent/40 shadow-sm hover:shadow-md hover:border-accent",
    cta: "bg-accent text-cream-soft hover:bg-accent/90",
    ctaLabel: "Enquire Now",
    ctaVerb: "Enquire about",
    status: "Enquiries Open",
    skillsLabel: "What you will learn",
    ribbon: "Software Training",
  },
};

const PERKS = [
  {
    icon: Rocket,
    title: "Real client projects",
    description:
      "Work on live websites and software for real businesses from your first weeks, not just practice exercises.",
  },
  {
    icon: Users,
    title: "Mentorship from working developers",
    description:
      "Learn from people who build and ship software every day, and get honest feedback on your code.",
  },
  {
    icon: Cpu,
    title: "A modern technology stack",
    description:
      "Next.js, React, Node.js, Python, cloud and AI - the tools that software teams actually use today.",
  },
  {
    icon: MapPin,
    title: "Grow your career in Ponda, Goa",
    description:
      "Build a software career in Goa, with a local team and a supportive learning environment.",
  },
];

const FAQS = [
  {
    q: "Are there software internships in Ponda for freshers?",
    a: "Yes. We offer a Software Engineering internship for freshers and final-year students, where you work on real projects with guidance from our developers. Use the Internships filter above to see what is open now.",
  },
  {
    q: "Do I need coding experience to join the software training in Ponda?",
    a: "Our MERN Stack + Next.js training is designed for freshers and final-year students, so you can start from the basics. Prior exposure to programming helps, but curiosity and regular practice matter most.",
  },
  {
    q: "How long is the training program?",
    a: "The MERN Stack + Next.js training program runs for 3 months. We share the duration and batch dates for the Python and Cloud & DevOps programs when you enquire.",
  },
  {
    q: "How do I apply for a job, internship or training?",
    a: `Click Apply Now or Enquire Now on any listing and our contact form opens with the role already filled in. You can also call ${BUSINESS.phone} or email ${BUSINESS.email}.`,
  },
  {
    q: "Are there IT jobs in Ponda, Goa for developers?",
    a: "Yes. When we have openings for developers, we list them on this page. If you do not see a suitable role, send us an open application with your resume and portfolio.",
  },
];

/* ==========================================================================
   3. STRUCTURED DATA
   Jobs & internships -> JobPosting. Training programs -> Course (a training
   program is not a job, so it must NOT be marked up as JobPosting).
   ========================================================================== */
const orgRef = {
  "@type": "Organization",
  name: BUSINESS.name,
  sameAs: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...OPPORTUNITIES.filter((o) => o.type !== "training").map((role) => ({
      "@type": "JobPosting",
      title: role.title,
      description: role.description,
      datePosted: DATE_POSTED,
      validThrough: VALID_THROUGH,
      employmentType: role.employmentType,
      hiringOrganization: orgRef,
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.street,
          addressLocality: BUSINESS.locality,
          addressRegion: BUSINESS.region,
          postalCode: BUSINESS.postalCode,
          addressCountry: "IN",
        },
      },
      skills: role.requiredSkills.join(", "),
      "experienceRequirements" : {
        "@type" : "OccupationalExperienceRequirements",
        "monthsOfExperience" : "36"
      },
      directApply: true,
      baseSalary:{
         "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "value": 300000,
          "unitText": "YEAR"
      }}
    })),
    ...OPPORTUNITIES.filter((o) => o.type === "training").map((program) => ({
      "@type": "Course",
      name: program.title,
      description: program.description,
      provider: {
        "@type": "Organization",
        name: BUSINESS.name,
        sameAs: SITE_URL,
      },
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Careers",
          item: `${SITE_URL}/career`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ==========================================================================
   4. PAGE
   ========================================================================== */
export default function CareerPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? OPPORTUNITIES
      : OPPORTUNITIES.filter((item) => item.type === activeFilter);

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
          aria-labelledby="career-hero-heading"
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-cream-border/60"
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
                    Careers
                  </li>
                </ol>
              </nav>

              <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
                • Careers • Internships • Training
              </span>
              <h1
                id="career-hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6"
              >
                IT Jobs, Internships &amp; Training in{" "}
                <span className="font-display italic text-accent font-normal block sm:inline">
                  Ponda, Goa.
                </span>
              </h1>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
                Fixbug Infotech is a software company in Ponda, Goa. Join our
                team, start an internship or learn software development through
                our training programs. Browse the {COUNTS.all} current
                openings and programs below.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OPPORTUNITIES ================= */}
        <section
          id="opportunities"
          className="py-20 md:py-28"
          aria-labelledby="open-roles-heading"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Header & filter */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-cream-border gap-6">
              <div>
                <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Open opportunities ({COUNTS.all})
                </span>
                <h2
                  id="open-roles-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                  Jobs, internships{" "}
                  <span className="font-display italic text-accent font-normal">
                    &amp; training programs
                  </span>
                </h2>
              </div>

              <div
                className="flex flex-wrap items-center gap-2 bg-cream-soft p-1.5 rounded-3xl border border-cream-border w-fit"
                role="group"
                aria-label="Filter opportunities by type"
              >
                {FILTERS.map((f) => {
                  const Icon = f.icon;
                  const active = activeFilter === f.key;
                  return (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActiveFilter(f.key)}
                      aria-pressed={active}
                      className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                        active
                          ? "bg-charcoal text-cream-soft shadow-xs"
                          : "text-muted hover:text-charcoal"
                      }`}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
                      <span>
                        {f.label} ({COUNTS[f.key]})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="sr-only" aria-live="polite">
              Showing {filtered.length} of {COUNTS.all} opportunities
            </p>

            {/* Cards */}
            <div className="space-y-8">
              {filtered.map((item) => {
                const cfg = TYPE_CONFIG[item.type];
                const TypeIcon = cfg.icon;
                const subject = `${cfg.ctaVerb} ${item.title}`;

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className={`group rounded-3xl border transition-all duration-300 p-8 sm:p-10 md:p-12 relative overflow-hidden scroll-mt-28 ${cfg.card}`}
                  >
                    {cfg.ribbon && (
                      <div className="absolute top-0 right-0 bg-accent text-cream-soft text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                        {cfg.ribbon}
                      </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Details */}
                      <div className="lg:col-span-8 space-y-6">
                        <header className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${cfg.badge}`}
                            >
                              <TypeIcon className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>{item.typeLabel}</span>
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted px-3 py-1 rounded-full bg-cream border border-cream-border">
                              {item.department}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-charcoal group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-muted font-medium pt-1">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                              <span>{item.location}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-muted" aria-hidden="true" />
                              <span>{item.workType}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cream text-charcoal font-semibold border border-cream-border">
                              {item.type === "training" ? "For" : "Exp"}: {item.experience}
                            </span>
                          </div>
                        </header>

                        <p className="text-muted text-base leading-relaxed max-w-2xl">
                          {item.description}
                        </p>

                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal block mb-3">
                            {cfg.skillsLabel}
                          </h4>
                          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                            {item.requiredSkills.map((skill) => (
                              <li
                                key={skill}
                                className="text-xs font-medium bg-cream text-charcoal/90 px-3 py-1.5 rounded-lg border border-cream-border group-hover:border-accent/30 transition-colors"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <ul className="space-y-1.5 pt-2">
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/80"
                            >
                              <CheckCircle2
                                className="w-4 h-4 text-accent shrink-0"
                                aria-hidden="true"
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action */}
                      <div className="lg:col-span-4 flex lg:flex-col justify-between items-end h-full pt-4 lg:pt-0 border-t lg:border-t-0 border-cream-border">
                        <div className="hidden lg:block text-right space-y-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted block">
                            Status
                          </span>
                          <div className="flex items-center justify-end gap-2 text-sm font-bold text-emerald-700">
                            <span
                              className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                              aria-hidden="true"
                            />
                            <span>{cfg.status}</span>
                          </div>
                        </div>

                        <div className="w-full lg:w-auto mt-auto pt-6">
                          <Link
                            href={`/contact?subject=${encodeURIComponent(subject)}`}
                            aria-label={`${cfg.ctaLabel}: ${item.title}`}
                            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${cfg.cta}`}
                          >
                            <span>{cfg.ctaLabel}</span>
                            <ArrowUpRight
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section
          className="py-20 md:py-28 bg-cream-soft border-y border-cream-border"
          aria-labelledby="culture-heading"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-16">
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                Work &amp; learn with us
              </span>
              <h2
                id="culture-heading"
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              >
                Why join{" "}
                <span className="font-display italic text-accent font-normal">
                  Fixbug Infotech?
                </span>
              </h2>
              <p className="text-muted text-base md:text-lg">
                We are a software company and training institute in Ponda that
                cares about practical skills, honest feedback and real
                projects.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0">
              {PERKS.map((perk) => {
                const Icon = perk.icon;
                return (
                  <li
                    key={perk.title}
                    className="bg-cream p-8 rounded-2xl border border-cream-border hover:border-accent/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cream-soft flex items-center justify-center border border-cream-border text-accent mb-6">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3 text-charcoal">
                      {perk.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 md:py-28" aria-labelledby="career-faq-heading">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-12">
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                Frequently asked questions
              </span>
              <h2
                id="career-faq-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Careers, internships &amp;{" "}
                <span className="font-display italic text-accent font-normal">
                  training in Ponda
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-cream-soft border border-cream-border p-6 open:border-accent/40 transition-colors"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base sm:text-lg font-semibold text-charcoal [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <ChevronDown
                      className="w-5 h-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OPEN APPLICATION ================= */}
        <section
          className="py-20 md:py-28 bg-charcoal text-cream-soft relative overflow-hidden"
          aria-labelledby="open-application-heading"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
            <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              • General enquiries •
            </span>
            <h2
              id="open-application-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              Don&apos;t see the right fit? Send us an{" "}
              <span className="font-display italic text-accent font-normal">
                open application.
              </span>
            </h2>
            <p className="text-cream-soft/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              We are always happy to hear from developers, designers and
              learners - or ask about the next training batch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/contact?subject=Open%20Application"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
              >
                <span>Submit Open Application</span>
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/training"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-cream-soft/10 transition-all"
              >
                <span>Explore Training Courses</span>
              </Link>
            </div>

            <address className="not-italic flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-4 text-sm text-cream-soft/80 pt-8 border-t border-cream-soft/15">
              <span className="inline-flex items-center gap-2 text-center">
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                {BUSINESS.street}, {BUSINESS.locality}, {BUSINESS.region}{" "}
                {BUSINESS.postalCode}
              </span>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </address>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}