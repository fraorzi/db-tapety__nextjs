import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { VideoSources } from "@/components/VideoSources";
import { get, need } from "@/data/b2b";
import { projects } from "@/data/projects";
import { site, videos } from "@/data/site";
import { SegmentPicker } from "./SegmentPicker";
import { Flow } from "./Flow";
import { LokalSlider } from "./LokalSlider";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Dla firm",
  description: "Tapetowanie lokali, biur, apartamentów na wynajem i mieszkań deweloperskich. Praca poza godzinami, jedna wycena na całość, faktura VAT.",
};

const picks = [projects[4], projects[0]];
const slides = [...projects].sort((a, b) => Number(b.category === "Lokal") - Number(a.category === "Lokal"));

export default function DlaFirmPage() {
  return (
    <>
      <main className="surface">
        <section className="dip wrap b2bhero">
          <div className="dip__text">
            <h1 className="h-display">Lokal działa rano. Ja kończę w nocy.</h1>
            <p className="lead">Tapetowanie dla firm: lokale, biura, apartamenty na wynajem, mieszkania pod klucz. Jeden wykonawca, jedna wycena, harmonogram na piśmie.</p>
            <div className="hero__actions">
              <Link href="/wycena" className="btn">Zapytaj o wycenę <Arrow /></Link>
              <a href={site.phoneHref} className="ulink">{site.phone}</a>
            </div>
          </div>
          <div className="dip__media">
            <video className="media" autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
              <VideoSources video={videos.process[1]} />
            </video>
          </div>
        </section>

        <SegmentPicker />

        <Flow />

        <section className="twocol wrap" aria-label="Zasady współpracy">
          <div>
            <h2 className="h2">Czego potrzebuję od Was</h2>
            <ul>
              {need.map((n) => (
                <li key={n.t}><h3>{n.t}</h3><p>{n.d}</p></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h2">Co dostajecie</h2>
            <ul>
              {get.map((g) => (
                <li key={g.t}><h3>{g.t}</h3><p>{g.d}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <LokalSlider picks={picks} slides={slides} />

        <section className="iform wrap" style={{ borderTop: "1px solid var(--rule)" }} aria-labelledby="iform-title">
          <div className="iform__text">
            <h2 className="h2" id="iform-title">Zostaw numer, oddzwonię</h2>
            <p>W ciągu dnia roboczego. Albo wyślij od razu rzuty i zdjęcia przez formularz wyceny.</p>
          </div>
          <form action="/wycena" method="get">
            <div className="iform__row">
              <input type="tel" name="tel" placeholder="Numer telefonu" aria-label="Numer telefonu" autoComplete="tel" />
              <button type="submit" className="btn">Oddzwoń <Arrow /></button>
            </div>
            <small>Numer trafia do formularza wyceny, gdzie możesz dodać szczegóły. <Link href="/polityka-prywatnosci" className="ulink">Polityka prywatności</Link>.</small>
          </form>
        </section>
      </main>
      <Footer title="Macie lokal do zrobienia?" text="Wyślijcie rzuty albo zdjęcia, odpiszę z wyceną i harmonogramem." cta={{ href: "/wycena", label: "Zapytaj o wycenę" }} />
    </>
  );
}
