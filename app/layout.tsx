import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | URBUR",
    default: "URBUR",
  },
  description: `한양대학교 컴퓨터소프트웨어학부 우주최강 율동패 어리버리 URBUR
  컴소의 근본있는 율동패로 율동을 배우고 공연을 준비합니다!
  누구나 쉽게 배울수 있는 동작과 중독성있는 노래로 부담없이 즐길수 있습니다.
  동기,선후배와 가장 가까워질수 있는 기회이니 놓치지말고 즐거운 추억 같이 만들어봐요! 
  어-리버리 화이팅!!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}