"use client";

import Link from "next/link";
import { createElement, useLayoutEffect, useRef, type ComponentPropsWithoutRef, type ElementType, type JSX } from "react";

/**
 * Superelipsa (|x/e|^n + |y/e|^n = 1) próbkowana na łamaną — działa w każdej
 * przeglądarce obsługującej `clip-path: path()` (Chrome 88, Safari 13.1, Firefox 97).
 * `radius` to promień widoczny, narożnik zajmuje `radius * 1.6` wzdłuż krawędzi.
 */
export function squirclePath(w: number, h: number, radius: number, n = 4, steps = 14): string {
  const e = Math.min(radius * 1.6, w / 2, h / 2);
  if (e <= 0) return `M0 0H${w}V${h}H0Z`;
  const pts: string[] = [];
  const corner = (cx: number, cy: number, sx: number, sy: number, from: number, to: number) => {
    for (let i = 0; i <= steps; i++) {
      const t = from + ((to - from) * i) / steps;
      const x = cx + sx * e * Math.pow(Math.abs(Math.cos(t)), 2 / n);
      const y = cy + sy * e * Math.pow(Math.abs(Math.sin(t)), 2 / n);
      pts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
    }
  };
  corner(w - e, e, 1, -1, 0, Math.PI / 2);        // prawy górny: od (w, e) do (w-e, 0)
  corner(e, e, -1, -1, Math.PI / 2, Math.PI);     // lewy górny
  corner(e, h - e, -1, 1, Math.PI, Math.PI * 1.5); // lewy dolny
  corner(w - e, h - e, 1, 1, Math.PI * 1.5, Math.PI * 2); // prawy dolny
  return `M${pts[0]}L${pts.slice(1).join("L")}Z`;
}

export function useSquircle<T extends HTMLElement>(radius: number) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width && height) el.style.clipPath = `path("${squirclePath(Math.round(width), Math.round(height), radius)}")`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radius]);
  return ref;
}

type Props<T extends ElementType> = { as?: T; radius?: number } & ComponentPropsWithoutRef<T>;

/** `as` przyjmuje tylko nazwy tagów — komponent jest używany z Server Components, więc nie może dostać funkcji. */
export function Squircle<T extends keyof JSX.IntrinsicElements = "div">({ as, radius = 14, style, ...rest }: Props<T>) {
  const ref = useSquircle<HTMLElement>(radius);
  return createElement(as ?? "div", { ref, style: { borderRadius: radius, ...style }, ...rest });
}

export function SquircleLink({ radius = 14, style, ...rest }: { radius?: number } & ComponentPropsWithoutRef<typeof Link>) {
  const ref = useSquircle<HTMLAnchorElement>(radius);
  return <Link ref={ref} style={{ borderRadius: radius, ...style }} {...rest} />;
}
