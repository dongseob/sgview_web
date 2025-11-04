'use client';

import ModalNoClose from '@/app/component/Modal/ModalNoClose';
import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-[270px] max-md:w-full h-auto py-[24px] border border-[var(--n-200)] rounded-[12px] p-[20px] flex flex-col items-start justify-start gap-[24px]'>
      <div className='flex flex-col items-start justify-start w-full gap-[20px]'>
        <div className='flex flex-col items-start justify-start w-full'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[16px] leading-[1.4] font-[400] text-[var(--n-400)]'>
              생기부 컨설팅
            </p>
            <div
              className={`w-[61px] h-[29px] flex items-center justify-center text-[13px] font-[500] rounded-[32px] ${
                consulting === 'cancel'
                  ? 'bg-[#FFF4F4] text-[#F3615B]'
                  : consulting === 'complete'
                  ? 'bg-[#CEE9D4] text-[#006E18]'
                  : consulting === 'in-progress'
                  ? 'bg-[#EFF0F5] text-[#8B95A1]'
                  : consulting === 'submitted'
                  ? 'bg-[#F7F8FC] text-[var(--n-800)] border border-[#E4E6EA]'
                  : ''
              }`}
            >
              {consulting === 'cancel'
                ? '신청취소'
                : consulting === 'complete'
                ? '검토완료'
                : consulting === 'in-progress'
                ? '진행중'
                : consulting === 'submitted'
                ? '신청완료'
                : ''}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start w-full gap-[12px]'>
          <h3 className='text-[18px] leading-[1.5] font-[700] text-[var(--n-800)]'>
            {name}
          </h3>
          <div className='flex flex-col items-start justify-start gap-[8px]'>
            <p className='text-[16px] leading-[1.4] font-[400] text-[var(--n-500)]'>
              컨설턴트 미배정
            </p>
            <p className='text-[14px] leading-[20px] font-[400] text-[var(--n-500)]'>
              {date}
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-start gap-[12px] w-full'>
        {consulting !== 'complete' && (
          <button className='text-[15px] font-[500] text-[var(--n-800)] h-[48px] w-full rounded-[8px] border border-[var(--n-200)] '>
            생활기록부 확인
          </button>
        )}
        {consulting === 'complete' && (
          <button className='text-[15px] font-[500]  bg-[var(--r-400)] text-[var(--n-0)] h-[48px] w-full rounded-[8px]  '>
            진단 결과
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
          <div className='flex items-center justify-center gap-[12px] w-full pb-[20px]'>
            <button
              onClick={() => setIsOpen(false)}
              className='text-[15px] font-[500] text-[var(--n-800)] h-[48px] w-full rounded-[8px] border border-[var(--n-200)] w-[120px]'
            >
              취소
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className='text-[15px] font-[500] bg-[var(--r-400)] text-[var(--n-0)] h-[48px] w-full rounded-[8px] w-[120px]'
            >
              삭제
            </button>
          </div>
        </div>
      </ModalNoClose>
    </div>
  );
};

export default ConsultListItem;
