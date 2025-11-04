import Image from 'next/image';

const Analyzing = () => {
  return (
    <div className='pt-[40px] pb-[120px]'>
      <div className='w-[328px] mx-auto py-[32px] flex flex-col items-center justify-center gap-[32px]'>
        <div className='flex flex-col items-center justify-center gap-[12px]'>
          <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)] text-center'>
            생활기록부 AI 분석을 <br />
            진행중입니다...
          </h3>
          <p className='text-[16px] font-[400] leading-[1.5] text-[var(--n-600)] text-center leading-[-0.24px]'>
            1분 정도 소요될 수 있어요.
            <br />
            잠시만 기다려주세요
          </p>
        </div>
        <Image
          src='/images/img-loading@3x.png'
          alt='loading'
          width={244}
          height={184}
        />
      </div>
    </div>
  );
};

export default Analyzing;
