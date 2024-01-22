import { RiExternalLinkLine, RiFlagLine, RiMap2Line } from "react-icons/ri";
import imageMobile from "@/assets/images/home/conference-location-mobile.jpg";
import imageDesktop from "@/assets/images/home/conference-location-desktop.jpg";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function ConferenceLocation() {
  return (
    <section className="container flex flex-col items-center gap-12 py-8 md:py-16">
      <div className="flex flex-col items-center gap-2">
        <RiFlagLine className="size-16 fill-green-500" />
        <h3 className="text-2xl font-bold md:text-3xl">محل برگزاری همایش</h3>
      </div>

      <div className="flex max-w-[850px] flex-col rounded-xl border border-zinc-700 bg-zinc-800 md:flex-row-reverse">
        <div className="p-4 pb-0 md:w-2/5 md:border-r md:border-zinc-700 md:p-6">
          <Image
            src={imageMobile}
            alt="محل برگزاری همایش"
            className="w-full rounded-xl md:hidden"
          />
          <Image
            src={imageDesktop}
            alt="محل برگزاری همایش"
            className="hidden rounded-xl md:block"
          />
        </div>

        <div className="flex flex-col items-center gap-6 p-4 md:w-3/5 md:items-start md:justify-between md:p-6">
          <div className="flex flex-col items-stretch gap-3 text-center md:gap-4 md:text-start">
            <strong className="text-3xl">سالن همایش هتل میزبان</strong>
            <p className="text-xl text-zinc-200">
              هتل میزبان بابلسر به یکی از درجه یک‌ترین هتل‌های خطه مازندران
              شناخته می‌شود. این هتل ۵ ستاره مشرف به دریا و کوه می‌تواند یک
              انتخاب ایده آل برای سفر باشد.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="#?"
              target="_blank"
              className={`${buttonVariants({
                variant: "outline",
              })} gap-1`}
            >
              <RiExternalLinkLine className="size-4 md:size-5" />
              <strong className="text-sm md:text-base">وبسایت هتل</strong>
            </Link>
            <Link
              href="#?"
              target="_blank"
              className={`${buttonVariants({
                variant: "link",
              })} gap-1 hover:bg-zinc-700 active:bg-zinc-500`}
            >
              <RiMap2Line className="size-4 md:size-5" />
              <strong className="text-sm md:text-base">نمایش در نقشه</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
