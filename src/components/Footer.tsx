import Link from "next/link";
import { nav, site } from "@/data/site";
import { SquircleLink } from "./Squircle";

type Props = { title?: string; text?: string; cta?: { href: string; label: string } };

export function Footer({
  title = "Masz ścianę do zrobienia?",
  text = "Wyślij zdjęcie i wymiary, odpiszę z orientacyjnym kosztem i terminem oględzin.",
  cta = { href: "/wycena", label: "Bezpłatna wycena" },
}: Props) {
  return (
    <footer className="deep surface bands-t" id="kontakt">
      <section className="cta wrap">
        <h2>{title}</h2>
        <div className="cta__side">
          <p>{text}</p>
          <SquircleLink href={cta.href} className="btn btn--light btn--lg">{cta.label} <span className="arr" aria-hidden="true">→</span></SquircleLink>
          <a href={site.phoneHref} className="ulink">{site.phone}</a>
        </div>
      </section>
      <div className="foot wrap">
        <p className="foot__mark">{site.name}</p>
        <div className="foot__meta">
          <span>{site.tagline}</span>
          <a href={site.emailHref}>{site.email}</a>
          <span>{site.region}</span>
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
    </footer>
  );
}
