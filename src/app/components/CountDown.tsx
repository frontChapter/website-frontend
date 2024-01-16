'use client';

import { useCallback, useEffect, useState } from 'react';

export default function CountDown() {
  // countdown time left
  type TTimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  const [timeLeft, setTimeLeft] = useState<TTimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calculateTimeLeftHandler = useCallback((): TTimeLeft => {
    const difference =
      new Date('2024-02-20T00:00:00').getTime() - new Date().getTime();
    let timeLeft: TTimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeftHandler());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeftHandler]);

  return (
    <section className="relative flex flex-col items-center lg:pt-10 bg-[url('../assets/images/home/count-down-vector.svg')] bg-cover bg-top bg-no-repeat">
      {/* title, sub-title */}
      <div className="mt-2 text-center lg:space-y-3">
        <p className="text-2xl font-bold lg:text-4xl">
          ساعت‌ها رو دوباره کوک کردیم
        </p>
        <p className="text-2xl text-zinc-400 lg:text-4xl">
          اینجا ثانیه‌ها ارزشمنداند
        </p>
      </div>
      {/* countdown timer */}
      <div className="mb-1 mt-4 flex w-full justify-center gap-4 lg:mb-4 lg:mt-8 lg:gap-8">
        <div className="text-center">
          <p className="text-3xl text-green-500 lg:text-5xl">
            {timeLeft.days.toLocaleString('fa-IR')}
          </p>
          <p className="text-zinc-500 lg:text-xl">روز</p>
        </div>
        <span className="text-5xl font-semibold text-zinc-500">:</span>
        <div className="text-center">
          <p className="text-3xl text-green-500 lg:text-5xl">
            {timeLeft.hours.toLocaleString('fa-IR')}
          </p>
          <p className="text-zinc-500 lg:text-xl">ساعت</p>
        </div>
        <span className="text-5xl font-semibold text-zinc-500">:</span>
        <div className="text-center">
          <p className="text-3xl text-green-500 lg:text-5xl">
            {timeLeft.minutes.toLocaleString('fa-IR')}
          </p>
          <p className="text-zinc-500 lg:text-xl">دقیقه</p>
        </div>
        <span className="text-5xl font-semibold text-zinc-500">:</span>
        <div className="text-center">
          <p className="text-3xl text-green-500 lg:text-5xl">
            {timeLeft.seconds.toLocaleString('fa-IR')}
          </p>
          <p className="text-zinc-500 lg:text-xl">ثانیه</p>
        </div>
      </div>
      {/* text */}
      <p className="text-lg text-zinc-400 lg:text-xl">
        تا شروع دومین همایش فرانت چپتر
      </p>
    </section>
  );
}
