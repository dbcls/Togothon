/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
