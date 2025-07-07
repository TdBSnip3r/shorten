import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shorten - Accorcia i tuoi URL",
  description: "La piattaforma più semplice e veloce per accorciare i tuoi URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="it">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
        >
          <Toaster position="bottom-right" />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </QueryProvider>
  );
}
