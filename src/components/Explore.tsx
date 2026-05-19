"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  ShoppingBag,
  Mountain,
  Stethoscope,
  MapPin,
} from "lucide-react";
import {
  landmarks as allLandmarks,
  categories,
  allCategories,
  type LandmarkCategory,
  type CategoryIconName,
} from "@/data/landmarks";

const ExploreMap = dynamic(() => import("./ExploreMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[var(--color-border)] flex items-center justify-center">
      <MapPin
        size={32}
        className="text-[var(--color-text-muted)] animate-pulse"
      />
    </div>
  ),
});

const iconMap: Record<CategoryIconName, React.ElementType> = {
  UtensilsCrossed,
  ShoppingBag,
  Mountain,
  Stethoscope,
};

export default function Explore() {
  const [active, setActive] = useState<LandmarkCategory[]>(allCategories);
  const [focusId, setFocusId] = useState<string | null>(null);

  const visible = useMemo(
    () => allLandmarks.filter((l) => active.includes(l.category)),
    [active]
  );

  const toggle = (key: LandmarkCategory) => {
    setActive((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <section
      id="explore"
      className="py-20 sm:py-28 px-4 bg-[var(--color-bg)]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center mb-4"
        >
          Explore Irosin
        </motion.h2>
        <p className="text-center text-sm text-[var(--color-text-muted)] mb-12 max-w-xl mx-auto">
          Our handpicked spots around town. Tap a place to see it on the map.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-sm h-[360px] sm:h-[460px] lg:h-[560px] order-2 lg:order-1"
          >
            <ExploreMap landmarks={visible} focusId={focusId} />
          </motion.div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 flex flex-col gap-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] mb-3">
                Filter by
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => {
                  const Icon = iconMap[c.icon];
                  const on = active.includes(c.key);
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => toggle(c.key)}
                      aria-pressed={on}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        on
                          ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                          : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
                      }`}
                    >
                      <Icon size={14} strokeWidth={1.75} />
                      {c.key}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 lg:overflow-y-auto lg:max-h-[480px] pr-1">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] mb-3">
                {visible.length} place{visible.length === 1 ? "" : "s"}
              </p>
              {visible.length === 0 ? (
                <p className="text-sm text-[var(--color-text-muted)] italic">
                  No categories selected.
                </p>
              ) : (
                <ul className="space-y-2">
                  {visible.map((l) => {
                    const cat = categories.find((c) => c.key === l.category);
                    const Icon = cat ? iconMap[cat.icon] : MapPin;
                    const selected = focusId === l.id;
                    return (
                      <li key={l.id}>
                        <button
                          type="button"
                          onClick={() => setFocusId(l.id)}
                          className={`w-full text-left flex items-start gap-2.5 p-2.5 rounded-lg border transition-colors ${
                            selected
                              ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                              : "border-[var(--color-border)] hover:border-[var(--color-accent)]/50"
                          }`}
                        >
                          <Icon
                            size={16}
                            strokeWidth={1.75}
                            className="text-[var(--color-accent)] mt-0.5 shrink-0"
                          />
                          <span className="flex-1">
                            <span className="block text-sm font-medium">
                              {l.name}
                            </span>
                            {l.description && (
                              <span className="block text-xs text-[var(--color-text-muted)] mt-0.5 line-clamp-2">
                                {l.description}
                              </span>
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
