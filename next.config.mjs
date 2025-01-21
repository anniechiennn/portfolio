/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Adjust this if your repo name is different
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio/', // Add this line
};

export default nextConfig;

