"use client";

import TweetCard from "./TweetCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Tweets = () => {
  return (
    <div className="flex flex-col gap-4 py-4 lg:gap-8 lg:py-8">
      <div className="container flex items-center justify-between">
        <h1 className="text-xl font-extrabold lg:text-4xl">
          <span>درباره</span>{" "}
          <span className="text-orange-500">فرانت چپتر</span>{" "}
          <br className="md:hidden" />
          <span>چی میگن؟</span>
        </h1>
        <div className="flex flex-col items-center gap-[0.25rem]">
          <span className="text-xs font-normal lg:text-base">
            با این هشتگ توییت بزنید :)
          </span>
          <Link
            dir="ltr"
            className="text-xs font-normal lg:text-base"
            href="https://twitter.com/hashtag/front_chapter"
            target="_blank"
          >
            #front_chapter
          </Link>
        </div>
      </div>

      <div className="select-none">
        <Swiper slidesPerView="auto" autoplay loop modules={[Autoplay]}>
          {new Array(10).fill(0).map((_, index) => (
            <SwiperSlide key={index} className="ms-4 !w-auto xl:ms-6">
              <TweetCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tweets;
