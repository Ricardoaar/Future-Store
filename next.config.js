const path = require("node:path");
/** @type {import("next").NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`
  },
  images: {
    remotePatterns: [
      { hostname: "cdn.shopify.com", protocol: "https" }
    ]
  }
};


module.exports = withBundleAnalyzer(nextConfig);