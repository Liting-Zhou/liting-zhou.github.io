import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // Ensure Next/Image works without the image optimizer on static hosting
  images: {
    unoptimized: true,
  },
  // Helpful for GitHub Pages and consistent URLs
  trailingSlash: true,
};

export default nextConfig;
