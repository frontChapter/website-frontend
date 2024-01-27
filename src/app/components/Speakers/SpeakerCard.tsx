import { TSpeakerCard } from "@/types/home/speakerCard.type";
import Image from "next/image";
import SpeakerSocials from "./SpeakerSocials";

const SpeakerCard = ({
  avatar,
  company,
  fullName,
  position,
  socials,
}: TSpeakerCard) => {
  return (
    <div className="flex w-1/2 flex-col items-center gap-2 md:w-1/3 lg:w-1/4 lg:gap-4">
      <Image
        width={128}
        height={128}
        className="lg:size-[168px]"
        src={avatar}
        alt={fullName}
      />
      <div className="flex flex-col items-center gap-0.5 lg:gap-1">
        <strong className="lg:text-xl">{fullName}</strong>
        <span className="text-sm text-zinc-400 lg:text-base">{position}</span>
        <span className="text-sm text-zinc-400 lg:text-base">{company}</span>
      </div>
      <div className="flex gap-3 p-1 lg:gap-2 lg:p-2">
        <SpeakerSocials {...socials} />
      </div>
    </div>
  );
};

export default SpeakerCard;
