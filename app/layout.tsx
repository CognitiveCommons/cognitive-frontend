import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CognitiveCommons | Democratizing AI for All Canadians",
  description: "Making artificial intelligence accessible, affordable, and ethical for Canadian SMEs and communities—not just tech elites.",
  icons: {
    icon: [
      { url: "/images/logos/favicons/cc_symbol_black_16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logos/favicons/cc_symbol_black_32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logos/favicons/cc_symbol_black_48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/images/logos/favicons/cc_symbol_apple_touch_180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/images/logos/favicons/cc_symbol_android_chrome_192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/images/logos/favicons/cc_symbol_android_chrome_512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
