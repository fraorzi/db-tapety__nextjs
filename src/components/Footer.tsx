import Link from "next/link";
import { nav, site } from "@/data/site";
import { Arrow } from "@/components/Arrow";

type Props = { title?: string; text?: string; cta?: { href: string; label: string } };

export function Footer({
  title = "Masz ścianę do zrobienia?",
  text = "Wyślij zdjęcie i wymiary, odpiszę z orientacyjnym kosztem i terminem oględzin.",
  cta = { href: "/wycena", label: "Bezpłatna wycena" },
}: Props) {
  return (
    <footer className="deep surface bands-t foot-wrap" id="kontakt">
      <section className="cta wrap">
        <h2>{title}</h2>
        <div className="cta__side">
          <p>{text}</p>
          <form action="/wycena" method="get" className="cta__form">
            <input type="tel" name="tel" placeholder="Numer telefonu" aria-label="Numer telefonu" autoComplete="tel" />
            <button type="submit" className="btn btn--light">Oddzwoń <Arrow /></button>
          </form>
          <Link href={cta.href} className="ulink">{cta.label}</Link>
        </div>
      </section>
      <div className="foot wrap">
        <div className="foot__meta">
          <span>{site.tagline}</span>
          <a href={site.emailHref}>{site.email}</a>
        </div>
        <nav className="foot__links" aria-label="Stopka">
          {nav.map((n) => <Link key={n.href} href={n.href} className="ulink">{n.label}</Link>)}
          <Link href="/wycena" className="ulink">Wycena</Link>
        </nav>
        <div className="foot__legal">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <Link href="/polityka-prywatnosci" className="ulink">Polityka prywatności</Link>
        </div>
      </div>
      <p className="foot__mark" aria-hidden="true">{site.name}</p>
    </footer>
  );
}
