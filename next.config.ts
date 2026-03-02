import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
  serverExternalPackages: ["framer-motion", "motion-dom"],
};

export default nextConfig;
