import Image from "next/image";
import { RiCouponFill } from "react-icons/ri";

// ** assets
import ticketsSectionIcon from "@/assets/images/home/tickets-section-icon.png";

// ** components
import { Button } from "@/components/ui/Button";

const Header = () => {
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

export default Header;
