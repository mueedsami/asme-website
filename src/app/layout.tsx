import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import { Inter, Dancing_Script } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-letter",
});

export const metadata: Metadata = {
  title: "ASME IUT Student Section",
  description: "Official website of ASME IUT Student Section.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dancing.variable}`}>
      <body className="bg-bg text-fg font-sans">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
