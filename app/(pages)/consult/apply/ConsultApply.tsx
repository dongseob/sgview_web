'use client';

import {
  getConsultMajor,
  getConsultSchool,
  MajorItem,
  postConsultApply,
  postConsultMajor,
  postConsultSchool,
  postMockExam,
  PostMockExamData,
  putMockExam,
  SchoolItem,
} from '@/app/api/consult';
import ModalScoreCenter from '@/app/component/Modal/ModalScoreCenter';
import { AxiosError } from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const CreatableSelect = dynamic(() => import('react-select/creatable'), {
  ssr: false,
});

const ConsultApply = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [universityOptions, setUniversityOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [majorOptions, setMajorOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedUniversities, setSelectedUniversities] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedMajors, setSelectedMajors] = useState<
    { value: string; label: string }[]
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
    english_subject: '',
    english_grade: '',
    english_standard: '',
    english_percentile: '',
    history_subject: '',
    history_standard: '',
    history_percentile: '',
    history_grade: '',
    inquiry1_subject: '',
    inquiry1_standard: '',
    inquiry1_percentile: '',
    inquiry1_grade: '',
    inquiry2_subject: '',
    inquiry2_standard: '',
    inquiry2_percentile: '',
    inquiry2_grade: '',
    second_lang_subject: '',
    second_lang_standard: '',
    second_lang_percentile: '',
    second_lang_grade: '',
  });

  // 점수 입력 여부 확인
  const hasScoreInput = Object.values(scores).some((value) => value !== '');

  // 폼 유효성 검사 (대학, 학과 선택 + 점수 입력 필수)
  const isFormValid =
    selectedUniversities.length > 0 &&
    selectedMajors.length > 0 &&
    hasScoreInput;

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };
  const [isOpenScore, setIsOpenScore] = useState(false);
  const [composingInputs, setComposingInputs] = useState<Set<string>>(
    new Set()
  );

  // 모달 내에서 편집할 임시 점수 상태
  const [tempScores, setTempScores] = useState(scores);

  // 모달 열 때 현재 scores로 임시 상태 초기화
  const handleOpenScoreModal = () => {
    setTempScores(scores);
    setIsOpenScore(true);
  };

  // 저장 버튼 클릭 시 실제 scores에 반영
  const handleSaveScores = () => {
    setScores(tempScores);
    setIsOpenScore(false);
  };

  // 숫자와 소수점 2자리까지 허용하는 함수
  const handleNumberInput = (value: string): string => {
    // 숫자와 소수점만 허용
    let filtered = value.replace(/[^\d.]/g, '');

    // 소수점이 여러 개인 경우 첫 번째 소수점만 유지
    const parts = filtered.split('.');
    if (parts.length > 2) {
      filtered = parts[0] + '.' + parts.slice(1).join('');
    }

    // 소수점 이하 2자리까지만 허용
    if (filtered.includes('.')) {
      const [integer, decimal] = filtered.split('.');
      if (decimal && decimal.length > 2) {
        filtered = integer + '.' + decimal.substring(0, 2);
      }
    }

    return filtered;
  };

  // 표준점수 입력 처리 (0~200, 정수만)
  const handleStandardScoreInput = (value: string): string => {
    // 숫자만 허용 (소수점 제외)
    const filtered = value.replace(/[^\d]/g, '');
    if (filtered === '') return '';

    // 입력 중간에도 범위 체크 - 3자리 이상이면 먼저 체크
    if (filtered.length >= 3) {
      const numValue = parseInt(filtered, 10);
      if (!isNaN(numValue) && numValue > 200) {
        return '200';
      }
      // 200으로 시작하는 경우만 허용 (200, 2000... -> 200)
      if (filtered.startsWith('200')) {
        if (filtered.length > 3) {
          return '200';
        }
      }
      // 201 이상으로 시작하면 200으로 제한
      if (filtered.length === 3) {
        const firstThree = parseInt(filtered.substring(0, 3), 10);
        if (firstThree > 200) {
          return '200';
        }
      }
    }

    const numValue = parseInt(filtered, 10);
    if (isNaN(numValue)) return '';

    // 최종 범위 체크
    if (numValue > 200) {
      return '200';
    }
    if (numValue < 0) {
      return '0';
    }

    return filtered;
  };

  // 백분위 입력 처리 (0~100, 정수만)
  const handlePercentileInput = (value: string): string => {
    // 숫자만 허용 (소수점 제외)
    const filtered = value.replace(/[^\d]/g, '');
    if (filtered === '') return '';

    // 입력 중간에도 범위 체크 - 3자리 이상이면 먼저 체크
    if (filtered.length >= 3) {
      const numValue = parseInt(filtered, 10);
      if (!isNaN(numValue) && numValue > 100) {
        return '100';
      }
      // 100으로 시작하는 경우만 허용 (100, 1000... -> 100)
      if (filtered.startsWith('100')) {
        if (filtered.length > 3) {
          return '100';
        }
      }
      // 101 이상으로 시작하면 100으로 제한
      if (filtered.length === 3) {
        const firstThree = parseInt(filtered.substring(0, 3), 10);
        if (firstThree > 100) {
          return '100';
        }
      }
    }

    const numValue = parseInt(filtered, 10);
    if (isNaN(numValue)) return '';

    // 최종 범위 체크
    if (numValue > 100) {
      return '100';
    }
    if (numValue < 0) {
      return '0';
    }

    return filtered;
  };

  // 등급 입력 처리 (1~9, 정수만)
  const handleGradeInput = (value: string): string => {
    // 숫자만 허용 (소수점 제외)
    const filtered = value.replace(/[^\d]/g, '');
    if (filtered === '') return '';

    const numValue = parseInt(filtered, 10);
    if (isNaN(numValue)) return '';

    // 입력 중간에도 범위 체크
    // 9를 초과하는 값이 입력되면 즉시 9로 제한
    if (numValue > 9) {
      return '9';
    }
    if (numValue < 1) {
      // 0이 입력되면 빈 문자열 반환 (1~9만 허용)
      if (numValue === 0) return '';
      return '1';
    }

    return filtered;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);

      // FormData 생성 및 파일 업로드
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await postConsultApply(formData);
        console.log('파일 업로드 성공:', response.data);
      } catch (error) {
        console.error('파일 업로드 실패:', error);
        alert('파일 업로드에 실패했습니다. 다시 시도해주세요.');
        // 업로드 실패 시 파일 상태 초기화
        setUploadedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    const fetchConsultSchool = async () => {
      const response = await getConsultSchool();
      const options = response.data
        .map((item: SchoolItem) => ({
          value: item.id,
          label: item.name,
        }))
        .sort((a, b) => a.label.localeCompare(b.label, 'ko'));
      setUniversityOptions(options);
    };
    fetchConsultSchool();
  }, []);

  useEffect(() => {
    const fetchConsultMajor = async () => {
      if (selectedUniversities.length === 0) return;
      // 마지막으로 선택한 대학만 사용
      const lastUniversity =
        selectedUniversities[selectedUniversities.length - 1];
      const universityIds = [lastUniversity.value];
      const response = await getConsultMajor(universityIds);
      const options = response.data
        .map((item: MajorItem) => ({
          value: item.id,
          label: item.name,
        }))
        .sort((a, b) => a.label.localeCompare(b.label, 'ko'));
      setMajorOptions(options);
    };
    fetchConsultMajor();
  }, [selectedUniversities]);

  // 새 대학 생성 핸들러
  const handleCreateUniversity = async (inputValue: string) => {
    try {
      const response = await postConsultSchool({
        name: inputValue,
        is_active: true,
      });
      // 서버에서 반환된 새 대학 정보를 옵션에 추가
      const newOption = {
        value: response.data.id,
        label: response.data.name,
      };
      setUniversityOptions((prev) => {
        const updated = [...prev, newOption];
        return updated.sort((a, b) => a.label.localeCompare(b.label, 'ko'));
      });
      // 새로 생성된 대학을 선택 목록에 추가
      setSelectedUniversities((prev) => {
        if (prev.length >= 3) {
          alert('희망대학은 최대 3개까지만 선택할 수 있습니다.');
          return prev;
        }
        return [...prev, newOption];
      });
    } catch (error) {
      console.error('대학 생성 실패:', error);
      alert('대학 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 새 학과 생성 핸들러
  const handleCreateMajor = async (inputValue: string) => {
    try {
      // 마지막으로 선택한 대학의 ID 사용
      if (selectedUniversities.length === 0) {
        alert('먼저 대학을 선택해주세요.');
        return;
      }
      const lastUniversity =
        selectedUniversities[selectedUniversities.length - 1];
      const response = await postConsultMajor(lastUniversity.value, {
        name: inputValue,
        is_active: true,
      });
      // 서버에서 반환된 새 학과 정보를 옵션에 추가
      const newOption = {
        value: response.data.id,
        label: response.data.name,
      };
      setMajorOptions((prev) => {
        const updated = [...prev, newOption];
        return updated.sort((a, b) => a.label.localeCompare(b.label, 'ko'));
      });
      // 새로 생성된 학과를 선택 목록에 추가
      setSelectedMajors((prev) => {
        if (prev.length >= 3) {
          alert('희망학과는 최대 3개까지만 선택할 수 있습니다.');
          return prev;
        }
        return [...prev, newOption];
      });
    } catch (error) {
      console.error('학과 생성 실패:', error);
      alert('학과 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 분석하기 핸들러
  const handleAnalyze = async () => {
    if (!isFormValid) return;

    try {
      // 선택된 모든 대학과 학과의 이름을 배열로 추출
      const universityNames = selectedUniversities.map((uni) => uni.label);
      const majorNames = selectedMajors.map((major) => major.label);

      // 점수 데이터를 API 형식에 맞게 변환
      const mockExamData: PostMockExamData = {
        desired_university: universityNames.join(', '),
        desired_department: majorNames.join(', '),
        scores: {
          korean: {
            subject: scores.korean_subject || '',
            standard_score: scores.korean_standard
              ? parseFloat(scores.korean_standard)
              : 0,
            percentile: scores.korean_percentile
              ? parseFloat(scores.korean_percentile)
              : 0,
            grade: scores.korean_grade ? parseFloat(scores.korean_grade) : 0,
          },
          korean_history: {
            subject: scores.history_subject || '',
            standard_score: scores.history_standard
              ? parseFloat(scores.history_standard)
              : 0,
            percentile: scores.history_percentile
              ? parseFloat(scores.history_percentile)
              : 0,
            grade: scores.history_grade ? parseFloat(scores.history_grade) : 0,
          },
          math: {
            subject: scores.math_subject || '',
            standard_score: scores.math_standard
              ? parseFloat(scores.math_standard)
              : 0,
            percentile: scores.math_percentile
              ? parseFloat(scores.math_percentile)
              : 0,
            grade: scores.math_grade ? parseFloat(scores.math_grade) : 0,
          },
          english: {
            subject: scores.english_subject || '영어',
            standard_score: scores.english_standard
              ? parseFloat(scores.english_standard)
              : 0,
            percentile: scores.english_percentile
              ? parseFloat(scores.english_percentile)
              : 0,
            grade: scores.english_grade ? parseFloat(scores.english_grade) : 0,
          },
          inquiry1: {
            subject: scores.inquiry1_subject || '',
            standard_score: scores.inquiry1_standard
              ? parseFloat(scores.inquiry1_standard)
              : 0,
            percentile: scores.inquiry1_percentile
              ? parseFloat(scores.inquiry1_percentile)
              : 0,
            grade: scores.inquiry1_grade
              ? parseFloat(scores.inquiry1_grade)
              : 0,
          },
          inquiry2: {
            subject: scores.inquiry2_subject || '',
            standard_score: scores.inquiry2_standard
              ? parseFloat(scores.inquiry2_standard)
              : 0,
            percentile: scores.inquiry2_percentile
              ? parseFloat(scores.inquiry2_percentile)
              : 0,
            grade: scores.inquiry2_grade
              ? parseFloat(scores.inquiry2_grade)
              : 0,
          },
          second_language: {
            subject: scores.second_lang_subject || '',
            standard_score: scores.second_lang_standard
              ? parseFloat(scores.second_lang_standard)
              : 0,
            percentile: scores.second_lang_percentile
              ? parseFloat(scores.second_lang_percentile)
              : 0,
            grade: scores.second_lang_grade
              ? parseFloat(scores.second_lang_grade)
              : 0,
          },
        },
      };

      const response = await postMockExam(mockExamData);
      router.push('/consult/processing');
      // TODO: 성공 시 다음 페이지로 이동하거나 결과 표시
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 409) {
        const universityNames = selectedUniversities.map((uni) => uni.label);
        const majorNames = selectedMajors.map((major) => major.label);

        // 점수 데이터를 API 형식에 맞게 변환
        const mockExamData: PostMockExamData = {
          desired_university: universityNames.join(', '),
          desired_department: majorNames.join(', '),
          scores: {
            korean: {
              subject: scores.korean_subject || '',
              standard_score: scores.korean_standard
                ? parseFloat(scores.korean_standard)
                : 0,
              percentile: scores.korean_percentile
                ? parseFloat(scores.korean_percentile)
                : 0,
              grade: scores.korean_grade ? parseFloat(scores.korean_grade) : 0,
            },
            korean_history: {
              subject: scores.history_subject || '',
              standard_score: scores.history_standard
                ? parseFloat(scores.history_standard)
                : 0,
              percentile: scores.history_percentile
                ? parseFloat(scores.history_percentile)
                : 0,
              grade: scores.history_grade
                ? parseFloat(scores.history_grade)
                : 0,
            },
            math: {
              subject: scores.math_subject || '',
              standard_score: scores.math_standard
                ? parseFloat(scores.math_standard)
                : 0,
              percentile: scores.math_percentile
                ? parseFloat(scores.math_percentile)
                : 0,
              grade: scores.math_grade ? parseFloat(scores.math_grade) : 0,
            },
            english: {
              subject: scores.english_subject || '영어',
              standard_score: scores.english_standard
                ? parseFloat(scores.english_standard)
                : 0,
              percentile: scores.english_percentile
                ? parseFloat(scores.english_percentile)
                : 0,
              grade: scores.english_grade
                ? parseFloat(scores.english_grade)
                : 0,
            },
            inquiry1: {
              subject: scores.inquiry1_subject || '',
              standard_score: scores.inquiry1_standard
                ? parseFloat(scores.inquiry1_standard)
                : 0,
              percentile: scores.inquiry1_percentile
                ? parseFloat(scores.inquiry1_percentile)
                : 0,
              grade: scores.inquiry1_grade
                ? parseFloat(scores.inquiry1_grade)
                : 0,
            },
            inquiry2: {
              subject: scores.inquiry2_subject || '',
              standard_score: scores.inquiry2_standard
                ? parseFloat(scores.inquiry2_standard)
                : 0,
              percentile: scores.inquiry2_percentile
                ? parseFloat(scores.inquiry2_percentile)
                : 0,
              grade: scores.inquiry2_grade
                ? parseFloat(scores.inquiry2_grade)
                : 0,
            },
            second_language: {
              subject: scores.second_lang_subject || '',
              standard_score: scores.second_lang_standard
                ? parseFloat(scores.second_lang_standard)
                : 0,
              percentile: scores.second_lang_percentile
                ? parseFloat(scores.second_lang_percentile)
                : 0,
              grade: scores.second_lang_grade
                ? parseFloat(scores.second_lang_grade)
                : 0,
            },
          },
        };
        await putMockExam(mockExamData);
        router.push('/consult/processing');
      } else {
      }
    }
  };

  return (
    <div className='pt-[40px] pb-[120px] max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]'>
      <div className='w-[328px] mx-auto  flex flex-col items-center justify-center gap-[32px] max-[745px]:py-[0]'>
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
              hideSelectedOptions={false}
              placeholder='희망대학 입력'
              value={selectedUniversities}
              onChange={(newValue) => {
                // 최대 3개 제한
                const universities = newValue as {
                  value: string;
                  label: string;
                }[];
                if (universities && universities.length > 3) {
                  alert('희망대학은 최대 3개까지만 선택할 수 있습니다.');
                  return;
                }
                setSelectedUniversities(universities || []);
              }}
              onCreateOption={handleCreateUniversity}
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
                  padding: '6px 0 6px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2px',
                }),
                placeholder: (base, state) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#AFB0B6',
                  display: state.selectProps.menuIsOpen ? 'none' : 'block',
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
                  backgroundColor: '#F3F4F6',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px 8px',
                  gap: '4px',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#36373A',
                  padding: '0',
                  paddingLeft: '0',
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: '#9CA3AF',
                  cursor: 'pointer',
                  paddingLeft: '4px',
                  paddingRight: '0',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#6B7280',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: '8px',
                  marginTop: '4px',
                  border: '1px solid #D7D8DC',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  zIndex: 10,
                }),
                menuList: (base) => ({
                  ...base,
                  padding: '8px 0',
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
                  borderRadius: '0',
                  padding: '10px 16px',
                  '&:active': {
                    backgroundColor: '#F3F4F6',
                    color: '#36373A',
                  },
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                clearIndicator: () => ({
                  display: 'none',
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
              hideSelectedOptions={false}
              placeholder='희망학과 입력'
              value={selectedMajors}
              onChange={(newValue) => {
                // 최대 3개 제한
                const majors = newValue as {
                  value: string;
                  label: string;
                }[];
                if (majors && majors.length > 3) {
                  alert('희망학과는 최대 3개까지만 선택할 수 있습니다.');
                  return;
                }
                setSelectedMajors(majors || []);
              }}
              onCreateOption={handleCreateMajor}
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
                  padding: '6px 0 6px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2px',
                }),
                placeholder: (base, state) => ({
                  ...base,
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#AFB0B6',
                  display: state.selectProps.menuIsOpen ? 'none' : 'block',
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
                  backgroundColor: '#F3F4F6',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px 8px',
                  gap: '4px',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#36373A',
                  padding: '0',
                  paddingLeft: '0',
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: '#9CA3AF',
                  cursor: 'pointer',
                  paddingLeft: '4px',
                  paddingRight: '0',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#6B7280',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: '8px',
                  marginTop: '4px',
                  border: '1px solid #D7D8DC',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  zIndex: 10,
                }),
                menuList: (base) => ({
                  ...base,
                  padding: '8px 0',
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
                  borderRadius: '0',
                  padding: '10px 16px',
                  '&:active': {
                    backgroundColor: '#F3F4F6',
                    color: '#36373A',
                  },
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                clearIndicator: () => ({
                  display: 'none',
                }),
              }}
            />
          </div>
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              최종 모의고사 점수
            </p>
            <button
              onClick={handleOpenScoreModal}
              className='w-full h-[48px] px-[16px] py-[10px] border border-[#D7D8DC] rounded-[8px] text-[15px] font-medium text-[var(--n-800)]'
            >
              <span
                className={`${
                  hasScoreInput ? 'text-[var(--n-800)]' : 'text-[var(--n-200)]'
                }`}
              >
                ✓
              </span>{' '}
              {hasScoreInput ? '점수 입력 완료' : '점수 입력'}
            </button>
          </div>
          <div className='flex flex-col gap-[12px] w-full'>
            <div className='flex flex-col gap-[8px] w-full'>
              <p className='text-[#36373A] text-[13px] font-medium'>
                생활기록부 PDF 업로드
              </p>
              {uploadedFile && (
                <div className='border border-[var(--n-200)] rounded-[8px] py-[12px] px-[16px] flex items-center justify-between'>
                  <p className='text-[15px] leading-[21px] font-[500]'>
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
                나이스플러스 또는 정부24에서 받은 생활기록부 PDF를 업로드하세요.
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
          <button
            disabled={!isFormValid}
            className={`${
              isFormValid
                ? 'bg-[var(--r-400)] text-white cursor-pointer'
                : 'bg-[var(--n-100)] text-[var(--n-400)] cursor-not-allowed'
            } rounded-[8px] h-[48px] w-full`}
            onClick={handleAnalyze}
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
        <p className='text-[16px] leading-[1.4] font-[400] text-[var(--n-600)] px-[20px] pt-[11px] pb-[17px]'>
          최종 모의고사 점수를 입력해주세요
        </p>
        <div className='flex flex-col gap-[20px] px-[20px] pb-[20px]  max-[745px]:pr-[0]'>
          {/* 설명 텍스트 */}

          {/* 점수 테이블 */}
          <div className='w-full overflow-x-auto border-t border-[var(--n-800)] max-[745px]:max-h-[60vh] max-[745px]:overflow-y-auto'>
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
                  <th className='border border-[var(--n-200)] text-left border-l-[0px] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[60px] max-[745px]:min-w-[120px]'>
                    영역
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-[745px]:min-w-[103px]'>
                    한국사
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-[745px]:min-w-[103px]'>
                    국어
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-[745px]:min-w-[103px]'>
                    수학
                  </th>
                  <th className='border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-[745px]:min-w-[103px]'>
                    영어
                  </th>
                  <th
                    colSpan={2}
                    className='border border-[var(--n-200)] text-center px-[8px]  py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[100px] max-[745px]:min-w-[206px]'
                  >
                    탐구
                  </th>
                  <th className='border border-[var(--n-200)] border-r-[0px] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[100px] max-[745px]:min-w-[103px]'>
                    제2외국어/한문
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 선택과목 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] '>
                    선택과목
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.history_subject || ''}
                      maxLength={12}
                      onCompositionStart={() => {
                        setComposingInputs((prev) =>
                          new Set(prev).add('history_subject')
                        );
                      }}
                      onCompositionEnd={(e) => {
                        setComposingInputs((prev) => {
                          const next = new Set(prev);
                          next.delete('history_subject');
                          return next;
                        });
                        const textOnly = e.currentTarget.value.replace(
                          /[^가-힣a-zA-Z\s]/g,
                          ''
                        );
                        setTempScores({
                          ...tempScores,
                          history_subject: textOnly,
                        });
                      }}
                      onChange={(e) => {
                        if (!composingInputs.has('history_subject')) {
                          const textOnly = e.target.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            history_subject: textOnly,
                          });
                        } else {
                          setTempScores({
                            ...tempScores,
                            history_subject: e.target.value,
                          });
                        }
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex items-center justify-center'>
                      <input
                        type='text'
                        value={tempScores.korean_subject}
                        maxLength={12}
                        onCompositionStart={() => {
                          setComposingInputs((prev) =>
                            new Set(prev).add('korean_subject')
                          );
                        }}
                        onCompositionEnd={(e) => {
                          setComposingInputs((prev) => {
                            const next = new Set(prev);
                            next.delete('korean_subject');
                            return next;
                          });
                          const textOnly = e.currentTarget.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            korean_subject: textOnly,
                          });
                        }}
                        onChange={(e) => {
                          if (!composingInputs.has('korean_subject')) {
                            const textOnly = e.target.value.replace(
                              /[^가-힣a-zA-Z\s]/g,
                              ''
                            );
                            setTempScores({
                              ...tempScores,
                              korean_subject: textOnly,
                            });
                          } else {
                            setTempScores({
                              ...tempScores,
                              korean_subject: e.target.value,
                            });
                          }
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] text-center focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.math_subject}
                      maxLength={12}
                      onCompositionStart={() => {
                        setComposingInputs((prev) =>
                          new Set(prev).add('math_subject')
                        );
                      }}
                      onCompositionEnd={(e) => {
                        setComposingInputs((prev) => {
                          const next = new Set(prev);
                          next.delete('math_subject');
                          return next;
                        });
                        const textOnly = e.currentTarget.value.replace(
                          /[^가-힣a-zA-Z\s]/g,
                          ''
                        );
                        setTempScores({
                          ...tempScores,
                          math_subject: textOnly,
                        });
                      }}
                      onChange={(e) => {
                        if (!composingInputs.has('math_subject')) {
                          const textOnly = e.target.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            math_subject: textOnly,
                          });
                        } else {
                          setTempScores({
                            ...tempScores,
                            math_subject: e.target.value,
                          });
                        }
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] text-center focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.english_subject || ''}
                      maxLength={12}
                      onCompositionStart={() => {
                        setComposingInputs((prev) =>
                          new Set(prev).add('english_subject')
                        );
                      }}
                      onCompositionEnd={(e) => {
                        setComposingInputs((prev) => {
                          const next = new Set(prev);
                          next.delete('english_subject');
                          return next;
                        });
                        const textOnly = e.currentTarget.value.replace(
                          /[^가-힣a-zA-Z\s]/g,
                          ''
                        );
                        setTempScores({
                          ...tempScores,
                          english_subject: textOnly,
                        });
                      }}
                      onChange={(e) => {
                        if (!composingInputs.has('english_subject')) {
                          const textOnly = e.target.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            english_subject: textOnly,
                          });
                        } else {
                          setTempScores({
                            ...tempScores,
                            english_subject: e.target.value,
                          });
                        }
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]  items-center justify-center'>
                      <input
                        type='text'
                        value={tempScores.inquiry1_subject}
                        maxLength={12}
                        onCompositionStart={() => {
                          setComposingInputs((prev) =>
                            new Set(prev).add('inquiry1_subject')
                          );
                        }}
                        onCompositionEnd={(e) => {
                          setComposingInputs((prev) => {
                            const next = new Set(prev);
                            next.delete('inquiry1_subject');
                            return next;
                          });
                          const textOnly = e.currentTarget.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            inquiry1_subject: textOnly,
                          });
                        }}
                        onChange={(e) => {
                          if (!composingInputs.has('inquiry1_subject')) {
                            const textOnly = e.target.value.replace(
                              /[^가-힣a-zA-Z\s]/g,
                              ''
                            );
                            setTempScores({
                              ...tempScores,
                              inquiry1_subject: textOnly,
                            });
                          } else {
                            setTempScores({
                              ...tempScores,
                              inquiry1_subject: e.target.value,
                            });
                          }
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] text-center focus:outline-none focus:border-[var(--n-800)]'
                      />

                      {/* <input
                        type='text'
                        value={tempScores.inquiry2_subject}
                        onChange={(e) =>
                          setTempScores({
                            ...tempScores,
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
                        value={tempScores.inquiry1_subject}
                        onChange={(e) =>
                          setTempScores({
                            ...tempScores,
                            inquiry1_subject: e.target.value,
                          })
                        }
                        placeholder='경제지리'
                        className='w-full px-[8px] py-[4px] text-[12px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--r-400)]'
                      /> */}

                      <input
                        type='text'
                        value={tempScores.inquiry2_subject}
                        maxLength={12}
                        onCompositionStart={() => {
                          setComposingInputs((prev) =>
                            new Set(prev).add('inquiry2_subject')
                          );
                        }}
                        onCompositionEnd={(e) => {
                          setComposingInputs((prev) => {
                            const next = new Set(prev);
                            next.delete('inquiry2_subject');
                            return next;
                          });
                          const textOnly = e.currentTarget.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            inquiry2_subject: textOnly,
                          });
                        }}
                        onChange={(e) => {
                          if (!composingInputs.has('inquiry2_subject')) {
                            const textOnly = e.target.value.replace(
                              /[^가-힣a-zA-Z\s]/g,
                              ''
                            );
                            setTempScores({
                              ...tempScores,
                              inquiry2_subject: textOnly,
                            });
                          } else {
                            setTempScores({
                              ...tempScores,
                              inquiry2_subject: e.target.value,
                            });
                          }
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] text-center focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[4px] py-[4px] text-center'>
                    <input
                      type='text'
                      value={tempScores.second_lang_subject}
                      maxLength={12}
                      onCompositionStart={() => {
                        setComposingInputs((prev) =>
                          new Set(prev).add('second_lang_subject')
                        );
                      }}
                      onCompositionEnd={(e) => {
                        setComposingInputs((prev) => {
                          const next = new Set(prev);
                          next.delete('second_lang_subject');
                          return next;
                        });
                        const textOnly = e.currentTarget.value.replace(
                          /[^가-힣a-zA-Z\s]/g,
                          ''
                        );
                        setTempScores({
                          ...tempScores,
                          second_lang_subject: textOnly,
                        });
                      }}
                      onChange={(e) => {
                        if (!composingInputs.has('second_lang_subject')) {
                          const textOnly = e.target.value.replace(
                            /[^가-힣a-zA-Z\s]/g,
                            ''
                          );
                          setTempScores({
                            ...tempScores,
                            second_lang_subject: textOnly,
                          });
                        } else {
                          setTempScores({
                            ...tempScores,
                            second_lang_subject: e.target.value,
                          });
                        }
                      }}
                      className='w-full max-w-[103px] mx-auto px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                </tr>

                {/* 표준점수 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] '>
                    표준점수
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.history_standard || ''}
                      onChange={(e) => {
                        const filtered = handleStandardScoreInput(
                          e.target.value
                        );
                        setTempScores({
                          ...tempScores,
                          history_standard: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.korean_standard}
                      onChange={(e) => {
                        const filtered = handleStandardScoreInput(
                          e.target.value
                        );
                        setTempScores({
                          ...tempScores,
                          korean_standard: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.math_standard}
                      onChange={(e) => {
                        const filtered = handleStandardScoreInput(
                          e.target.value
                        );
                        setTempScores({
                          ...tempScores,
                          math_standard: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.english_standard || ''}
                      onChange={(e) => {
                        const filtered = handleStandardScoreInput(
                          e.target.value
                        );
                        setTempScores({
                          ...tempScores,
                          english_standard: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={tempScores.inquiry1_standard}
                        onChange={(e) => {
                          const filtered = handleStandardScoreInput(
                            e.target.value
                          );
                          setTempScores({
                            ...tempScores,
                            inquiry1_standard: filtered,
                          });
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={tempScores.inquiry2_standard}
                        onChange={(e) => {
                          const filtered = handleStandardScoreInput(
                            e.target.value
                          );
                          setTempScores({
                            ...tempScores,
                            inquiry2_standard: filtered,
                          });
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[4px] py-[4px] text-center'>
                    <input
                      type='text'
                      value={tempScores.second_lang_standard || ''}
                      onChange={(e) => {
                        const filtered = handleStandardScoreInput(
                          e.target.value
                        );
                        setTempScores({
                          ...tempScores,
                          second_lang_standard: filtered,
                        });
                      }}
                      className='w-full max-w-[103px] mx-auto px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                </tr>

                {/* 백분위 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] '>
                    백분위
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.history_percentile || ''}
                      onChange={(e) => {
                        const filtered = handlePercentileInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          history_percentile: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.korean_percentile}
                      onChange={(e) => {
                        const filtered = handlePercentileInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          korean_percentile: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.math_percentile}
                      onChange={(e) => {
                        const filtered = handlePercentileInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          math_percentile: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.english_percentile || ''}
                      onChange={(e) => {
                        const filtered = handlePercentileInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          english_percentile: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={tempScores.inquiry1_percentile}
                        onChange={(e) => {
                          const filtered = handlePercentileInput(
                            e.target.value
                          );
                          setTempScores({
                            ...tempScores,
                            inquiry1_percentile: filtered,
                          });
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={tempScores.inquiry2_percentile}
                        onChange={(e) => {
                          const filtered = handlePercentileInput(
                            e.target.value
                          );
                          setTempScores({
                            ...tempScores,
                            inquiry2_percentile: filtered,
                          });
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[4px] py-[4px] text-center'>
                    <input
                      type='text'
                      value={tempScores.second_lang_percentile || ''}
                      onChange={(e) => {
                        const filtered = handlePercentileInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          second_lang_percentile: filtered,
                        });
                      }}
                      className='w-full max-w-[103px] mx-auto px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                </tr>

                {/* 등급 행 */}
                <tr>
                  <td className='border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] '>
                    등급
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.history_grade}
                      onChange={(e) => {
                        const filtered = handleGradeInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          history_grade: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.korean_grade}
                      onChange={(e) => {
                        const filtered = handleGradeInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          korean_grade: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.math_grade}
                      onChange={(e) => {
                        const filtered = handleGradeInput(e.target.value);
                        setTempScores({ ...tempScores, math_grade: filtered });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <input
                      type='text'
                      value={tempScores.english_grade}
                      onChange={(e) => {
                        const filtered = handleGradeInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          english_grade: filtered,
                        });
                      }}
                      className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={tempScores.inquiry1_grade}
                        onChange={(e) => {
                          const filtered = handleGradeInput(e.target.value);
                          setTempScores({
                            ...tempScores,
                            inquiry1_grade: filtered,
                          });
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] px-[4px] py-[4px]'>
                    <div className='flex gap-[4px]'>
                      <input
                        type='text'
                        value={tempScores.inquiry2_grade}
                        onChange={(e) => {
                          const filtered = handleGradeInput(e.target.value);
                          setTempScores({
                            ...tempScores,
                            inquiry2_grade: filtered,
                          });
                        }}
                        className='w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                      />
                    </div>
                  </td>
                  <td className='border border-[var(--n-200)] border-r-[0px] px-[4px] py-[4px] text-center'>
                    <input
                      type='text'
                      value={tempScores.second_lang_grade}
                      onChange={(e) => {
                        const filtered = handleGradeInput(e.target.value);
                        setTempScores({
                          ...tempScores,
                          second_lang_grade: filtered,
                        });
                      }}
                      className='w-full max-w-[103px] mx-auto px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 버튼 */}
          <div className='flex gap-[8px] items-center justify-start w-full max-[745px]:gap-[6px] max-[745px]:pb-[16px] max-[745px]:pr-[20px]'>
            <button
              onClick={() => setIsOpenScore(false)}
              className='px-[24px] py-[10px] flex-1 text-[14px] font-[500] text-[var(--n-600)] border border-[var(--n-300)] h-[52px] rounded-[8px] max-[745px]:px-[16px] max-[745px]:py-[12px] max-[745px]:text-[14px]'
            >
              닫기
            </button>
            <button
              onClick={handleSaveScores}
              className='px-[24px] py-[10px] flex-1 text-[14px] font-[500] text-white bg-[var(--n-800)] rounded-[8px] h-[52px] max-[745px]:px-[16px] max-[745px]:py-[12px] max-[745px]:text-[14px]'
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
