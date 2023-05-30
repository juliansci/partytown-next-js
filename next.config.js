/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/proxy/js-hs-analytics-net/:match*",
        destination: "https://js.hs-analytics.net/:match*",
      },
      {
        source: "/proxy/js-hs-adspixel-net/:match*",
        destination: "https://js.hsadspixel.net/:match*",
      },
      {
        source: "/cats",
        destination: "https://meowfacts.herokuapp.com",
      },
    ];
  },
};

module.exports = nextConfig;
