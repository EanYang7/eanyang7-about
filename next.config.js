/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/about",
  assetPrefix: "/about/",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
