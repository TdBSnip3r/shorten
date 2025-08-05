import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
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
  title: "Shorten - Shorten your links",
  description: "The easiest and fastest platform to shorten your links",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <AuthProvider>
        <html lang="it">
          <head>
            <script 
              src="https://fpyf8.com/88/tag.min.js" 
              data-zone="161543" 
              async 
              data-cfasync="false"
            ></script>
          </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
          >
            <div className="main"/>
            <Toaster position="bottom-right" />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </AuthProvider>
    </QueryProvider>
  );
}
