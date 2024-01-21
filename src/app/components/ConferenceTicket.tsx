import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { RiCouponFill, RiCouponLine, RiMenuLine } from "react-icons/ri";

export default function ConferenceLocation() {
  return (
    <section className="py-6 lg:py-12">
      <div className="container space-y-10 md:space-y-14">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
          <RiCouponLine className="size-12 fill-orange-500 lg:size-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">بلیت‌های همایش</h3>
          <Link
            className={`${buttonVariants({
              variant: "primary",
            })} gap-2 mt-4 lg:mt-6 px-2 py-1.5 lg:gap-2 lg:px-3 lg:py-2`}
            href="#"
          >
            <RiCouponFill className="size-5" />
            <strong>ورود و خرید بلیت</strong>
          </Link>
        </div>
        {/* body */}
        <div className="flex justify-center"></div>
      </div>
    </section>
  );
}
