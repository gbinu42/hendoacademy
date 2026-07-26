import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Match legacy GitHub Pages URLs: /articles/turgama (not /articles/turgama/)
  trailingSlash: false,
};

export default nextConfig;
