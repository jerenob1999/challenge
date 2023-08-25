import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Range from "./components/Range"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NASA",
  description: "App that shows photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Range/>
        {children}
      </body>
    </html>
  );
}
