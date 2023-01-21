/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
