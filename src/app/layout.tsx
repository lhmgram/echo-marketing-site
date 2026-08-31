import type { Metadata } from "next";
import { notoSansJP } from "./fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Watermark } from "@/components/layout/Watermark";

export const metadata: Metadata = {
  title: "ECHO | 集客責任者代行",
  description:
    "中小企業の集客業務を担当者として引き受ける「集客責任者代行」。広告運用・SNS運用・LP改善・データ分析を一貫して担う。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Watermark />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
