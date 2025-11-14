'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { postLogout, removeTokens } from '../api/member';

const HeaderUnified = () => {
  const pathname = usePathname();
  const router = useRouter();

  // 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 사이드메뉴
  const [scrolledPc, setScrolledPc] = useState(false); // 데스크톱: 76px 기준
  const [scrolledMo, setScrolledMo] = useState(false); // 모바일: 56px 기준
  const [isLoggedIn, setIsLoggedIn] = useState(false); // SSR 안전: 항상 false로 시작

  const userName = '이광호';

  // 클라이언트 마운트 후 localStorage 체크 및 pathname 변경 시 체크 (Hydration 에러 방지)
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('accessToken');
      const newLoggedIn = !!token;
      // 값이 변경된 경우에만 업데이트
      setIsLoggedIn((prev) => (prev !== newLoggedIn ? newLoggedIn : prev));
    };

    // 초기 체크 및 pathname 변경 시 체크
    checkLoginStatus();

    // storage 이벤트 리스너 (다른 탭에서 로그인/로그아웃 시)
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [pathname]);

  // ✅ 스크롤 감지하여 헤더 배경/블러 토글 (PC 76px / MO 56px)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolledPc(y > 76);
      setScrolledMo(y > 56);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // 초기 위치 반영
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ 모바일 메뉴 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      return () => {
        const top = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        if (top) window.scrollTo(0, parseInt(top) * -1);
      };
    } else {
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (top) window.scrollTo(0, parseInt(top) * -1);
    }
  }, [isMenuOpen]);

  const handleFreeDiagnosis = () => {
    if (isLoggedIn) router.push('/consult-apply');
    else router.push('/signin');
  };

  // 스무스 스크롤 이동
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    const headerOffset = 72;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  // 홈이 아니면 홈으로 이동 후 스크롤, 홈이면 바로 스크롤
  const goHomeOrScroll = (id: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => handleScrollTo(id), 1000);
      return;
    }
    handleScrollTo(id);
  };

  // 로그인 체크 후 페이지 이동
  const handleNavigateWithAuth = (path: string) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인 후 이용해주세요.');
      router.push('/signin');
      return;
    }
    router.push(path);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('accessToken') || '';
    // 토큰 제거 (만료 시간 정보 포함)
    removeTokens();
    setIsLoggedIn(false);
    try {
      await postLogout(token);
    } catch (error) {
      // 로그아웃 API 실패해도 로컬 상태는 이미 업데이트됨
      console.error('Logout error:', error);
    }
    router.push('/');
  };

  return (
    <>
      {/* ====== 데스크톱 고정 헤더 ====== */}
      <div
        className={[
          'w-full fixed top-0 z-10 transition-all duration-300',
          'max-[745px]:hidden',
          scrolledPc
            ? 'bg-[rgba(255,255,255,0.9)] backdrop-blur-[5px]'
            : 'bg-white/0',
        ].join(' ')}
      >
        <div className='max-w-[1440px] mx-auto px-[144px] py-[16px] flex items-center justify-between w-full'>
          <div className='flex items-center justify-start gap-[69px]'>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={127}
              height={34}
              className='cursor-pointer'
              onClick={() => router.push('/')}
            />
            <div>
              <ul className='flex items-center justify-start gap-[24px] font-[500] text-[#1A1B1E]'>
                <li className='px-[16px] py-[10px]'>
                  <button
                    type='button'
                    onClick={() => {
                      setIsMenuOpen(false);
                      goHomeOrScroll('#section3');
                    }}
                    className='text-[16px] leading-[16px] cursor-pointer bg-transparent border-0 hover:text-[#F6432B]'
                  >
                    서비스 소개
                  </button>
                </li>
                <li className='px-[16px] py-[10px]'>
                  <button
                    type='button'
                    onClick={() => {
                      setIsMenuOpen(false);
                      goHomeOrScroll('#section3');
                    }}
                    className='text-[16px] leading-[16px] cursor-pointer bg-transparent border-0 hover:text-[#F6432B]'
                  >
                    이용방법
                  </button>
                </li>
                <li className='px-[16px] py-[10px]'>
                  <button
                    type='button'
                    onClick={() => handleNavigateWithAuth('/consult/apply')}
                    className='text-[16px] leading-[16px] cursor-pointer bg-transparent border-0 hover:text-[#F6432B]'
                  >
                    입시컨설팅 신청
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {!isLoggedIn ? (
            <div className='flex items-center justify-start gap-[8px]'>
              <button
                onClick={() => router.push('/signin')}
                className='px-[16px] py-[11.5px] text-[14px] leading-[14px] text-[var(--n-800)] border border-[var(--n-200)] rounded-[100px] font-[500]'
              >
                로그인
              </button>
              <button
                onClick={() => router.push('/signup')}
                className='px-[16px] py-[11.5px] bg-[var(--n-800)] text-[14px] leading-[14px] text-[var(--n-0)] rounded-[100px] font-[500]'
              >
                회원가입
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-start gap-[8px]'>
              <button
                onClick={() => handleNavigateWithAuth('/mypage/consult')}
                className='px-[16px] py-[11.5px] text-[14px] leading-[14px] text-[var(--n-800)] border border-[var(--n-200)] rounded-[100px] font-[500]'
              >
                마이페이지
              </button>
              <button
                onClick={handleLogout}
                className='px-[16px] py-[11.5px] text-[14px] leading-[14px] text-[var(--n-800)] border border-[var(--n-200)] rounded-[100px] font-[500]'
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ====== 모바일 상단 바 (햄버거) ====== */}
      <div
        className={[
          'hidden max-[745px]:flex',
          'w-full fixed top-0 z-10 min-w-[375px] h-[56px] items-center justify-between px-[20px]',
          // 모바일: 처음엔 완전 투명, 56px 넘으면 데스크톱과 동일 효과
          scrolledMo
            ? 'bg-[rgba(255,255,255,0.9)] backdrop-blur-[5px]'
            : 'bg-white/0',
          'transition-all duration-300',
        ].join(' ')}
      >
        <Image
          src='/images/logo.png'
          alt='logo'
          width={89}
          height={24}
          onClick={() => router.push('/')}
          className='cursor-pointer'
        />
        <Image
          src='/images/icon-menu-24.svg'
          alt='menu'
          width={24}
          height={24}
          className='cursor-pointer'
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* ====== 모바일 사이드 메뉴 ====== */}
      {isMenuOpen && (
        <>
          <div
            className='fixed inset-0 bg-black/50 z-40 min-w-[375px] hidden max-[745px]:block'
            onClick={() => setIsMenuOpen(false)}
          />
          <div className='fixed top-0 right-0 w-full h-full bg-white z-50 shadow-lg min-w-[375px] hidden max-[745px]:block'>
            <div className='flex flex-col h-full'>
              <div className='flex items-center justify-between px-[20px] h-[56px] border-b border-[transparent]'>
                <Image
                  src='/images/logo.png'
                  alt='logo'
                  width={89}
                  height={24}
                />
                <Image
                  src='/images/icon-close-24.svg'
                  alt='close'
                  width={24}
                  height={24}
                  className='cursor-pointer'
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              <div className='flex flex-col p-[20px] py-[24px] gap-[32px] overflow-y-auto'>
                <div className='flex flex-col gap-[24px]'>
                  {isLoggedIn ? (
                    <>
                      <p className='text-[24px] font-[700] leading-[36px] text-[var(--n-800)]'>
                        안녕하세요
                        <br />
                        {userName}님
                      </p>
                      <div className='flex flex-col gap-[8px] w-full'>
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleNavigateWithAuth('/consult/apply');
                          }}
                          className='bg-[var(--n-800)] text-white rounded-[8px] h-[52px] flex items-center justify-center text-[15px] font-[600] w-full'
                        >
                          AI 생기부 분석하기
                        </button>
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleNavigateWithAuth('/mypage/consult');
                          }}
                          className='text-[15px] font-[500] h-[52px] text-[var(--n-600)] text-center w-full border border-[var(--n-200)] rounded-[8px] flex items-center justify-center'
                        >
                          마이페이지
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className='text-[24px] font-[700] leading-[36px] text-[var(--n-800)]'>
                        생기부 가입하고
                        <br />
                        AI 분석을 받아보세요
                      </p>
                      <div className='flex flex-col gap-[8px] w-full'>
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

                <div className='w-full h-[1px] bg-[var(--n-200)]' />

                <div className='flex flex-col gap-[32px]'>
                  <button
                    className='text-[18px] font-[600] text-[var(--n-800)] text-left hover:text-[#F6432B]'
                    onClick={() => {
                      setIsMenuOpen(false);
                      goHomeOrScroll('#section1');
                    }}
                  >
                    서비스 소개
                  </button>
                  <button
                    className='text-[18px] font-[600] text-[var(--n-800)] text-left hover:text-[#F6432B]'
                    onClick={() => {
                      setIsMenuOpen(false);
                      goHomeOrScroll('#section1');
                    }}
                  >
                    이용방법
                  </button>
                  <button
                    className='text-[18px] font-[600] text-[var(--n-800)] hover:text-[#F6432B] text-left'
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigateWithAuth('/consult/apply');
                    }}
                  >
                    입시컨설팅 신청
                  </button>
                </div>

                {/* 로그인 상태일 때만 */}
                {isLoggedIn && (
                  <>
                    <div className='w-full h-[1px] bg-[var(--n-200)]' />
                    <button
                      className='text-[18px] font-[600] text-[var(--n-800)] text-left'
                      onClick={() => {
                        handleLogout();
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

      {/* ====== 홈 전용 하단 고정 배너 ====== */}
      {pathname === '/' && (
        <div className='fixed bottom-0 z-20 w-full bg-[#F3615B] py-[13.5px] flex items-center justify-center max-[745px]:hidden'>
          <div className='flex items-center'>
            <p className='text-white text-[22px] font-[500] leading-[30px] ml-[8px]'>
              입시경쟁력의 첫걸음!{' '}
              <span className='font-[800]'>생기뷰 분석으로</span>
            </p>
            <div
              onClick={handleFreeDiagnosis}
              className='ml-[40px] px-[28px] py-[14px] flex text-[20px] font-[700] text-white leading-[28px] bg-[#D84742] rounded-full cursor-pointer'
            >
              무료 진단하기
              <Image
                className='ml-[4px]'
                src='/images/arrow-right-white.png'
                width={20}
                height={20}
                alt='arrow-right-white'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderUnified;
