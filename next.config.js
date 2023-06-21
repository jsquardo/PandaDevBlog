const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

module.exports = withContentlayer({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    domains: ["pbs.twimg.com"],
  },
  experimental: {
    appDir: true,
  },
});
