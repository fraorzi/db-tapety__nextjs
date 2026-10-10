import Link from "next/link";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { MenuIcon } from "./MenuIcon";

type Props = {
  /** aria-label nawigacji (pasek u góry i przypięty mają różne). */
  label: string;
  pathname: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  /** Przypięty bakłażanowy pasek: mniejszy padding, jasne CTA. */
  pinned?: boolean;
  as?: "header" | "div";
  className?: string;
};

/** Wiersz nawigacji: marka, linki, CTA; na mobile marka i „Menu”. Ten sam układ u góry strony i w przypiętym pasku. */
export function NavRow({ label, pathname, open, onToggle, onNavigate, pinned, as: Tag = "div", className }: Props) {
  return (
    <Tag
      className={cn(
        "flex items-center justify-between gap-6 px-page",
        pinned ? "pt-[0.85rem] pb-[0.55rem]" : "py-[1.2rem]",
        className,
      )}
    >
      <Link href="/" className="font-display text-[1.05rem] font-bold font-stretch-78% tracking-[-0.02em] whitespace-nowrap" onClick={onNavigate}>
        {site.name}
      </Link>
      <nav className="flex gap-7 text-md font-medium max-md:hidden" aria-label={label}>
        {nav.map((n) => (
          <TextLink key={n.href} href={n.href} active={pathname.startsWith(n.href)}>{n.label}</TextLink>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <Button href="/wycena" size="sm" variant={pinned ? "inverse" : "primary"} className="max-md:hidden" onClick={onNavigate}>
          Bezpłatna wycena
        </Button>
        <button
          type="button"
          data-burger
          className="hidden min-h-[2.6rem] items-center gap-[0.6rem] text-md font-medium max-md:inline-flex"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={onToggle}
        >
          <MenuIcon />
          {open ? "Zamknij" : "Menu"}
        </button>
      </div>
    </Tag>
  );
}
