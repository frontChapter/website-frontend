import {
  RiGithubLine,
  RiGlobalLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMicLine,
  RiTwitterXLine,
} from "react-icons/ri";
import imageAvatarOne from "@/assets/images/home/speakers-avatar-1.png";
import imageAvatarTwo from "@/assets/images/home/speakers-avatar-2.png";
import imageAvatarThree from "@/assets/images/home/speakers-avatar-3.png";
import imageAvatarFour from "@/assets/images/home/speakers-avatar-4.png";
import imageAvatarFive from "@/assets/images/home/speakers-avatar-5.png";
import imageAvatarSix from "@/assets/images/home/speakers-avatar-6.png";
import imageAvatarSeven from "@/assets/images/home/speakers-avatar-7.png";
import imageAvatarEight from "@/assets/images/home/speakers-avatar-8.png";
import imageAvatarNine from "@/assets/images/home/speakers-avatar-9.png";
import SpeakerCard from "./SpeakerCard";
import { TSpeakerCard } from "@/types/home/speakerCard.type";

export default function Speakers() {
  const iconSocialClasses =
    "h-5 w-5 fill-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:fill-orange-500";

  const speakersData: TSpeakerCard[] = [
    {
      avatar: imageAvatarOne,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarTwo,
      fullName: "سمانه یعقوبی",
      position: "توسعه دهنده ارشد فرانت‌اند",
      company: "در نشان",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarThree,
      fullName: "بهنیا آزاد",
      position: "مدیر ارشد فناوری (CTO)",
      company: "در Extend",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarFour,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarFive,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarSix,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarSeven,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarEight,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
    {
      avatar: imageAvatarNine,
      fullName: "حسام موسوی",
      position: "طراح و برنامه نویس",
      company: "بنیان گذار راکت",
      socials: [
        {
          icon: <RiGithubLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiInstagramLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiLinkedinLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiGlobalLine className={iconSocialClasses} />,
          link: "#",
        },
        {
          icon: <RiTwitterXLine className={iconSocialClasses} />,
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className="py-6 lg:py-12">
      <div className="container space-y-16">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
          <RiMicLine className="h-12 w-12 fill-orange-500 lg:h-16 lg:w-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">سخنرانان همایش</h3>
        </div>
        {/* body */}
        <div className="flex w-full flex-wrap justify-center gap-y-6 sm:gap-y-8 lg:gap-y-10">
          {speakersData.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex w-1/2 flex-col items-center sm:w-1/3 lg:w-1/4 ${
                  index === 6 && "lg:w-1/3"
                }`}
              >
                <SpeakerCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
