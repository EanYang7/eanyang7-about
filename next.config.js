/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/about",
  images: {
    loader: "default",
    path: "/about/_next/image",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
