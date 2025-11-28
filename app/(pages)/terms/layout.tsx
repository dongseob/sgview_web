import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  openGraph: {
    url: 'https://istrue.axcorp.ai/terms',
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
