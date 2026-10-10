import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

/** Rozmiar nagłówka dla poziomu (tokeny w theme.css). */
const sizes = {
  1: "text-display",
  2: "text-h2",
  3: "text-h3",
  4: "text-h4",
} as const;

export type HeadingLevel = keyof typeof sizes;

type Props<T extends ElementType> = {
  /** Poziom: rozmiar i domyślny tag (1 → h1 w rozmiarze display, 2 → h2…). */
  level?: HeadingLevel;
  /** Inny tag niż wynika z poziomu, np. h1 w rozmiarze h2 albo link w rozmiarze h2. */
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/**
 * Nagłówek w kroju display (Archivo zwężony, 700, tracking −0.02em).
 * Rozmiar z `level`; jednorazowy rozmiar sekcji przez className, nadpisuje domyślny.
 *
 *   <Heading level={2} id="faq-title">Zanim napiszesz</Heading>
 *   <Heading level={2} as="h1">Tu jeszcze nie ma tapety.</Heading>
 *   <Heading level={3} className="text-[clamp(1.2rem,1.7vw,1.6rem)]">…</Heading>
 */
export function Heading<T extends ElementType = "h2">({ level = 2, as, className, ...rest }: Props<T>) {
  const Tag: ElementType = as ?? `h${level}`;
  const isHeadingTag = typeof Tag === "string" && /^h[1-6]$/.test(Tag);
  return <Tag data-heading={isHeadingTag ? undefined : ""} className={cn(sizes[level], className)} {...rest} />;
}
