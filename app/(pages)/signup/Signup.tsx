'use client';

import { postLogin, saveTokens } from '@/app/api/member';
import { TitleInput } from '@/app/component/Input/input';
import ModalCenter from '@/app/component/Modal/ModalCenter';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const Select = dynamic(() => import('react-select'), { ssr: false });

// 약관 내용을 리스트로 변환하는 함수
const renderContentAsList = (content: string) => {
  const lines = content.split('\n');

  interface ListItem {
    type: 'numbered' | 'bullet' | 'alpha' | 'text';
    content: string;
    subItems?: ListItem[];
  }

  const items: ListItem[] = [];
  let currentItem: ListItem | null = null;
  let currentSubItems: ListItem[] = [];

  for (let i = 0; i < lines.length; i++) {
    const originalLine = lines[i];
    const trimmedLine = originalLine.trim();

    if (!trimmedLine) {
      // 빈 줄이면 현재 항목 마무리
      if (currentItem) {
        if (currentSubItems.length > 0) {
          currentItem.subItems = [...currentSubItems];
          currentSubItems = [];
        }
        items.push(currentItem);
        currentItem = null;
      }
      continue;
    }

    // 번호로 시작하는 항목 (예: "1. ", "2. ")
    const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      // 이전 항목 저장
      if (currentItem) {
        if (currentSubItems.length > 0) {
          currentItem.subItems = [...currentSubItems];
          currentSubItems = [];
        }
        items.push(currentItem);
      }
      // 새 항목 시작
      currentItem = {
        type: 'numbered',
        content: numberedMatch[2],
        subItems: [],
      };
      continue;
    }

    // 들여쓰기된 불릿 포인트 (예: "   • 가. ", "   • 나. ")
    const bulletMatch = originalLine.match(/^(\s{3,})\•\s+(.+)$/);
    if (bulletMatch) {
      if (currentItem) {
        currentSubItems.push({
          type: 'bullet',
          content: bulletMatch[2], // "가. 일반 회원: ..." 형식
        });
      } else {
        // 메인 항목이 없으면 일반 텍스트로 처리
        items.push({
          type: 'text',
          content: trimmedLine,
        });
      }
      continue;
    }

    // 들여쓰기된 알파벳 항목 (예: "   a. ", "   b. ")
    const alphaMatch = originalLine.match(/^(\s{3,})([a-z])\.\s+(.+)$/);
    if (alphaMatch) {
      if (currentItem) {
        currentSubItems.push({
          type: 'alpha',
          content: alphaMatch[3],
        });
      } else {
        items.push({
          type: 'text',
          content: trimmedLine,
        });
      }
      continue;
    }

    // 들여쓰기가 있는 일반 텍스트 (현재 항목의 연속)
    if (originalLine.match(/^\s{3,}/)) {
      if (currentSubItems.length > 0) {
        // 서브 항목의 연속
        const lastSubItem = currentSubItems[currentSubItems.length - 1];
        lastSubItem.content += ' ' + trimmedLine;
      } else if (currentItem) {
        // 메인 항목의 연속
        currentItem.content += ' ' + trimmedLine;
      } else {
        items.push({
          type: 'text',
          content: trimmedLine,
        });
      }
      continue;
    }

    // 일반 텍스트 (번호나 불릿이 없는 경우)
    if (currentItem) {
      // 현재 항목에 추가
      if (currentSubItems.length > 0) {
        const lastSubItem = currentSubItems[currentSubItems.length - 1];
        lastSubItem.content += ' ' + trimmedLine;
      } else {
        currentItem.content += ' ' + trimmedLine;
      }
    } else {
      // 리스트가 없으면 일반 텍스트로 추가
      items.push({
        type: 'text',
        content: trimmedLine,
      });
    }
  }

  // 마지막 항목 저장
  if (currentItem) {
    if (currentSubItems.length > 0) {
      currentItem.subItems = [...currentSubItems];
    }
    items.push(currentItem);
  }

  // 렌더링 - 연속된 numbered 항목들을 하나의 ol로 묶기
  const renderItems: React.ReactElement[] = [];
  let currentNumberedGroup: ListItem[] = [];

  const flushNumberedGroup = () => {
    if (currentNumberedGroup.length > 0) {
      renderItems.push(
        <ol
          key={renderItems.length}
          className='list-decimal list-outside ml-[20px] space-y-[4px]'
        >
          {currentNumberedGroup.map((item, idx) => (
            <li
              key={idx}
              className='text-[14px] text-[var(--n-700)] leading-[1.6] pl-[4px]'
            >
              {item.content}
              {item.subItems && item.subItems.length > 0 && (
                <ul className='list-none ml-[20px] mt-[4px] space-y-[4px]'>
                  {item.subItems.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className='text-[14px] text-[var(--n-700)] leading-[1.6] flex items-start'
                    >
                      <span className='mr-[4px]'>•</span>
                      <span>{subItem.content}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      );
      currentNumberedGroup = [];
    }
  };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type === 'numbered') {
      currentNumberedGroup.push(item);
    } else {
      // numbered가 아닌 항목을 만나면 이전 numbered 그룹 종료
      flushNumberedGroup();
      // 일반 텍스트 항목 추가
      renderItems.push(
        <p
          key={renderItems.length}
          className='text-[14px] text-[var(--n-700)] leading-[1.6]'
        >
          {item.content}
        </p>
      );
    }
  }
  // 마지막 numbered 그룹 종료
  flushNumberedGroup();

  return <div className='flex flex-col gap-[4px]'>{renderItems}</div>;
};

const Signup = () => {
  const [memberType, setMemberType] = useState<'student' | 'parent'>('student');
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [schoolError, setSchoolError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [school, setSchool] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [grade, setGrade] = useState<{ value: string; label: string } | null>({
    value: '선택',
    label: '선택',
  });

  // 한글 입력 조합 상태 관리 (각 필드별)
  const [isComposingSchool, setIsComposingSchool] = useState(false);
  const [isComposingName, setIsComposingName] = useState(false);

  const [showServiceTerms, setShowServiceTerms] = useState(false);
  const [showPrivacyTerms, setShowPrivacyTerms] = useState(false);
  const [showMarketingTerms, setShowMarketingTerms] = useState(false); // ✅ 추가

  const [toastOpen, setToastOpen] = useState<null | { msg: string }>(null);

  const router = useRouter();

  // ====== Validators ======
  const validateEmail = (email: string) => {
    if (email.length < 6 || email.length > 100) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  const validatePassword = (pwd: string) => {
    if (pwd.length < 8) return false;
    if (!/[A-Z]/.test(pwd)) return false;
    if (!/[a-z]/.test(pwd)) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) return false;
    return true;
  };
  const validateSchool = (s: string) => s.length >= 2 && s.length <= 50;
  const validateName = (n: string) => n.length >= 2 && n.length <= 30;
  const validatePhone = (p: string) => /^[0-9]{10,11}$/.test(p);

  // ====== Form Valid ======
  const isFormValid = useMemo(() => {
    const ok =
      !idError &&
      !passwordError &&
      !passwordConfirmError &&
      !schoolError &&
      !nameError &&
      !phoneError &&
      memberType &&
      grade?.value !== '선택' &&
      id &&
      password &&
      passwordConfirm &&
      school &&
      name &&
      phone &&
      agreeTerms &&
      agreePrivacy;
    return Boolean(ok);
  }, [
    idError,
    passwordError,
    passwordConfirmError,
    schoolError,
    nameError,
    phoneError,
    memberType,
    grade,
    id,
    password,
    passwordConfirm,
    school,
    name,
    phone,
    agreeTerms,
    agreePrivacy,
  ]);

  // ====== Agree handlers ======
  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeMarketing(checked);
  };
  const handleIndividualAgree = (
    type: 'terms' | 'privacy' | 'marketing',
    checked: boolean
  ) => {
    if (type === 'terms') setAgreeTerms(checked);
    if (type === 'privacy') setAgreePrivacy(checked);
    if (type === 'marketing') setAgreeMarketing(checked);

    const newTerms = type === 'terms' ? checked : agreeTerms;
    const newPrivacy = type === 'privacy' ? checked : agreePrivacy;
    const newMarketing = type === 'marketing' ? checked : agreeMarketing;
    setAgreeAll(newTerms && newPrivacy && newMarketing);
  };

  // 학교용 키 핸들러 (한글 조합 중에는 차단하지 않음)
  const handleSchoolKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 조합 중이면 모든 키 허용
    if (isComposingSchool) {
      if (e.key === 'Enter' && isFormValid) handleSignup();
      return;
    }

    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
      ' ',
    ];

    const isAllowedKey = allowedKeys.includes(e.key);
    const isCtrlKey = e.ctrlKey || e.metaKey;

    // 영문, 숫자만 허용 (한글은 조합 이벤트로 처리)
    const isValidChar = /^[a-zA-Z0-9\s]$/.test(e.key);

    if (!isValidChar && !isAllowedKey && !isCtrlKey) {
      e.preventDefault();
    }

    if (e.key === 'Enter' && isFormValid) handleSignup();
  };

  // 이름용 키 핸들러 (한글 조합 중에는 차단하지 않음)
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 조합 중이면 모든 키 허용
    if (isComposingName) {
      if (e.key === 'Enter' && isFormValid) handleSignup();
      return;
    }

    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
      ' ',
    ];

    const isAllowedKey = allowedKeys.includes(e.key);
    const isCtrlKey = e.ctrlKey || e.metaKey;

    // 영문만 허용 (한글은 조합 이벤트로 처리)
    const isValidChar = /^[a-zA-Z\s]$/.test(e.key);

    if (!isValidChar && !isAllowedKey && !isCtrlKey) {
      e.preventDefault();
    }

    if (e.key === 'Enter' && isFormValid) handleSignup();
  };

  // ====== Keyboard ======
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isFormValid) handleSignup();
  };

  // 휴대폰 번호 입력 필드용 키 핸들러 (숫자만 허용, 이모지 차단)
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 숫자 키 (0-9), 제어 키 (Backspace, Delete, Tab, Arrow keys 등) 허용
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
    ];

    // 숫자 키 체크 (0-9)
    const isNumber = /^[0-9]$/.test(e.key);
    // 제어 키 체크
    const isAllowedKey = allowedKeys.includes(e.key);
    // Ctrl/Cmd + A, C, V, X 등 조합 키 허용
    const isCtrlKey = e.ctrlKey || e.metaKey;

    // 숫자도 아니고 허용된 키도 아니고 Ctrl 조합도 아니면 입력 차단
    if (!isNumber && !isAllowedKey && !isCtrlKey) {
      e.preventDefault();
    }

    // Enter 키는 기본 핸들러로 전달
    if (e.key === 'Enter' && isFormValid) {
      handleSignup();
    }
  };

  // ====== Signup flow ======
  const handleSignup = async () => {
    if (!isFormValid) return;
    try {
      const signRes = await fetch(
        'https://api-istrue.axcorp.ai/api/v1/auth/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            memberType,
            school,
            grade: grade?.value,
            name,
            email: id,
            password,
            phone,
            agree: {
              terms: agreeTerms,
              privacy: agreePrivacy,
              marketing: agreeMarketing,
            },
          }),
        }
      );

      if (!signRes.ok) {
        // 응답 데이터에서 에러 메시지 추출 시도
        let errorMessage =
          '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.';
        try {
          const errorData = await signRes.json();
          if (
            typeof errorData === 'object' &&
            errorData !== null &&
            'detail' in errorData &&
            typeof errorData.detail === 'string'
          ) {
            errorMessage = errorData.detail;
          } else if (
            typeof errorData === 'object' &&
            errorData !== null &&
            'message' in errorData &&
            typeof errorData.message === 'string'
          ) {
            errorMessage = errorData.message;
          }
        } catch {
          // JSON 파싱 실패 시 기본 메시지 사용
        }

        // 상태 코드에 따른 에러 메시지 설정
        const status = signRes.status;
        if (status === 400) {
          // 잘못된 요청 (입력값 오류 등)
          setToastOpen({ msg: errorMessage });
        } else if (status === 401 || status === 403) {
          // 인증/권한 오류
          setToastOpen({ msg: errorMessage });
        } else if (status === 409) {
          // 중복 (이미 존재하는 이메일 등)
          setToastOpen({
            msg: errorMessage || '이미 사용 중인 이메일입니다.',
          });
        } else if (status >= 500) {
          // 서버 오류
          setToastOpen({
            msg: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          });
        } else {
          // 기타 클라이언트 오류
          setToastOpen({ msg: errorMessage });
        }
        return;
      }

      // 성공 시 자동 로그인
      try {
        const loginRes = await postLogin({ email: id, password });
        if (loginRes.status === 200) {
          // 토큰 저장 (만료 시간 포함)
          saveTokens(
            loginRes.data.tokens.access_token,
            loginRes.data.tokens.refresh_token,
            loginRes.data.tokens.expires_in || 1799,
            loginRes.data.tokens.refresh_expires_in || 604799
          );
          router.push('/welcome');
        }
      } catch (loginError) {
        // 로그인 실패 시 회원가입은 성공했으므로 welcome 페이지로 이동
        console.error('자동 로그인 실패:', loginError);
        router.push('/welcome');
      }
    } catch (error) {
      // 네트워크 오류 또는 기타 예외
      console.error('회원가입 오류:', error);
      setToastOpen({
        msg: '네트워크 오류가 발생했습니다. 연결을 확인해주세요.',
      });
    }
  };

  useEffect(() => {
    if (!toastOpen) return;
    const t = setTimeout(() => setToastOpen(null), 2500);
    return () => clearTimeout(t);
  }, [toastOpen]);

  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-[745px]:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          회원가입
        </h3>

        <div className='flex flex-col gap-[24px] w-full'>
          {/* 회원구분 */}
          <div className='flex flex-col gap-[12px]'>
            <p className='text-[var(--n-800)] text-[13px] font-medium'>
              회원구분
            </p>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='checkMemberType'
                  id='student'
                  value='student'
                  checked={memberType === 'student'}
                  onChange={(e) => setMemberType(e.target.value as 'student')}
                  className='hidden'
                />
                <label
                  htmlFor='student'
                  className='flex items-center justify-center gap-[8px] cursor-pointer'
                >
                  <Image
                    src={
                      memberType === 'student'
                        ? '/images/radio_on.svg'
                        : '/images/radio_off.svg'
                    }
                    alt='check'
                    width={24}
                    height={24}
                  />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>
                    학생
                  </span>
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='checkMemberType'
                  id='parent'
                  value='parent'
                  checked={memberType === 'parent'}
                  onChange={(e) => setMemberType(e.target.value as 'parent')}
                  className='hidden'
                />
                <label
                  htmlFor='parent'
                  className='flex items-center justify-center gap-[8px] cursor-pointer'
                >
                  <Image
                    src={
                      memberType === 'parent'
                        ? '/images/radio_on.svg'
                        : '/images/radio_off.svg'
                    }
                    alt='check'
                    width={24}
                    height={24}
                  />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>
                    학부모
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* 학교 */}
          <TitleInput
            title='학교'
            placeholder='학교 입력'
            error={schoolError}
            errorMessage='학교명은 2~50자로 입력해주세요.'
            maxLength={50}
            handleKeyDown={handleSchoolKeyDown}
            onCompositionStart={() => setIsComposingSchool(true)}
            onCompositionEnd={(e) => {
              setIsComposingSchool(false);
              let v = e.currentTarget.value;
              // 특수문자와 이모지 제거
              v = v.replace(/[^가-힣a-zA-Z0-9\s]/g, '');
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.currentTarget.value = v;
              setSchool(v);
              setSchoolError(!validateSchool(v));
            }}
            onchange={(e) => {
              if (isComposingSchool) return; // 조합 중이면 onChange 무시
              let v = e.target.value;
              // 특수문자와 이모지 제거
              v = v.replace(/[^가-힣a-zA-Z0-9\s]/g, '');
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.target.value = v;
              setSchool(v);
              setSchoolError(!validateSchool(v));
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setSchoolError(!validateSchool(v));
            }}
          />

          {/* 학년 */}
          <div>
            <div className='flex flex-col gap-[8px] w-full'>
              <p className='text-[#36373A] text-[13px] font-medium'>
                학년<span className='text-[#F6432B]'>*</span>
              </p>

              <Select
                name='grade'
                id='grade'
                placeholder='선택'
                isSearchable={false}
                isClearable={false}
                value={grade?.value === '선택' ? null : grade}
                onChange={(opt) =>
                  setGrade(opt as { value: string; label: string } | null)
                }
                options={[
                  { value: '1', label: '1학년' },
                  { value: '2', label: '2학년' },
                  { value: '3', label: '3학년' },
                ]}
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
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    height: '50px',
                    minHeight: '50px',
                    borderRadius: 8,
                    borderColor: state.isFocused ? '#37383B' : '#D7D8DC',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: 'none',
                    '&:hover': { borderColor: '#37383B' },
                  }),
                  valueContainer: (base) => ({ ...base, padding: '0 16px' }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: '21px',
                    color: '#D7D8DC',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    fontSize: 15,
                    fontWeight: 500,
                    lineHeight: '21px',
                    color: 'var(--n-800)',
                  }),
                  menu: (base) => ({
                    ...base,
                    borderRadius: 8,
                    marginTop: 4,
                    background: 'var(--neutral-n-0, #FFF)',
                    border: '1px solid var(--neutral-n-200, #E2E5EA)',
                    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                    outline: 'none',
                  }),
                  menuList: (base) => ({ ...base, padding: 0 }),
                  option: (base, state) => ({
                    ...base,
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: '21px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    backgroundColor: state.isSelected
                      ? '#F6432B'
                      : state.isFocused
                      ? '#F7F8FC'
                      : 'white',
                    color: state.isSelected ? '#FFFFFF' : '#36373A',
                    '&:active': {
                      backgroundColor: state.isSelected ? '#F6432B' : '#F7F8FC',
                    },
                    outline: 'none',
                    boxShadow: 'none',
                  }),
                }}
              />
            </div>
          </div>

          {/* 이름 */}
          <TitleInput
            title='이름(본명)'
            placeholder='이름 입력'
            error={nameError}
            errorMessage='이름은 2~30자로 입력해주세요.'
            maxLength={30}
            handleKeyDown={handleNameKeyDown}
            onCompositionStart={() => setIsComposingName(true)}
            onCompositionEnd={(e) => {
              setIsComposingName(false);
              let v = e.currentTarget.value;
              // 숫자, 특수문자와 이모지 제거 (한글, 영문, 공백만 허용)
              v = v.replace(/[^가-힣a-zA-Z\s]/g, '');
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.currentTarget.value = v;
              setName(v);
              setNameError(!validateName(v));
            }}
            onchange={(e) => {
              if (isComposingName) return; // 조합 중이면 onChange 무시
              let v = e.target.value;
              // 숫자, 특수문자와 이모지 제거 (한글, 영문, 공백만 허용)
              v = v.replace(/[^가-힣a-zA-Z\s]/g, '');
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.target.value = v;
              setName(v);
              setNameError(!validateName(v));
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setNameError(!validateName(v));
            }}
          />

          {/* 아이디(이메일) */}
          <TitleInput
            title='아이디(이메일)'
            placeholder='이메일 입력'
            error={idError}
            errorMessage='이메일 형식이 올바르지 않습니다.'
            maxLength={100}
            handleKeyDown={handleKeyDown}
            type='text'
            onchange={(e) => {
              const v = e.target.value;
              setId(v);
              setIdError(!validateEmail(v));
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setIdError(!validateEmail(v));
            }}
          />

          {/* 비밀번호 */}
          <TitleInput
            title='비밀번호'
            placeholder='비밀번호 입력'
            error={passwordError}
            errorMessage='영문 대·소문자, 특수문자 포함 8자 이상 입력해주세요.'
            maxLength={64}
            handleKeyDown={handleKeyDown}
            type='password'
            passwordIcon={true}
            onchange={(e) => {
              let v = e.target.value;
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.target.value = v;
              setPassword(v);
              setPasswordError(!validatePassword(v));
              if (passwordConfirm) {
                setPasswordConfirmError(
                  !validatePassword(passwordConfirm) || v !== passwordConfirm
                );
              }
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setPasswordError(!validatePassword(v));
            }}
          />

          {/* 비밀번호 확인 */}
          <TitleInput
            title='비밀번호 확인'
            placeholder='비밀번호 확인'
            error={passwordConfirmError}
            errorMessage='비밀번호가 일치하지 않습니다.'
            passwordIcon={true}
            type='password'
            maxLength={64}
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              let v = e.target.value;
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.target.value = v;
              setPasswordConfirm(v);
              setPasswordConfirmError(!validatePassword(v) || v !== password);
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v)
                setPasswordConfirmError(!validatePassword(v) || v !== password);
            }}
          />

          {/* 휴대폰 번호 */}
          <TitleInput
            title='휴대폰 번호'
            placeholder='01012345678'
            error={phoneError}
            errorMessage='휴대폰 번호는 숫자만 10~11자로 입력해주세요.'
            type='tel'
            maxLength={11}
            handleKeyDown={handlePhoneKeyDown}
            onchange={(e) => {
              let v = e.target.value;
              // 숫자가 아닌 모든 문자 제거 (특수문자, 이모지 포함)
              v = v.replace(/\D/g, '');
              // 이모지 제거 (추가 안전장치)
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.target.value = v;
              setPhone(v);
              setPhoneError(!validatePhone(v));
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setPhoneError(!validatePhone(v));
            }}
          />

          {/* 약관 동의 */}
          <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[12px]'>
                <input
                  type='checkbox'
                  name='agreeAll'
                  id='agreeAll'
                  checked={agreeAll}
                  onChange={(e) => handleAgreeAll(e.target.checked)}
                  className='hidden'
                />
                <label
                  htmlFor='agreeAll'
                  className='flex items-center gap-[12px] cursor-pointer'
                >
                  <Image
                    src={
                      agreeAll
                        ? '/images/checkbox_on.svg'
                        : '/images/checkbox_off.svg'
                    }
                    alt='checkbox'
                    width={24}
                    height={24}
                  />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>
                    전체 동의
                  </span>
                </label>
              </div>
            </div>

            <div className='w-full h-[1px] bg-[var(--n-200)]'></div>

            <div className='flex flex-col gap-[20px]'>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='agreeTerms'
                  className='flex items-center gap-[12px] cursor-pointer'
                >
                  <input
                    type='checkbox'
                    id='agreeTerms'
                    checked={agreeTerms}
                    onChange={(e) =>
                      handleIndividualAgree('terms', e.target.checked)
                    }
                    className='hidden'
                  />
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
                    [필수] 서비스 이용약관
                  </span>
                </label>
                <button
                  type='button'
                  className='text-[14px] leading-[1.4] text-[var(--n-400)]'
                  onClick={() => setShowServiceTerms(true)}
                >
                  보기
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <label
                  htmlFor='agreePrivacy'
                  className='flex items-center gap-[12px] cursor-pointer'
                >
                  <input
                    type='checkbox'
                    id='agreePrivacy'
                    checked={agreePrivacy}
                    onChange={(e) =>
                      handleIndividualAgree('privacy', e.target.checked)
                    }
                    className='hidden'
                  />
                  <Image
                    src={
                      agreePrivacy
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
                <button
                  type='button'
                  className='text-[14px] leading-[1.4] text-[var(--n-400)]'
                  onClick={() => setShowPrivacyTerms(true)}
                >
                  보기
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <label
                  htmlFor='agreeMarketing'
                  className='flex items-center gap-[12px] cursor-pointer'
                >
                  <input
                    type='checkbox'
                    id='agreeMarketing'
                    checked={agreeMarketing}
                    onChange={(e) =>
                      handleIndividualAgree('marketing', e.target.checked)
                    }
                    className='hidden'
                  />
                  <Image
                    src={
                      agreeMarketing
                        ? '/images/checkbox_on.svg'
                        : '/images/checkbox_off.svg'
                    }
                    alt='checkbox'
                    width={24}
                    height={24}
                  />
                  <span className='text+[15px] leading-[18px] text-[var(--n-800)]'>
                    [선택] 마케팅 활용 동의 및 광고 수신 동의
                  </span>
                </label>
                {/* ✅ 모달 열기 버튼 추가 */}
                <button
                  type='button'
                  className='text-[14px] leading-[1.4] text-[var(--n-400)]'
                  onClick={() => setShowMarketingTerms(true)}
                >
                  보기
                </button>
              </div>
            </div>
          </div>

          {/* 가입 버튼 */}
          <button
            disabled={!isFormValid}
            className={`rounded-[8px] h-[50px] w-full transition
              ${
                isFormValid
                  ? 'bg-[var(--r-400)] text-white hover:bg-[var(--r-500)] cursor-pointer'
                  : 'bg-[var(--n-100)] text-[var(--n-400)] cursor-default opacity-60 pointer-events-none'
              }`}
            onClick={handleSignup}
          >
            가입하기
          </button>
        </div>
      </div>
      <ModalCenter
        isOpen={showServiceTerms}
        onClose={() => setShowServiceTerms(false)}
        title='약관 안내'
        width='375px'
        height='567px'
      >
        <div className='overflow-y-auto max-h-full'>
          <p className='px-[20px] mt-[12px] text-[20px] text-[#37383B] font-[700]'>
            이용약관
          </p>
          <div className='px-[20px] mt-[16px] pb-[180px]'>
            <Image
              src='/images/terms-mo.png'
              alt='이용약관 이미지'
              width={335}
              height={100}
              className='w-full h-auto'
              priority
            />
          </div>
        </div>
      </ModalCenter>
      <ModalCenter
        isOpen={showPrivacyTerms}
        onClose={() => setShowPrivacyTerms(false)}
        title='약관 안내'
        width='375px'
        height='567px'
      >
        <div className='overflow-y-auto max-h-full'>
          <p className='px-[20px] mt-[12px] text-[20px] text-[#37383B] font-[700]'>
            개인정보처리방침
          </p>
          <div className='px-[20px] mt-[16px] pb-[180px]'>
            <div className='w-full bg-white rounded-[8px] '>
              {/* 섹션 1: 개인정보의 처리 목적 */}
              <div className='mb-[40px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
                  1. 개인정보의 처리 목적
                </h2>
                <p className='text-[16px] font-[400] leading-[1.6] text-[var(--n-600)] '>
                  회사는 다음의 목적을 위해 개인정보를 처리합니다.
                </p>
                <ul className='list-disc list-inside  text-[16px] font-[400] leading-[1.6] text-[var(--n-600)] pl-[4px]'>
                  <li>
                    <span className='font-[500]'>서비스 제공:</span> 분석 리포트
                    제공, 컨설팅 서비스 이행, 본인 인증 및 요금 정산.
                  </li>
                  <li>
                    <span className='font-[500]'>회원 관리:</span> 회원제 서비스
                    이용, 부정이용 방지, 민원 처리 등.
                  </li>
                  <li>
                    <span className='font-[500]'>
                      마케팅 및 광고 활용 (선택 동의 시):
                    </span>{' '}
                    신규 서비스 및 이벤트 정보 제공, 맞춤형 광고 등.
                  </li>
                </ul>
              </div>

              {/* 섹션 2: 수집하는 개인정보 항목 및 수집 방법 */}
              <div className='mb-[40px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[24px] max-[745px]:text-[18px]'>
                  2. 수집하는 개인정보 항목 및 수집 방법
                </h2>
                <div className='mt-[16px]'>
                  <Image
                    src='/images/privacy-collection-mo.png'
                    alt='개인정보 수집 및 이용 동의 이미지'
                    width={335}
                    height={100}
                    className='w-full h-auto'
                    priority
                  />
                </div>
              </div>

              {/* 섹션 3: 개인정보의 제3자 제공에 관한 사항 */}
              <div className='mb-[40px] max-[745px]:pr-[20px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[24px] max-[745px]:text-[18px]'>
                  3. 개인정보의 제3자 제공에 관한 사항
                </h2>
                <p className='text-[15px] leading-[1.4] text-[var(--n-800)] mb-[8px]'>
                  회사는 원칙적으로 제1조에서 명시한 목적 범위를 초과하여
                  개인정보를 이용하거나 다른 회사 및 기관에 제공하지 않습니다.
                </p>
                <p className='text-[15px] leading-[1.4] text-[var(--n-800)]'>
                  다만, 이용자가 사전에 동의한 경우 또는 법령에 의하여 수사·조사
                  등의 목적으로 관계기관으로부터 요구가 있는 경우에는 예외로
                  합니다.
                </p>
              </div>

              {/* 섹션 4: 개인정보의 처리 위탁에 관한 사항 */}
              <div className='mb-[40px] '>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[24px] max-[745px]:text-[18px]'>
                  4. 개인정보의 처리 위탁에 관한 사항
                </h2>
                <div className='w-full overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px] max-[745px]:pl-[0px]'>
                  <div className='w-full border-t-[var(--n-800)] border-t min-w-[600px] hidden max-[745px]:block'></div>
                  <table className='w-full border-collapse max-[745px]:min-w-[600px]'>
                    <colgroup>
                      <col width='132px' />
                      <col width='361px' />
                      <col width='361px' />
                    </colgroup>
                    <thead>
                      <tr className='bg-[var(--n-50)]'>
                        <th className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                          구분
                        </th>
                        <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                          위탁받는자
                        </th>
                        <th className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                          위탁하는 업무의 내용
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                          결제
                        </td>
                        <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                          (주)NHN KCP
                        </td>
                        <td className='border border-[var(--n-200)] border-r-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                          결제 대행서비스
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                          개발 및 운영 유지보수
                        </td>
                        <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                          (주)AX
                        </td>
                        <td className='border border-[var(--n-200)] border-r-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                          서비스제공을 위한 시스템 개발 및 운영, 이용자정보
                          DB시스템 구축 및 운영 관리(전산 아웃소싱 등)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 섹션 5: 개인정보의 안전성 확보 조치  */}
              <div className='mb-[40px] max-[745px]:pr-[20px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[32px] max-[745px]:text-[18px]'>
                  5. 개인정보의 안전성 확보 조치
                </h2>
                <ul className='space-y-[12px] text-[15px] leading-[1.4] text-[var(--n-800)]'>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      <span className='font-[600] text-[var(--n-800)]'>
                        개인정보 마스킹 처리:
                      </span>{' '}
                      생기부 분석 데이터는 학생의 모든 개인정보를 마스킹
                      처리하여 특정인을 특정할 수 없도록 관리됩니다.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <div className='flex-1'>
                      <span className='font-[600] text-[var(--n-800)]'>
                        접근 통제 및 로그 관리:
                      </span>
                      <ul className='mt-[8px]  pl-[20px]'>
                        <li className='flex items-start'>
                          <span className='mr-[6px]'>•</span>
                          <span>
                            기관 회원, 컨설턴트 회원의 정보 접근 권한은
                            제10조(기관 및 컨설턴트의 정보 접근 권한 및 관리)에
                            따라 엄격히 통제됩니다.
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <span className='mr-[6px]'>•</span>
                          <span>
                            기관 회원은 소속 회원의 목록 및 컨설팅 신청 내역만
                            확인할 수 있습니다.
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <span className='mr-[6px]'>•</span>
                          <span>
                            컨설턴트 회원은 배정받은 컨설팅 신청 건에 한해서만
                            관련 정보를 열람할 수 있습니다.
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <span className='mr-[6px]'>•</span>
                          <span>
                            기관 및 컨설턴트가 개별 개인정보를 열람하는 경우
                            로그 기록이 남으며, 최고관리자 및 기관관리자의
                            확인이 가능하도록 시스템을 운영하여 개인정보의
                            오남용을 방지합니다.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      <span className='font-[600] text-[var(--n-800)]'>
                        기술적/관리적 보호조치:
                      </span>{' '}
                      개인정보 암호화, 보안 프로그램 설치, 접근 권한 최소화 등.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      <span className='font-[600] text-[var(--n-800)]'>
                        암호화:
                      </span>{' '}
                      비밀번호 및 결제 정보 등 주요 개인정보는 암호화되어 저장
                      및 관리됩니다.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 섹션 6: 이용자 및 법정대리인의 권리 행사 방법 */}
              <div className='mb-[40px] max-[745px]:pr-[20px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
                  6. 이용자 및 법정대리인의 권리 행사 방법
                </h2>
                <ul className='] text-[15px] leading-[1.4] text-[var(--n-800)]'>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      이용자 및 만 14세 미만 아동의 법정대리인은 언제든지
                      등록되어 있는 자신의 개인정보를 조회하거나 수정할 수
                      있으며, 회원 탈퇴를 요청하거나 개인정보 처리 동의를 철회할
                      수 있습니다.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      권리 행사는 회사에 서면, 전화, 전자우편 등을 통해 연락하여
                      가능하며, 회사는 지체 없이 조치합니다.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 섹션 7: 만 14세 미만 아동의 개인정보 처리 */}
              <div className='mb-[40px] max-[745px]:pr-[20px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
                  7. 만 14세 미만 아동의 개인정보 처리
                </h2>
                <ul className=' text-[15px] leading-[1.4] text-[var(--n-800)]'>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      회사는 만 14세 미만 아동의 개인정보를 수집/이용하는 경우
                      「개인정보보호법」에 따라 법정대리인의 동의를 받습니다.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      회사는 법정대리인의 동의를 얻기 위하여 필요한 최소한의
                      정보를 요청할 수 있습니다.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 섹션 8: 개인정보 보호책임자 및 고지의 의무 */}
              <div className='mb-[40px] max-[745px]:pr-[20px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
                  8. 개인정보 보호책임자 및 고지의 의무
                </h2>
                <ul className=' text-[15px] leading-[1.4] text-[var(--n-800)]'>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      <span className='font-[600] text-[var(--n-800)]'>
                        개인정보 보호책임자:
                      </span>{' '}
                      이지나 (대표) / 연락처: 010-1234-5678, ceo@istrueedu.kr
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      본 방침이 변경될 경우 개정 최소 7일 전(중요한 변경사항은
                      30일 전)에 공지를 통해 안내합니다.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 섹션 9: 개인정보 처리방침 변경 */}
              <div className='mb-[40px] max-[745px]:pr-[20px]'>
                <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
                  9. 개인정보 처리방침 변경
                </h2>
                <ul className='text-[15px] leading-[1.4] text-[var(--n-800)]'>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      본 개인정보 처리방침은 2025년 12월 01일부터 적용 및
                      시행됩니다.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-[8px]'>•</span>
                    <span>
                      이전의 개인정보 처리방침은 아래에서 확인할 수 있습니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ModalCenter>
      <ModalCenter
        isOpen={showMarketingTerms}
        onClose={() => setShowMarketingTerms(false)}
        title='약관 안내'
        width='375px'
        height='567px'
      >
        <div className='overflow-y-auto max-h-full'>
          <p className='px-[20px] mt-[12px] text-[20px] text-[#37383B] font-[700]'>
            마케팅 활용 동의 및 광고 수신 동의
          </p>
          <div className='px-[20px] mt-[16px] pb-[180px]'>
            <Image
              src='/images/marketing-mo.png'
              alt='이용약관 이미지'
              width={335}
              height={100}
              className='w-full h-auto'
              priority
            />
          </div>
        </div>
      </ModalCenter>
      {/* 토스트 */}
      {toastOpen && (
        <div className='fixed bottom-4 right-4 z-[9999]'>
          <div className='min-w-[260px] max-w-[320px] rounded-[10px] bg-[var(--n-900)] text-white px-4 py-3 shadow-lg'>
            <p className='text-[14px]'>{toastOpen.msg}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
