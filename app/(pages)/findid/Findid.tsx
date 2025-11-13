'use client';
import { postFindId } from '@/app/api/member';
import { TitleInput } from '@/app/component/Input/input';
import { AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { MotionToast } from '../signin/Login';

const EMAIL_MIN = 6;
const EMAIL_MAX = 100;
const PW_MIN = 8;
const PW_MAX = 64;

const Findid = () => {
  const [id, setId] = useState('');
  const [idError, setIdError] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const router = useRouter();

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

  const validateName = (n: string) => n.length >= 2 && n.length <= 30;
  const validatePhone = (p: string) => /^[0-9]{10,11}$/.test(p);

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const v = e.currentTarget.value;
      setNameError(!validateName(v));
    }
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
    if (e.key === 'Enter' && name && phone) {
      handleFindId();
    }
  };
  const handleFindId = async () => {
    try {
      const findIdRes = await postFindId({ name, phone });
      if (findIdRes.status === 200) {
        alert('가입하신 아이디는 ' + findIdRes.data.id + '입니다.');
        router.push('/signin');
      } else {
        showToast('아이디 찾기 실패했습니다.');
      }
    } catch (error) {
      console.error('아이디 찾기 실패:', error);
    }
  };

  // ✅ 로그인 (항상 클릭 가능)
  //   const handleLogin = async () => {
  //     const idTrim = id.trim();
  //     const pwTrim = password.trim();

  //     // 아이디: 길이만 체크 (형식검증 X)
  //     const emailOk = idTrim.length >= EMAIL_MIN && idTrim.length <= EMAIL_MAX;

  //     // 비밀번호: 길이만 체크 (조합검증 X)
  //     const pwOk = pwTrim.length >= PW_MIN && pwTrim.length <= PW_MAX;

  //     if (!emailOk || !pwOk) {
  //       showToast('아이디 또는 비밀번호를 확인해주세요.');
  //       if (!emailOk) idRef.current?.focus();
  //       else pwRef.current?.focus();
  //       return;
  //     }

  //     try {
  //       const loginRes = await postLogin({ email: id, password });
  //       if (loginRes.status === 200) {
  //         // 토큰 저장 (만료 시간 포함)
  //         saveTokens(
  //           loginRes.data.tokens.access_token,
  //           loginRes.data.tokens.refresh_token,
  //           loginRes.data.tokens.expires_in || 1799,
  //           loginRes.data.tokens.refresh_expires_in || 604799
  //         );

  //         // 컨설팅 목록 조회하여 아이템 여부 확인
  //         try {
  //           const consultListRes = await getConsultList();
  //           if (consultListRes.data && consultListRes.data.length > 0) {
  //             router.push('/mypage/consult');
  //           } else {
  //             router.push('/welcome');
  //           }
  //         } catch (consultError) {
  //           // 컨설팅 목록 조회 실패 시 기본적으로 welcome 페이지로 이동
  //           console.error('컨설팅 목록 조회 실패:', consultError);
  //           router.push('/welcome');
  //         }
  //       } else {
  //         showToast('아이디 또는 비밀번호가 올바르지 않습니다.');
  //       }
  //     } catch (error) {
  //       const axiosError = error as AxiosError;
  //       // 네트워크 에러 또는 서버 에러 처리
  //       if (axiosError.response) {
  //         // 서버가 응답했지만 에러 상태 코드 (4xx, 5xx)
  //         const status = axiosError.response.status;
  //         if (status === 401 || status === 403) {
  //           const errorData = axiosError.response.data;
  //           const errorMessage =
  //             typeof errorData === 'object' &&
  //             errorData !== null &&
  //             'detail' in errorData &&
  //             typeof errorData.detail === 'string'
  //               ? errorData.detail
  //               : '아이디 또는 비밀번호가 올바르지 않습니다.';
  //           showToast(errorMessage);
  //         } else if (status >= 500) {
  //           showToast('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  //         } else {
  //           showToast('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
  //         }
  //       } else if (axiosError.request) {
  //         // 요청은 보냈지만 응답을 받지 못함 (네트워크 에러)
  //         showToast('네트워크 오류가 발생했습니다. 연결을 확인해주세요.');
  //       } else {
  //         // 요청 설정 중 에러
  //         showToast('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  //       }
  //     }
  //   };

  //   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === 'Enter') handleLogin();
  //   };
  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-[745px]:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          아이디 찾기
        </h3>

        <div className='flex flex-col gap-[24px] w-full'>
          <TitleInput
            title='이름(본명)'
            placeholder='이름 입력'
            error={nameError}
            errorMessage='이름은 2~30자로 입력해주세요.'
            maxLength={30}
            handleKeyDown={handleNameKeyDown}
            value={name}
            onchange={(e) => {
              let v = e.target.value;
              // 숫자, 특수문자와 이모지 제거 (한글, 영문, 공백만 허용)
              v = v.replace(/[^가-힣a-zA-Z\s]/g, '');
              // 이모지 제거
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              // 30자로 제한
              if (v.length > 30) {
                v = v.slice(0, 30);
              }
              setName(v);
              setNameError(!validateName(v));
            }}
            onblur={() => {
              if (name) setNameError(!validateName(name));
            }}
          />

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

          {/* ✅ 버튼 (입력값과 에러 상태에 따라 활성화/비활성화) */}
          <div className='flex flex-col items-center justify-center gap-[24px]'>
            <button
              type='button'
              disabled={!name || nameError || !phone || phoneError}
              onClick={handleFindId}
              className={`rounded-[8px] h-[50px] w-full ${
                !name || nameError || !phone || phoneError
                  ? 'bg-[var(--n-100)] text-[var(--n-400)] cursor-default opacity-60 pointer-events-none'
                  : 'bg-[var(--r-400)] hover:bg-[var(--r-500)] text-white cursor-pointer transition'
              }`}
            >
              아이디 찾기
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Motion 토스트 (상단 고정) */}
      <AnimatePresence>
        {toastMsg && <MotionToast key={toastMsg} message={toastMsg} />}
      </AnimatePresence>
    </div>
  );
};

export default Findid;
