/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.9.46.114'],
  async redirects() {
    return [
      {
        source: '/AboutUs',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ContactUs',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Services',
        destination: '/products',
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
