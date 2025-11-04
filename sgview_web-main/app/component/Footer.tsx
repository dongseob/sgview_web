import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full border-t border-[var(--n-200)]'>
      <div className='px-[144px] py-[48px] flex items-start justify-between max-w-[1440px] mx-auto pb-[120px]'>
        <div className='flex flex-col items-start justify-start gap-[40px]'>
          <ul className='flex items-center justify-start gap-[40px]'>
            <li>
              <Link
                href='/'
                className='text-[15px] leading-[15px] text-[var(--n-800)]'
              >
                회사소개
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='text-[15px] leading-[15px] text-[var(--n-800)]'
              >
                이용약관
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='text-[15px] leading-[15px] text-[var(--n-800)]'
              >
                개인정보처리방침
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-start justify-start gap-[24px]'>
            <Image src='/images/logo.png' alt='logo' width={127} height={34} />
            <div className='flex flex-col items-start justify-start gap-[8px]'>
              <div className='flex flex-col items-start justify-start gap-[4px]'>
                <div className='flex items-center justify-start gap-[8px]'>
                  <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                    (주)에스지뷰교육연구소 대표이사 XXX
                  </p>
                  <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
                  <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                    사업자등록번호 111-11-11111
                  </p>
                  <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
                  <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                    통신판매업 신고번호 1111-1111-1111
                  </p>
                </div>
                <div className='flex items-center justify-start gap-[8px]'>
                  <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                    충남 천안시 서북구 검은들3길 58
                  </p>
                  <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
                  <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                    대표번호 XXXX-XXXX
                  </p>
                </div>
              </div>
              <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                Copyright 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href='/'>
            <Image
              src='/images/link_blog.png'
              alt='link_blog'
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
