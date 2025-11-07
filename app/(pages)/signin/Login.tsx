'use client';

import { TitleInput } from '@/app/component/Input/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const EMAIL_MIN = 6;
const EMAIL_MAX = 100;
const PW_MIN = 8;
const PW_MAX = 64;

const Login = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // 유효성
  const isEmailValid = id.trim().length >= EMAIL_MIN && id.trim().length <= EMAIL_MAX;
  const isPasswordValid = password.trim().length >= PW_MIN && password.trim().length <= PW_MAX;

  // 토스트 메시지
  const ERROR_MSG = '아이디 또는 비밀번호가 올바르지 않습니다.';
  const showToast = useCallback(() => setToastMsg(ERROR_MSG), []);

  useEffect(() => {
    if (!toastMsg) return;
    const timer = setTimeout(() => setToastMsg(null), 2400);
    return () => clearTimeout(timer);
  }, [toastMsg]);

  // ✅ 로그인 (항상 클릭 가능)
  const handleLogin = () => {
    const idTrim = id.trim();
    const pwTrim = password.trim();

    const emailOk = idTrim.length >= EMAIL_MIN && idTrim.length <= EMAIL_MAX;
    const pwOk = pwTrim.length >= PW_MIN && pwTrim.length <= PW_MAX;

    if (!emailOk || !pwOk) {
      showToast();
      // 포커스 이동은 TitleInput에 ref 지원이 없어서 생략
      return;
    }

    // ✅ API 없음 → 조건 통과 시 바로 이동
    router.push('/mypage/consult');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]'>

      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-[745px]:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>로그인</h3>

        <div className='flex flex-col gap-[24px] w-full'>

          {/* ✅ 아이디 */}
          <TitleInput
            title='아이디(이메일)'
            placeholder='아이디(이메일) 입력'
            maxLength={EMAIL_MAX}
            type='text'
            handleKeyDown={handleKeyDown}
            onchange={(e) => setId(e.target.value)}
            // TitleInput 타입에 맞춘 에러 표시
            error={!isEmailValid && id.length > 0}
            errorMessage={!isEmailValid && id.length > 0 ? `이메일은 ${EMAIL_MIN}~${EMAIL_MAX}자여야 합니다.` : undefined}
          />

          {/* ✅ 비밀번호 */}
          <TitleInput
            title='비밀번호'
            placeholder='비밀번호 입력'
            maxLength={PW_MAX}
            type='password'
            passwordIcon={true}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setPassword(e.target.value)}
            // TitleInput 타입에 맞춘 에러 표시
            error={!isPasswordValid && password.length > 0}
            errorMessage={!isPasswordValid && password.length > 0 ? `비밀번호는 ${PW_MIN}~${PW_MAX}자여야 합니다.` : undefined}
          />

          {/* ✅ 버튼 (항상 활성화) */}
          <div className='flex flex-col items-center justify-center gap-[24px]'>
            <button
              type='button'
              onClick={handleLogin}
              className='rounded-[8px] h-[50px] w-full bg-[var(--r-400)] hover:bg-[var(--r-500)] text-white cursor-pointer transition'
            >
              로그인
            </button>

            {/* 하단 링크 */}
            <div className='flex items-center justify-center gap-[8px]'>
              <Link href='/find-id' className='text-[14px] text-[var(--n-600)]'>아이디 찾기</Link>
              <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
              <Link href='/find-password' className='text-[14px] text-[var(--n-600)]'>비밀번호 재설정</Link>
              <div className='w-[1px] h-[12px] bg-[var(--n-300)]'></div>
              <Link href='/signup' className='text-[14px] text-[var(--n-600)]'>회원가입</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Motion 토스트 (SignIn과 동일 디자인) */}
      <AnimatePresence>
        {toastMsg && <MotionToast key={toastMsg} message={toastMsg} />}
      </AnimatePresence>
    </div>
  );
};

export default Login;

/* ✅ Motion Toast Component (SignIn과 동일) */
function MotionToast({ message }: { message: string }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      role='status'
      aria-live='polite'
      initial={{ opacity: 0, y: prefersReduced ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: prefersReduced ? 0 : -20 }}
      transition={{ duration: prefersReduced ? 0 : 0.35, ease: 'easeOut' }}
      className='
        fixed top-[24px] left-1/2 -translate-x-1/2 z-[2000]
        px-[16px] py-[12px] rounded-[12px]
        bg-[#333] text-white text-[14px] font-medium
        shadow-[0_8px_24px_rgba(0,0,0,0.18)]
        pointer-events-none
      '
    >
      {message}
    </motion.div>
  );
}
