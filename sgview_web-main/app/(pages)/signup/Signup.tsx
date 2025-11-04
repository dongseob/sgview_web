'use client';

import { TitleInput } from '@/app/component/Input/input';
import Image from 'next/image';
import { useState } from 'react';

const Signup = () => {
  const [memberType, setMemberType] = useState('student');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };
  const handleSignup = () => {
    console.log('signup');
  };
  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          로그인
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
            title='아이디(이메일)'
            placeholder='이메일 입력'
            error={idError}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setId(e.target.value)}
            onblur={(e) => {
              if (!e.target.value || !validateEmail(e.target.value)) {
                setIdError(true);
              } else {
                setIdError(false);
              }
            }}
          />
          <TitleInput
            title='이름(본명)'
            placeholder='이름 입력'
            error={idError}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setId(e.target.value)}
            onblur={(e) => {
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
            handleKeyDown={handleKeyDown}
            onchange={(e) => setPassword(e.target.value)}
            onblur={(e) => {
              if (!e.target.value || e.target.value.length < 4) {
                setPasswordError(true);
              } else {
                setPasswordError(false);
              }
            }}
          />
          <TitleInput
            title='비밀번호'
            placeholder='비밀번호 확인'
            error={idError}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setId(e.target.value)}
            onblur={(e) => {
              if (!e.target.value || !validateEmail(e.target.value)) {
                setIdError(true);
              } else {
                setIdError(false);
              }
            }}
          />
          <TitleInput
            title='휴대폰 번호'
            placeholder='휴대폰 번호 입력'
            error={idError}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setId(e.target.value)}
            onblur={(e) => {
              if (!e.target.value || !validateEmail(e.target.value)) {
                setIdError(true);
              } else {
                setIdError(false);
              }
            }}
          />
          <div className='flex flex-col gap-[20px]'>
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
              <span className='text-[14px] leading-[1.4] text-[var(--n-400)]'>
                보기
              </span>
            </div>
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
          <button
            className='bg-[var(--n-100)] rounded-[8px] h-[50px] w-full text-[var(--n-400)] cursor-pointer'
            onClick={handleSignup}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
