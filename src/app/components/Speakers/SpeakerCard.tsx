import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface IProps {
  avatar: StaticImageData;
  fullName: string;
  position: string;
  company: string;
  socials: {
    icon: React.ReactElement<IconType>;
    link: string;
  }[];
}

const SpeakerCard = ({
  avatar,
  fullName,
  position,
  company,
  socials,
}: IProps) => {
  return (
    <div>
      <Image
        width={128}
        height={128}
        className="lg:w-[168px]"
        src={avatar}
        alt={fullName}
      />
      <div className="text-center lg:space-y-0.5">
        <p className="mt-2 font-extrabold lg:text-xl">{fullName}</p>
        <p className="text-sm text-zinc-400 lg:text-base">{position}</p>
        <p className="text-sm text-zinc-400 lg:text-base">{company}</p>
      </div>
      <div className="mt-2 flex gap-1 lg:mt-4">
        {socials.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className="flex h-6 w-6 items-center justify-center rounded-full"
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerCard;
