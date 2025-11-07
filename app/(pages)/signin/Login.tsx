'use client';

import { TitleInput } from '@/app/component/Input/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
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

  // 입력 ref
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwRef = useRef<HTMLInputElement | null>(null);

  // ✅ 토스트 메시지 (인풋 밑 표시용 로직 완전 제거)
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
      if (!emailOk) idRef.current?.focus();
      else pwRef.current?.focus();
      return;
    }

    // ✅ API 없음 → 조건 통과 시 바로 이동
    router.push('/mypage/consult');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="w-full pt-[40px] pb-[120px] mx-auto max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]">
      <div className="w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-[745px]:py-[0]">
        <h3 className="text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]">로그인</h3>

        <div className="flex flex-col gap-[24px] w-full">
          {/* ✅ 아이디 (인풋 밑 안내/에러 텍스트 관련 prop/로직 없음) */}
          <TitleInput
            title="아이디(이메일)"
            placeholder="아이디(이메일) 입력"
            maxLength={EMAIL_MAX}
            type="text"
            ref={idRef}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setId(e.target.value)}
          />

          {/* ✅ 비밀번호 (동일하게 하단 메시지 로직 없음) */}
          <TitleInput
            title="비밀번호"
            placeholder="비밀번호 입력"
            maxLength={PW_MAX}
            type="password"
            passwordIcon={true}
            ref={pwRef}
            handleKeyDown={handleKeyDown}
            onchange={(e) => setPassword(e.target.value)}
          />

          {/* ✅ 버튼 (항상 활성화) */}
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <button
              type="button"
              onClick={handleLogin}
              className="rounded-[8px] h-[50px] w-full bg-[var(--r-400)] hover:bg-[var(--r-500)] text-white cursor-pointer transition"
            >
              로그인
            </button>

            {/* 하단 링크 */}
            <div className="flex items-center justify-center gap-[8px]">
              <Link href="/find-id" className="text-[14px] text-[var(--n-600)]">
                아이디 찾기
              </Link>
              <div className="w-[1px] h-[12px] bg-[var(--n-300)]" />
              <Link href="/find-password" className="text-[14px] text-[var(--n-600)]">
                비밀번호 재설정
              </Link>
              <div className="w-[1px] h-[12px] bg-[var(--n-300)]" />
              <Link href="/signup" className="text-[14px] text-[var(--n-600)]">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Motion 토스트 (상단 고정) */}
      <AnimatePresence>{toastMsg && <MotionToast key={toastMsg} message={toastMsg} />}</AnimatePresence>
    </div>
  );
};

export default Login;

function MotionToast({ message }: { message: string }) {
  const prefersReduced = useReducedMotion();

  // ✅ SSR-safe 초기값 (모바일 여부 즉시 반영)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 745px)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 745px)');

    const update = () => setIsMobile(mq.matches);
    update();

    // ✅ 브라우저 호환 (Safari 등)
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    } else {
      // @ts-expect-error: older browsers
      mq.addListener(update);
      // @ts-expect-error: older browsers
      return () => mq.removeListener(update);
    }
  }, []);

  // ✅ 방향 분기
  // 모바일: enter = 아래→위 (+20 → 0), exit = 위→아래 (0 → +20)
  // 데스크탑: enter = 위→아래 (-20 → 0), exit = 아래→위 (0 → -20)
  const initialY = prefersReduced ? 0 : (isMobile ? 20 : -20);
  const exitY    = prefersReduced ? 0 : (isMobile ? 20 : -20);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: exitY }}
      transition={{ duration: prefersReduced ? 0 : 0.35, ease: 'easeOut' }}
      className="
        fixed z-20
        /* 데스크탑: 상단 중앙 */
        top-[48px] left-1/2 -translate-x-1/2 w-[335px]
        /* 모바일: 하단 + 좌우 20px 여백 */
        max-[745px]:top-auto max-[745px]:bottom-[32px]
        max-[745px]:left-[20px] max-[745px]:right-[20px]
        max-[745px]:-translate-x-0 max-[745px]:w-auto
        p-[16px] rounded-[8px]
        bg-[#37383B] text-white text-[14px] font-normal leading-[19.6px]
        shadow-[0_4px_10px_0_rgba(0,0,0,0.10)]
        pointer-events-none
      "
    >
      {message}
    </motion.div>
  );
}
