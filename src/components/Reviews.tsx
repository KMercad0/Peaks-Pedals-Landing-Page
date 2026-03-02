"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Users,
  Sparkles,
  MapPin,
  Sofa,
  HeartHandshake,
  Wallet,
  Building2,
  Calendar,
  User,
  Heart,
  UsersRound,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import reviews from "@/data/reviews.json";
import ratingsData from "@/data/ratings.json";

/* ─── Icon maps ─── */

const categoryIcons: Record<string, LucideIcon> = {
  Cleanliness: Sparkles,
  Facilities: Building2,
  Location: MapPin,
  Comfort: Sofa,
  Service: HeartHandshake,
  Value: Wallet,
};

const travelerIcons: Record<string, LucideIcon> = {
  Family: Users,
  "Solo traveler": User,
  Couple: Heart,
  Group: UsersRound,
  "Business traveler": Briefcase,
};

/* ─── Rating Bar ─── */

function RatingBar({ score, maxScore = 10 }: { score: number; maxScore?: number }) {
  const percent = (score / maxScore) * 100;
  return (
    <div className="h-2 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full bg-[var(--color-accent)] rounded-full"
      />
    </div>
  );
}

/* ─── Star cluster ─── */

function ScoreStars({
  score,
  maxScore = 10,
  size = 14,
}: {
  score: number;
  maxScore?: number;
  size?: number;
}) {
  const starCount = 5;
  const filled = Math.round((score / maxScore) * starCount);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: starCount }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < filled
              ? "text-[var(--color-accent)] fill-[var(--color-accent)]"
              : "text-[var(--color-border)]"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* ─── Category Icon (circled) ─── */

function CategoryIcon({ name }: { name: string }) {
  const Icon = categoryIcons[name];
  if (!Icon) return null;
  return (
    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent)]/10 shrink-0">
      <Icon size={15} className="text-[var(--color-accent)]" strokeWidth={2} />
    </div>
  );
}

/* ─── Platform Scorecard ─── */

function PlatformCard({
  platform,
  index,
}: {
  platform: (typeof ratingsData.platforms)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-[var(--color-bg)] rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-border)]/50"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-4xl sm:text-5xl text-[var(--color-text)]">
              {platform.score % 1 === 0
                ? platform.score.toFixed(1)
                : platform.score}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              /{platform.maxScore}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-[var(--color-text)]">
            {platform.name}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {platform.reviewCount} reviews
          </p>
        </div>
      </div>

      {/* Stars + Label */}
      <div className="flex items-center gap-2.5 mb-7">
        <ScoreStars score={platform.score} maxScore={platform.maxScore} size={16} />
        <span className="text-sm font-semibold text-[var(--color-accent)]">
          {platform.label}
        </span>
      </div>

      {/* Category bars with circled icons */}
      <div className="space-y-3.5">
        {platform.categories.map((cat) => (
          <div key={cat.name} className="flex items-center gap-3">
            <CategoryIcon name={cat.name} />
            <span className="text-sm font-medium text-[var(--color-text)] w-[76px] shrink-0">
              {cat.name}
            </span>
            <div className="flex-1">
              <RatingBar score={cat.score} maxScore={platform.maxScore} />
            </div>
            <span className="text-sm font-semibold text-[var(--color-text)] w-8 text-right">
              {cat.score}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Reviews Section ─── */

export default function Reviews() {
  const totalReviews = ratingsData.platforms.reduce(
    (sum, p) => sum + p.reviewCount,
    0
  );

  if (reviews.length === 0) {
    return (
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="font-serif text-3xl sm:text-4xl">
            What Our Guests Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-12 sm:mb-14"
        >
          <Users
            size={16}
            className="text-[var(--color-text-muted)]"
            strokeWidth={1.5}
          />
          <p className="text-sm text-[var(--color-text-muted)]">
            {totalReviews} reviews across Booking.com & Agoda
          </p>
        </motion.div>

        {/* Platform Rating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {ratingsData.platforms.map((platform, i) => (
            <PlatformCard key={platform.name} platform={platform} index={i} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12 sm:mb-14"
        >
          <div className="flex-1 h-px bg-[var(--color-border)]" />
          <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full whitespace-nowrap">
            High score for Irosin
          </span>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </motion.div>

        {/* Individual Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => {
            const TravelerIcon = travelerIcons[review.travelerType] || User;
            return (
              <motion.div
                key={`${review.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--color-bg-alt)] rounded-xl p-6 flex flex-col"
              >
                {/* Header: stars + rating badge */}
                <div className="flex items-center justify-between mb-3">
                  <ScoreStars score={review.rating} maxScore={10} size={16} />
                  <span className="text-sm font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-1 rounded-lg">
                    {review.rating}
                  </span>
                </div>

                {/* Quote icon + Review text */}
                <div className="relative mb-5 flex-1">
                  <Quote
                    size={28}
                    className="absolute -top-1 -left-1 text-[var(--color-accent)] opacity-15"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-[var(--color-text)] leading-relaxed pl-4">
                    {review.text}
                  </p>
                </div>

                {/* Footer: name, meta with icons */}
                <div className="border-t border-[var(--color-border)]/50 pt-4">
                  <p className="text-sm font-semibold text-[var(--color-text)] mb-2">
                    {review.name}
                  </p>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar
                        size={14}
                        className="text-[var(--color-accent)]"
                        strokeWidth={2}
                      />
                      <span className="text-xs font-medium text-[var(--color-text)]">
                        {review.date}
                      </span>
                    </div>
                    {review.travelerType && (
                      <div className="flex items-center gap-1.5">
                        <TravelerIcon
                          size={14}
                          className="text-[var(--color-accent)]"
                          strokeWidth={2}
                        />
                        <span className="text-xs font-medium text-[var(--color-text)]">
                          {review.travelerType}
                        </span>
                      </div>
                    )}
                    {review.source && (
                      <span className="text-[11px] font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full px-2.5 py-0.5 ml-auto">
                        {review.source}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
