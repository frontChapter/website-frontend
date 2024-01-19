import Image from "next/image";
import { RiCouponFill } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import logo from "../assets/images/home/logo.svg";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row-reverse items-center justify-between gap-4">
      <section className="flex items-center gap-4">
        <Link
          className={`${buttonVariants()} gap-1 !bg-orange-500 px-2 py-0.5 text-sm font-bold text-white lg:text-base`}
          href="#?"
        >
          <RiCouponFill className="w-5" />
          ثبت نام در همایش
        </Link>
        <div className="p-2 lg:hidden">
          <HiBars3 />
        </div>
      </section>
      <a href="/">
        <Image src={logo} alt="لوگو فرانت چپتر" className="w-12 lg:w-16" />
      </a>
      <ul className="hidden items-center justify-center gap-4 text-center text-base leading-6 text-white lg:flex">
        {navbarLinks.map((link, index) => (
          <li
            className="relative cursor-pointer px-4 py-3 transition-all duration-500 ease-linear before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:content-normal before:rounded before:bg-orange-500 before:transition-all before:duration-500 before:ease-out hover:text-orange-500 before:hover:left-0 before:hover:w-full"
            key={`${link}-${index}`}
          >
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navbarLinks = [
  { title: "سخنرانان همایش", href: "#?" },
  { title: "برنامه همایش", href: "#?" },
];

export default Navbar;
