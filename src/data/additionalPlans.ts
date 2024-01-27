import { StaticImageData } from "next/image";

// ** assets
import hotelMobileImage from "@/assets/images/home/tickets-section-hotel-mobile.jpg";
import hotelDesktopImage from "@/assets/images/home/tickets-section-hotel-desktop.jpg";
import busDesktopImage from "@/assets/images/home/tickets-section-bus-desktop.png";
import busMobileImage from "@/assets/images/home/tickets-section-bus-mobile.png";
import meetingDesktopImage from "@/assets/images/home/tickets-section-meeting-desktop.png";
import meetingMobileImage from "@/assets/images/home/tickets-section-meeting-mobile.png";

type Image = {
  src: StaticImageData;
  alt: string;
};
type Route = {
  title: string;
  time: string;
};

interface Place {
  name: string;
  rate: {
    value: number;
    placeholder: string;
  };
}

interface Transport {
  origin: Route;
  destination: Route;
}

export type AdditionalPlan = {
  title: string;
  description: string;
  image: { mobile: Image; desktop: Image };
  date?: string;
  time?: string;
  place?: Place;
  transport?: Transport;
};

export const additionalPlans: AdditionalPlan[] = [
  {
    title: "اقامت شب قبل از همایش",
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
    time: "ساعت ۱۹:۳۰ الی ۸:۰۰ روز بعد",
    date: "۰۹ اسفند ۱۴۰۲",
    place: {
      name: "هتل میزبان بابلسر",
      rate: {
        value: 5,
        placeholder: "۵ ستاره",
      },
    },
  },
  {
    title: "بلیت رفت و برگشت",
    description:
      "رفت و برگشت از تهران به محل اقامت و همچنین بازگشت پس از اتمام همایش به تهران.",
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
    transport: {
      origin: {
        title: "تهران، ترمینال شرق",
        time: "ساعت ۱۴:۰۰",
      },
      destination: {
        title: "محل اقامت فرانت جپتر",
        time: "ساعت ۱۸:۰۰",
      },
    },
  },
  {
    title: "دورهمی فرانت چپتر",
    description:
      "شب قبل از همایش دور هم جمع می‌شیم و از شبکه سازی کنار آتیش و موسیقی لذت می‌بریم.",
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
