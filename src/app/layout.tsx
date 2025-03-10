import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/config/provider";
import "swiper/css";
import "swiper/css/navigation";
import LenisProvider from "@/config/lenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Klink Finance",
  description: "Klink Finance Case Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased`}>
        <Provider>
          <LenisProvider>{children}</LenisProvider>
        </Provider>
      </body>
    </html>
  );
}
