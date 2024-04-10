/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // süper should redirect to sueper (with static url encoded string)
        source: "/s%C3%BCper",
        destination: "/sueper",
        permanent: true,
      },
      {
        // düper should redirect to sueper (with a node function)
        source: encodeURI("/düper"),
        destination: "/sueper",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
