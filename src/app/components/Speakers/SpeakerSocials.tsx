import Link from "next/link";
import {
  RiGithubLine,
  RiGlobalLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { TSpeakerCard } from "@/types/home/speakerCard.type";

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

export default SpeakerSocials;
