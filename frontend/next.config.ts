import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // Ensure we don't use turbopack for production build to avoid module resolution issues with Sanity plugins
  experimental: {
    turbo: {
      rules: {
        // ... any custom rules
      }
    }
  }
};

export default nextConfig;
