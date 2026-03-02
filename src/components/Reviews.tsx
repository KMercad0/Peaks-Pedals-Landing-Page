"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { property } from "@/data/property";

export default function Reviews() {
  if (property.reviews.length === 0) {
    return (
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star
                size={20}
                className="text-[var(--color-accent)] fill-[var(--color-accent)]"
              />
              <span className="font-serif text-2xl">{property.rating}</span>
              <span className="text-sm text-[var(--color-text-muted)]">
                / 10 on {property.ratingSource}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Guest reviews coming soon
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center mb-4"
        >
          Guest Reviews
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          <Star
            size={18}
            className="text-[var(--color-accent)] fill-[var(--color-accent)]"
          />
          <span className="font-medium">{property.rating}</span>
          <span className="text-sm text-[var(--color-text-muted)]">
            / 10 on {property.ratingSource}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {property.reviews.map((review, i) => (
            <motion.div
              key={`${review.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--color-bg-alt)] rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: Math.round(review.rating / 2) }).map(
                  (_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                    />
                  )
                )}
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
