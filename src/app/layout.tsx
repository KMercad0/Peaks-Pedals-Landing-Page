import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://peaksandpedals.vercel.app"),
  icons: {
    icon: "/images/logo.jpg",
  },
  title: "Peaks & Pedals Transient — Mountain Escape in Irosin, Sorsogon",
  description:
    "A cozy transient apartment with a rooftop terrace overlooking Mt. Bulusan. Perfect for travelers exploring Sorsogon — hiking, biking, or just unwinding with a view.",
  openGraph: {
    title: "Peaks & Pedals Transient — Mountain Escape in Irosin, Sorsogon",
    description:
      "Wake up to Mt. Bulusan. A cozy rooftop apartment in Irosin, Sorsogon.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/images/roof3.jpg",
        width: 1200,
        height: 630,
        alt: "Rooftop view of Mt. Bulusan from Peaks & Pedals Transient",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.booking.com" />
        <link rel="dns-prefetch" href="https://www.agoda.com" />
        <link rel="dns-prefetch" href="https://www.airbnb.com" />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
