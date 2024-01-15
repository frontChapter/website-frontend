'use client';

import Image from 'next/image';
import imageVectorOrange from '@/assets/images/home/hero-section-vetor-orange.png';
import imageVectorGreen from '@/assets/images/home/hero-section-vector-green.png';
import imageSpeakerOne from '@/assets/images/home/hero-section-speaker-1.png';
import imageSpeakerTwo from '@/assets/images/home/hero-section-speaker-2.png';
import imageSpeakerThree from '@/assets/images/home/hero-section-speaker-3.png';
import imageSpeakerFour from '@/assets/images/home/hero-section-speaker-4.png';
import imageSpeakerFive from '@/assets/images/home/hero-section-speaker-5.png';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center gap-y-16">
        {/* vectors */}
        <Image
          src={imageVectorOrange}
          alt="vector orange"
          className="absolute bottom-0 right-0 top-0 object-contain"
        />
        <Image
          src={imageVectorGreen}
          alt="vector green"
          className="absolute bottom-0 left-0 top-0"
        />
        {/* texts */}
        <div className="relative z-10 w-full space-y-5 sm:max-w-xl md:max-w-2xl lg:max-w-[713px]">
          {/* title */}
          <h1 className="w-full text-3xl font-extrabold leading-[45px] lg:text-5xl lg:leading-[72px]">
            دومین همایش <span className="text-orange-500">فرانت‌اند</span> ایران{' '}
            <span className="text-green-500">اسفند ۱۴۰۲</span> در فریدون‌کنار،
            مازندران
          </h1>
          {/* description */}
          <h2 className="w-full text-lg font-light text-zinc-400 lg:text-2xl lg:leading-9">
            همایش فرانت چپتر محلی برای گردهمایی و به اشتراک‌گذاری تجربیات
            برنامه‌نویسان، متخصصین و علاقه‌مندان حوزه فرانت‌اند
          </h2>
          {/* detail */}
          <div className="grid w-full grid-cols-2 md:flex md:gap-10">
            {[
              {
                title: 'زمان',
                description: '۱۰ اسفند ۱۴۰۲',
              },
              {
                title: 'سخنرانان',
                description: '۱۸ نفر',
              },
              {
                title: 'شهر',
                description: 'فریدون‌کنار، مازندران',
              },
              {
                title: 'مکان',
                description: 'مجتمع تفریحی رجایی',
              },
            ].map((item, index) => {
              return (
                <div key={index} className="">
                  <p className="text-sm font-light text-zinc-50">
                    {item.title}
                  </p>
                  <p className="text-orange-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* images */}
        <div className="w-full">
          {/* for mobile */}
          <div className="lg:hidden">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2.3,
                },
                640: {
                  slidesPerView: 3.3,
                },
                768: {
                  slidesPerView: 4.3,
                },
              }}
            >
              {[
                imageSpeakerOne,
                imageSpeakerTwo,
                imageSpeakerThree,
                imageSpeakerFour,
                imageSpeakerFive,
              ].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image src={item} alt="سخنرانان همایش" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
