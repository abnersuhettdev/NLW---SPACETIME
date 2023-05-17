import {
  Bai_Jamjuree as BaiJanJuree,
  Roboto_Flex as Roboto,
} from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJanJuree = BaiJanJuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-janjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Uma cápsula do tempo construida com React, Next.Js, TailwindCSS e Typescript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJanJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
