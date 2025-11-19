import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // 정적 export 시 이미지 최적화 비활성화 필요
  },
  trailingSlash: true,
};

export default nextConfig;
