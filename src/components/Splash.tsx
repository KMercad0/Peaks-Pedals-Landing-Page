"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Eye } from "lucide-react";
import { property } from "@/data/property";

const STORAGE_KEY = "pp-splash-seen";

export default function Splash() {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(STORAGE_KEY) === "1";
    setVisible(!seen);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visible]);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode / disabled storage — non-fatal */
    }
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        setVisible(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  const handleGuest = () => {
    dismiss();
    const scrollWhenReady = (attempts = 0) => {
      const el = document.getElementById("explore");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        setTimeout(() => scrollWhenReady(attempts + 1), 50);
      }
    };
    requestAnimationFrame(() => scrollWhenReady());
  };

  const handleBrowse = () => dismiss();

  if (visible === null) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="splash-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <Image
            src="/images/roof3.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />

          <button
            type="button"
            onClick={handleBrowse}
            aria-label="Close splash screen"
            className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 text-center text-white px-6 max-w-lg"
          >
            <Image
              src="/images/logo.jpg"
              alt=""
              width={72}
              height={72}
              priority
              className="rounded-full mx-auto mb-6 shadow-lg"
            />
            <h2
              id="splash-heading"
              className="font-serif text-3xl sm:text-4xl mb-3"
            >
              Welcome to {property.name}
            </h2>
            <p className="text-sm sm:text-base text-white/85 mb-8">
              {property.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleGuest}
                autoFocus
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <MapPin size={16} strokeWidth={2} />
                I&apos;m a guest
              </button>
              <button
                type="button"
                onClick={handleBrowse}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/60 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                <Eye size={16} strokeWidth={2} />
                Just browsing
              </button>
            </div>

            <p className="text-xs text-white/60 mt-6">
              Guests jump straight to the Explore Irosin map.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
