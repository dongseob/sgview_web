'use client';

import Image from 'next/image';
import React, { forwardRef, useState } from 'react';

type TitleInputProps = {
  title: string;
  placeholder: string;
  /** ❗ 선택값으로 변경 */
  error?: boolean;
  errorMessage?: string;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** 사용자 코드와 호환 위해 소문자 유지 */
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onblur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  maxLength?: number;
  type?: 'text' | 'password' | 'number' | 'tel' | 'email';
  passwordIcon?: boolean;
  /** 선택적으로 name/id/value 지원 (필요 시) */
  name?: string;
  id?: string;
  value?: string;
  defaultValue?: string;
};

export const TitleInput = forwardRef<HTMLInputElement, TitleInputProps>(
  function TitleInput(
    {
      title,
      placeholder,
      error = false,
      errorMessage,
      handleKeyDown,
      onchange,
      onblur,
      onCompositionStart,
      onCompositionEnd,
      maxLength,
      type = 'text',
      passwordIcon = false,
      name,
      id,
      value,
      defaultValue,
    },
    ref
  ) {
    const [showPassword, setShowPassword] = useState(false);

    const resolvedType =
      type === 'password' && showPassword
        ? 'text'
        : type === 'number'
        ? 'number'
        : type;

    return (
      <div className='flex flex-col gap-[8px] w-full'>
        <p className='text-[#36373A] text-[13px] font-medium'>
          {title}
          <span className='text-[#F6432B]'>*</span>
        </p>

        <div className='relative w-full'>
          <input
            ref={ref}
            type={resolvedType}
            name={name}
            id={id}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            className={`w-full h-[50px] px-[16px] py-[10px] border rounded-[8px] placeholder:text-[#AFB0B6] text-[15px] font-medium focus:outline-none ${
              error ? 'border-[var(--r-400)]' : 'border-[var(--n-200)]'
            } ${passwordIcon ? 'pr-[48px]' : ''} ${
              type === 'number'
                ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                : ''
            }`}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            onBlur={(e) => onblur?.(e)}
            onChange={(e) => onchange?.(e)}
            onCompositionStart={onCompositionStart}
            onCompositionEnd={onCompositionEnd}
          />

          {passwordIcon && (
            <button
              type='button'
              onClick={() => setShowPassword((p) => !p)}
              className='absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer opacity-50'
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보이기'}
            >
              <Image
                src={
                  showPassword
                    ? '/icon/type=ic-visibility-on@2x.png'
                    : '/icon/type=ic-visibility-off@2x.png'
                }
                alt=''
                width={24}
                height={24}
              />
            </button>
          )}
        </div>

        {error && errorMessage && (
          <p className='text-[var(--r-400)] text-[13px] font-medium'>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
