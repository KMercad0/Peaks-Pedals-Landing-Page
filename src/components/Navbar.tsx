"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import BookingCTA from "./BookingCTA";
import { property } from "@/data/property";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt={property.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className={`font-serif text-lg font-normal transition-colors hidden sm:inline ${
              scrolled ? "text-[var(--color-primary-dark)]" : "text-white"
            }`}
          >
            {property.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                scrolled ? "text-[var(--color-text-muted)]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Price hint — visible on scroll */}
          {scrolled && (
            <span className="text-xs text-[var(--color-text-muted)] font-medium whitespace-nowrap">
              From ₱800/night
            </span>
          )}

          <BookingCTA size="default" />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {scrolled && (
            <span className="text-[10px] text-[var(--color-text-muted)] font-medium whitespace-nowrap hidden xs:inline">
              From ₱800/night
            </span>
          )}
          <BookingCTA size="default" className="!px-4 !py-2 !text-xs" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-1 transition-colors ${
              scrolled ? "text-[var(--color-text)]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--color-text)] text-sm font-medium py-2 hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
