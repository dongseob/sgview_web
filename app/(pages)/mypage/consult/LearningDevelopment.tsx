interface DetailedCharacteristic {
  description: string;  // 세부능력 및 특기사항
  grade: string;        // 학년
  id: string;
  semester: string | null; // 학기
  subject: string;      // 영역
}

// 학년 구분 없이 전체를 하나의 테이블로 보여주는 컴포넌트
const LearningDevelopment = ({
  detailedCharacteristics,
}: {
  detailedCharacteristics: DetailedCharacteristic[] | undefined;
}) => {
  const hasData = detailedCharacteristics && detailedCharacteristics.length > 0;

  return (
    <div className='mt-[0px] max-[745px]:px-[20px]'>
      <div className='flex flex-col text-[#37383B]'>
        <div className='mt-[0px]'>
          <table className='w-full table-fixed border-collapse'>
            {/* colgroup은 한 줄로 */}
            <colgroup><col className='w-[140px]' /><col className='w-[120px]' /><col className='w-[80px]' /><col /></colgroup>

            <thead>
              <tr className='bg-[#F7F8FC]'>
                <th className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left'>
                  영역
                </th>
                <th className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left'>
                  학년
                </th>
                <th className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left'>
                  학기
                </th>
                <th className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left'>
                  세부능력 및 특기사항
                </th>
              </tr>
            </thead>
            <tbody>
              {hasData ? (
                detailedCharacteristics!.map((item, index) => (
                  <tr key={`${item.id}-${index}`}>
                    <td className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left align-top'>
                      {item.subject || '-'}
                    </td>
                    <td className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left align-top'>
                      {item.grade || '-'}
                    </td>
                    <td className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left align-top'>
                      {item.semester || '-'}
                    </td>
                    <td className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-left align-top leading-[1.6] text-[#4B5563]'>
                      {item.description || '-'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className='border border-[#D1D5DC] px-[8px] py-[12px] text-[14px] text-center text-[#9CA3AF]'
                  >
                    내용이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopment;
