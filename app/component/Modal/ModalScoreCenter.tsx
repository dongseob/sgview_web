import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  children: React.ReactNode;
  width?: string;
  height?: string;
  footer?: React.ReactNode;
}

/**
 * 중앙 모달 - 섬모양
 */

const ModalScoreCenter = ({
  isOpen,
  onClose,
  title,
  children,
  height = 'auto',
  footer,
  width,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // 모달 외부 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // 모달이 닫혀있으면 렌더링하지 않음
  if (!isOpen) return null;

  // createPortal을 사용하여 모달을 body 바로 아래에 렌더링
  return createPortal(
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50 max-md:items-end'
      onClick={onClose}
      role='dialog'
    >
      <div
        ref={modalRef}
        className=' bg-white rounded-xl text-base leading-5 z-20 relative overflow-hidden w-[480px] max-md:w-[calc(100%-32px)] max-md:max-h-[90vh] max-md:rounded-bl-[0px] max-md:rounded-br-[0px]'
        style={{ height, maxHeight: '90vh', width: width }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className='flex items-center justify-between relative px-[20px] pb-[24px] pt-[20px] max-md:px-[16px] max-md:pb-[16px] max-md:pt-[16px]'>
            <h3 className='text-left text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] max-md:text-[18px]'>
              {title}
            </h3>
            <button className='' onClick={onClose}>
              <Image
                src={`/images/icon-close-24.svg`}
                alt='close'
                width={20}
                height={20}
              />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalScoreCenter;
