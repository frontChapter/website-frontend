import { TSpeakerCard } from "@/types/home/speakerCard.type";
import Image from "next/image";
import Link from "next/link";
import {
  RiGithubLine,
  RiGlobalLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

const SpeakerCard = (props: TSpeakerCard) => {
  return (
    <div>
      <Image
        width={128}
        height={128}
        className="lg:w-[168px]"
        src={props.avatar}
        alt={props.fullName}
      />
      <div className="text-center lg:space-y-0.5">
        <p className="mt-2 font-extrabold lg:text-xl">{props.fullName}</p>
        <p className="text-sm text-zinc-400 lg:text-base">{props.position}</p>
        <p className="text-sm text-zinc-400 lg:text-base">{props.company}</p>
      </div>
      <div className="mt-2 flex gap-1 lg:mt-4">
        {props.socials.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className="flex h-6 w-6 items-center justify-center rounded-full"
            >
              {
                {
                  github: (
                    <RiGithubLine className="h-5 w-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500" />
                  ),
                  twitter: (
                    <RiTwitterXLine className="h-5 w-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500" />
                  ),
                  linkedin: (
                    <RiLinkedinLine className="h-5 w-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500" />
                  ),
                  instagram: (
                    <RiInstagramLine className="h-5 w-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500" />
                  ),
                  website: (
                    <RiGlobalLine className="h-5 w-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500" />
                  ),
                }[item.icon]
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerCard;
