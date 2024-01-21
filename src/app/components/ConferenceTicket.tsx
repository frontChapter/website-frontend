import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import {
  RiCouponFill,
  RiCouponLine,
  RiGroupLine,
  RiMenuLine,
} from "react-icons/ri";

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-zinc-700 py-5">
            {/* title */}
            <div className="flex flex-col items-center gap-2">
              <RiGroupLine className="size-9 fill-zinc-200" />
              <p className="text-2xl">ثبت نام گروهی</p>
            </div>
            {/* price */}
            <div className="my- bg-zinc-500/30 py-6">
              <p className="text-center text-3xl font-bold">تماس بگیرید</p>
            </div>
            {/* advantages */}
            <ul className="mx-11 flex flex-col">
              {[
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
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`list-disc marker:text-xl marker:text-green-500 ${
                      item.makerColor === "green"
                        ? "marker:text-green-500"
                        : "marker:text-orange-500"
                    }`}
                  >
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-zinc-700 py-5">
            {/* title */}
            <div className="flex flex-col items-center gap-2">
              <RiGroupLine className="size-9 fill-zinc-200" />
              <p className="text-2xl">ثبت نام گروهی</p>
            </div>
            {/* price */}
            <div className="my- bg-zinc-500/30 py-6">
              <p className="text-center text-3xl font-bold">تماس بگیرید</p>
            </div>
            {/* advantages */}
            <ul className="mx-11 flex flex-col">
              {[
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
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`list-disc marker:text-xl marker:text-green-500 ${
                      item.makerColor === "green"
                        ? "marker:text-green-500"
                        : "marker:text-orange-500"
                    }`}
                  >
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-zinc-700 py-5">
            {/* title */}
            <div className="flex flex-col items-center gap-2">
              <RiGroupLine className="size-9 fill-zinc-200" />
              <p className="text-2xl">ثبت نام گروهی</p>
            </div>
            {/* price */}
            <div className="my- bg-zinc-500/30 py-6">
              <p className="text-center text-3xl font-bold">تماس بگیرید</p>
            </div>
            {/* advantages */}
            <ul className="mx-11 flex flex-col">
              {[
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
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`list-disc marker:text-xl marker:text-green-500 ${
                      item.makerColor === "green"
                        ? "marker:text-green-500"
                        : "marker:text-orange-500"
                    }`}
                  >
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-zinc-700 py-5">
            {/* title */}
            <div className="flex flex-col items-center gap-2">
              <RiGroupLine className="size-9 fill-zinc-200" />
              <p className="text-2xl">ثبت نام گروهی</p>
            </div>
            {/* price */}
            <div className="my- bg-zinc-500/30 py-6">
              <p className="text-center text-3xl font-bold">تماس بگیرید</p>
            </div>
            {/* advantages */}
            <ul className="mx-11 flex flex-col">
              {[
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
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`list-disc marker:text-xl marker:text-green-500 ${
                      item.makerColor === "green"
                        ? "marker:text-green-500"
                        : "marker:text-orange-500"
                    }`}
                  >
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
