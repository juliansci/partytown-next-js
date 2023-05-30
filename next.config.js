/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: [
    {
      source: "/proxy/js-hs-analytics-net/:match*",
      destination: "https://js.hs-analytics.net/:match*",
    },
    {
      source: "/proxy/js-hs-adspixel-net/:match*",
      destination: "https://js.hsadspixel.net/:match*",
    },
  ],
};

module.exports = nextConfig;
