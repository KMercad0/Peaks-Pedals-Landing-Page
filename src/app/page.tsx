import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoCards from "@/components/PhotoCards";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";
import { property } from "@/data/property";
import ratingsData from "@/data/ratings.json";
import { APARTMENT_COORDS } from "@/data/landmarks";

const SITE_URL = "https://peaksandpedals.vercel.app";

// Below-the-fold: code-split for faster initial load on slow connections
const Gallery = dynamic(() => import("@/components/Gallery"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const BookingBanner = dynamic(() => import("@/components/BookingBanner"));
const Explore = dynamic(() => import("@/components/Explore"));
const Location = dynamic(() => import("@/components/Location"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#lodging`,
  url: SITE_URL,
  name: property.name,
  description: property.description,
  telephone: "+639455087191",
  address: {
    "@type": "PostalAddress",
    ...property.structuredAddress,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: APARTMENT_COORDS.lat,
    longitude: APARTMENT_COORDS.lng,
  },
  sameAs: [property.socialLinks.facebook],
  priceRange: property.priceRange,
  image: `${SITE_URL}/images/roof3.jpg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: property.rating,
    bestRating: 10,
    ratingCount: ratingsData.platforms.reduce((sum, p) => sum + p.reviewCount, 0),
  },
  checkinTime: property.checkIn,
  checkoutTime: property.checkOut,
  numberOfRooms: property.bedrooms,
  amenityFeature: property.amenityGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item,
      value: true,
    }))
  ),
};

export default function Home() {
  return (
    <>
      <Splash />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <PhotoCards />
        <Gallery />
        <Amenities />
        <Reviews />
        <BookingBanner />
        <Explore />
        <Location />
      </main>
      <Footer />
    </>
  );
}
