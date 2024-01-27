import Image from "next/image";
import {
  RiBusLine,
  RiCalendarLine,
  RiHotelLine,
  RiMapPinTimeLine,
  RiTimeLine,
} from "react-icons/ri";

// ** data
import { AdditionalPlan } from "@/data/additionalPlans";
import { cn } from "@/utils/styles";

const Plan = ({
  image,
  title,
  description,
  date,
  time,
  place,
  transport,
}: AdditionalPlan) => {
  return (
    <div className="mx-4 flex min-h-64 max-w-md flex-col rounded-xl border-2 border-zinc-700 bg-zinc-800 md:max-w-[850px] md:flex-row-reverse">
      <div className="flex shrink-0 items-center p-4 pb-0 md:w-1/3 md:border-r md:border-zinc-700 md:p-6">
        <Image
          src={image.desktop.src}
          alt={image.desktop.alt}
          className="hidden w-full rounded-xl md:flex"
        />
        <Image
          src={image.mobile.src}
          alt={image.mobile.alt}
          className="w-full rounded-xl md:hidden "
        />
      </div>
      <div className="flex grow flex-col gap-y-5 p-4 md:items-start md:justify-between md:p-6">
        <div
          className={cn("flex flex-col gap-3", {
            "md:gap-6": !place && !transport,
          })}
        >
          <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
          <p className="whitespace-pre-wrap text-lg text-zinc-200 md:text-xl">
            {description}
          </p>
        </div>
        {place && (
          <div className="flex w-full flex-col gap-4">
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-2 font-semibold text-zinc-300 md:text-start">
                <RiHotelLine className="text-xl" />
                <span className="text-2xl">{place.name}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-lg md:flex-row md:justify-between lg:items-center">
              <div className="flex items-center gap-2">
                <RiCalendarLine />
                <span className="text-zinc-200">{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <RiTimeLine />
                <span className="text-zinc-200">{time}</span>
              </div>
            </div>
          </div>
        )}
        {transport && (
          <div className="mt-auto w-full">
            <div className="flex flex-nowrap items-center gap-5 text-2xl text-zinc-200 lg:text-3xl">
              <RiMapPinTimeLine />
              <hr className="grow border-zinc-700" />
              <RiBusLine />
              <hr className="grow border-zinc-700" />
              <RiHotelLine />
            </div>
            <div className="mt-3 flex justify-between ">
              <p className="text-lg text-zinc-200">
                {transport.origin.title}
                <br />
                {transport.origin.time}
              </p>
              <p className="text-end text-lg text-zinc-200">
                {transport.destination.title}
                <br />
                {transport.destination.time}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;
