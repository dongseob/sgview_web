interface CreativeExperience {
  id: string;
  grade: string;
  description: string;
  activityName: string | null;
  domain: string;
}

const CreativeActivity = ({
  creativeExperiences,
}: {
  creativeExperiences: CreativeExperience[];
}) => {
  // 학년별로 정렬 (1학년이 먼저 오도록)
  const sortedExperiences = [...(creativeExperiences || [])].sort((a, b) => {
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    return gradeA - gradeB;
  });

  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
        창의적 체험활동
      </h2>

      <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
        <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
        <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
          <colgroup>
            <col width='64px' />
            <col width='120px' />
            <col width='64px' />
            <col width='606px' />
          </colgroup>
          <thead>
            <tr className='bg-[var(--n-50)]'>
              <th className='border border-[var(--n-200)] border-l-0 border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left w-[100px]'>
                학년
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[150px]'>
                영역
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'>
                시간
              </th>
              <th className='border border-[var(--n-200)] border-r-0 border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                세부능력 및 특기사항
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedExperiences.length > 0 ? (
              sortedExperiences.map((row, index) => (
                <tr key={`${row.id}-${index}`}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left align-top'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center align-top'>
                    {row.domain}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center align-top'>
                    {row.activityName || '-'}
                  </td>
                  <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] leading-[1.6] text-[var(--n-600)] text-left'>
                    {row.description}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className='border border-l-0 border-r-0 border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-500)] text-center'
                >
                  해당 사항 없음
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreativeActivity;
