import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Experimental features
  experimental: {
    // Disable Turbopack if experiencing chunk loading issues
    // turbopack: {
    //   resolveAlias: {
    //     // Add any necessary aliases here
    //   },
    // },
  },
};

export default nextConfig;
