import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placeholder.com", "via.placeholder.com"],
    // Add any other external domains you might use for images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // This function helps handle image URLs that might be external or missing
  async rewrites() {
    return [
      {
        source: "/api/placeholder/:width/:height",
        destination: "https://via.placeholder.com/:width/:height",
      },
      {
        source: "/api/placeholder/:width/:height/:text",
        destination:
          "https://via.placeholder.com/:width/:height/CCCCCC/666666?text=:text",
      },
    ];
  },
};
export default nextConfig;
