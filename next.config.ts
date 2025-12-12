import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
  },
  /* config options here */
  images: {
    domains: ["cdn.simpleicons.org"],
  },
};

export default nextConfig;
