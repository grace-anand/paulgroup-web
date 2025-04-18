/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    domains: ["ext.same-assets.com", "same-assets.com"],
    unoptimized: true,
  },
};

export default nextConfig;
