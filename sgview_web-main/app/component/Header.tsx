'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // TODO: 실제 로그인 상태로 대체 필요
  const isLoggedIn = false;

  const handleFreeDiagnosis = () => {
    if (isLoggedIn) {
      router.push('/consult-apply');
    } else {
      router.push('/signin');
    }
  };

  return (
    <>
      <div className='max-md:hidden w-full border-b border-[var(--n-200)] fixed top-0 bg-white/80 z-10 '>
        <div className='px-[144px] py-[16px] flex items-center justify-between max-w-[1440px] mx-auto'>
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
              <ul className='flex items-center justify-start gap-[24px]'>
                <li className='px-[16px] py-[8px]'>
                  <button
                    type='button'
                    onClick={() => router.push('/service')}
                    className='text-[16px] leading-[16px] text-[var(--n-900)] cursor-pointer bg-transparent border-0'
                  >
                    서비스 소개
                  </button>
                </li>
                <li className='px-[16px] py-[8px]'>
                  <button
                    type='button'
                    onClick={() => router.push('/guide')}
                    className='text-[16px] leading-[16px] text-[var(--n-900)] cursor-pointer bg-transparent border-0'
                  >
                    이용방법
                  </button>
                </li>
                <li className='px-[16px] py-[8px]'>
                  <button
                    type='button'
                    onClick={() => router.push('/consult/apply')}
                    className='text-[16px] leading-[16px] text-[var(--n-900)] cursor-pointer bg-transparent border-0'
                  >
                    입시컨설팅 신청
                  </button>
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
              onClick={handleFreeDiagnosis}
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
