import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Squircle, SquircleLink } from "@/components/Squircle";
import { flow, get, need } from "@/data/b2b";
import { projects } from "@/data/projects";
import { site, videos } from "@/data/site";
import { SegmentPicker } from "./SegmentPicker";

export const metadata: Metadata = {
  title: "Dla firm",
  description: "Tapetowanie lokali, biur, apartamentów na wynajem i mieszkań deweloperskich. Praca poza godzinami, jedna wycena na całość, faktura VAT.",
};

const picks = [projects[4], projects[0]];

export default function DlaFirmPage() {
  return (
    <>
      <main className="surface">
        <section className="dip wrap b2bhero">
          <div className="dip__text">
            <h1 className="h-display">Lokal działa rano. Ja kończę w nocy.</h1>
            <p className="lead">Tapetowanie dla firm: lokale, biura, apartamenty na wynajem, mieszkania pod klucz. Jeden wykonawca, jedna wycena, harmonogram na piśmie.</p>
            <div className="hero__actions">
              <SquircleLink href="/wycena" className="btn">Zapytaj o wycenę <span className="arr" aria-hidden="true">→</span></SquircleLink>
              <a href={site.phoneHref} className="ulink">{site.phone}</a>
            </div>
          </div>
          <Squircle radius={18} className="dip__media">
            <video className="media" autoPlay muted loop playsInline preload="metadata" src={videos.process[1]} style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
          </Squircle>
        </section>

        <SegmentPicker />

        <section className="deep flow wrap bands-t bands-b" aria-labelledby="flow-title">
          <div className="sec-row">
            <div className="sec-head">
              <h2 className="h2" id="flow-title">Od zapytania do faktury</h2>
              <p>Pięć kroków. Na każdym wiecie, co się dzieje i kiedy.</p>
            </div>
          </div>
          <ol className="flow__track">
            {flow.map((f) => (
              <li className="flow__step" key={f.t}>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </li>
            ))}
          </ol>
        </section>

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

        <section className="wrap" style={{ paddingBottom: "clamp(4.5rem, 12vh, 9rem)" }} aria-labelledby="b2bwork-title">
          <div className="sec-row">
            <div className="sec-head">
              <h2 className="h2" id="b2bwork-title">Realizacje w lokalach</h2>
            </div>
            <Link href="/realizacje" className="ulink">Wszystkie realizacje</Link>
          </div>
          <div className="pgrid" style={{ paddingBottom: 0, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {picks.map((p) => <ProjectCard key={p.slug} project={p} detail sizes="(max-width: 900px) 100vw, 50vw" />)}
          </div>
        </section>

        <section className="iform wrap" style={{ borderTop: "1px solid var(--rule)" }} aria-labelledby="iform-title">
          <div className="iform__text">
            <h2 className="h2" id="iform-title">Zostaw numer, oddzwonię</h2>
            <p>W ciągu dnia roboczego. Albo wyślij od razu rzuty i zdjęcia przez formularz wyceny.</p>
          </div>
          <form action="/wycena" method="get">
            <div className="iform__row">
              <Squircle as="input" radius={14} type="tel" name="tel" placeholder="Numer telefonu" aria-label="Numer telefonu" autoComplete="tel" />
              <Squircle as="button" type="submit" className="btn">Oddzwoń <span className="arr" aria-hidden="true">→</span></Squircle>
            </div>
            <small>Numer trafia do formularza wyceny, gdzie możesz dodać szczegóły. <Link href="/polityka-prywatnosci" className="ulink">Polityka prywatności</Link>.</small>
          </form>
        </section>
      </main>
      <Footer title="Macie lokal do zrobienia?" text="Wyślijcie rzuty albo zdjęcia, odpiszę z wyceną i harmonogramem." cta={{ href: "/wycena", label: "Zapytaj o wycenę" }} />
    </>
  );
}
