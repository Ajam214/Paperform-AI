/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // keep static export
  images: {
    unoptimized: true, // ✅ fixes the error
  },
};

module.exports = nextConfig;
