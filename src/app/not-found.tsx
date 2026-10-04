import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { videos } from "@/data/site";

export const metadata: Metadata = {
  title: "Nie ma takiej strony",
};

export default function NotFound() {
  return (
    <>
      <main className="surface">
        <section className="phero nf">
          <div className="grid12 phero__top">
            <h1 className="h-display">Tu jeszcze nie ma tapety.</h1>
            <p>Strona pod tym adresem nie istnieje albo zmieniła miejsce. Zacznij od strony głównej albo zobacz realizacje.</p>
          </div>
          <div className="hero__actions nf__actions">
            <Link href="/" className="btn">Strona główna <span className="arr" aria-hidden="true">→</span></Link>
            <Link href="/realizacje" className="ulink">Realizacje</Link>
            <Link href="/wycena" className="ulink">Bezpłatna wycena</Link>
          </div>
          <div className="nf__wall" aria-hidden="true">
            <Image src={videos.heroPoster} alt="" fill sizes="100vw" priority />
            <span className="nf__gap" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
