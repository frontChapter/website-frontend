import { TSpeakerCard } from "@/types/home/speakerCard.type";
import Image from "next/image";
import SpeakerSocials from "./SpeakerSocials";
import styles from "./styles.module.scss";

const SpeakerCard = ({
  avatar,
  company,
  fullName,
  position,
  socials,
}: TSpeakerCard) => {
  return (
    <div className={styles["speakers"]}>
      <div>
        <Image
          width={128}
          height={128}
          className="lg:size-[168px]"
          src={avatar}
          alt={fullName}
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center gap-0.5 lg:gap-1">
        <strong className="lg:text-xl">{fullName}</strong>
        <span className="text-sm text-zinc-400 lg:text-base">{position}</span>
        <span className="text-sm text-zinc-400 lg:text-base text-center">{company}</span>
      </div>
      <div className="flex gap-3 p-1 lg:gap-2 lg:p-2">
        <SpeakerSocials {...socials} />
      </div>
    </div>
  );
};

export default SpeakerCard;
