'use client';

import { TitleInput } from '@/app/component/Input/input';
import ModalCenter from '@/app/component/Modal/ModalCenter';
import { serviceTerms } from '@/app/data/serviceTerms';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Select = dynamic(() => import('react-select'), { ssr: false });

const Signup = () => {
  const [memberType, setMemberType] = useState('student');
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [schoolError, setSchoolError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showServiceTerms, setShowServiceTerms] = useState(false);
  const [school, setSchool] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState<{ value: string; label: string } | null>({
    value: '선택',
    label: '선택',
  });
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };
  const handleSignup = () => {
    if (
      !idError &&
      !passwordError &&
      !passwordConfirmError &&
      !schoolError &&
      !nameError &&
      !phoneError &&
      grade?.value !== '선택' &&
      !agreeTerms &&
      !agreePrivacy
    ) {
      return;
    }
    router.push('/welcome');
  };

  // 전체 동의 처리
  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeMarketing(checked);
  };

  // 개별 체크박스 처리
  const handleIndividualAgree = (
    type: 'terms' | 'privacy' | 'marketing',
    checked: boolean
  ) => {
    if (type === 'terms') setAgreeTerms(checked);
    if (type === 'privacy') setAgreePrivacy(checked);
    if (type === 'marketing') setAgreeMarketing(checked);

    // 모든 항목이 체크되었는지 확인
    const newTerms = type === 'terms' ? checked : agreeTerms;
    const newPrivacy = type === 'privacy' ? checked : agreePrivacy;
    const newMarketing = type === 'marketing' ? checked : agreeMarketing;

    setAgreeAll(newTerms && newPrivacy && newMarketing);
  };
  const validateEmail = (email: string) => {
    if (email.length < 6) return false;
    // 표준 이메일 정규식 패턴
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // 최소 8자 이상
    if (password.length < 8) return false;

    // 영문 대문자 포함 여부
    if (!/[A-Z]/.test(password)) return false;

    // 영문 소문자 포함 여부
    if (!/[a-z]/.test(password)) return false;

    // 특수문자 포함 여부
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

    return true;
  };

  const validatePhone = (phone: string) => {
    // 숫자만 10~11자리 (010-xxxx-xxxx 형식을 숫자로만)
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone);
  };
  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-md:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          회원가입
        </h3>
        <div className='flex flex-col gap-[24px] w-full'>
          <div className='flex flex-col gap-[24px] w-full'>
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
                    onChange={(e) => setMemberType(e.target.value)}
                    className='hidden'
                  />
                  <label
                    htmlFor='student'
                    className='flex items-center justify-center gap-[8px] cursor-pointer'
                  >
                    <Image
                      src={
                        memberType === 'student'
                          ? '/Images/radio_on.svg'
                          : '/Images/radio_off.svg'
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
                    onChange={(e) => setMemberType(e.target.value)}
                    className='hidden'
                  />
                  <label
                    htmlFor='parent'
                    className='flex items-center justify-center gap-[8px] cursor-pointer'
                  >
                    <Image
                      src={
                        memberType === 'parent'
                          ? '/Images/radio_on.svg'
                          : '/Images/radio_off.svg'
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
          </div>
          <TitleInput
            title='학교'
            placeholder='학교 입력'
            error={schoolError}
            maxLength={50}
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              setSchool(e.target.value);
              if (e.target.value.length > 2) {
                setSchoolError(true);
              } else {
                setSchoolError(false);
              }
            }}
          />
          <div>
            <div className='flex flex-col gap-[8px] w-full'>
              <p className='text-[#36373A] text-[13px] font-medium'>
                학년<span className='text-[#F6432B]'>*</span>
              </p>
              <Select
                name='grade'
                id='grade'
                placeholder='선택'
                value={grade}
                onChange={(selectedOption) =>
                  setGrade(
                    selectedOption as { value: string; label: string } | null
                  )
                }
                options={[
                  { value: '선택', label: '선택' },
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                ]}
                components={{
                  DropdownIndicator: () => (
                    <div className='pr-[16px] flex items-center'>
                      <Image
                        src='/Images/icon-arrow-24.svg'
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
                    height: '50px',
                    minHeight: '50px',
                    borderRadius: '8px',
                    borderColor: state.isFocused ? '#D7D8DC' : '#D7D8DC',
                    boxShadow: state.isFocused ? 'none' : 'none',
                    '&:hover': {
                      borderColor: '#D7D8DC',
                    },
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '0px 16px',
                    display: 'flex',
                    alignItems: 'center',
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#D7D8DC',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    fontSize: '15px',
                    fontWeight: '400',
                    color: 'var(--n-800)',
                  }),
                  menu: (base) => ({
                    ...base,
                    borderRadius: '8px',
                    marginTop: '4px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
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
                    '&:active': {
                      backgroundColor: '#F6432B',
                    },
                  }),
                  indicatorSeparator: () => ({
                    display: 'none',
                  }),
                }}
              />
            </div>
          </div>

          <TitleInput
            title='이름(본명)'
            placeholder='이름 입력'
            error={nameError}
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              setName(e.target.value);
              if (e.target.value.length < 2) {
                setNameError(true);
              } else {
                setNameError(false);
              }
            }}
          />
          <TitleInput
            title='아이디(이메일)'
            placeholder='아이디(이메일) 입력'
            error={idError}
            errorMessage='올바른 이메일 형식으로 입력해주세요'
            maxLength={64}
            handleKeyDown={handleKeyDown}
            type='text'
            onchange={(e) => {
              setId(e.target.value);
              if (!e.target.value || !validateEmail(e.target.value)) {
                setIdError(true);
              } else {
                setIdError(false);
              }
            }}
          />
          <TitleInput
            title='비밀번호'
            placeholder='비밀번호 입력'
            error={passwordError}
            maxLength={100}
            handleKeyDown={handleKeyDown}
            type='password'
            passwordIcon={true}
            errorMessage='영문 대·소문자, 특수문자 포함 8자 이상 입력해주세요'
            onchange={(e) => {
              setPassword(e.target.value);
              if (!e.target.value || !validatePassword(e.target.value)) {
                setPasswordError(true);
              } else {
                setPasswordError(false);
              }
            }}
          />
          <TitleInput
            title='비밀번호 확인'
            placeholder='비밀번호 확인'
            error={passwordConfirmError}
            errorMessage='비밀번호가 일치하지 않습니다.'
            passwordIcon={true}
            type='password'
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              if (e.target.value && password !== e.target.value) {
                setPasswordConfirmError(true);
              } else {
                setPasswordConfirmError(false);
              }
            }}
          />
          <TitleInput
            title='휴대폰 번호'
            placeholder='휴대폰 번호 입력'
            error={phoneError}
            type='number'
            maxLength={11}
            handleKeyDown={handleKeyDown}
            onchange={(e) => {
              setPhone(e.target.value);
              if (e.target.value && !validatePhone(e.target.value)) {
                setPhoneError(true);
              } else {
                setPhoneError(false);
              }
            }}
          />
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
                        ? '/Images/checkbox_on.svg'
                        : '/Images/checkbox_off.svg'
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
                <div className='flex items-center gap-[12px]'>
                  <input
                    type='checkbox'
                    name='agreeTerms'
                    id='agreeTerms'
                    checked={agreeTerms}
                    onChange={(e) =>
                      handleIndividualAgree('terms', e.target.checked)
                    }
                    className='hidden'
                  />
                  <label
                    htmlFor='agreeTerms'
                    className='flex items-center gap-[12px] cursor-pointer'
                  >
                    <Image
                      src={
                        agreeTerms
                          ? '/Images/checkbox_on.svg'
                          : '/Images/checkbox_off.svg'
                      }
                      alt='checkbox'
                      width={24}
                      height={24}
                    />
                    <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>
                      [필수] 서비스 이용약관
                    </span>
                  </label>
                </div>
                <span
                  className='text-[14px] leading-[1.4] text-[var(--n-400)]'
                  onClick={() => setShowServiceTerms(true)}
                >
                  보기
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[12px]'>
                  <input
                    type='checkbox'
                    name='agreePrivacy'
                    id='agreePrivacy'
                    checked={agreePrivacy}
                    onChange={(e) =>
                      handleIndividualAgree('privacy', e.target.checked)
                    }
                    className='hidden'
                  />
                  <label
                    htmlFor='agreePrivacy'
                    className='flex items-center gap-[12px] cursor-pointer'
                  >
                    <Image
                      src={
                        agreePrivacy
                          ? '/Images/checkbox_on.svg'
                          : '/Images/checkbox_off.svg'
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
                <span className='text-[14px] leading-[1.4] text-[var(--n-400)]'>
                  보기
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[12px]'>
                  <input
                    type='checkbox'
                    name='agreeMarketing'
                    id='agreeMarketing'
                    checked={agreeMarketing}
                    onChange={(e) =>
                      handleIndividualAgree('marketing', e.target.checked)
                    }
                    className='hidden'
                  />
                  <label
                    htmlFor='agreeMarketing'
                    className='flex items-center gap-[12px] cursor-pointer'
                  >
                    <Image
                      src={
                        agreeMarketing
                          ? '/Images/checkbox_on.svg'
                          : '/Images/checkbox_off.svg'
                      }
                      alt='checkbox'
                      width={24}
                      height={24}
                    />
                    <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>
                      [선택] 마케팅 활용 동의 및 광고 수신 동의
                    </span>
                  </label>
                </div>
                <span className='text-[14px] leading-[1.4] text-[var(--n-400)]'>
                  보기
                </span>
              </div>
            </div>
          </div>
          <button
            className={`${
              !idError &&
              !passwordError &&
              !passwordConfirmError &&
              !schoolError &&
              !nameError &&
              !phoneError &&
              id &&
              password &&
              school &&
              name &&
              phone &&
              grade &&
              grade.value !== '선택' &&
              agreeTerms &&
              agreePrivacy
                ? 'bg-[var(--r-400)] text-white'
                : 'bg-[var(--n-100)] text-[var(--n-400)]'
            } rounded-[8px] h-[50px] w-full cursor-pointer`}
            onClick={handleSignup}
          >
            가입하기
          </button>
        </div>
      </div>
      <ModalCenter
        isOpen={showServiceTerms}
        onClose={() => setShowServiceTerms(false)}
        title='약관안내'
        width='375px'
        height='567px'
      >
        <>
          <p className='text-[20px] font-[700] text-[var(--n-800)] px-[20px]'>
            이용약관
          </p>
          <div className='flex flex-col gap-[24px] max-h-full overflow-y-auto p-[20px] pt-[16px] pb-[216px]'>
            {/* 효력 및 시행일 */}

            {/* 각 장(Section) */}
            {serviceTerms.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className='flex flex-col gap-[16px]'>
                {/* 장 제목 */}
                <h3 className='text-[20px] font-[700] text-[var(--n-800)]'>
                  {section.chapter}
                </h3>

                {/* 조항들 */}
                {section.articles ? (
                  section.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className='flex flex-col gap-[8px]'>
                      <h4 className='text-[15px] font-[600] text-[var(--n-800)]'>
                        {article.number} ({article.title})
                      </h4>
                      <p className='text-[14px] text-[var(--n-700)] whitespace-pre-line leading-[1.6]'>
                        {article.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className='text-[14px] text-[var(--n-700)] whitespace-pre-line leading-[1.6]'>
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      </ModalCenter>
    </div>
  );
};

export default Signup;
