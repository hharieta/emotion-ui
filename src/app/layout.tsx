import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResultProvider } from "@/components/ResultContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emotion Analyzer",
  description: "Text emotion analysis tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResultProvider>{children}</ResultProvider>
        </body>
    </html>
  );
}
