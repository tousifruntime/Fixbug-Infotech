import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,TrendingUp,Sparkles,ExternalLink,ShieldCheck,CheckCircle2,} from "lucide-react";

const SITE_URL = "https://www.fixbuginfotech.com";

export const metadata = {
  title: "Products & Case Studies — AI & Software Portfolio | Fixbug Infotech",
  description: "Explore Fixbug Infotech's portfolio of AI-powered products: autonomous DevOps agents, document automation, personalization engines, clinical voice scribes, and real-time risk analytics — built for global enterprises.",
  keywords: [
    "AI case studies",
    "enterprise AI products",
    "AI software portfolio",
    "autonomous agent case study",
    "Fixbug Infotech projects",
    "AI product development examples",
  ],
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/product`,
    siteName: "Fixbug Infotech",
    title: "Products & Case Studies | Fixbug Infotech",
    description:
      "A curated portfolio of mission-critical AI systems and enterprise platforms engineered by Fixbug Infotech, with measurable commercial impact.",
    images: [
      {
        url: "/og-product.jpg", // add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Fixbug Infotech — Products & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Case Studies | Fixbug Infotech",
    description:
      "A curated portfolio of mission-critical AI systems and enterprise platforms engineered by Fixbug Infotech, with measurable commercial impact.",
    images: ["/og-product.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const caseStudies = [
  {
    id: "01",
    title: "CognitiveOps",
    subtitle: "Autonomous DevOps & Incident Remediation Agent",
    metric: "92% Faster Incident MTTR",
    metricLabel: "Mean Time To Resolution",
    description:
      "An enterprise AI platform that ingests telemetry across AWS and Kubernetes clusters, pinpoints root causes with real-time semantic correlation, and autonomously drafts validated remediation pull requests for engineering approval.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    tags: [
      "Autonomous AI",
      "Kubernetes",
      "Next.js",
      "Python / FastAPI",
      "Vector DB",
    ],
    client: "Global SaaS Infrastructure Provider",
    year: "2024",
  },
  {
    id: "02",
    title: "OmniFlow AI",
    subtitle: "Next-Gen Workflow Automation for Global Logistics",
    metric: "14x Document Extraction Speed",
    metricLabel: "Throughput Multiplier",
    description:
      "Multimodal intelligent document processing system parsing complex multi-language customs manifests, bills of lading, and freight invoices with zero human touch and sub-second audit trail verification.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    tags: [
      "Multimodal LLMs",
      "OCR / Vision",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
    client: "Tier-1 Freight Forwarder",
    year: "2024",
  },
  {
    id: "03",
    title: "NeuralCommerce",
    subtitle: "Real-time Hyper-Personalized Commerce Engine",
    metric: "+38% Checkout Conversion Rate",
    metricLabel: "Revenue Lift",
    description:
      "Predictive recommendations and conversational shopping assistant integrated directly into a headless Shopify Plus architecture, delivering sub-20ms personalized storefronts at 50,000 requests per minute.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&auto=format&fit=crop&q=80",
    tags: ["GenAI Shopping", "Next.js 15", "Tailwind CSS", "GraphQL", "Redis"],
    client: "D2C Luxury Retail Brand",
    year: "2023",
  },
  {
    id: "04",
    title: "Synapse Health",
    subtitle: "Clinical Documentation & Voice Scribe System",
    metric: "2.5 Hours Saved Per Physician / Day",
    metricLabel: "Admin Overhead Reduction",
    description:
      "HIPAA-compliant ambient clinical voice listener that transcribes patient visits into structured EHR records with instant physician review, medical coding classification, and multi-tenant cryptographic isolation.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    tags: [
      "Speech-to-Text",
      "HIPAA Compliant",
      "React Native",
      "PyTorch",
      "FastAPI",
    ],
    client: "Regional Hospital Network",
    year: "2023",
  },
  {
    id: "05",
    title: "FinPulse Intelligence",
    subtitle: "High-Frequency Algorithmic Risk Analytics",
    metric: "$400M+ Daily Monitored Volume",
    metricLabel: "Transaction Pipeline",
    description:
      "Real-time anomaly detection and predictive liquidity modeling dashboard for institutional hedge funds and fintech lenders, processing high-frequency order book data with live WebSockets and ClickHouse time-series storage.",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&auto=format&fit=crop&q=80",
    tags: [
      "Real-time Analytics",
      "WebSockets",
      "ClickHouse",
      "Next.js",
      "TypeScript",
    ],
    client: "Quantitative Asset Manager",
    year: "2024",
  },
];

export default function ProductPage() {
  // CollectionPage + itemized CreativeWork/Product structured data
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Products & Case Studies | Fixbug Infotech",
    url: `${SITE_URL}/product`,
    description:
      "A curated selection of AI products and enterprise platforms engineered by Fixbug Infotech.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((project, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          image: project.image,
          dateCreated: project.year,
          about: project.subtitle,
          creator: {
            "@type": "Organization",
            name: "Fixbug Infotech",
          },
          keywords: project.tags.join(", "),
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/product`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent selection:text-cream-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-cream-border/60">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-soft via-cream to-cream pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              • SELECTED WORK • CASE STUDIES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6">
              Products Built with{" "}
              <span className="font-display italic text-accent font-normal block sm:inline">
                Precision & Purpose.
              </span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              A curated selection of mission-critical systems, AI copilots, and
              enterprise platforms engineered to deliver measurable commercial
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-20 md:py-28" aria-label="Case studies">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
          {caseStudies.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Showcase Container */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-cream-border bg-cream-soft aspect-[16/10] shadow-sm hover:shadow-xl transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}, case study screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <div className="text-cream-soft">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 block">
                          {project.client} • {project.year}
                        </span>
                        <p className="text-xl font-bold">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Container */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-light text-accent" aria-hidden="true">
                      {project.id}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted bg-cream-soft px-3 py-1 rounded-full border border-cream-border">
                      {project.client}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
                    {project.subtitle}
                  </p>

                  <p className="text-muted text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Metric Card */}
                  <div className="bg-cream-soft border border-cream-border rounded-2xl p-5 mb-6 flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted font-medium block">
                        {project.metricLabel}
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-charcoal">
                        {project.metric}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <TrendingUp className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mb-8">
                    <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                      {project.tags.map((tag, tIdx) => (
                        <li
                          key={tIdx}
                          className="text-xs font-medium bg-cream px-3 py-1.5 rounded-lg border border-cream-border text-charcoal/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <Link
                    href="/contact"
                    aria-label={`Request an architecture brief for ${project.title}`}
                    className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-6 py-3 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream-soft transition-all duration-300 group"
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="py-20 md:py-28 bg-charcoal text-cream-soft relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            • PARTNER WITH FIXBUG •
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Have an ambitious project in mind? Let&apos;s build it{" "}
            <span className="font-display italic text-accent font-normal">
              together.
            </span>
          </h2>
          <p className="text-cream-soft/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            We partner with innovative startups and visionary enterprises to turn
            complex software concepts into market-defining realities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
            >
              <span>Initiate Your Project</span>
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/service"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-cream-soft/10 transition-all"
            >
              <span>Explore All Capabilities</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}