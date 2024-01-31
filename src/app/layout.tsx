import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import Providers from "./providers";

const fontDana = LocalFont({
  src: "../assets/fonts/dana/DanaVF.woff2",
  variable: "--font-dana",
});

export const metadata: Metadata = {
  title: "فرانت چپتر - بزرگترین همایش فرانت‌اند ایران",
  description:
    "همایش فرانت چپتر محلی برای گردهمایی و به اشتراک‌گذاری تجربیات برنامه‌نویسان، متخصصین و علاقه‌مندان حوزه فرانت‌اند. ۱۰ اسفند ۱۴۰۲ مازندران",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={fontDana.variable}>
      <body className="bg-zinc-900 text-white">
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-G0H1X12MC" />
      </body>
    </html>
  );
}
