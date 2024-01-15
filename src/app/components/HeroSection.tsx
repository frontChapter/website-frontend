'use client';

import Image from 'next/image';
import imageVectorOrangeDesktop from '@/assets/images/home/hero-section-vector-orange-desktop.svg';
import imageVectorGreenDesktop from '@/assets/images/home/hero-section-vector-green-desktop.svg';
import imageVectorOrangeMobile from '@/assets/images/home/hero-section-vector-orange-mobile.svg';
import imageSpeakerDesktop from '@/assets/images/home/hero-section-speaker-desktop.png';
import imageSpeakerOneMobile from '@/assets/images/home/hero-section-speaker-1-mobile.png';
import imageSpeakerTwoMobile from '@/assets/images/home/hero-section-speaker-2-mobile.png';
import imageSpeakerThreeMobile from '@/assets/images/home/hero-section-speaker-3-mobile.png';
import imageSpeakerFourMobile from '@/assets/images/home/hero-section-speaker-4-mobile.png';
import imageSpeakerFiveMobile from '@/assets/images/home/hero-section-speaker-5-mobile.png';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center">
        {/* vectors */}
        <div>
          {/* mobile */}
          <div className="lg:hidden">
            <Image
              src={imageVectorOrangeMobile}
              alt="vector orange"
              className="absolute left-0 top-[370px] w-full"
            />
          </div>
          {/* desktop */}
          <div className="hidden lg:block">
            <Image
              src={imageVectorOrangeDesktop}
              alt="vector orange"
              className="absolute right-0"
            />
            <Image
              src={imageVectorGreenDesktop}
              alt="vector green"
              className="absolute left-0"
            />
          </div>
        </div>
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
        <div className="mt-20 w-full">
          {/* mobile */}
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
                imageSpeakerOneMobile,
                imageSpeakerTwoMobile,
                imageSpeakerThreeMobile,
                imageSpeakerFourMobile,
                imageSpeakerFiveMobile,
              ].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image src={item} alt="سخنرانان همایش" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* desktop */}
          <div className="relative lg:flex justify-center hidden">
            <Image
              src={imageSpeakerDesktop}
              alt="سخنرانان همایش"
              width={1100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
