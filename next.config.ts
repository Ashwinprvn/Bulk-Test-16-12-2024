import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    unoptimized: true, // Disables optimization for static builds
  },
};


export default nextConfig;
