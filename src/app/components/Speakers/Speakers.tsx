import { RiMicLine } from "react-icons/ri";
import { cn } from "@/utils/styles";
import { speakersData } from "@/data/speakersData";
import SpeakerCard from "./SpeakerCard";

export default function Speakers() {
  return (
    <section className="py-6 lg:py-12">
      <div className="container space-y-16">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
          <RiMicLine className="size-12 fill-orange-500 lg:size-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">سخنرانان همایش</h3>
        </div>
        {/* body */}
        <div className="flex w-full flex-wrap justify-center gap-y-6 sm:gap-y-8 lg:gap-y-10">
          {speakersData.map((item, index) => {
            return (
              <div
                key={index}
                className={cn(
                  `flex w-1/2 flex-col items-center sm:w-1/3 lg:w-1/4 ${
                    index === 6 && "lg:w-1/3"
                  }`,
                )}
              >
                <SpeakerCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
