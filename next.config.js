/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/77550037",
      },
    ],
  },
};

module.exports = nextConfig;
