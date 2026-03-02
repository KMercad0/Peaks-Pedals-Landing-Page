"use client";

import { motion } from "framer-motion";
import BookingCTA from "./BookingCTA";

export default function BookingBanner() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-accent)] overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-white mb-4"
        >
          Dagos Po Kamo!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-lg mb-8 font-light"
        >
        
        <BookingCTA variant="outline" size="lg" />
        </motion.p>

      </div>
    </section>
  );
}
