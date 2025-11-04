'use client';

import Button from '@/app/component/button';
import { TitleInput } from '@/app/component/Input/input';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ConsultApply = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };
  return (
    <div className='pt-[40px] pb-[120px]'>
      <div className='w-[328px] mx-auto  flex flex-col items-center justify-center gap-[32px]'>
        <h3 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]'>
          입시컨설팅 신청
        </h3>
        <div className='flex flex-col gap-[24px] w-full'>
          <TitleInput
            title='희망대학'
            placeholder='희망대학 입력'
            error={false}
            handleKeyDown={() => {}}
            onchange={() => {}}
            onblur={() => {}}
          />
          <TitleInput
            title='희망학과'
            placeholder='희망학과 선택'
            error={false}
            handleKeyDown={() => {}}
            onchange={() => {}}
            onblur={() => {}}
          />
          <div className='flex flex-col gap-[8px] w-full'>
            <p className='text-[#36373A] text-[13px] font-medium'>
              최종 모의고사 점수
            </p>
            <select
              name='score'
              id='score'
              defaultValue=''
              className='w-full h-[50px] px-[16px] py-[10px] border border-[#D7D8DC] rounded-[8px] text-[15px] font-medium focus:outline-none  appearance-none bg-white bg-[url("/Images/icon-arrow-24.svg")] bg-[length:24px] bg-[right_16px_center] bg-no-repeat cursor-pointer'
              style={{ color: 'inherit' }}
            >
              <option value='' disabled className='text-[#AFB0B6]'>
                점수 입력
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className='flex flex-col gap-[12px] w-full'>
            <div className='flex flex-col gap-[8px] w-full'>
              <p className='text-[#36373A] text-[13px] font-medium'>
                생활기록부 PDF 업로드
              </p>
              {uploadedFile && (
                <div className='border border-[var(--n-200)] rounded-[8px] py-[10px] px-[16px] flex items-center justify-between'>
                  <p className='text-[15px] leading-[1.4] font-[500]'>
                    {uploadedFile?.name}
                  </p>
                  <Image
                    src='/Images/icon-close-24.svg'
                    alt='close'
                    width={24}
                    height={24}
                    className='cursor-pointer'
                  />
                </div>
              )}
              <div className='flex flex-col gap-2'>
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='.pdf'
                  onChange={handleFileChange}
                  className='hidden'
                />
                {!uploadedFile && (
                  <button
                    type='button'
                    onClick={handleFileUpload}
                    className='rounded-[8px] border border-[var(--n-600)] h-[36px] text-[13px] font-[500] text-[var(--n-800)] max-w-[114px]'
                  >
                    첨부파일 업로드
                  </button>
                )}
              </div>
            </div>
            <ul>
              <li className='text-[var(--n-400)] text-[13px] leading-[1.4] font-[400] pl-4 relative before:content-["•"] before:absolute before:left-0'>
                나이스플러스에서 받은 생활기록부 PDF를 업로드하세요.
              </li>
            </ul>
            {uploadedFile && (
              <button
                type='button'
                onClick={handleFileUpload}
                className='rounded-[8px] border border-[var(--n-600)] h-[36px] text-[13px] font-[500] text-[var(--n-800)] max-w-[103px]'
              >
                첨부파일 수정
              </button>
            )}
          </div>
          <div className='w-full h-[1px] bg-[var(--n-200)]'></div>
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
            <span className='text-[14px] leading-[1.4] text-[var(--n-400)] underline'>
              보기
            </span>
          </div>
          <Button title='분석하기' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ConsultApply;
