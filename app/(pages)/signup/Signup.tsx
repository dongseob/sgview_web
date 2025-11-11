'use client';

import { postLogin } from '@/app/api/member';
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

  // ====== Keyboard ======
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isFormValid) handleSignup();
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
          localStorage.setItem(
            'accessToken',
            loginRes.data.tokens.access_token
          );
          localStorage.setItem(
            'refreshToken',
            loginRes.data.tokens.refresh_token
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
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              const v = e.target.value;
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
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              const v = e.target.value;
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
              const v = e.target.value;
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
              const v = e.target.value;
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
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, '');
              setPhone(onlyDigits);
              setPhoneError(!validatePhone(onlyDigits));
            }}
            onblur={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, '');
              if (onlyDigits) setPhoneError(!validatePhone(onlyDigits));
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
            <Image
              src='/images/privacy-mo.png'
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
