"use client";

import Image from "next/image";
import { RiCouponFill, RiMenuLine } from "react-icons/ri";
import logo from "../assets/images/home/logo.svg";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import LineImage from "@/assets/images/navbar/line.svg";

const Navbar = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  return (
    <header>
      <nav
        className={`relative flex items-center justify-between gap-[10px] py-3 transition-all lg:py-1 ${
          !showMobileLinks && "container"
        }`}
      >
        <section
          className={`fixed top-0 z-30 flex w-full flex-col gap-[26px] rounded-t-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 ease-in lg:static lg:w-auto lg:border-none ${
            showMobileLinks
              ? "translate-y-0 "
              : "-translate-y-full lg:translate-y-0"
          }`}
        >
          <div
            className="py-3 lg:hidden"
            onClick={() => setShowMobileLinks(false)}
          >
            <Image src={LineImage} alt="" className="mx-auto w-[29px]" />
          </div>
          <ul
            className={`my-4 flex w-full flex-col items-start text-base leading-6 transition-all duration-300 ease-in lg:static lg:my-0 lg:mt-0 lg:w-auto lg:translate-y-0 lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:text-center`}
          >
            {navbarLinks.map(({ href, title }) => (
              <li key={title} className="w-full justify-end lg:w-auto">
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })}  w-full !justify-start px-6 lg:w-auto lg:justify-center lg:px-3`}
                  href={href}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <div
          className={`fixed top-0 z-20 h-dvh w-dvw overflow-y-hidden bg-black bg-opacity-50 transition-all duration-300 ease-in ${
            !showMobileLinks ? "hidden" : ""
          }`}
          onClick={() => setShowMobileLinks(false)}
        ></div>
        <a href="/">
          <Image src={logo} alt="لوگو فرانت چپتر" className="w-12 lg:w-16" />
        </a>
        <section className="flex items-center gap-4">
          <Link
            className={`${buttonVariants({
              variant: "primary",
            })} gap-1 px-2 py-1.5 lg:gap-2 lg:px-3 lg:py-2`}
            href="#?"
          >
            <RiCouponFill className="size-4 lg:size-5" />
            <strong>ثبت نام در همایش</strong>
          </Link>
          <div
            className="p-2 lg:hidden"
            onClick={() => setShowMobileLinks(true)}
          >
            <RiMenuLine />
          </div>
        </section>
      </nav>
    </header>
  );
};

const navbarLinks = [
  { title: "سخنرانان همایش", href: "#?" },
  { title: "برنامه همایش", href: "#?" },
];

export default Navbar;
