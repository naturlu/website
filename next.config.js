/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  output: 'export',
  basePath: '/website',
  assetPrefix: '/website/',
};

module.exports = nextConfig; 