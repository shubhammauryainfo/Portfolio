import localFont from "next/font/local";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "aos/dist/aos.css";
import { AosProvider } from "@/components/aos-provider";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <html lang="en" className={`${agustina.variable} ${dancingScript.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=s||p;}catch(e){document.documentElement.dataset.theme='light';}"
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <AosProvider />
        <div className="fixed right-4 top-20 z-50 sm:right-6 sm:top-24">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
