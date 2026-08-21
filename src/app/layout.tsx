import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Infocart Technical Solutions",
  description: "Trusted IT Solutions for Smarter Business",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col bg-[#F8FAFC]`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
