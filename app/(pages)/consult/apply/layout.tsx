import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '입시컨설팅 신청 | 생기뷰(SGView)',
  openGraph: {
    url: 'https://istrue.axcorp.ai/consult/apply',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'OG images',
      },
    ],
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
