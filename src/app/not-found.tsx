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
          <defs>
            <pattern id="nf-print" x="45" y="26" width="30" height="40" patternUnits="userSpaceOnUse">
              <rect className="nf__ground" width="30" height="40" />
              <rect className="nf__stripe" width="15" height="40" />
              <g className="nf__motif">
                <circle cx="7.5" cy="7" r="2.4" />
                <circle cx="7.5" cy="13" r="2.4" />
                <circle cx="4.5" cy="10" r="2.4" />
                <circle cx="10.5" cy="10" r="2.4" />
              </g>
              <circle className="nf__eye" cx="7.5" cy="10" r="1.3" />
              <circle className="nf__motif" cx="22.5" cy="30" r="1.6" />
              <circle className="nf__motif" cx="7.5" cy="30" r="1" />
            </pattern>
          </defs>
          <path className="nf__drop" d="M53 70h150v106l-46 46H53z" />
          <path className="nf__sheet" d="M45 62h150v106l-46 46H45z" fill="url(#nf-print)" />
          <path className="nf__shade" d="M195 168l-46 46-6-30 14-14z" />
          <path className="nf__flap" d="M195 168l-46 46 6-40z" />
          <rect x="45" y="26" width="150" height="36" fill="url(#nf-print)" />
          <rect className="nf__roll-light" x="46.5" y="27.5" width="147" height="7" />
          <rect className="nf__roll-dark" x="46.5" y="51" width="147" height="9.5" />
          <rect className="nf__outline" x="45" y="26" width="150" height="36" />
          <ellipse className="nf__end" cx="195" cy="44" rx="9" ry="18" />
          <path className="nf__spiral" d="M195 44c1.5 0 2-1.6 2-3.2s-1-3.6-2.6-3.6-3 2.4-3 6.2 1.8 7.8 4.2 7.8 4.6-4.4 4.6-9.6-2.4-11-6-11" />
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
