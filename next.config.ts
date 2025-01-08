import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
        pathname: `/image/r:*/*`,
      },
    ],
  },
};

export default nextConfig;
