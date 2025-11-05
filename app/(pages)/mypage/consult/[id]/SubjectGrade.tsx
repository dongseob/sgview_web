const SubjectGrade = () => {
  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
        교과성적
      </h2>

      {/* 주요 교과 성적 */}
      <div className='mb-[32px]'>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
          주요 교과 성적
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col width='132px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
              <col width='79px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] text-left border-t-0 border-l-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[80px]'>
                  분류
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  전교과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[90px]'>
                  국영수사과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[80px]'>
                  국영수A
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영수B
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국수영
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영사
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영
                </th>
                <th className='border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  수과
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                '1학년 1학기',
                '1학년 2학기',
                '1학년 전체',
                '2학년 1학기',
                '2학년 2학기',
                '2학년 전체',
                '3학년 1학기',
                '3학년 전체',
              ].map((period, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                    {period}
                  </td>
                  {[...Array(9)].map((_, i) => (
                    <td
                      key={i}
                      className={`border border-[var(--n-200)] px-[12px] py-[10px] text-[14px] font-[400] text-[var(--n-800)] text-center ${
                        i === 8 ? 'border-r-0' : ''
                      }`}
                    >
                      {i === 0 ? '3.00' : '3.10'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px]'></div>

      {/* 전체 내신 성적 */}
      <div className='mb-[32px]'>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
          전체 내신 성적
        </h3>
        <p className='text-[16px] font-[400] leading-[1.4] text-[var(--n-600)] mb-[24px]'>
          공통과목, 일반선택과목
        </p>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col width='132px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
              <col width='71px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] border-t-0 border-l-0 text-left px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  교과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 text-left px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  과목
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]'>
                  학년
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]'>
                  학기
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  단위수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  평점수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  원점수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  표준편차
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  성취도
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  수강자수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 border-r-0  px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  석차등급
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '사회(역사/도덕등)',
                  course: '통합사회',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '사회(역사/도덕등)',
                  course: '통합사회',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '사회(역사/도덕등)',
                  course: '통합사회',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '국어',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '가족가정/제2외국어/한문/교양',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
                {
                  subject: '가족가정/제2외국어/한문/교양',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  avg: '84',
                  raw: '79.4',
                  std: '13.2',
                  achievement: 'A',
                  students: '212',
                  rank: '3',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                    {row.subject}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                    {row.course}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.semester}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.credit}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.avg}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.raw}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.std}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.achievement}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.students}
                  </td>
                  <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.rank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 체육·예술과목 */}
      <div className='mb-[32px]'>
        <h3 className='text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
          체육·예술과목
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col width='132px' />
              <col width='142px' />
              <col width='142px' />
              <col width='142px' />
              <col width='142px' />
              <col width='142px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] border-t-0 border-l-0 text-center px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]'>
                  교과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 text-center px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]'>
                  과목
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]'>
                  학년
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]'>
                  학기
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  단위수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  성취도
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  subject: '체육',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  achievement: 'A',
                },
                {
                  subject: '체육',
                  course: '국어',
                  grade: '1',
                  semester: '1',
                  credit: '4',
                  achievement: 'A',
                },
                {
                  subject: '체육',
                  course: '문학과 산책',
                  grade: '2',
                  semester: '1',
                  credit: '4',
                  achievement: 'A',
                },
                {
                  subject: '체육',
                  course: '국어',
                  grade: '3',
                  semester: '1',
                  credit: '4',
                  achievement: 'A',
                },
                {
                  subject: '체육',
                  course: '국어',
                  grade: '3',
                  semester: '1',
                  credit: '4',
                  achievement: 'A',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                    {row.subject}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.course}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.semester}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.credit}
                  </td>
                  <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.achievement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 진로선택과목 */}
      <div className='mb-[32px]'>
        <h3 className='text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
          진로선택과목
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col width='70px' />
              <col width='107px' />
              <col width='70px' />
              <col width='70px' />
              <col width='70px' />
              <col width='70px' />
              <col width='70px' />
              <col width='70px' />
              <col width='70px' />
              <col width='180px' />
            </colgroup>
            <thead>
              <tr className='bg-[var(--n-50)]'>
                <th className='border border-[var(--n-200)] border-t-0 border-l-0 text-left px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]'>
                  교과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 text-left px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]'>
                  과목
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]'>
                  학년
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]'>
                  학기
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  단위수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  평점수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  과목표준
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]'>
                  성취도
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]'>
                  수강자수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left min-w-[80px]'>
                  성취도별 분포 비율
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
                {
                  subject: '계열',
                  course: '생명과학 과학',
                  grade: '2',
                  semester: '1',
                  credit: '2',
                  avg: '100',
                  std: '80.5',
                  achievement: 'A',
                  students: '172',
                  distribution: 'A(54.5) B(26.7) C(8.7)',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                    {row.subject}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                    {row.course}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.grade}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.semester}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.credit}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.avg}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.std}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.achievement}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                    {row.students}
                  </td>
                  <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                    {row.distribution}
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

export default SubjectGrade;
