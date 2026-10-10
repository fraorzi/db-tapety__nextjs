import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "Nie ma takiej strony",
};

export default function NotFound() {
  return (
    <>
      <main className="relative z-1 grid min-h-svh content-center justify-items-center gap-5 bg-paper px-page pt-[clamp(7rem,16vh,10rem)] pb-[clamp(4rem,10vh,7rem)] text-center">
        <svg className="mb-5 h-auto w-[clamp(7rem,12vw,9.5rem)] fill-deep" viewBox="24 7 130 130" aria-hidden="true">
          <rect x="30" y="12" width="23" height="120" rx="1.5" />
          <rect x="57" y="12" width="23" height="120" rx="1.5" />
          <path d="M83 52a6 6 0 0 1 12 0v9h9.5a1.5 1.5 0 0 1 1.5 1.5v68a1.5 1.5 0 0 1-1.5 1.5h-20a1.5 1.5 0 0 1-1.5-1.5z" />
          <rect x="109" y="61" width="24" height="71" rx="1.5" />
          <path d="M92.6 42h47.9a7.5 7.5 0 0 1 7.5 7.5v6a1.5 1.5 0 0 1-1.5 1.5H100a1.5 1.5 0 0 1-1.5-1.5v-8a10.5 10.5 0 0 0-5.9-5.5z" />
        </svg>
        <h1 className="max-w-[16ch] text-h2">Tu jeszcze nie ma tapety.</h1>
        <p className="max-w-[42ch] text-muted">Strona pod tym adresem nie istnieje albo została przeniesiona. Wróć na stronę główną albo zobacz realizacje.</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Button href="/">Strona główna <Arrow /></Button>
          <TextLink href="/realizacje">Zobacz realizacje</TextLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
