"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Plane } from "lucide-react";
import { property } from "@/data/property";

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 px-4 bg-[var(--color-bg-alt)]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center mb-14"
        >
          Location
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                className="text-[var(--color-primary)] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-medium text-sm mb-1">Address</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {property.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Plane
                size={20}
                className="text-[var(--color-primary)] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-medium text-sm mb-1">Nearest Airport</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  58 miles from Bicol International Airport
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                size={20}
                className="text-[var(--color-primary)] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-medium text-sm mb-1">Check-in / Check-out</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Check-in: {property.checkIn} &middot; Check-out:{" "}
                  {property.checkOut}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm font-medium text-[var(--color-accent)]">
                {property.priceRange}
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-sm h-[300px] lg:h-full min-h-[280px]"
          >
            <iframe
              src={property.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peaks & Pedals Transient location on Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
