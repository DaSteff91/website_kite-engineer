import "./src/env.js";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

export default config;
