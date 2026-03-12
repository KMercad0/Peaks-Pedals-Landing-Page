# Peaks & Pedals — Project Overview

## Purpose
Landing page / marketing website for "Peaks & Pedals Transient" — a vacation rental apartment in Irosin, Sorsogon, Philippines with rooftop terrace and Mt. Bulusan views.

## Tech Stack
- **Framework:** Next.js 15.5 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Analytics:** Vercel Speed Insights
- **Fonts:** DM Sans (body) + DM Serif Display (headings)

## Project Structure
```
src/
  app/           — Next.js App Router (layout.tsx, page.tsx, globals.css)
  components/    — React components (Hero, Navbar, About, Gallery, etc.)
  data/          — Static data (property.ts, reviews.json, ratings.json)
public/images/   — Static images
```

## Key Data Files
- `src/data/property.ts` — Central config (name, URLs, amenities, photos, etc.)
- `src/data/reviews.json` — Guest reviews array
- `src/data/ratings.json` — Platform scores (Booking.com, Agoda)

## Booking
- Bookings via external platforms: Booking.com, Agoda, Airbnb
- BookingCTA component shows dropdown with platform links
- Used in: Navbar, Hero, BookingBanner, Footer
