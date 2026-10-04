import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nie ma takiej strony",
};

export default function NotFound() {
  return (
    <>
      <main className="surface nf">
        <svg className="nf__icon" viewBox="0 0 240 240" aria-hidden="true">
          <rect x="34" y="36" width="38" height="168" />
          <rect x="80" y="36" width="38" height="168" />
          <rect x="126" y="36" width="38" height="168" />
          <rect x="172" y="82" width="38" height="122" />
          <path className="nf__peel" d="M150 50h60a13 13 0 0 1 0 26h-60z" />
          <path className="nf__curl" d="M201 53a12 12 0 0 1 0 20" />
        </svg>
        <h1 className="h2">Tu jeszcze nie ma tapety.</h1>
        <p>Strona pod tym adresem nie istnieje albo zmieniła miejsce. Zacznij od strony głównej albo zobacz, jakie ściany już stoją.</p>
        <div className="nf__actions">
          <Link href="/" className="btn">Strona główna <span className="arr" aria-hidden="true">→</span></Link>
          <Link href="/realizacje" className="ulink">Zobacz realizacje</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
