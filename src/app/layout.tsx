import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

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
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
