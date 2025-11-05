'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className='w-full border-t border-[var(--n-200)]'>
      {/* wrapper */}
      <div
        className={`
          max-w-[1440px] mx-auto
          px-[144px] py-[48px]
          flex items-start justify-between
          ${isHome ? 'pb-[120px]' : ''}
          /* 모바일: 요구사항 - py48 px20 gap-y24 */
          max-[745px]:px-[20px] max-[745px]:py-[48px]
          ${isHome ? 'max-[745px]:pb-[120px]' : ''}
          max-[745px]:flex-col max-[745px]:gap-y-[24px]
        `}
      >
        {/* 좌측: 링크 + 로고 + 회사정보 */}
        <div className='flex flex-col items-start justify-start gap-[40px] max-[745px]:gap-[24px]'>
          {/* 상단 링크 */}
          <ul className='flex items-center justify-start gap-[40px] max-[745px]:gap-[24px] max-[745px]:px-0 font-[600]'>
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

          {/* 로고 + 회사정보 */}
          <div className='flex flex-col items-start justify-start gap-[24px]'>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={127}
              height={34}
              className='max-[745px]:w-[89px] max-[745px]:h-[24px]'
            />

            {/* 정보 영역 */}
            <div className='flex flex-col items-start justify-start gap-[8px]'>
              <div className='flex flex-wrap items-center gap-[8px] max-[745px]:flex-col max-[745px]:items-start max-[745px]:gap-[4px]'>
                <p className='text-[15px] leading-[1.5] text-[var(--n-800)]'>
                  (주)에스지뷰교육연구소 대표이사 XXX
                </p>
                <div className='w-[1px] h-[12px] bg-[var(--n-300)] max-[745px]:hidden' />
                <p className='text-[15px] max-[745px]:text-[14px] leading-[1.5] text-[var(--n-800)]'>
                  사업자등록번호 111-11-11111
                </p>
                <div className='w-[1px] h-[12px] bg-[var(--n-300)] max-[745px]:hidden' />
                <p className='text-[15px] max-[745px]:text-[14px] leading-[1.5] text-[var(--n-800)]'>
                  통신판매업 신고번호 1111-1111-1111
                </p>
              </div>

              <div className='flex flex-wrap items-center gap-[8px] max-[745px]:flex-col max-[745px]:items-start max-[745px]:gap-[4px]'>
                <p className='text-[15px] max-[745px]:text-[14px] leading-[1.5] text-[var(--n-800)]'>
                  충남 천안시 서북구 검은들3길 58
                </p>
                <div className='w-[1px] h-[12px] bg-[var(--n-300)] max-[745px]:hidden' />
                <p className='text-[15px] max-[745px]:text-[14px] leading-[1.5] text-[var(--n-800)]'>
                  대표번호 XXXX-XXXX
                </p>
              </div>

              <p className='text-[14px] max-[745px]:text-[13px] leading-[1.5] text-[var(--n-800)] opacity-80'>
                © SGView Corp. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* 우측: 블로그 아이콘 */}
        <div className='flex items-center justify-start gap-[8px] max-[745px]:order-last max-[745px]:pt-[8px]'>
          <Link href='/' className='inline-block'>
            <Image
              src='/images/link_blog.png'
              alt='link_blog'
              width={48}
              height={48}
              className='rounded-full'
            />
          </Link>
          <Link href='/'>
            <Image
              src='/images/link-youtube.svg'
              alt='link_youtube'
              width={48}
              height={48}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/images/link-insta.svg'
              alt='link_insta'
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
