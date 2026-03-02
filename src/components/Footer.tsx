"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import BookingCTA from "./BookingCTA";
import { property } from "@/data/property";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      {/* CTA Section */}
      <div className="py-16 sm:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">
            Ready to book?
          </h2>
          <p className="text-white/70 mb-8">
            Wake up to Mt. Bulusan. Your mountain escape is waiting.
          </p>
          <BookingCTA variant="outline" size="lg" />
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-white/10 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} strokeWidth={1.5} />
              <span>Irosin, Sorsogon</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} strokeWidth={1.5} />
              <a href={`tel:${property.phone}`} className="hover:text-white transition-colors">
                {property.phone}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={14} strokeWidth={1.5} />
              <a href={`mailto:${property.email}`} className="hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none">
                {property.email}
              </a>
            </div>
            <a
              href={property.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Facebook size={14} strokeWidth={1.5} />
              <span>Facebook</span>
            </a>
          </div>

          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {property.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
