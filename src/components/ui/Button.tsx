import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  /** Główny: bakłażan z jasną ramką jak przy zdjęciach. */
  primary: "bg-accent text-on-deep shadow-frame hover:bg-accent-ink focus-visible:outline-offset-6",
  /** Grafitowy, bez ramki. */
  ink: "bg-ink text-paper hover:bg-ink-2 focus-visible:shadow-inset-light focus-visible:outline-none",
  /** Jasnoszary, drugorzędny (strzałki sliderów). */
  soft: "bg-paper-2 text-ink hover:bg-paper-3 focus-visible:shadow-inset-ink focus-visible:outline-none",
  /** Jasny na ciemnym tle (stopka, proces na /). */
  light: "bg-on-deep text-deep hover:bg-paper-2 focus-visible:shadow-inset-light focus-visible:outline-none",
  /** Jasny z ramką, w przypiętym bakłażanowym pasku nawigacji. */
  inverse: "bg-on-deep text-deep shadow-frame hover:bg-paper-3 focus-visible:shadow-inset-bar focus-visible:outline-offset-6",
} as const;

const sizes = {
  sm: "min-h-[2.6rem] px-[1.1rem] py-[0.7rem] text-md",
  md: "min-h-13 px-[1.45rem] py-4 text-base",
  lg: "min-h-15 px-[1.8rem] py-[1.2rem] text-[1.1rem]",
  /** Kwadrat 48 px na samą ikonę (podaj aria-label). */
  icon: "min-h-12 w-12 p-0 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type Style = { variant?: ButtonVariant; size?: ButtonSize; className?: string };

/** Klasy przycisku, gdy trzeba je nadać innemu elementowi. */
export function buttonClass({ variant = "primary", size = "md", className }: Style = {}) {
  return cn(
    "inline-flex items-center justify-center gap-[0.7rem] whitespace-nowrap",
    "font-display leading-none font-semibold font-stretch-78% tracking-[-0.01em]",
    "transition-[background-color,translate,opacity] duration-250 active:translate-y-px",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

type AsButton = Style & ComponentProps<"button"> & { href?: undefined };
type AsLink = Style & ComponentProps<typeof Link>;

/**
 * Kwadratowy przycisk. Z `href` renderuje link (next/link), bez niego `<button type="button">`.
 *
 *   <Button href="/wycena">Bezpłatna wycena <Arrow /></Button>
 *   <Button type="submit" variant="light">Oddzwoń <Arrow /></Button>
 *   <Button variant="soft" size="icon" aria-label="Następny"><Chevron dir="right" /></Button>
 */
export function Button(props: AsButton | AsLink) {
  const { variant, size, className, ...rest } = props;
  const classes = buttonClass({ variant, size, className });
  if (rest.href !== undefined) return <Link {...(rest as ComponentProps<typeof Link>)} className={classes} />;
  return <button type="button" {...(rest as ComponentProps<"button">)} className={classes} />;
}
