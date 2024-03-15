/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumb.pccomponentes.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.pccomponentes.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
