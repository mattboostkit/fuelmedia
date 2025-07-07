import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@sanity/ui', '@sanity/icons'],
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
