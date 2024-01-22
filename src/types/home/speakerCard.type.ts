import { socialIcons } from "@/app/components/Speakers/SpeakerSocials";
import { StaticImageData } from "next/image";

export type TSpeakerCard = {
  avatar: StaticImageData;
  fullName: string;
  position: string;
  company: string;
  socials: Record<keyof typeof socialIcons, string>;
};
