import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Work", href: "/product" },
    { name: "AI Solutions", href: "/service" },
    { name: "Services", href: "/service" },
    { name: "Careers", href: "/career" },
  ];

  const services = [
    { name: "AI Product Development", href: "/service" },
    { name: "Web App Engineering", href: "/service" },
    { name: "Cloud & DevOps", href: "/service" },
    { name: "Automation & Workflows", href: "/service" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Twitter / X", href: "https://twitter.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
  ];

  return (
    <footer className="bg-charcoal text-cream-soft pt-20 pb-12 border-t border-charcoal/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <Link href="/" className="inline-flex items-center group mb-4">
                <span className="font-semibold text-2xl tracking-tight text-cream-soft">
                  Fixbug Infotech
                </span>
                <span className="text-accent text-3xl leading-none font-bold ml-0.5">
                  .
                </span>
              </Link>
              <p className="text-cream-soft/70 text-sm leading-relaxed max-w-sm mt-2">
                Building intelligent software that transforms businesses. We engineer modern AI systems, resilient web architectures, and seamless digital experiences.
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-cream-soft/10 text-accent text-xs font-medium tracking-wide">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-soft/50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-cream-soft/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200 text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-soft/50 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-cream-soft/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200 text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-soft/50 mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-cream-soft/70">
              <p>
                <a
                  href="mailto:hello@fixbuginfotech.com"
                  className="hover:text-accent transition-colors block text-cream-soft font-medium"
                >
                  hello@fixbuginfotech.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919876543210"
                  className="hover:text-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
              <p className="text-cream-soft/60">
                Mumbai, Maharashtra, India
              </p>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-cream-soft transition-colors"
                >
                  <span>Start a Conversation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Socials */}
        <div className="pt-8 border-t border-cream-soft/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-soft/50 text-center sm:text-left">
            © {currentYear} Fixbug Infotech. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream-soft/60 hover:text-accent transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
