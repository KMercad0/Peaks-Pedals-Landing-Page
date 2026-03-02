"use client";

import { motion } from "framer-motion";
import { Mountain, Home, Car, Wifi } from "lucide-react";
import { property } from "@/data/property";

const iconMap: Record<string, React.ElementType> = {
  Mountain,
  Home,
  Car,
  Wifi,
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-[var(--color-bg-alt)] to-[#EDE4D8] p-8 sm:p-12 text-center shadow-sm"
        >
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10">
            {property.description}
          </p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {property.highlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm"
                >
                  {Icon && (
                    <Icon
                      size={18}
                      className="text-[var(--color-accent)]"
                      strokeWidth={1.5}
                    />
                  )}
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Stats divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-[var(--color-border)]"
          >
            <p className="text-sm text-[var(--color-text-muted)] tracking-wide">
              {property.size} &middot; {property.bedrooms} Bedroom &middot;
              Rooftop Terrace &middot; Mt. Bulusan View
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
