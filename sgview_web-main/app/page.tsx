'use client';

import React from 'react';
import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Home() {
  // 스와이퍼 ref & 자동재생 제어 타이머
  const swiperRef = React.useRef<SwiperType | null>(null);
  const resumeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoplay = () => {
    if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
  };
  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
    }, 3000);
  };

  const onPrev = () => {
    pauseAutoplay();
    swiperRef.current?.slidePrev();
    scheduleResume();
  };
  const onNext = () => {
    pauseAutoplay();
    swiperRef.current?.slideNext();
    scheduleResume();
  };

  // 후기 카드 데이터 (예시)
  const reviews = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    stars: 4,
    text:
      '생기뷰 직접 써보니 왜 사람들이 좋다고 하는지 알겠더라고요. 저는 생기부를 어떻게 정리해야 할지 막막했는데, AI가 제 기록을 분석해주니까 단순히 활동을 나열하는 게 아니라 전공과 어떻게 연결되는지, 어떤 부분을 보완하면 좋은지 딱 보이더라고요. 생각보다',
    name: '고3학생 김',
  }));

  return (
    <>
      {/* 헤더 섹션 */}
      <Image src={'/images/head.png'} width={1440} height={100} alt='head' />
      {/* 섹션1 */}
      <Image src={'/images/section1.png'} width={1440} height={100} alt='section1' />
      {/* 섹션2 */}
      <Image src={'/images/section2.png'} width={1440} height={100} alt='section2' />
      {/* 섹션3 */}
      <Image src={'/images/section3.png'} width={1440} height={100} alt='section3' />

      {/* 섹션4 */}
      <div className='py-[88px] pl-[144px] flex gap-[24px] w-full'>
        {/* 왼쪽 타이틀 & 내비게이션 */}
        <div className='w-[270px] flex flex-col gap-[32px] shrink-0'>
          <p className='text-[#16171A] text-[42px] font-[700] leading-[130%]'>
            생기뷰의
            <br />
            생생한 후기
          </p>
          <div className='flex gap-[16px]'>
            <button type='button' onClick={onPrev} aria-label='이전 후기' className='cursor-pointer'>
              <Image src={'/images/button-prev.png'} width={40} height={40} alt='button-prev' />
            </button>
            <button type='button' onClick={onNext} aria-label='다음 후기' className='cursor-pointer'>
              <Image src={'/images/button-next.png'} width={40} height={40} alt='button-next' />
            </button>
          </div>
        </div>

        {/* 스와이퍼 영역 */}
        <div className='pr-[24px] flex-1 min-w-0'>
          <Swiper
            className='w-full'          // ✅ 컨테이너를 꽉 채움
            modules={[Autoplay]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            loop
            slidesPerView={3}           // ✅ 3장 고정
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true, // 사용자 조작 시 일시정지
              pauseOnMouseEnter: false,
            }}
            // 드래그/클릭 시: 일시정지 → 3초 뒤 재시작
            onTouchStart={pauseAutoplay}
            onTouchEnd={scheduleResume}
            onPointerDown={pauseAutoplay}
            onPointerUp={scheduleResume}
            onSlideChangeTransitionEnd={scheduleResume}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                {/* ✅ 슬라이드 카드에서 고정폭 제거 (가급적 w-full) */}
                <div className='flex flex-col w-full'>
                  <div className='flex gap-[2px]'>
                    {Array.from({ length: 5 }).map((_, idx) => {
                      const filled = idx < r.stars;
                      return (
                        <Image
                          key={idx}
                          src={filled ? '/images/star-red.png' : '/images/star-gray.png'}
                          width={20}
                          height={20}
                          alt={filled ? 'star-red' : 'star-gray'}
                        />
                      );
                    })}
                  </div>
                  <div className='mt-[16px] text-[#36373A] text-[15px] leading-[24px] break-keep'>
                    {r.text}
                  </div>
                  <div className='mt-[32px] text-[16px] font-[600]'>
                    {r.name}
                    <span className='font-[400]'>OO</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
