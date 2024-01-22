import { StaticImageData } from "next/image";
import { socialIcons } from "@/app/components/Speakers/SpeakerCard";

export type TSpeakerCard = {
  avatar: StaticImageData;
  fullName: string;
  position: string;
  company: string;
  socials: Record<keyof typeof socialIcons, string>;
};
