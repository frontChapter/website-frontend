import { StaticImageData } from "next/image";

export type TSpeakerCard = {
  avatar: StaticImageData;
  fullName: string;
  position: string;
  company: string;
  socials: {
    icon: 'github' | 'instagram' | 'linkedin' | 'website' | 'twitter';
    link: string;
  }[];
};