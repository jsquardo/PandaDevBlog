/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
const nextConfig = {};

module.exports = withContentlayer({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});
