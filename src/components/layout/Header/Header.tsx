"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { lockScroll } from "@/components/motion/SmoothScroll";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";
import { NavRow } from "./NavRow";

/**
 * Nawigacja: zwykły pasek u góry odjeżdża z treścią. Po przewinięciu ~60 % ekranu z góry zjeżdża
 * przypięty bakłażanowy pasek o tym samym układzie, z pasami tonalnymi pod spodem; w nim menu mobilne.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const toggle = () => setOpen((o) => !o);
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
      if (!bar.current?.contains(t) && !t.closest("[data-burger]")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    lockScroll(true);
    return () => {
      lockScroll(false);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const row = { pathname, open, onToggle: toggle, onNavigate: close };

  return (
    <>
      <NavRow
        {...row}
        as="header"
        label="Główna"
        className={cn("absolute inset-x-0 top-0 z-50", pathname === "/" && "text-on-deep")}
      />

      <div
        ref={bar}
        className={cn(
          "group/bar fixed inset-x-0 top-0 z-60 tone-deep shadow-bands",
          "pointer-events-none -translate-y-[calc(100%+2*var(--spacing-band))] transition-transform duration-700",
          "data-show:pointer-events-auto data-show:translate-y-0",
        )}
        data-show={shown || undefined}
        data-open={open || undefined}
        inert={!shown}
      >
        <NavRow {...row} pinned label="Główna, przypięta" />
        <MobileMenu open={open} pathname={pathname} onNavigate={close} />
      </div>
    </>
  );
}
