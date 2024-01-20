import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type TSpeakerCard = {
  avatar: StaticImageData;
  fullName: string;
  position: string;
  company: string;
  socials: {
    icon: React.ReactElement<IconType>;
    link: string;
  }[];
};