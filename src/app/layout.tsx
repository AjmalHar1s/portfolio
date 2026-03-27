import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// 1. Configure the premium font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // We include a wide range of weights for that editorial contrast
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Haris | Frontend Engineer",
  description:
    "Portfolio of Haris, a Frontend UI Engineer building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 2. Apply the font to the body. Notice we removed Geist entirely. */}
      <body
        className={`${jakarta.className} bg-[#F4F4F0] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#EDEDED] antialiased transition-colors duration-300 selection:bg-[#111111] selection:text-[#F4F4F0] dark:selection:bg-[#EDEDED] dark:selection:text-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}
