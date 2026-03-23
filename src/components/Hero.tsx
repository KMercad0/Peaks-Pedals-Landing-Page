"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { property } from "@/data/property";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[500px] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/roof3.jpg"
        alt="Rooftop view of Mt. Bulusan"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Bottom-up gradient — keeps mountain/sky clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content — anchored to bottom */}
      <div className="relative z-10 text-center text-white px-5 max-w-3xl mx-auto pb-20 sm:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl mb-4"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          {property.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-xl md:text-2xl text-white/90 font-light"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          {property.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
