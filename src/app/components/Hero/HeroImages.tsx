import imageOne from "@/assets/images/home/hero-section-image-1.png";
import imageTwo from "@/assets/images/home/hero-section-image-2.png";
import imageThree from "@/assets/images/home/hero-section-image-3.png";
import imageFour from "@/assets/images/home/hero-section-image-4.png";
import imageFive from "@/assets/images/home/hero-section-image-5.png";
import { cn } from "@/utils/styles";
import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="mt-32 flex snap-x scroll-px-4 grid-flow-col grid-cols-3 grid-rows-2 flex-nowrap gap-4 overflow-x-auto px-4 xl:container *:shrink-0 xl:grid xl:gap-x-8 xl:gap-y-14">
      {[
        {
          className: "justify-end",
          src: imageOne,
        },
        {
          className: "",
          src: imageTwo,
        },
        {
          className: "row-span-2 items-center",
          src: imageThree,
        },
        {
          className: "justify-end",
          src: imageFour,
        },
        {
          className: "",
          src: imageFive,
        },
      ].map(({ className, src }, index) => (
        <div key={index} className={cn("flex snap-center", className)}>
          <Image
            src={src}
            className={cn("w-40 md:w-60 lg:w-72 xl:w-[360px]")}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default HeroImages;
