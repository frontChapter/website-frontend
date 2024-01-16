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
    <section className="relative">
      <div className="container flex flex-col items-center">
        {/* title, sub-title */}
        <div className="mt-2 space-y-1 text-center">
          <p className="text-2xl font-bold">ساعت‌ها رو دوباره کوک کردیم</p>
          <p className="text-2xl text-zinc-400">اینجا ثانیه‌ها ارزشمنداند</p>
        </div>
        {/* countdown timer */}
        <div className="mt-5">
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-3xl text-green-500">
                {timeLeft.days.toLocaleString('fa-IR')}
              </p>
              <p className="text-zinc-500">روز</p>
            </div>
            <span className="text-[48px] font-semibold text-zinc-500">:</span>
            <div className="text-center">
              <p className="text-3xl text-green-500">
                {timeLeft.hours.toLocaleString('fa-IR')}
              </p>
              <p className="text-zinc-500">ساعت</p>
            </div>
            <span className="text-[48px] font-semibold text-zinc-500">:</span>
            <div className="text-center">
              <p className="text-3xl text-green-500">
                {timeLeft.minutes.toLocaleString('fa-IR')}
              </p>
              <p className="text-zinc-500">دقیقه</p>
            </div>
            <span className="text-[48px] font-semibold text-zinc-500">:</span>
            <div className="text-center">
              <p className="text-3xl text-green-500">
                {timeLeft.seconds.toLocaleString('fa-IR')}
              </p>
              <p className="text-zinc-500">ثانیه</p>
            </div>
          </div>
        </div>
        {/* text */}
        <p className='text-zinc-400 text-lg'>تا شروع دومین همایش فرانت چپتر</p>
      </div>
    </section>
  );
}
