import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import {
  Albert_Sans, Archivo, Bricolage_Grotesque, Familjen_Grotesk, Fraunces, Geist, Hanken_Grotesk,
  Instrument_Sans, Instrument_Serif, Literata, Public_Sans, Young_Serif,
} from "next/font/google";
import "./globals.css";
import "@/preview/preview.css";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollMotion } from "@/components/ScrollMotion";
import { site } from "@/data/site";
import { PreviewPanel } from "@/preview/PreviewPanel";
import { PreviewSync } from "@/preview/store";

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

const fraunces = Fraunces({ subsets: ["latin", "latin-ext"], axes: ["opsz", "SOFT"], variable: "--f-fraunces", display: "swap", preload: false });
const hanken = Hanken_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--f-hanken", display: "swap", preload: false });
const iserif = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--f-iserif", display: "swap", preload: false });
const geist = Geist({ subsets: ["latin", "latin-ext"], variable: "--f-geist", display: "swap", preload: false });
const archivo = Archivo({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--f-archivo", display: "swap", preload: false });
const publicSans = Public_Sans({ subsets: ["latin", "latin-ext"], variable: "--f-public", display: "swap", preload: false });
const familjen = Familjen_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--f-familjen", display: "swap", preload: false });
const literata = Literata({ subsets: ["latin", "latin-ext"], axes: ["opsz"], variable: "--f-literata", display: "swap", preload: false });
const young = Young_Serif({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--f-young", display: "swap", preload: false });
const albert = Albert_Sans({ subsets: ["latin", "latin-ext"], variable: "--f-albert", display: "swap", preload: false });
const pairs = [fraunces, hanken, iserif, geist, archivo, publicSans, familjen, literata, young, albert].map((f) => f.variable).join(" ");

export const viewport: Viewport = {
  themeColor: "#edecf0", // --paper
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable} ${pairs}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-scan/dist/auto.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>
        <SmoothScroll />
        <ScrollMotion />
        <Header />
        {children}
        <PreviewSync />
        <PreviewPanel />
        <Analytics />
      </body>
    </html>
  );
}
