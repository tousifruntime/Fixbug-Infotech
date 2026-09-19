import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {ArrowUpRight,ArrowRight,Code2,Globe,Smartphone,Sparkles,Cloud,Wrench,Zap,GraduationCap,MapPin,Phone,Mail,ChevronDown,} from "lucide-react";

 
const SITE_URL = "https://fixbuginfotech.online";

const BUSINESS = {
  name: "Fixbug Infotech",
  phone: "+91 7776069948", // TODO
  phoneHref: "+91 7776069948", // TODO
  email: "fixbuginfotech@gmail.com", // TODO
  street: "Sharifa Residency, B-FF4, Nagamasjid Ponda, Goa", // TODO
  locality: "Ponda",
  region: "Goa",
  postalCode: "403401",
};

/* ==========================================================================
   2. SEO METADATA
   ========================================================================== */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software & IT Services in Ponda, Goa | Fixbug Infotech",
  description:
    "Custom software, website, mobile app, AI automation, cloud & IT support services in Ponda, Goa by Fixbug Infotech. Get a free quote today.",
  keywords: [
    "software services in Ponda",
    "IT services in Ponda",
    "software development company in Ponda",
    "website development in Ponda",
    "web design company Ponda Goa",
    "mobile app development Goa",
    "custom software development Goa",
    "ERP CRM software Goa",
    "AI automation services Goa",
    "cloud and DevOps services India",
    "IT support and maintenance Ponda",
    "software training in Ponda",
    "Fixbug Infotech services",
  ],
  alternates: { canonical: "/service" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/service`,
    siteName: "Fixbug Infotech",
    locale: "en_IN",
    title: "Software & IT Services in Ponda, Goa | Fixbug Infotech",
    description:
      "Custom software, websites, mobile apps, AI automation, cloud and IT support for businesses in Ponda, Goa and beyond.",
    images: [
      {
        url: "/og-service.jpg", // TODO: add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Fixbug Infotech - software and IT services in Ponda, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & IT Services in Ponda, Goa | Fixbug Infotech",
    description:
      "Custom software, websites, mobile apps, AI automation, cloud and IT support in Ponda, Goa.",
    images: ["/og-service.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

    // 3. CONTENT (keep only what you genuinely offer) 
const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "Business Software",
    description:
      "Software built around the way your business actually works - from billing and inventory to full ERP and CRM systems - replacing spreadsheets and manual paperwork.",
    capabilities: [
      "Billing, inventory & POS systems",
      "ERP & CRM tools",
      "Admin dashboards & reports",
      "Role-based access & data security",
      "Migration from Excel and old systems",
    ],
    idealFor: "Shops, clinics, schools, distributors and growing SMEs",
    icon: Code2,
  },
  {
    id: "web-development",
    title: "Website & Web App Development",
    category: "Web Platforms",
    description:
      "Fast, secure and search-friendly websites and web applications built with Next.js, React and the MERN stack, designed to turn visitors into customers.",
    capabilities: [
      "Business & company websites",
      "Next.js & React web applications",
      "E-commerce & online booking systems",
      "UI/UX design & clickable prototypes",
      "Technical SEO & Core Web Vitals",
    ],
    idealFor: "Local businesses, startups and service providers",
    icon: Globe,
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    category: "Mobile Apps",
    description:
      "Android and iOS apps for bookings, delivery, e-commerce and internal operations, connected to a reliable back-end and built for smooth everyday use.",
    capabilities: [
      "Android & iOS apps",
      "Cross-platform development",
      "Payments & push notifications",
      "API and back-end development",
      "Play Store & App Store publishing",
    ],
    idealFor: "Booking, delivery, retail and service businesses",
    icon: Smartphone,
  },
  {
    id: "ai-automation",
    title: "AI & Workflow Automation",
    category: "Intelligent Automation",
    description:
      "Practical AI that saves time: chatbots, document search and automated workflows that take repetitive work off your team and plug into the tools you already use.",
    capabilities: [
      "AI chatbots & virtual assistants",
      "Search over your own documents (RAG)",
      "Multi-step workflow automation",
      "Invoice & form data extraction",
      "Integrations with CRM, ERP, email and messaging",
    ],
    idealFor: "Teams spending hours on repetitive manual work",
    icon: Sparkles,
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    category: "Infrastructure",
    description:
      "Reliable hosting and deployment on AWS, Azure or GCP, with automated pipelines and monitoring so your software stays fast, secure and online.",
    capabilities: [
      "AWS, Azure & GCP deployment",
      "Docker & CI/CD pipelines",
      "Backups, monitoring & uptime alerts",
      "Cost-conscious cloud setup",
      "SSL, security hardening & access control",
    ],
    idealFor: "Products moving to the cloud or outgrowing basic hosting",
    icon: Cloud,
  },
  {
    id: "it-support",
    title: "IT Support & Maintenance",
    category: "Ongoing Care",
    description:
      "Keep your website, app or software healthy after launch with regular updates, bug fixes, security patches and quick technical support.",
    capabilities: [
      "Bug fixing & troubleshooting",
      "Updates & security patches",
      "Performance tuning",
      "Hosting, domain & email management",
      "Small feature additions",
    ],
    idealFor: "Businesses with existing software that needs a reliable team",
    icon: Wrench,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & requirements",
    description:
      "We listen, ask the right questions and write down exactly what you need, with scope, timeline and cost agreed before any code is written.",
  },
  {
    step: "02",
    title: "Design & prototype",
    description:
      "We turn requirements into wireframes and a clickable prototype so you can see and approve how it will look and work.",
  },
  {
    step: "03",
    title: "Build & review",
    description:
      "Development happens in short milestones with regular demos, so you can give feedback early instead of waiting until the end.",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "We deploy your project, hand over documentation and stay available for updates, fixes and future improvements.",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "JavaScript & TypeScript", category: "Languages" },
  { name: "Node.js & Express", category: "Backend" },
  { name: "Python", category: "Backend & AI" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "REST & GraphQL", category: "APIs" },
  { name: "OpenAI & Claude APIs", category: "AI models" },
  { name: "Docker & CI/CD", category: "DevOps" },
  { name: "AWS & Azure", category: "Cloud" },
];

const training = [
  {
    title: "Full Stack Web Development (MERN)",
    desc: "MongoDB, Express, React and Node.js through real projects.",
  },
  {
    title: "Python Programming & Automation",
    desc: "Beginner-friendly Python, scripting and backend basics.",
  },
  {
    title: "Cloud Computing & DevOps",
    desc: "AWS / Azure, Docker, Linux and CI/CD fundamentals.",
  },
  {
    title: "Internship & Career Preparation",
    desc: "Live projects, resume building and mock interviews.",
  },
];

const faqs = [
  {
    q: "How much does custom software or a website cost in Ponda?",
    a: "The cost depends on the features you need, the number of users and any integrations. After a short discovery call we share a written scope, timeline and quote so there are no surprises later.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A typical business website can often be planned and launched within a few weeks, while custom software and mobile apps are split into milestones with regular demos. We confirm the timeline in writing before we start.",
  },
  {
    q: "Do you provide support after the project goes live?",
    a: "Yes. We offer maintenance and support covering bug fixes, updates, security patches and small enhancements, so your software keeps working as your business grows.",
  },
  {
    q: "Do you work with companies outside Ponda?",
    a: "Yes. We serve businesses across Goa, including Margao, Panaji, Vasco and Mapusa, and work with clients across India remotely through video calls, with in-person meetings available in Ponda.",
  },
  {
    q: "Can you add AI or automation to our existing software?",
    a: "In most cases, yes. We can add chatbots, document processing and workflow automation to your current systems and connect them with the tools your team already uses.",
  },
];

/* ==========================================================================
   4. PAGE
   ========================================================================== */
export default function ServicesPage() {
  const orgRef = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...services.map((service) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/service#${service.id}`,
        serviceType: service.title,
        name: service.title,
        description: service.description,
        category: service.category,
        provider: orgRef,
        areaServed: [
          { "@type": "City", name: "Ponda" },
          { "@type": "AdministrativeArea", name: "Goa" },
          { "@type": "Country", name: "India" },
        ],
      })),
      {
        "@type": "ItemList",
        name: "Fixbug Infotech project delivery process",
        itemListElement: processSteps.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: p.title,
          description: p.description,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/service`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
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
          aria-labelledby="services-hero-heading"
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
                    Services
                  </li>
                </ol>
              </nav>

              <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
                • Software • IT Services • Training
              </span>
              <h1
                id="services-hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6"
              >
                Software Development &amp; IT Services in{" "}
                <span className="font-display italic text-accent font-normal block sm:inline">
                  Ponda, Goa.
                </span>
              </h1>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
                Fixbug Infotech is a software and IT company in Ponda. From
                business websites and custom software to mobile apps, AI
                automation and cloud - we build and maintain the technology
                your business runs on.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:border-charcoal hover:bg-charcoal/5 transition-all duration-300"
                >
                  <span>Software Training in Ponda</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES LIST ================= */}
        <section
          id="services"
          className="py-20 md:py-28"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-border">
              <div>
                <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Core services
                </span>
                <h2
                  id="services-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                  What we build for businesses in{" "}
                  <span className="font-display italic text-accent font-normal">
                    Ponda &amp; Goa
                  </span>
                </h2>
              </div>
              <p className="text-muted text-sm md:text-base max-w-md mt-4 md:mt-0">
                Every project is planned around your goals and built to be
                fast, secure and easy to maintain.
              </p>
            </div>

            <div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="group relative border-t border-cream-border py-12 md:py-16 transition-colors duration-300 hover:bg-cream-soft/70 px-4 md:px-8 rounded-2xl scroll-mt-28"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Category */}
                      <div className="lg:col-span-3 flex items-center lg:items-start lg:flex-col gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center border border-cream-border text-charcoal group-hover:text-accent group-hover:border-accent/40 transition-all shrink-0">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cream-border/50 text-muted">
                          {service.category}
                        </span>
                      </div>

                      {/* Title & description */}
                      <div className="lg:col-span-5">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-charcoal group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted text-base leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="inline-flex items-start gap-2 text-xs font-semibold text-charcoal bg-cream px-3.5 py-2 rounded-2xl border border-cream-border">
                          <Zap className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                          <span>Ideal for: {service.idealFor}</span>
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pt-0">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted/70 block mb-3">
                            What&apos;s included
                          </h4>
                          <ul className="space-y-2">
                            {service.capabilities.map((cap) => (
                              <li
                                key={cap}
                                className="flex items-center gap-2 text-sm text-charcoal/80"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 flex justify-end">
                          <Link
                            href="/contact"
                            aria-label={`Get a quote for ${service.title}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-accent transition-colors"
                          >
                            <span>Get a quote</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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

        {/* ================= PROCESS ================= */}
        <section
          className="py-20 md:py-28 bg-cream-soft border-y border-cream-border"
          aria-labelledby="methodology-heading"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-16">
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                Our process
              </span>
              <h2
                id="methodology-heading"
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              >
                How we{" "}
                <span className="font-display italic text-accent font-normal">
                  deliver
                </span>
              </h2>
              <p className="text-muted text-base md:text-lg">
                A clear, step-by-step process so you always know what is
                happening, what it costs and when it will be ready.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0">
              {processSteps.map((p) => (
                <li
                  key={p.step}
                  className="bg-cream p-8 rounded-2xl border border-cream-border hover:border-accent/40 transition-colors"
                >
                  <span
                    className="text-4xl font-display italic text-accent font-normal block mb-6"
                    aria-hidden="true"
                  >
                    {p.step}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {p.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section className="py-20 md:py-28" aria-labelledby="techstack-heading">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                Technologies
              </span>
              <h2
                id="techstack-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Our core{" "}
                <span className="font-display italic text-accent font-normal">
                  tech stack
                </span>
              </h2>
              <p className="text-muted text-base">
                Modern, proven technologies that keep your software fast,
                secure and easy for any developer to maintain.
              </p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 list-none p-0 m-0">
              {techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="bg-cream-soft border border-cream-border p-5 rounded-xl hover:border-accent/50 hover:bg-cream transition-colors group"
                >
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted/70 mb-2">
                    {tech.category}
                  </span>
                  <span className="font-semibold text-charcoal text-base md:text-lg group-hover:text-accent transition-colors">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= TRAINING BAND ================= */}
        <section
          className="py-20 md:py-28 bg-cream-soft border-y border-cream-border"
          aria-labelledby="training-band-heading"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Software training in Ponda
                </span>
                <h2
                  id="training-band-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                >
                  Want to learn the skills behind{" "}
                  <span className="font-display italic text-accent font-normal">
                    these services?
                  </span>
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Alongside client work, Fixbug Infotech runs practical IT
                  training in Ponda for students, freshers and career
                  switchers, taught with the same tools and workflows we use
                  on real projects.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-accent transition-all duration-300"
                >
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                  <span>View Training Courses</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
                {training.map((t) => (
                  <li
                    key={t.title}
                    className="p-6 rounded-2xl bg-cream border border-cream-border hover:border-accent/40 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {t.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 md:py-28" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-12">
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                Frequently asked questions
              </span>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Common questions about our{" "}
                <span className="font-display italic text-accent font-normal">
                  IT services
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f) => (
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

        {/* ================= CLOSING CTA ================= */}
        <section
          className="py-20 md:py-28 bg-charcoal text-cream-soft relative overflow-hidden"
          aria-labelledby="services-cta-heading"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
            <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              • Start your project •
            </span>
            <h2
              id="services-cta-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              Have a project in mind? Let&apos;s build it{" "}
              <span className="font-display italic text-accent font-normal">
                together.
              </span>
            </h2>
            <p className="text-cream-soft/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Tell us what you need and we will reply with a clear plan, a
              timeline and a quote - no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-cream-soft/10 transition-all"
              >
                <span>See Our Work</span>
              </Link>
            </div>

            {/* NAP - must match Google Business Profile */}
            <address className="not-italic flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-4 text-sm text-cream-soft/80 pt-8 border-t border-cream-soft/15">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                {BUSINESS.name}, {BUSINESS.locality}, {BUSINESS.region}{" "}
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