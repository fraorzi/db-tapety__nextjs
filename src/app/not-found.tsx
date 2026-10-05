import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Nie ma takiej strony",
};

export default function NotFound() {
  return (
    <>
      <main className="surface nf">
        <svg className="nf__icon" viewBox="24 7 130 130" aria-hidden="true">
          <rect x="30" y="12" width="23" height="120" rx="1.5" />
          <rect x="57" y="12" width="23" height="120" rx="1.5" />
          <path d="M83 52a6 6 0 0 1 12 0v9h9.5a1.5 1.5 0 0 1 1.5 1.5v68a1.5 1.5 0 0 1-1.5 1.5h-20a1.5 1.5 0 0 1-1.5-1.5z" />
          <rect x="109" y="61" width="24" height="71" rx="1.5" />
          <path d="M92.6 42h47.9a7.5 7.5 0 0 1 7.5 7.5v6a1.5 1.5 0 0 1-1.5 1.5H100a1.5 1.5 0 0 1-1.5-1.5v-8a10.5 10.5 0 0 0-5.9-5.5z" />
        </svg>
        <h1 className="h2">Tu jeszcze nie ma tapety.</h1>
        <p>Strona pod tym adresem nie istnieje albo zmieniła miejsce. Zacznij od strony głównej albo zobacz, jakie ściany już stoją.</p>
        <div className="nf__actions">
          <Link href="/" className="btn">Strona główna <Arrow /></Link>
          <Link href="/realizacje" className="ulink">Zobacz realizacje</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
