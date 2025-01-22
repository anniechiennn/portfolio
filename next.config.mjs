/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig

