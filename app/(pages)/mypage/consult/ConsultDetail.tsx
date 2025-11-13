'use client';

import { getConsultDetail, getConsultList } from '@/app/api/consult';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Attendance from './Attendance';
import BehaviorOption from './BehaviorOption';
import CreativeActivity from './CreativeActivity';
import GradeTrend from './GradeTrend';
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

const ConsultDetail = ({ id }: { id: string }) => {
  const [activeSection, setActiveSection] = useState('grade-trend');
  const [consultData, setConsultData] = useState<any | null>(null);

  const content = contentMap[activeSection];

  const [consultDetails, setConsultDetails] = useState<any | null>(null);
  useEffect(() => {
    const fetchConsultDetail = async () => {
      const res = await getConsultDetail(id);
      console.log(res.data.processed_data);
      setConsultDetails(res.data.processed_data);
    };
    fetchConsultDetail();
  }, [id]);

  useEffect(() => {
    const getList = async () => {
      const res = await getConsultList();

      const filteredList = res.data.filter((item: any) => item.id === id);

      if (filteredList[0]) {
        setConsultData(filteredList[0]);
      }
    };
    getList();
  }, [id]);

  // API 상태값을 컴포넌트에서 사용하는 상태값으로 매핑
  const getStatusValue = (status: string | undefined | null) => {
    if (!status) return '';
    switch (status.toUpperCase()) {
      case 'UPLOADED':
        return 'uploaded';
      case 'PARSING':
        return 'in-progress';
      case 'PARSED':
        return 'in-progress';
      case 'ANALYZING':
        return 'in-progress';
      case 'READY_FOR_REVIEW':
        return 'complete';
      case 'UNDER_REVIEW':
        return 'in-progress';
      case 'COMPLETED':
        return 'complete';
      case 'FAILED':
        return 'cancelled';
      case 'PROCESSING':
        return 'in-progress';
      default:
        return status.toLowerCase();
    }
  };

  // 상태값을 한글로 변환
  const getStatusLabel = (status: string | undefined | null) => {
    if (!status) return '-';
    const statusValue = getStatusValue(status);
    switch (statusValue) {
      case 'uploaded':
        return '업로드됨';
      case 'in-progress':
        return '검토중';
      case 'complete':
        return '완료';
      case 'cancelled':
        return '취소됨';
      default:
        return status;
    }
  };

  return (
    <div className='px-[144px] max-[745px]:px-[0]'>
      <div className='flex gap-[24px] max-[745px]:flex-col max-[745px]:gap-[0px]'>
        <aside className='w-[270px] flex-shrink-0 max-[745px]:w-full'>
          <LeftMenu
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </aside>
        <main className='flex-1 '>
          {/* 헤더 영역 */}
          <div className='mb-[32px]'>
            {/* 뒤로가기 */}
            <button className='flex items-center gap-[4px] text-[15px] text-[var(--n-600)] bg-[var(--n-50)] h-[41px] px-[16px] rounded-[1000px] max-[745px]:hidden'>
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
            <div className='mt-[32px] max-[745px]:mt-[72px]'>
              {/* 모바일 레이아웃 (745px 이하) */}
              <div className='hidden max-[745px]:block max-[745px]:px-[20px]'>
                <h1 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[12px]'>
                  {consultDetails?.studentInformation?.name}
                </h1>
                {/* 상세 정보 */}
                <div className='flex items-center gap-[8px] text-[15px] text-[var(--n-600)] mb-[12px]'>
                  <p className='flex items-center justify-center gap-[8px]'>
                    <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                      컨설턴트
                    </span>
                    <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]'>
                      {consultData?.assigned_consultant?.full_name || '미배정'}
                    </span>
                  </p>
                  <span className='w-[1px] h-[12px] bg-[var(--n-300)]'></span>
                  <p className='flex items-center justify-center gap-[8px]'>
                    <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                      컨설팅
                    </span>
                    <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]'>
                      {getStatusLabel(consultData?.assigned_consultant?.status)}
                    </span>
                  </p>
                  <span className='w-[1px] h-[12px] bg-[var(--n-300)]'></span>
                  <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                    {consultData?.created_at
                      ? consultData.created_at.split('T')[0]
                      : '-'}
                  </span>
                </div>
                {/* 버튼 */}
                <div className='flex gap-[8px]'>
                  <button className='px-[16px] py-[8px] text-[15px] font-[500] text-[var(--r-400)] border border-[var(--r-400)] rounded-[100px] h-[40px]'>
                    신청취소
                  </button>
                </div>
              </div>

              {/* 데스크톱 레이아웃 (745px 이상) */}
              <div className='max-[745px]:hidden flex items-start justify-between mb-[12px]'>
                <h1 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)] '>
                  {consultDetails?.studentInformation?.name}(
                  {consultDetails?.studentInformation?.grade})
                </h1>
                <div className='flex gap-[8px]'>
                  <button className='px-[16px] py-[8px] text-[15px] font-[500] text-[var(--r-400)] border border-[var(--r-400)] rounded-[100px] h-[40px]'>
                    신청취소
                  </button>
                </div>
              </div>

              {/* 상세 정보 (데스크톱 - 745px 이상) */}
              <div className='max-[745px]:hidden flex items-center gap-[8px] text-[15px] text-[var(--n-600)]'>
                <p className='flex items-center justify-center gap-[8px]'>
                  <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                    컨설턴트
                  </span>
                  <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]'>
                    {consultData?.assigned_consultant?.full_name || '미배정'}
                  </span>
                </p>
                <span className='w-[1px] h-[12px] bg-[var(--n-300)]'></span>
                <p className='flex items-center justify-center gap-[8px]'>
                  <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                    컨설팅
                  </span>
                  <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]'>
                    {getStatusLabel(consultData?.assigned_consultant?.status)}
                  </span>
                </p>
                <span className='w-[1px] h-[12px] bg-[var(--n-300)]'></span>
                <span className='text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]'>
                  {consultData?.created_at
                    ? consultData.created_at.split('T')[0]
                    : '-'}
                </span>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className='w-full h-[1px] bg-[var(--n-200)] mb-[32px] max-[745px]:w-[calc(100%-40px)] max-[745px]:mx-auto'></div>

          {/* 컨텐츠 영역 */}
          {activeSection === 'grade-trend' && (
            <GradeTrend transcript={consultDetails?.transcript} />
          )}
          {activeSection === 'subject-grade' && (
            <SubjectGrade
              coreSubjects={consultDetails?.transcript?.coreSubjects}
              physicalArtSubjects={
                consultDetails?.transcript?.physicalArtSubjects
              }
              careerSubjects={consultDetails?.transcript?.careerSubjects}
            />
          )}
          {activeSection === 'learning-development' && (
            <div>
              <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px] max-[745px]:px-[20px]'>
                {content.title}
              </h2>

              {/* 학년별 테이블 */}
              {['1학년', '2학년', '3학년'].map((grade, gradeIndex) => (
                <LearningDevelopment
                  key={gradeIndex}
                  grade={grade}
                  detailedCharacteristics={
                    consultDetails?.detailedCharacteristics
                  }
                />
              ))}
            </div>
          )}
          {activeSection === 'creative-activity' && (
            <CreativeActivity
              creativeExperiences={consultDetails?.creativeExperiences}
            />
          )}
          {activeSection === 'behavior-opinion' && (
            <BehaviorOption
              behavioralCharacteristics={
                consultDetails?.behavioralCharacteristics
              }
            />
          )}
          {activeSection === 'attendance' && (
            <Attendance
              volunteerActivities={consultDetails?.volunteerActivities}
              attendance={consultDetails?.attendance}
              certifications={consultDetails?.certifications}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default ConsultDetail;
