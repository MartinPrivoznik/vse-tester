/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["@nextui-org/react"],
  },
};

module.exports = nextConfig;
