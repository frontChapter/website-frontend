import { RiTimeLine } from "react-icons/ri";
import { RiCalendarLine } from "react-icons/ri";
import { RiHotelLine } from "react-icons/ri";
import { RiBusLine } from "react-icons/ri";
import { RiMapPinTimeLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import hotelMobileImage from "@/assets/images/home/tickets-section-hotel-mobile.png";
import hotelDesktopImage from "@/assets/images/home/tickets-section-hotel-desktop.png";
import busDesktopImage from "@/assets/images/home/tickets-section-bus-desktop.png";
import busMobileImage from "@/assets/images/home/tickets-section-bus-mobile.png";
import meetingDesktopImage from "@/assets/images/home/tickets-section-meeting-desktop.png";
import meetingMobileImage from "@/assets/images/home/tickets-section-meeting-mobile.png";
import { TicketCard, TicketCardProps } from "./TicketCard";
import { Header } from "./Header";

export const TicketsSection = () => {
  const tickets: TicketCardProps["ticket"][] = [
    {
      title: "اقامت شب قبل از همایش",
      price: "۲۵۶٬۰۰۰ تومان",
      description:
        "همه‌ی سخنرانان و شرکت‌کنندگان شب قبل از همایش در هتل میزبان بابلسر پذیرش و اسکان داده می‌شوند.",
      image: {
        mobile: {
          src: hotelMobileImage,
          alt: "تصویر هتل",
        },
        desktop: {
          src: hotelDesktopImage,
          alt: "تصویر هتل",
        },
      },

      extraContent: (
        <div className="w-full">
          <div className="mt-2 flex justify-between">
            <span className=" text-2xl font-semibold text-zinc-300 md:text-start md:text-3xl">
              هتل میزبان بابلسر
            </span>
            <span className="text-xl text-yellow-500 md:hidden">۵ ستاره</span>
            <div className=" hidden md:flex">
              <RiStarFill className="text-lg text-yellow-500" />
              <RiStarFill className="text-lg text-yellow-500" />
              <RiStarFill className="text-lg text-yellow-500" />
              <RiStarFill className="text-lg text-yellow-500" />
              <RiStarFill className="text-lg text-yellow-500" />
            </div>
          </div>
          <div className="md:flex md:justify-between">
            <div className="mt-3 flex items-center gap-2">
              <RiTimeLine className="text-xl" />
              <span className="text-zinc-200">ساعت ۱۹:۳۰ الی ۸:۰۰ روز بعد</span>
            </div>
            <div className=" flex items-center gap-2">
              <RiCalendarLine className="text-xl" />
              <span className="text-zinc-200">۰۹ اسفند ۱۴۰۲</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "بلیت رفت و برگشت",
      price: "۲۵۶٬۰۰۰ تومان",
      description:
        "رفت و برگشت از تهران به محل اقامت و همچنین بازگشت پس از اتمام همایش به تهران",
      image: {
        mobile: {
          src: busMobileImage,
          alt: "تصویر هتل",
        },
        desktop: {
          src: busDesktopImage,
          alt: "تصویر هتل",
        },
      },

      extraContent: (
        <div className="w-full">
          <div className="mt-3 flex flex-nowrap items-center text-zinc-200">
            <RiMapPinTimeLine className="text-2xl" />
            <hr className="border-1 mx-5 flex-1 border-zinc-700" />
            <RiBusLine className="text-2xl" />
            <hr className="border-1 mx-5 flex-1 border-zinc-700" />
            <RiHotelLine className="text-2xl" />
          </div>
          <div className="mt-3 flex justify-between ">
            <p className="text-lg text-zinc-200">
              تهران، ترمینال شرق
              <br />
              ساعت ۱۴:۰۰
            </p>
            <p className="text-end text-lg text-zinc-200">
              محل اقامت فرانت جپتر
              <br />
              ساعت ۱۸:۰۰
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "دورهمی فرانت چپتر",
      price: "رایگان",
      description:
        "شب قبل از همایش دور هم جمع می‌شیم و از شبکه سازی کنار آتیش و موسیقی لذت می‌بریم",
      image: {
        mobile: {
          src: meetingMobileImage,
          alt: "تصویر دورهمی",
        },
        desktop: {
          src: meetingDesktopImage,
          alt: "تصویر دورهمی",
        },
      },
    },
  ];
  return (
    <div className="mt-20 flex flex-col gap-8">
      <Header />
      <>
        <div className="m-auto flex flex-col gap-6">
          {tickets.map((ticket, index) => (
            <TicketCard ticket={ticket} key={ticket.title + index} />
          ))}
        </div>
      </>
    </div>
  );
};
