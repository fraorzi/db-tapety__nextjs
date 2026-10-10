import { nav, site } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextLink } from "@/components/ui/TextLink";

type Props = { title?: string; text?: string; cta?: { href: string; label: string } };

/**
 * Stopka Ft1: bakłażanowe CTA z polem „zostaw numer” (wysyła na /wycena?tel=), kontakt, linki,
 * linia prawna i wordmark na całą szerokość, ucięty dolną krawędzią.
 */
export function Footer({
  title = "Masz ścianę do zrobienia?",
  text = "Wyślij zdjęcie i wymiary, odpiszę z orientacyjnym kosztem i terminem oględzin.",
  cta = { href: "/wycena", label: "Bezpłatna wycena" },
}: Props) {
  return (
    <footer className="relative z-1 overflow-hidden tone-deep bands-t" id="kontakt">
      <section className="grid grid-cols-12 items-end gap-x-gutter gap-y-8 px-page pt-section-lg pb-[clamp(3rem,8vh,5rem)] max-md:pt-[clamp(4rem,10vh,5.5rem)]">
        <h2 className="col-span-7 max-w-[12ch] text-display max-md:col-span-full max-md:max-w-none">{title}</h2>
        <div className="col-span-4 col-start-9 grid justify-items-start gap-5 max-md:col-span-full">
          <p className="max-w-[30ch] text-on-deep-muted">{text}</p>
          <form action="/wycena" method="get" className="grid w-full max-w-[26rem] grid-cols-[minmax(0,1fr)_auto] gap-2">
            <Input tone="deep" type="tel" name="tel" placeholder="Numer telefonu" aria-label="Numer telefonu" autoComplete="tel" />
            <Button type="submit" variant="light">Oddzwoń <Arrow /></Button>
          </form>
          <TextLink href={cta.href}>{cta.label}</TextLink>
        </div>
      </section>

      <div className="grid grid-cols-12 items-end gap-x-gutter gap-y-6 border-t border-on-deep-rule px-page pt-8 pb-6">
        <div className="col-span-6 grid gap-[0.3rem] text-md text-on-deep-muted max-md:col-span-full">
          <span>{site.tagline}</span>
          <a href={site.emailHref} className="text-on-deep">{site.email}</a>
        </div>
        <nav className="col-span-6 grid justify-items-start gap-[0.3rem] text-md max-md:col-span-full" aria-label="Stopka">
          {nav.map((n) => <TextLink key={n.href} href={n.href}>{n.label}</TextLink>)}
          <TextLink href="/wycena">Wycena</TextLink>
        </nav>
        <div className="col-span-full flex flex-wrap justify-between gap-4 border-t border-on-deep-rule pt-5 text-xs text-on-deep-muted">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <TextLink href="/polityka-prywatnosci">Polityka prywatności</TextLink>
        </div>
      </div>

      <p
        className="mt-4 mb-[-0.12em] text-center font-display text-[min(17.5vw,var(--container-page)*0.175)] leading-[0.8] font-extrabold font-stretch-78% tracking-[-0.045em] whitespace-nowrap text-deep-2 select-none max-md:text-[18vw]"
        aria-hidden="true"
      >
        {site.name}
      </p>
    </footer>
  );
}
