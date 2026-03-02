import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoCards from "@/components/PhotoCards";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import BookingBanner from "@/components/BookingBanner";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { property } from "@/data/property";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: property.name,
  description: property.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "M.L. Quezon St., San Pedro, 3F Orange Building",
    addressLocality: "Irosin",
    addressRegion: "Sorsogon",
    postalCode: "4707",
    addressCountry: "PH",
  },
  priceRange: property.priceRange,
  image: "/images/roof3.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: property.rating,
    bestRating: 10,
    ratingCount: 1,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PhotoCards />
        <Gallery />
        <Amenities />
        <Reviews />
        <BookingBanner />
        <Location />
      </main>
      <Footer />
    </>
  );
}
