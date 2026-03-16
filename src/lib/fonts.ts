import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const gtMaruMedium = localFont({
  src: [
    {
      path: "../assets/fonts/GT-Maru-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GT-Maru-Medium-Oblique.woff2",
      weight: "500",
      style: "oblique",
    },
  ],
  variable: "--font-gt-maru",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});
