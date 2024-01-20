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
      <div className="container space-y-10">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
          <RiFlagLine className="size-12 fill-green-500 lg:size-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">محل برگزاری همایش</h3>
        </div>
        {/* body */}
        <div>
          <div className="space-y-5 flex flex-col rounded-xl bg-zinc-800 p-4">
            <div>
              <Image
                src={imageMobile}
                alt="محل برگذاری همایش"
                className="rounded-xl md:hidden"
              />
            </div>
            <div className="space-y-5 flex flex-col items-center">
              <p className="text-2xl font-extrabold">سالن همایش هتل میزبان</p>
              <p className="text-center text-zinc-200">
                هتل میزبان بابلسر به یکی از درجه یک‌ترین هتل‌های خطه مازندران
                شناخته می‌شود. این هتل 5 ستاره مشرف به دریا و کوه می‌تواند یک
                انتخاب ایده آل برای سفر باشد.
              </p>
              <div className="flex gap-4">
                <Link
                  className={`${buttonVariants({
                    variant: "outline",
                  })} flex gap-1.5`}
                  href="#"
                >
                  <RiExternalLinkLine className="size-4" />
                  <span className="text-sm font-bold">وبسایت هتل</span>
                </Link>
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })} flex gap-1.5`}
                  href="#"
                >
                  <RiMap2Line className="size-4" />
                  <span className="text-sm font-bold">نمایش در نقشه</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
