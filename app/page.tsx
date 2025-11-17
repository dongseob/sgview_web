'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

// Swiper
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Framer Motion
import { easeOut, motion, useReducedMotion, Variants } from 'framer-motion';

// ✅ Variants에 정확한 타입 지정 + easeOut 함수 사용
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' },
  },
};

export default function Home() {
  const router = useRouter();
  const prefersReduced = useReducedMotion();

  // 무료 진단받기 버튼 클릭 핸들러
  const handleFreeDiagnosis = () => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('accessToken')
        : null;
    if (token) {
      router.push('/consult/apply');
    } else {
      router.push('/signin');
    }
  };

  // Swiper ref & 자동재생 제어 타이머
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

  // ✅ 리뷰 데이터 교체
  const reviews = [
    {
      id: 1,
      stars: 5,
      name: '고3학생 이OO',
      text: "3학년이라 시간이 촉박했는데, 빠르게 핵심을 짚어주는 AI 분석과 전문가의 전략 덕분에 자소서를 단기간에 완성할 수 있었습니다. 제가 당연하게 생각했던 활동이 사실은 높은 평가를 받을 수 있는 부분이 많다는 것을 알게 되었고, 이를 입시에 유리하게 녹여냈습니다. '결과가 좋으니 이 부분을 강조하라'는 명쾌한 지시 덕분에 혼자 고민하며 시간 낭비할 일이 없었습니다. 입시 직전에 받은 이 컨설팅이 제 수험 생활의 '신의 한 수'였습니다.",
    },
    {
      id: 2,
      stars: 4,
      name: '고3학생 김OO',
      text: "자소서 마감과 면접을 앞두고 마지막 점검용으로 서비스를 이용했는데, 정말 탁월한 선택이었습니다. 제 생기부에서 가장 빛나는 '핵심 키워드 3가지'와 면접에서 예상되는 압박 질문까지 정리해주셨어요. 덕분에 복잡했던 생기부 내용을 한눈에 정리하고, 일관성 있는 스토리라인을 만드는 데 성공했습니다. 특히 제 강점을 극대화하는 '최적의 어필 방식'을 컨설팅 받아 최종 합격에 결정적인 역할을 했습니다.",
    },
    {
      id: 3,
      stars: 5,
      name: '학부모 이OO',
      text: '학부모 입장에서 아이의 생기부를 객관적으로 봐줄 전문가가 필요했습니다. 이 서비스는 AI 분석을 통해 아이의 경쟁력을 수치로 보여주니 신뢰가 갔고, 컨설턴트님이 아이의 생기부 약점을 보완할 수 있는 최종 면접 전략을 제시해주셔서 큰 도움이 됐습니다. 아이도 마지막까지 흔들리지 않고 준비할 수 있었고, 부모도 막연한 불안감을 해소할 수 있었습니다. 저희 가족의 입시 성공에 결정적인 역할을 해주신 서비스에 진심으로 감사합니다.',
    },
    {
      id: 4,
      stars: 4,
      name: '고2학생 이OO',
      text: "데이터 분석의 힘을 실감했어요. 제가 생각했던 강점과 AI가 분석한 객관적인 강점 사이에 차이가 있다는 것을 알았고, 전략을 수정할 수 있었습니다. 특히 대학별 인재상에 맞춰 제 생기부의 어떤 내용을 '어떻게 연결'해서 어필해야 하는지 논리적인 틀을 배웠습니다. 남은 1년 동안 부족한 부분을 채우고, 강점을 극대화하는 맞춤형 전략을 손에 쥐게 된 기분입니다. 이제 3학년 입시 준비가 두렵지 않아요.",
    },
    {
      id: 5,
      stars: 4,
      name: '고1학생 이OO',
      text: "데이터 분석의 힘을 실감했어요. 제가 생각했던 강점과 AI가 분석한 객관적인 강점 사이에 차이가 있다는 것을 알았고, 전략을 수정할 수 있었습니다. 특히 대학별 인재상에 맞춰 제 생기부의 어떤 내용을 '어떻게 연결'해서 어필해야 하는지 논리적인 틀을 배웠습니다. 남은 1년 동안 부족한 부분을 채우고, 강점을 극대화하는 맞춤형 전략을 손에 쥐게 된 기분입니다. 이제 3학년 입시 준비가 두렵지 않아요.",
    },
    {
      id: 6,
      stars: 5,
      name: '고2학생 이OO',
      text: "고2는 정말 중요한 시기인데, 1학년 때 채운 생기부가 이대로 괜찮은지 불안했어요. 분석 결과를 통해 제가 부족한 '탐구 역량'과 '심화 활동'이 명확히 드러났고, 2학기에 보완해야 할 구체적인 미션들을 받았습니다. 특히 컨설턴트님께서 남은 기간 동안 '어떤 탐구 보고서를 써야' 생기부의 완성도를 높일 수 있는지 핀포인트 조언을 해주셔서 큰 도움이 됐습니다. 불안감을 확신으로 바꿔준 최고의 서비스입니다.",
    },
    {
      id: 7,
      stars: 4,
      name: '고1학생 김OO',
      text: "고1이라 생기부 채우기가 막막했는데, 이 서비스 덕분에 3년간의 로드맵이 생겼습니다. 제 잠재적인 흥미와 역량을 AI가 분석해 앞으로 어떤 활동을 심화해야 할지, 어떤 과목에 집중해야 할지 명확한 우선순위를 정할 수 있었어요. 컨설턴트님의 '지금부터 이렇게 준비하면 된다'는 구체적인 조언이 큰 힘이 됐습니다. 괜한 활동에 시간을 낭비하지 않고, 제 진로에 맞는 핵심 역량에 집중할 수 있게 되어 정말 만족합니다.",
    },
  ];

  // 접근성: 모션 최소화 선호 시 variants undefined로 전달
  const vFadeUp = prefersReduced ? undefined : fadeUp;
  const vContainer = prefersReduced ? undefined : containerStagger;

  return (
    <div className='mx-auto -mt-[76px]'>
      {/* 헤더 섹션 */}
      <motion.div
        variants={vContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.25 }}
        className='mx-auto -pt-[72px] pb-[40px]'
        style={{
          background:
            'linear-gradient(180deg, #FEEEED 0%, #FFF 100%), linear-gradient(180deg, #FFF 0%, #999 100%)',
        }}
      >
        <div className='pt-[152px] max-[745px]:pt-[120px] flex flex-col items-center'>
          <motion.p
            variants={vFadeUp}
            className='text-[#16171A] text-center text-[58px] font-[700] leading-[75.4px] max-[745px]:text-[32px] max-[745px]:leading-[44.8px] -tracking-[0.5px]'
          >
            AI 생기부 분석으로
            <br />
            진로의 방향을 찾으세요
          </motion.p>

          <motion.p
            variants={vFadeUp}
            className='text-[#686A6F] text-[20px] font-[400] leading-[30px] opacity-80 mt-[16px] max-[745px]:text-[16px] max-[745px]:leading-[24px] -tracking-[0.24px]'
          >
            <span className='max-[745px]:hidden'>AI 기반 분석과 </span>
            전문가의 통찰로 완성되는 맞춤형 진로 리포트
          </motion.p>

          <motion.div
            variants={vFadeUp}
            className='py-[16px] px-[28px] bg-[#F6432B] rounded-full flex items-center gap-[4px] mt-[36px] max-[745px]:mt-[32px] cursor-pointer'
            onClick={handleFreeDiagnosis}
          >
            <p className='text-white text-[18px] font-[700] leading-[24px] max-[745px]:text-[16px]'>
              무료 진단받기
            </p>
            <Image
              src={'/images/arrow-right-white.png'}
              width={20}
              height={20}
              alt='arrow-right-white'
            />
          </motion.div>

          <motion.div
            variants={vFadeUp}
            className='mt-[32px] flex justify-center'
          >
            <Image
              src='/images/headerSection-folder.png'
              alt='headerSection-folder'
              priority
              width={442}
              height={366}
              className='
                w-[442px] h-[366px] aspect-[221/183]
                max-md:w-auto max-md:h-[277.33px] max-md:aspect-[335/277.33] max-md:self-stretch
              '
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 섹션1 */}
      <motion.div
        variants={vFadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='flex justify-center'
      >
        <picture>
          <source srcSet='/images/section1-mo.png' media='(max-width: 745px)' />
          <Image
            src='/images/section1.png'
            width={1440}
            height={100}
            alt='section1'
            id='section1'
          />
        </picture>
      </motion.div>

      {/* 섹션2 */}
      <motion.div
        variants={vFadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='flex justify-center'
      >
        <picture>
          <source srcSet='/images/section2-mo.png' media='(max-width: 745px)' />
          <Image
            src='/images/section2.png'
            width={1440}
            height={100}
            alt='section2'
          />
        </picture>
      </motion.div>

      {/* 섹션3 */}
      <motion.div
        variants={vFadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='flex justify-center'
      >
        {/* 데스크톱: 기존 이미지 */}
        <picture className='block max-[745px]:hidden' id='section3'>
          <source srcSet='/images/section3-mo.png' media='(max-width: 745px)' />
          <Image
            src='/images/section3.png'
            width={1440}
            height={100}
            alt='section3'
          />
        </picture>

        {/* 모바일: 컨테이너 + 타이틀 + 스와이퍼 */}
        <div
          id='section3mo-content'
          className='hidden max-[745px]:flex max-[745px]:w-full max-[745px]:py-[64px] max-[745px]:flex-col max-[745px]:gap-y-[32px] bg-[#f7f8fc]'
        >
          <p className='text-[#16171a] text-[28px] font-[700] leading-[36.4px] ml-[24px]'>
            생기뷰 분석 과정
          </p>

          <Swiper
            className='w-full'
            modules={[Autoplay]}
            slidesPerView={1.7}
            spaceBetween={12}
            loop
            slidesOffsetBefore={24}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <SwiperSlide key={n} className='flex-none'>
                <div className='relative w-full aspect-[200/235] rounded-[8px] overflow-hidden'>
                  <Image
                    src={`/images/section3-mo-content${n}.png`}
                    alt={`section3-mo-content${n}`}
                    fill
                    className='object-cover'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* 섹션4 - 후기 */}
      <motion.div
        variants={vContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='
          py-[100px] pl-[144px] flex gap-[24px] w-full max-w-[1440px] mx-auto
          max-[745px]:px-[20px] max-[745px]:py-[40px]
          max-[745px]:pl-[20px]
          max-[745px]:flex-col max-[745px]:gap-[40px]
        '
      >
        {/* 왼쪽 타이틀 & 내비게이션 */}
        <motion.div
          variants={vFadeUp}
          className='w-[270px] flex flex-col gap-[32px] shrink-0 max-[745px]:w-full'
        >
          <p
            className='
              text-[#16171A] text-[42px] font-[700] leading-[130%]
              max-[745px]:text-[28px] max-[745px]:leading-[140%]
              max-[745px]:whitespace-nowrap
            '
          >
            생기뷰의
            <br className='max-[745px]:hidden' />
            생생한 후기
          </p>

          {/* prev/next 버튼: 모바일에서 숨김 */}
          <div className='flex gap-[16px] max-[745px]:hidden'>
            <button
              type='button'
              onClick={onPrev}
              aria-label='이전 후기'
              className='cursor-pointer'
            >
              <Image
                src='/images/button-prev.png'
                width={40}
                height={40}
                alt='button-prev'
              />
            </button>
            <button
              type='button'
              onClick={onNext}
              aria-label='다음 후기'
              className='cursor-pointer'
            >
              <Image
                src='/images/button-next.png'
                width={40}
                height={40}
                alt='button-next'
              />
            </button>
          </div>
        </motion.div>

        {/* 스와이퍼 영역 */}
        <motion.div
          variants={vFadeUp}
          className='relative flex-1 min-w-0 max-[745px]:w-full'
        >
          {/* 좌측 Gradient */}
          <div
            className='
              pointer-events-none absolute left-0 top-0 h-full w-[95px]
              max-[745px]:hidden
            '
            style={{
              background:
                'linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0) 58.5%)',
              zIndex: 10,
            }}
          />

          {/* 우측 Gradient */}
          <div
            className='
              pointer-events-none absolute right-0 top-0 h-full w-[95px]
              max-[745px]:hidden
            '
            style={{
              background:
                'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0) 58.5%)',
              zIndex: 10,
            }}
          />

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
            breakpoints={{
              0: { slidesPerView: 1 },
              746: { slidesPerView: 2.6 },
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
                  variants={vFadeUp}
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
                          src={
                            filled
                              ? '/images/star-red.png'
                              : '/images/star-gray.png'
                          }
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
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
}
