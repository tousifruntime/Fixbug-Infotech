"use client";

import { useEffect } from "react";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShowreelModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-cream-soft/80 hover:text-accent rounded-full bg-charcoal/50 border border-cream-soft/20 hover:border-accent transition-all duration-300 z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video bg-charcoal rounded-2xl border border-cream-soft/15 overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-6"
          >
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-radial from-accent/15 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-lg space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-2">
                <Play className="w-7 h-7 ml-1 fill-accent" />
              </div>
              <h3 className="font-display italic text-cream-soft text-3xl md:text-5xl font-normal tracking-wide">
                Showreel Coming Soon
              </h3>
              <p className="text-cream-soft/70 text-sm md:text-base font-light">
                Our latest engineering milestones, intelligent software architectures, and product showcases all in one place.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-cream-soft text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-cream-soft transition-all duration-300"
                >
                  Return to Site
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
