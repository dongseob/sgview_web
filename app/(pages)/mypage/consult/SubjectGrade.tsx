export interface CoreSubject {
  averageRankGrade: number;
  averageRawScore: number;
  category: string;
  subjects: Subject[];
}
export interface PhysicalArtSubject {
  averageRankGrade: number;
  averageRawScore: number;
  category: string;
  subjects: Subject[];
}
export interface CareerSubject {
  averageRankGrade: number;
  averageRawScore: number;
  category: string;
  subjects: Subject[];
}

interface Subject {
  averageRankGrade: number;
  averageRawScore: number;
  subject: string;
  records: Record[];
}

interface Scores {
  raw: number;
  subjectAverage: number;
  standardDeviation: number;
}

interface Record {
  achievement: string;
  credits: number;
  curriculum: string;
  grade: string;
  rankGrade: number;
  remark: string | null;
  scoreChangeRate: number | null;
  scores: Scores;
  semester: string;
  subject: string;
  studentCount: number;
  gradeDistributionRatio?: string | null;
}

// ✅ 백엔드에서 내려주는 주요 교과 성적 타입
interface CoreSubjectAverageRankGradeItem {
  grade: string; // "1학년"
  semester: string; // "1학기" | "2학기" | "전체"
  averageGrade: {
    [key: string]: number | null;
  };
}

const SubjectGrade = ({
  coreSubjects,
  physicalArtSubjects,
  careerSubjects,
  coreSubjectAverageRankGrade,
}: {
  coreSubjects: CoreSubject[];
  physicalArtSubjects: PhysicalArtSubject[];
  careerSubjects: CareerSubject[];
  coreSubjectAverageRankGrade: CoreSubjectAverageRankGradeItem[];
}) => {
  const allRecords =
    coreSubjects?.flatMap((coreSubject) =>
      coreSubject.subjects.flatMap((subject) =>
        subject.records.map((record) => ({
          ...record,
          category: coreSubject.category,
        }))
      )
    ) || [];

  const sortedRecords = [...allRecords].sort((a, b) => {
    if (a.curriculum !== b.curriculum) {
      return a.curriculum.localeCompare(b.curriculum);
    }
    if (a.subject !== b.subject) {
      return a.subject.localeCompare(b.subject);
    }
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    if (gradeA !== gradeB) {
      return gradeA - gradeB;
    }
    const semesterA = parseInt(a.semester.replace('학기', '')) || 0;
    const semesterB = parseInt(b.semester.replace('학기', '')) || 0;
    return semesterA - semesterB;
  });

  const allPhysicalArtRecords =
    physicalArtSubjects?.flatMap((physicalArtSubject) =>
      physicalArtSubject.subjects.flatMap((subject) =>
        subject.records.map((record) => ({
          ...record,
          category: physicalArtSubject.category,
        }))
      )
    ) || [];

  const sortedPhysicalArtRecords = [...allPhysicalArtRecords].sort((a, b) => {
    if (a.curriculum !== b.curriculum) {
      return a.curriculum.localeCompare(b.curriculum);
    }
    if (a.subject !== b.subject) {
      return a.subject.localeCompare(b.subject);
    }
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    if (gradeA !== gradeB) {
      return gradeA - gradeB;
    }
    const semesterA = parseInt(a.semester.replace('학기', '')) || 0;
    const semesterB = parseInt(b.semester.replace('학기', '')) || 0;
    return semesterA - semesterB;
  });

  const allCareerRecords =
    careerSubjects?.flatMap((careerSubject) =>
      careerSubject.subjects.flatMap((subject) =>
        subject.records.map((record) => ({
          ...record,
          category: careerSubject.category,
        }))
      )
    ) || [];

  const sortedCareerRecords = [...allCareerRecords].sort((a, b) => {
    if (a.curriculum !== b.curriculum) {
      return a.curriculum.localeCompare(b.curriculum);
    }
    if (a.subject !== b.subject) {
      return a.subject.localeCompare(b.subject);
    }
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    if (gradeA !== gradeB) {
      return gradeA - gradeB;
    }
    const semesterA = parseInt(a.semester.replace('학기', '')) || 0;
    const semesterB = parseInt(b.semester.replace('학기', '')) || 0;
    return semesterA - semesterB;
  });

  // ✅ 백엔드 averageGrade 키 순서대로 컬럼 정의
  const majorColumns = [
    '전교과',
    '국영수사과',
    '국영수사',
    '국영수과',
    '국영수',
    '국영사',
    '영수과',
    '국영',
  ];

  const formatLabel = (item: CoreSubjectAverageRankGradeItem) => {
    if (item.semester === '전체') return `${item.grade} 전체`;
    return `${item.grade} ${item.semester}`;
  };

  const formatAverageValue = (value: number | null | undefined) => {
    if (value === null || value === undefined || Number.isNaN(value)) return '-';
    return value.toFixed(2);
  };

  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
        교과성적
      </h2>

      {/* ✅ 주요 교과 성적 - coreSubjectAverageRankGrade 값 사용 */}
      <div className='mb-[32px]'>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          주요 교과 성적
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block' />
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
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
                  국영수사
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영수과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영수
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영사
                </th>
                <th className='border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  영수과
                </th>
                <th className='border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]'>
                  국영
                </th>
              </tr>
            </thead>
            <tbody>
              {coreSubjectAverageRankGrade &&
              coreSubjectAverageRankGrade.length > 0 ? (
                coreSubjectAverageRankGrade.map((item, index) => (
                  <tr key={`${item.grade}-${item.semester}-${index}`}>
                    <td className='border border-[var(--n-200)] border-l-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                      {formatLabel(item)}
                    </td>
                    {majorColumns.map((key, i) => (
                      <td
                        key={key}
                        className={`border border-[var(--n-200)] px-[12px] py-[10px] text-[14px] font-[400] text-[var(--n-800)] text-center ${
                          i === majorColumns.length - 1 ? 'border-r-0' : ''
                        }`}
                      >
                        {formatAverageValue(item.averageGrade[key])}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className='border border-l-0 border-r-0 border-[var(--n-200)] px-[12px] py-[10px] text-[14px] font-[400] text-[var(--n-500)] text-center'
                  >
                    해당 사항 없음
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 아래부터는 기존 코드 그대로 */}

      <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px] max-[745px]:min-w-[calc(100% - 40px)]'></div>

      {/* 전체 내신 성적 */}
      <div className='mb-[32px]'>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          전체 내신 성적
        </h3>
        <p className='text-[16px] font-[400] leading-[1.4] text-[var(--n-600)] mb-[24px] max-[745px]:px-[20px]'>
          공통과목, 일반선택과목
        </p>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
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
              {sortedRecords.length > 0 ? (
                sortedRecords.map((record, index) => {
                  const gradeNumber = record?.grade.replace('학년', '');
                  const semesterNumber = record?.semester.replace('학기', '');

                  return (
                    <tr key={`${record.curriculum}-${record.subject}-${index}`}>
                      <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                        {record.curriculum}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                        {record.subject}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {gradeNumber}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {semesterNumber}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.credits}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.scores.subjectAverage}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.scores.raw}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.scores.standardDeviation}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.achievement}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.studentCount}
                      </td>
                      <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.rankGrade}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={11}
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

      {/* 체육·예술과목 */}
      <div className='mb-[32px]'>
        <h3 className='text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          체육·예술과목
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
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
              {sortedPhysicalArtRecords.length > 0 ? (
                sortedPhysicalArtRecords.map((record, index) => {
                  const gradeNumber = record?.grade.replace('학년', '');
                  const semesterNumber = record?.semester.replace('학기', '');

                  return (
                    <tr
                      key={`${record?.curriculum}-${record?.subject}-${index}`}
                    >
                      <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                        {record?.curriculum}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record?.subject}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {gradeNumber}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {semesterNumber}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record?.credits}
                      </td>
                      <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record?.achievement}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={6}
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

      {/* 진로선택과목 */}
      <div className='mb-[32px]'>
        <h3 className='text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          진로선택과목
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
          <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
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
              {sortedCareerRecords.length > 0 ? (
                sortedCareerRecords.map((record, index) => {
                  const gradeNumber = record.grade.replace('학년', '');
                  const semesterNumber = record.semester.replace('학기', '');

                  return (
                    <tr key={`${record.curriculum}-${record.subject}-${index}`}>
                      <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                        {record.curriculum}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                        {record.subject}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {gradeNumber}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {semesterNumber}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.credits}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.scores.subjectAverage}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.scores.standardDeviation}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.achievement}
                      </td>
                      <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                        {record.studentCount}
                      </td>
                      <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                        {record.gradeDistributionRatio}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={10}
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
    </div>
  );
};

export default SubjectGrade;
