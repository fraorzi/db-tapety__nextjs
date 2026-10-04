import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/Arrow";
import { Frame } from "@/components/Frame";
import { Variant } from "@/preview/store";

type Props = { title?: string; text?: string; cta?: { href: string; label: string } };

export function Footer({
  title = "Masz ścianę do zrobienia?",
  text = "Wyślij zdjęcie i wymiary, odpiszę z orientacyjnym kosztem i terminem oględzin.",
  cta = { href: "/wycena", label: "Bezpłatna wycena" },
}: Props) {
  const links = (
    <nav className="foot__links" aria-label="Stopka">
      {nav.map((n) => <Link key={n.href} href={n.href} className="ulink">{n.label}</Link>)}
      <Link href="/wycena" className="ulink">Wycena</Link>
    </nav>
  );
  const legal = (
    <div className="foot__legal">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <Link href="/polityka-prywatnosci" className="ulink">Polityka prywatności</Link>
    </div>
  );
  const meta = (
    <div className="foot__meta">
      <span>{site.tagline}</span>
      <a href={site.emailHref}>{site.email}</a>
      <span>{site.region}</span>
    </div>
  );

  return (
    <Variant
      group="footer"
      options={{
        a: (
          <footer className="deep surface bands-t" id="kontakt">
            <section className="cta wrap">
              <h2>{title}</h2>
              <div className="cta__side">
                <p>{text}</p>
                <Link href={cta.href} className="btn btn--light btn--lg">{cta.label} <Arrow /></Link>
                <a href={site.phoneHref} className="ulink">{site.phone}</a>
              </div>
            </section>
            <div className="foot wrap">
              <p className="foot__mark">{site.name}</p>
              {meta}
              {links}
              {legal}
            </div>
          </footer>
        ),
        b: (
          <footer className="deep surface bands-t ftb" id="kontakt">
            <section className="cta wrap">
              <h2>{title}</h2>
              <div className="cta__side">
                <p>{text}</p>
                <form action="/wycena" method="get" className="ftb__form">
                  <input type="tel" name="tel" placeholder="Numer telefonu" aria-label="Numer telefonu" autoComplete="tel" />
                  <button type="submit" className="btn btn--light">Oddzwoń <Arrow /></button>
                </form>
                <Link href={cta.href} className="ulink">{cta.label}</Link>
              </div>
            </section>
            <div className="foot wrap">
              {meta}
              {links}
              {legal}
            </div>
            <p className="ftb__mark" aria-hidden="true">{site.name}</p>
          </footer>
        ),
        c: (
          <footer className="deep surface bands-t ftc" id="kontakt">
            <section className="wrap ftc__top">
              <div className="ftc__intro">
                <h2 className="h2">{title}</h2>
                <p>{text}</p>
              </div>
              <div className="ftc__contact">
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={site.emailHref}>{site.email}</a>
              </div>
              <Link href={cta.href} className="btn btn--light btn--lg">{cta.label} <Arrow /></Link>
            </section>
            <div className="wrap ftc__cols">
              <div>
                <h3>Firma</h3>
                <p>{site.name}</p>
                <p>{site.tagline}</p>
              </div>
              <div>
                <h3>Strony</h3>
                {links}
              </div>
              <div>
                <h3>Zasięg</h3>
                <p>{site.region}</p>
                <p>{site.regionNote}</p>
              </div>
              {legal}
            </div>
          </footer>
        ),
        d: (
          <footer className="surface bands-t ftd" id="kontakt">
            <section className="wrap ftd__top">
              <div className="ftd__text">
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="ftd__actions">
                  <Link href={cta.href} className="btn btn--lg">{cta.label} <Arrow /></Link>
                  <a href={site.phoneHref} className="ulink">{site.phone}</a>
                </div>
              </div>
              <Frame className="ftd__frame">
                <div className="media"><Image src={projects[0].cover} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
              </Frame>
            </section>
            <div className="foot wrap">
              <p className="foot__mark">{site.name}</p>
              {meta}
              {links}
              {legal}
            </div>
          </footer>
        ),
      }}
    />
  );
}
