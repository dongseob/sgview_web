'use client';

import Image from 'next/image';
import { useState } from 'react';
import Attendance from './Attendance';
import BehaviorOption from './BehaviorOption';
import CreativeActivity from './CreativeActivity';
import LearningDevelopment from './LearningDevelopment';
import LeftMenu from './LeftMenu';
import SubjectGrade from './SubjectGrade';

const contentMap: Record<string, { title: string; description: string }> = {
  'grade-trend': {
    title: '교과별 등급추이',
    description: '교과별 등급 추이를 확인할 수 있습니다.',
  },
  'subject-grade': {
    title: '교과성적',
    description: '교과 성적을 확인할 수 있습니다.',
  },
  'learning-development': {
    title: '교과학습발달',
    description: '교과 학습 발달 상황을 확인할 수 있습니다.',
  },
  'creative-activity': {
    title: '창의적 체험활동',
    description: '창의적 체험활동 내역을 확인할 수 있습니다.',
  },
  'behavior-opinion': {
    title: '행동특성 및 종합의견',
    description: '행동특성 및 종합의견을 확인할 수 있습니다.',
  },
  attendance: {
    title: '출결/자격증/봉사',
    description: '출결, 자격증, 봉사활동 내역을 확인할 수 있습니다.',
  },
};

const ConsultDetail = () => {
  const [activeSection, setActiveSection] = useState('subject-grade');
  const content = contentMap[activeSection];

  return (
    <div className='flex gap-[24px] max-md:flex-col max-md:gap-[24px]'>
      <aside className='w-[270px] flex-shrink-0 max-md:w-full'>
        <LeftMenu
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </aside>
      <main className='flex-1'>
        {/* 헤더 영역 */}
        <div className='mb-[32px]'>
          {/* 뒤로가기 */}
          <button className='flex items-center gap-[4px] text-[15px] text-[var(--n-600)] bg-[var(--n-50)] h-[41px] px-[16px] rounded-[1000px]'>
            <Image
              src='/Images/icon-left-arrow-16.svg'
              alt='arrow-left'
              width={16}
              height={16}
            />
            <span className='text-[16px] font-[500] text-[var(--n-600)]'>
              나의 컨설팅
            </span>
          </button>

          {/* 컨설팅 정보 */}
          <div className='flex items-start justify-between mb-[12px] mt-[32px]'>
            <h1 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
              이*희(고3)
            </h1>
            <div className='flex gap-[8px]'>
              <button className='px-[16px] py-[8px] text-[15px] font-[500] text-[var(--n-800)] border border-[var(--n-300)] rounded-[100px] h-[40px]'>
                정보수정
              </button>
              <button className='px-[16px] py-[8px] text-[15px] font-[500] text-[var(--r-400)] border border-[var(--r-400)] rounded-[100px] h-[40px]'>
                삭제
              </button>
            </div>
          </div>

          {/* 상세 정보 */}
          <div className='flex items-center gap-[8px] text-[15px] text-[var(--n-600)]'>
            <p className='flex items-center justify-center gap-[8px]'>
              <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                컨설턴트
              </span>
              <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]'>
                이지나
              </span>
            </p>
            <span className='w-[1px] h-[12px] bg-[var(--n-300)]'></span>
            <p className='flex items-center justify-center gap-[8px]'>
              <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                컨설팅
              </span>
              <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]'>
                검토중
              </span>
            </p>
            <span className='w-[1px] h-[12px] bg-[var(--n-300)]'></span>
            <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
              2025.11.1
            </span>
          </div>
        </div>

        {/* 구분선 */}
        <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px]'></div>

        {/* 컨텐츠 영역 */}
        {activeSection === 'subject-grade' && <SubjectGrade />}
        {activeSection === 'learning-development' && (
          <div>
            <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]'>
              {content.title}
            </h2>

            {/* 학년별 테이블 */}
            {['1학년', '2학년', '3학년'].map((grade, gradeIndex) => (
              <LearningDevelopment key={gradeIndex} grade={grade} />
            ))}
          </div>
        )}
        {activeSection === 'creative-activity' && <CreativeActivity />}
        {activeSection === 'behavior-opinion' && <BehaviorOption />}
        {activeSection === 'attendance' && <Attendance />}
      </main>
    </div>
  );
};

export default ConsultDetail;
