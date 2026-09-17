import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {ArrowUpRight,ArrowRight,Sparkles,Bot,Globe,Workflow,Cloud,Layers,Cpu,ShieldCheck,Zap,Code2,Database,Terminal,} from "lucide-react";

export const metadata = {
  title: "AI & Software Engineering Services | Fixbug Infotech",
  description:
    "Explore our core engineering capabilities: AI Product Development, Autonomous Workflows, Modern Web Applications, and Cloud Architecture.",
};

const services = [
  {
    id: "01",
    title: "AI Product Development & LLMs",
    category: "Foundation Models & Custom AI",
    description:
      "From custom fine-tuned foundation models to production-grade RAG pipelines, we construct proprietary intelligence natively into your business applications.",
    capabilities: [
      "Custom LLM Fine-Tuning & Quantization",
      "Retrieval-Augmented Generation (RAG)",
      "Autonomous AI Agent Workflows",
      "Semantic Search & Vector Databases",
      "Guardrails & Safety Alignment",
    ],
    impact: "99.4% intent precision across 10M+ queries",
    icon: Bot,
  },
  {
    id: "02",
    title: "Full-Stack Web & Platform Engineering",
    category: "High-Performance Systems",
    description:
      "Ultra-fast Next.js and React applications built for scale, resilience, and conversion with modern frontend craftsmanship and rock-solid backend architecture.",
    capabilities: [
      "Next.js App Router & Server Components",
      "Micro-frontends & Modular Architecture",
      "Real-time WebSockets & Event Streaming",
      "High-throughput REST & GraphQL APIs",
      "Edge Computing & Global CDN Caching",
    ],
    impact: "Sub-50ms TTFB on global edge distribution",
    icon: Globe,
  },
  {
    id: "03",
    title: "Autonomous Workflows & Automation",
    category: "Process Intelligence",
    description:
      "Multi-agent autonomous systems that eliminate manual bottlenecks, execute complex multi-step tasks, and intelligently monitor enterprise operations 24/7.",
    capabilities: [
      "Autonomous Multi-Agent Orchestration",
      "Intelligent Document Processing (IDP)",
      "Event-Driven Architecture & Message Queues",
      "Deep CRM, ERP & Legacy System Integrations",
      "Self-Healing Failure Recovery Loops",
    ],
    impact: "85% reduction in manual data processing hours",
    icon: Workflow,
  },
  {
    id: "04",
    title: "Cloud Infrastructure & DevOps",
    category: "Resilience & Scalability",
    description:
      "Cloud-native architectures engineered for zero-downtime scalability, stringent enterprise compliance, and automated continuous deployment pipelines.",
    capabilities: [
      "Kubernetes Cluster Orchestration",
      "Infrastructure as Code (Terraform / Pulumi)",
      "Serverless Compute & Edge Functions",
      "Observability, Datadog & Prometheus Metrics",
      "Zero-Trust Cloud Security Architecture",
    ],
    impact: "99.99% system availability SLA guaranteed",
    icon: Cloud,
  },
  {
    id: "05",
    title: "Product Strategy & AI UX Design",
    category: "Human-AI Interaction",
    description:
      "Designing interfaces where AI interactions feel effortless, explainable, and delightfully intuitive for non-technical users and enterprise operators alike.",
    capabilities: [
      "Interaction Design for Generative AI",
      "Comprehensive Design Systems & Tokens",
      "Rapid Functional Prototyping",
      "Usability Testing & Cognitive Load Audits",
      "Accessibility & Multi-modal Voice/Text UX",
    ],
    impact: "4.9/5 CSAT rating across deployed platforms",
    icon: Layers,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Feasibility",
    description:
      "We dissect your technical architecture, evaluate AI model viability, and define rigorous benchmark metrics before writing a single line of code.",
  },
  {
    step: "02",
    title: "Architecture & Prototyping",
    description:
      "Rapidly standing up end-to-end working prototypes to stress-test prompt engineering, data pipelines, and UI responsiveness under real workloads.",
  },
  {
    step: "03",
    title: "Iterative Build & AI Tuning",
    description:
      "Production-grade engineering sprints with automated CI/CD, synthetic test generation, fine-tuning evaluations, and continuous client reviews.",
  },
  {
    step: "04",
    title: "Scale, Observability & Handoff",
    description:
      "Full cloud deployment with multi-region failover, latency telemetry, automated drift detection, and comprehensive documentation handoff.",
  },
];

const techStack = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PyTorch", category: "AI / ML" },
  { name: "OpenAI GPT-4o", category: "Foundation Models" },
  { name: "Claude 3.5 Sonnet", category: "Foundation Models" },
  { name: "LangChain & LlamaIndex", category: "AI Frameworks" },
  { name: "Pinecone & pgvector", category: "Vector DBs" },
  { name: "FastAPI / Python", category: "Backend" },
  { name: "Node.js & Go", category: "Backend" },
  { name: "PostgreSQL & Redis", category: "Databases" },
  { name: "Kubernetes & Docker", category: "DevOps" },
  { name: "AWS & GCP", category: "Cloud" },
  { name: "Terraform", category: "IaC" },
  { name: "Datadog", category: "Monitoring" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent selection:text-cream-soft">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-cream-border/60">
        <div className="absolute inset-0 bg-linear-to-b from-cream-soft via-cream to-cream pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              • WHAT WE DELIVER • CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] mb-6">
              Engineering the Next Generation of{" "}
              <span className="font-display italic text-accent font-normal block sm:inline">
                Intelligence.
              </span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              We architect bespoke software systems and embed cutting-edge AI
              into enterprise workflows — transforming complex technological
              challenges into seamless, profitable digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Services List */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-border">
            <div>
              <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
                CORE DISCIPLINES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Engineering{" "}
                <span className="font-display italic text-accent font-normal">
                  Matrix
                </span>
              </h2>
            </div>
            <p className="text-muted text-sm md:text-base max-w-md mt-4 md:mt-0">
              Every solution is custom-engineered from the ground up, built for
              enterprise scale, performance, and long-term maintainability.
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative border-t border-cream-border py-12 md:py-16 transition-colors duration-300 hover:bg-cream-soft/70 px-4 md:px-8 rounded-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* ID & Category */}
                    <div className="lg:col-span-3 flex flex-col justify-between">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-3xl md:text-4xl font-light text-muted/60 group-hover:text-accent transition-colors">
                          {service.id}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cream-border/50 text-muted">
                          {service.category}
                        </span>
                      </div>
                      <div className="hidden lg:block mt-6">
                        <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center border border-cream-border text-charcoal group-hover:text-accent group-hover:border-accent/40 transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-5">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-charcoal group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal bg-cream px-3.5 py-1.5 rounded-full border border-cream-border">
                        <Zap className="w-3.5 h-3.5 text-accent" />
                        <span>{service.impact}</span>
                      </div>
                    </div>

                    {/* Capabilities Tags */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pt-0">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted/70 block mb-3">
                          Key Capabilities
                        </span>
                        <ul className="space-y-2">
                          {service.capabilities.map((cap, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-charcoal/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-accent transition-colors"
                        >
                          <span>Consult on this</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Deliver Process Section */}
      <section className="py-20 md:py-28 bg-cream-soft border-y border-cream-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
              METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How We{" "}
              <span className="font-display italic text-accent font-normal">
                Deliver
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg">
              A disciplined, milestone-driven execution framework engineered to
              eliminate risk and maximize velocity from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, idx) => (
              <div
                key={p.step}
                className="relative bg-cream p-8 rounded-2xl border border-cream-border hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-display italic text-accent font-normal block mb-6">
                    {p.step}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-border/60 flex items-center justify-between text-xs text-muted">
                  <span>Phase 0{idx + 1}</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Core{" "}
              <span className="font-display italic text-accent font-normal">
                Tech Stack
              </span>
            </h2>
            <p className="text-muted text-base">
              We leverage modern battle-tested technologies and state-of-the-art
              AI frameworks to build future-proof platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-cream-soft border border-cream-border p-5 rounded-xl hover:border-accent/50 hover:bg-cream transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted/70">
                    {tech.category}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-cream-border group-hover:text-accent transition-colors" />
                </div>
                <span className="font-semibold text-charcoal text-base md:text-lg group-hover:text-accent transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="py-20 md:py-28 bg-charcoal text-cream-soft relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="inline-block text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            • START YOUR TRANSFORMATION •
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Have a project in mind? Let's build something{" "}
            <span className="font-display italic text-accent font-normal">
              intelligent.
            </span>
          </h2>
          <p className="text-cream-soft/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Book a complimentary architectural review with our engineering
            directors to map out your software roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
            >
              <span>Schedule Architecture Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full text-base font-semibold hover:bg-cream-soft/10 transition-all"
            >
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
