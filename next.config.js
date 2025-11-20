/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath: '/ofatura', // GitHub Pages için - kendi domain'de kullanılmaz
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
