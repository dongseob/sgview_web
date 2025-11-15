import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CoreSubject } from './SubjectGrade';
// 교과별 성적 변화율 테이블 컴포넌트
const GradeChangeTable = ({
  subject,
  change1_2,
  tooltipType = 'tag', // 'tag' | 'memo'
  data,
}: {
  subject: string;
  change1_2: string; // 1-2학기 성적변화
  tooltipType?: 'tag' | 'memo';
  data: CoreSubject[];
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const getChangeColor = (change: string) => {
    if (change === '-') return 'text-[var(--n-800)]';
    if (change.startsWith('-')) return 'text-[#0066CC]';
    if (change.startsWith('+')) return 'text-[#D93025]';
    return 'text-[var(--n-800)]';
  };

  // 데이터에서 특정 학년/학기 레코드 찾기
  const findRecord = (grade: string, semester: string) => {
    if (!data || data.length === 0) return null;

    // category가 subject와 일치하는 CoreSubject 찾기
    const coreSubject = data.find((item) => item.category === subject);
    if (!coreSubject || !coreSubject.subjects) return null;

    // 모든 subjects의 records를 평탄화
    const allRecords = coreSubject.subjects.flatMap(
      (subj) => subj.records || []
    );

    // 해당 학년/학기의 첫 번째 레코드 찾기
    const record = allRecords.find(
      (rec) => rec.grade === grade && rec.semester === semester
    );

    return record || null;
  };

  // 1-1학기 데이터
  const record1_1 = findRecord('1학년', '1학기');
  // 1-2학기 데이터
  const record1_2 = findRecord('1학년', '2학기');
  // 2-1학기 데이터
  const record2_1 = findRecord('2학년', '1학기');

  // 평균 계산
  const calculateAverage = () => {
    const records = [record1_1, record1_2, record2_1].filter(
      (rec) => rec !== null
    ) as any[];

    if (records.length === 0) {
      return {
        rawScore: '',
        rankGrade: '',
      };
    }

    // 원점수 평균 계산
    const validRawScores = records.filter(
      (rec) => rec.scores?.raw !== null && rec.scores?.raw !== undefined
    );
    const totalRawScore = validRawScores.reduce(
      (sum, rec) => sum + (rec.scores?.raw || 0),
      0
    );
    const avgRawScore =
      validRawScores.length > 0
        ? (totalRawScore / validRawScores.length).toFixed(1)
        : '';

    // 석차등급 평균 계산 (숫자인 경우만 포함)
    const validRankGrades = records.filter((rec) => {
      const rankGrade = rec.rankGrade;
      return (
        rankGrade !== null &&
        rankGrade !== undefined &&
        typeof rankGrade === 'number' &&
        !isNaN(rankGrade)
      );
    });

    if (validRankGrades.length === 0) {
      return {
        rawScore: avgRawScore,
        rankGrade: '',
      };
    }

    const totalRankGrade = validRankGrades.reduce(
      (sum, rec) => sum + (rec.rankGrade || 0),
      0
    );
    const avgRankGrade = (totalRankGrade / validRankGrades.length).toFixed(2);

    return {
      rawScore: avgRawScore,
      rankGrade: avgRankGrade,
    };
  };

  const average = calculateAverage();

  // 성적변화율 계산 (1-2학기 기준)
  const getScoreChangeRate = () => {
    if (!record1_2?.scoreChangeRate) return '';
    const rate = record1_2.scoreChangeRate;
    if (rate === null || rate === undefined) return '';
    const sign = rate >= 0 ? '+' : '';
    return `${sign}${rate.toFixed(1)}%`;
  };

  const scoreChange1_2 = getScoreChangeRate();

  return (
    <div>
      <div className='py-[12px] max-[745px]:px-[20px]'>
        <span className='text-[16px] font-[500] leading-[1.3] text-[var(--n-800)]'>
          {subject}
        </span>
      </div>

      {/* 테이블 */}
      <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
        <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
        <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
          <colgroup>
            <col width='106px' />
            <col width='106px' />
            <col width='106px' />
            <col width='106px' />
            <col width='106px' />
            <col width='106px' />
            <col width='106px' />
            <col width='106px' />
          </colgroup>
          <thead>
            <tr className='bg-[var(--n-50)]'>
              <th className='border border-[var(--n-200)] border-t-0 border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                교과
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                학기
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                과목
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                원점수
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                표준편차
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                성적도
              </th>
              <th className='border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                석차등급
              </th>
              <th className='border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center'>
                성적변화
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 1-1학기 */}
            <tr>
              <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_1?.curriculum || subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                1-1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_1?.subject || subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_1?.scores?.raw ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_1?.scores?.standardDeviation ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_1?.achievement ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_1?.rankGrade ?? ''}
              </td>
              <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
            </tr>
            {/* 1-2학기 */}
            <tr>
              <td className='border border-[var(--n-200)] px-[8px] border-l-0 py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                1-2
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_2?.subject || subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center relative'>
                {record1_2?.scores?.raw ? (
                  <span
                    className='text-[14px] font-[400] bg-[var(--r-200)] text-center cursor-pointer'
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => {
                      if (!isClicked) {
                        setShowTooltip(false);
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (showTooltip) {
                        // 호버 상태에서 클릭하면 그대로 켜있도록
                        setIsClicked(true);
                      } else {
                        // 닫혀있으면 열기
                        setShowTooltip(true);
                        setIsClicked(true);
                      }
                    }}
                  >
                    {record1_2.scores.raw}
                  </span>
                ) : (
                  ''
                )}
                {showTooltip && (
                  <div className='absolute top-[10px] left-[80px] transform z-50'>
                    {tooltipType === 'tag' ? (
                      // 태그 타입 말풍선
                      <div
                        className='border-[var(--n-200)] border-[1px] bg-[var(--n-0)] rounded-[12px] px-[16px] py-[18px] relative flex items-center gap-[8px]'
                        style={{
                          boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <span className='text-[15px] leading-[18px] font-[600] text-[var(--n-800)] whitespace-nowrap'>
                          학업역량(5점)
                        </span>
                        <button
                          onClick={() => {
                            setShowTooltip(false);
                            setIsClicked(false);
                          }}
                          className='text-[var(--n-400)] hover:text-[var(--n-600)] text-[14px] leading-none w-[16px] h-[16px] flex items-center justify-center'
                        >
                          <Image
                            src='/Images/icon-close-24-gray.svg'
                            alt='close'
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                    ) : (
                      // 메모 타입 말풍선
                      <div className='bg-white rounded-[8px] px-[16px] py-[12px] shadow-lg min-w-[200px] relative'>
                        <div className='flex items-center justify-between mb-[8px]'>
                          <span className='text-[14px] font-[500] text-[var(--n-800)]'>
                            메모
                          </span>
                          <button
                            onClick={() => {
                              setShowTooltip(false);
                              setIsClicked(false);
                            }}
                            className='text-[var(--n-400)] hover:text-[var(--n-600)] text-[14px] leading-none w-[16px] h-[16px] flex items-center justify-center'
                          >
                            ×
                          </button>
                        </div>
                        <p className='text-[14px] font-[400] text-[var(--n-800)]'>
                          점수가 오른 이유가 뭘까?
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_2?.scores?.standardDeviation ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_2?.achievement ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record1_2?.rankGrade ?? ''}
              </td>
              <td
                className={`border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] ${getChangeColor(
                  scoreChange1_2
                )} text-center`}
              >
                {scoreChange1_2}
              </td>
            </tr>
            {/* 2-1학기 */}
            <tr>
              <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                2-1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record2_1?.subject || subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record2_1?.scores?.raw ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record2_1?.scores?.standardDeviation ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record2_1?.achievement ?? ''}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {record2_1?.rankGrade ?? ''}
              </td>
              <td
                className={`border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] ${getChangeColor(
                  record2_1?.scoreChangeRate
                    ? `${
                        record2_1.scoreChangeRate >= 0 ? '+' : ''
                      }${record2_1.scoreChangeRate.toFixed(1)}%`
                    : ''
                )} text-center`}
              >
                {record2_1?.scoreChangeRate !== null &&
                record2_1?.scoreChangeRate !== undefined
                  ? `${
                      record2_1.scoreChangeRate >= 0 ? '+' : ''
                    }${record2_1.scoreChangeRate.toFixed(1)}%`
                  : ''}
              </td>
            </tr>
            {/* 평균 행 */}
            <tr className='bg-[var(--n-50)]'>
              <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                평균
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {average.rawScore}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {average.rankGrade}
              </td>
              <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 교과별 성적 추이도 차트 컴포넌트
const SubjectTrendChart = ({
  title,
  subtitle,
  average,
  data,
}: {
  title: string;
  subtitle?: string;
  average: number;
  data: { semester: string; grade: number; year: number }[];
}) => {
  const chartData = (data || []).map((item) => ({
    semester: item.semester,
    grade: item.grade,
    year: item.year,
  }));

  const getColor = (year: number) => {
    if (year === 1) return '#FFB3BA';
    if (year === 2) return '#FF6B6B';
    return '#D32F2F';
  };

  // 커스텀 레이블 레이어 (막대 위에 숫자 표시)

  const CustomBarLabels = (props: any) => {
    const { bars } = props;
    return (
      <g>
        {}
        {bars.map((bar: any) => {
          const value = bar.data.data.grade;
          const displayValue =
            value !== null && value !== undefined && !isNaN(value)
              ? value.toFixed(1)
              : '0.0';
          return (
            <text
              key={bar.key}
              x={bar.x + bar.width / 2}
              y={bar.y - 8}
              textAnchor='middle'
              dominantBaseline='middle'
              fill='#333'
              fontSize={12}
              fontWeight={400}
            >
              {displayValue}
            </text>
          );
        })}
      </g>
    );
  };

  return (
    <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px]'>
      <div className='flex flex-col items-start justify-start gap-[20px]'>
        <h3 className='text-[16px] font-[600] leading-[1.3] text-[var(--n-800)]'>
          {title} 평균:{' '}
          {average !== null && average !== undefined
            ? average.toFixed(2)
            : '0.00'}{' '}
          등급
        </h3>
        <div className='flex items-center justify-start gap-[6px]'>
          <div className='flex items-center gap-[6px]'>
            <div className='w-[10px] h-[10px] bg-[#F7A39F] rounded-[2px]'></div>
            <span className='text-[13px] font-[400] text-[var(--n-800)]'>
              1학년
            </span>
          </div>
          <div className='flex items-center gap-[6px]'>
            <div className='w-[10px] h-[10px] bg-[#F6432B] rounded-[2px]'></div>
            <span className='text-[13px] font-[400] text-[var(--n-800)]'>
              2학년
            </span>
          </div>
          <div className='flex items-center gap-[6px]'>
            <div className='w-[10px] h-[10px] bg-[#D93025] rounded-[2px]'></div>
            <span className='text-[13px] font-[400] text-[var(--n-800)]'>
              3학년
            </span>
          </div>
        </div>
      </div>
      <div className='h-[200px]'>
        <ResponsiveBar
          data={chartData}
          keys={['grade']}
          indexBy='semester'
          margin={{ top: 20, right: 0, bottom: 20, left: 20 }}
          padding={0.5}
          valueScale={{ type: 'linear', min: 0, max: 5 }}
          indexScale={{ type: 'band', round: true }}
          colors={(bar) => {
            const dataItem = bar.data as {
              semester: string;
              grade: number;
              year: number;
            };
            return getColor(dataItem.year);
          }}
          borderRadius={0}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 8,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 36,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -35,
            format: (value) => value.toString(),
            tickValues: [1, 3, 5],
          }}
          gridYValues={[1, 3, 5]}
          theme={{
            background: 'transparent',
            grid: {
              line: {
                stroke: '#E5E7EB',
                strokeWidth: 1,
              },
            },
            axis: {
              domain: {
                line: {
                  stroke: '#686A6F',
                  strokeWidth: 1,
                },
              },
              ticks: {
                text: {
                  fill: '#37383B',
                  fontSize: 12,
                  fontFamily: 'inherit',
                },
              },
            },
          }}
          enableLabel={false}
          layers={[
            'grid',
            'axes',
            'bars',
            CustomBarLabels,
            'markers',
            'legends',
          ]}
          isInteractive={true}
          tooltip={({ indexValue, value }) => {
            return (
              <div className='bg-white border border-[var(--n-200)] rounded-[4px] px-[8px] py-[4px] shadow-sm w-[90px] text-center'>
                <div className='text-[12px] text-[var(--n-800)]'>
                  {indexValue}: {Number(value).toFixed(1)}
                </div>
              </div>
            );
          }}
          role='application'
          ariaLabel={`${title} 성적 추이 차트`}
        />
      </div>
    </div>
  );
};

// 교과별 내신 성적 막대 차트
const GradeBarChart = ({ coreSubjects }: { coreSubjects: any }) => {
  const data =
    coreSubjects?.map((subject: any) => ({
      subject: subject.category,
      grade: subject.averageRankGrade,
    })) || [];

  return (
    <ResponsiveBar
      data={data}
      keys={['grade']}
      indexBy='subject'
      margin={{ top: 20, right: 0, bottom: 30, left: 30 }}
      padding={0.4}
      valueScale={{ type: 'linear', min: 0, max: 9 }}
      indexScale={{ type: 'band', round: true }}
      colors={['#F6432B']}
      borderRadius={2}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
        format: (value) => value.toFixed(1),
        tickValues: [1.5, 3.0, 4.5, 6.0, 7.5, 9.0],
      }}
      gridYValues={[1.5, 3.0, 4.5, 6.0, 7.5, 9.0]}
      enableLabel={false}
      isInteractive={true}
      tooltip={({ indexValue, value }) => {
        return (
          <div className='bg-white border border-[var(--n-200)] rounded-[4px] px-[8px] py-[4px] shadow-sm w-[90px] text-center'>
            <div className='text-[12px] text-[var(--n-800)]'>
              {indexValue}: {Number(value).toFixed(1)}
            </div>
          </div>
        );
      }}
      role='application'
      ariaLabel='교과별 내신 성적 차트'
      theme={{
        axis: {
          domain: {
            line: {
              stroke: '#686A6F',
              strokeWidth: 1,
            },
          },
          ticks: {
            text: {
              fill: '#37383B',
              fontSize: 12,
            },
          },
        },
      }}
      layers={[
        'grid',
        'axes',
        'bars',
        // 👇 커스텀 레이어 추가 (bars 위에 그려서 28px 너비로 표시)
        (props) => {
          const { bars } = props;

          return bars.map((bar) => {
            const adjustedX = bar.x + (bar.width - 28) / 2;

            return (
              <rect
                key={bar.key}
                x={adjustedX}
                y={bar.y}
                width={28}
                height={bar.height}
                fill={bar.color}
                rx={2}
                ry={2}
                style={{ pointerEvents: 'none' }}
              />
            );
          });
        },
        'markers',
        'legends',
      ]}
    />
  );
};

// 성적추이 라인 차트
const GradeLineChart = ({ transcript }: { transcript: any }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 745);
      }
    };
    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const labels = [
    '1-1학기',
    '1-2학기',
    '2-1학기',
    '2-2학기',
    '3-1학기',
    '3-2학기',
  ];

  // 모바일용 짧은 라벨
  const shortLabels = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2'];

  // 문자열 라벨에 숫자 좌표를 부여
  const labelMap = labels.reduce((acc, label, i) => {
    acc[label] = i + 1;
    return acc;
  }, {} as Record<string, number>);

  // 교과 조합별 학기별 평균 계산 함수
  const calculateSubjectTrend = (
    subjectNames: string[],
    allSubjects: any[]
  ) => {
    const semesters = [
      { semester: '1-1', grade: '1학년', semesterNum: '1학기' },
      { semester: '1-2', grade: '1학년', semesterNum: '2학기' },
      { semester: '2-1', grade: '2학년', semesterNum: '1학기' },
      { semester: '2-2', grade: '2학년', semesterNum: '2학기' },
      { semester: '3-1', grade: '3학년', semesterNum: '1학기' },
      { semester: '3-2', grade: '3학년', semesterNum: '2학기' },
    ];

    const result = semesters.map((sem) => {
      const records: any[] = [];

      // subjectNames가 비어있으면 모든 교과 포함, 아니면 지정된 교과만 포함
      const subjectsToProcess =
        !subjectNames || subjectNames.length === 0
          ? allSubjects || []
          : allSubjects?.filter((item) =>
              subjectNames.includes(item.category)
            ) || [];

      // 각 교과의 레코드 찾기 (학년/학기만 맞춤)
      subjectsToProcess.forEach((coreSubject: any) => {
        if (coreSubject?.subjects) {
          coreSubject.subjects.forEach((subj: any) => {
            if (subj.records) {
              subj.records.forEach((rec: any) => {
                if (
                  rec.grade === sem.grade &&
                  rec.semester === sem.semesterNum &&
                  typeof rec.rankGrade === 'number' &&
                  !isNaN(rec.rankGrade)
                ) {
                  records.push(rec.rankGrade);
                }
              });
            }
          });
        }
      });

      // 평균 계산 (없으면 0)
      const average =
        records.length > 0
          ? records.reduce((sum, grade) => sum + grade, 0) / records.length
          : 0;

      return {
        semester: sem.semester,
        grade: average,
        year: parseInt(sem.grade.replace('학년', '')) || 1,
      };
    });

    return result;
  };

  // 각 조합별 데이터 계산
  const 전교과Data = calculateSubjectTrend(
    transcript?.coreSubjects?.map((item: any) => item.category) || [],
    transcript?.coreSubjects
  );
  const 국영수사과Data = calculateSubjectTrend(
    ['국어', '영어', '수학', '사회', '과학'],
    transcript?.coreSubjects
  );
  const 국영수사Data = calculateSubjectTrend(
    ['국어', '영어', '수학', '사회'],
    transcript?.coreSubjects
  );
  const 국영수과Data = calculateSubjectTrend(
    ['국어', '영어', '수학', '과학'],
    transcript?.coreSubjects
  );

  // rawData 생성
  const rawData = [
    {
      id: '전교과',
      color: '#D93025',
      data: 전교과Data.map((item) => ({
        x: `${item.semester}학기`,
        y: item.grade,
      })),
    },
    {
      id: '국영수사과',
      color: '#F6432B',
      data: 국영수사과Data.map((item) => ({
        x: `${item.semester}학기`,
        y: item.grade,
      })),
    },
    {
      id: '국영수사',
      color: '#F7A39F',
      data: 국영수사Data.map((item) => ({
        x: `${item.semester}학기`,
        y: item.grade,
      })),
    },
    {
      id: '국명수과',
      color: '#FFCDD0',
      data: 국영수과Data.map((item) => ({
        x: `${item.semester}학기`,
        y: item.grade,
      })),
    },
  ];

  // x 값을 숫자로 변환
  const data = rawData.map((serie) => ({
    ...serie,
    data: serie.data.map((point) => ({
      x: labelMap[point.x],
      y: point.y,
      label: point.x, // tick 표시용
    })),
  }));

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 0, bottom: 50, left: 30 }}
      xScale={{
        type: 'linear',
        min: 0.5, // y축에서 약간 떨어짐
        max: labels.length + 0.5, // 오른쪽도 여유
      }}
      yScale={{
        type: 'linear',
        min: 0,
        max: 9,
        stacked: false,
        reverse: false,
      }}
      yFormat=' >-.2f'
      curve='linear'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        legendPosition: 'middle',
        tickValues: Object.values(labelMap),
        format: (v) => (isMobile ? shortLabels[v - 1] : labels[v - 1]), // 모바일일 때 짧은 라벨
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -50,
        format: (value) => value.toFixed(1),
        tickValues: [1.5, 3.0, 4.5, 6.0, 7.5, 9.0],
        renderTick: (tick) => (
          <g transform={`translate(${tick.x - 10},${tick.y + 5})`}>
            <text
              textAnchor='end'
              dominantBaseline='middle'
              fontSize={13}
              fill={'#AFB0B6'} // ✅ tick 값에 따라 색 지정
            >
              {tick.value}
            </text>
          </g>
        ),
      }}
      gridYValues={[1.5, 3.0, 4.5, 6.0, 7.5, 9.0]}
      enableGridX={false}
      colors={(serie) => serie.color}
      lineWidth={1}
      pointSize={6}
      pointColor={(point) => {
        return point.series.color || '#000000';
      }}
      pointBorderWidth={2}
      pointBorderColor={(point) => {
        const serie = data.find((s) => s.id === point.seriesId);
        return serie?.color || '#000000';
      }}
      pointLabelYOffset={-12}
      enablePointLabel={false}
      enableArea={false}
      useMesh={true}
      enableCrosshair={false}
      tooltip={({ point }) => {
        const xLabel = point.data.label || labels[point.data.x - 1];
        return (
          <div className='bg-white border border-[var(--n-200)] rounded-[4px] px-[8px] py-[4px] shadow-sm w-[90px] text-center'>
            <div className='text-[12px] text-[var(--n-800)]'>
              {xLabel}: {point.data.y.toFixed(1)}
            </div>
          </div>
        );
      }}
      legends={[]}
      theme={{
        grid: {
          line: {
            stroke: '#E5E7EB',
            strokeWidth: 1,
          },
        },
        axis: {
          domain: {
            line: {
              stroke: '#686A6F',
              strokeWidth: 1,
            },
          },
          ticks: {
            text: {
              fill: '#37383B',
              fontSize: 12,
            },
          },
        },
      }}
    />
  );
};

const GradeTrend = ({ transcript }: { transcript: any }) => {
  const [isGradeTrendOpen, setIsGradeTrendOpen] = useState(true);
  const [isSubjectTrendOpen, setIsSubjectTrendOpen] = useState(true);
  const [isGradeChangeOpen, setIsGradeChangeOpen] = useState(true);

  // 가장 낮은 값(가장 좋은 등급) 찾기 (같을 경우 전교과 우선)
  const getLowestGrade = () => {
    const grades = [
      {
        subject: '전교과',
        grade: transcript?.allAverageGrade,
      },
      {
        subject: '국영수사과',
        grade: transcript?.combinationAverageRankGrade?.국영수사과,
      },
      {
        subject: '국영수사',
        grade: transcript?.combinationAverageRankGrade?.국영수사,
      },
      {
        subject: '국영수과',
        grade: transcript?.combinationAverageRankGrade?.국영수과,
      },
    ];

    // 유효한 등급만 필터링 (null, undefined 제외)
    const validGrades = grades.filter(
      (item) => item.grade !== null && item.grade !== undefined
    );

    if (validGrades.length === 0) return { subject: '국영수사과', grade: null };

    // 숫자로 변환하여 가장 작은 값(가장 좋은 등급) 찾기
    const numericGrades = validGrades.map((item) => ({
      ...item,
      numericGrade:
        typeof item.grade === 'number'
          ? item.grade
          : parseFloat(String(item.grade)) || 0,
    }));

    // NaN 제외
    const validNumericGrades = numericGrades.filter(
      (item) => !isNaN(item.numericGrade)
    );

    if (validNumericGrades.length === 0)
      return { subject: '국영수사과', grade: null };

    // 가장 작은 값 찾기
    const minGrade = Math.min(
      ...validNumericGrades.map((item) => item.numericGrade)
    );

    // 같은 값이 여러 개 있을 경우 전교과 우선
    const lowestGradeItem =
      validNumericGrades.find(
        (item) => item.numericGrade === minGrade && item.subject === '전교과'
      ) || validNumericGrades.find((item) => item.numericGrade === minGrade);

    return {
      subject: lowestGradeItem?.subject ?? '국영수사과',
      grade: lowestGradeItem?.grade ?? null,
    };
  };

  const lowestGradeInfo = getLowestGrade();

  // 교과 조합별 학기별 평균 계산 함수
  const calculateSubjectTrend = (
    subjectNames: string[],
    allSubjects: any[]
  ) => {
    const semesters = [
      { semester: '1-1', grade: '1학년', semesterNum: '1학기' },
      { semester: '1-2', grade: '1학년', semesterNum: '2학기' },
      { semester: '2-1', grade: '2학년', semesterNum: '1학기' },
      { semester: '2-2', grade: '2학년', semesterNum: '2학기' },
      { semester: '3-1', grade: '3학년', semesterNum: '1학기' },
      { semester: '3-2', grade: '3학년', semesterNum: '2학기' },
    ];

    const result = semesters.map((sem) => {
      const records: any[] = [];

      // subjectNames가 비어있으면 모든 교과 포함, 아니면 지정된 교과만 포함
      const subjectsToProcess =
        !subjectNames || subjectNames.length === 0
          ? allSubjects || []
          : allSubjects?.filter((item) =>
              subjectNames.includes(item.category)
            ) || [];

      // 각 교과의 레코드 찾기 (학년/학기만 맞춤)
      subjectsToProcess.forEach((coreSubject: any) => {
        if (coreSubject?.subjects) {
          coreSubject.subjects.forEach((subj: any) => {
            if (subj.records) {
              subj.records.forEach((rec: any) => {
                if (
                  rec.grade === sem.grade &&
                  rec.semester === sem.semesterNum &&
                  typeof rec.rankGrade === 'number' &&
                  !isNaN(rec.rankGrade)
                ) {
                  records.push(rec.rankGrade);
                }
              });
            }
          });
        }
      });

      // 평균 계산 (없으면 0)
      const average =
        records.length > 0
          ? records.reduce((sum, grade) => sum + grade, 0) / records.length
          : 0;

      return {
        semester: sem.semester,
        grade: average,
        year: parseInt(sem.grade.replace('학년', '')) || 1,
      };
    });

    return result;
  };

  // 체육·교양 전용 성적 추이 계산 함수
  const calculatePhysicalArtTrend = (physicalArtSubjects: any[]) => {
    const semesters = [
      { semester: '1-1', grade: '1학년', semesterNum: '1학기' },
      { semester: '1-2', grade: '1학년', semesterNum: '2학기' },
      { semester: '2-1', grade: '2학년', semesterNum: '1학기' },
      { semester: '2-2', grade: '2학년', semesterNum: '2학기' },
      { semester: '3-1', grade: '3학년', semesterNum: '1학기' },
      { semester: '3-2', grade: '3학년', semesterNum: '2학기' },
    ];

    const result = semesters.map((sem) => {
      const records: any[] = [];
      console.log('physicalArtSubjects', physicalArtSubjects);
      // physicalArtSubjects 배열 순회
      if (physicalArtSubjects && Array.isArray(physicalArtSubjects)) {
        physicalArtSubjects.forEach((categoryItem: any) => {
          // 각 카테고리의 subjects 배열 순회
          if (categoryItem?.subjects && Array.isArray(categoryItem.subjects)) {
            categoryItem.subjects.forEach((subj: any) => {
              console.log('subj', subj);
              // 각 subject의 records 배열 순회
              if (subj.records && Array.isArray(subj.records)) {
                subj.records.forEach((rec: any) => {
                  console.log('rec', rec);
                  if (
                    rec.grade === sem.grade &&
                    rec.semester === sem.semesterNum &&
                    typeof rec.rankGrade === 'number' &&
                    !isNaN(rec.rankGrade)
                  ) {
                    records.push(rec.rankGrade);
                  }
                });
              }
            });
          }
        });
      }
      console.log('records', records);
      // 평균 계산 (없으면 0)
      const average =
        records.length > 0
          ? records.reduce((sum, grade) => sum + grade, 0) / records.length
          : 0;

      return {
        semester: sem.semester,
        grade: average,
        year: parseInt(sem.grade.replace('학년', '')) || 1,
      };
    });

    return result;
  };

  // 전체 평균 계산
  const calculateOverallAverage = (data: any[]) => {
    if (!data || data.length === 0) return 0;
    const validGrades = data
      .map((item) => item?.grade)
      .filter(
        (grade) =>
          grade !== null &&
          grade !== undefined &&
          !isNaN(grade) &&
          typeof grade === 'number' &&
          grade > 0
      );
    if (validGrades.length === 0) return 0;
    return (
      validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length
    );
  };

  // 각 타이틀별 데이터 계산
  const 국수과Data = calculateSubjectTrend(
    ['국어', '수학', '과학'],
    transcript?.coreSubjects
  );
  const 영사과Data = calculateSubjectTrend(
    ['영어', '사회', '과학'],
    transcript?.coreSubjects
  );
  const 수과사Data = calculateSubjectTrend(
    ['수학', '과학', '사회'],
    transcript?.coreSubjects
  );
  const 사회과학Data = calculateSubjectTrend(
    ['사회', '과학'],
    transcript?.coreSubjects
  );
  const 체육교양Data = calculatePhysicalArtTrend(
    transcript?.physicalArtSubjects || []
  );
  const 전교과Data = calculateSubjectTrend(
    transcript?.coreSubjects?.map((item: any) => item.category) || [],
    transcript?.coreSubjects
  );

  return (
    <div className='flex flex-col gap-[32px] '>
      <div className='max-[745px]:px-[20px]'>
        <button
          onClick={() => setIsGradeTrendOpen(!isGradeTrendOpen)}
          className='flex items-center justify-between w-full mb-[24px] max-[745px]:px-[20px]'
        >
          <h3 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] '>
            교과별 등급추이
          </h3>
          <Image
            src='/Images/icon-arrow-24.svg'
            alt='arrow'
            width={24}
            height={24}
            className={`transition-transform ${
              isGradeTrendOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        {isGradeTrendOpen && (
          <>
            {/* 상단 섹션 */}
            <div className='grid grid-cols-2 gap-[24px] mb-[24px] max-md:grid-cols-1'>
              {/* 왼쪽: 교과별 등급 리스트 */}
              <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px]'>
                <h3 className='text-[16px] font-[600] leading-[1.3] text-[var(--n-800)] mb-[16px]'>
                  성적
                </h3>
                <div className='flex flex-col gap-[12px]'>
                  {[
                    {
                      subject: lowestGradeInfo.subject,
                      grade: lowestGradeInfo.grade ?? '-',
                      highlight: true,
                    },
                    {
                      subject: '전교과',
                      grade: transcript?.allAverageGrade,
                      highlight: false,
                    },
                    {
                      subject: '국영수사과',
                      grade:
                        transcript?.combinationAverageRankGrade?.국영수사과,
                      highlight: false,
                    },
                    {
                      subject: '국영수사',
                      grade: transcript?.combinationAverageRankGrade?.국영수사,
                      highlight: false,
                    },
                    {
                      subject: '국영수과',
                      grade: transcript?.combinationAverageRankGrade?.국영수과,
                      highlight: false,
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className='flex items-center justify-between'>
                        <span className='text-[15px] font-[400] text-[var(--n-800)]'>
                          {item.subject}
                        </span>
                        <span
                          className={` font-[500] ${
                            item.highlight
                              ? 'text-[20px] text-[#F11]'
                              : 'text-[15px] text-[var(--n-800)]'
                          }`}
                        >
                          {item.grade}등급
                        </span>
                      </div>
                      {index === 0 && (
                        <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 교과별 내신 성적 막대 차트 */}
              <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px] max-[745px]:px-[20px]'>
                <h3 className='text-[18px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[16px]'>
                  교과별 내신 성적
                </h3>
                <div className='h-[175px] w-[377px] max-[745px]:w-full'>
                  <GradeBarChart coreSubjects={transcript?.coreSubjects} />
                </div>
              </div>
            </div>

            {/* 하단: 성적추이 라인 차트 */}
            <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px]'>
              <div className='flex items-center justify-between mb-[16px] max-[745px]:flex-col max-[745px]:items-start max-[745px]:gap-[20px]'>
                <h3 className='text-[18px] font-[700] leading-[1.3] text-[var(--n-800)]'>
                  성적추이
                </h3>
                <div className='flex items-center gap-0'>
                  {[
                    { id: '전교과', color: '#D93025' },
                    { id: '국영수사과', color: '#F6432B' },
                    { id: '국영수사', color: '#F7A39F' },
                    { id: '국명수과', color: '#FFCDD0' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className='flex items-center gap-[4px] px-[8px]'
                    >
                      <div
                        className='w-[12px] h-[12px] rounded-[2px]'
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className='text-[12px] font-[400] leading-[1.3] text-[var(--n-800)] whitespace-nowrap'>
                        {item.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='h-[171px] w-[818px] max-[745px]:w-[297px] '>
                <GradeLineChart transcript={transcript} />
              </div>
            </div>
          </>
        )}
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)] max-[745px]:w-[calc(100%-40px)] max-[745px]:mx-auto'></div>
      <div>
        {/* 교과별 성적 추이도 */}
        <button
          onClick={() => setIsSubjectTrendOpen(!isSubjectTrendOpen)}
          className='flex items-center justify-between w-full mb-[24px] max-[745px]:px-[20px]'
        >
          <h3 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)]'>
            교과별 성적 추이도
          </h3>
          <Image
            src='/Images/icon-arrow-24.svg'
            alt='arrow'
            width={24}
            height={24}
            className={`transition-transform ${
              isSubjectTrendOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        {isSubjectTrendOpen && (
          <>
            <p className='text-[15px] font-[400] text-[var(--n-600)] mb-[24px] max-[745px]:px-[20px]'>
              주요 교과 조합별 성적 현황
            </p>

            {/* 범례 */}

            {/* 차트 그리드 */}
            <div className='grid grid-cols-2 gap-[24px] max-md:grid-cols-1 max-[745px]:px-[20px]'>
              <SubjectTrendChart
                title='국·수·과'
                average={calculateOverallAverage(국수과Data)}
                data={국수과Data}
              />
              <SubjectTrendChart
                title='영·사·과'
                average={calculateOverallAverage(영사과Data)}
                data={영사과Data}
              />
              <SubjectTrendChart
                title='수·과·사'
                average={calculateOverallAverage(수과사Data)}
                data={수과사Data}
              />
              <SubjectTrendChart
                title='사회·과학'
                subtitle='(진학·수시탐색)'
                average={calculateOverallAverage(사회과학Data)}
                data={사회과학Data}
              />
              <SubjectTrendChart
                title='체육·교양'
                average={calculateOverallAverage(체육교양Data)}
                data={체육교양Data}
              />
              <SubjectTrendChart
                title='전교과'
                average={calculateOverallAverage(전교과Data)}
                data={전교과Data}
              />
            </div>
          </>
        )}
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)] max-[745px]:w-[calc(100%-40px)] max-[745px]:mx-auto'></div>
      <div>
        {/* 교과별 성적 변화율 */}
        <div className='overflow-hidden'>
          {/* 헤더 */}
          <button
            onClick={() => setIsGradeChangeOpen(!isGradeChangeOpen)}
            className='flex items-center justify-between w-full py-[12px] max-[745px]:px-[20px]'
          >
            <h3 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)]'>
              교과별 성적 변화율
            </h3>
            <Image
              src='/Images/icon-arrow-24.svg'
              alt='arrow'
              width={24}
              height={24}
              className={`transition-transform ${
                isGradeChangeOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>

          {/* 과목별 테이블 */}
          {isGradeChangeOpen && (
            <div className='flex flex-col gap-[24px]'>
              <GradeChangeTable
                subject='국어'
                change1_2='-1.1%'
                tooltipType='tag'
                data={transcript?.coreSubjects?.filter(
                  (subject: any) => subject.category === '국어'
                )}
              />
              <GradeChangeTable
                subject='영어'
                change1_2='-1.1%'
                tooltipType='memo'
                data={transcript?.coreSubjects?.filter(
                  (subject: any) => subject.category === '영어'
                )}
              />
              <GradeChangeTable
                subject='수학'
                change1_2='-1.1%'
                data={transcript?.coreSubjects?.filter(
                  (subject: any) => subject.category === '수학'
                )}
              />
              <GradeChangeTable
                subject='사회'
                change1_2='-1.1%'
                data={transcript?.coreSubjects?.filter(
                  (subject: any) => subject.category === '사회'
                )}
              />
              <GradeChangeTable
                subject='과학'
                change1_2='0.0%'
                data={transcript?.coreSubjects?.filter(
                  (subject: any) => subject.category === '과학'
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradeTrend;
