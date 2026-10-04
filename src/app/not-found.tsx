import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nie ma takiej strony",
};

const tear = "M240 0V64.3L240.3 64.3 236.4 67.6 234.8 72.9 230.3 75.7 225.3 78.1 221.2 81.2 218.1 85.2 215.7 89.8 213.7 94.7 212 99.9 204.9 100.4 202.4 105 198 107.9 196.5 113.2 193.5 117.4 189.7 120.8 189.4 127.1 187.1 131.8 178.8 131.4 176 135.6 174.7 141.2 167.9 142 171.2 151.6 164.2 152.2 159.5 154.8 156.2 158.6 150.6 160.5 151.1 167.6 147 170.7 144.7 175.4 143.9 181.4 137.6 182.7 132.7 185.1 128.8 188.4 124 190.9 123.1 196.8 124.2 204.4 117.9 205.7 114.8 209.7 111.1 213.2 104.8 214.5 103.6 220.1 102.3 225.6 99.4 229.8 96.4 233.9 91.3 236.1 87.2 239.3H0V0Z";
const fringe = "M240.3 64.3 236.4 67.6 234.8 72.9 230.3 75.7 225.3 78.1 221.2 81.2 218.1 85.2 215.7 89.8 213.7 94.7 212 99.9 204.9 100.4 202.4 105 198 107.9 196.5 113.2 193.5 117.4 189.7 120.8 189.4 127.1 187.1 131.8 178.8 131.4 176 135.6 174.7 141.2 167.9 142 171.2 151.6 164.2 152.2 159.5 154.8 156.2 158.6 150.6 160.5 151.1 167.6 147 170.7 144.7 175.4 143.9 181.4 137.6 182.7 132.7 185.1 128.8 188.4 124 190.9 123.1 196.8 124.2 204.4 117.9 205.7 114.8 209.7 111.1 213.2 104.8 214.5 103.6 220.1 102.3 225.6 99.4 229.8 96.4 233.9 91.3 236.1 87.2 239.3L90.5 242.2 94.5 238.9 99.7 236.8 101.9 232 104.6 227.6 105 221.3 108.2 217.3 113.2 215 116.6 211.3 119.4 207 127.2 207.1 124.5 198 125.5 192.2 130.4 189.8 135.1 187.1 138.9 183.7 146.8 183.9 146.8 177.2 148.9 172.4 154.3 170.4 154.2 163.6 159 161 162.4 157.3 165.6 153.3 174.1 154 170.3 144.1 178.2 144.2 179.2 138.4 181.1 133.4 189.7 134.1 192 129.4 192.6 123.3 195.5 119.1 199.8 116.1 200.6 110.2 205.5 107.6 207.7 102.9 213.3 101 216.1 96.8 217.3 91.2 221.1 87.8 223.5 83.1 226.8 79.4 233.9 78.8 236.8 74.6 239.4 70.2 243.7 67.2Z";
const curl = "M202.4 105 198 107.9 196.5 113.2 193.5 117.4 189.7 120.8 189.4 127.1 187.1 131.8 178.8 131.4 176 135.6 174.7 141.2 167.9 142 171.2 151.6 164.2 152.2 159.5 154.8 156.2 158.6 150.6 160.5C167.3 174.9 202.9 177.3 209.5 169.7C217.3 160.7 220.6 120.7 202.4 105Z";

export default function NotFound() {
  return (
    <>
      <main className="surface nf">
        <svg className="nf__icon" viewBox="0 0 240 240" aria-hidden="true">
          <defs>
            <pattern id="nf-paper" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect className="nf__paper" width="40" height="40" />
              <rect className="nf__stripe" x="12" width="16" height="40" />
              <rect className="nf__line" x="11" width="1" height="40" />
              <rect className="nf__line" x="28" width="1" height="40" />
              <path className="nf__motif" d="M20 6l4 6-4 6-4-6zM20 26l4 6-4 6-4-6z" />
              <circle className="nf__dot" cx="0" cy="20" r="1.4" />
              <circle className="nf__dot" cx="40" cy="20" r="1.4" />
            </pattern>
            <filter id="nf-grain" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="4" />
              <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.16  0 0 0 0 0.24  0 0 0 -1.6 1.05" />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
            <filter id="nf-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <linearGradient id="nf-curl" gradientUnits="userSpaceOnUse" x1="174.6" y1="139.7" x2="209.5" y2="169.7">
              <stop offset="0" className="nf__curl-a" />
              <stop offset="0.55" className="nf__curl-b" />
              <stop offset="1" className="nf__curl-c" />
            </linearGradient>
          </defs>
          <rect className="nf__wall" width="240" height="240" />
          <rect width="240" height="240" filter="url(#nf-grain)" opacity="0.45" />
          <path className="nf__cast" d={tear} transform="translate(2.5 3)" filter="url(#nf-soft)" />
          <path d={tear} fill="url(#nf-paper)" />
          <path d={tear} filter="url(#nf-grain)" opacity="0.18" />
          <path className="nf__fringe" d={fringe} />
          <path className="nf__cast" d={curl} transform="translate(9 11)" filter="url(#nf-soft)" />
          <path d={curl} fill="url(#nf-curl)" />
          <path d={curl} filter="url(#nf-grain)" opacity="0.15" />
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
