import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import {
  RiCouponFill,
  RiCouponLine,
  RiGroupLine,
  RiSparklingLine,
  RiTimeLine,
  RiVipDiamondFill,
} from "react-icons/ri";
import TicketPlanCard from "./TicketPlanCard";

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
            })} mt-4 gap-2 px-2 py-1.5 lg:mt-6 lg:gap-2 lg:px-3 lg:py-2`}
            href="#"
          >
            <RiCouponFill className="size-5" />
            <strong>ورود و خرید بلیت</strong>
          </Link>
        </div>
        {/* body */}
        <div className="grid items-center gap-4 sm:grid-cols-2 lg:grid-flow-col-dense lg:grid-cols-4">
          <TicketPlanCard
            title={{
              text: "ثبت نام گروهی",
              icon: <RiGroupLine className="size-9 fill-zinc-200" />,
            }}
            price={"تماس بگیرید"}
            advantages={[
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
            ]}
          />
          <TicketPlanCard
            title={{
              text: "ثبت نام VIP",
              icon: <RiVipDiamondFill className="size-9 fill-orange-200" />,
            }}
            price={"۱,۴۹۵,۰۰۰ تومان"}
            advantages={[
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
            ]}
          />
          <TicketPlanCard
            title={{
              text: "ثبت نام عادی",
              icon: <RiSparklingLine className="size-9 fill-zinc-200" />,
            }}
            price={"۷۷۵,۰۰۰ تومان"}
            advantages={[
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "green",
              },
            ]}
          />
          <TicketPlanCard
            title={{
              text: "ثبت نام زودهنگام",
              icon: <RiTimeLine className="size-9 fill-zinc-200" />,
            }}
            price={"تمام شده"}
            advantages={[
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "orange",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "green",
              },
              {
                text: "تست",
                makerColor: "green",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
