'use client';

import { TitleInput } from '@/app/component/Input/input';
import ModalCenter from '@/app/component/Modal/ModalCenter';
import { serviceTerms } from '@/app/data/serviceTerms';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const Select = dynamic(() => import('react-select'), { ssr: false });

const Signup = () => {
  const [memberType, setMemberType] = useState<'student' | 'parent'>('student'); // 디폴트: 학생
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

  const validatePhone = (p: string) => /^[0-9]{10,11}$/.test(p); // 숫자만 10~11자리

  // ====== Form Valid ======
  const isFormValid = useMemo(() => {
    const ok =
      !idError &&
      !passwordError &&
      !passwordConfirmError &&
      !schoolError &&
      !nameError &&
      !phoneError &&
      memberType && // 학생/학부모 중 하나
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

  const handleIndividualAgree = (type: 'terms' | 'privacy' | 'marketing', checked: boolean) => {
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
    if (e.key === 'Enter' && isFormValid) {
      handleSignup();
    }
  };

  // ====== Signup flow ======
  const handleSignup = async () => {
    if (!isFormValid) return;

    try {
      // 1) 회원가입 API
      const signRes = await fetch('/api/signup', {
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
      });

      if (!signRes.ok) {
        setToastOpen({ msg: '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.' });
        return;
      }

      // 2) (선택) 자동 로그인
      const loginRes = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });

      if (!loginRes.ok) {
        setToastOpen({ msg: '로그인에 실패했습니다. 다시 로그인해주세요.' });
        // 로그인 실패 시 로그인 페이지로 보낼지 유지할지 정책에 따라 조정
        return;
      }

      router.push('/welcome');
    } catch (e) {
      setToastOpen({ msg: '네트워크 오류가 발생했습니다.' });
    }
  };

  // 토스트 자동 닫힘
  useEffect(() => {
    if (!toastOpen) return;
    const t = setTimeout(() => setToastOpen(null), 2500);
    return () => clearTimeout(t);
  }, [toastOpen]);

  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-md:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>회원가입</h3>

        <div className='flex flex-col gap-[24px] w-full'>
          {/* 회원구분 (필수) */}
          <div className='flex flex-col gap-[12px]'>
            <p className='text-[var(--n-800)] text-[13px] font-medium'>회원구분</p>
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
                <label htmlFor='student' className='flex items-center justify-center gap-[8px] cursor-pointer'>
                  <Image src={memberType === 'student' ? '/images/radio_on.svg' : '/images/radio_off.svg'} alt='check' width={24} height={24} />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>학생</span>
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
                <label htmlFor='parent' className='flex items-center justify-center gap-[8px] cursor-pointer'>
                  <Image src={memberType === 'parent' ? '/images/radio_on.svg' : '/images/radio_off.svg'} alt='check' width={24} height={24} />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>학부모</span>
                </label>
              </div>
            </div>
          </div>

          {/* 학교 (필수) */}
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

          {/* 학년 (필수) */}
          <Select
            name='grade'
            id='grade'
            placeholder='선택'
            isSearchable={false}
            isClearable={false}
            value={grade?.value === '선택' ? null : grade}
            onChange={(opt) => setGrade(opt as { value: string; label: string } | null)}
            options={[
              { value: '1', label: '1학년' },
              { value: '2', label: '2학년' },
              { value: '3', label: '3학년' },
            ]}
            components={{
              DropdownIndicator: () => (
                <div className='pr-[16px] flex items-center'>
                  <Image src='/images/icon-arrow-24.svg' alt='arrow' width={24} height={24} />
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
                // ✅ 파란 outline / ring 완전 제거
                outline: 'none',
                boxShadow: 'none',
                '&:hover': { borderColor: '#37383B' },
              }),
              valueContainer: (base) => ({
                ...base,
                padding: '0 16px',
              }),
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
                // ✅ focus 시 파란 outline 제거
                outline: 'none',
              }),
              menuList: (base) => ({
                ...base,
                padding: 0,
              }),
              option: (base, state) => ({
                ...base,
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '21px',
                padding: '12px 16px',
                cursor: 'pointer',
                backgroundColor: state.isSelected ? '#F6432B' : state.isFocused ? '#F7F8FC' : 'white',
                color: state.isSelected ? '#FFFFFF' : '#36373A',
                '&:active': {
                  backgroundColor: state.isSelected ? '#F6432B' : '#F7F8FC',
                },
                // ✅ 옵션 hover 중에도 파란 outline 제거
                outline: 'none',
                boxShadow: 'none',
              }),
            }}
          />

          {/* 이름 (필수) */}
          <TitleInput
            title='이름(본명)'
            placeholder='이름 입력'
            error={nameError}
            errorMessage='이름은 2~30자로 입력해주세요.'
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

          {/* 아이디(이메일) (필수) */}
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

          {/* 비밀번호 (필수) */}
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
              // 확인창도 동기 일치 검사
              if (passwordConfirm) {
                setPasswordConfirmError(!validatePassword(passwordConfirm) || v !== passwordConfirm);
              }
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setPasswordError(!validatePassword(v));
            }}
          />

          {/* 비밀번호 확인 (필수) */}
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
              // 규칙 검증 + 일치 검증
              setPasswordConfirmError(!validatePassword(v) || v !== password);
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setPasswordConfirmError(!validatePassword(v) || v !== password);
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
            // 숫자만 허용
            onchange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, '');
              setPhone(onlyDigits);
              setPhoneError(!validatePhone(onlyDigits));
            }}
            onblur={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, '');
              if (onlyDigits) setPhoneError(!validatePhone(onlyDigits));
            }}
            // TitleInput 내부가 inputProps를 전달받을 수 있다면 아래도 추가 권장:
            // inputMode='numeric' pattern='[0-9]*'
          />

          {/* 약관 동의 */}
          <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[12px]'>
                <input type='checkbox' name='agreeAll' id='agreeAll' checked={agreeAll} onChange={(e) => handleAgreeAll(e.target.checked)} className='hidden' />
                <label htmlFor='agreeAll' className='flex items-center gap-[12px] cursor-pointer'>
                  <Image src={agreeAll ? '/images/checkbox_on.svg' : '/images/checkbox_off.svg'} alt='checkbox' width={24} height={24} />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>전체 동의</span>
                </label>
              </div>
            </div>

            <div className='w-full h-[1px] bg-[var(--n-200)]'></div>

            <div className='flex flex-col gap-[20px]'>
              <div className='flex items-center justify-between'>
                <label htmlFor='agreeTerms' className='flex items-center gap-[12px] cursor-pointer'>
                  <input
                    type='checkbox'
                    id='agreeTerms'
                    checked={agreeTerms}
                    onChange={(e) => handleIndividualAgree('terms', e.target.checked)}
                    className='hidden'
                  />
                  <Image src={agreeTerms ? '/images/checkbox_on.svg' : '/images/checkbox_off.svg'} alt='checkbox' width={24} height={24} />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>[필수] 서비스 이용약관</span>
                </label>
                <button type='button' className='text-[14px] leading-[1.4] text-[var(--n-400)]' onClick={() => setShowServiceTerms(true)}>
                  보기
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor='agreePrivacy' className='flex items-center gap-[12px] cursor-pointer'>
                  <input
                    type='checkbox'
                    id='agreePrivacy'
                    checked={agreePrivacy}
                    onChange={(e) => handleIndividualAgree('privacy', e.target.checked)}
                    className='hidden'
                  />
                  <Image src={agreePrivacy ? '/images/checkbox_on.svg' : '/images/checkbox_off.svg'} alt='checkbox' width={24} height={24} />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>[필수] 개인정보 수집 및 이용 동의</span>
                </label>
                <button type='button' className='text-[14px] leading-[1.4] text-[var(--n-400)]' onClick={() => setShowPrivacyTerms(true)}>
                  보기
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor='agreeMarketing' className='flex items-center gap-[12px] cursor-pointer'>
                  <input
                    type='checkbox'
                    id='agreeMarketing'
                    checked={agreeMarketing}
                    onChange={(e) => handleIndividualAgree('marketing', e.target.checked)}
                    className='hidden'
                  />
                  <Image src={agreeMarketing ? '/images/checkbox_on.svg' : '/images/checkbox_off.svg'} alt='checkbox' width={24} height={24} />
                  <span className='text-[15px] leading-[18px] text-[var(--n-800)]'>[선택] 마케팅 활용 동의 및 광고 수신 동의</span>
                </label>
                <span className='text-[14px] leading-[1.4] text-[var(--n-400)]'>보기</span>
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

      {/* 약관 모달 */}
      <ModalCenter isOpen={showServiceTerms} onClose={() => setShowServiceTerms(false)} title='약관안내' width='375px' height='567px'>
        <>
          <div className='flex flex-col gap-[24px] max-h-full overflow-y-auto p-[20px] pt-[16px] h-[406px]'>
            <p className='text-[20px] font-[700] text-[var(--n-800)]'>이용약관</p>
            {serviceTerms.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className='flex flex-col gap-[16px]'>
                <h3 className='text-[20px] font-[700] text-[var(--n-800)]'>{section.chapter}</h3>
                {section.articles ? (
                  section.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className='flex flex-col gap-[8px]'>
                      <h4 className='text-[15px] font-[600] text-[var(--n-800)]'>
                        {article.number} ({article.title})
                      </h4>
                      <p className='text-[14px] text-[var(--n-700)] whitespace-pre-line leading-[1.6]'>{article.content}</p>
                    </div>
                  ))
                ) : (
                  <p className='text-[14px] text-[var(--n-700)] whitespace-pre-line leading-[1.6]'>{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </>
      </ModalCenter>

      {/* 개인정보 처리방침 모달 (데이터 소스가 다르면 교체) */}
      <ModalCenter isOpen={showPrivacyTerms} onClose={() => setShowPrivacyTerms(false)} title='개인정보 처리방침' width='375px' height='567px'>
        <>
          <p className='text-[20px] font-[700] text-[var(--n-800)] px-[20px]'>개인정보 처리방침</p>
          <div className='flex flex-col gap-[16px] max-h-full overflow-y-auto p-[20px] pt-[16px] pb-[216px]'>
            <p className='text-[14px] text-[var(--n-700)] leading-[1.6]'>개인정보 처리방침 내용을 여기에 표시하세요. (별도 데이터가 있다면 연결)</p>
          </div>
        </>
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
