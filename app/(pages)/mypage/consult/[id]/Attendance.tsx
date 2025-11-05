const Attendance = () => {
  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
        출결/자격증/봉사
      </h2>

      {/* 출결상황 */}
      <div className='mb-[32px]'>
        <h3 className='text-[18px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[16px]'>
          출결상황
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
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
                  className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'
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
              {[
                {
                  grade: '1',
                  days: '190',
                  remark: '원격수업 0일,개근',
                },
                {
                  grade: '2',
                  days: '190',
                  remark: '개근',
                },
                {
                  grade: '3',
                  days: '190',
                  remark: '-',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] px-[8px] border-l-0 py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center w-[100px]'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center w-[100px]'>
                    {row.days}
                  </td>
                  {[...Array(9)].map((_, i) => (
                    <td
                      key={i}
                      className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'
                    >
                      0
                    </td>
                  ))}
                  <td className='border border-[var(--n-200)] px-[8px] border-r-0 py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.remark}
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
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
          자격증 및 인증 취득사항
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
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
                <td
                  colSpan={5}
                  className='border border-[var(--n-200)] border-l-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-500)] text-center'
                >
                  해당 사항 없음
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px]'></div>

      {/* 봉사활동실적 */}
      <div>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
          봉사활동실적
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col width='80px' />
              <col width='140px' />
              <col />
              <col />
              <col width='100px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
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
              {[
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
                {
                  grade: '1',
                  date: '2023.03.08',
                  place: '(학교생활기록부)',
                  activity: '봉사활동 5시간24분',
                  hours: '5',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.date}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.place}
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
