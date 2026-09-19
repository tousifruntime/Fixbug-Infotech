import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowreelModal from "@/components/ShowreelModal";
import HeroVideo from "../components/Herovideo";
import {ArrowUpRight,ArrowRight,Sparkles,Cpu,ShieldCheck,CheckCircle2,Code2,Globe,Smartphone,Cloud,Wrench,GraduationCap,Users,Briefcase,MapPin,Phone,Mail,Rocket,ChevronDown,} from "lucide-react";
 
const SITE_URL = "https://fixbuginfotech.online";

const BUSINESS = {
  name: "Fixbug Infotech",
  phone: "+91  776069948", // TODO: your real phone number (display format)
  phoneHref: "+91 776069948", // TODO: same number, digits only with country code
  email: "fixbuginfotech@gmail.com", // TODO: your real email
  street: "Sharifa Residency, B-FF4, Nagamasjid Ponda, Goa", // TODO: your real street address
  locality: "Ponda",
  region: "Goa",
  postalCode: "403401",
  country: "IN",
  geo: { lat: 15.406549816354703, lng: 74.00625077284612 },
};

/* ==========================================================================
   2. SEO METADATA  (works because this page is a Server Component)
   ========================================================================== */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software Company in Ponda, Goa | IT Training - Fixbug Infotech",
  description:
    "Fixbug Infotech is a software & IT company in Ponda, Goa offering custom software, website, app & AI development plus hands-on software training in MERN Stack, Python & Cloud.",
  keywords: [
    "software company in Ponda",
    "IT company in Ponda",
    "software training in Ponda",
    "software company in Goa",
    "IT company in Goa",
    "IT training institute in Ponda",
    "web development company in Ponda",
    "website design in Ponda Goa",
    "mobile app development Goa",
    "MERN stack training in Goa",
    "full stack development course in Ponda",
    "Python course in Ponda",
    "cloud computing course in Goa",
    "AWS training in Goa",
    "internship in Ponda Goa",
    "AI automation company Goa",
    "Fixbug Infotech",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Fixbug Infotech", url: SITE_URL }],
  creator: "Fixbug Infotech",
  publisher: "Fixbug Infotech",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Fixbug Infotech",
    locale: "en_IN",
    title: "Software Company & IT Training in Ponda, Goa | Fixbug Infotech",
    description:
      "Custom software, websites, apps & AI automation - plus practical software training in MERN Stack, Python and Cloud. Based in Ponda, Goa.",
    images: [
      {
        url: "/og-image.png", // TODO: add a 1200x630 image at /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Fixbug Infotech - software company and training institute in Ponda, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company & IT Training in Ponda, Goa | Fixbug Infotech",
    description:
      "Custom software, websites, apps & AI automation - plus software training in Ponda, Goa.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "IN-GA",
    "geo.placename": "Ponda, Goa",
    "geo.position": `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    ICBM: `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
  },
};

/* ==========================================================================
   3. PAGE CONTENT (edit copy here - keep only what is true for your business)
   ========================================================================== */
const SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Tailor-made business software - billing, inventory, ERP and CRM tools - built around the way your company in Ponda actually works.",
    tags: ["Custom Software", "ERP & CRM", "Billing & Inventory"],
  },
  {
    icon: Globe,
    title: "Website & Web App Development",
    desc: "Fast, SEO-friendly websites and web applications in Next.js, React and the MERN stack for local businesses, startups and enterprises.",
    tags: ["Next.js & React", "MERN Stack", "SEO-Ready"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and iOS apps for bookings, delivery, e-commerce and internal operations, backed by reliable APIs and clean UX.",
    tags: ["Android & iOS", "Cross-Platform", "API Back-ends"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation Solutions",
    desc: "Chatbots, RAG assistants and autonomous workflows that remove repetitive manual work and plug into the tools you already use.",
    tags: ["AI Chatbots", "RAG Pipelines", "Workflow Automation"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud hosting, Docker, CI/CD pipelines and monitoring on AWS, Azure or GCP so your product stays fast, secure and online.",
    tags: ["AWS / Azure / GCP", "Docker & CI/CD", "Monitoring"],
  },
  {
    icon: Wrench,
    title: "IT Support & Maintenance",
    desc: "Ongoing updates, bug fixing, security patches and technical support for the websites, apps and software you already run.",
    tags: ["Bug Fixing", "Security Updates", "Annual Support"],
  },
];

const COURSES = [
  {
    icon: Code2,
    title: "Full Stack Web Development (MERN)",
    level: "Beginner to Advanced",
    desc: "Learn MongoDB, Express, React and Node.js by building real projects - from HTML, CSS and JavaScript basics to deploying a complete full-stack application.",
    topics: ["HTML, CSS & JavaScript", "React & Next.js", "Node, Express & MongoDB"],
  },
  {
    icon: Cpu,
    title: "Python Programming & Automation",
    level: "Beginner friendly",
    desc: "Start from zero with Python fundamentals, then move on to scripting, automation and backend development through hands-on exercises.",
    topics: ["Python Basics", "OOP & Problem Solving", "Automation & APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & DevOps (AWS / Azure)",
    level: "Intermediate",
    desc: "Understand cloud services, Linux, Docker, CI/CD and deployment the way modern software teams work.",
    topics: ["AWS & Azure Basics", "Docker & Linux", "CI/CD Pipelines"],
  },
  {
    icon: Rocket,
    title: "Internship & Career Preparation",
    level: "Job-ready track",
    desc: "Resume building, GitHub portfolio, mock interviews and live project work to help freshers get ready for software roles.",
    topics: ["Live Projects", "Mock Interviews", "Resume & Portfolio"],
  },
];

const AUDIENCE = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "BCA, BSc IT, engineering and diploma students in Ponda and across Goa who want practical skills beyond the syllabus.",
  },
  {
    icon: Users,
    title: "Freshers & job seekers",
    desc: "Graduates who want a portfolio of real projects and the confidence to clear technical interviews.",
  },
  {
    icon: Briefcase,
    title: "Professionals & career switchers",
    desc: "Working people moving into software development, cloud or automation from another field.",
  },
];

const ADVANTAGES = [
  {
    icon: MapPin,
    title: "A local team in Ponda, Goa",
    desc: "Meet us in person, discuss your requirements face to face and get support from a team based in your own city.",
  },
  {
    icon: Rocket,
    title: "Practical, project-based approach",
    desc: "Whether we are building your product or training your future developers, we focus on real projects and working results, not theory alone.",
  },
  {
    icon: Cpu,
    title: "Modern technology stack",
    desc: "Next.js, React, Node.js, Python, cloud and AI - the same tools we teach are the ones we use to ship client work.",
  },
  {
    icon: ShieldCheck,
    title: "Clean, maintainable code",
    desc: "Modular design, clear documentation and code your in-house team or your next developer can actually understand and extend.",
  },
];

const AREAS = [
  "Ponda",
  "Farmagudi",
  "Bandora",
  "Curti",
  "Usgao",
  "Shiroda",
  "Borim",
  "Kundaim",
  "Marcel",
  "Priol",
  "Margao (Madgaon)",
  "Panaji",
  "Vasco",
  "Mapusa",
  "Bicholim",
];

const FAQS = [
  {
    q: "Which software company in Ponda builds custom software and websites?",
    a: "Fixbug Infotech is a software and IT company in Ponda, Goa. We build custom software, websites, web apps, mobile apps and AI automation solutions for local businesses, startups and larger enterprises.",
  },
  {
    q: "Do you provide software training in Ponda for beginners?",
    a: "Yes. Our software training programs in Ponda start from the fundamentals, so no prior coding experience is needed. Courses cover Full Stack (MERN) development, Python and Cloud & DevOps with a project-based approach.",
  },
  {
    q: "Which IT courses can I learn at Fixbug Infotech?",
    a: "We teach Full Stack Web Development with the MERN stack, Python Programming, Cloud Computing & DevOps (AWS / Azure), plus internship and career preparation. Contact us for the latest batch details.",
  },
  {
    q: "Who can join the IT training in Ponda?",
    a: "Students, fresh graduates, job seekers, working professionals and career switchers can all join. Our training is designed to take you from basics to building real projects.",
  },
  {
    q: "Can you build a website or app for a small business in Goa?",
    a: "Absolutely. We design and develop business websites, booking systems, e-commerce stores and mobile apps for small and medium businesses in Ponda and across Goa, with clear scope and timelines.",
  },
  {
    q: "How do I get a quote or enquire about a course?",
    a: "Use our contact page, call us or visit our office in Ponda. Tell us what you need and we will reply with a clear plan - a project quote for software work, or batch and course details for training.",
  },
];

const PILLARS = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom software, websites, mobile apps and AI automation for businesses.",
    href: "/service",
    cta: "See our services",
  },
  {
    icon: GraduationCap,
    title: "Software Training",
    desc: "Hands-on courses in MERN Stack, Python and Cloud for students and freshers.",
    href: "/training",
    cta: "See our courses",
  },
];

const STATS = [
  { value: "Software + Training", label: "Two divisions, one team" },
  { value: "MERN · Python · Cloud", label: "Core technologies we build and teach" },
  { value: "Ponda, Goa", label: "Local office and support" },
];

/* ==========================================================================
   4. STRUCTURED DATA (JSON-LD) - generated from the same content as the page
   NOTE: aggregateRating was removed on purpose. Marking up reviews that do
   not exist on a public review platform can lead to a Google penalty. Add it
   back only when you have real, verifiable reviews.
   ========================================================================== */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "EducationalOrganization"],
      "@id": `${SITE_URL}/#organization`,
      name: BUSINESS.name,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.png`,
      description:
        "Software company and IT training institute in Ponda, Goa. We build custom software, websites, mobile apps and AI automation, and teach MERN Stack, Python and Cloud Computing.",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.locality,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.lat,
        longitude: BUSINESS.geo.lng,
      },
      areaServed: [
        { "@type": "City", name: "Ponda" },
        { "@type": "AdministrativeArea", name: "Goa" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Software development",
        "Web development",
        "Mobile app development",
        "AI automation",
        "Cloud computing",
        "MERN stack training",
        "Python training",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software development services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            areaServed: "Ponda, Goa, India",
          },
        })),
      },
      // sameAs: ["https://www.linkedin.com/company/...", "https://www.instagram.com/..."], // TODO: add your real profiles
    },
    ...COURSES.map((c) => ({
      "@type": "Course",
      name: c.title,
      description: c.desc,
      provider: {
        "@type": "Organization",
        name: BUSINESS.name,
        url: SITE_URL,
      },
    })),
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
   5. PAGE
   ========================================================================== */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent/20 selection:text-accent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <main className="grow">
        {/* ================= HERO ================= */}
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 pb-16"
        >
          <HeroVideo />

          {/* Gradients keep the text readable on the left, video visible on the right */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[55%] lg:w-[48%] bg-linear-to-r from-cream via-cream/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-cream/90 via-cream/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-cream via-cream/70 to-transparent z-10 pointer-events-none" />

          <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  • We Build • We Automate • We Train
                </span>
              </div>

              {/* The one and only H1 - contains the primary local keywords */}
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6"
              >
                Software Company &amp; IT Training in{" "}
                <span className="font-display italic text-accent font-normal">
                  Ponda, Goa.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl">
                Fixbug Infotech is an IT company in Ponda that builds custom
                software, websites, mobile apps and AI automation for
                businesses - and runs hands-on software training in MERN Stack,
                Python and Cloud for students and freshers.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/training"
                  className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:border-charcoal hover:bg-charcoal/5 transition-all duration-300"
                >
                  <span>Explore Training Courses</span>
                </Link>
              </div>

              {/* Trust row (facts only - no invented numbers) */}
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-cream-border/60">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  Based in Ponda, Goa
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted">
                  <Code2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  Software development
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted">
                  <GraduationCap className="w-4 h-4 text-accent" aria-hidden="true" />
                  Project-based training
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-24 sm:py-32 border-t border-cream-border/70 bg-cream"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  About Fixbug Infotech
                </span>
                <h2
                  id="about-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-snug"
                >
                  A Ponda software company that also{" "}
                  <span className="font-display italic text-accent font-normal">
                    trains tomorrow&apos;s developers
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <p className="text-lg sm:text-2xl font-normal text-charcoal/90 leading-relaxed">
                  Fixbug Infotech is a software and IT company in Ponda, Goa. We
                  design and build custom software, websites, mobile apps and
                  AI-powered automation - and we teach the same skills through
                  practical software training programs.
                </p>
                <p className="text-muted leading-relaxed max-w-3xl">
                  Because we build real products every day, our training is
                  different: you learn the tools, workflows and best practices
                  we actually use on client projects, not just textbook theory.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {PILLARS.map((p) => (
                    <Link
                      key={p.title}
                      href={p.href}
                      className="group p-6 rounded-2xl bg-cream-soft/60 border border-cream-border/60 hover:border-accent/40 transition-colors"
                    >
                      <div className="p-3 w-fit rounded-full bg-cream text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300 mb-4">
                        <p.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {p.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-accent transition-colors">
                        {p.cta}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-cream-border">
                  {STATS.map((s) => (
                    <div
                      key={s.value}
                      className="p-4 rounded-xl bg-cream-soft/60 border border-cream-border/50"
                    >
                      <dt className="text-xl sm:text-2xl font-bold text-charcoal leading-snug">
                        {s.value}
                      </dt>
                      <dd className="text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SOFTWARE SERVICES ================= */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-24 sm:py-32 bg-cream-soft border-y border-cream-border/60"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-3xl">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  Software development services
                </span>
                <h2
                  id="services-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal"
                >
                  IT company in Ponda,{" "}
                  <span className="font-display italic text-accent font-normal">
                    building software that works.
                  </span>
                </h2>
                <p className="text-muted leading-relaxed mt-4">
                  From a simple business website to a complete custom software
                  system, we help companies in Ponda, across Goa and beyond
                  turn ideas into reliable digital products.
                </p>
              </div>
              <Link
                href="/service"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-accent transition-colors shrink-0"
              >
                <span>View all services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="group p-8 rounded-2xl bg-cream border border-cream-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-full bg-cream-soft text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300 mb-6">
                      <s.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">{s.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-border/60">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TRAINING ================= */}
        <section
          id="training"
          aria-labelledby="training-heading"
          className="py-24 sm:py-32 bg-cream"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-3xl">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  Software training institute
                </span>
                <h2
                  id="training-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal"
                >
                  Software training in Ponda,{" "}
                  <span className="font-display italic text-accent font-normal">
                    taught by working developers.
                  </span>
                </h2>
                <p className="text-muted leading-relaxed mt-4">
                  Learn coding the practical way. Our IT training courses in
                  Ponda take you from the basics to building real projects
                  you can show to employers.
                </p>
              </div>
              <Link
                href="/training"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-accent transition-colors shrink-0"
              >
                <span>View all courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COURSES.map((c) => (
                <article
                  key={c.title}
                  className="group p-8 sm:p-10 rounded-2xl bg-cream-soft border border-cream-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-full bg-cream text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300">
                        <c.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-accent px-3 py-1 rounded-full bg-accent/10">
                        {c.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">{c.desc}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 pt-4 border-t border-cream-border/60">
                    {c.topics.map((t) => (
                      <li
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-cream text-muted font-medium"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Who is it for */}
            <div className="mt-16 pt-12 border-t border-cream-border">
              <h3 className="text-2xl font-bold text-charcoal mb-8">
                Who can join our IT training in Ponda?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {AUDIENCE.map((a) => (
                  <div key={a.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                      <a.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal mb-1">
                        {a.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="py-24 sm:py-32 bg-cream-soft border-y border-cream-border/60"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  Our portfolio
                </span>
                <h2
                  id="portfolio-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal"
                >
                  Featured{" "}
                  <span className="font-display italic text-accent font-normal">
                    projects &amp; case studies
                  </span>
                </h2>
              </div>
              <Link
                href="/product"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-accent transition-colors shrink-0"
              >
                <span>View all projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Project 1 */}
              <article className="group rounded-3xl bg-cream border border-cream-border overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80"
                    alt="Personal portfolio website developed by Fixbug Infotech, web development company in Ponda, Goa"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-cream px-3 py-1 rounded-full text-xs font-medium">
                    Personal Portfolio
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-charcoal group-hover:text-accent transition-colors mb-2">
                    Personal Portfolio Website
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    A clean, responsive portfolio website that showcases
                    projects, technical skills and experience in one place. The
                    focus was on a simple, fast design that is easy to navigate
                    on desktop and mobile.
                  </p>
                </div>
              </article>

              {/* Project 2 */}
              <article className="group rounded-3xl bg-cream border border-cream-border overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80"
                    alt="Car rental booking website built with the MERN stack by Fixbug Infotech"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-cream px-3 py-1 rounded-full text-xs font-medium">
                    Car Rental Website
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-accent transition-colors">
                      Car Rental Website
                    </h3>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider shrink-0">
                      MERN Stack
                    </span>
                  </div>

                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                    A car rental website that makes booking a vehicle easier.
                    Visitors can browse available cars, check details, call the
                    rental service directly and request a booking based on their
                    travel plans.
                  </p>

                  <Link
                    href="/car-rental"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-accent transition-colors"
                  >
                    <span>View website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= WHY FIXBUG ================= */}
        <section
          id="why-us"
          aria-labelledby="why-heading"
          className="py-24 sm:py-32 bg-cream"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  Why choose Fixbug Infotech
                </span>
                <h2
                  id="why-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal leading-tight mb-6"
                >
                  Your local IT partner,{" "}
                  <span className="font-display italic text-accent font-normal">
                    for projects and for learning.
                  </span>
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  We avoid cookie-cutter code and unnecessary complexity. Every
                  project we deliver and every student we train gets the same
                  standard: clear communication, honest timelines and work that
                  actually runs.
                </p>
                <div className="p-6 rounded-2xl bg-cream-soft border border-cream-border">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" aria-hidden="true" />
                    <p className="font-display italic text-xl text-charcoal">
                      Our promise
                    </p>
                  </div>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Talk to us first, decide later. We will explain the scope,
                    timeline and cost of your project - or the syllabus and
                    schedule of your course - before you commit to anything.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ADVANTAGES.map((a) => (
                  <div
                    key={a.title}
                    className="p-6 sm:p-8 rounded-2xl bg-cream-soft border border-cream-border hover:border-accent/30 transition-colors"
                  >
                    <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent mb-4">
                      <a.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {a.title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= AREAS + FAQ ================= */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-24 sm:py-32 bg-cream-soft border-y border-cream-border/60"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  Frequently asked questions
                </span>
                <h2
                  id="faq-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-snug mb-6"
                >
                  Questions about our software company &amp; training in{" "}
                  <span className="font-display italic text-accent font-normal">
                    Ponda
                  </span>
                </h2>

                <div className="p-6 rounded-2xl bg-cream border border-cream-border">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-charcoal">
                      Areas we serve
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    Based in Ponda, we work with businesses and students across
                    Goa - and with clients anywhere in India remotely.
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {AREAS.map((a) => (
                      <li
                        key={a}
                        className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {FAQS.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl bg-cream border border-cream-border p-6 open:border-accent/40 transition-colors"
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
          </div>
        </section>

        {/* ================= CONTACT / FINAL CTA ================= */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-20 sm:py-28 bg-cream"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative rounded-3xl bg-charcoal text-cream-soft p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-4">
                    Contact us
                  </span>
                  <h2
                    id="contact-heading"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-soft mb-6 leading-tight"
                  >
                    Need a software partner, or want to learn to code in{" "}
                    <span className="font-display italic text-accent font-normal">
                      Ponda?
                    </span>
                  </h2>
                  <p className="text-cream-soft/80 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                    Tell us about your project or the course you are interested
                    in. We will get back to you with a clear plan.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-cream px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30"
                    >
                      <span>Get a Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/training"
                      className="inline-flex items-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream-soft/10 transition-all"
                    >
                      <span>Enquire About Training</span>
                    </Link>
                  </div>
                </div>

                {/* NAP block - must match your Google Business Profile exactly */}
                <address className="lg:col-span-5 not-italic space-y-5 text-cream-soft/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm sm:text-base leading-relaxed">
                      <span className="font-semibold text-cream-soft">
                        {BUSINESS.name}
                      </span>
                      <br />
                      {BUSINESS.street}
                      <br />
                      {BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postalCode}, India
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <a
                      href={`tel:${BUSINESS.phoneHref}`}
                      className="text-sm sm:text-base hover:text-accent transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-sm sm:text-base hover:text-accent transition-colors break-all"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Showreel Modal */}
      <ShowreelModal />
    </div>
  );
}