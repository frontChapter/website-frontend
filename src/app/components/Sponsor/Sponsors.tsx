import { buttonVariants } from "@/components/ui/Button";
import { sponsors } from "@/data/sponsersData";
import { FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center gap-9">
        <h3 className="mt-16 text-center text-2xl font-bold text-white md:text-4xl">
          حامی‌های مالی و معنوی فرانت چپتر
        </h3>
        <div className="w-full border-b-2 border-t-2 border-zinc-700 bg-zinc-800">
          <div className="flex items-center justify-center gap-6 px-6 py-7 md:gap-12 md:px-12 md:py-14">
            {sponsors.map((sponsor) => (
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                className={`${sponsor.styles}`}
                key={sponsor.title}
              />
            ))}
          </div>
        </div>
        <p className="text-center text-sm font-normal leading-6 text-zinc-200 md:text-base">
          فرانت چپتر برای ادامه و گسترش فعالیت های خود در جهت افزایش آگاهی جامعه
          فرانت اند و همچنین برگزاری چنین رویداد هایی نیاز به حمایت های شما
          دارد.
        </p>
        <Link
          href="#?"
          target="_blank"
          className={`${buttonVariants({
            variant: "primary",
          })} flex items-center gap-1`}
        >
          <FaHandHoldingHeart className="h-5 w-5 text-white" />
          <span>حامی می‌شوم</span>
        </Link>
      </div>
    </section>
  );
};

export default Sponsors;
