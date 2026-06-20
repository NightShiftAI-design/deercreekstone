import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next's built-in Image Optimization API serves these formats
    // automatically based on the browser's Accept header — no need
    // to hand-convert source files to .webp/.avif on disk.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
