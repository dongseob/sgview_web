import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from './component/Footer';
import Header from './component/Header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '생기뷰',
  description: '생기뷰',
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
