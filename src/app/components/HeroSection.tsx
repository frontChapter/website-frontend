"use client";

import Image from "next/image";
import imageVectorOrange from "@/assets/images/home/hero-section-vector-orange.svg";
import imageVectorGreen from "@/assets/images/home/hero-section-vector-green.svg";
import imageOne from "@/assets/images/home/hero-section-image-1.png";
import imageTwo from "@/assets/images/home/hero-section-image-2.png";
import imageThree from "@/assets/images/home/hero-section-image-3.png";
import imageFour from "@/assets/images/home/hero-section-image-4.png";
import imageFive from "@/assets/images/home/hero-section-image-5.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-6 lg:py-12">
      <Image
        src={imageVectorOrange}
        alt="vector orange"
        className="absolute bottom-0 left-0 -z-10 max-w-none lg:right-0 lg:top-0"
      />
      <Image
        src={imageVectorGreen}
        alt="vector green"
        className="absolute left-0 top-0 -z-10 hidden lg:block"
      />
      <div className="container flex flex-col items-center">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-2 lg:w-8/12">
            <h1 className="text-3xl/snug font-extrabold md:text-5xl/normal">
              <span>دومین همایش</span>{" "}
              <span className="text-orange-500">فرانت‌اند</span>{" "}
              <span>ایران</span>
              <br />
              <span className="text-green-500">اسفند ۱۴۰۲</span>{" "}
              <span>در فریدون‌کنار، مازندران</span>
            </h1>

            <h2 className="text-lg text-zinc-400 lg:text-2xl/normal">
              همایش فرانت چپتر محلی برای گردهمایی و به اشتراک‌گذاری تجربیات
              برنامه‌نویسان، متخصصین و علاقه‌مندان حوزه فرانت‌اند
            </h2>

            <div className="grid grid-cols-2 gap-3 pt-4 md:flex md:gap-8 md:pt-6">
              {[
                {
                  title: "زمان",
                  description: "۱۰ اسفند ۱۴۰۲",
                },
                {
                  title: "سخنرانان",
                  description: "۱۸ نفر",
                },
                {
                  title: "شهر",
                  description: "فریدون‌کنار، مازندران",
                },
                {
                  title: "مکان",
                  description: "مجتمع تفریحی رجایی",
                },
              ].map((item, index) => {
                return (
                  <div key={index} className="">
                    <p className="text-sm font-light text-zinc-50 md:text-base">
                      {item.title}
                    </p>
                    <p className="text-orange-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
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
          <div className="relative hidden justify-center lg:flex">
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
