'use client';

import ModalScoreCenter from '@/app/component/Modal/ModalScoreCenter';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useState } from 'react';

const CreatableSelect = dynamic(() => import('react-select/creatable'), {
  ssr: false,
});

// 한국 대학교 리스트 (가나다순)
const universityOptions = [
  { value: '가톨릭대학교', label: '가톨릭대학교' },
  { value: '강릉원주대학교', label: '강릉원주대학교' },
  { value: '강원대학교', label: '강원대학교' },
  { value: '건국대학교', label: '건국대학교' },
  { value: '경북대학교', label: '경북대학교' },
  { value: '경희대학교', label: '경희대학교' },
  { value: '고려대학교', label: '고려대학교' },
  { value: '공주대학교', label: '공주대학교' },
  { value: '광운대학교', label: '광운대학교' },
  { value: '국민대학교', label: '국민대학교' },
  { value: '단국대학교', label: '단국대학교' },
  { value: '동국대학교', label: '동국대학교' },
  { value: '부산대학교', label: '부산대학교' },
  { value: '서강대학교', label: '서강대학교' },
  { value: '서울과학기술대학교', label: '서울과학기술대학교' },
  { value: '서울대학교', label: '서울대학교' },
  { value: '서울시립대학교', label: '서울시립대학교' },
  { value: '성균관대학교', label: '성균관대학교' },
  { value: '세종대학교', label: '세종대학교' },
  { value: '숙명여자대학교', label: '숙명여자대학교' },
  { value: '숭실대학교', label: '숭실대학교' },
  { value: '안동대학교', label: '안동대학교' },
  { value: '안산공과대학교', label: '안산공과대학교' },
  { value: '안산대학교', label: '안산대학교' },
  { value: '안양대학교', label: '안양대학교' },
  { value: '연세대학교', label: '연세대학교' },
  { value: '영남대학교', label: '영남대학교' },
  { value: '이화여자대학교', label: '이화여자대학교' },
  { value: '인천대학교', label: '인천대학교' },
  { value: '인하대학교', label: '인하대학교' },
  { value: '전남대학교', label: '전남대학교' },
  { value: '전북대학교', label: '전북대학교' },
  { value: '제주대학교', label: '제주대학교' },
  { value: '중앙대학교', label: '중앙대학교' },
  { value: '충남대학교', label: '충남대학교' },
  { value: '충북대학교', label: '충북대학교' },
  { value: '한국외국어대학교', label: '한국외국어대학교' },
  { value: '한국체육대학교', label: '한국체육대학교' },
  { value: '한양대학교', label: '한양대학교' },
  { value: '홍익대학교', label: '홍익대학교' },
];

// 주요 학과 리스트 (가나다순)
const majorOptions = [
  { value: '간호학과', label: '간호학과' },
  { value: '건축학과', label: '건축학과' },
  { value: '경영학과', label: '경영학과' },
  { value: '경제학과', label: '경제학과' },
  { value: '교육학과', label: '교육학과' },
  { value: '국어국문학과', label: '국어국문학과' },
  { value: '기계공학과', label: '기계공학과' },
  { value: '데이터사이언스학과', label: '데이터사이언스학과' },
  { value: '디자인학과', label: '디자인학과' },
  { value: '물리학과', label: '물리학과' },
  { value: '미디어커뮤니케이션학과', label: '미디어커뮤니케이션학과' },
  { value: '법학과', label: '법학과' },
  { value: '사회학과', label: '사회학과' },
  { value: '산업공학과', label: '산업공학과' },
  { value: '생명과학과', label: '생명과학과' },
  { value: '수학과', label: '수학과' },
  { value: '신소재공학과', label: '신소재공학과' },
  { value: '심리학과', label: '심리학과' },
  { value: '약학과', label: '약학과' },
  { value: '영어영문학과', label: '영어영문학과' },
  { value: '의예과', label: '의예과' },
  { value: '전기전자공학과', label: '전기전자공학과' },
  { value: '정치외교학과', label: '정치외교학과' },
  { value: '제약학과', label: '제약학과' },
  { value: '컴퓨터공학과', label: '컴퓨터공학과' },
  { value: '통계학과', label: '통계학과' },
  { value: '화학공학과', label: '화학공학과' },
  { value: '화학과', label: '화학과' },
  { value: '환경공학과', label: '환경공학과' },
];

const ConsultApply = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedUniversities, setSelectedUniversities] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedMajors, setSelectedMajors] = useState<
    { value: string; label: string }[]
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 폼 유효성 검사
  const isFormValid =
    selectedUniversities.length > 0 &&
    selectedMajors.length > 0 &&
    uploadedFile &&
    agreeTerms;

  // 모의고사 점수 상태
  const [scores, setScores] = useState({
    korean_subject: '',
    korean_standard: '',
    korean_percentile: '',
    korean_grade: '',
    math_subject: '',
    math_standard: '',
    math_percentile: '',
    math_grade: '',
    english_grade: '',
    history_grade: '',
    inquiry1_subject: '',
    inquiry1_standard: '',
    inquiry1_percentile: '',
    inquiry1_grade: '',
    inquiry2_subject: '',
    inquiry2_standard: '',
    inquiry2_percentile: '',
    inquiry2_grade: '',
    second_lang_grade: '',
  });

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };
  const [isOpenScore, setIsOpenScore] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <div className='pt-[40px] pb-[120px] max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px]'>
      <div className='w-[328px] mx-auto  flex flex-col items-center justify-center gap-[32px] max-md:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          입시컨설팅 신청
        </h3>
        <div className='flex flex-col gap-[24px] w-full'>
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              희망대학<span className='text-[#F6432B]'>*</span>
            </p>
            <CreatableSelect
              isMulti
              placeholder='희망대학 입력'
              value={selectedUniversities}
              onChange={(newValue) => {
                // 최대 3개 제한
                const universities = newValue as {
                  value: string;
                  label: string;
                }[];
                if (universities && universities.length <= 3) {
                  setSelectedUniversities(universities);
                }
              }}
              options={universityOptions}
              formatCreateLabel={(inputValue) => `"${inputValue}" 생성`}
              noOptionsMessage={({ inputValue }) =>
                inputValue
                  ? `"${inputValue}"에 대한 결과가 없습니다.`
                  : '검색어를 입력하세요.'
              }
              components={{
                DropdownIndicator: () => (
                  <div className='pr-[16px] flex items-center'>
                    <Image
                      src='/images/icon-arrow-24.svg'
                      alt='arrow'
                      width={24}
                      height={24}
                    />
                  </div>
                ),
              }}
              styles={{
                control: (base, state) => ({
                  ...base,
                  minHeight: '50px',
                  borderRadius: '8px',
                  borderColor: state.isFocused ? '#D7D8DC' : '#D7D8DC',
                  boxShadow: state.isFocused ? 'none' : 'none',
                  '&:hover': {
                    borderColor: '#D7D8DC',
                  },
                  cursor: 'text',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: '6px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#AFB0B6',
                }),
                input: (base) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#36373A',
                  margin: '0',
                  padding: '0',
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: 'transparent',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#36373A',
                  padding: '0',
                  paddingLeft: '0',
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: '#9CA3AF',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#F6432B',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: '8px',
                  marginTop: '4px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 10,
                }),
                menuList: (base) => ({
                  ...base,
                  padding: '8px',
                }),
                option: (base, state) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  cursor: 'pointer',
                  backgroundColor: state.isSelected
                    ? '#F6432B'
                    : state.isFocused
                    ? '#F3F4F6'
                    : 'white',
                  color: state.isSelected ? 'white' : '#36373A',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  '&:active': {
                    backgroundColor: '#F6432B',
                  },
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                clearIndicator: (base) => ({
                  ...base,
                  cursor: 'pointer',
                  color: '#9CA3AF',
                  padding: '0 8px',
                  '&:hover': {
                    color: '#F6432B',
                  },
                }),
              }}
            />
          </div>
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              희망학과<span className='text-[#F6432B]'>*</span>
            </p>
            <CreatableSelect
              isMulti
              placeholder='희망학과 입력'
              value={selectedMajors}
              onChange={(newValue) => {
                // 최대 3개 제한
                const majors = newValue as {
                  value: string;
                  label: string;
                }[];
                if (majors && majors.length <= 3) {
                  setSelectedMajors(majors);
                }
              }}
              options={majorOptions}
              formatCreateLabel={(inputValue) => `"${inputValue}" 생성`}
              noOptionsMessage={({ inputValue }) =>
                inputValue
                  ? `"${inputValue}"에 대한 결과가 없습니다.`
                  : '검색어를 입력하세요.'
              }
              components={{
                DropdownIndicator: () => (
                  <div className='pr-[16px] flex items-center'>
                    <Image
                      src='/images/icon-arrow-24.svg'
                      alt='arrow'
                      width={24}
                      height={24}
                    />
                  </div>
                ),
              }}
              styles={{
                control: (base, state) => ({
                  ...base,
                  minHeight: '50px',
                  borderRadius: '8px',
                  borderColor: state.isFocused ? '#D7D8DC' : '#D7D8DC',
                  boxShadow: state.isFocused ? 'none' : 'none',
                  '&:hover': {
                    borderColor: '#D7D8DC',
                  },
                  cursor: 'text',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: '6px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#AFB0B6',
                }),
                input: (base) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#36373A',
                  margin: '0',
                  padding: '0',
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: 'transparent',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#36373A',
                  padding: '0',
                  paddingLeft: '0',
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: '#9CA3AF',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#F6432B',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: '8px',
                  marginTop: '4px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 10,
                }),
                menuList: (base) => ({
                  ...base,
                  padding: '8px',
                }),
                option: (base, state) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  cursor: 'pointer',
                  backgroundColor: state.isSelected
                    ? '#F6432B'
                    : state.isFocused
                    ? '#F3F4F6'
                    : 'white',
                  color: state.isSelected ? 'white' : '#36373A',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  '&:active': {
                    backgroundColor: '#F6432B',
                  },
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                clearIndicator: (base) => ({
                  ...base,
                  cursor: 'pointer',
                  color: '#9CA3AF',
                  padding: '0 8px',
                  '&:hover': {
                    color: '#F6432B',
                  },
                }),
              }}
            />
          </div>
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              최종 모의고사 점수
            </p>
            <button
              onClick={() => setIsOpenScore(true)}
              className='w-full h-[48px] px-[16px] py-[10px] border border-[#D7D8DC] rounded-[8px] text-[15px] font-medium text-[var(--n-800)]'
            >
              <span className='text-[var(--n-200)]'>✓</span> 점수 입력
            </button>
          </div>
          <div className='flex flex-col gap-[12px] w-full'>
            <div className='flex flex-col gap-[8px] w-full'>
              <p className='text-[#36373A] text-[13px] font-medium'>
                생활기록부 PDF 업로드
              </p>
              {uploadedFile && (
                <div className='border border-[var(--n-200)] rounded-[8px] py-[10px] px-[16px] flex items-center justify-between'>
                  <p className='text-[15px] leading-[1.4] font-[500]'>
                    {uploadedFile?.name}
                  </p>
                  <Image
                    src='/images/icon-close-24.svg'
                    alt='close'
                    width={24}
                    height={24}
                    className='cursor-pointer'
                    onClick={handleFileRemove}
                  />
                </div>
              )}
              <div className='flex flex-col gap-2'>
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='.pdf'
                  onChange={handleFileChange}
                  className='hidden'
                />
                {!uploadedFile && (
                  <button
                    type='button'
                    onClick={handleFileUpload}
                    className='rounded-[8px] border border-[var(--n-600)] h-[36px] text-[13px] font-[500] text-[var(--n-800)] max-w-[114px]'
                  >
                    첨부파일 업로드
                  </button>
                )}
              </div>
            </div>
            <ul>
              <li className='text-[var(--n-400)] text-[13px] leading-[1.4] font-[400] pl-4 relative before:content-["•"] before:absolute before:left-0'>
                나이스플러스에서 받은 생활기록부 PDF를 업로드하세요.
              </li>
            </ul>
            {uploadedFile && (
              <button
                type='button'
                onClick={handleFileUpload}
                className='rounded-[8px] border border-[var(--n-600)] h-[36px] text-[13px] font-[500] text-[var(--n-800)] max-w-[103px]'
              >
                첨부파일 수정
              </button>
            )}
          </div>
          <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='agree'
                id='agree'
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className='hidden'
              />
              <label
                htmlFor='agree'
                className='flex items-center gap-2 cursor-pointer'
              >
                <Image
                  src={
                    agreeTerms
                      ? '/images/checkbox_on.svg'
                      : '/images/checkbox_off.svg'
                  }
                  alt='checkbox'
                  width={24}
                  height={24}
                />
                <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>
                  [필수] 개인정보 수집 및 이용 동의
                </span>
              </label>
            </div>
            <span className='text-[14px] leading-[1.4] text-[var(--n-400)] underline'>
              보기
            </span>
          </div>
          <button
            disabled={!isFormValid}
            className={`${
              isFormValid
                ? 'bg-[var(--r-400)] text-white cursor-pointer'
                : 'bg-[var(--n-100)] text-[var(--n-400)] cursor-not-allowed'
            } rounded-[8px] h-[48px] w-full`}
            onClick={() => {
              if (!isFormValid) return;
              // TODO: 분석하기 로직
            }}
          >
            분석하기
          </button>
        </div>
      </div>
      <ModalScoreCenter
        isOpen={isOpenScore}
        onClose={() => setIsOpenScore(false)}
        title='최종 모의고사 점수'
        width='898px'
      >
        <p className='text-[13px] leading-[1.4] font-[400] text-[var(--n-600)] px-[20px] pt-[11px] pb-[17px]'>
          최종 모의고사 점수를 입력해주세요
        </p>
        <div className='flex flex-col gap-[20px] px-[20px] pb-[20px]  max-md:pr-[0]'>
          {/* 설명 텍스트 */}

          {/* 점수 테이블 */}
          <div className='w-full overflow-x-auto border-t border-[var(--n-800)] max-md:max-h-[60vh] max-md:overflow-y-auto'>
            <table className='w-full border-collapse'>
              <colgroup>
                <col className='w-[120px]' />
                <col className='w-[103px]' />
                <col className='w-[103px]' />
                <col className='w-[103px]' />
                <col className='w-[103px]' />
                <col className='w-[103px]' />
                <col className='w-[103px]' />
              </colgroup>
              <thead>
                <tr className='bg-[var(--n-50)]'>
                  <th className='border border-[var(--n-200)] text-left border-l-[0px] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[60px] max-md:min-w-[120px]'>
                    영역
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]'>
                    한국사
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]'>
                    국어
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]'>
                    수학
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]'>
                    영어
                  </th>
                  <th
                    colSpan={2}
                    className='border border-[var(--n-200)] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[100px] max-md:min-w-[206px]'
                  >
                    탐구
                  </th>
                  <th className='border border-[var(--n-200)] border-r-[0px] px-[8px] py-[10px] text-[13px] font-[500] text-[var(--n-800)] min-w-[100px] max-md:min-w-[103px]'>
                    제2외국어/한문
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 선택과목 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] '>
                    선택과목
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex items-center justify-center'>
                      <p className='text-[14px] font-[400] text-[var(--n-800)]'>
                        화법과 작문
                      </p>
                      {/* <input
                      type='text'
                      value={scores.korean_subject}
                      onChange={(e) =>
                        setScores({ ...scores, korean_subject: e.target.value })
                      }
                      placeholder='화법과 작문'
                      className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                    /> */}
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex items-center justify-center'>
                      <p className='text-[14px] font-[400] text-[var(--n-800)]'>
                        문학과 독서
                      </p>
                    </div>
                    {/* <input
                      type='text'
                      value={scores.math_subject}
                      onChange={(e) =>
                        setScores({ ...scores, math_subject: e.target.value })
                      }
                      placeholder='문학과 독서'
                      className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                    /> */}
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]  items-center justify-center'>
                      <p className='text-[14px] font-[400] text-[var(--n-800)]'>
                        경제와법
                      </p>

                      {/* <input
                        type='text'
                        value={scores.inquiry1_subject}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry1_subject: e.target.value,
                          })
                        }
                        placeholder='경제지리'
                        className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                      /> */}

                      {/* <input
                        type='text'
                        value={scores.inquiry2_subject}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_subject: e.target.value,
                          })
                        }
                        placeholder='사회 문화'
                        className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                      /> */}
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px] items-center justify-center'>
                      {/* <input
                        type='text'
                        value={scores.inquiry1_subject}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry1_subject: e.target.value,
                          })
                        }
                        placeholder='경제지리'
                        className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                      /> */}
                      <p className='text-[14px] font-[400] text-[var(--n-800)]'>
                        사회 문화
                      </p>
                      {/* <input
                        type='text'
                        value={scores.inquiry2_subject}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_subject: e.target.value,
                          })
                        }
                        placeholder='사회 문화'
                        className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                      /> */}
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)] '>
                    <input
                      type='text'
                      value={scores.korean_subject}
                      onChange={(e) =>
                        setScores({ ...scores, korean_subject: e.target.value })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                </tr>

                {/* 표준점수 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] '>
                    표준점수
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.korean_standard}
                      onChange={(e) =>
                        setScores({
                          ...scores,
                          korean_standard: e.target.value,
                        })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.math_standard}
                      onChange={(e) =>
                        setScores({ ...scores, math_standard: e.target.value })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={scores.inquiry2_standard}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_standard: e.target.value,
                          })
                        }
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={scores.inquiry2_standard}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_standard: e.target.value,
                          })
                        }
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                </tr>

                {/* 백분위 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] '>
                    백분위
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.korean_percentile}
                      onChange={(e) =>
                        setScores({
                          ...scores,
                          korean_percentile: e.target.value,
                        })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.math_percentile}
                      onChange={(e) =>
                        setScores({
                          ...scores,
                          math_percentile: e.target.value,
                        })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={scores.inquiry2_percentile}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_percentile: e.target.value,
                          })
                        }
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={scores.inquiry2_percentile}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_percentile: e.target.value,
                          })
                        }
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]'>
                    -
                  </td>
                </tr>

                {/* 등급 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[13px] font-[500] text-[var(--n-800)] '>
                    등급
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.history_grade}
                      onChange={(e) =>
                        setScores({ ...scores, history_grade: e.target.value })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.korean_grade}
                      onChange={(e) =>
                        setScores({ ...scores, korean_grade: e.target.value })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.math_grade}
                      onChange={(e) =>
                        setScores({ ...scores, math_grade: e.target.value })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.english_grade}
                      onChange={(e) =>
                        setScores({ ...scores, english_grade: e.target.value })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]]'
                    />
                  </td>
                  <td
                    colSpan={2}
                    className='border border-[var(--n-200)] px-[4px] py-[4px]'
                  >
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={scores.inquiry1_grade}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry1_grade: e.target.value,
                          })
                        }
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                      <input
                        type='text'
                        value={scores.inquiry2_grade}
                        onChange={(e) =>
                          setScores({
                            ...scores,
                            inquiry2_grade: e.target.value,
                          })
                        }
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={scores.second_lang_grade}
                      onChange={(e) =>
                        setScores({
                          ...scores,
                          second_lang_grade: e.target.value,
                        })
                      }
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 버튼 */}
          <div className='flex gap-[8px] items-center justify-start w-full max-md:gap-[6px] max-md:pb-[16px] max-md:pr-[20px]'>
            <button
              onClick={() => setIsOpenScore(false)}
              className='px-[24px] py-[10px] flex-1 text-[14px] font-[500] text-[var(--n-600)] border border-[var(--n-300)] rounded-[8px] max-md:px-[16px] max-md:py-[12px] max-md:text-[14px]'
            >
              닫기
            </button>
            <button
              onClick={() => {
                // TODO: 점수 저장 로직
                setIsOpenScore(false);
              }}
              className='px-[24px] py-[10px] flex-1 text-[14px] font-[500] text-white bg-[var(--n-800)] rounded-[8px] max-md:px-[16px] max-md:py-[12px] max-md:text-[14px]'
            >
              저장
            </button>
          </div>
        </div>
      </ModalScoreCenter>
    </div>
  );
};

export default ConsultApply;
