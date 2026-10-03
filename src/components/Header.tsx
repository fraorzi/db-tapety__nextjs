"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { Squircle, SquircleLink } from "./Squircle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);
  const dock = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    const footer = document.getElementById("kontakt");
    let pastTop = false;
    let atFooter = false;
    const sync = () => setDocked(pastTop && !atFooter);
    const onScroll = () => {
      pastTop = window.scrollY > window.innerHeight * 0.6;
      sync();
    };
    const io = new IntersectionObserver(([e]) => {
      atFooter = e.isIntersecting;
      sync();
    }, { rootMargin: "0px 0px -35% 0px" });
    if (footer) io.observe(footer);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Element;
      if (!dock.current?.contains(t) && !t.closest(".nav__burger")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <>
      <header className="nav" data-on-media={pathname === "/"}>
        <Link href="/" className="nav__brand">{site.name}</Link>
        <nav className="nav__links" aria-label="Główna">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`ulink${pathname.startsWith(n.href) ? " ulink--on" : ""}`}>{n.label}</Link>
          ))}
        </nav>
        <div className="nav__right">
          <SquircleLink href="/wycena" radius={11} className="btn nav__cta">Bezpłatna wycena</SquircleLink>
          <button type="button" className="nav__burger ulink" aria-expanded={open} aria-controls="dock-panel" onClick={() => setOpen((o) => !o)}>
            Menu
          </button>
        </div>
      </header>

      <div ref={dock} className="dock" data-show={docked || open} data-open={open}>
        <Squircle radius={20} className="dock__box">
          <div className="dock__panel" id="dock-panel" aria-hidden={!open}>
            <div>
              <nav aria-label="Menu">
                <Link href="/" tabIndex={open ? 0 : -1} onClick={close} aria-current={pathname === "/" ? "page" : undefined}>Start</Link>
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1} onClick={close} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>{n.label}</Link>
                ))}
              </nav>
              <div className="dock__meta">
                <a href={site.phoneHref} tabIndex={open ? 0 : -1}>{site.phone}</a>
                <a href={site.emailHref} tabIndex={open ? 0 : -1}>{site.email}</a>
              </div>
            </div>
          </div>
          <div className="dock__bar">
            <button type="button" className="dock__toggle" aria-expanded={open} aria-controls="dock-panel" onClick={() => setOpen((o) => !o)}>
              <span className="dock__icon" aria-hidden="true" />
              {open ? "Zamknij" : "Menu"}
            </button>
            <SquircleLink href="/wycena" radius={13} className="btn dock__cta" onClick={close}>Bezpłatna wycena</SquircleLink>
          </div>
        </Squircle>
      </div>
    </>
  );
}
