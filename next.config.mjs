/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.9.46.114'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
