'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Framer Motion
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' },
  },
};

export default function Home() {
  const router = useRouter();
  const prefersReduced = useReducedMotion();

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
    text: '생기뷰 직접 써보니 왜 사람들이 좋다고 하는지 알겠더라고요. 저는 생기부를 어떻게 정리해야 할지 막막했는데, AI가 제 기록을 분석해주니까 단순히 활동을 나열하는 게 아니라 전공과 어떻게 연결되는지, 어떤 부분을 보완하면 좋은지 딱 보이더라고요. 생각보다',
    name: '고3학생 김',
  }));

  return (
    <>
      {/* 헤더 섹션 */}
      <motion.div
        variants={prefersReduced ? undefined : containerStagger}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.25 }}
        className='h-[940px] mx-auto'
        style={{
          background: 'linear-gradient(0deg, #FFFFFF 0%, #FCC9C7 100%)',
        }}
      >
        <div className='pt-[152px] flex flex-col items-center'>
          <motion.p variants={prefersReduced ? undefined : fadeUp} className='text-[#16171A] text-center text-[58px] font-[700] leading-[75.4px]'>
            AI 생기부 분석으로
            <br />
            진로의 방향을 찾으세요
          </motion.p>

          <motion.p variants={prefersReduced ? undefined : fadeUp} className='text-[#434343] text-[20px] font-[400] leading-[30px] opacity-80 mt-[16px]'>
            AI 기반 분석과 전문가의 통찰로 완성되는 맞춤형 진로 리포트
          </motion.p>

          <motion.div
            variants={prefersReduced ? undefined : fadeUp}
            className='py-[16px] px-[28px] bg-[#F6432B] rounded-full flex items-center gap-[4px] mt-[36px] cursor-pointer'
            onClick={() => {
              router.push('/consult/apply');
            }}
          >
            <p className='text-white text-[16.5px] font-[700] leading-[24px]'>무료 진단받기</p>
            <Image src={'/images/arrow-right-white.png'} width={20} height={20} alt='arrow-right-white' />
          </motion.div>

          <motion.div variants={prefersReduced ? undefined : fadeUp} className='mt-[24px]'>
            <Image src={'/images/headerSection-folder.png'} width={484} height={383} alt='headerSection-folder' priority />
          </motion.div>
        </div>
      </motion.div>

      {/* 섹션1 */}
      <motion.div variants={prefersReduced ? undefined : fadeUp} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <Image src={'/images/section1.png'} width={1440} height={100} alt='section1' id='section1' />
      </motion.div>

      {/* 섹션2 */}
      <motion.div variants={prefersReduced ? undefined : fadeUp} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <Image src={'/images/section2.png'} width={1440} height={100} alt='section2' />
      </motion.div>

      {/* 섹션3 */}
      <motion.div variants={prefersReduced ? undefined : fadeUp} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <Image src={'/images/section3.png'} width={1440} height={100} alt='section3' />
      </motion.div>

      {/* 섹션4 - 후기 */}
      <motion.div
        variants={prefersReduced ? undefined : containerStagger}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='py-[88px] pl-[144px] flex gap-[24px] w-full'
      >
        {/* 왼쪽 타이틀 & 내비게이션 */}
        <motion.div variants={prefersReduced ? undefined : fadeUp} className='w-[270px] flex flex-col gap-[32px] shrink-0'>
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
        </motion.div>

        {/* 스와이퍼 영역 */}
        <motion.div variants={prefersReduced ? undefined : fadeUp} className='relative flex-1 min-w-0'>
          {/* 👉 좌측 Gradient */}
          <div
            className='pointer-events-none absolute left-0 top-0 h-full w-[95px]'
            style={{
              background: 'linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0) 58.5%)',
              zIndex: 10,
            }}
          />

          {/* 👉 우측 Gradient (반전 방향) */}
          <div
            className='pointer-events-none absolute right-0 top-0 h-full w-[95px]'
            style={{
              background: 'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0) 58.5%)',
              zIndex: 10,
            }}
          />

          {/* ✅ 스와이퍼 본체 */}
          <Swiper
            className='w-full'
            modules={[Autoplay]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            loop
            slidesPerView={2.6}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
            onTouchStart={pauseAutoplay}
            onTouchEnd={scheduleResume}
            onPointerDown={pauseAutoplay}
            onPointerUp={scheduleResume}
            onSlideChangeTransitionEnd={scheduleResume}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <motion.div
                  variants={prefersReduced ? undefined : fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.3 }}
                  className='flex flex-col w-full bg-white'
                >
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
                  <div className='mt-[16px] text-[#36373A] text-[15px] leading-[24px] break-keep'>{r.text}</div>
                  <div className='mt-[32px] text-[16px] font-[600]'>
                    {r.name}
                    <span className='font-[400]'>OO</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </>
  );
}
