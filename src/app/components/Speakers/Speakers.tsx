import { RiMicLine } from "react-icons/ri";
import { speakersData } from "@/data/speakersData";
import SpeakerCard from "./SpeakerCard";
import { Fragment } from "react";

export default function Speakers() {
  return (
    <section className="py-6 lg:py-12" id="speakers">
      <div className="container flex flex-col items-stretch gap-2 lg:gap-16">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
          <RiMicLine className="size-12 text-orange-500 lg:size-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">سخنرانان همایش</h3>
        </div>

        {/* body */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 md:gap-y-6 lg:gap-y-0">
          {speakersData.map((item, index) => {
            return (
              <Fragment key={index}>
                {[4, 7].includes(index) && (
                  <div className="hidden h-6 w-full lg:block" />
                )}
                <SpeakerCard {...item} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
