import {
  RiExternalLinkLine,
  RiFlagLine,
  RiLink,
  RiMap2Line,
} from "react-icons/ri";
import imageMobile from "@/assets/images/home/conference-location-mobile.jpg";
import imageDesktop from "@/assets/images/home/conference-location-desktop.jpg";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function ConferenceLocation() {
  return (
    <section className="py-6 lg:py-12">
      <div className="container space-y-10 md:space-y-14">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
          <RiFlagLine className="size-12 fill-green-500 lg:size-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">محل برگزاری همایش</h3>
        </div>
        {/* body */}
        <div className="flex justify-center">
          <div className="flex max-w-[850px] flex-col gap-y-5 rounded-xl bg-zinc-800 px-4 md:flex-row-reverse md:gap-4">
            <div className="pt-4 md:border-r md:border-zinc-700 md:pb-4 md:pr-4">
              <Image
                src={imageMobile}
                alt="محل برگذاری همایش"
                className="w-full rounded-xl md:hidden"
              />
              <Image
                src={imageDesktop}
                alt="محل برگذاری همایش"
                className="hidden size-64 rounded-xl md:flex"
              />
            </div>
            <div className="flex flex-1 flex-col items-center gap-y-5 pb-4 md:items-start md:justify-between md:pt-4">
              <div className="space-y-5">
                <p className="text-center text-2xl font-extrabold md:text-start md:text-3xl">
                  سالن همایش هتل میزبان
                </p>
                <p className="text-center text-zinc-200 md:text-start md:text-lg">
                  هتل میزبان بابلسر به یکی از درجه یک‌ترین هتل‌های خطه مازندران
                  شناخته می‌شود. این هتل 5 ستاره مشرف به دریا و کوه می‌تواند یک
                  انتخاب ایده آل برای سفر باشد.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  className={`${buttonVariants({
                    variant: "outline",
                  })} flex gap-1.5`}
                  href="#"
                >
                  <RiExternalLinkLine className="size-4 md:size-5" />
                  <span className="text-sm font-bold md:text-base">وبسایت هتل</span>
                </Link>
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })} flex gap-1.5`}
                  href="#"
                >
                  <RiMap2Line className="size-4 md:size-5" />
                  <span className="text-sm font-bold md:text-base">نمایش در نقشه</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
