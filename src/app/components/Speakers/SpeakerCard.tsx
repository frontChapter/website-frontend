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

const SpeakerSocials = (socials: TSpeakerCard["socials"]) => {
  return Object.entries(socials).map(([icon, link]) => {
    const Icon = socialIcons[icon as keyof typeof socialIcons];

    return (
      <Link key={icon} href={link} target="_blank">
        <Icon className="size-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500" />
      </Link>
    );
  });
};

export const socialIcons = {
  github: RiGithubLine,
  twitter: RiTwitterXLine,
  linkedin: RiLinkedinLine,
  instagram: RiInstagramLine,
  website: RiGlobalLine,
} as const;

export default SpeakerCard;
