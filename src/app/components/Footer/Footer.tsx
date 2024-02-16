import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFigma, FaInstagram } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { IoIosClose, IoLogoGithub } from "react-icons/io";
import { RiLinkedinLine, RiTelegramLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const defaultIconSize = 28;
const socialIcons = [
  {
    icon: <FaInstagram />,
    title: "اینستاگرام",
    link: "https://www.instagram.com/frontchapter",
  },
  {
    icon: <RiLinkedinLine />,
    title: "لینکدین",
    link: "https://www.linkedin.com/company/frontchapter",
  },
  {
    icon: <RiTelegramLine />,
    children: (
      <div>
        <a
          href="https://t.me/FrontChapter"
          target="_blank"
          rel="noopener noreferrer"
        >
          کانال تلگرام
        </a>
        {" - "}
        <a
          href="https://t.me/FrontChapterGroup"
          target="_blank"
          rel="noopener noreferrer"
        >
          گروه تلگرام
        </a>
      </div>
    ),
  },
  {
    icon: (
      <Image
        src="/icons/stars.svg"
        alt="stars"
        width={30}
        height={30}
        className=""
      />
    ),
    title: "همایش ۱۴۰۰",
    link: "https://conf1400.frontchapter.ir/",
  },
];
const programmingIcons = [
  { icon: <SiPhp key={1} size={defaultIconSize} /> },
  { icon: <GrSwift key={2} size={defaultIconSize} /> },
  { icon: <IoLogoGithub key={3} size={defaultIconSize} /> },
  { icon: <FaFigma key={4} size={defaultIconSize} /> },
];

const Footer = () => {
  return (
    <footer className="pt-12">
      {/*first part*/}
      <div className="container flex flex-col items-center justify-center gap-6 bg-zinc-800">
        <div className="mx-auto pt-10">
          <Link href="#header">
            <Image
              src="/images/logo.svg"
              width={196}
              height={40}
              alt="FrontChapter Logo"
              className="h-full w-44"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-x-32 gap-y-4 py-8 text-3xl text-zinc-400">
            {socialIcons.map((item) => (
              <div key={item.link} className="flex gap-3">
                {item.icon}
                {item.children ? (
                  item.children
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*second part*/}
      <div className="flex flex-col items-center gap-6 bg-gray-900 py-12">
        <div className="flex items-center gap-2">
          <Link href="#header">
            <Image
              src="/icons/front-chapter-en.svg"
              width={197}
              height={40}
              alt="FrontChapter Logo"
            />
          </Link>
        </div>
        <p className="font-medium text-gray-300">
          طراحی و توسعه داده شده با <span className="animate-pulse">❤️</span> در
          فرانت‌چپتر
        </p>
        <div className="flex items-center gap-4">
          {programmingIcons.map((item, index) => (
            <React.Fragment key={index}>
              {item.icon}
              {index !== programmingIcons.length - 1 && <IoIosClose />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
