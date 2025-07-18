import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@sanity/ui', '@sanity/icons'],
  images: {
    domains: ['cdn.sanity.io', 'ik.imagekit.io'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
