import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<ComponentProps<"a">, "href"> & {
  /** Ścieżka w witrynie („/…”) → next/link; tel:, mailto: i inne → zwykłe `<a>`; bez href → `<span>`. */
  href?: string;
  /** Podkreślenie widoczne na stałe (bieżąca strona w nawigacji). */
  active?: boolean;
  children: ReactNode;
};

/**
 * Drugorzędne CTA: tekst z cienkim podkreśleniem, które wjeżdża od lewej przy hoverze i fokusie.
 * Strzałka w środku dostaje odstęp sama: <TextLink href="/x">Dalej <Arrow /></TextLink>.
 */
export function TextLink({ href, active, className, children, ...rest }: Props) {
  const classes = cn(
    "relative inline-block w-fit font-medium whitespace-nowrap [&>svg]:ml-[0.35em]",
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500",
    "hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100",
    "data-active:after:origin-left data-active:after:scale-x-100",
    className,
  );
  const props = { ...rest, className: classes, "data-active": active || undefined };

  if (href === undefined) return <span {...props}>{children}</span>;
  if (href.startsWith("/")) return <Link href={href} {...props}>{children}</Link>;
  return <a href={href} {...props}>{children}</a>;
}
