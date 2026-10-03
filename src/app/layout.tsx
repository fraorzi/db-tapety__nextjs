import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollMotion } from "@/components/ScrollMotion";
import { site } from "@/data/site";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: "Tapetowanie i przygotowanie ścian w mieszkaniach, domach i lokalach. Pomiar, dobór tapety, montaż bez widocznych łączeń.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
      </head>
      <body>
        <SmoothScroll />
        <ScrollMotion />
        <Header />
        {children}
      </body>
    </html>
  );
}
