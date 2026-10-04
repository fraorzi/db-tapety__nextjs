import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nie ma takiej strony",
};

const top = "M262 34C214 86 184 118 156 156C128 194 96 222 58 266L-20 266V-20H262Z";
const base = "M266.4 38.1 262.8 41.9 259.3 45.7 255.9 49.4 252.5 53.1 249.2 56.7 246 60.2 242.8 63.7 239.6 67.1 236.6 70.4 233.5 73.7 230.6 77 227.7 80.1 224.8 83.3 222 86.4 219.2 89.5 216.5 92.5 213.8 95.5 211.2 98.4 208.6 101.3 206 104.2 203.5 107.1 201 109.9 198.5 112.7 196.1 115.5 193.7 118.3 191.4 121.1 189.1 123.8 186.8 126.6 184.5 129.3 182.3 132 180 134.7 177.8 137.5 175.7 140.2 173.5 142.9 171.4 145.7 169.2 148.4 167.1 151.2 165 154 162.9 156.7 160.8 159.6 158.7 162.4 156.5 165.3 154.4 168.1 152.2 170.9 150 173.6 147.8 176.3 145.5 179 143.3 181.7 141 184.3 138.7 187 136.5 189.6 134.1 192.2 131.8 194.8 129.5 197.4 127.1 200 124.8 202.5 122.4 205.1 120 207.7 117.6 210.3 115.1 212.9 112.7 215.5 110.2 218.1 107.7 220.7 105.2 223.3 102.7 226 100.1 228.7 97.6 231.4 95 234.1 92.4 236.9 89.8 239.7 87.2 242.5 84.5 245.4 81.8 248.3 79.1 251.2 76.4 254.2 73.7 257.3 70.9 260.3 68.2 263.5 65.4 266.7 62.5 269.9L-20 266V-20H262Z";
const flap = "M196.5 106 194 108.8 191.6 111.6 189.2 114.4 186.8 117.2 184.5 120 182.2 122.7 179.9 125.5 177.6 128.2 175.4 131 173.2 133.7 171 136.5 168.8 139.2 166.6 142 164.5 144.8 162.3 147.5 160.2 150.3 158.1 153.2 156 156 153.9 158.8 151.8 161.6 149.6 164.4 147.5 167.1 145.3 169.8 143.1 172.5 140.9 175.2 138.7 177.8 136.5 180.4 134.2 183 132 185.6 129.7 188.2 127.4 190.8 125 193.3C132.4 200.1 195.2 203.7 197 201.3C199.5 198.1 201 109.9 196.5 106Z";
const crease = "M197.4 106.8 194.9 109.6 192.5 112.4 190.1 115.2 187.7 118 185.4 120.7 183.1 123.5 180.8 126.2 178.6 129 176.3 131.7 174.1 134.5 171.9 137.2 169.7 140 167.6 142.7 165.4 145.5 163.3 148.3 161.2 151.1 159.1 153.9 157 156.7 154.9 159.6 152.7 162.4 150.6 165.1 148.4 167.9 146.2 170.6 144.1 173.3 141.8 175.9 139.6 178.6 137.4 181.2 135.1 183.8 132.9 186.4 130.6 189 128.3 191.6 125.9 194.1";
const glue = "M239.6 67.1l47.7 36.4 M182.3 132l47.7 36.4 M124.8 202.5l47.7 36.4 M79.1 251.2l47.7 36.4";

export default function NotFound() {
  return (
    <>
      <main className="surface nf">
        <svg className="nf__icon" viewBox="0 0 240 240" aria-hidden="true">
          <defs>
            <pattern id="nf-print" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect className="nf__paper" width="40" height="40" />
              <rect className="nf__stripe" x="12" width="16" height="40" />
              <rect className="nf__line" x="11" width="1" height="40" />
              <rect className="nf__line" x="28" width="1" height="40" />
              <path className="nf__motif" d="M20 6l4 6-4 6-4-6zM20 26l4 6-4 6-4-6z" />
              <circle className="nf__dot" cx="0" cy="20" r="1.4" />
              <circle className="nf__dot" cx="40" cy="20" r="1.4" />
            </pattern>
            <filter id="nf-rough" filterUnits="userSpaceOnUse" x="-40" y="-40" width="320" height="320">
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="coarse" />
              <feDisplacementMap in="SourceGraphic" in2="coarse" scale="9" xChannelSelector="R" yChannelSelector="G" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="8" result="fine" />
              <feDisplacementMap in="shape" in2="fine" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="nf-rough-alt" filterUnits="userSpaceOnUse" x="-40" y="-40" width="320" height="320">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="11" result="coarse" />
              <feDisplacementMap in="SourceGraphic" in2="coarse" scale="15" xChannelSelector="G" yChannelSelector="R" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="5" result="fine" />
              <feDisplacementMap in="shape" in2="fine" scale="4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="nf-rough-flap" filterUnits="userSpaceOnUse" x="-40" y="-40" width="320" height="320">
              <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="21" result="coarse" />
              <feDisplacementMap in="SourceGraphic" in2="coarse" scale="10" xChannelSelector="R" yChannelSelector="G" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="6" result="fine" />
              <feDisplacementMap in="shape" in2="fine" scale="3.4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="nf-rough-fine" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="2" />
              <feDisplacementMap in="SourceGraphic" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="nf-grain" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="4" />
              <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.16  0 0 0 0 0.24  0 0 0 -1.6 1.05" />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
            <filter id="nf-blur" filterUnits="userSpaceOnUse" x="-40" y="-40" width="320" height="320">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
            <filter id="nf-blur-wide" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            <mask id="nf-top" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="240">
              <path d={top} fill="#fff" filter="url(#nf-rough)" />
            </mask>
            <mask id="nf-base" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="240">
              <path d={base} fill="#fff" filter="url(#nf-rough-alt)" />
            </mask>
            <mask id="nf-flap" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="240">
              <path d={flap} fill="#fff" filter="url(#nf-rough-flap)" />
            </mask>
            <linearGradient id="nf-lift" gradientUnits="userSpaceOnUse" x1="162.3" y1="147.5" x2="149.6" y2="137.8">
              <stop offset="0" className="nf__lift-a" />
              <stop offset="1" className="nf__lift-b" />
            </linearGradient>
            <linearGradient id="nf-curl" gradientUnits="userSpaceOnUse" x1="153.9" y1="158.8" x2="197" y2="201.3">
              <stop offset="0" className="nf__curl-a" />
              <stop offset="0.18" className="nf__curl-b" />
              <stop offset="0.6" className="nf__curl-c" />
              <stop offset="1" className="nf__curl-d" />
            </linearGradient>
          </defs>
          <rect className="nf__wall" width="240" height="240" />
          <path className="nf__glue" d={glue} />
          <rect width="240" height="240" filter="url(#nf-grain)" opacity="0.4" />
          <rect className="nf__scrap" x="225.1" y="90.4" width="7" height="4" transform="rotate(20 228.6 92.4)" filter="url(#nf-rough-fine)" />
          <rect className="nf__scrap" x="172.3" y="151.2" width="5" height="3" transform="rotate(-15 174.8 152.7)" filter="url(#nf-rough-fine)" />
          <rect className="nf__scrap" x="109.8" y="219.5" width="8" height="4" transform="rotate(35 113.8 221.5)" filter="url(#nf-rough-fine)" />
          <rect className="nf__scrap" x="104.7" y="243.6" width="4" height="3" transform="rotate(10 106.7 245.1)" filter="url(#nf-rough-fine)" />
          <rect className="nf__scrap" x="249.3" y="82.7" width="4" height="2.5" transform="rotate(-30 251.3 83.9)" filter="url(#nf-rough-fine)" />
          <g filter="url(#nf-blur)" transform="translate(1.5 2.5)">
            <rect className="nf__cast" width="240" height="240" mask="url(#nf-base)" />
          </g>
          <rect className="nf__core" width="240" height="240" mask="url(#nf-base)" />
          <g mask="url(#nf-top)">
            <rect width="240" height="240" fill="url(#nf-print)" />
            <rect width="240" height="240" filter="url(#nf-grain)" opacity="0.16" />
            <rect width="240" height="240" fill="url(#nf-lift)" />
          </g>
          <g filter="url(#nf-blur-wide)" transform="translate(10 12)">
            <path className="nf__cast" d={flap} />
          </g>
          <g mask="url(#nf-flap)">
            <path d={flap} fill="url(#nf-curl)" />
            <path d={flap} filter="url(#nf-grain)" opacity="0.14" />
          </g>
          <path className="nf__crease" d={crease} />
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
