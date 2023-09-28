/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cnd.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
