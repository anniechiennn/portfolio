/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // This should match your repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;