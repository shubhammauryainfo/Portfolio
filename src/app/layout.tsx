import localFont from "next/font/local";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "aos/dist/aos.css";
import { AosProvider } from "@/components/aos-provider";

const agustina = localFont({
  src: "../../public/assets/fonts/Agustina.woff",
  variable: "--font-logo"
});

const dancingScript = localFont({
  src: "../../public/assets/fonts/DancingScript-Medium.ttf",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Shubham Maurya | Frontend Developer",
  description:
    "Portfolio of Shubham Maurya, a frontend web developer building responsive websites, products, and digital experiences.",
  icons: {
    icon: "/favicon.ico"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${agustina.variable} ${dancingScript.variable}`}>
      <body>
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
