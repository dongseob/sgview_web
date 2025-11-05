'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const HeaderMo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: 실제 로그인 상태로 변경
  const [userName, setUserName] = useState('이광호'); // TODO: 실제 사용자 이름으로 변경

  const pathname = usePathname();
  const router = useRouter();

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    if (isMenuOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // 스크롤 잠금 해제
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // cleanup 함수: 컴포넌트 언마운트 시 스크롤 잠금 해제
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isMenuOpen]);

  // 스무스 스크롤 이동 함수
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    const headerOffset = 72; // 헤더 높이(px)
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // 홈이 아니면 홈으로만 이동, 홈이면 스크롤
  const goHomeOrScroll = (id: string) => {
    if (pathname !== '/') {
      router.push('/'); // 그냥 홈으로만 이동
      setTimeout(() => {
        handleScrollTo(id);
      }, 1000);
      return;
    }
    handleScrollTo(id); // 이미 홈이면 해당 섹션으로 스크롤
  };

  return (
    <>
      <div className='w-full border-b border-[var(--n-100)] fixed top-0 bg-white/80 z-10 max-md:flex hidden min-w-[375px] px-[20px] h-[56px] items-center justify-between'>
        <Image src='/images/logo.png' alt='logo' width={89} height={24} onClick={() => router.push('/')} className='cursor-pointer' />
        <Image
          src='/images/icon-menu-24.svg'
          alt='menu'
          width={24}
          height={24}
          className='cursor-pointer'
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* 사이드바 메뉴 */}
      {isMenuOpen && (
        <>
          {/* 배경 오버레이 */}
          <div
            className='fixed inset-0 bg-black/50 z-40 min-w-[375px] hidden max-md:block'
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 사이드바 */}
          <div className='fixed top-0 right-0 w-full h-full bg-white z-50 shadow-lg min-w-[375px] hidden max-md:block'>
            <div className='flex flex-col h-full border-b border-[transparent]'>
              {/* 헤더 */}
              <div className='flex items-center justify-between px-[20px] h-[56px] '>
                <Image
                  src='/images/logo.png'
                  alt='logo'
                  width={89}
                  height={24}
                />
                <Image
                  src='/Images/icon-close-24.svg'
                  alt='close'
                  width={24}
                  height={24}
                  className='cursor-pointer'
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              {/* 컨텐츠 */}
              <div className='flex flex-col p-[20px] py-[24px] gap-[32px]'>
                {/* CTA 섹션 */}
                <div className='flex flex-col gap-[24px]'>
                  {isLoggedIn ? (
                    <>
                      <p className='text-[24px] font-[700] leading-[36px] text-[var(--n-800)]'>
                        안녕하세요
                        <br />
                        {userName}님
                      </p>
                      <div className='flex flex-col items-start justify-start gap-[8px] w-full'>
                        <Link
                          href='/consult/apply'
                          className='bg-[var(--n-800)] text-white rounded-[8px] h-[52px] flex items-center justify-center text-[15px] font-[600] w-full'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          AI 생기부 분석하기
                        </Link>
                        <Link
                          href='/mypage'
                          className='text-[15px] font-[500] h-[52px] text-[var(--n-600)] text-center w-full border border-[var(--n-200)] rounded-[8px] flex items-center justify-center'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          마이페이지
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className='text-[24px] font-[700] leading-[36px] text-[var(--n-800)]'>
                        생기부 가입하고
                        <br />
                        AI 분석을 받아보세요
                      </p>
                      <div className='flex flex-col items-start justify-start gap-[8px] w-full'>
                        <Link
                          href='/signup'
                          className='bg-[var(--r-400)] text-white rounded-[8px] h-[52px] flex items-center justify-center text-[15px] font-[600] w-full'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          회원 가입하기
                        </Link>
                        <Link
                          href='/signin'
                          className='text-[15px] font-[500] h-[52px] text-[var(--n-600)] text-center w-full border border-[var(--n-200)] rounded-[8px] flex items-center justify-center'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          로그인
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                {/* 구분선 */}
                <div className='w-full h-[1px] bg-[var(--n-200)]' />

                {/* 메뉴 */}
                <div className='flex flex-col gap-[32px]'>
                  <button
                    className='text-[18px] font-[600] text-[var(--n-800)] text-left hover:text-[#F6432B]'
                    onClick={() => {setIsMenuOpen(false); goHomeOrScroll('#section1')}}
                  >
                    서비스 소개
                  </button>
                  <button
                    className='text-[18px] font-[600] text-[var(--n-800)] text-left hover:text-[#F6432B]'
                    onClick={() => {setIsMenuOpen(false); goHomeOrScroll('#section1')}}
                  >
                    이용방법
                  </button>
                  <Link
                    href='/consult/apply'
                    className='text-[18px] font-[600] text-[var(--n-800)] hover:text-[#F6432B]'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    입시컨설팅 신청
                  </Link>
                </div>

                {/* 로그아웃 (로그인 시에만 표시) */}
                {isLoggedIn && (
                  <>
                    {/* 구분선 */}
                    <div className='w-full h-[1px] bg-[var(--n-200)]' />

                    <button
                      className='text-[18px] font-[600] text-[var(--n-800)] text-left'
                      onClick={() => {
                        // TODO: 로그아웃 처리
                        setIsLoggedIn(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      로그아웃
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderMo;
