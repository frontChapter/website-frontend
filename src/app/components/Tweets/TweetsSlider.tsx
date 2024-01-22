"use client";

import TweetCard from "./TweetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TweetsSlider = () => {
  return (
    <div className="select-none">
      <Swiper slidesPerView="auto" autoplay loop modules={[Autoplay]}>
        {new Array(10).fill(0).map((_, index) => (
          <SwiperSlide key={index} className="ms-4 !w-auto xl:ms-6">
            <TweetCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TweetsSlider;
