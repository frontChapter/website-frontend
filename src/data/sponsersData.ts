import imageSponserRocket from "@/assets/images/home/sponsor-rocket.svg";
import imageSponserLiara from "@/assets/images/home/sponsor-liara.svg";
import imageSponserPachim from "@/assets/images/home/sponsor-pachim.svg";
import { StaticImageData } from "next/image";

interface ISponsorData {
  title: string;
  alt: string;
  src: StaticImageData;
  styles: string;
}

export const sponsors: ISponsorData[] = [
  {
    title: "Liara",
    alt: "لوگو لیارا",
    src: imageSponserLiara,
    styles: "w-16 h-16 md:w-24 md:h-24",
  },
  {
    title: "Rocket",
    alt: "لوگو راکت",
    src: imageSponserRocket,
    styles: "w-20 h-20 md:w-40 md:h-40",
  },
  {
    title: "Pachim",
    alt: "لوگو پچیم",
    src: imageSponserPachim,
    styles: "w-20 h-20 md:w-40 md:h-40",
  },
];
