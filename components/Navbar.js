"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar({ variant = "transparent" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "Work", href: "/product" },
    { name: "Careers", href: "/career" },
  ];

  const isSolid = variant === "solid" || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isSolid
            ? "bg-cream-soft/90 backdrop-blur-md border-b border-cream-border/50 py-4 shadow-xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-semibold text-xl tracking-tight text-charcoal group-hover:opacity-80 transition-opacity">
              Fixbug Infotech
            </span>
            <span className="text-accent text-2xl leading-none font-bold ml-0.5">
              .
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative group text-charcoal text-sm font-medium hover:text-accent transition-colors py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-charcoal text-charcoal px-5 py-2 rounded-full text-sm font-medium hover:bg-charcoal hover:text-cream-soft transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-charcoal hover:text-accent transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-charcoal/40 backdrop-blur-xs transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-cream-soft shadow-2xl p-6 flex flex-col justify-between transition-transform duration-500 ease-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-cream-border">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <span className="font-semibold text-xl tracking-tight text-charcoal">
                  Fixbug Infotech
                </span>
                <span className="text-accent text-2xl leading-none font-bold ml-0.5">
                  .
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:text-accent transition-colors rounded-full hover:bg-cream-border/30"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-charcoal text-lg font-medium hover:text-accent transition-colors py-2 border-b border-cream-border/40 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-cream-border">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-charcoal bg-charcoal text-cream-soft px-6 py-3 rounded-full text-base font-medium hover:bg-transparent hover:text-charcoal transition-all duration-300"
            >
              <span>Contact Us</span>
              <span>→</span>
            </Link>
            <p className="text-xs text-muted text-center mt-4">
              © {new Date().getFullYear()} Fixbug Infotech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
