import Image from "next/image";
import {
  RiBusLine,
  RiCalendarLine,
  RiHotelLine,
  RiMapPinTimeLine,
  RiStarFill,
  RiTimeLine,
} from "react-icons/ri";

// ** data
import { AdditionalPlan } from "@/data/additionalPlans";

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
    <div
      className="mx-4 flex min-h-64
   max-w-[850px] flex-col gap-y-5 rounded-xl border-2 border-zinc-700 bg-zinc-800 px-4 md:flex-row-reverse md:gap-4"
    >
      <div className="pt-4 md:border-r md:border-zinc-700 md:pb-4 md:pr-4">
        <Image
          src={image.desktop.src}
          alt={image.desktop.alt}
          className="hidden size-52 rounded-xl md:flex"
        />
        <Image
          src={image.mobile.src}
          alt={image.mobile.alt}
          className="w-full rounded-xl md:hidden "
        />
      </div>
      <div className="flex flex-1 flex-col  gap-y-5 pb-4 md:items-start md:justify-between md:pt-4">
        <div className="space-y-1">
          <div className=" md:flex md:justify-between">
            <p className=" text-2xl font-bold md:text-start md:text-3xl">
              {title}
            </p>
          </div>
          <p className=" text-lg leading-7 text-zinc-200 md:text-start md:text-xl">
            {description}
          </p>
        </div>
        {place && (
          <div className="w-full">
            <div className="mt-2 flex justify-between">
              <span className=" text-2xl font-semibold text-zinc-300 md:text-start md:text-3xl">
                {place.name}
              </span>
              <span className="text-xl text-yellow-500 md:hidden">۵ ستاره</span>
              <div className=" hidden md:flex">
                {Array.from({ length: place.rate.value }).map((_, index) => (
                  <RiStarFill
                    key={index + place.rate.value}
                    className="text-lg text-yellow-500"
                  />
                ))}
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="mt-3 flex items-center gap-2">
                <RiTimeLine className="text-xl" />
                <span className="text-zinc-200">{time}</span>
              </div>
              <div className=" flex items-center gap-2">
                <RiCalendarLine className="text-xl" />
                <span className="text-zinc-200">{date}</span>
              </div>
            </div>
          </div>
        )}
        {transport && (
          <div className="w-full">
            <div className="mt-3 flex flex-nowrap items-center text-zinc-200">
              <RiMapPinTimeLine className="text-2xl" />
              <hr className="border-1 mx-5 flex-1 border-zinc-700" />
              <RiBusLine className="text-2xl" />
              <hr className="border-1 mx-5 flex-1 border-zinc-700" />
              <RiHotelLine className="text-2xl" />
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
