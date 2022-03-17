/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
