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
}
const SubjectGrade = ({
  coreSubjects,
  physicalArtSubjects,
  careerSubjects,
}: {
  coreSubjects: CoreSubject[];
  physicalArtSubjects: PhysicalArtSubject[];
  careerSubjects: CareerSubject[];
}) => {
  // coreSubjects를 평탄화하여 모든 records를 하나의 배열로 변환
  const allRecords =
    coreSubjects?.flatMap((coreSubject) =>
      coreSubject.subjects.flatMap((subject) =>
        subject.records.map((record) => ({
          ...record,
          category: coreSubject.category,
        }))
      )
    ) || [];

  // 교과 -> 과목 -> 학년 -> 학기 순으로 정렬
  const sortedRecords = [...allRecords].sort((a, b) => {
    // 1. 교과(curriculum)으로 먼저 정렬
    if (a.curriculum !== b.curriculum) {
      return a.curriculum.localeCompare(b.curriculum);
    }
    // 2. 같은 교과 내에서 과목(subject)으로 정렬
    if (a.subject !== b.subject) {
      return a.subject.localeCompare(b.subject);
    }
    // 3. 같은 교과, 같은 과목 내에서 학년으로 정렬
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    if (gradeA !== gradeB) {
      return gradeA - gradeB;
    }
    // 4. 같은 교과, 같은 과목, 같은 학년 내에서 학기로 정렬
    const semesterA = parseInt(a.semester.replace('학기', '')) || 0;
    const semesterB = parseInt(b.semester.replace('학기', '')) || 0;
    return semesterA - semesterB;
  });

  // physicalArtSubjects를 평탄화하여 모든 records를 하나의 배열로 변환
  const allPhysicalArtRecords =
    physicalArtSubjects?.flatMap((physicalArtSubject) =>
      physicalArtSubject.subjects.flatMap((subject) =>
        subject.records.map((record) => ({
          ...record,
          category: physicalArtSubject.category,
        }))
      )
    ) || [];

  // 교과 -> 과목 -> 학년 -> 학기 순으로 정렬 (체육·예술과목)
  const sortedPhysicalArtRecords = [...allPhysicalArtRecords].sort((a, b) => {
    // 1. 교과(curriculum)으로 먼저 정렬
    if (a.curriculum !== b.curriculum) {
      return a.curriculum.localeCompare(b.curriculum);
    }
    // 2. 같은 교과 내에서 과목(subject)으로 정렬
    if (a.subject !== b.subject) {
      return a.subject.localeCompare(b.subject);
    }
    // 3. 같은 교과, 같은 과목 내에서 학년으로 정렬
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    if (gradeA !== gradeB) {
      return gradeA - gradeB;
    }
    // 4. 같은 교과, 같은 과목, 같은 학년 내에서 학기로 정렬
    const semesterA = parseInt(a.semester.replace('학기', '')) || 0;
    const semesterB = parseInt(b.semester.replace('학기', '')) || 0;
    return semesterA - semesterB;
  });

  // careerSubjects를 평탄화하여 모든 records를 하나의 배열로 변환
  const allCareerRecords =
    careerSubjects?.flatMap((careerSubject) =>
      careerSubject.subjects.flatMap((subject) =>
        subject.records.map((record) => ({
          ...record,
          category: careerSubject.category,
        }))
      )
    ) || [];

  // 교과 -> 과목 -> 학년 -> 학기 순으로 정렬 (진로선택과목)
  const sortedCareerRecords = [...allCareerRecords].sort((a, b) => {
    // 1. 교과(curriculum)으로 먼저 정렬
    if (a.curriculum !== b.curriculum) {
      return a.curriculum.localeCompare(b.curriculum);
    }
    // 2. 같은 교과 내에서 과목(subject)으로 정렬
    if (a.subject !== b.subject) {
      return a.subject.localeCompare(b.subject);
    }
    // 3. 같은 교과, 같은 과목 내에서 학년으로 정렬
    const gradeA = parseInt(a.grade.replace('학년', '')) || 0;
    const gradeB = parseInt(b.grade.replace('학년', '')) || 0;
    if (gradeA !== gradeB) {
      return gradeA - gradeB;
    }
    // 4. 같은 교과, 같은 과목, 같은 학년 내에서 학기로 정렬
    const semesterA = parseInt(a.semester.replace('학기', '')) || 0;
    const semesterB = parseInt(b.semester.replace('학기', '')) || 0;
    return semesterA - semesterB;
  });

  // 주요 교과 성적 테이블 데이터 생성
  const categoryColumns = [
    '전교과',
    '국영수사과',
    '국영수A',
    '국영수B',
    '국수영',
    '국영사',
    '국영과',
    '국영',
    '수과',
  ];

  const periods = [
    { label: '1학년 1학기', grade: 1, semester: 1, isTotal: false },
    { label: '1학년 2학기', grade: 1, semester: 2, isTotal: false },
    { label: '1학년 전체', grade: 1, semester: null, isTotal: true },
    { label: '2학년 1학기', grade: 2, semester: 1, isTotal: false },
    { label: '2학년 2학기', grade: 2, semester: 2, isTotal: false },
    { label: '2학년 전체', grade: 2, semester: null, isTotal: true },
    { label: '3학년 1학기', grade: 3, semester: 1, isTotal: false },
    { label: '3학년 전체', grade: 3, semester: null, isTotal: true },
  ];

  // 카테고리별 과목명 매핑
  const getCategorySubjects = (category: string): string[] => {
    const subjectMap: { [key: string]: string[] } = {
      전교과: [], // 모든 과목 (빈 배열이면 모든 과목 포함)
      국영수사과: ['국어', '영어', '수학', '사회', '과학'],
      국영수A: ['국어', '영어', '수학'],
      국영수B: ['국어', '영어', '수학'],
      국수영: ['국어', '수학', '영어'],
      국영사: ['국어', '영어', '사회'],
      국영과: ['국어', '영어', '과학'],
      국영: ['국어', '영어'],
      수과: ['수학', '과학'],
    };
    return subjectMap[category] || [];
  };

  // 각 기간별, 카테고리별 평균 등급 계산
  const getAverageGrade = (
    category: string,
    grade: number,
    semester: number | null,
    isTotal: boolean
  ): string => {
    // 모든 coreSubjects에서 레코드 수집
    const allRecords =
      coreSubjects?.flatMap((coreSubject) =>
        coreSubject.subjects.flatMap((subject) => subject.records)
      ) || [];

    // 카테고리별 과목 필터링
    const categorySubjects = getCategorySubjects(category);

    // 전교과는 기존 로직대로 처리
    if (categorySubjects.length === 0) {
      const filteredRecords = allRecords.filter((record) => {
        // 학년 필터링
        const recordGrade = parseInt(record.grade.replace('학년', '')) || 0;
        if (recordGrade !== grade) {
          return false;
        }

        // 학기 필터링
        if (!isTotal && semester !== null) {
          const recordSemester =
            parseInt(record.semester.replace('학기', '')) || 0;
          if (recordSemester !== semester) {
            return false;
          }
        }

        return true;
      });

      if (filteredRecords.length === 0) return '-';

      const validRecords = filteredRecords.filter(
        (record) =>
          typeof record.rankGrade === 'number' &&
          !isNaN(record.rankGrade) &&
          typeof record.credits === 'number' &&
          !isNaN(record.credits) &&
          record.credits > 0
      );

      if (validRecords.length === 0) return '-';

      const totalCredits = validRecords.reduce(
        (acc, record) => acc + record.credits,
        0
      );

      if (totalCredits === 0) return '-';

      const weightedRankGrade =
        validRecords.reduce(
          (acc, record) => acc + record.rankGrade * record.credits,
          0
        ) / totalCredits;

      if (isNaN(weightedRankGrade)) return '-';

      return weightedRankGrade.toFixed(2);
    }

    // 각 필수 과목별로 레코드 찾기
    const subjectRecords: { [key: string]: typeof allRecords } = {};
    let hasAnyRecord = false;

    for (const subject of categorySubjects) {
      const subjectFilteredRecords = allRecords.filter((record) => {
        // 과목명 매칭 확인
        if (!record.subject.includes(subject)) {
          return false;
        }

        // 학년 필터링
        const recordGrade = parseInt(record.grade.replace('학년', '')) || 0;
        if (recordGrade !== grade) {
          return false;
        }

        // 학기 필터링
        if (!isTotal && semester !== null) {
          const recordSemester =
            parseInt(record.semester.replace('학기', '')) || 0;
          if (recordSemester !== semester) {
            return false;
          }
        }

        return true;
      });

      const validSubjectRecords = subjectFilteredRecords.filter(
        (record) =>
          typeof record.rankGrade === 'number' &&
          !isNaN(record.rankGrade) &&
          typeof record.credits === 'number' &&
          !isNaN(record.credits) &&
          record.credits > 0
      );

      if (validSubjectRecords.length > 0) {
        subjectRecords[subject] = validSubjectRecords;
        hasAnyRecord = true;
      } else {
        subjectRecords[subject] = [];
      }
    }

    // 모든 과목이 없으면 '-' 반환
    if (!hasAnyRecord) return '-';

    // 각 과목별로 평균 등급과 단위수 계산 (없는 과목은 0점 처리)
    let totalWeightedGrade = 0;
    let totalCredits = 0;

    for (const subject of categorySubjects) {
      const records = subjectRecords[subject];
      if (records.length > 0) {
        // 해당 과목의 평균 등급과 단위수 계산
        const subjectTotalCredits = records.reduce(
          (acc, record) => acc + record.credits,
          0
        );
        const subjectWeightedGrade = records.reduce(
          (acc, record) => acc + record.rankGrade * record.credits,
          0
        );

        if (subjectTotalCredits > 0) {
          totalWeightedGrade += subjectWeightedGrade;
          totalCredits += subjectTotalCredits;
        }
      } else {
        // 과목이 없으면 0점 처리 (단위수는 다른 과목들의 평균 단위수 사용)
        // 다른 과목들의 평균 단위수 계산
        const otherSubjectsCredits = categorySubjects
          .filter((s) => s !== subject && subjectRecords[s].length > 0)
          .flatMap((s) => subjectRecords[s])
          .map((r) => r.credits);

        if (otherSubjectsCredits.length > 0) {
          const avgCredits =
            otherSubjectsCredits.reduce((a, b) => a + b, 0) /
            otherSubjectsCredits.length;
          // 0점 * 평균 단위수 = 0이므로 totalWeightedGrade에는 영향 없음
          totalCredits += avgCredits;
        }
      }
    }

    if (totalCredits === 0) return '-';

    const weightedRankGrade = totalWeightedGrade / totalCredits;

    if (isNaN(weightedRankGrade)) return '-';

    return weightedRankGrade.toFixed(2);
  };

  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
        교과성적
      </h2>

      {/* 주요 교과 성적 */}
      <div className='mb-[32px]'>
        <h3 className='text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
          주요 교과 성적
        </h3>
        <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
          <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
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
              {periods.map((period, index) => (
                <tr key={index}>
                  <td className='border border-[var(--n-200)] border-l-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-left'>
                    {period.label}
                  </td>
                  {categoryColumns.map((category, i) => (
                    <td
                      key={i}
                      className={`border border-[var(--n-200)] px-[12px] py-[10px] text-[14px] font-[400] text-[var(--n-800)] text-center ${
                        i === categoryColumns.length - 1 ? 'border-r-0' : ''
                      }`}
                    >
                      {getAverageGrade(
                        category,
                        period.grade,
                        period.semester,
                        period.isTotal
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
                  // 학년에서 숫자만 추출 (예: "1학년" -> "1")
                  const gradeNumber = record?.grade.replace('학년', '');
                  // 학기에서 숫자만 추출 (예: "1학기" -> "1")
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
                        -
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
                  // 학년에서 숫자만 추출 (예: "1학년" -> "1")
                  const gradeNumber = record?.grade.replace('학년', '');
                  // 학기에서 숫자만 추출 (예: "1학기" -> "1")
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
                  // 학년에서 숫자만 추출 (예: "1학년" -> "1")
                  const gradeNumber = record.grade.replace('학년', '');
                  // 학기에서 숫자만 추출 (예: "1학기" -> "1")
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
                        -
                      </td>
                      <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left'>
                        -
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
