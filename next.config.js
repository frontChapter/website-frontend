const apiServerUrl = new URL(
  process.env.API_SERVER_URL || "https://frontchapter.ir",
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: apiServerUrl.hostname,
      },
    ],
  },
};

module.exports = nextConfig;
