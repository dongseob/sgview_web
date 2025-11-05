'use client';

import Image from 'next/image';
import { useState } from 'react';
import ConsultListItem from './ConsultListItem';

const ConsultList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // 페이지당 아이템 수

  const consultList = [
    {
      id: 1,
      date: '2025.10.31',
      name: '이*희(고3)',
      consultant: '미배정',
      consulting: 'cancel',
    },

    {
      id: 2,
      date: '2025.10.31',
      name: '김*지(고3)',
      consultant: '미배정',
      consulting: 'in-progress',
    },

    {
      id: 3,
      date: '2025.10.31',
      name: '이*희(고2)',
      consultant: '김하늘',
      consulting: 'complete',
    },

    {
      id: 4,
      date: '2025.10.31',
      name: '최*준(고3)',
      consultant: '미배정',
      consulting: 'submitted',
    },

    {
      id: 5,
      date: '2025.10.31',
      name: '이*희(고1)',
      consultant: '김하늘',
      consulting: 'submitted',
    },
    {
      id: 6,
      date: '2025.10.30',
      name: '박*민(고3)',
      consultant: '이서연',
      consulting: 'complete',
    },
    {
      id: 7,
      date: '2025.10.29',
      name: '최*수(고2)',
      consultant: '미배정',
      consulting: 'in-progress',
    },
    {
      id: 8,
      date: '2025.10.28',
      name: '정*아(고3)',
      consultant: '김하늘',
      consulting: 'submitted',
    },
  ];

  // 페이지네이션 계산
  const totalPages = Math.ceil(consultList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = consultList.slice(startIndex, endIndex);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='pt-[40px] pb-[120px] max-w-[1440px] max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px] max-md:min-w-[375px]'>
      <div className='w-full mx-auto flex flex-col items-center justify-start gap-[32px] px-[144px] max-md:px-[20px] max-md:flex-col'>
        <div className='items-center justify-center gap-[12px] max-md:items-center max-md:justify-center'>
          <h3 className='text-[28px] font-[700] leading-[1.3] text-[var(--n-800)] text-center'>
            나의 컨설팅
          </h3>
        </div>
        <div className='flex flex-wrap items-start justify-start gap-[24px]'>
          {currentItems.map((item) => {
            return (
              <ConsultListItem
                key={item.id + item.name}
                date={item.date}
                name={item.name}
                consultant={item.consultant}
                consulting={item.consulting}
              />
            );
          })}
        </div>

        {/* 페이지네이션 */}
        <div className='flex items-center justify-center gap-[4px]'>
          {/* 이전 페이지 */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-[24px] h-[24px] flex items-center justify-center rounded-[8px] ${
              currentPage === 1
                ? ' cursor-not-allowed'
                : 'cursor-pointer hover:bg-[var(--n-50)]'
            }`}
          >
            {currentPage === 1 ? (
              <Image
                src='/Images/icon-left-gray.svg'
                alt='prev'
                width={24}
                height={24}
              />
            ) : (
              <Image
                src='/Images/icon_right_red.svg'
                alt='prev'
                width={24}
                height={24}
                className='rotate-180'
              />
            )}
          </button>

          {/* 페이지 번호들 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-[24px] h-[24px] flex items-center justify-center rounded-[8px] text-[15px] font-[500] transition-colors ${
                currentPage === page
                  ? 'bg-[var(--r-400)] text-white'
                  : 'text-[var(--n-600)] hover:bg-[var(--n-50)]'
              }`}
            >
              {page}
            </button>
          ))}

          {/* 다음 페이지 */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-[24px] h-[24px] flex items-center justify-center rounded-[8px] ${
              currentPage === totalPages
                ? ' cursor-not-allowed'
                : 'cursor-pointer hover:bg-[var(--n-50)]'
            }`}
          >
            {currentPage === totalPages ? (
              <Image
                src='/Images/icon-left-gray.svg'
                alt='next'
                width={24}
                height={24}
                className='rotate-180'
              />
            ) : (
              <Image
                src='/Images/icon_right_red.svg'
                alt='next'
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultList;
