'use client';

import { TitleInput } from '@/app/component/Input/input';
import { useState } from 'react';

const Login = () => {
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
  const handleLogin = () => {
    console.log('login');
  };
  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto'>
      <div className='w-full max-w-[368px] mx-auto  py-[32px] flex flex-col items-center justify-start gap-[32px]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          로그인
        </h3>
        <div className='flex flex-col gap-[24px] w-full'>
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
          <button
            className='bg-[#F6432B] rounded-[8px] h-[50px] w-full text-white cursor-pointer'
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
