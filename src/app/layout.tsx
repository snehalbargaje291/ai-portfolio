import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Snehal Bargaje",
    default: "Snehal Bargaje",
  },
  description: "Checkout my smart portfolio with custom AI chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
        <Navbar/>
        <main className="mx-auto max-w-5xl px-4 pt-10">{children}</main>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
