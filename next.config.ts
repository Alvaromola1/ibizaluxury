/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://temporal_para_evitar_error_en_build",
  },
};

export default nextConfig;