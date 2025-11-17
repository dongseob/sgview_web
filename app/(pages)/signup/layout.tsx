import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 | 생기뷰(SGView)',
  openGraph: {
    title: '회원가입 | 생기뷰(SGView)',
    url: 'https://istrue.axcorp.ai/signup',
    images: [
      {
        url: '/images/og.png',
        width: 800,
        height: 600,
        alt: 'OG images',
      },
    ],
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
