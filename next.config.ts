import type { NextConfig } from "next";
import withPWA from "next-pwa";

// Configure next-pwa
const withPWAWrapped = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Silence Next.js 16 Turbopack warning when not using custom turbopack config
  turbopack: {},
};

export default withPWAWrapped(nextConfig);
