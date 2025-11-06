import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import Image from 'next/image';
import { useState } from 'react';
// 교과별 성적 변화율 테이블 컴포넌트
const GradeChangeTable = ({
  subject,
  change1_2,
}: {
  subject: string;
  change1_2: string; // 1-2학기 성적변화
}) => {
  const getChangeColor = (change: string) => {
    if (change === '-') return 'text-[var(--n-800)]';
    if (change.startsWith('-')) return 'text-[#0066CC]';
    if (change.startsWith('+')) return 'text-[#D93025]';
    return 'text-[var(--n-800)]';
  };

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
                {subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                1-1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                89
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                16.1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                B
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                3
              </td>
              <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
            </tr>
            {/* 1-2학기 */}
            <tr>
              <td className='border border-[var(--n-200)] px-[8px] border-l-0 py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                1-2
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                89
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                16.1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                B
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                3
              </td>
              <td
                className={`border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] ${getChangeColor(
                  change1_2
                )} text-center`}
              >
                {change1_2}
              </td>
            </tr>
            {/* 2-1학기 */}
            <tr>
              <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                2-1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                {subject}
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                89
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                16.1
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                B
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                3
              </td>
              <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[#D93025] text-center'>
                +9.1%
              </td>
            </tr>
            {/* 평균 행 */}
            <tr className='bg-[var(--n-50)]'>
              <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                평균
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                91
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
              <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                2.3
              </td>
              <td className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center'>
                -
              </td>
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
  const chartData = data.map((item) => ({
    semester: item.semester,
    grade: item.grade,
  }));

  const getColor = (year: number) => {
    if (year === 1) return '#FFB3BA';
    if (year === 2) return '#FF6B6B';
    return '#D32F2F';
  };

  // 커스텀 레이블 레이어 (막대 위에 숫자 표시)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomBarLabels = (props: any) => {
    const { bars } = props;
    return (
      <g>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {bars.map((bar: any) => {
          const value = bar.data.data.grade;
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
              {value.toFixed(1)}
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
          {title} 평균: {average.toFixed(2)} 등급
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
          data={chartData.map((item, index) => ({
            ...item,
            year: data[index].year,
          }))}
          keys={['grade']}
          indexBy='semester'
          margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
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
          isInteractive={false}
          role='application'
          ariaLabel={`${title} 성적 추이 차트`}
        />
      </div>
    </div>
  );
};

// 교과별 내신 성적 막대 차트
const GradeBarChart = () => {
  const data = [
    { subject: '국어', grade: 3.3 },
    { subject: '영어', grade: 5.5 },
    { subject: '수학', grade: 4.7 },
    { subject: '사회', grade: 6.1 },
    { subject: '과학', grade: 5.0 },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['grade']}
      indexBy='subject'
      margin={{ top: 20, right: 20, bottom: 50, left: 30 }}
      padding={0.4}
      valueScale={{ type: 'linear', min: 0, max: 9 }}
      indexScale={{ type: 'band', round: true }}
      colors={['#F6432B']}
      borderRadius={0}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 46,
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
      }}
      gridYValues={[1.5, 3.0, 4.5, 6.0, 7.5, 9.0]}
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
              gap: 12,
              fontFamily: 'inherit',
            },
          },
        },
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableLabel={false}
      isInteractive={false}
      role='application'
      ariaLabel='교과별 내신 성적 차트'
    />
  );
};

// 성적추이 라인 차트
const GradeLineChart = () => {
  const data = [
    {
      id: '전교과',
      color: '#D32F2F',
      data: [
        { x: '1-1학기', y: 5.7 },
        { x: '1-2학기', y: 6.8 },
        { x: '2-1학기', y: 2.9 },
        { x: '2-2학기', y: 4.8 },
        { x: '3-1학기', y: 3.5 },
        { x: '3-2학기', y: 4.8 },
      ],
    },
    {
      id: '국영수사과',
      color: '#F44336',
      data: [
        { x: '1-1학기', y: 6.0 },
        { x: '1-2학기', y: 7.1 },
        { x: '2-1학기', y: 3.5 },
        { x: '2-2학기', y: 5.2 },
        { x: '3-1학기', y: 3.8 },
        { x: '3-2학기', y: 5.3 },
      ],
    },
    {
      id: '국영수사',
      color: '#E91E63',
      data: [
        { x: '1-1학기', y: 6.2 },
        { x: '1-2학기', y: 7.5 },
        { x: '2-1학기', y: 3.8 },
        { x: '2-2학기', y: 5.6 },
        { x: '3-1학기', y: 4.0 },
        { x: '3-2학기', y: 5.7 },
      ],
    },
    {
      id: '국명수과',
      color: '#F8BBD0',
      data: [
        { x: '1-1학기', y: 6.5 },
        { x: '1-2학기', y: 7.8 },
        { x: '2-1학기', y: 4.0 },
        { x: '2-2학기', y: 5.9 },
        { x: '3-1학기', y: 4.2 },
        { x: '3-2학기', y: 6.0 },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={
        { type: 'point', padding: 0.7 } as unknown as {
          type: 'point';
          padding?: number;
        }
      }
      yScale={{
        type: 'linear',
        min: 3.0,
        max: 7.5,
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
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -50,
        format: (value) => value.toFixed(1),
        tickValues: [3.0, 4.5, 6.0, 7.5],
      }}
      gridYValues={[3.0, 4.5, 6.0, 7.5]}
      lineWidth={2}
      pointSize={6}
      pointColor={{ from: 'serieColor' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enablePointLabel={false}
      enableArea={false}
      useMesh={true}
      legends={[
        {
          anchor: 'top-right',
          direction: 'row',
          justify: true,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: '#D93025',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
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

const GradeTrend = () => {
  const [isGradeTrendOpen, setIsGradeTrendOpen] = useState(true);
  const [isSubjectTrendOpen, setIsSubjectTrendOpen] = useState(true);
  const [isGradeChangeOpen, setIsGradeChangeOpen] = useState(true);

  return (
    <div className='flex flex-col gap-[32px]'>
      <div>
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
            <div className='grid grid-cols-2 gap-[24px] mb-[24px] max-md:grid-cols-1 max-[745px]:px-[20px]'>
              {/* 왼쪽: 교과별 등급 리스트 */}
              <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px]'>
                <h3 className='text-[16px] font-[600] leading-[1.3] text-[var(--n-800)] mb-[16px]'>
                  성적
                </h3>
                <div className='flex flex-col gap-[12px]'>
                  {[
                    {
                      subject: '국영수사과',
                      grade: '2.74',
                      highlight: true,
                    },
                    {
                      subject: '전교과',
                      grade: '2.75',
                      highlight: false,
                    },
                    {
                      subject: '국영수사과',
                      grade: '2.74',
                      highlight: false,
                    },
                    {
                      subject: '국영수사',
                      grade: '2.12',
                      highlight: false,
                    },
                    {
                      subject: '국영수과',
                      grade: '2.24',
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
              <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px]'>
                <h3 className='text-[18px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[16px]'>
                  교과별 내신 성적
                </h3>
                <div className='h-[175px] w-[377px] max-[745px]:w-full'>
                  <GradeBarChart />
                </div>
              </div>
            </div>

            {/* 하단: 성적추이 라인 차트 */}
            <div className='bg-white rounded-[8px] border border-[var(--n-200)] p-[24px] max-[745px]:px-[20px]'>
              <h3 className='text-[18px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[16px]'>
                성적추이
              </h3>
              <div className='h-[171px]'>
                <GradeLineChart />
              </div>
            </div>
          </>
        )}
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
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
                average={3.33}
                data={[
                  { semester: '1-1', grade: 3.3, year: 1 },
                  { semester: '1-2', grade: 3.0, year: 1 },
                  { semester: '2-1', grade: 2.5, year: 2 },
                  { semester: '2-2', grade: 2.5, year: 2 },
                  { semester: '3-1', grade: 2.8, year: 3 },
                ]}
              />
              <SubjectTrendChart
                title='영·사·과'
                average={3.88}
                data={[
                  { semester: '1-1', grade: 3.3, year: 1 },
                  { semester: '1-2', grade: 3.0, year: 1 },
                  { semester: '2-1', grade: 2.5, year: 2 },
                  { semester: '2-2', grade: 2.5, year: 2 },
                  { semester: '3-1', grade: 2.8, year: 3 },
                ]}
              />
              <SubjectTrendChart
                title='수·과·사'
                average={3.28}
                data={[
                  { semester: '1-1', grade: 3.3, year: 1 },
                  { semester: '1-2', grade: 3.0, year: 1 },
                  { semester: '2-1', grade: 2.5, year: 2 },
                  { semester: '2-2', grade: 2.5, year: 2 },
                  { semester: '3-1', grade: 2.8, year: 3 },
                ]}
              />
              <SubjectTrendChart
                title='사회·과학'
                subtitle='(진학·수시탐색)'
                average={3.33}
                data={[
                  { semester: '1-1', grade: 3.3, year: 1 },
                  { semester: '1-2', grade: 3.0, year: 1 },
                  { semester: '2-1', grade: 2.5, year: 2 },
                  { semester: '2-2', grade: 2.5, year: 2 },
                  { semester: '3-1', grade: 2.8, year: 3 },
                ]}
              />
              <SubjectTrendChart
                title='체육·교양'
                average={3.84}
                data={[
                  { semester: '1-1', grade: 3.3, year: 1 },
                  { semester: '2-1', grade: 2.5, year: 2 },
                  { semester: '3-1', grade: 2.8, year: 3 },
                ]}
              />
              <SubjectTrendChart
                title='전교과'
                average={3.33}
                data={[
                  { semester: '1-1', grade: 3.3, year: 1 },
                  { semester: '1-2', grade: 3.0, year: 1 },
                  { semester: '2-1', grade: 2.5, year: 2 },
                  { semester: '2-2', grade: 2.5, year: 2 },
                  { semester: '3-1', grade: 2.8, year: 3 },
                ]}
              />
            </div>
          </>
        )}
      </div>
      <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
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
              <GradeChangeTable subject='국어' change1_2='-1.1%' />
              <GradeChangeTable subject='영어' change1_2='-1.1%' />
              <GradeChangeTable subject='수학' change1_2='-1.1%' />
              <GradeChangeTable subject='사회' change1_2='-1.1%' />
              <GradeChangeTable subject='과학' change1_2='0.0%' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradeTrend;
