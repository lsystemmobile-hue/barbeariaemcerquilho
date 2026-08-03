import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
};

export default nextConfig;
