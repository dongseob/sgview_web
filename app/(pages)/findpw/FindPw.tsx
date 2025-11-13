'use client';
import { postResetPassword } from '@/app/api/member';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const EMAIL_MIN = 6;
const EMAIL_MAX = 100;
const PW_MIN = 8;
const PW_MAX = 64;

const FindPw = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [idError, setIdError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // 입력 ref
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwRef = useRef<HTMLInputElement | null>(null);

  // ✅ 토스트 메시지 (인풋 밑 표시용 로직 완전 제거)

  const showToast = useCallback(
    (ERROR_MSG: string) => setToastMsg(ERROR_MSG),
    []
  );

  useEffect(() => {
    if (!toastMsg) return;
    const timer = setTimeout(() => setToastMsg(null), 2400);
    return () => clearTimeout(timer);
  }, [toastMsg]);

  // ✅ 로그인 (항상 클릭 가능)
  const handleLogin = async () => {
    const idTrim = id.trim();
    const pwTrim = password.trim();

    // 아이디: 길이만 체크 (형식검증 X)
    const emailOk = idTrim.length >= EMAIL_MIN && idTrim.length <= EMAIL_MAX;

    // 비밀번호: 길이만 체크 (조합검증 X)
    const pwOk = pwTrim.length >= PW_MIN && pwTrim.length <= PW_MAX;

    if (!emailOk || !pwOk) {
      showToast('아이디 또는 비밀번호를 확인해주세요.');
      if (!emailOk) idRef.current?.focus();
      else pwRef.current?.focus();
      return;
    }

    try {
      const resetPasswordRes = await postResetPassword({
        email: id,
        new_password: password,
      });
      if (resetPasswordRes.status === 200) {
        alert('비밀번호 재설정 성공');
        router.push('/signin');
      } else {
        showToast('비밀번호 재설정 실패');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      // 네트워크 에러 또는 서버 에러 처리
      if (axiosError.response) {
        // 서버가 응답했지만 에러 상태 코드 (4xx, 5xx)
        const status = axiosError.response.status;
        if (status === 401 || status === 403) {
          const errorData = axiosError.response.data;
          const errorMessage =
            typeof errorData === 'object' &&
            errorData !== null &&
            'detail' in errorData &&
            typeof errorData.detail === 'string'
              ? errorData.detail
              : '아이디 또는 비밀번호가 올바르지 않습니다.';
          showToast(errorMessage);
        } else if (status >= 500) {
          showToast('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          showToast(
            '비밀번호 재설정에 실패했습니다. 잠시 후 다시 시도해주세요.'
          );
        }
      } else if (axiosError.request) {
        // 요청은 보냈지만 응답을 받지 못함 (네트워크 에러)
        showToast('네트워크 오류가 발생했습니다. 연결을 확인해주세요.');
      } else {
        // 요청 설정 중 에러
        showToast(
          '비밀번호 재설정 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
        );
      }
    }
  };

  const validateId = (email: string) => {
    const trimmed = email.trim();
    if (trimmed.length < EMAIL_MIN || trimmed.length > EMAIL_MAX) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(trimmed);
  };

  const validatePassword = (pwd: string) => {
    const trimmed = pwd.trim();
    return trimmed.length >= PW_MIN && trimmed.length <= PW_MAX;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !idError && !passwordError && id && password) {
      handleLogin();
    }
  };

  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-[745px]:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          비밀번호 재설정
        </h3>

        <div className='flex flex-col gap-[24px] w-full'>
          {/* ✅ 아이디(이메일) - 형식검증 제거, 길이/placeholder/maxlength만 적용 */}
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              아이디(이메일)<span className='text-[#F6432B]'>*</span>
            </p>
            <input
              ref={idRef}
              type='text' // 형식검증 방지
              placeholder='아이디(이메일) 입력'
              maxLength={EMAIL_MAX}
              value={id}
              onChange={(e) => {
                const v = e.target.value;
                setId(v);
                if (v) {
                  setIdError(!validateId(v));
                } else {
                  setIdError(false);
                }
              }}
              onBlur={(e) => {
                const v = e.target.value;
                if (v) {
                  setIdError(!validateId(v));
                } else {
                  setIdError(false);
                }
              }}
              onKeyDown={handleKeyDown}
              className={`w-full h-[50px] px-[16px] py-[10px] border rounded-[8px] placeholder:text-[#AFB0B6] text-[15px] font-medium focus:outline-none ${
                idError ? 'border-[var(--r-400)]' : 'border-[var(--n-200)]'
              }`}
            />
          </div>

          {/* ✅ 비밀번호 - 조합검증 제거, 길이/maxlength만 적용 + 보기/숨김 토글 */}
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              비밀번호<span className='text-[#F6432B]'>*</span>
            </p>
            <div className='relative w-full'>
              <input
                ref={pwRef}
                type={showPw ? 'text' : 'password'}
                placeholder='비밀번호 입력'
                maxLength={PW_MAX}
                value={password}
                onChange={(e) => {
                  const v = e.target.value;
                  setPassword(v);
                  if (v) {
                    setPasswordError(!validatePassword(v));
                  } else {
                    setPasswordError(false);
                  }
                }}
                onBlur={(e) => {
                  const v = e.target.value;
                  if (v) {
                    setPasswordError(!validatePassword(v));
                  } else {
                    setPasswordError(false);
                  }
                }}
                onKeyDown={handleKeyDown}
                className={`w-full h-[50px] px-[16px] py-[10px] border rounded-[8px] placeholder:text-[#AFB0B6] text-[15px] font-medium focus:outline-none pr-[48px] ${
                  passwordError
                    ? 'border-[var(--r-400)]'
                    : 'border-[var(--n-200)]'
                }`}
              />
              <button
                type='button'
                onClick={() => setShowPw((p) => !p)}
                className='absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer opacity-50'
                aria-label={showPw ? '비밀번호 숨기기' : '비밀번호 보이기'}
              >
                <Image
                  src={
                    showPw
                      ? '/images/type=ic-visibility-on@2x.png'
                      : '/images/type=ic-visibility-off@2x.png'
                  }
                  alt=''
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          {/* ✅ 버튼 (입력값과 에러 상태에 따라 활성화/비활성화) */}
          <div className='flex flex-col items-center justify-center gap-[24px]'>
            <button
              type='button'
              onClick={handleLogin}
              disabled={!id || !password || idError || passwordError}
              className={`rounded-[8px] h-[50px] w-full ${
                !id || !password || idError || passwordError
                  ? 'bg-[var(--n-100)] text-[var(--n-400)] cursor-default opacity-60 pointer-events-none'
                  : 'bg-[var(--r-400)] hover:bg-[var(--r-500)] text-white cursor-pointer transition'
              }`}
            >
              비밀번호 재설정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPw;
