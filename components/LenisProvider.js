"use client";

import React, { useEffect, useRef, createContext, useContext, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Lenis from "lenis";

export const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

function ScrollManager({ lenisRef }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  // 1. Scroll to top on route / pathname change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Immediately reset scroll position to top on navigation
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname, searchParams, lenisRef]);

  // 2. Handle same-route clicks (e.g. clicking "Services" while already at the bottom of /service)
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Find closest anchor tag
      const targetAnchor = e.target.closest("a");
      if (!targetAnchor) return;

      const href = targetAnchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Handle on-page hash links (e.g. /#about or #about)
      if (href.startsWith("#") || href.startsWith("/#")) {
        const hash = href.includes("#") ? href.split("#")[1] : null;
        if (hash) {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            e.preventDefault();
            if (lenisRef.current) {
              lenisRef.current.scrollTo(targetElement, { offset: -80, duration: 1.2 });
            } else {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
        return;
      }

      // Internal route links
      try {
        const url = new URL(href, window.location.origin);
        const currentUrl = new URL(window.location.href);

        // If clicking the currently active route without hash
        if (url.pathname === currentUrl.pathname && !url.hash) {
          const currentScrollY =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

          if (currentScrollY > 10) {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(0, { duration: 0.9 });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        }
      } catch (err) {
        // Fallback
      }
    };

    document.addEventListener("click", handleAnchorClick, true);
    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, [lenisRef]);

  return null;
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      <Suspense fallback={null}>
        <ScrollManager lenisRef={lenisRef} />
      </Suspense>
      {children}
    </LenisContext.Provider>
  );
}
