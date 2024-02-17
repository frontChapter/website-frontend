import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="mx-auto">
          <Link href="#header">
            <Image
              src="/images/logo.svg"
              width={196}
              height={40}
              alt="FrontChapter Logo"
              className="h-full w-44"
            />
          </Link>
        </div>
        <p className="font-thin text-gray-200">
          ساخته و پرداخته شده با <span className="animate-pulse">❤️</span> در
          فرانت‌چپتر
        </p>
        <div className="grid grid-cols-5 grid-rows-1 gap-4 py-8 text-xs">
          <div className="text-center">
            <a
              href="https://t.me/FrontChapter"
              target="_blank"
              rel="noopener noreferrer"
            >
              کانال تلگرام
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://t.me/FrontChapterGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              گروه تلگرام
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://www.instagram.com/frontchapter"
              target="_blank"
              rel="noopener noreferrer"
            >
              اینستاگرام
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/company/frontchapter"
              target="_blank"
              rel="noopener noreferrer"
            >
              لینکدین
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://conf1400.frontchapter.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              همایش ۱۴۰۰
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
