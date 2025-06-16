import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeScoop | Learn programming skills by working on real-world projects.",
  description: "CodeScoop.dev is an initiative to empower communities through Open Source & Education.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/favicon.ico" sizes="any" />
      </head>

      <body className={`bg-white text-gray-800 ${inter.className} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
