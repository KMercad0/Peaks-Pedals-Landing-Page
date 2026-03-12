"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { property } from "@/data/property";

interface BookingCTAProps {
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export default function BookingCTA({
  variant = "primary",
  size = "default",
  className = "",
}: BookingCTAProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [close]);

  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";
  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-[var(--color-text)] backdrop-blur-sm",
  };

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        Book Now
        <svg
          className={`ml-2 w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="menu"
            aria-label="Booking platforms"
            className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <a
              href={property.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none transition-colors"
            >
              <span className="text-base" aria-hidden="true">🅱</span>
              <span>Book on Booking.com</span>
            </a>
            <a
              href={property.agodaUrl}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none transition-colors border-t border-gray-50"
            >
              <span className="text-base" aria-hidden="true">🅰</span>
              <span>Book on Agoda</span>
            </a>
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none transition-colors border-t border-gray-50"
            >
              <span className="text-base" aria-hidden="true">🏠</span>
              <span>Book on Airbnb</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
