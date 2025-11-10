import Image from 'next/image';

const Privacy = () => {
  return (
    <div className='mt-[40px] mb-[120px] max-[745px]:mt-0 max-[745px]:mb-0'>
      <div className='px-[20px] py-[32px] flex flex-col gap-[32px] max-w-[916px] mx-auto'>
        <h1 className='text-[26px] font-[700] leading-[1.3] text-[#37383B] text-center'>이용약관</h1>
        <div className='block max-[745px]:hidden mx-auto'><Image src={'/images/privacy.png'} width={916} height={100} alt='privacy'></Image></div>
        <div className='hidden max-[745px]:block mx-auto'><Image src={'/images/privacy-mo.png'} width={335} height={100} alt='privacy'></Image></div>
        
      </div>
    </div>
  );
};

export default Privacy;
