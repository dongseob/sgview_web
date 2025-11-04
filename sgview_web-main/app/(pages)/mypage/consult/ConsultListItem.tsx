import Image from 'next/image';
const ConsultListItem = ({
  date,
  name,
  consultant,
  consulting,
}: {
  date: string;
  name: string;
  consultant: string;
  consulting: string;
}) => {
  return (
    <div className='w-[269.6666564941406px] h-[239px] border border-[var(--n-200)] rounded-[12px] p-[20px] flex flex-col items-start justify-start gap-[24px]'>
      <div className='flex flex-col items-start justify-start w-full gap-[20px]'>
        <div className='flex flex-col items-start justify-start w-full'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[14px] leading-[1.4] font-[400] text-[var(--n-400)]'>
              {date}
            </p>
            <Image
              src='/images/icon-close-24-gray.svg'
              alt='arrow-right'
              width={20}
              height={20}
            />
          </div>
          <h3 className='text-[18px] leading-[1.5] font-[700] text-[var(--n-800)]'>
            {name}
          </h3>
        </div>
        <div className='flex flex-col items-start justify-start w-full gap-[12px]'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[15px] leading-[1.4] font-[400] text-[var(--n-500)]'>
              컨설턴트
            </p>
            <p className='text-[15px] leading-[1.4] font-[500] text-[var(--n-800)]'>
              {consultant}
            </p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[15px] leading-[1.4] font-[400] text-[var(--n-500)]'>
              컨설팅
            </p>
            <div className='flex items-center justify-start gap-[4px]'>
              {consulting === 'complete' && (
                <Image
                  src='/images/ic-check-small.svg'
                  alt='check'
                  width={16}
                  height={16}
                />
              )}
              <p
                className={`text-[15px] leading-[1.4] font-[500] ${
                  consulting === 'unapplied'
                    ? 'text-[var(--n-800)]'
                    : consulting === 'in-progress'
                    ? 'text-[var(--g-400)]'
                    : 'text-[var(--r-400)]'
                }`}
              >
                {consulting === 'unapplied'
                  ? '미신청'
                  : consulting === 'in-progress'
                  ? '진행중'
                  : '진단완료'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-start gap-[12px] w-full'>
        <button className='text-[15px] font-[500] text-[var(--n-800)] h-[52px] w-full rounded-[8px] border border-[var(--n-200)] '>
          생활기록부 {consulting === 'complete' ? '' : '확인'}
        </button>
        {consulting === 'complete' && (
          <button className='text-[15px] font-[500]  bg-[var(--r-400)] text-[var(--n-0)] h-[52px] w-full rounded-[8px]  '>
            리포트
          </button>
        )}
      </div>
    </div>
  );
};

export default ConsultListItem;
