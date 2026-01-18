import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ASME IUT Student Section",
  description: "Official website of ASME IUT Student Section.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
