import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MediaHeader from "@/components/header/MediaHeader";
import BodyClassHandler from "@/components/BodyClass";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2025 전유나 포트폴리오",
  description: "포트폴리오 웹 사이트 입니다.",
  openGraph: {
    url: "https://test-portfolio-sable-eight.vercel.app",
    siteName: "포트폴리오 웹사이트",
    images: [
      {
        url: "../img/og.png",
        width: 800,
        height: 600,
        alt: "오픈그래프 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BodyClassHandler />
        <MediaHeader />
        {children}
      </body>
    </html>
  );
}
