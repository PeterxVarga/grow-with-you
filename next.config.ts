import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 requires an explicit qualities allowlist
    qualities: [75, 85, 100],
  },
};

export default nextConfig;
