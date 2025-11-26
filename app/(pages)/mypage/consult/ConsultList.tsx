'use client';
import {
  ConsultItem,
  ConsultStatus,
  getConsultList,
  getConsultProcessingStatus,
} from '@/app/api/consult';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ConsultListItem from './ConsultListItem';

const ConsultList = () => {
  const [consultList, setConsultList2] = useState<ConsultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchConsultList = async () => {
      try {
        setIsLoading(true);
        const res = await getConsultList();
        console.log(res);
        setConsultList2(res.data);
      } catch (error) {
        console.error('컨설팅 목록 조회 실패:', error);
        setConsultList2([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchConsultList();
  }, []);

  useEffect(() => {
    if (consultList.length === 0) return;

    const fetchDoclingCallback = async () => {
      // consultList 배열만큼 순회하며 각 항목의 id를 recordId로 사용
      for (const item of consultList) {
        try {
          const res = await getConsultProcessingStatus(item.id);
          console.log(res);
        } catch (error) {
          console.error(`콜백 호출 실패 (recordId: ${item.id}):`, error);
        }
      }
    };
    fetchDoclingCallback();
  }, [consultList]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(consultList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = consultList.slice(startIndex, endIndex);

  // consultList가 변경되면 첫 페이지로 리셋
  useEffect(() => {
    if (consultList.length > 0) {
      setCurrentPage(1);
    }
  }, [consultList.length]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-[400px]'>
        <div className='flex flex-col items-center justify-center gap-[16px]'>
          <Image
            src='/icon/loader.png'
            width={72}
            height={72}
            alt='loader'
          ></Image>
          <p className='text-[24px] leading-[1.3] text-[var(--n-800)] font-[700]'>
            로딩 중입니다
          </p>
          <span className='text-[16px] leading-[1.5] font-[400] spacing-[-0.24px] text-[var(--n-600)]'>
            잠시만 기다려주세요
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {consultList.length > 0 ? (
        <div className='pt-[40px] pb-[120px] max-w-[1440px]'>
          <div className='w-full  mx-auto  flex items-start justify-start gap-[24px] px-[144px] max-[745px]:px-[20px] max-[745px]:flex-col'>
            <div className='flex flex-col items-start justify-start gap-[12px] min-w-[270px] max-[745px]:items-center max-[745px]:justify-center max-[745px]:w-full'>
              <h3 className='text-[28px] font-[700] leading-[1.3] text-[var(--n-800)]'>
                나의 컨설팅
              </h3>
              <button
                onClick={() => router.push('/consult/apply')}
                className='border border-[var(--n-200)] rounded-[100px] px-[20px] h-[42px] text-[14px] font-[500] text-[var(--n-800)]'
              >
                + 새 컨설팅
              </button>
            </div>
            <div className='flex flex-col gap-[24px] w-full'>
              <div className='gap-[24px] grid grid-cols-2 max-[745px]:grid-cols-1 w-full'>
                {currentItems &&
                  currentItems.map((item) => {
                    // API 상태값을 컴포넌트에서 사용하는 상태값으로 매핑
                    const getStatusValue = (status: string) => {
                      switch (status.toUpperCase()) {
                        case 'UPLOADED':
                          return 'uploaded';

                        case 'PARSING':
                          return 'in-progress';
                        case 'PARSED':
                          return 'in-progress';
                        case 'ANALYZING':
                          return 'in-progress';
                        case 'READY_FOR_REVIEW':
                          return 'complete';
                        case 'UNDER_REVIEW':
                          return 'in-progress';
                        case 'COMPLETED':
                          return 'complete';
                        case 'FAILED':
                          return 'cancelled';
                        case 'PROCESSING':
                          return 'in-progress';
                        default:
                          return status.toLowerCase();
                      }
                    };

                    return (
                      <ConsultListItem
                        key={item.id + item.student_name}
                        date={item.created_at.split('T')[0]}
                        name={item.student_name}
                        consultant={
                          item.assigned_consultant?.full_name ?? '미배정'
                        }
                        consulting={
                          getStatusValue(item.status) as ConsultStatus
                        }
                        id={item.id}
                      />
                    );
                  })}
              </div>

              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className='flex items-center justify-center gap-[12px] mt-[24px]'>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className='w-[24px] h-[24px] flex items-center justify-center text-[16px] font-[400] text-[var(--n-400)] disabled:opacity-50 disabled:cursor-not-allowed hover:text-[var(--n-600)]'
                  >
                    <Image
                      src='/icon/icon-left-arrow-16-3.svg'
                      alt='arrow-right'
                      width={20}
                      height={20}
                    />
                  </button>

                  <div className='flex items-center gap-[8px]'>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`min-w-[28px] h-[28px] rounded-[8px] text-[14px] font-[400] flex items-center justify-center ${
                            currentPage === page
                              ? 'bg-[var(--n-200)] text-[var(--n-800)]'
                              : 'text-[var(--n-600)] hover:text-[var(--n-800)]'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className='w-[24px] h-[24px] flex items-center justify-center text-[16px] font-[400] text-[var(--n-600)] disabled:opacity-50 disabled:cursor-not-allowed hover:text-[var(--n-800)]'
                  >
                    <Image
                      src='/icon/icon-24-3.svg'
                      alt='arrow-right'
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center mx-auto gap-[32px] '>
          <div className='flex flex-col items-center justify-center mx-auto gap-[12px]'>
            <p className='text-[26px] leading-[1.3] font-[700] text-[var(--n-800)] text-center'>
              등록된 생기부가
              <br />
              없습니다
            </p>
            <p className='text-[16px] leading-[1.5] font-[400] text-[var(--n-600)] text-center'>
              필요한 정보를 입력하고
              <br />
              생기부 분석을 받아보세요.
            </p>
          </div>
          <button
            onClick={() => router.push('/consult/apply')}
            className='h-[52px] w-[328px] rounded-[8px] bg-[var(--r-400)] text-[var(--n-0)] text-[15px] font-[500] leading-[1.5]'
          >
            시작하기
          </button>
        </div>
      )}
    </>
  );
};

export default ConsultList;
