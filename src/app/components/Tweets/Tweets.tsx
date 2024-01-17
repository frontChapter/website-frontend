'use client';
import TweetCard from './TweetCard';
// Import React icons
import { RiTwitterXFill } from 'react-icons/ri';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {} from 'swiper/core';

// Import Swiper styles
import 'swiper/css';

const Tweets = () => {
  return (
    <div className="container">
      <div className="mb-4 flex items-start justify-between text-center lg:mb-8">
        <h1 className="text-lg font-extrabold lg:text-4xl">
          درباره<span className="text-orange-500"> فرانت چپتر </span>{' '}
          <br className="xl:hidden" /> چی میگن؟{' '}
        </h1>
        <div className="flex flex-col  gap-[0.25rem]">
          <h2 className="inline-flex text-xs font-normal lg:text-base">
            با این هشتگ <RiTwitterXFill className="mx-1 text-zinc-400" /> بزنید
            :)
          </h2>
          <h3
            className="text-xs font-normal lg:text-base"
            style={{ direction: 'ltr' }}
          >
            #front_chapter_1402
          </h3>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Tweets;
