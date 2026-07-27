import type { NextConfig } from "next";

// Local and custom-domain builds use no basePath (site at /).
// GitHub Actions sets PAGES_BASE_PATH=/hendoacademy for project Pages on github.io.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Match legacy GitHub Pages URLs: /articles/turgama (not /articles/turgama/)
  trailingSlash: false,
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : {}),
};

export default nextConfig;
