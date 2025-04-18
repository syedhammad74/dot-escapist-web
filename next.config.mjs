/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    port: 3005,
    host: '0.0.0.0',
  },
  images: {
    domains: ["aceternity.com", "cdn.easyfrontend.com"],
  },
};

export default nextConfig; // Export the configuration for ES modules
