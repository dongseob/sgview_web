'use client';
import {
  ConsultItem,
  ConsultStatus,
  getConsultList,
  getConsultProcessingStatus,
} from '@/app/api/consult';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ConsultListItem from './ConsultListItem';

const ConsultList = () => {
  const [consultList, setConsultList2] = useState<ConsultItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchConsultList = async () => {
      const res = await getConsultList();
      console.log(res);
      setConsultList2(res.data);
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
            <div className='flex flex-wrap items-start justify-start gap-[24px]'>
              {consultList &&
                consultList.map((item) => {
                  // API 상태값을 컴포넌트에서 사용하는 상태값으로 매핑
                  const getStatusValue = (status: string) => {
                    switch (status.toUpperCase()) {
                      case 'COMPLETED':
                        return 'complete';
                      case 'PROCESSING':
                        return 'in-progress';
                      case 'UPLOADED':
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
                      consulting={getStatusValue(item.status) as ConsultStatus}
                      id={item.id}
                    />
                  );
                })}
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
