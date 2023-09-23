/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    protocol: "http",
    domains: ["cdn.imagin.studio"],
    port: "",
    pathname: "/getimage"
  }
}

module.exports = nextConfig
