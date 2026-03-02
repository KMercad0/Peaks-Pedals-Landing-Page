"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { property } from "@/data/property";

export default function PhotoCards() {
  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center mb-14"
        >
          The Space
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {property.photoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-[var(--color-bg)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
