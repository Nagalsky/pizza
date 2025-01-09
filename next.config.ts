import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
        pathname: `/image/r:*/*`,
      },
      {
        protocol: "https",
        hostname: "cdn.dodostatic.net",
        pathname: `/static/Img/Ingredients/*/*`,
      },
    ],
  },
};

export default nextConfig;
