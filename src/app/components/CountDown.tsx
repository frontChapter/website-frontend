"use client";

import WaveMobile from "@/assets/images/home/count-down-wave-mobile.svg";
import Wave from "@/assets/images/home/count-down-wave.svg";
import { conferenceDateTime } from "@/data/timing";
import { calculateTimeRemaining } from "@/utils/countDown";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";

export default function CountDown() {
  return (
    <section className="relative flex flex-col items-center py-14 lg:py-20">
      <Image
        src={Wave}
        alt=""
        className="absolute inset-0 -z-10 hidden size-full lg:block"
      />
      <Image
        src={WaveMobile}
        alt=""
        className="absolute inset-0 -z-10 size-full lg:hidden"
      />
      <HiOutlineClock className="absolute inset-y-0 -z-10 size-60 text-zinc-800/20 lg:size-[460px]" />

      <div className="flex flex-col gap-2 text-center text-2xl lg:text-4xl">
        <strong className="font-bold">ساعت‌ها رو دوباره کوک کردیم</strong>
        <span className="text-zinc-400">اینجا ثانیه‌ها ارزشمندند</span>
      </div>
      <CountDownTimer />
      <p className="text-xl text-zinc-400 lg:mt-8 lg:text-3xl/snug">
        تا شروع دومین همایش فرانت چپتر
      </p>
    </section>
  );
}

const CountDownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(conferenceDateTime),
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(conferenceDateTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-7 flex gap-3 lg:mt-8 lg:gap-6">
      {[
        {
          label: "ثانیه",
          value: timeRemaining.seconds,
        },
        {
          label: "دقیقه",
          value: timeRemaining.minutes,
        },
        {
          label: "ساعت",
          value: timeRemaining.hours,
        },
        {
          label: "روز",
          value: Math.trunc(timeRemaining.days),
        },
      ].map(({ label, value }) => (
        <Fragment key={label}>
          <div className="flex w-12 flex-col text-center lg:w-24" key={label}>
            <span
              className="text-3xl/snug text-green-500 lg:text-5xl/snug"
              suppressHydrationWarning
            >
              {value.toLocaleString("fa-IR")}
            </span>
            <span className="text-zinc-500 lg:text-xl">{label}</span>
          </div>
          <span className="text-3xl/snug font-semibold text-zinc-500 last:hidden lg:text-5xl/snug">
            :
          </span>
        </Fragment>
      ))}
    </div>
  );
};
