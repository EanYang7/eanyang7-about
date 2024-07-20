/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/about",

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
