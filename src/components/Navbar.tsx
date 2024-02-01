import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { env } from "process";
import { RiCouponFill, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <header
      id="header"
      className="bg-[background: rgba(24, 24, 27, 0.80)] sticky top-0 z-50 border-b border-gray-700 backdrop-blur-lg"
    >
      <nav className="container flex items-center justify-between gap-4 py-3 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:py-6">
        <ul className="hidden items-center justify-start gap-4 text-center text-base leading-6 lg:flex">
          {navbarLinks.map(({ href, title }) => (
            <li key={title}>
              <a
                href={href}
                className={`${buttonVariants({
                  variant: "link",
                })}`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/" className="lg:mx-auto">
          <Image
            width={192}
            height={48}
            src="/images/logo.svg"
            alt="لوگو فرانت چپتر"
            className="w-32 lg:w-48"
          />
        </Link>
        <div className="flex items-center justify-start lg:justify-end">
          <div className="flex items-end gap-4 text-end">
            <Link
              target="_blank"
              href={env.NEXT_PUBLIC_TICKET_URL ?? "#?"}
              className={`${buttonVariants({
                variant: "primary",
              })} gap-1 px-2 py-1.5 lg:gap-2 lg:px-3 lg:py-2`}
            >
              <RiCouponFill className="size-4 lg:size-5" />
              <strong>ثبت نام در همایش</strong>
            </Link>
            <div className="p-2 lg:hidden">
              <RiMenuLine />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const navbarLinks = [
  { title: "سخنرانان همایش", href: "#speakers" },
  { title: "برنامه همایش", href: "#timeline" },
];

export default Navbar;
