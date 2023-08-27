import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NASA",
  description: "App that shows photos from Mars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
