import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dk7kt9wth/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
