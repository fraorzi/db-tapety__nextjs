"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { Arrow } from "@/components/Arrow";

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const shown = stuck || open;

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Element;
      if (!bar.current?.contains(t) && !t.closest(".nav__burger")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const row = (label: string) => (
    <>
      <Link href="/" className="nav__brand" onClick={close}>{site.name}</Link>
      <nav className="nav__links" aria-label={label}>
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className={`ulink${pathname.startsWith(n.href) ? " ulink--on" : ""}`}>{n.label}</Link>
        ))}
      </nav>
      <div className="nav__right">
        <Link href="/wycena" className="btn nav__cta" onClick={close}>Bezpłatna wycena</Link>
        <button type="button" className="nav__burger" aria-expanded={open} aria-controls="nav-panel" onClick={() => setOpen((o) => !o)}>
          <span className="nav__icon" aria-hidden="true" />
          {open ? "Zamknij" : "Menu"}
        </button>
      </div>
    </>
  );

  return (
    <>
      <header className="nav nav__row" data-on-media={pathname === "/"}>{row("Główna")}</header>

      <div ref={bar} className="bar" data-show={shown} data-open={open} inert={!shown}>
        <div className="nav__row bar__row">{row("Główna, przypięta")}</div>
        <div className="bar__panel" id="nav-panel" aria-hidden={!open}>
          <div>
            <nav aria-label="Menu">
              <Link href="/" tabIndex={open ? 0 : -1} onClick={close} aria-current={pathname === "/" ? "page" : undefined}>Start</Link>
              {nav.map((n) => (
                <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1} onClick={close} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>{n.label}</Link>
              ))}
            </nav>
            <Link href="/wycena" className="btn" tabIndex={open ? 0 : -1} onClick={close}>Bezpłatna wycena <Arrow /></Link>
            <div className="bar__meta">
              <a href={site.phoneHref} tabIndex={open ? 0 : -1}>{site.phone}</a>
              <a href={site.emailHref} tabIndex={open ? 0 : -1}>{site.email}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
