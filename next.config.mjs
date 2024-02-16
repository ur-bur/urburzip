/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pntgrprwhxvfhrtnlhmv.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
