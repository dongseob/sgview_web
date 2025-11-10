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
 * 중앙 모달 + 모바일 바텀시트
 */
const ModalCenter = ({
  isOpen,
  onClose,
  title,
  children,
  height = 'auto',
  footer,
  width,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // 모바일(<=745px) 감지
  const [isMobile, setIsMobile] = React.useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 745px)');
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    // setIsMobile(mql.matches);
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // 외부 클릭 닫기
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

  // 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50 max-[745px]:items-end'
      onClick={onClose}
      role='dialog'
    >
      <div
        ref={modalRef}
        className={`
          bg-white rounded-xl text-base leading-5 z-20 relative overflow-hidden
          transition-transform duration-300 ease-out
          w-[480px] max-h-[90vh]
          max-[745px]:w-full max-[745px]:rounded-t-[20px] max-[745px]:rounded-b-none
          max-[745px]:h-auto max-[745px]:max-h-[85vh]
          max-[745px]:animate-slideUp
        `}
        style={{ height, width: isMobile ? '100%' : width }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className='flex items-center justify-between px-[20px] pb-[24px] pt-[20px] h-[78px]'>
            <h3 className='text-left text-[24px] font-[700] leading-[1.3] text-[var(--n-800)]'>
              {title}
            </h3>
            <button onClick={onClose}>
              <Image
                src='/images/icon-close-24.svg'
                alt='close'
                width={20}
                height={20}
              />
            </button>
          </div>
        )}

        {children}

        <div
          className='w-full h-[108px] absolute bottom-0 left-0 flex items-center justify-center px-[20px] pt-[24px] pb-[32px]'
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 20%)',
          }}
          onClick={() => {onClose && onClose()}}
        >
          <button className='w-full h-[52px] rounded-[8px] bg-[var(--n-800)] text-[var(--n-0)] text-[15px] font-[500] leading-[1.5]'>
            확인
          </button>
        </div>
      </div>

      {/* 바텀시트 애니메이션용 keyframes */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ModalCenter;
