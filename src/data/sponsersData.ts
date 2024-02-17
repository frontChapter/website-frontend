import imageSponserLiara from "@/assets/images/home/sponsor-liara.svg";
import imageSponserPachim from "@/assets/images/home/sponsor-pachim.svg";
import imageSponserRocket from "@/assets/images/home/sponsor-rocket.svg";
import { StaticImageData } from "next/image";

interface ISponsorData {
  title: string;
  alt: string;
  src: StaticImageData;
  styles: string;
  link: string;
}

export const sponsors: ISponsorData[] = [
  {
    title: "Liara",
    alt: "لوگو لیارا",
    src: imageSponserLiara,
    link: "https://liara.ir/",
    styles: "w-16 h-16 md:w-24 md:h-24",
  },
  {
    title: "Rocket",
    alt: "لوگو راکت",
    src: imageSponserRocket,
    link: "https://roocket.ir/",
    styles: "w-20 h-20 md:w-40 md:h-40",
  },
  {
    title: "Pachim",
    alt: "لوگو پچیم",
    src: imageSponserPachim,
    link: "https://pachim.sh/",
    styles: "w-20 h-20 md:w-40 md:h-40",
  },
];
