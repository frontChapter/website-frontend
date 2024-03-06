"use client";

import { conferenceDateTime } from "@/data/timing";
import Wave from "@/assets/images/home/count-down-wave.svg";
import WaveMobile from "@/assets/images/home/count-down-wave-mobile.svg";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
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
        <strong className="font-bold">دلتنگتون هستیم</strong>
        <span className="text-zinc-400">
          به خاطر خاطره‌های زیبایی که ساختیم
        </span>
      </div>
      <CountDownTimer />
      <p className="text-xl text-zinc-400 lg:mt-8 lg:text-3xl/snug">
        گذشته از آخرین دورهمی حضوری
      </p>
    </section>
  );
} 

const CountDownTimer = () => {
  const calculateDuration = (start: number, end: number) => {
    const totalSeconds = Math.floor((end - start) / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [now, setNow] = useState(Date.now());
  const conferenceDate = conferenceDateTime.getTime();
  const duration = calculateDuration(now, conferenceDate);

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const times = [
    {
      label: "ثانیه",
      value: duration.seconds,
    },
    {
      label: "دقیقه",
      value: duration.minutes,
    },
    {
      label: "ساعت",
      value: duration.hours,
    },
    {
      label: "روز",
      value: duration.days,
    },
  ];

  return (
    <div className="mt-7 flex gap-3 lg:mt-8 lg:gap-6">
      {[...times].map(({ label, value }) => (
        <Fragment key={label}>
          <div className="flex w-12 flex-col text-center lg:w-24">
            <span
              className="text-3xl/snug text-green-500 lg:text-5xl/snug"
              suppressHydrationWarning
            >
              {Math.abs(value).toLocaleString("fa-IR")}
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
