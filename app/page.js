"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowreelModal from "@/components/ShowreelModal";
import {ArrowUpRight,ArrowRight,Sparkles,Cpu,Zap,ShieldCheck,CheckCircle2,Star,} from "lucide-react";

export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      alt: "Client 1",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      alt: "Client 2",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      alt: "Client 3",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      alt: "Client 4",
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-accent/20 selection:text-accent">
      <Navbar />

      <main className="grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 pb-16">
          {/* Background Video */}
          <video  ref={videoRef}  autoPlay  muted  loop  playsInline
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" >
            <source
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/creative_studio_video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradients to keep text clear on the left, clear center-right video */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[55%] lg:w-[48%] bg-linear-to-r from-cream via-cream/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-cream/90 via-cream/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-cream via-cream/70 to-transparent z-10 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-2xl">
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  • WE BUILD • WE AUTOMATE • WE SCALE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-charcoal leading-[1.05] mb-6">
                Software That{" "}
                <span className="font-display italic text-accent font-normal">
                  Thinks.
                </span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl">
                We engineer AI-powered digital products, autonomous workflows,
                and modern web platforms for forward-thinking enterprises.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link 
                  href={"/product"}
                  className="group inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                  <span>See Our Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:border-charcoal hover:bg-charcoal/5 transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cream-border/60">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-10 h-10 rounded-full border-2 border-cream overflow-hidden shadow-sm"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-muted">
                    Trusted by{" "}
                    <span className="font-semibold text-charcoal">
                      200+ businesses
                    </span>{" "}
                    worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BRAND PHILOSOPHY / ABOUT ================= */}
        <section id="about" className="py-24 sm:py-32 border-t border-cream-border/70 bg-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  // WHO WE ARE
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-snug">
                  Transforming vision into{" "}
                  <span className="font-display italic text-accent font-normal">
                    scalable code
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <p className="text-lg sm:text-2xl font-normal text-charcoal/90 leading-relaxed">
                  We bridge the gap between complex AI research and scalable,
                  human-centric software. Our engineering collective designs and
                  deploys resilient platforms that automate high-friction workflows
                  and generate measurable business outcomes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-cream-border">
                  <div className="p-4 rounded-xl bg-cream-soft/60 border border-cream-border/50">
                    <p className="text-3xl sm:text-4xl font-bold text-charcoal font-sans">
                      99.8%
                    </p>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mt-1">
                      Uptime SLA Guarantee
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-cream-soft/60 border border-cream-border/50">
                    <p className="text-3xl sm:text-4xl font-bold text-charcoal font-sans">
                      40+
                    </p>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mt-1">
                      Production AI Deployments
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-cream-soft/60 border border-cream-border/50">
                    <p className="text-3xl sm:text-4xl font-bold text-accent font-sans">
                      3.8x
                    </p>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mt-1">
                      Average Client ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED CAPABILITIES / SERVICES ================= */}
        <section className="py-24 sm:py-32 bg-cream-soft border-y border-cream-border/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  // CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
                  Intelligent solutions,{" "}
                  <span className="font-display italic text-accent font-normal">
                    engineered to scale.
                  </span>
                </h2>
              </div>
              <Link
                href="/service"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-accent transition-colors"
              >
                <span>View all services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="group p-8 sm:p-10 rounded-2xl bg-cream border border-cream-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-accent px-3 py-1 rounded-full bg-accent/10">
                      01
                    </span>
                    <div className="p-3 rounded-full bg-cream-soft text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                    AI Product Development
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    Custom large language models, Retrieval-Augmented Generation (RAG)
                    architectures, and proprietary machine learning pipelines tailored
                    to your enterprise data.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-border/60">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    LLM Fine-Tuning
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    RAG Pipelines
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Agentic Reasoning
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group p-8 sm:p-10 rounded-2xl bg-cream border border-cream-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-accent px-3 py-1 rounded-full bg-accent/10">
                      02
                    </span>
                    <div className="p-3 rounded-full bg-cream-soft text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                    Autonomous Workflows
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    Multi-agent autonomous systems that eliminate manual bottlenecks,
                    automate multi-step decision trees, and integrate seamlessly with legacy stacks.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-border/60">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Multi-Agent Orchestration
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    RPA & ETL
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    API Integration
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group p-8 sm:p-10 rounded-2xl bg-cream border border-cream-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-accent px-3 py-1 rounded-full bg-accent/10">
                      03
                    </span>
                    <div className="p-3 rounded-full bg-cream-soft text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300">
                      <Cpu className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                    High-Performance Web Apps
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    Bespoke Next.js and cloud-native applications built with ultra-fast
                    rendering, real-time collaboration, and bulletproof security.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-border/60">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Next.js App Router
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Real-Time WebSockets
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Responsive UX
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group p-8 sm:p-10 rounded-2xl bg-cream border border-cream-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-accent px-3 py-1 rounded-full bg-accent/10">
                      04
                    </span>
                    <div className="p-3 rounded-full bg-cream-soft text-charcoal group-hover:bg-accent group-hover:text-cream transition-colors duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                    Cloud & DevOps Architecture
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    Resilient Kubernetes clusters, automated CI/CD deployment pipelines,
                    and serverless backends engineered for zero downtime and effortless scale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-border/60">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Kubernetes & Docker
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    AWS / GCP / Azure
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-cream-soft text-muted font-medium">
                    Telemetry & Observability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED WORK / PRODUCT TEASER ================= */}
        <section className="py-24 sm:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Heading  */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  // PORTFOLIO
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
                  Featured{" "}
                  <span className="font-display italic text-accent font-normal">
                    Work & Case Studies
                  </span>
                </h2>
              </div>
              <Link
                href="/product"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-accent transition-colors"
              >
                <span>View all projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Projects */} 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Project 1 - Portfolio */}
                <div className="group rounded-3xl bg-cream-soft border border-cream-border overflow-hidden hover:shadow-2xl transition-all duration-500">
    <div className="relative h-72 sm:h-80 w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80"
        alt="Portfolio Website"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-cream px-3 py-1 rounded-full text-xs font-medium">
        Personal Portfolio
      </div>
    </div>

    <div className="p-8 sm:p-10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold text-charcoal group-hover:text-accent transition-colors">
          Personal Portfolio
        </h3>
 
      </div>

      <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
        A clean, responsive portfolio website built to showcase my work,
        technical skills, projects, and experience in one place. The focus
        was on keeping the design simple, fast, and easy to navigate across
        desktop and mobile devices.
      </p>
 
    </div>
                </div>

                 {/* Project 2 - CarCare Tracker */} 
               <div className="group rounded-3xl bg-cream-soft border border-cream-border overflow-hidden hover:shadow-2xl transition-all duration-500">
  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
    <Image
      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80"
      alt="Car Rental Website"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />

    <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-cream px-3 py-1 rounded-full text-xs font-medium">
      Car Rental Website
    </div>
  </div>

  <div className="p-8 sm:p-10">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-2xl font-bold text-charcoal group-hover:text-accent transition-colors">
        Car Rental Website
      </h3>

      <span className="text-xs font-bold text-accent uppercase tracking-wider">
        MERN Stack
      </span>
    </div>

    <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
      A simple car rental website built to make booking a vehicle easier for
      customers. Visitors can browse available cars, check the details,
      contact the rental service directly by phone, and request a booking
      based on their travel plans.
    </p>

    <div className="flex flex-wrap items-center gap-4"> 

      <Link
        href="/car-rental"
        className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-accent transition-colors"
      >
        <span>View website</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
              </div> 

            </div> 


          </div>
        </section>

        {/* ================= WHY FIXBUG INFOTECH ================= */}
        <section className="py-24 sm:py-32 bg-cream-soft border-t border-cream-border">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                  // THE FIXBUG ADVANTAGE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal leading-tight mb-6">
                  Engineered with purpose,{" "}
                  <span className="font-display italic text-accent font-normal">
                    delivered without friction.
                  </span>
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  We reject cookie-cutter code and over-engineered bloat. Every
                  line of software we ship is crafted to solve high-stakes challenges
                  with speed, security, and elegance.
                </p>
                <div className="p-6 rounded-2xl bg-cream border border-cream-border">
                  <p className="italic font-display text-xl text-charcoal mb-3">
                    &ldquo;Fixbug Infotech delivered our AI core 2 months ahead of
                    schedule with spotless reliability.&rdquo;
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    — VP of Engineering, HyperScale Global
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-cream-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-2">
                        Rapid Time-to-Market
                      </h4>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        Agile development sprints focused on deploying functional MVPs
                        in weeks, not quarters, allowing immediate market testing and feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-cream-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-2">
                        Deep Domain AI Specialization
                      </h4>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        We are not generalists experimenting with prompts; we build
                        production-grade fine-tuned models, embedding spaces, and deterministic agent networks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-cream-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-2">
                        Zero Technical Debt Architecture
                      </h4>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        Extensible modular design, fully typed codebases, comprehensive
                        test suites, and clear documentation that your in-house team will love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CALL TO ACTION BANNER ================= */}
        <section className="py-20 sm:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative rounded-3xl bg-charcoal text-cream-soft p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-4">
                  // START A CONVERSATION
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream-soft mb-6 leading-tight">
                  Ready to build software that{" "}
                  <span className="font-display italic text-accent font-normal">
                    thinks?
                  </span>
                </h2>
                <p className="text-cream-soft/80 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                  Whether you are launching a greenfield AI product or modernizing
                  mission-critical enterprise workflows, our engineers are ready.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-cream px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30"
                  >
                    <span>Schedule an Architecture Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/service"
                    className="inline-flex items-center gap-2 border border-cream-soft/30 text-cream-soft px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream-soft/10 transition-all"
                  >
                    <span>Explore Capabilities</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Showreel Modal */}
      <ShowreelModal   />
    </div>
  );
}
