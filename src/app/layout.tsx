import type { Metadata } from "next";
import { Parkinsans, Source_Sans_3, Caveat_Brush } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

// 1. Betűtípusok konfigurálása a design system alapján
const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-parkinsans", // Ez kapcsolódik a Tailwind konfighoz
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-sans",
});

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
});

// 2. SEO és Meta adatok
export const metadata: Metadata = {
  title: "Grow with You | Prémium Babaruha Kölcsönző",
  description: "Minőségi ruhák, fenntartható jövő a babádnak. Kölcsönözz prémium babaruhákat egyszerűen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${parkinsans.variable} ${sourceSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-cream text-text-main font-source-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}