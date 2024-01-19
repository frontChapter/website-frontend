import type { Metadata } from "next";
import Providers from "./providers";
import LocalFont from "next/font/local";
import "@/styles/globals.css";

const fontDana = LocalFont({
  src: "../assets/fonts/dana/DanaVF.woff2",
  variable: "--font-dana",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
