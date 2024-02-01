import { RiCouponLine } from "react-icons/ri";

import Image from "next/image";
import imageVectorOrange from "@/assets/images/home/other-participants-vector-orange.svg";
import avatar from "@/assets/images/home/other-participants-avatar.png";

const Participants = () => {
  return (
    <section className="flex flex-col gap-12">
      <section className="my-6">
        <Image
          src={imageVectorOrange}
          className="absolute right-0 -z-10 h-[59px] w-[215px] lg:h-[200px] lg:w-[720px]"
          alt=""
        />
        <Image
          src={imageVectorOrange}
          alt=""
          className="absolute left-0 -z-10 h-[59px] w-[215px] -scale-x-[1] lg:h-[200px] lg:w-[720px]"
        />
        <section className="flex flex-col items-center justify-center gap-2">
          <RiCouponLine className="size-16 text-orange-500" />
          <div>
            <h2 className="text-center text-2xl font-bold text-white lg:text-3xl">
              دیگر شرکت کنندگان در همایش
            </h2>
            <p className="text-center text-xl text-zinc-400 lg:text-2xl">
              براساس بلیت‌های فروخته شده
            </p>
          </div>
        </section>
      </section>
      <section className="container flex w-full flex-wrap items-center justify-center gap-4 lg:gap-6">
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).map((item) => (
          <Image src={avatar} alt="" key={item} className="w-12 lg:w-16" />
        ))}
      </section>
    </section>
  );
};

export default Participants;
