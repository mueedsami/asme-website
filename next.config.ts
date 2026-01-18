import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.cache = false; // fixes "PackFileCacheStrategy" memory/cache crashes
    return config;
  },
};

export default nextConfig;
