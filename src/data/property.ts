export const property = {
  name: "Peaks & Pedals Transient",
  tagline: "Your mountain escape in Irosin, Sorsogon",
  description:
    "A cozy transient apartment with a rooftop terrace overlooking Mt. Bulusan. Perfect for travelers exploring Sorsogon — whether you're hiking the trails, biking the countryside, or just unwinding with a view.",
  bookingUrl:
    "https://www.booking.com/hotel/ph/peaks-amp-pedals-transient.html",
  agodaUrl:
    "https://www.agoda.com/en-ie/peaks-pedals-transient/hotel/irosin-ph.html?cid=1844104&ds=hE6tlecsxXqKg4le",
  airbnbUrl:
    "https://www.airbnb.com/rooms/1032861432227987161?source_impression_id=p3_1773272098_P3EYK5fIAy8NFb_3",
  address:
    "M.L. Quezon St., San Pedro, 3F Orange Building, Irosin, Sorsogon 4707",
  structuredAddress: {
    streetAddress: "M.L. Quezon St., San Pedro, 3F Orange Building",
    addressLocality: "Irosin",
    addressRegion: "Sorsogon",
    postalCode: "4707",
    addressCountry: "PH",
  },
  phone: "0945 508 7191",
  email: "peaksandpedals@email.com",
  socialLinks: {
    facebook: "https://www.facebook.com/peaksandpedals",
  },
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  pricing: [
    { pax: 1, rate: 850 },
    { pax: 2, rate: 950 },
    { pax: 3, rate: 1050 },
    { pax: 4, rate: 1150 },
  ],
  priceRange: "₱850 – ₱1,150 / night",
  priceHint: "From ₱850/night",
  nearestAirport: "93 km from Bicol International Airport",
  rating: 9.8,
  ratingSource: "Booking.com & Agoda",
  size: "32 m²",
  bedrooms: 1,
  bathrooms: 1,

  highlights: [
    { icon: "Mountain" as const, label: "Mt. Bulusan View" },
    { icon: "Home" as const, label: "Entire Apartment" },
    { icon: "Car" as const, label: "Free Parking" },
    { icon: "Wifi" as const, label: "Free WiFi" },
  ],

  photoCards: [
    {
      src: "/images/roof3.jpg",
      alt: "Rooftop terrace overlooking Mt. Bulusan",
      title: "Mountain View Terrace",
      description:
        "Start your morning with coffee and a panoramic view of Mt. Bulusan from the private rooftop.",
    },
    {
      src: "/images/room2.jpg",
      alt: "Spacious bedroom with bunk bed and TV",
      title: "Spacious Room",
      description:
        "32 square meters of comfortable living space with TV, seating area, and natural light.",
    },
    {
      src: "/images/room4.jpg",
      alt: "Kitchenette with dining area and mountain view",
      title: "Fully Equipped",
      description:
        "Kitchenette with electric kettle, kitchenware, and a dining table for home-cooked meals.",
    },
  ],

  galleryImages: [
    { src: "/images/room5.jpg", alt: "Dining nook with mountain-framed window view" },
    { src: "/images/room3.jpg", alt: "Living area with TV and mountain view through window" },
    { src: "/images/room1.jpg", alt: "Spacious bedroom with bunk bed and sofa" },
    { src: "/images/bld1.jpg", alt: "Building exterior of Peaks & Pedals" },
    { src: "/images/roof2.jpg", alt: "Rooftop deck space with mountain views" },
    { src: "/images/sign.jpg", alt: "Peaks & Pedals signage at dusk" },
  ],

  amenityGroups: [
    {
      icon: "Sofa" as const,
      title: "Comfort",
      items: [
        "Free WiFi",
        "Flat-screen TV",
        "Electric Kettle",
        "Kitchenware",
        "Dining Table",
      ],
    },
    {
      icon: "ShieldCheck" as const,
      title: "Convenience",
      items: [
        "Free Parking",
        "Pet Friendly",
        "Non-Smoking",
        "Private Bathroom",
        "Shower",
      ],
    },
    {
      icon: "Compass" as const,
      title: "Experience",
      items: [
        "Mt. Bulusan View",
        "City View",
        "Rooftop Terrace",
        "Near Hiking Trails",
        "Bike-Friendly",
      ],
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.19!2d124.0315898!3d12.7044247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cf003fa77d75%3A0x61fab16114218751!2sPeaks%26Pedals%20Transient!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph",
};
