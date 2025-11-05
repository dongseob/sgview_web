'use client';

import Image from 'next/image';
import { useState } from 'react';

export const TitleInput = ({
  title,
  placeholder,
  error,
  errorMessage,
  handleKeyDown,
  onchange,
  onblur,
  maxLength,
  type,
  passwordIcon = false,
}: {
  title: string;
  error: boolean;
  errorMessage?: string;
  placeholder: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onblur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  type?: 'text' | 'password' | 'number' | 'tel';
  passwordIcon?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <p className='text-[#36373A] text-[13px] font-medium'>
        {title}
        <span className='text-[#F6432B]'>*</span>
      </p>
      <div className='relative w-full'>
        <input
          type={
            type === 'password' && showPassword
              ? 'text'
              : type === 'number'
              ? 'number'
              : type
          }
          name='id'
          id='id'
          maxLength={maxLength}
          className={`w-full h-[50px] px-[16px] py-[10px] border rounded-[8px] placeholder:text-[#AFB0B6] text-[15px] font-medium focus:outline-none ${
            error ? 'border-[var(--r-400)]' : 'border-[var(--n-200)]'
          } ${passwordIcon ? 'pr-[48px]' : ''} ${
            type === 'number'
              ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              : ''
          }`}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onBlur={(e) => {
            onblur?.(e);
          }}
          onChange={(e) => {
            onchange(e);
          }}
        />
        {passwordIcon && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer opacity-50 '
          >
            <Image
              src={
                showPassword
                  ? '/Images/type=ic-visibility-on@2x.png'
                  : '/Images/type=ic-visibility-off@2x.png'
              }
              alt='toggle password visibility'
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
};
