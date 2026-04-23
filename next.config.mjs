/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/piano-keyboards-of-the-past",
        destination: "/history",
        permanent: true,
      },
      {
        source: "/piano-keyboards-of-the-future",
        destination: "/history",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
