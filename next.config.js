/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost",
      "kite-engineer.de",
      "www.kite-engineer.de",
      "www-dev.kite-engineer.de"
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    path: '/_next/image',
    loader: 'default'
  }
};

module.exports = nextConfig;