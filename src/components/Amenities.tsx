"use client";

import { motion } from "framer-motion";
import { Sofa, ShieldCheck, Compass } from "lucide-react";
import { property } from "@/data/property";

const iconMap: Record<string, React.ElementType> = {
  Sofa,
  ShieldCheck,
  Compass,
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 sm:py-28 px-4 bg-[var(--color-bg-alt)]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center mb-14"
        >
          Amenities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {property.amenityGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[var(--color-bg)] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center md:text-left"
              >
                {Icon && (
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-accent)]/10 mb-4">
                    <Icon
                      size={22}
                      className="text-[var(--color-accent)]"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
                <h3 className="font-serif text-xl mb-4">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[var(--color-text-muted)] flex items-center gap-2 justify-center md:justify-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
