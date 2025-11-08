import type { Metadata } from 'next';
import Footer from './component/Footer';
import Header from './component/Header';
import './globals.css';

export const metadata: Metadata = {
  title: '생기뷰(SGView)',
  description: '이스트루에듀',
  openGraph: {
    title: '생기뷰(SGView)',
    description: '이스트루에듀',
    url: 'https://www.stam-p.com',
    siteName: 'STAMP®',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'STAMP OG Image',
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
    <html lang='en'>
      <body className='min-w-[375px]'>
        <Header />
        <div className='mx-auto mt-[72px] max-768:min-w-[375px] max-[745px]:mt-[56px]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
