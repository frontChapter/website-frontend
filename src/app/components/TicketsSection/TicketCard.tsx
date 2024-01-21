import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ImageProps {
  src: StaticImageData;
  alt: string;
}
export interface TicketCardProps {
  ticket: {
    title: string;
    price: string;
    description: string;
    image: {
      mobile: ImageProps;
      desktop: ImageProps;
    };
    extraContent?: ReactNode;
  };
}
export const TicketCard = ({
  ticket: { title, price, description, image, extraContent },
}: TicketCardProps) => {
  return (
    <div
      className="mx-4 flex min-h-64
   max-w-[850px] flex-col gap-y-5 rounded-xl border-2 border-zinc-700 bg-zinc-800 px-4 md:flex-row-reverse md:gap-4"
    >
      <div className="pt-4 md:border-r md:border-zinc-700 md:pb-4 md:pr-4">
        <Image
          src={image.desktop.src}
          alt={image.desktop.alt}
          className="hidden size-52 rounded-xl md:flex"
        />
        <Image
          src={image.mobile.src}
          alt={image.mobile.alt}
          className="w-full rounded-xl md:hidden "
        />
      </div>
      <div className="flex flex-1 flex-col  gap-y-5 pb-4 md:items-start md:justify-between md:pt-4">
        <div className="space-y-1">
          <div className=" md:flex md:justify-between">
            <p className=" text-2xl font-bold md:text-start md:text-3xl">
              {title}
            </p>
            <p className="text-2xl font-bold text-green-500">{price}</p>
          </div>
          <p className=" text-lg leading-7 text-zinc-200 md:text-start md:text-xl">
            {description}
          </p>
        </div>
        {extraContent}
      </div>
    </div>
  );
};
