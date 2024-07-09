import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const public_Sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Nova",
  description: "Software to manage projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_Sans.className + " min-h-screen"}>{children}</body>
    </html>
  );
}
