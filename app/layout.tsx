import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { ModeToggle } from "@/components/toggleThemeButton";

const notoSansKr = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbur.icu"),
  title: {
    template: "%s | URBUR",
    default: "URBUR",
  },
  description: `한양대학교 컴퓨터소프트웨어학부 우주최강 율동패 어리버리 URBUR
  컴소의 근본있는 율동패로 율동을 배우고 공연을 준비합니다!
  누구나 쉽게 배울수 있는 동작과 중독성있는 노래로 부담없이 즐길수 있습니다.
  동기,선후배와 가장 가까워질수 있는 기회이니 놓치지말고 즐거운 추억 같이 만들어봐요! 
  어-리버리 화이팅!!`,
  keywords: [
    "HYU",
    "CSE",
    "URBUR",
    "어리버리",
    "한양대학교",
    "컴퓨터소프트웨어학부",
    "율동패",
  ],
  verification: {
    google: "google",
    other: {
      "naver-site-verification": "naver",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "어리버리",
    description: "우주최강 율동패 어리버리",
    url: "https://urbur.icu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          notoSansKr.className,
          "flex flex-col min-h-screen p-1 md:px-24 md:py-10",
        ].join(" ")}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <ModeToggle />
            <Toaster position="top-center" />
          </ThemeProvider>
      </body>
    </html>
  );
}
