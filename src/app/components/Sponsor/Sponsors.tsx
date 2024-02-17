import { buttonVariants } from "@/components/ui/Button";
import { sponsors } from "@/data/sponsersData";
import Image from "next/image";
import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";

const Sponsors = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center gap-9">
        <h3 className="mt-16 text-center text-2xl font-bold text-white md:text-4xl">
          حامی‌های مالی و معنوی فرانت چپتر
        </h3>

        <div className="w-full">
          <div className="flex items-center justify-center gap-6 px-6 py-1 md:gap-12 md:px-12 md:py-2">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.title}
                className="transition-all hover:scale-110"
              >
                <Link
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className={sponsor.styles}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <p className="max-w-96 text-center text-sm font-normal leading-6 text-zinc-200 md:text-base">
          فرانت چپتر برای ادامه و گسترش فعالیت های خود در جهت افزایش آگاهی جامعه
          فرانت اند و همچنین برگزاری چنین رویداد هایی نیاز به حمایت های شما
          دارد.
        </p>
        <Link
          href="mailto:frontchapter.ir@gmail.com"
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
