import { RiCouponLine } from "react-icons/ri";

import Image from "next/image";
import waveDesktop from "@/assets/images/home/participants-wave-desktop.png";
import waveMobile from "@/assets/images/home/participants-wave-mobile.png";

const Participants = () => {
  return (
    <section className="relative flex flex-col gap-12 py-16 lg:py-32">
      <Image
        src={waveMobile}
        alt=""
        className="absolute right-0 -z-10 w-screen md:hidden"
      />
      <Image
        src={waveDesktop}
        alt=""
        className="absolute right-0 -z-10 hidden max-w-[50vw] md:block"
      />
      <Image
        src={waveDesktop}
        alt=""
        className="absolute left-0 -z-10 hidden max-w-[50vw] -scale-x-100 md:block"
      />
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 md:py-6">
          <RiCouponLine className="size-16 text-orange-500" />
          <div>
            <h2 className="text-center text-2xl font-bold text-white lg:text-3xl">
              دیگر شرکت کنندگان در همایش
            </h2>
            <p className="text-center text-xl text-zinc-400 lg:text-2xl">
              براساس بلیت‌های فروخته شده
            </p>
          </div>
        </div>
        {/* <div className="container flex w-full flex-wrap items-center justify-center gap-4 lg:gap-6">
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).map((item) => (
            <Image src={avatar} alt="" key={item} className="w-12 lg:w-16" />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Participants;
