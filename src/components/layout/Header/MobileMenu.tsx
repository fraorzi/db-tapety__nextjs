import Link from "next/link";
import { nav, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Props = { open: boolean; pathname: string; onNavigate: () => void };

const order = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * Menu mobilne: jasny panel na resztę ekranu pod przypiętym paskiem i jego pasami.
 * Panel wjeżdża z boku, za nim kolejno linki, CTA i kontakt (`menu-reveal` + `--i`).
 * Otwarcie steruje `data-open` na pasku (`group/bar`).
 */
export function MobileMenu({ open, pathname, onNavigate }: Props) {
  const tab = open ? 0 : -1;
  const links = [{ href: "/", label: "Start" }, ...nav];

  return (
    <div
      id="nav-panel"
      aria-hidden={!open}
      data-lenis-prevent
      className={cn(
        "absolute inset-x-0 top-[calc(100%+2*var(--spacing-band))] h-[calc(100svh-100%-2*var(--spacing-band))]",
        "flex flex-col overflow-y-auto overscroll-contain bg-paper px-gutter pt-7 pb-8 text-ink [--focus:var(--color-accent)]",
        // zamknięty: za prawą krawędzią; visibility gaśnie dopiero po wyjeździe
        "invisible translate-x-full transition-[translate,visibility] duration-[550ms,0s] delay-[0s,550ms]",
        "group-data-open/bar:visible group-data-open/bar:translate-x-0 group-data-open/bar:delay-0 group-data-open/bar:duration-[700ms,0s]",
      )}
    >
      <nav aria-label="Menu" className="grid justify-items-start">
        {links.map((n, i) => {
          const current = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              tabIndex={tab}
              onClick={onNavigate}
              aria-current={current ? "page" : undefined}
              className="menu-reveal font-display text-[2.6rem] leading-[1.15] font-bold tracking-[-0.035em] hover:text-muted"
              style={order(i)}
            >
              {n.label}
              {current && <span className="ml-[0.6rem] inline-block size-[0.4rem] bg-accent align-middle" aria-hidden="true" />}
            </Link>
          );
        })}
      </nav>
      <div className="menu-reveal mt-8 flex self-start" style={order(links.length)}>
        <Button href="/wycena" tabIndex={tab} onClick={onNavigate} arrow>Bezpłatna wycena</Button>
      </div>
      <div className="menu-reveal mt-auto grid gap-[0.2rem] border-t border-rule pt-4 text-sm text-muted" style={order(links.length + 1)}>
        <a href={site.phoneHref} tabIndex={tab} className="hover:text-ink">{site.phone}</a>
        <a href={site.emailHref} tabIndex={tab} className="hover:text-ink">{site.email}</a>
      </div>
    </div>
  );
}
