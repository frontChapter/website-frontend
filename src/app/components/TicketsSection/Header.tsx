import Image from "next/image";
import ticketsSectionIcon from "@/assets/images/home/tickets-section-icon.png";
import { Button } from "@/components/ui/Button";
import { RiCouponFill } from "react-icons/ri";

export const Header = () => {
  return (
    <div className="flex flex-col items-center  gap-2">
      <Image alt="icon" src={ticketsSectionIcon} className="mb-3 size-16" />
      <h3 className="text-2xl font-bold ">به جز همایش دیگه چی هست؟</h3>
      <p className="text-center text-xl font-normal  text-zinc-400">
        فرانت چپتر فقط یه همایش نیست،
        <br /> هدف ما مسافرته
      </p>
      <Button variant={"primary"} className=" mt-4 flex gap-2">
        <RiCouponFill className="size-5" />
        <span className="text-sm ">ورود و خرید بلیت</span>
      </Button>
    </div>
  );
};
