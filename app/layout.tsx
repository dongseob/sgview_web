import type { Metadata } from 'next';
import Footer from './component/Footer';
import Header from './component/Header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sgview.kr/'),
  title: '생기뷰(SGView)',
  description: '이스트루에듀',
  openGraph: {
    title: '생기뷰(SGView)',
    description: '이스트루에듀',
    url: 'https://sgview.kr/',
    siteName: '생기뷰(SGView)',
    images: [
      {
        url: '/icon/og.png',
        width: 1200,
        height: 630,
        alt: 'OG images',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='min-w-[340px]'>
        <Header />
        <div className='mx-auto mt-[72px] max-768:min-w-[375px] max-[745px]:mt-[56px]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
