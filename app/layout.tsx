import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BEST BLOG",
  description: "Upload your thoughts...",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "BEST BLOG",
    description: "Enhance your blogging experince..."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-foreground dark:bg-background text-primary-dark dark:text-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
