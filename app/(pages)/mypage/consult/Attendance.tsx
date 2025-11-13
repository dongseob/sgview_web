interface Attendance {
  id: string;
  notes: string;
  grade: string;
  absence: DateCount;
  absenceFromClass: DateCount;
  classDays: number;
  earlyLeave: DateCount;
  lateness: DateCount;
}

interface DateCount {
  other: number;
  sick: number;
  unexcused: number;
}

const Attendance = ({
  volunteerActivities,
  attendance,
  certifications,
}: {
  volunteerActivities: {
    id: string;
    date: string;
    grade: string;
    hours: number;
    activity: string;
    organization: string;
    totalHours: number;
  }[];
  attendance: Attendance[];
  certifications: any;
}) => {
  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
        출결/자격증/봉사
      </h2>

      {/* 출결상황 */}
      <div className='mb-[32px]'>
        <h3 className='text-[18px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[16px] max-[745px]:px-[20px]'>
          출결상황
        </h3>
        <div
          className='overflow-x-auto border-t-[var(--n-800)] border-t [&::-webkit-scrollbar]:hidden max-[745px]:px-[20px] max-[745px]:border-t-0'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
            <colgroup>
              <col width='58px' />
              <col width='59px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='62px' />
              <col width='152px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th
                  rowSpan={2}
                  className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
                >
                  학년
                </th>
                <th
                  rowSpan={2}
                  className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
                >
                  수업일수
                </th>
                <th
                  colSpan={3}
                  className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
                >
                  결석일수
                </th>
                <th
                  colSpan={3}
                  className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
                >
                  결석일수
                </th>
                <th
                  colSpan={3}
                  className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
                >
                  결석일수
                </th>
                <th
                  rowSpan={2}
                  className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
                >
                  특기사항
                </th>
              </tr>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  학기
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  단위수
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  평점수
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  학기
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  단위수
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  평점수
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  학기
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  단위수
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] text-center'>
                  평점수
                </th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] px-[8px] border-l-0 py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center w-[100px]'>
                    {row.classDays}
                  </td>
                  {/* 결석일수 - 첫 번째 그룹 (absence) */}
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.absence.other}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.absence.sick}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.absence.unexcused}
                  </td>
                  {/* 결석일수 - 두 번째 그룹 (absenceFromClass) */}
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.absenceFromClass.other}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.absenceFromClass.sick}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.absenceFromClass.unexcused}
                  </td>
                  {/* 결석일수 - 세 번째 그룹 (earlyLeave) */}
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.earlyLeave.other}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.earlyLeave.sick}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.earlyLeave.unexcused}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] border-r-0 py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px]'></div>
      {/* 자격증 및 인증 취득사항 */}
      <div className='mb-[32px]'>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          자격증 및 인증 취득사항
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
            <colgroup>
              <col width='180px' />
              <col />
              <col />
              <col width='180px' />
              <col width='180px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  구분
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  명칭 또는 종류
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  번호 또는 내용
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  취득년월일
                </th>
                <th className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  발급기관
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {certifications?.length === 0 ? (
                  <td
                    colSpan={5}
                    className='border border-[var(--n-200)] border-l-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-500)] text-center'
                  >
                    해당 사항 없음
                  </td>
                ) : (
                  <td
                    colSpan={5}
                    className='border border-[var(--n-200)] border-l-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-500)] text-center'
                  >
                    {certifications?.map((item: any) => (
                      <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.number}</p>
                        <p>{item.date}</p>
                        <p>{item.organization}</p>
                      </div>
                    ))}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px] max-[745px]:min-w-[calc(100% - 40px)] '></div>

      {/* 봉사활동실적 */}
      <div>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          봉사활동실적
        </h3>
        <div className='overflow-x-auto max-[745px]:px-[20px] border-t-[var(--n-800)] border-t max-[745px]:border-t-0'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px] '>
            <colgroup>
              <col width='80px' />
              <col width='140px' />
              <col />
              <col />
              <col width='100px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)]  border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  학년
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  일자 또는 기간
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  장소 또는 주관기관명
                </th>
                <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  활동내용
                </th>
                <th className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                  시간
                </th>
              </tr>
            </thead>
            <tbody>
              {volunteerActivities?.map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.date}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.organization}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.activity}
                  </td>
                  <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
