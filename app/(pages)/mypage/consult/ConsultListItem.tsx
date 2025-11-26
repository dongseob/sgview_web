'use client';
import { ConsultStatus } from '@/app/api/consult';
import ModalNoClose from '@/app/component/Modal/ModalNoClose';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const ConsultListItem = ({
  date,
  name,
  consultant,
  consulting,
  id,
}: {
  date: string;
  name: string;
  consultant: string;
  consulting: ConsultStatus;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const maskName = (name: string) => {
    if (!name) return '';
    if (name.length === 1) return name;
    if (name.length === 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  };
  return (
    <div className='w-full h-[239px] border border-[var(--n-200)] rounded-[12px] p-[20px] flex flex-col items-start justify-start gap-[24px] max-[745px]:w-full '>
      <div className='flex flex-col items-start justify-start w-full gap-[20px]'>
        <div className='flex flex-col items-start justify-start w-full'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[14px] leading-[1.4] font-[400] text-[var(--n-400)]'>
              {date}
            </p>
          </div>
          <h3 className='text-[18px] leading-[1.5] font-[700] text-[var(--n-800)]'>
            {maskName(name)}
          </h3>
        </div>
        <div className='flex flex-col items-start justify-start w-full gap-[12px]'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[16px] leading-[1.4] font-[400] text-[var(--n-500)]'>
              컨설턴트
            </p>
            <p className='text-[16px] leading-[1.4] font-[500] text-[var(--n-800)]'>
              {consultant}
            </p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[16px] leading-[1.4] font-[400] text-[var(--n-500)]'>
              컨설팅
            </p>
            <div className='flex items-center justify-start gap-[4px]'>
              {consulting === 'complete' && (
                <Image
                  src='/icon/ic-check-small.svg'
                  alt='check'
                  width={16}
                  height={16}
                />
              )}
              <p
                className={`text-[16px] leading-[1.4] font-[500] ${
                  consulting === 'cancelled'
                    ? 'text-[var(--n-500)]'
                    : consulting === 'in-progress'
                    ? 'text-[var(--g-400)]'
                    : consulting === 'complete'
                    ? 'text-[var(--r-400)]'
                    : 'text-[var(--n-800)]'
                }`}
              >
                {consulting === 'cancelled'
                  ? '신청취소'
                  : consulting === 'uploaded'
                  ? '신청완료'
                  : consulting === 'in-progress'
                  ? '진단중'
                  : '진단완료'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-start gap-[8px] w-full'>
        {consulting !== 'complete' && (
          <button
            onClick={() => router.push(`/mypage/consult?id=${id}`)}
            className='text-[15px] font-[500] text-[var(--n-800)] h-[52px] w-full rounded-[8px] border border-[var(--n-200)] '
          >
            생활기록부 {consulting === 'complete' ? '' : '확인'}
          </button>
        )}
        {consulting === 'complete' && (
          <button className='text-[15px] font-[500]  bg-[var(--r-400)] text-[var(--n-0)] h-[52px] w-full rounded-[8px]  '>
            진단결과
          </button>
        )}
      </div>
      <ModalNoClose
        title='정말로 삭제하시겠습니까?'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width='288px'
      >
        <div className='flex flex-col items-center justify-center gap-[12px] px-[20px]'>
          <p className='text-[15px] font-[400] leading-[1.5] text-[var(--n-500)] text-center'>
            삭제시 작성된 생활기록부 정보 및 진단 내역이 삭제됩니다.
          </p>
          <div className='flex items-center justify-center gap-[8px] w-full pb-[20px]'>
            <button
              onClick={() => setIsOpen(false)}
              className='text-[15px] font-[500] text-[var(--n-800)] h-[48px] w-full rounded-[8px] border border-[var(--n-200)] w-[120px]'
            >
              아니요
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className='text-[15px] font-[500] bg-[var(--r-400)] text-[var(--n-0)] h-[48px] w-full rounded-[8px] w-[120px]'
            >
              네
            </button>
          </div>
        </div>
      </ModalNoClose>
    </div>
  );
};

export default ConsultListItem;
