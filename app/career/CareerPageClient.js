"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {ArrowUpRight,Briefcase,GraduationCap,MapPin,Clock,Sparkles,Zap,Code2,Cpu,Laptop,CheckCircle2,ArrowRight,} from "lucide-react";

const SITE_URL = "https://www.fixbuginfotech.com";

export default function CareerPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const opportunities = [
    {
      id: "job-1",
      type: "job",
      typeLabel: "Full-Time Role",
      title: "Senior AI / ML Systems Engineer",
      department: "AI Research & Core Engineering",
      location: "Mumbai, India",
      workType: "Hybrid / Flexible",
      employmentType: "FULL_TIME",
      experience: "3+ Years",
      datePosted: "2026-08-01",
      validThrough: "2026-12-31",
      description:
        "Architect, fine-tune, and deploy enterprise-grade LLM systems, autonomous reasoning agent loops, and high-performance vector retrieval (RAG) pipelines for mission-critical client deployments.",
      requiredSkills: [
        "PyTorch & Python",
        "LLM Fine-Tuning & Quantization",
        "RAG Architectures (Pinecone / Qdrant)",
        "LangChain & LlamaIndex",
        "FastAPI & Docker",
        "Model Evaluation & Safety Alignment",
      ],
      highlights: [
        "Direct ownership of enterprise AI agent architectures",
        "Generous compute budget on high-end GPU clusters",
        "Competitive equity package + annual performance bonus",
      ],
    },
    {
      id: "job-2",
      type: "job",
      typeLabel: "Full-Time Role",
      title: "Lead Full-Stack Engineer (Next.js & Cloud)",
      department: "Web & Platform Engineering",
      location: "Remote / Hybrid",
      workType: "Full-Time",
      employmentType: "FULL_TIME",
      experience: "4+ Years",
      datePosted: "2026-08-01",
      validThrough: "2026-12-31",
      description:
        "Lead frontend and backend system engineering for ultra-fast Next.js applications, building modular micro-frontends, real-time streaming interfaces, and robust GraphQL/REST API backends.",
      requiredSkills: [
        "Next.js 15 (App Router)",
        "React 19 & TypeScript",
        "Tailwind CSS & Framer Motion",
        "Node.js & Go",
        "PostgreSQL & Redis",
        "WebSocket & Real-time Telemetry",
      ],
      highlights: [
        "Shape the core frontend design system & micro-architectures",
        "Work on high-traffic platforms with sub-50ms TTFB requirements",
        "Flexible work hours and top-tier equipment setup",
      ],
    },
    {
      id: "job-3",
      type: "job",
      typeLabel: "Full-Time Role",
      title: "Cloud & DevOps Architect",
      department: "Infrastructure & Platform Reliability",
      location: "Remote",
      workType: "Full-Time",
      employmentType: "FULL_TIME",
      experience: "3+ Years",
      datePosted: "2026-08-01",
      validThrough: "2026-12-31",
      description:
        "Design zero-downtime multi-cloud infrastructure, automated continuous deployment pipelines, and high-security Kubernetes environments supporting distributed global microservices.",
      requiredSkills: [
        "AWS / GCP Multi-Region Architecture",
        "Kubernetes (EKS / GKE) & Helm",
        "Terraform / OpenTofu (IaC)",
        "CI/CD (GitHub Actions / ArgoCD)",
        "Observability (Datadog / Prometheus)",
        "Zero-Trust Cloud Security",
      ],
      highlights: [
        "Architect mission-critical zero-downtime deployment pipelines",
        "Implement bleeding-edge serverless and edge infrastructure",
        "Comprehensive health & wellness coverage for you and family",
      ],
    },
    {
      id: "intern-1",
      type: "internship",
      typeLabel: "Internship Role",
      title: "AI Software Engineering Intern",
      department: "Emerging Technologies & Prototyping",
      location: "Mumbai, India",
      workType: "Hybrid (Paid 6-Month Internship + PPO)",
      employmentType: "INTERN",
      experience: "Freshers / Final Year Students",
      datePosted: "2026-08-01",
      validThrough: "2026-12-31",
      description:
        "Collaborate closely with senior AI engineers to develop proof-of-concept AI agents, benchmark state-of-the-art open models, and build interactive demonstration interfaces for enterprise clients.",
      requiredSkills: [
        "Proficiency in Python and/or JavaScript/TypeScript",
        "Understanding of Machine Learning & Foundation Model basics",
        "Familiarity with Git and Modern Web Frameworks (Next.js / FastAPI)",
        "Strong algorithmic foundation & problem-solving curiosity",
        "Eagerness to learn production deployment standards",
      ],
      highlights: [
        "Direct 1-on-1 mentorship from seasoned engineering leads",
        "Fast-track Pre-Placement Offer (PPO) conversion for top performers",
        "Hands-on real enterprise codebase contributions from week one",
      ],
    },
  ];

  // JobPosting structured data — enables Google Jobs rich results
  const jobPostingsJsonLd = opportunities.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    datePosted: role.datePosted,
    validThrough: role.validThrough,
    employmentType: role.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Fixbug Infotech",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.location.split(",")[0].trim(),
        addressCountry: role.location.toLowerCase().includes("india")
          ? "IN"
          : undefined,
      },
    },
    ...(role.location.toLowerCase().includes("remote") && {
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "IN",
      },
    }),
    skills: role.requiredSkills.join(", "),
    experienceRequirements: role.experience,
    directApply: true,
  }));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
  };

  const filteredOpportunities =
    activeFilter === "all"
      ? opportunities
      : opportunities.filter((item) => item.type === activeFilter);

  const perks = [
    {
      icon: Cpu,
      title: "High-End Hardware & Compute",
      description:
        "Latest M3/M4 Max MacBooks and dedicated GPU compute instances for seamless experimentation and local development.",
    },
    {
      icon: Laptop,
      title: "Autonomous Work Culture",
      description:
        "We measure output, architectural elegance, and velocity — not hours logged in a seat. Flexible hybrid & remote options.",
    },
    {
      icon: Sparkles,
      title: "Continuous Learning Fund",
      description:
        "Generous annual stipend for technical certifications, research papers, and global AI conferences.",
    },
    {
      icon: Zap,
      title: "High-Impact Engineering",
      description:
        "Work on mission-critical platforms used by global enterprises. Zero red tape, rapid deployment cycles.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent selection:text-cream-soft">
      {jobPostingsJsonLd.map((jsonLd, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-cream-border/60">
        <div className="absolute inset-0 bg-linear-to-b from-cream-soft via-cream to-cream pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              • JOIN THE COLLECTIVE • CAREERS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6">
              Build the Future of{" "}
              <span className="font-display italic text-accent font-normal block sm:inline">
                Intelligent Software.
              </span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              We are a team of curious builders, AI engineers, and systems architects solving complex problems with elegance. Explore our {opportunities.length} current openings below.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Overview & Filter Bar */}
      <section className="py-20 md:py-28" aria-labelledby="open-roles-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-border gap-6">
            <div>
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                OPEN OPPORTUNITIES ({opportunities.length} POSITIONS)
              </span>
              <h2 id="open-roles-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
                Available{" "}
                <span className="font-display italic text-accent font-normal">
                  Roles & Programs
                </span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div
              className="flex items-center gap-2 bg-cream-soft p-1.5 rounded-full border border-cream-border"
              role="group"
              aria-label="Filter job openings by type"
            >
              <button
                onClick={() => setActiveFilter("all")}
                aria-pressed={activeFilter === "all"}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeFilter === "all"
                    ? "bg-charcoal text-cream-soft shadow-xs"
                    : "text-muted hover:text-charcoal"
                }`}
              >
                All Openings ({opportunities.length})
              </button>
              <button
                onClick={() => setActiveFilter("job")}
                aria-pressed={activeFilter === "job"}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === "job"
                    ? "bg-charcoal text-cream-soft shadow-xs"
                    : "text-muted hover:text-charcoal"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Job Roles (3)</span>
              </button>
              <button
                onClick={() => setActiveFilter("internship")}
                aria-pressed={activeFilter === "internship"}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === "internship"
                    ? "bg-charcoal text-cream-soft shadow-xs"
                    : "text-muted hover:text-charcoal"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Internships (1)</span>
              </button>
            </div>
          </div>

          {/* Opportunities Cards Grid */}
          <div className="space-y-8">
            {filteredOpportunities.map((role) => {
              const isInternship = role.type === "internship";

              return (
                <article
                  key={role.id}
                  id={role.id}
                  className={`group rounded-3xl border transition-all duration-300 p-8 sm:p-10 md:p-12 relative overflow-hidden ${
                    isInternship
                      ? "bg-cream-soft/90 border-accent/40 shadow-sm hover:shadow-md hover:border-accent"
                      : "bg-cream-soft border-cream-border hover:border-charcoal/40 hover:shadow-md"
                  }`}
                >
                  {/* Subtle top indicator for Internship distinction */}
                  {isInternship && (
                    <div className="absolute top-0 right-0 bg-accent text-cream-soft text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                      Early Career Program
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Role Details */}
                    <div className="lg:col-span-8 space-y-6">
                      <header className="space-y-3">
                        {/* Type & Department Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                              isInternship
                                ? "bg-accent/15 text-accent border border-accent/30"
                                : "bg-charcoal text-cream-soft"
                            }`}
                          >
                            {isInternship ? (
                              <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                            ) : (
                              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                            )}
                            <span>{role.typeLabel}</span>
                          </span>

                          <span className="text-xs font-semibold uppercase tracking-wider text-muted px-3 py-1 rounded-full bg-cream border border-cream-border">
                            {role.department}
                          </span>
                        </div>

                        {/* Position Name */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-charcoal group-hover:text-accent transition-colors">
                          {role.title}
                        </h3>

                        {/* Location & Experience Meta */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-muted font-medium pt-1">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                            <span>{role.location}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-muted" aria-hidden="true" />
                            <span>{role.workType}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cream text-charcoal font-semibold border border-cream-border">
                            Exp: {role.experience}
                          </span>
                        </div>
                      </header>

                      {/* Description */}
                      <p className="text-muted text-base leading-relaxed max-w-2xl">
                        {role.description}
                      </p>

                      {/* Required Skills Section */}
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-charcoal block mb-3">
                          Required Skills & Technologies:
                        </span>
                        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                          {role.requiredSkills.map((skill, sIdx) => (
                            <li
                              key={sIdx}
                              className="text-xs font-medium bg-cream text-charcoal/90 px-3 py-1.5 rounded-lg border border-cream-border group-hover:border-accent/30 transition-colors"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Highlights */}
                      <div className="pt-2">
                        <ul className="space-y-1.5">
                          {role.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Apply Action */}
                    <div className="lg:col-span-4 flex lg:flex-col justify-between items-end lg:items-end h-full pt-4 lg:pt-0 border-t lg:border-t-0 border-cream-border">
                      <div className="hidden lg:block text-right space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Application Status
                        </span>
                        <div className="flex items-center justify-end gap-2 text-sm font-bold text-emerald-700">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                          <span>Actively Hiring</span>
                        </div>
                      </div>

                      <div className="w-full lg:w-auto mt-auto pt-6">
                        <Link
                          href={`/contact?subject=${encodeURIComponent(
                            `Application for ${role.title}`
                          )}`}
                          aria-label={`Apply now for ${role.title}`}
                          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${
                            isInternship
                              ? "bg-accent text-cream-soft hover:bg-accent/90"
                              : "bg-charcoal text-cream-soft hover:bg-accent"
                          }`}
                        >
                          <span>Apply Now</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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

      {/* Engineering Culture & Benefits */}
      <section className="py-20 md:py-28 bg-cream-soft border-y border-cream-border" aria-labelledby="culture-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
              OUR CULTURE & VALUES
            </span>
            <h2 id="culture-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Why Join{" "}
              <span className="font-display italic text-accent font-normal">
                Fixbug Infotech?
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg">
              We combine the rigor of high-stakes systems engineering with the creative freedom of an elite product studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="bg-cream p-8 rounded-2xl border border-cream-border hover:border-accent/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cream-soft flex items-center justify-center border border-cream-border text-accent mb-6">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3 text-charcoal">
                      {perk.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Application Banner */}
      <section className="py-20 md:py-28 bg-charcoal text-cream-soft relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            • GENERAL INQUIRIES •
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Don&apos;t see your specific role? Send us an{" "}
            <span className="font-display italic text-accent font-normal">
              open application.
            </span>
          </h2>
          <p className="text-cream-soft/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            We are always on the lookout for exceptional software engineers, AI researchers, and product designers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?subject=Open%20Engineering%20Application"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
            >
              <span>Submit Open Application</span>
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/service"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-cream-soft/10 transition-all"
            >
              <span>Explore What We Build</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}