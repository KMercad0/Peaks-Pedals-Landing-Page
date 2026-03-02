"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { property } from "@/data/property";

export default function Gallery() {
  // Bento grid: first image spans 2 cols, rest are single
  const images = property.galleryImages;

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center mb-4"
        >
          Explore Every Corner
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[var(--color-text-muted)] mb-14 max-w-md mx-auto"
        >
          From cozy interiors to panoramic mountain views
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => {
            // First image: tall (spans 2 rows), fourth image: wide (spans 2 cols on lg)
            const isTall = i === 0;
            const isWide = i === 3;

            return (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isTall
                    ? "row-span-2 aspect-auto min-h-[300px] sm:min-h-[400px]"
                    : isWide
                      ? "lg:col-span-2 aspect-[16/9]"
                      : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    isTall
                      ? "(max-width: 1024px) 50vw, 33vw"
                      : isWide
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                {/* Subtle overlay on hover with alt text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
