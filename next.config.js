/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
