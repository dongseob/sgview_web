'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

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
      return;
    }
    handleScrollTo(id); // 이미 홈이면 해당 섹션으로 스크롤
  };

  return (
    <>
      <div className='max-md:hidden w-full border-b border-[var(--n-200)] fixed top-0 bg-white/80 z-10 '>
        <div className='px-[144px] py-[16px] flex items-center justify-between max-w-[1440px] mx-auto'>
          <div className='flex items-center justify-start gap-[69px]'>
            <Image src='/images/logo.png' alt='logo' width={127} height={34} />
            <div>
              <ul className='flex items-center justify-start gap-[24px]'>
                <li className='px-[16px] py-[8px]'>
                  {/* 서비스 소개 → section1 */}
                  <button
                    type='button'
                    onClick={() => goHomeOrScroll('#section1')}
                    className='text-[16px] leading-[16px] text-[var(--n-900)] cursor-pointer bg-transparent border-0'
                  >
                    서비스 소개
                  </button>
                </li>
                <li className='px-[16px] py-[8px]'>
                  {/* 이용방법도 동일하게 section1 */}
                  <button
                    type='button'
                    onClick={() => goHomeOrScroll('#section1')}
                    className='text-[16px] leading-[16px] text-[var(--n-900)] cursor-pointer bg-transparent border-0'
                  >
                    이용방법
                  </button>
                </li>
                <li className='px-[16px] py-[8px]'>
                  <a
                    href='/consult-apply'
                    className='text-[16px] leading-[16px] text-[var(--n-900)]'
                  >
                    입시컨설팅 신청
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 로그인 / 회원가입 버튼 */}
          <div className='flex items-center justify-start gap-[8px]'>
            <button
              onClick={() => {
                router.push('/signin');
              }}
              className='px-[16px] py-[11.5px] text-[14px] leading-[14px] text-[var(--n-800)] border border-[var(--n-200)] rounded-[100px] font-[500]'
            >
              로그인
            </button>
            <button
              onClick={() => {
                router.push('/signup');
              }}
              className='px-[16px] py-[11.5px] bg-[var(--n-800)] text-[14px] leading-[14px] text-[var(--n-0)] rounded-[100px] font-[500]'
            >
              회원가입
            </button>
          </div>
        </div>
      </div>

      {/* 하단 픽스드 배너 — / 경로일 때만 표시 */}
      {pathname === '/' && (
        <div className='fixed bottom-0 z-10 w-full bg-[#F3615B] h-[88px] flex items-center justify-center'>
          <div className='flex items-center'>
            <Image
              className='mb-[48px]'
              src={'/images/footerBannerIcon.png'}
              width={147}
              height={127}
              alt='footerBannerIcon'
            />
            <p className='text-white text-[22px] font-[500] leading-[30px] ml-[8px]'>
              입시경쟁력의 첫걸음!{' '}
              <span className='font-[800]'>생기뷰 분석으로</span>
            </p>
            <div
              onClick={() => {
                // 로그인 분기 로직 필요 - 로그인=>/consult-apply, 비로그인=>/signin
              }}
              className='ml-[40px] px-[36px] py-[18px] flex text-[20px] font-[700] text-white leading-[28px] bg-[#D84742] rounded-full cursor-pointer'
            >
              무료 진단하기
              <Image
                className='ml-[4px]'
                src={'/images/arrow-right-white.png'}
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

export default Header;
