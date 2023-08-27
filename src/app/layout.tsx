import "./globals.css";
import type { Metadata } from "next";
import { Navigation } from "./components";


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
      <body className="bg-cover bg-center  h-screen bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?cs=srgb&dl=pexels-francesco-ungaro-998641.jpg&fm=jpg')]">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
