import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // The service was originally scoped as "Application Development".
      { source: "/application-development", destination: "/managed-software", permanent: true },
    ];
  },
};

export default nextConfig;
