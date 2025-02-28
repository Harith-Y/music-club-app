/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  // Add transpilePackages to handle issues with external libraries
  transpilePackages: ['react-slick'],
};

module.exports = nextConfig;