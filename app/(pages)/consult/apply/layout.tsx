import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '입시컨설팅 신청 | 생기뷰(SGView)',
  openGraph: {
    title: '입시컨설팅 신청 | 생기뷰(SGView)',
    url: 'https://istrue.axcorp.ai/consult/apply',
    images: [
      {
        url: '/icon/og.png',
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
