import { NextConfig } from 'next';

// Define your configuration object
const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
