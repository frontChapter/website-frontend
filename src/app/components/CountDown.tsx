"use client";

import { conferenceDateTime } from "@/data/timing";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";

export default function CountDown() {
  const [now, setNow] = useState(Date.now());
  const duration = moment.duration(
    Math.max(moment(conferenceDateTime).diff(now), 0),
  );

  /**
   * Update the current time every second
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center bg-[url('../assets/images/home/count-down-vector.svg')] bg-cover bg-top bg-no-repeat lg:pt-10">
      <div className="mt-2 text-center lg:space-y-3">
        <p className="text-2xl font-bold lg:text-4xl">
          ساعت‌ها رو دوباره کوک کردیم
        </p>
        <p className="text-2xl text-zinc-400 lg:text-4xl">
          اینجا ثانیه‌ها ارزشمندند
        </p>
      </div>
      <div className="mb-1 mt-4 flex w-full justify-center gap-4 lg:mb-4 lg:mt-8 lg:gap-8">
        {[
          {
            label: "ثانیه",
            value: duration.seconds(),
          },
          {
            label: "دقیقه",
            value: duration.minutes(),
          },
          {
            label: "ساعت",
            value: duration.hours(),
          },
          {
            label: "روز",
            value: Math.trunc(duration.asDays()),
          },
        ].map(({ label, value }) => (
          <Fragment key={label}>
            <div className="flex flex-col text-center" key={label}>
              <span
                className="text-3xl text-green-500 lg:text-5xl"
                suppressHydrationWarning
              >
                {value.toLocaleString("fa-IR")}
              </span>
              <span className="text-zinc-500 lg:text-xl">{label}</span>
            </div>
            <span className="text-5xl font-semibold text-zinc-500 last:hidden">
              :
            </span>
          </Fragment>
        ))}
      </div>
      <p className="text-lg text-zinc-400 lg:text-xl">
        تا شروع دومین همایش فرانت چپتر
      </p>
    </section>
  );
}
