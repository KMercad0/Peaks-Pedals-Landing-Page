# Peaks & Pedals Transient — Landing Page Plan


---
mcp__serena__activate_project project="."
## 1. Project Overview

**What:** Brochure/showcase landing page for "Peaks & Pedals Transient" — a family-owned transient apartment in Irosin, Sorsogon with a rooftop view of Mt. Bulusan.

**Goal:** Beautiful showcase site that drives visitors to the Booking.com listing. No custom booking engine needed.

**Booking.com link:** `https://www.booking.com/hotel/ph/peaks-amp-pedals-transient.html`

---

## 2. Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15 (App Router)** | SSG for fast static pages, stable React 19 support, Turbopack dev server |
| Language | **TypeScript** | Consistent with your existing portfolio |
| Styling | **Tailwind CSS** | You already know it, fast iteration |
| Animation | **Framer Motion** | Scroll reveals, hover effects, polished feel |
| Icons | **Lucide React** | Lightweight, consistent icon set |
| Deployment | **Vercel** | Free tier, you already have an account |
| Images | **next/image** | Built-in optimization, lazy loading, responsive srcsets |

**No CMS, no database, no backend.** Pure static site. Content lives in a single data file.

---

## 3. Design Direction

### Aesthetic: "Misty Mountain Calm"
- **Tone:** Serene, natural, warm — like waking up to the Mt. Bulusan view
- **NOT:** Generic Airbnb clone, corporate hotel site, or overly flashy

### Color Palette (CSS Variables)

```css
:root {
  /* Primary — derived from the misty blue-green of the mountain view */
  --color-primary: #4A7C6F;        /* muted sage green */
  --color-primary-light: #6B9E8F;  /* lighter sage */
  --color-primary-dark: #3A5F54;   /* deep forest */

  /* Neutrals — warm, not cold grays */
  --color-bg: #FAFAF7;             /* warm off-white */
  --color-bg-alt: #F2F0EB;         /* slightly darker warm */
  --color-text: #2C2C2C;           /* near-black, not pure black */
  --color-text-muted: #6B6B6B;     /* secondary text */
  --color-border: #E5E2DC;         /* warm border */

  /* Accent — from the warm Sorsogon sunset/rooftop warmth */
  --color-accent: #D4915E;         /* warm terracotta */
  --color-accent-light: #E8B891;   /* softer warm */
}
```

### Typography (Google Fonts)

| Role | Font | Weight |
|------|------|--------|
| Display / Headings | **DM Serif Display** | 400 |
| Body / UI | **DM Sans** | 400, 500, 600 |

Why: DM Serif Display is elegant without being stuffy — feels like a boutique travel brand. DM Sans pairs perfectly as the geometric counterpart. Both are free on Google Fonts.

### Key Design Principles
- **Hero image is everything** — the rooftop Mt. Bulusan photo should dominate above the fold
- **Generous whitespace** — let the photos breathe, don't cram
- **Subtle animations** — fade-in-up on scroll, gentle hover lifts on cards, no bouncing or flashy transitions
- **Warm and inviting** — this is someone's home, not a hotel chain

---

## 4. Page Structure (Single Page)

### Section 0: Navigation (Sticky Header)
- **Sticky navbar** that becomes semi-transparent → solid on scroll
- Left: property name / logo text
- Right: section links (smooth scroll) — About, Gallery, Amenities, Location
- Far right: "Book Now" CTA button (accent color)
- Mobile: simplified bar with just logo + "Book Now" CTA (or hamburger menu)

### Section 1: Hero
- **Full-width** rooftop/mountain view photo as background (roof3.jpg)
- Slight dark overlay gradient (bottom-heavy) for text readability
- Centered text overlay:
  - Property name: "Peaks & Pedals Transient"
  - Tagline: "Wake up to Mt. Bulusan" or "Your mountain escape in Irosin, Sorsogon"
  - CTA button: "Book on Booking.com" → links to listing
- Subtle scroll indicator (chevron or "scroll" text) at bottom

### Section 2: Introduction / About
- Short 2-3 sentence description of the property
- Key stats in a horizontal row: "32 m² · 1 Bedroom · Rooftop Terrace · Mt. Bulusan View"
- Keep it tight, don't over-explain

### Section 3: Photo Cards (The 3-Column Layout You Want)
- **3 cards** in a responsive grid (3 cols on desktop, 1 on mobile)
- Each card:
  - Photo (top, with slight rounded corners)
  - Title below: e.g. "Mountain View Terrace", "Spacious Room", "Fully Equipped"
  - 1-2 line description
- For now, use the 2 photos you have + 1 placeholder (you'll take a 3rd photo — suggestion: the kitchenette or bathroom)
- Cards should have a subtle hover lift (translateY -4px + shadow increase)

### Section 4: Amenities (3-Column Text Grid)
- **3 columns** of amenity groups with icons (Lucide):
  - **Comfort:** Free WiFi, TV, Electric Kettle, Kitchenware, Shower
  - **Convenience:** Free Parking, Pet Friendly, Non-Smoking, Private Bathroom
  - **Experience:** Mountain View, City View, Rooftop Terrace, Dining Area
- Each group: icon + title + list of items
- Clean, minimal presentation

### Section 5: Location
- Static text block with address and distance info:
  - "M.L. Quezon St., San Pedro, Irosin, Sorsogon 4707"
  - "58 miles from Bicol International Airport"
- **Embedded Google Maps iframe** showing the property location
- Check-in: 2:00 PM / Check-out: 12:00 PM

### Section 6: Reviews (Last Priority — Placeholder for Now)
- For v1: hardcode 2-3 reviews manually (copy from your Booking.com listing if you have any)
- Simple card layout with reviewer name, date, quote, and star rating
- **Do NOT try to scrape Booking.com or Google** — their APIs are paywalled or against TOS for scraping. Just manually copy a few reviews for now.

### Section 7: Footer / CTA
- Repeat CTA: "Ready to book?" + Booking.com button
- Contact info: phone number, email (optional)
- Social links if applicable
- "© 2026 Peaks & Pedals Transient"

---

## 5. Content Data File

Create a single `src/data/property.ts` file so all content is easy to update:

```typescript
export const property = {
  name: "Peaks & Pedals Transient",
  tagline: "Your mountain escape in Irosin, Sorsogon",
  description: "A cozy transient apartment with a rooftop terrace overlooking Mt. Bulusan. Perfect for travelers exploring Sorsogon — whether you're hiking the trails, biking the countryside, or just unwinding with a view.",
  bookingUrl: "https://www.booking.com/hotel/ph/peaks-amp-pedals-transient.html",
  address: "M.L. Quezon St., San Pedro, 3F Orange Building, Irosin, Sorsogon 4707",
  phone: "", // add your number
  email: "", // add if you want
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  priceRange: "₱800 – ₱1,000 / night",
  rating: 10.0,
  ratingSource: "Booking.com",
  size: "32 m²",
  bedrooms: 1,
  bathrooms: 1,

  highlights: [
    { icon: "Mountain", label: "Mt. Bulusan View" },
    { icon: "Home", label: "Entire Apartment" },
    { icon: "Car", label: "Free Parking" },
    { icon: "Wifi", label: "Free WiFi" },
  ],

  photoCards: [
    {
      src: "/images/roof3.jpg",
      alt: "Rooftop terrace overlooking Mt. Bulusan",
      title: "Mountain View Terrace",
      description: "Start your morning with coffee and a panoramic view of Mt. Bulusan from the private rooftop."
    },
    {
      src: "/images/room2.jpg",
      alt: "Spacious bedroom with bunk bed and TV",
      title: "Spacious Room",
      description: "32 square meters of comfortable living space with TV, seating area, and natural light."
    },
    {
      src: "/images/placeholder.jpg",  // TODO: take a photo of kitchenette or bathroom
      alt: "Fully equipped kitchenette",
      title: "Fully Equipped",
      description: "Kitchenette with electric kettle, kitchenware, and a dining table for home-cooked meals."
    }
  ],

  amenityGroups: [
    {
      icon: "Sofa",
      title: "Comfort",
      items: ["Free WiFi", "Flat-screen TV", "Electric Kettle", "Kitchenware", "Dining Table"]
    },
    {
      icon: "ShieldCheck",
      title: "Convenience",
      items: ["Free Parking", "Pet Friendly", "Non-Smoking", "Private Bathroom", "Shower"]
    },
    {
      icon: "Compass",
      title: "Experience",
      items: ["Mt. Bulusan View", "City View", "Rooftop Terrace", "Near Hiking Trails", "Bike-Friendly"]
    }
  ],

  reviews: [
    // Manually add from your Booking.com listing
    // { name: "Guest Name", date: "Jan 2026", text: "...", rating: 10 }
  ]
};
```

---

## 6. Project File Structure

```
peaks-pedals/
├── public/
│   └── images/
│       ├── roof3.jpg          # hero + card image
│       ├── room2.jpg          # room card image
│       └── placeholder.jpg    # TODO: 3rd photo
├── src/
│   ├── app/
│   │   ├── layout.tsx         # root layout, fonts, metadata
│   │   ├── page.tsx           # single landing page, imports all sections
│   │   └── globals.css        # tailwind directives + CSS variables
│   ├── components/
│   │   ├── Navbar.tsx         # sticky nav with section links + CTA
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── PhotoCards.tsx
│   │   ├── Amenities.tsx
│   │   ├── Location.tsx       # includes Google Maps iframe
│   │   ├── Reviews.tsx        # placeholder for now
│   │   ├── Footer.tsx
│   │   └── BookingCTA.tsx     # reusable CTA button
│   └── data/
│       └── property.ts        # all content in one place
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 7. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | 3-column cards, 3-column amenities, full hero |
| Tablet (768px) | 2-column cards, 2-column amenities |
| Mobile (<768px) | 1-column everything, stacked layout, smaller hero text |

---

## 8. Performance Targets

- Use `next/image` for all photos (automatic WebP, lazy loading)
- Static export (`output: 'export'` in next.config) — no server needed
- Google Fonts via `next/font/google` (no layout shift)
- Target: Lighthouse 90+ on all categories

---

## 8b. SEO (Included in v1)

- **Meta tags** in `layout.tsx`: title, description, viewport
- **Open Graph tags**: og:title, og:description, og:image (for WhatsApp/Facebook/social sharing)
- **Favicon**: simple icon (mountain or bike themed)
- **JSON-LD structured data**: `LodgingBusiness` schema for Google rich results — includes name, address, price range, rating, images
- **Canonical URL**: set once deployed to Vercel

---

## 9. Claude Code Prompt

When you're ready to build, paste this into Claude Code:

```
Build a Next.js 15 (App Router) landing page for "Peaks & Pedals Transient" 
— a transient apartment in Irosin, Sorsogon with a rooftop view of Mt. Bulusan.

Read PEAKS_PEDALS_PLAN.md for the full spec including:
- Tech stack (Next.js + TypeScript + Tailwind + Framer Motion)
- Design direction ("Misty Mountain Calm" — sage greens, warm off-whites, DM Serif Display + DM Sans fonts)
- Page sections: Navbar (sticky), Hero, About, Photo Cards (3-col), Amenities (3-col), Location (with Google Maps), Reviews placeholder, Footer
- SEO: Open Graph tags, JSON-LD LodgingBusiness schema, favicon
- Content data structure in src/data/property.ts
- File structure

Images are in public/images/. Use next/image for optimization.
Static export for Vercel deployment.
Make it beautiful — generous whitespace, subtle scroll animations, warm and inviting.
```

---

## 10. Photos You Still Need

You have 2 out of 3 minimum photos. Suggestions for the 3rd:
1. **Kitchenette area** (shows self-catering capability)
2. **Bathroom** (proves cleanliness)
3. **Building exterior / entrance** (helps guests find the place)
4. **Night view from rooftop** (adds atmosphere variety)

Ideally you'd have 5-8 photos total for a proper gallery, but 3 strong ones in cards is fine for v1.

---

## 11. Future Enhancements (After v1)

- [ ] Add more photos and a lightbox gallery component
- [ ] Real reviews section (manually curated)
- [ ] Multi-language support (English + Filipino)
- [ ] Add a simple contact form (could use Formspree or similar — no backend)
- [ ] Analytics (Vercel Analytics or Google Analytics)

---

## Resume Value

When you ship this, add it to your resume as:

**Peaks & Pedals Transient — Landing Page**
- Built a static landing page for a family-owned transient property using Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion
- Implemented responsive design with optimized image loading via next/image, achieving 90+ Lighthouse scores
- Deployed on Vercel with static export for zero-cost hosting

This fills your **Next.js gap** and shows you can build production marketing sites, not just CRUD apps.
