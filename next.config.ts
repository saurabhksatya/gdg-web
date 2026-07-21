import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@material-symbols-svg/react"],
  },
};

export default nextConfig;
