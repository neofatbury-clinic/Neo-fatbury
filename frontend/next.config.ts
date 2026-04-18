import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // We remove the experimental.turbo key as it was invalid for this version
  // and we want to fallback to the stable webpack build for Sanity Studio compatibility
};

export default nextConfig;
