'use client';

import { TitleInput } from '@/app/component/Input/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const isFormValid = !idError && !passwordError && id && password;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isFormValid) {
      handleLogin();
    }
  };

  const handleLogin = () => {
    if (!isFormValid) return;
    alert('로그인 함수 실행')
  };
  const validateEmail = (email: string) => {
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

  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto  py-[32px] flex flex-col items-center justify-start gap-[32px] max-md:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>로그인</h3>
        <div className='flex flex-col gap-[24px] w-full'>
          <TitleInput
            title='아이디(이메일)'
            placeholder='이메일 입력'
            error={idError}
            errorMessage='올바른 이메일 형식이 아닙니다.'
            maxLength={64}
            handleKeyDown={handleKeyDown}
            type='text'
            onchange={(e) => {
              setId(e.target.value);
              // 입력 중 실시간 유효성 검사
              if (e.target.value && !validateEmail(e.target.value)) {
                setIdError(true);
              } else {
                setIdError(false);
              }
            }}
            onblur={(e) => {
              // 포커스 아웃 시 유효성 검사
              if (e.target.value && !validateEmail(e.target.value)) {
                setIdError(true);
              }
            }}
          />
          <TitleInput
            title='비밀번호'
            placeholder='비밀번호 입력'
            error={passwordError}
            errorMessage='비밀번호는 8자 이상, 영문 대/소문자, 특수문자를 포함해야 합니다.'
            maxLength={100}
            handleKeyDown={handleKeyDown}
            type='password'
            passwordIcon={true}
            onchange={(e) => {
              setPassword(e.target.value);
              // 입력 중 실시간 유효성 검사
              if (e.target.value && !validatePassword(e.target.value)) {
                setPasswordError(true);
              } else {
                setPasswordError(false);
              }
            }}
            onblur={(e) => {
              // 포커스 아웃 시 유효성 검사
              if (e.target.value && !validatePassword(e.target.value)) {
                setPasswordError(true);
              }
            }}
          />
          <div className='flex flex-col items-center justify-center gap-[24px]'>
            <button
              disabled={!isFormValid}
              className={`rounded-[8px] h-[50px] w-full transition
    ${
      isFormValid
        ? 'bg-[var(--r-400)] text-white cursor-pointer hover:bg-[var(--r-500)]'
        : 'bg-[var(--n-100)] text-[var(--n-400)] cursor-default opacity-60 pointer-events-none'
    }`}
              onClick={handleLogin}
            >
              로그인
            </button>

            <div className='flex items-center justify-center gap-[8px]'>
              <Link href='/find-id' className='text-[14px] font-[400] leading-[1.5] text-[var(--n-600)]'>
                아이디 찾기
              </Link>
              <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
              <Link href='/find-password' className='text-[14px] font-[400] leading-[1.5] text-[var(--n-600)]'>
                비밀번호 재설정
              </Link>
              <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
              <Link href='/signup' className='text-[14px] font-[400] leading-[1.5] text-[var(--n-600)]'>
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
