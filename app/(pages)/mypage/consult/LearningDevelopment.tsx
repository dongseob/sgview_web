import Image from 'next/image';
import { useState } from 'react';

interface DetailedCharacteristic {
  curriculum: string;
  description: string;
  grade: string;
  id: string;
  semester: string | null;
  subject: string;
}

// 학년별 테이블 컴포넌트
const LearningDevelopment = ({
  grade,
  detailedCharacteristics,
}: {
  grade: string;
  detailedCharacteristics: DetailedCharacteristic[];
}) => {
  const [isOpen, setIsOpen] = useState(true);

  // 학년에 맞는 데이터 필터링
  const filteredCharacteristics = detailedCharacteristics?.filter(
    (item) => item.grade === grade
  );

  // 과목명 포맷팅 함수
  const formatSubjectName = (item: DetailedCharacteristic) => {
    if (item.semester) {
      return `(${item.semester})${item.subject}`;
    }
    return item.subject;
  };

  return (
    <div className='mb-[32px] '>
      {grade !== '1학년' && (
        <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px] '></div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between mb-[24px] rounded-t-[8px] max-[745px]:px-[20px]'
      >
        <span className='text-[20px] font-[600] text-[var(--n-800)]'>
          {grade}
        </span>
        <Image
          src='/icon/icon-arrow-24-2.svg'
          alt='arrow'
          width={24}
          height={24}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className='overflow-x-auto border-t border-[var(--n-800)] rounded-b-[8px] max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border-b border-[var(--n-200)] px-[16px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left w-[130px]'>
                  과목
                </th>
                <th className='border-b border-[var(--n-200)] border-l px-[16px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  세부능력 및 특기사항
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCharacteristics?.length > 0 ? (
                filteredCharacteristics.map((item, index) => (
                  <tr key={`${item.id}-${index}`}>
                    <td
                      className={`border border-l-0 border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] align-top`}
                    >
                      {formatSubjectName(item)}
                    </td>
                    <td
                      className={`
                        border border-r-0 border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] leading-[1.6] text-[var(--n-600)]`}
                    >
                      {item.description}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className='border border-l-0 border-r-0 border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-500)] text-center'
                  >
                    해당 사항 없음
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LearningDevelopment;
