import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '나의 컨설팅 | 생기뷰(SGView)',
  openGraph: {
    title: '나의 컨설팅 | 생기뷰(SGView)',
    url: 'https://istrue.axcorp.ai/mypage/consult',
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
  return (
    <div className='pt-[40px] pb-[120px] max-[745px]:pt-[0px] max-[745px]:pb-[32px]'>
      <div className='max-w-[1440px] mx-auto max-[745px]:px-0'>{children}</div>
    </div>
  );
};

export default layout;
