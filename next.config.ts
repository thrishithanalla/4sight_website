import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // 🔥 REQUIRED for static files
  images: {
    unoptimized: true,       // 🔥 REQUIRED for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
