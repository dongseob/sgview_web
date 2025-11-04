'use client';

import Image from 'next/image';

const SignupComplete = () => {
  return (
    <div className='pt-[40px] pb-[120px]'>
      <div className='w-[328px] mx-auto py-[32px] flex flex-col items-center justify-center gap-[32px]'>
        <div className='flex flex-col items-center justify-center gap-[20px]'>
          <Image
            src='/images/ic-system-option-on.svg'
            alt='radio_on'
            width={40}
            height={40}
          />
          <div className='flex flex-col items-center justify-center gap-[12px]'>
            <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
              가입 완료
            </h3>
            <p className='text-[16px] font-[400] leading-[1.5] text-[var(--n-600)] text-center'>
              필요한 정보를 입력하고 <br />
              생기부 분석을 받아보세요.
            </p>
          </div>
        </div>
        <button className='bg-[var(--r-400)] rounded-[8px] h-[50px] w-full text-[var(--n-0)] cursor-pointer text-[15px] font-[500] leading-[1.5]'>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default SignupComplete;
