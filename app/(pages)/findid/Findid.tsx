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

  /** 이름 문자열 정제 로직
   *  - 허용: ㄱ-ㅎ, ㅏ-ㅣ, 가-힣, 영문, 공백
   *  - 숫자/특수문자/이모지는 제거
   */
  const sanitizeName = (raw: string) => {
    let v = raw;

    // 자음/모음 + 완성형 한글 + 영문 + 공백만 허용
    v = v.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]/g, '');

    // 이모지 제거 (추가 안전장치, 사실 위 정규식에 대부분 걸림)
    v = v.replace(
      /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
      ''
    );

    if (v.length > 30) v = v.slice(0, 30);
    return v;
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const v = e.currentTarget.value;
      setNameError(!validateName(v));
    }
  };

  // 휴대폰 번호 입력 필드용 키 핸들러 (숫자만 허용, 이모지 차단)
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

    const isNumber = /^[0-9]$/.test(e.key);
    const isAllowedKey = allowedKeys.includes(e.key);
    const isCtrlKey = e.ctrlKey || e.metaKey;

    if (!isNumber && !isAllowedKey && !isCtrlKey) {
      e.preventDefault();
    }

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
      showToast('아이디 찾기 실패했습니다.');
    }
  };

  return (
    <div className='w-full pt-[40px] pb-[120px] mx-auto max-[745px]:pt-[32px] max-[745px]:pb-[32px] max-[745px]:px-[20px]'>
      <div className='w-full max-w-[368px] mx-auto py-[32px] flex flex-col items-center justify-start gap-[32px] max-[745px]:py-[0]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          아이디 찾기
        </h3>

        <div className='flex flex-col gap-[24px] w-full'>
          {/* 이름(본명) */}
          <TitleInput
            title='이름(본명)'
            placeholder='이름 입력'
            error={nameError}
            errorMessage='이름은 2~30자로 입력해주세요.'
            maxLength={30}
            handleKeyDown={handleNameKeyDown}
            value={name}
            onchange={(e) => {
              const v = sanitizeName(e.target.value);
              setName(v);
              setNameError(v.length > 0 && !validateName(v));
            }}
            onblur={() => {
              if (name) setNameError(!validateName(name));
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
            handleKeyDown={handlePhoneKeyDown}
            onchange={(e) => {
              let v = e.target.value;
              v = v.replace(/\D/g, '');
              v = v.replace(
                /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]/gu,
                ''
              );
              e.target.value = v;
              setPhone(v);
              setPhoneError(v.length > 0 && !validatePhone(v));
            }}
            onblur={(e) => {
              const v = e.target.value;
              if (v) setPhoneError(!validatePhone(v));
            }}
          />

          {/* 버튼 */}
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

      {/* Motion 토스트 (상단 고정) */}
      <AnimatePresence>
        {toastMsg && <MotionToast key={toastMsg} message={toastMsg} />}
      </AnimatePresence>
    </div>
  );
};

export default Findid;
