import { RiCouponLine } from "react-icons/ri";

import Image from "next/image";
import waveDesktop from "@/assets/images/home/participants-wave-desktop.png";
import waveMobile from "@/assets/images/home/participants-wave-mobile.png";
import getParticipantList, { Participant } from "./getParticipantList";

const Participants = async () => {
  let participantList: Participant[] = [];
  try {
    participantList = await getParticipantList();
  } catch (error) {
    return;
  }

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
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-4 md:py-6">
          <RiCouponLine className="size-16 text-orange-500" />
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <h2 className="text-center text-3xl font-bold ">شرکت کنندگان</h2>
            <div className="flex items-center gap-2 text-xl text-zinc-400 md:text-2xl">
              <strong className="text-orange-500">
                {participantList.length.toLocaleString("fa-IR")}
              </strong>{" "}
              <span>شرکت کننده تا این لحظه</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-zinc-800 p-3 text-zinc-300">
              <i className="size-3 rounded-full bg-green-600"></i>
              <span className="text-sm font-bold">اطلاعات زنده</span>
            </div>
          </div>
        </div>
        <div className="container flex w-full flex-wrap items-center justify-center gap-4 lg:gap-6">
          {participantList.map(({ buyer_name, buyer_profile_photo_url }) => (
            <Image
              key={buyer_profile_photo_url}
              src={buyer_profile_photo_url}
              width={48}
              height={48}
              alt={buyer_name}
              title={buyer_name}
              className="size-12 rounded-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participants;
