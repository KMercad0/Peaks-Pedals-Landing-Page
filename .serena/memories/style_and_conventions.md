# Code Style & Conventions

## General
- TypeScript with strict types
- Functional React components with `export default`
- "use client" directive for components using hooks/framer-motion
- CSS variables for theming (--color-accent, --color-text, --color-bg, etc.)
- Tailwind utility classes, no separate CSS modules

## Naming
- Components: PascalCase files and exports (e.g., `BookingCTA.tsx`)
- Data files: camelCase (e.g., `property.ts`, `reviews.json`)

## Patterns
- Centralized data in `src/data/` — components import from there
- Reviews use 10-point scale (matching Booking.com/Agoda)
- Reviews have: name, date, text, rating, source, travelerType
- Framer Motion for scroll-triggered animations (whileInView)
- Lucide icons throughout
