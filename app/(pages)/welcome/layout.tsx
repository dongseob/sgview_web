import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  openGraph: {
    url: 'https://istrue.axcorp.ai/welcome',
    images: [
      {
        url: '/icon/og2.png',
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
