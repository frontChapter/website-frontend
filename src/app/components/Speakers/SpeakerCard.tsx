import { TSpeakerCard } from "@/types/home/speakerCard.type";
import Image from "next/image";
import SpeakerSocials from "./SpeakerSocials";

const SpeakerCard = (props: TSpeakerCard) => {
  return (
    <div>
      <Image
        width={128}
        height={128}
        className="lg:size-[168px]"
        src={props.avatar}
        alt={props.fullName}
      />
      <div className="text-center lg:space-y-0.5">
        <p className="mt-2 font-extrabold lg:text-xl">{props.fullName}</p>
        <p className="text-sm text-zinc-400 lg:text-base">{props.position}</p>
        <p className="text-sm text-zinc-400 lg:text-base">{props.company}</p>
      </div>
      <div className="mt-2 flex gap-1 lg:mt-4">
        <SpeakerSocials {...props.socials} />
      </div>
    </div>
  );
};

export default SpeakerCard;
