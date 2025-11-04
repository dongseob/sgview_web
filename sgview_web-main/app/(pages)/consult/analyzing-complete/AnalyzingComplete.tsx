import Image from 'next/image';

const AnalyzingComplete = () => {
  return (
    <div className='pt-[40px] pb-[120px] max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px]'>
      <div className='w-[328px] mx-auto py-[32px] flex flex-col items-center justify-center gap-[32px] max-md:py-[0]'>
        <div className='flex flex-col items-center justify-center gap-[20px]'>
          <Image
            src='/images/ic-system-option-on.svg'
            alt='radio_on'
            width={40}
            height={40}
          />
          <div className='flex flex-col items-center justify-center gap-[12px]'>
            <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
              생기부 AI 분석 완료
            </h3>
            <p className='text-[16px] font-[400] leading-[1.5] text-[var(--n-600)] text-center'>
              AI 분석 리포트를 확인해보세요
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

export default AnalyzingComplete;
