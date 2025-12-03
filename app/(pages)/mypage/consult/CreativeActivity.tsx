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
  // 원본이 없을 수도 있으니 방어 코드
  const experiences = creativeExperiences || [];

  // 1) 먼저 학년 기준으로 정렬 (1학년, 2학년, 3학년 순)
  const gradeSorted = [...experiences].sort((a, b) => {
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    return gradeA - gradeB;
  });

  // 2) 영역별로 그룹핑 + 영역 등장 순서 유지
  const domainOrder: string[] = [];
  const groupedByDomain: Record<string, CreativeExperience[]> = {};

  gradeSorted.forEach((exp) => {
    const domainKey = exp.domain || '기타';
    if (!groupedByDomain[domainKey]) {
      groupedByDomain[domainKey] = [];
      domainOrder.push(domainKey); // 처음 등장한 순서 저장
    }
    groupedByDomain[domainKey].push(exp);
  });

  // 3) 각 영역 그룹 안에서는 다시 학년 순으로 정렬 (혹시 몰라서 한 번 더)
  domainOrder.forEach((domain) => {
    groupedByDomain[domain].sort((a, b) => {
      const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
      const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
      return gradeA - gradeB;
    });
  });

  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
        창의적 체험활동
      </h2>

      <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
        <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
        <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
          <colgroup><col width="120px" /><col width="64px" /><col width="64px" /><col width="606px" /></colgroup>
          <thead>
            <tr className='bg-[var(--n-50)]'>
              <th className='border border-[var(--n-200)] border-l-0 border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[150px]'>
                영역
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left w-[100px]'>
                학년
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
            {experiences.length > 0 ? (
              domainOrder.map((domain) => {
                const rows = groupedByDomain[domain];
                const rowSpan = rows.length;

                return rows.map((row, index) => (
                  <tr key={`${row.id}-${index}`}>
                    {/* 같은 영역의 학년들은 영역 컬럼을 rowspan처럼 합치기 */}
                    {index === 0 && (
                      <td
                        rowSpan={rowSpan}
                        className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center align-top'
                      >
                        {domain}
                      </td>
                    )}
                    <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left align-top'>
                      {row.grade}
                    </td>
                    <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center align-top'>
                      {row.activityName || '-'}
                    </td>
                    <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] leading-[1.6] text-[var(--n-600)] text-left'>
                      {row.description}
                    </td>
                  </tr>
                ));
              })
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
