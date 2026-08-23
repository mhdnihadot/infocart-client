import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Infocart Technical Solutions",
  description: "Trusted IT Solutions for Smarter Business",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geist.variable} antialiased`}
    >
      <body className={`font-sans min-h-screen flex flex-col bg-[#F8FAFC]`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
