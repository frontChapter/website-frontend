import Image from "next/image";
import { RiCouponFill, RiMenuLine } from "react-icons/ri";
import logo from "../assets/images/home/logo.svg";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between gap-4 py-3 lg:py-1">
      <ul className="hidden items-center justify-center gap-4 text-center text-base leading-6 lg:flex">
        {navbarLinks.map(({ href, title }) => (
          <li key={title}>
            <a
              className="px-3 py-2 transition-colors hover:text-orange-500"
              href={href}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      <a href="/">
        <Image src={logo} alt="لوگو فرانت چپتر" className="w-12 lg:w-16" />
      </a>
      <section className="flex items-center gap-4">
        <Link
          className={`${buttonVariants({
            variant: "primary",
          })} gap-1 px-2 py-1.5 text-sm lg:gap-2 lg:px-3 lg:py-2 lg:text-base`}
          href="#?"
        >
          <RiCouponFill className="w-4 lg:w-5" />
          <strong>ثبت نام در همایش</strong>
        </Link>
        <div className="p-2 lg:hidden">
          <RiMenuLine />
        </div>
      </section>
    </nav>
  );
};

const navbarLinks = [
  { title: "سخنرانان همایش", href: "#?" },
  { title: "برنامه همایش", href: "#?" },
];

export default Navbar;
