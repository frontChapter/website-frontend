import Image from "next/image";
import { RiCouponFill } from "react-icons/ri";

// ** assets
import ticketsSectionIcon from "@/assets/images/home/tickets-section-icon.png";

// ** components
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { env } from "process";

const Header = () => {
  return (
    <div className="flex flex-col items-center  gap-2">
      <Image alt="icon" src={ticketsSectionIcon} className="mb-3 size-16" />
      <h3 className="text-2xl font-bold ">به جز همایش دیگه چی هست؟</h3>
      <p className="text-center text-xl font-normal  text-zinc-400">
        فرانت چپتر فقط یه همایش نیست،
        <br /> هدف ما مسافرته
      </p>
      <Link
        target="_blank"
        href={env.TICKET_URL ?? "#?"}
        className={`${buttonVariants({
          variant: "primary",
        })} mt-4 gap-2 px-2 py-1.5 lg:mt-6 lg:gap-2 lg:px-3 lg:py-2`}
      >
        <RiCouponFill className="size-5" />
        <strong>خرید بلیت</strong>
      </Link>
    </div>
  );
};

export default Header;
