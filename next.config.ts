import type { NextConfig } from "next";

// Site is served at / (custom domain + local). Optional PAGES_BASE_PATH is only for
// rare project-Pages-only previews; production deploy must leave it unset.
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
